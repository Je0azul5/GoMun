import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import './App.css';

type AgendaEntry = {
  id: string;
  title: string;
  note?: string | null;
  date?: string | null;
  done: boolean;
  createdAt: string;
  userId: string;
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

  const groupedEntries = useMemo(() => {
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
          items: orderedItems,
          visible,
          totalPages,
          currentPage,
        };
      });
  }, [entries, pageByLetter]);

  const isEditing = editingEntryId !== null;

  const openNewEntry = () => {
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

  const handlePageChange = (letter: string, page: number) => {
    setPageByLetter((prev) => ({ ...prev, [letter]: page }));
  };

  return (
    <div className="agenda-shell">
      <header className="agenda-header">
        <h1>GoMun</h1>
        <p>Every shared dream — one letter at a time.</p>
        <button className="new-entry-button" type="button" onClick={openNewEntry}>
          + New Dream
        </button>
      </header>

      {loading && <p className="agenda-status">Summoning your shared adventures…</p>}
      {error && !loading && <p className="agenda-status error">{error}</p>}

      {!loading && !error && groupedEntries.length === 0 && (
        <p className="agenda-status">Begin by conjuring your first memory together.</p>
      )}

      {!loading && !error && groupedEntries.length > 0 && (
        <div className="book-wrapper">
          {groupedEntries.map(({ letter, visible, totalPages, currentPage }) => (
            <section key={letter} className="book-section">
              <header className="section-header">
                <span className="section-letter">{letter}</span>
              </header>

              <ul className="entries-list">
                {visible.map((entry) => (
                  <li key={entry.id} className="entry-card">
                    <div className="entry-meta-row">
                      <span className="entry-tag">{entry.userId || DEFAULT_USER_ID}</span>
                      <button
                        type="button"
                        className="entry-edit-button"
                        onClick={() => openEditEntry(entry)}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="entry-title">{entry.title}</div>
                    {entry.note && <p className="entry-note">{entry.note}</p>}
                    <footer className="entry-meta">
                      {entry.date && <span>{formatDate(entry.date)}</span>}
                      <span>{formatDate(entry.createdAt)}</span>
                    </footer>
                  </li>
                ))}
              </ul>
              {totalPages > 1 && (
                <nav className="letter-pagination" aria-label={`Pages for letter ${letter}`}>
                  <button
                    type="button"
                    className="pagination-button"
                    onClick={() => handlePageChange(letter, currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <div className="pagination-pages">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                      <button
                        key={pageNumber}
                        type="button"
                        className={`pagination-button${
                          pageNumber === currentPage ? ' active' : ''
                        }`}
                        onClick={() => handlePageChange(letter, pageNumber)}
                        aria-current={pageNumber === currentPage ? 'page' : undefined}
                      >
                        {pageNumber}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="pagination-button"
                    onClick={() => handlePageChange(letter, currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </nav>
              )}
            </section>
          ))}
        </div>
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
              <h2 id="entry-modal-title">{isEditing ? 'Edit Memory' : 'New Shared Memory'}</h2>
              <button className="modal-close" type="button" onClick={closeForm} aria-label="Close">
                ×
              </button>
            </header>

            <form className="entry-form" onSubmit={handleSubmitEntry}>
              <label className="form-field">
                <span>Title *</span>
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
                  <span>User</span>
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
                  placeholder="Wander the Thames at twilight, tea at Covent Garden…"
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
                      ? 'Update Memory'
                      : 'Save Memory'}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
