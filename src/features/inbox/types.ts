import type { ExtendedColumnSort } from "@/types/data-table";
import type { RequestBoxSchema } from "./schemas/Inbox";

export type Request = {
  id: number;
  trackingCode: string;
  title: string;
  sectionId: number;
  sectionKey: string;
  sectionLabel: string;
  sectionColor: string;
  section_frontend_route: string;
  isSeen: boolean;
  createdAt: string;
  state?: "checked" | "unchecked";
  department?: string;
  seenStatus?: "active" | "banned";
};

export interface InboxTableFilters {
  page: number;
  perPage: number;
  sort: ExtendedColumnSort<RequestBoxSchema>[];
  search: string;
  section_key: RequestBoxSchema["section_key"] | null;
  is_seen: boolean | null;
}
