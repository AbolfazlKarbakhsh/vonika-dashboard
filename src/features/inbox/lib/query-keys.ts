import type { InboxTableFilters } from "../types";

export const requestsKeys = {
  all: () => ["requests"] as const,

  inbox: {
    root: () => [...requestsKeys.all(), "inbox"] as const,

    // List of request boxes with filters (paginated)
    list: (filters: InboxTableFilters) =>
      [...requestsKeys.inbox.root(), "list", { filters }] as const,

    // Single request detail (reserved for future usage)
    detail: (id: number | string) =>
      [...requestsKeys.inbox.root(), "detail", id] as const,

    // Unseen count
    unseenCount: () => [...requestsKeys.inbox.root(), "unseen-count"] as const,

    // Options (if later we need static lists for pickers etc.)
    options: {
      unseen: () =>
        [...requestsKeys.inbox.root(), "options", "unseen"] as const,
    },
  },
} as const;
