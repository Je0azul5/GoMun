import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import './App.css';
import logoSrc from '/GoMun.png';

type AgendaEntry = {
  id: string;
  title: string;
  note?: string | null;
  date?: string | null;
  done: boolean;
  createdAt: string;
  userId: string;
};

type AgendaSection = {
  letter: string;
  visible: AgendaEntry[];
  totalPages: number;
  currentPage: number;
};

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';
const DEFAULT_USER_ID = (import.meta.env.VITE_DEFAULT_USER_ID ?? 'couple').trim() || 'couple';
const ITEMS_PER_PAGE = 5;

const isLatinLetter = (char: string) => /^[A-Z]$/.test(char);

const letterKey = (title: string | null | undefined) => {
  const initial = title?.trim().charAt(0).toUpperCase() ?? '';
  return isLatinLetter(initial) ? initial : '#';
};

function formatDate(value?: string | null) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function App() {
  const [entries, setEntries] = useState<AgendaEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'agenda' | 'search'>('agenda');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);
  const [pageByLetter, setPageByLetter] = useState<Record<string, number>>({});
  const [formState, setFormState] = useState({
    title: '',
    note: '',
    userId: DEFAULT_USER_ID,
  });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    let isMounted = true;

    async function loadEntries() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE}/api/entries`);

        if (!response.ok) {
          throw new Error(`Unable to load entries (${response.status})`);
        }

        const data: AgendaEntry[] = await response.json();
        if (isMounted) {
          setEntries(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unexpected error');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadEntries();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const totals: Record<string, number> = {};
    for (const entry of entries) {
      const key = letterKey(entry.title);
      totals[key] = (totals[key] ?? 0) + 1;
    }

    setPageByLetter((prev) => {
      let changed = false;
      const next: Record<string, number> = {};

      for (const [key, count] of Object.entries(totals)) {
        const totalPages = Math.max(1, Math.ceil(count / ITEMS_PER_PAGE));
        const current = prev[key] ?? 1;
        const safe = Math.min(Math.max(current, 1), totalPages);
        next[key] = safe;
        if (safe !== current) {
          changed = true;
        }
      }

      for (const key of Object.keys(prev)) {
        if (!(key in totals)) {
          changed = true;
        }
      }

      if (!changed) {
        if (Object.keys(prev).length === Object.keys(next).length) {
          let identical = true;
          for (const key of Object.keys(next)) {
            if (prev[key] !== next[key]) {
              identical = false;
              break;
            }
          }
          if (identical) {
            return prev;
          }
        }
      }

      return next;
    });
  }, [entries]);

  const groupedSections = useMemo<AgendaSection[]>(() => {
    const bucket = new Map<string, AgendaEntry[]>();

    for (const entry of entries) {
      const key = letterKey(entry.title);
      const group = bucket.get(key) ?? [];
      group.push(entry);
      bucket.set(key, group);
    }

    return Array.from(bucket.entries())
      .sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      .map(([letter, items]) => {
        const orderedItems = [...items].sort((first, second) =>
          first.title.localeCompare(second.title, undefined, { sensitivity: 'base' })
        );
        const totalPages = Math.max(1, Math.ceil(orderedItems.length / ITEMS_PER_PAGE));
        const currentPage = Math.min(
          Math.max(pageByLetter[letter] ?? 1, 1),
          totalPages
        );
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const visible = orderedItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
        return {
          letter,
          visible,
          totalPages,
          currentPage,
        };
      });
  }, [entries, pageByLetter]);

  const isEditing = editingEntryId !== null;

  const openNewEntry = () => {
    setActiveView('agenda');
    setEditingEntryId(null);
    setFormState({ title: '', note: '', userId: DEFAULT_USER_ID });
    setFormError(null);
    setIsFormOpen(true);
  };

  const openEditEntry = (entry: AgendaEntry) => {
    setEditingEntryId(entry.id);
    setFormState({
      title: entry.title,
      note: entry.note ?? '',
      userId: entry.userId ?? DEFAULT_USER_ID,
    });
    setFormError(null);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormError(null);
    setFormState({ title: '', note: '', userId: DEFAULT_USER_ID });
    setEditingEntryId(null);
  };

  const handleSubmitEntry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    const trimmedTitle = formState.title.trim();
    if (!trimmedTitle) {
      setFormError('Every dream needs a name.');
      return;
    }

    const payload: { title: string; note?: string; userId?: string } = {
      title: trimmedTitle,
    };

    if (formState.note.trim()) {
      payload.note = formState.note.trim();
    }

    if (!isEditing) {
      const trimmedUserId = formState.userId.trim();
      payload.userId = trimmedUserId || DEFAULT_USER_ID;
    }

    setSubmitting(true);

    try {
      const endpoint = isEditing
        ? `${API_BASE}/api/entries/${editingEntryId}`
        : `${API_BASE}/api/entries`;

      const response = await fetch(endpoint, {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Unable to save entry (${response.status})`);
      }

      const saved: AgendaEntry = await response.json();
      setEntries((prev) =>
        isEditing ? prev.map((entry) => (entry.id === saved.id ? saved : entry)) : [saved, ...prev]
      );
      if (!isEditing) {
        const key = letterKey(saved.title);
        setPageByLetter((prev) => ({ ...prev, [key]: 1 }));
      }
      closeForm();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Unable to save entry');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteEntry = async (entry: AgendaEntry) => {
    // eslint-disable-next-line no-alert
    const confirmation = window.confirm(`Erase "${entry.title}" from your dreams?`);
    if (!confirmation) return;

    setDeletingIds((prev) => {
      const next = new Set(prev);
      next.add(entry.id);
      return next;
    });

    try {
      const response = await fetch(`${API_BASE}/api/entries/${entry.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Unable to delete entry (${response.status})`);
      }

      setEntries((prev) => prev.filter((item) => item.id !== entry.id));
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert(err instanceof Error ? err.message : 'Unable to delete entry');
    } finally {
      setDeletingIds((prev) => {
        const next = new Set(prev);
        next.delete(entry.id);
        return next;
      });
    }
  };

  const handlePageChange = (letter: string, page: number) => {
    setPageByLetter((prev) => ({ ...prev, [letter]: page }));
  };

  return (
    <div className="agenda-shell">
      <header className="agenda-header">
        <div className="title-row">
          <img src={logoSrc} alt="GoMun emblem" className="brand-mark" />
          <h1>GoMun</h1>
        </div>
        <p>Every shared dream — one letter at a time.</p>
        <div className="agenda-header-actions">
          <nav className="agenda-nav" aria-label="Primary navigation">
            <button
              type="button"
              className={`nav-link${activeView === 'agenda' ? ' active' : ''}`}
              onClick={() => setActiveView('agenda')}
            >
              Library
            </button>
            <button
              type="button"
              className={`nav-link${activeView === 'search' ? ' active' : ''}`}
              onClick={() => setActiveView('search')}
            >
              Search
            </button>
          </nav>
          <button className="new-entry-button" type="button" onClick={openNewEntry}>
            + New Dream
          </button>
        </div>
      </header>

      {activeView === 'agenda' ? (
        <AgendaView
          sections={groupedSections}
          loading={loading}
          error={error}
          defaultUserId={DEFAULT_USER_ID}
          deletingIds={deletingIds}
          onEdit={openEditEntry}
          onDelete={handleDeleteEntry}
          onPageChange={handlePageChange}
        />
      ) : (
        <SearchView
          entries={entries}
          loading={loading}
          error={error}
          defaultUserId={DEFAULT_USER_ID}
          deletingIds={deletingIds}
          onEdit={openEditEntry}
          onDelete={handleDeleteEntry}
        />
      )}

      {isFormOpen && (
        <div className="entry-modal-backdrop" role="presentation" onClick={closeForm}>
          <div
            className="entry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="entry-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="entry-modal-header">
              <h2 id="entry-modal-title">{isEditing ? 'Edit Dream' : 'New Dream'}</h2>
              <button className="modal-close" type="button" onClick={closeForm} aria-label="Close">
                ×
              </button>
            </header>

            <form className="entry-form" onSubmit={handleSubmitEntry}>
              <label className="form-field">
                <span>Dream</span>
                <input
                  type="text"
                  name="title"
                  value={formState.title}
                  onChange={(event) => setFormState((prev) => ({ ...prev, title: event.target.value }))}
                  placeholder="Visit London"
                  required
                />
              </label>

              {!isEditing && (
                <label className="form-field">
                  <span>Dreamer</span>
                  <input
                    type="text"
                    name="userId"
                    value={formState.userId}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, userId: event.target.value }))
                    }
                    placeholder="couple"
                  />
                </label>
              )}

              <label className="form-field">
                <span>Note</span>
                <textarea
                  name="note"
                  value={formState.note}
                  onChange={(event) => setFormState((prev) => ({ ...prev, note: event.target.value }))}
                  placeholder="I'd like to go the moon with you someday."
                  rows={3}
                />
              </label>

              {formError && <p className="form-error">{formError}</p>}

              <footer className="form-actions">
                <button type="button" className="ghost-button" onClick={closeForm} disabled={submitting}>
                  Cancel
                </button>
                <button type="submit" disabled={submitting}>
                  {submitting
                    ? isEditing
                      ? 'Updating…'
                      : 'Inscribing…'
                    : isEditing
                      ? 'Update Dream'
                      : 'Save Dream'}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

