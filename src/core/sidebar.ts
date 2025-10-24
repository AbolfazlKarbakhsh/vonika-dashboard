import {
  IconLayout,
  IconShield,
  IconUserCheck,
  IconUsers,
} from "@tabler/icons-react";

import type { SidebarConfig } from "@/types/sidebar";

export const sidebarGroups: SidebarConfig = {
  main: {
    items: [
      {
        id: "dashboard",
        type: "link",
        title: "پیشخوان",
        href: "/",
        icon: IconLayout,
      },

      {
        id: "users",
        type: "group",
        title: "مدیریت کاربران",
        icon: IconUsers,
        children: [
          { type: "link", title: "کاربران", href: "/users", icon: IconUsers },
          { type: "link", title: "مدیریت نقش ها", href: "/users/roles", icon: IconUserCheck },
          { type: "link", title: "سطوح دسترسی", href: "/users/permissions", icon: IconShield },
        ],
      },
    ],
  },

} as const;
