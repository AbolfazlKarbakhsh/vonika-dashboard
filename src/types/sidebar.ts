import type { Icon } from "@tabler/icons-react";

// import type { PermissionSchema } from "@/features/auth/types/permissions";

export type SidebarSectionKey = "main" ;

export type SidebarSeparator = {
  type: "separator";
  id?: string;
};

export type SidebarLabel = {
  type: "label";
  id?: string;
  title: string;
};

// export type PermissionRequirement<
//   R extends keyof PermissionSchema = keyof PermissionSchema,
// > = {
//   resource: R;
//   action: PermissionSchema[R]["action"];
// };

export type SidebarLink = {
  type: "link";
  id?: string;
  title: string;
  href: string;
  icon?: Icon;
  badge?: string | number;
  external?: boolean;
  targetBlank?: boolean;
  // permissions?: readonly PermissionRequirement[];
};

// We limit nesting to one level for predictable UI (SidebarMenu -> SidebarMenuSub)
export type SidebarGroup = {
  type: "group";
  id?: string;
  title: string;
  icon?: Icon;
  defaultOpen?: boolean;
  children: Array<SidebarLink | SidebarSeparator | SidebarLabel>;
};

export type SidebarItem =
  | SidebarLink
  | SidebarGroup
  | SidebarSeparator
  | SidebarLabel;

export type SidebarSection = {
  // Optional prominent action, rendered like the Inbox CTA
  items: SidebarItem[];
};

export type SidebarConfig = Record<SidebarSectionKey, SidebarSection>;
