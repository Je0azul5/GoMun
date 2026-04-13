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

type CouponUnlockCondition =
  | { type: 'dreamCompleted'; value: string }
  | { type: 'dreamCount'; value: number };

type Coupon = {
  id: string;
  title: string;
  description?: string | null;
  createdAt: string;
  unlocked: boolean;
  redeemed: boolean;
  redeemedAt?: string | null;
  unlockCondition?: CouponUnlockCondition | null;
};

type AgendaSection = {
  letter: string;
  visible: AgendaEntry[];
  totalPages: number;
  currentPage: number;
};

type UnlockToast = {
  id: string;
  message: string;
};

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';
const DEFAULT_USER_ID = (import.meta.env.VITE_DEFAULT_USER_ID ?? 'couple').trim() || 'couple';
const ITEMS_PER_PAGE = 15;

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

function describeUnlockCondition(
  condition: CouponUnlockCondition | null | undefined,
  entriesById: Map<string, AgendaEntry>
) {
  if (!condition) {
    return 'Available as soon as it is written.';
  }

  if (condition.type === 'dreamCompleted') {
    const targetDream = entriesById.get(condition.value);
    return targetDream
      ? `Unlock by fulfilling "${targetDream.title}".`
      : 'Unlock by fulfilling a specific dream.';
  }

  return `Unlock after ${condition.value} dreams come true.`;
}

function getCouponFormState(coupon?: Coupon | null) {
  if (!coupon) {
    return {
      title: '',
      description: '',
      unlockMode: 'manual' as const,
      dreamId: '',
      dreamCount: '3',
    };
  }

  if (coupon.unlockCondition?.type === 'dreamCompleted') {
    return {
      title: coupon.title,
      description: coupon.description ?? '',
      unlockMode: 'dreamCompleted' as const,
      dreamId: coupon.unlockCondition.value,
      dreamCount: '3',
    };
  }

  if (coupon.unlockCondition?.type === 'dreamCount') {
    return {
      title: coupon.title,
      description: coupon.description ?? '',
      unlockMode: 'dreamCount' as const,
      dreamId: '',
      dreamCount: String(coupon.unlockCondition.value),
    };
  }

  return {
    title: coupon.title,
    description: coupon.description ?? '',
    unlockMode: 'manual' as const,
    dreamId: '',
    dreamCount: '3',
  };
}

