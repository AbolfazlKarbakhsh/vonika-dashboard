import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs/server";

import { DEFAULT_PER_PAGE } from "@/config/data-table";

import { getSortingStateParser } from "@/lib/data-table/parsers";

import type { RequestBoxSchema } from "../schemas/Inbox";
import { sectionKeyEnum } from "../schemas/Inbox";

export const InboxSearchParamsParsers = {
  page: parseAsInteger.withDefault(0),
  perPage: parseAsInteger.withDefault(DEFAULT_PER_PAGE),
  search: parseAsString.withDefault(""),
  sort: getSortingStateParser<RequestBoxSchema>().withDefault([]),
  // Column-driven filters (mapped to API filter_field/value in query layer)
  section_key: parseAsStringLiteral(sectionKeyEnum.options),
  is_seen: parseAsStringLiteral(["true", "false"]),
};

export const InboxSearchParamsCache = createSearchParamsCache(
  InboxSearchParamsParsers
);