type AgendaViewProps = {
  sections: AgendaSection[];
  loading: boolean;
  error: string | null;
  defaultUserId: string;
  deletingIds: Set<string>;
  onEdit: (entry: AgendaEntry) => void;
  onDelete: (entry: AgendaEntry) => void;
  onPageChange: (letter: string, page: number) => void;
};

function AgendaView({
  sections,
  loading,
  error,
  defaultUserId,
  deletingIds,
  onEdit,
  onDelete,
  onPageChange,
}: AgendaViewProps) {
  if (loading) {
    return <p className="agenda-status">Summoning your dreams adventures…</p>;
  }

  if (error) {
    return <p className="agenda-status error">{error}</p>;
  }

  if (sections.length === 0) {
    return <p className="agenda-status">Our first dream together.</p>;
  }

  return (
    <div className="book-wrapper">
      {sections.map(({ letter, visible, totalPages, currentPage }) => (
        <section key={letter} className="book-section">
          <header className="section-header">
            <span className="section-letter">{letter}</span>
          </header>

          <ul className="entries-list">
            {visible.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                defaultUserId={defaultUserId}
                isDeleting={deletingIds.has(entry.id)}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </ul>

          {totalPages > 1 && (
            <nav className="letter-pagination" aria-label={`Pages for letter ${letter}`}>
              <button
                type="button"
                className="pagination-button"
                onClick={() => onPageChange(letter, currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <div className="pagination-pages">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    className={`pagination-button${pageNumber === currentPage ? ' active' : ''}`}
                    onClick={() => onPageChange(letter, pageNumber)}
                    aria-current={pageNumber === currentPage ? 'page' : undefined}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="pagination-button"
                onClick={() => onPageChange(letter, currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </nav>
          )}
        </section>
      ))}
    </div>
  );
}

type SearchViewProps = {
  entries: AgendaEntry[];
  loading: boolean;
  error: string | null;
  defaultUserId: string;
  deletingIds: Set<string>;
  onEdit: (entry: AgendaEntry) => void;
  onDelete: (entry: AgendaEntry) => void;
};

function SearchView({
  entries,
  loading,
  error,
  defaultUserId,
  deletingIds,
  onEdit,
  onDelete,
}: SearchViewProps) {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalizedQuery) {
      return entries;
    }

    return entries.filter((entry) => {
      const haystack = [
        entry.title,
        entry.note ?? '',
        entry.userId ?? '',
        formatDate(entry.date),
        formatDate(entry.createdAt),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [entries, normalizedQuery]);

  const sections = useMemo<AgendaSection[]>(() => {
    const bucket = new Map<string, AgendaEntry[]>();

    for (const entry of filtered) {
      const key = letterKey(entry.title);
      const list = bucket.get(key) ?? [];
      list.push(entry);
      bucket.set(key, list);
    }

    return Array.from(bucket.entries())
      .sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      .map(([letter, items]) => ({
        letter,
        visible: [...items].sort((first, second) =>
          first.title.localeCompare(second.title, undefined, { sensitivity: 'base' })
        ),
        totalPages: 1,
        currentPage: 1,
      }));
  }, [filtered]);

  return (
    <div className="book-wrapper search-wrapper">
      <div className="search-lead">
        <div className="search-controls">
          <input
            type="search"
            className="search-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dreams by title, note, user, or date…"
            aria-label="Search dreams"
          />
          {query && (
            <button type="button" className="search-clear" onClick={() => setQuery('')}>
              Clear
            </button>
          )}
        </div>

        {loading && <p className="agenda-status">Summoning your dreams…</p>}
        {!loading && error && <p className="agenda-status error">{error}</p>}
        {!loading && !error && entries.length === 0 && (
          <p className="agenda-status">ur first dream together</p>
        )}

        {!loading && !error && entries.length > 0 && (
          <p className="search-summary">
            {query
              ? `${filtered.length} dream${filtered.length === 1 ? '' : 's'} match “${query}”.`
              : `Browsing all ${entries.length} dream${entries.length === 1 ? '' : 's'}.`}
          </p>
        )}

        {!loading && !error && filtered.length === 0 && entries.length > 0 && (
          <p className="agenda-status search-status">No dreams match your incantation.</p>
        )}
      </div>

      {!loading &&
        !error &&
        filtered.length > 0 &&
        sections.map(({ letter, visible }) => (
          <section key={letter} className="book-section">
            <header className="section-header">
              <span className="section-letter">{letter}</span>
            </header>
            <ul className="entries-list search-results">
              {visible.map((entry) => (
                <EntryCard
                  key={entry.id}
                  entry={entry}
                  defaultUserId={defaultUserId}
                  isDeleting={deletingIds.has(entry.id)}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
            </ul>
          </section>
        ))}
    </div>
  );
}

type EntryCardProps = {
  entry: AgendaEntry;
  defaultUserId: string;
  isDeleting: boolean;
  onEdit: (entry: AgendaEntry) => void;
  onDelete: (entry: AgendaEntry) => void;
};

function EntryCard({ entry, isDeleting, onEdit, onDelete }: EntryCardProps) {
  return (
    <li className="entry-card">
      <div className="entry-meta-row">
        <div className="entry-actions">
          <button
            type="button"
            className="entry-edit-button"
            onClick={() => onEdit(entry)}
            disabled={isDeleting}
          >
            Edit
          </button>
          <button
            type="button"
            className="entry-delete-button"
            onClick={() => onDelete(entry)}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </div>
      <div className="entry-title">{entry.title}</div>
      {entry.note && <p className="entry-note">{entry.note}</p>}
      <footer className="entry-meta">
        {entry.date && <span>{formatDate(entry.date)}</span>}
        <span>{formatDate(entry.createdAt)}</span>
      </footer>
    </li>
  );
}

export default App;