function App() {
  const [entries, setEntries] = useState<AgendaEntry[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'agenda' | 'search' | 'coupons'>('agenda');
  const [isEntryFormOpen, setIsEntryFormOpen] = useState(false);
  const [isCouponFormOpen, setIsCouponFormOpen] = useState(false);
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);
  const [editingCouponId, setEditingCouponId] = useState<string | null>(null);
  const [pageByLetter, setPageByLetter] = useState<Record<string, number>>({});
  const [entryFormState, setEntryFormState] = useState({
    title: '',
    note: '',
    userId: DEFAULT_USER_ID,
  });
  const [couponFormState, setCouponFormState] = useState(getCouponFormState());
  const [submittingEntry, setSubmittingEntry] = useState(false);
  const [submittingCoupon, setSubmittingCoupon] = useState(false);
  const [entryFormError, setEntryFormError] = useState<string | null>(null);
  const [couponFormError, setCouponFormError] = useState<string | null>(null);
  const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set());
  const [redeemingIds, setRedeemingIds] = useState<Set<string>>(new Set());
  const [unlockToast, setUnlockToast] = useState<UnlockToast | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const [entriesResponse, couponsResponse] = await Promise.all([
          fetch(`${API_BASE}/api/entries`),
          fetch(`${API_BASE}/api/coupons`),
        ]);

        if (!entriesResponse.ok) {
          throw new Error(`Unable to load dreams (${entriesResponse.status})`);
        }

        if (!couponsResponse.ok) {
          throw new Error(`Unable to load coupons (${couponsResponse.status})`);
        }

        const [entriesData, couponsData]: [AgendaEntry[], Coupon[]] = await Promise.all([
          entriesResponse.json(),
          couponsResponse.json(),
        ]);

        if (isMounted) {
          setEntries(entriesData);
          setCoupons(couponsData);
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

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!unlockToast) return;

    const timeoutId = window.setTimeout(() => {
      setUnlockToast(null);
    }, 3400);

    return () => window.clearTimeout(timeoutId);
  }, [unlockToast]);

  useEffect(() => {
    const totals: Record<string, number> = {};
    for (const entry of entries) {
      const key = letterKey(entry.title);
      totals[key] = (totals[key] ?? 0) + 1;
    }

    setPageByLetter((prev) => {
      const next: Record<string, number> = {};
      let changed = false;

      for (const [key, count] of Object.entries(totals)) {
        const totalPages = Math.max(1, Math.ceil(count / ITEMS_PER_PAGE));
        const current = prev[key] ?? 1;
        const safe = Math.min(Math.max(current, 1), totalPages);
        next[key] = safe;
        if (safe !== current) {
          changed = true;
        }
      }

      if (!changed && Object.keys(prev).length === Object.keys(next).length) {
        const identical = Object.keys(next).every((key) => prev[key] === next[key]);
        if (identical) {
          return prev;
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
        const currentPage = Math.min(Math.max(pageByLetter[letter] ?? 1, 1), totalPages);
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

  const entriesById = useMemo(() => new Map(entries.map((entry) => [entry.id, entry])), [entries]);
  const completedDreams = useMemo(() => entries.filter((entry) => entry.done).length, [entries]);
  const isEditingEntry = editingEntryId !== null;
  const isEditingCoupon = editingCouponId !== null;

  const openNewEntry = () => {
    setActiveView('agenda');
    setEditingEntryId(null);
    setEntryFormState({ title: '', note: '', userId: DEFAULT_USER_ID });
    setEntryFormError(null);
    setIsEntryFormOpen(true);
  };

  const openEditEntry = (entry: AgendaEntry) => {
    setEditingEntryId(entry.id);
    setEntryFormState({
      title: entry.title,
      note: entry.note ?? '',
      userId: entry.userId ?? DEFAULT_USER_ID,
    });
    setEntryFormError(null);
    setIsEntryFormOpen(true);
  };

  const openCouponForm = () => {
    setActiveView('coupons');
    setEditingCouponId(null);
    setCouponFormError(null);
    setCouponFormState(getCouponFormState());
    setIsCouponFormOpen(true);
  };

  const openEditCoupon = (coupon: Coupon) => {
    setActiveView('coupons');
    setEditingCouponId(coupon.id);
    setCouponFormError(null);
    setCouponFormState(getCouponFormState(coupon));
    setIsCouponFormOpen(true);
  };

  const closeEntryForm = () => {
    setIsEntryFormOpen(false);
    setEntryFormError(null);
    setEntryFormState({ title: '', note: '', userId: DEFAULT_USER_ID });
    setEditingEntryId(null);
  };

  const closeCouponForm = () => {
    setIsCouponFormOpen(false);
    setEditingCouponId(null);
    setCouponFormError(null);
    setCouponFormState(getCouponFormState());
  };

  const showUnlockToast = (unlockedCoupons: Coupon[]) => {
    if (unlockedCoupons.length === 0) return;

    const message =
      unlockedCoupons.length === 1
        ? `You unlocked a new coupon: ${unlockedCoupons[0].title}`
        : `You unlocked ${unlockedCoupons.length} new coupons.`;

    setUnlockToast({
      id: `${Date.now()}-${unlockedCoupons[0].id}`,
      message,
    });
  };

  const handleSubmitEntry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEntryFormError(null);

    const trimmedTitle = entryFormState.title.trim();
    if (!trimmedTitle) {
      setEntryFormError('Every dream needs a name.');
      return;
    }

    const payload: { title: string; note?: string; userId?: string } = {
      title: trimmedTitle,
    };

    if (entryFormState.note.trim()) {
      payload.note = entryFormState.note.trim();
    }

    if (!isEditingEntry) {
      const trimmedUserId = entryFormState.userId.trim();
      payload.userId = trimmedUserId || DEFAULT_USER_ID;
    }

    setSubmittingEntry(true);

    try {
      const endpoint = isEditingEntry
        ? `${API_BASE}/api/entries/${editingEntryId}`
        : `${API_BASE}/api/entries`;

      const response = await fetch(endpoint, {
        method: isEditingEntry ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Unable to save dream (${response.status})`);
      }

      const saved: AgendaEntry = await response.json();
      setEntries((prev) =>
        isEditingEntry ? prev.map((entry) => (entry.id === saved.id ? saved : entry)) : [saved, ...prev]
      );

      if (!isEditingEntry) {
        const key = letterKey(saved.title);
        setPageByLetter((prev) => ({ ...prev, [key]: 1 }));
      }

      closeEntryForm();
    } catch (err) {
      setEntryFormError(err instanceof Error ? err.message : 'Unable to save dream');
    } finally {
      setSubmittingEntry(false);
    }
  };

  const handleSubmitCoupon = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCouponFormError(null);

    const trimmedTitle = couponFormState.title.trim();
    if (!trimmedTitle) {
      setCouponFormError('Every coupon needs a title.');
      return;
    }

    let unlockCondition: CouponUnlockCondition | null = null;

    if (couponFormState.unlockMode === 'dreamCompleted') {
      if (!couponFormState.dreamId) {
        setCouponFormError('Pick the dream that should unlock this coupon.');
        return;
      }

      unlockCondition = {
        type: 'dreamCompleted',
        value: couponFormState.dreamId,
      };
    }

    if (couponFormState.unlockMode === 'dreamCount') {
      const dreamCount = Number(couponFormState.dreamCount);

      if (!Number.isInteger(dreamCount) || dreamCount <= 0) {
        setCouponFormError('Use a valid number of completed dreams.');
        return;
      }

      unlockCondition = {
        type: 'dreamCount',
        value: dreamCount,
      };
    }

    setSubmittingCoupon(true);

    try {
      const endpoint = isEditingCoupon
        ? `${API_BASE}/api/coupons/${editingCouponId}`
        : `${API_BASE}/api/coupons`;

      const response = await fetch(endpoint, {
        method: isEditingCoupon ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: trimmedTitle,
          description: couponFormState.description.trim() || undefined,
          unlockCondition,
        }),
      });

      if (!response.ok) {
        throw new Error(`Unable to save coupon (${response.status})`);
      }

      const saved: Coupon = await response.json();
      setCoupons((prev) =>
        isEditingCoupon ? prev.map((coupon) => (coupon.id === saved.id ? saved : coupon)) : [saved, ...prev]
      );

      if (!isEditingCoupon && saved.unlocked) {
        showUnlockToast([saved]);
      }

      closeCouponForm();
    } catch (err) {
      setCouponFormError(err instanceof Error ? err.message : 'Unable to save coupon');
    } finally {
      setSubmittingCoupon(false);
    }
  };

  const handleDeleteEntry = async (entry: AgendaEntry) => {
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
      alert(err instanceof Error ? err.message : 'Unable to delete entry');
    } finally {
      setDeletingIds((prev) => {
        const next = new Set(prev);
        next.delete(entry.id);
        return next;
      });
    }
  };

  const handleToggleDone = async (entry: AgendaEntry) => {
    const nextDone = !entry.done;
    setEntries((prev) => prev.map((item) => (item.id === entry.id ? { ...item, done: nextDone } : item)));

    try {
      const response = await fetch(`${API_BASE}/api/entries/${entry.id}/done`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: nextDone }),
      });

      if (!response.ok) {
        throw new Error(`Unable to update entry (${response.status})`);
      }

      const data: { entry: AgendaEntry; unlockedCoupons: Coupon[] } = await response.json();

      setEntries((prev) => prev.map((item) => (item.id === data.entry.id ? data.entry : item)));
      if (data.unlockedCoupons.length > 0) {
        setCoupons((prev) =>
          prev.map((coupon) => data.unlockedCoupons.find((item) => item.id === coupon.id) ?? coupon)
        );
        showUnlockToast(data.unlockedCoupons);
      }
    } catch (err) {
      setEntries((prev) => prev.map((item) => (item.id === entry.id ? { ...item, done: entry.done } : item)));
      alert(err instanceof Error ? err.message : 'Unable to update entry');
    }
  };

  const handleRedeemCoupon = async (coupon: Coupon) => {
    const nextRedeemed = !coupon.redeemed;

    setRedeemingIds((prev) => {
      const next = new Set(prev);
      next.add(coupon.id);
      return next;
    });

    try {
      const response = await fetch(`${API_BASE}/api/coupons/${coupon.id}/redeem`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ redeemed: nextRedeemed }),
      });

      if (!response.ok) {
        throw new Error(`Unable to update coupon (${response.status})`);
      }

      const updated: Coupon = await response.json();
      setCoupons((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Unable to update coupon');
    } finally {
      setRedeemingIds((prev) => {
        const next = new Set(prev);
        next.delete(coupon.id);
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
        <p>Every shared dream, every small promise, every future kept close.</p>
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
            <button
              type="button"
              className={`nav-link${activeView === 'coupons' ? ' active' : ''}`}
              onClick={() => setActiveView('coupons')}
            >
              Coupons
            </button>
          </nav>

          <div className="header-action-row">
            <button className="new-entry-button" type="button" onClick={openNewEntry}>
              + New Dream
            </button>
            <button className="new-entry-button secondary-button" type="button" onClick={openCouponForm}>
              + New Coupon
            </button>
          </div>
        </div>
      </header>

      {activeView === 'agenda' && (
        <AgendaView
          sections={groupedSections}
          loading={loading}
          error={error}
          deletingIds={deletingIds}
          onEdit={openEditEntry}
          onDelete={handleDeleteEntry}
          onToggleDone={handleToggleDone}
          onPageChange={handlePageChange}
        />
      )}

      {activeView === 'search' && (
        <SearchView
          entries={entries}
          loading={loading}
          error={error}
          deletingIds={deletingIds}
          onEdit={openEditEntry}
          onDelete={handleDeleteEntry}
          onToggleDone={handleToggleDone}
        />
      )}

      {activeView === 'coupons' && (
        <CouponsView
          coupons={coupons}
          entriesById={entriesById}
          completedDreams={completedDreams}
          loading={loading}
          error={error}
          redeemingIds={redeemingIds}
          onCreateCoupon={openCouponForm}
          onEditCoupon={openEditCoupon}
          onRedeemCoupon={handleRedeemCoupon}
        />
      )}

      {unlockToast && (
        <div key={unlockToast.id} className="unlock-toast" role="status" aria-live="polite">
          <span className="unlock-toast-mark">+</span>
          <span>{unlockToast.message}</span>
        </div>
      )}

      {isEntryFormOpen && (
        <div className="entry-modal-backdrop" role="presentation" onClick={closeEntryForm}>
          <div
            className="entry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="entry-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="entry-modal-header">
              <h2 id="entry-modal-title">{isEditingEntry ? 'Edit Dream' : 'New Dream'}</h2>
              <button className="modal-close" type="button" onClick={closeEntryForm} aria-label="Close">
                ×
              </button>
            </header>

            <form className="entry-form" onSubmit={handleSubmitEntry}>
              <label className="form-field">
                <span>Dream</span>
                <input
                  type="text"
                  name="title"
                  value={entryFormState.title}
                  onChange={(event) =>
                    setEntryFormState((prev) => ({ ...prev, title: event.target.value }))
                  }
                  placeholder="Visit London"
                  required
                />
              </label>

              {!isEditingEntry && (
                <label className="form-field">
                  <span>Dreamer</span>
                  <input
                    type="text"
                    name="userId"
                    value={entryFormState.userId}
                    onChange={(event) =>
                      setEntryFormState((prev) => ({ ...prev, userId: event.target.value }))
                    }
                    placeholder="couple"
                  />
                </label>
              )}

              <label className="form-field">
                <span>Note</span>
                <textarea
                  name="note"
                  value={entryFormState.note}
                  onChange={(event) =>
                    setEntryFormState((prev) => ({ ...prev, note: event.target.value }))
                  }
                  placeholder="A small wish we want to make real."
                  rows={3}
                />
              </label>

              {entryFormError && <p className="form-error">{entryFormError}</p>}

              <footer className="form-actions">
                <button type="button" className="ghost-button" onClick={closeEntryForm} disabled={submittingEntry}>
                  Cancel
                </button>
                <button type="submit" disabled={submittingEntry}>
                  {submittingEntry
                    ? isEditingEntry
                      ? 'Updating...'
                      : 'Saving...'
                    : isEditingEntry
                      ? 'Update Dream'
                      : 'Save Dream'}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}

      {isCouponFormOpen && (
        <div className="entry-modal-backdrop" role="presentation" onClick={closeCouponForm}>
          <div
            className="entry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="coupon-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="entry-modal-header">
              <h2 id="coupon-modal-title">{isEditingCoupon ? 'Edit Coupon' : 'New Coupon'}</h2>
              <button className="modal-close" type="button" onClick={closeCouponForm} aria-label="Close">
                ×
              </button>
            </header>

            <form className="entry-form" onSubmit={handleSubmitCoupon}>
              <label className="form-field">
                <span>Coupon</span>
                <input
                  type="text"
                  name="title"
                  value={couponFormState.title}
                  onChange={(event) =>
                    setCouponFormState((prev) => ({ ...prev, title: event.target.value }))
                  }
                  placeholder="Breakfast in bed"
                  required
                />
              </label>

              <label className="form-field">
                <span>Description</span>
                <textarea
                  name="description"
                  value={couponFormState.description}
                  onChange={(event) =>
                    setCouponFormState((prev) => ({ ...prev, description: event.target.value }))
                  }
                  placeholder="A quiet promise, saved for the right day."
                  rows={3}
                />
              </label>

              <label className="form-field">
                <span>Unlock Rule</span>
                <select
                  name="unlockMode"
                  value={couponFormState.unlockMode}
                  onChange={(event) =>
                    setCouponFormState((prev) => ({
                      ...prev,
                      unlockMode: event.target.value as 'manual' | 'dreamCompleted' | 'dreamCount',
                    }))
                  }
                >
                  <option value="manual">No condition</option>
                  <option value="dreamCompleted">Specific dream</option>
                  <option value="dreamCount">Completed dream count</option>
                </select>
              </label>

              {couponFormState.unlockMode === 'dreamCompleted' && (
                <label className="form-field">
                  <span>Dream to unlock it</span>
                  <select
                    name="dreamId"
                    value={couponFormState.dreamId}
                    onChange={(event) =>
                      setCouponFormState((prev) => ({ ...prev, dreamId: event.target.value }))
                    }
                  >
                    <option value="">Choose a dream</option>
                    {entries
                      .slice()
                      .sort((first, second) =>
                        first.title.localeCompare(second.title, undefined, { sensitivity: 'base' })
                      )
                      .map((entry) => (
                        <option key={entry.id} value={entry.id}>
                          {entry.title}
                        </option>
                      ))}
                  </select>
                </label>
              )}

              {couponFormState.unlockMode === 'dreamCount' && (
                <label className="form-field">
                  <span>Completed dreams required</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    name="dreamCount"
                    value={couponFormState.dreamCount}
                    onChange={(event) =>
                      setCouponFormState((prev) => ({ ...prev, dreamCount: event.target.value }))
                    }
                  />
                </label>
              )}

              {couponFormError && <p className="form-error">{couponFormError}</p>}

              <footer className="form-actions">
                <button type="button" className="ghost-button" onClick={closeCouponForm} disabled={submittingCoupon}>
                  Cancel
                </button>
                <button type="submit" disabled={submittingCoupon}>
                  {submittingCoupon ? 'Writing...' : isEditingCoupon ? 'Update Coupon' : 'Save Coupon'}
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
  deletingIds: Set<string>;
  onEdit: (entry: AgendaEntry) => void;
  onDelete: (entry: AgendaEntry) => void;
  onToggleDone: (entry: AgendaEntry) => void;
  onPageChange: (letter: string, page: number) => void;
};

function AgendaView({
  sections,
  loading,
  error,
  deletingIds,
  onEdit,
  onDelete,
  onToggleDone,
  onPageChange,
}: AgendaViewProps) {
  if (loading) {
    return <p className="agenda-status">Gathering your dreams...</p>;
  }

  if (error) {
    return <p className="agenda-status error">{error}</p>;
  }

  if (sections.length === 0) {
    return <p className="agenda-status">Write the first dream and start the story.</p>;
  }

  return (
    <div className="book-section book-wrapper">
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
                isDeleting={deletingIds.has(entry.id)}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleDone={onToggleDone}
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
  deletingIds: Set<string>;
  onEdit: (entry: AgendaEntry) => void;
  onDelete: (entry: AgendaEntry) => void;
  onToggleDone: (entry: AgendaEntry) => void;
};

function SearchView({ entries, loading, error, deletingIds, onEdit, onDelete, onToggleDone }: SearchViewProps) {
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
            placeholder="Search dreams by title, note, user, or date..."
            aria-label="Search dreams"
          />
          {query && (
            <button type="button" className="search-clear" onClick={() => setQuery('')}>
              Clear
            </button>
          )}
        </div>

        {loading && <p className="search-status">Reading your dream catalog...</p>}
        {!loading && error && <p className="search-status agenda-status error">{error}</p>}
        {!loading && !error && (
          <p className="search-summary">
            {normalizedQuery
              ? `Found ${filtered.length} dreams for "${query.trim()}".`
              : `Browsing all ${entries.length} dreams.`}
          </p>
        )}
      </div>

      {!loading && !error && sections.length === 0 && (
        <p className="search-status">No dreams match this search.</p>
      )}

      {!loading &&
        !error &&
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
                  isDeleting={deletingIds.has(entry.id)}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onToggleDone={onToggleDone}
                />
              ))}
            </ul>
          </section>
        ))}
    </div>
  );
}

type CouponsViewProps = {
  coupons: Coupon[];
  entriesById: Map<string, AgendaEntry>;
  completedDreams: number;
  loading: boolean;
  error: string | null;
  redeemingIds: Set<string>;
  onCreateCoupon: () => void;
  onEditCoupon: (coupon: Coupon) => void;
  onRedeemCoupon: (coupon: Coupon) => void;
};

function CouponsView({
  coupons,
  entriesById,
  completedDreams,
  loading,
  error,
  redeemingIds,
  onCreateCoupon,
  onEditCoupon,
  onRedeemCoupon,
}: CouponsViewProps) {
  const redeemedCoupons = coupons.filter((coupon) => coupon.redeemed);
  const unlockedCoupons = coupons.filter((coupon) => coupon.unlocked && !coupon.redeemed);
  const lockedCoupons = coupons.filter((coupon) => !coupon.unlocked);

  if (loading) {
    return <p className="agenda-status">Folding your coupons into place...</p>;
  }

  if (error) {
    return <p className="agenda-status error">{error}</p>;
  }

  return (
    <div className="book-wrapper coupons-wrapper">
      <div className="coupons-lead">
        <div>
          <p className="coupon-kicker">Collected promises</p>
          <h2 className="coupons-title">Coupons for the dreams that already moved the story forward.</h2>
        </div>
        <div className="coupons-summary">
          <span>{completedDreams} dreams fulfilled</span>
          <span>{unlockedCoupons.length} available coupons</span>
        </div>
        <button type="button" className="new-entry-button secondary-button" onClick={onCreateCoupon}>
          + Create Coupon
        </button>
      </div>

      {coupons.length === 0 && (
        <p className="agenda-status">There are no coupons yet. Create the first one from here.</p>
      )}

      {unlockedCoupons.length > 0 && (
        <CouponShelf
          title="Available"
          tone="available"
          coupons={unlockedCoupons}
          entriesById={entriesById}
          redeemingIds={redeemingIds}
          onEditCoupon={onEditCoupon}
          onRedeemCoupon={onRedeemCoupon}
        />
      )}

      {lockedCoupons.length > 0 && (
        <CouponShelf
          title="Locked"
          tone="locked"
          coupons={lockedCoupons}
          entriesById={entriesById}
          redeemingIds={redeemingIds}
          onEditCoupon={onEditCoupon}
          onRedeemCoupon={onRedeemCoupon}
        />
      )}

      {redeemedCoupons.length > 0 && (
        <CouponShelf
          title="Redeemed"
          tone="redeemed"
          coupons={redeemedCoupons}
          entriesById={entriesById}
          redeemingIds={redeemingIds}
          onEditCoupon={onEditCoupon}
          onRedeemCoupon={onRedeemCoupon}
        />
      )}
    </div>
  );
}

type CouponShelfProps = {
  title: string;
  tone: 'available' | 'locked' | 'redeemed';
  coupons: Coupon[];
  entriesById: Map<string, AgendaEntry>;
  redeemingIds: Set<string>;
  onEditCoupon: (coupon: Coupon) => void;
  onRedeemCoupon: (coupon: Coupon) => void;
};

function CouponShelf({
  title,
  tone,
  coupons,
  entriesById,
  redeemingIds,
  onEditCoupon,
  onRedeemCoupon,
}: CouponShelfProps) {
  return (
    <section className="coupon-shelf">
      <header className="coupon-shelf-header">
        <h3>{title}</h3>
        <span>{coupons.length}</span>
      </header>

      <div className="coupon-grid">
        {coupons.map((coupon) => (
          <CouponCard
            key={coupon.id}
            coupon={coupon}
            tone={tone}
            unlockCopy={describeUnlockCondition(coupon.unlockCondition, entriesById)}
            isRedeeming={redeemingIds.has(coupon.id)}
            onEditCoupon={onEditCoupon}
            onRedeemCoupon={onRedeemCoupon}
          />
        ))}
      </div>
    </section>
  );
}

type EntryCardProps = {
  entry: AgendaEntry;
  isDeleting: boolean;
  onEdit: (entry: AgendaEntry) => void;
  onDelete: (entry: AgendaEntry) => void;
  onToggleDone: (entry: AgendaEntry) => void;
};

function EntryCard({ entry, isDeleting, onEdit, onDelete, onToggleDone }: EntryCardProps) {
  return (
    <li className={`entry-card${entry.done ? ' entry-card-done' : ''}`}>
      <div className="entry-actions">
        <label className="entry-done-toggle">
          <input type="checkbox" checked={entry.done} onChange={() => onToggleDone(entry)} />
          <span>{entry.done ? '🌼 Dream come true' : '✨ Still a dream'}</span>
        </label>
        <button type="button" className="entry-edit-button" onClick={() => onEdit(entry)}>
          Edit
        </button>
        <button
          type="button"
          className="entry-delete-button"
          onClick={() => onDelete(entry)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>

      <strong className="entry-title">{entry.title}</strong>
      {entry.note && <p className="entry-note">{entry.note}</p>}

      <div className="entry-meta">
        <span>{formatDate(entry.createdAt)}</span>
      </div>
    </li>
  );
}

type CouponCardProps = {
  coupon: Coupon;
  tone: 'available' | 'locked' | 'redeemed';
  unlockCopy: string;
  isRedeeming: boolean;
  onEditCoupon: (coupon: Coupon) => void;
  onRedeemCoupon: (coupon: Coupon) => void;
};

function CouponCard({ coupon, tone, unlockCopy, isRedeeming, onEditCoupon, onRedeemCoupon }: CouponCardProps) {
  const statusLabel =
    tone === 'locked' ? 'Locked' : tone === 'redeemed' ? 'Redeemed' : 'Unlocked';

  return (
    <article className={`coupon-card coupon-card-${tone}`}>
      <div className="coupon-perforation" aria-hidden="true" />
      <div className="coupon-card-top">
        <span className={`coupon-status coupon-status-${tone}`}>{statusLabel}</span>
        <span className="coupon-date">{formatDate(coupon.createdAt)}</span>
      </div>

      <div className="coupon-copy">
        <h4>{coupon.title}</h4>
        {coupon.description ? <p>{coupon.description}</p> : <p>{unlockCopy}</p>}
      </div>

      <div className="coupon-footer">
        <button type="button" className="entry-edit-button" onClick={() => onEditCoupon(coupon)}>
          Edit
        </button>

       

        {tone === 'available' && (
          <>
            <p className="coupon-hint">{unlockCopy}</p>
            <button type="button" className="coupon-action" onClick={() => onRedeemCoupon(coupon)} disabled={isRedeeming}>
              {isRedeeming ? 'Saving...' : 'Redeem'}
            </button>
          </>
        )}

        {tone === 'redeemed' && (
          <>
            <p className="coupon-hint">
              Used on {formatDate(coupon.redeemedAt) || 'a special day'}.
            </p>
            <button type="button" className="coupon-action secondary" onClick={() => onRedeemCoupon(coupon)} disabled={isRedeeming}>
              {isRedeeming ? 'Saving...' : 'Mark unused'}
            </button>
          </>
        )}
      </div>
    </article>
  );
}

export default App;
