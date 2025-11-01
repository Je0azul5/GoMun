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
};

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';
const DEFAULT_USER_ID = import.meta.env.VITE_DEFAULT_USER_ID ?? 'couple';

const isLatinLetter = (char: string) => /^[A-Z]$/.test(char);

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

  const groupedEntries = useMemo(() => {
    const bucket = new Map<string, AgendaEntry[]>();

    for (const entry of entries) {
      const initial = entry.title?.trim().charAt(0).toUpperCase() ?? '';
      const key = isLatinLetter(initial) ? initial : '#';
      const group = bucket.get(key) ?? [];
      group.push(entry);
      bucket.set(key, group);
    }

    return Array.from(bucket.entries())
      .sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      .map(([letter, items]) => ({
        letter,
        items: items.sort((first, second) =>
          first.title.localeCompare(second.title, undefined, { sensitivity: 'base' })
        ),
      }));
  }, [entries]);

  const closeForm = () => {
    setIsFormOpen(false);
    setFormError(null);
    setFormState({ title: '', note: '', userId: DEFAULT_USER_ID });
  };

  const handleCreateEntry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    const trimmedTitle = formState.title.trim();
    if (!trimmedTitle) {
      setFormError('Every memory needs a name.');
      return;
    }

    const payload: { title: string; note?: string; userId?: string } = {
      title: trimmedTitle,
    };

    if (formState.note.trim()) {
      payload.note = formState.note.trim();
    }

    const trimmedUserId = formState.userId.trim();
    if (trimmedUserId) {
      payload.userId = trimmedUserId;
    } else {
      payload.userId = DEFAULT_USER_ID;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/api/entries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Unable to save entry (${response.status})`);
      }

      const created: AgendaEntry = await response.json();
      setEntries((prev) => [created, ...prev]);
      closeForm();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Unable to save entry');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="agenda-shell">
      <header className="agenda-header">
        <h1>GoMun</h1>
        <p>Every shared dream, catalogued — one letter at a time.</p>
        <button className="new-entry-button" type="button" onClick={() => setIsFormOpen(true)}>
          + New Entry
        </button>
      </header>

      {loading && <p className="agenda-status">Summoning your shared adventures…</p>}
      {error && !loading && <p className="agenda-status error">{error}</p>}

      {!loading && !error && groupedEntries.length === 0 && (
        <p className="agenda-status">Begin by conjuring your first memory together.</p>
      )}

      {!loading && !error && groupedEntries.length > 0 && (
        <div className="book-wrapper">
          {groupedEntries.map(({ letter, items }) => (
            <section key={letter} className="book-section">
              <header className="section-header">
                <span className="section-letter">{letter}</span>
              </header>

              <ul className="entries-list">
                {items.map((entry) => (
                  <li key={entry.id} className="entry-card">
                    <div className="entry-title">{entry.title}</div>
                    {entry.note && <p className="entry-note">{entry.note}</p>}
                    <footer className="entry-meta">
                      {entry.date && <span>{formatDate(entry.date)}</span>}
                      <span>{formatDate(entry.createdAt)}</span>
                    </footer>
                  </li>
                ))}
              </ul>
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
              <h2 id="entry-modal-title">New Shared Memory</h2>
              <button className="modal-close" type="button" onClick={closeForm} aria-label="Close">
                ×
              </button>
            </header>

            <form className="entry-form" onSubmit={handleCreateEntry}>
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
                  {submitting ? 'Inscribing…' : 'Save Memory'}
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
