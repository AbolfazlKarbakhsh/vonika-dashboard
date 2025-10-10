import {
  IconAdjustmentsHorizontal,
  IconBuildingStore,
  IconFileInvoice,
  IconInbox,
  IconLayout,
  IconPackage,
  IconShield,
  IconShoppingBag,
  IconUserCheck,
  IconUsers,
} from "@tabler/icons-react";

import type { SidebarConfig } from "@/types/sidebar";

export const sidebarGroups: SidebarConfig = {
  main: {
    featured: {
      type: "link",
      title: "صندوق درخواست ها",
      href: "/inbox",
      icon: IconInbox,
      badge: 10,
    },
    items: [
      {
        id: "dashboard",
        type: "link",
        title: "پیشخوان",
        href: "/",
        icon: IconLayout,
      },
      {
        id: "products",
        type: "link",
        title: "کالا های ما",
        href: "/shop",
        icon: IconBuildingStore,
      },
      {
        id: "orders",
        type: "link",
        title: "سفارشات من",
        href: "/orders",
        icon: IconShoppingBag,
      },
      {
        id: "manage-products",
        type: "group",
        title: "کارتابل کالا",
        icon: IconPackage,
        children: [
          { type: "link", title: "کالا ها", href: "/products" },
          { type: "link", title: "تامین کننده ها", href: "/products/sources" },
          { type: "link", title: "ماهیت ها", href: "/products/apps" },
          { type: "separator", id: "manage-orders-separator" },
          { type: "link", title: "تمام سفارشات", href: "/orders/all" },
          { type: "link", title: "کارشناس مشتری", href: "/orders/customer-expert" },
          { type: "link", title: "سرپرست ترخیص", href: "/orders/clearance" },
          { type: "link", title: "مسئول حمل و نقل", href: "/orders/transport" },
          { type: "link", title: "واحد مالی", href: "/orders/financial" },
        ],
      },
      {
        id: "documents",
        type: "group",
        title: "کارتابل اسناد",
        icon: IconFileInvoice,
        children: [
          { type: "link", title: "اسناد من", href: "/documents" },
          { type: "link", title: "در انتظار امضا", href: "/documents/assigned" },
          { type: "link", title: "بررسی شده", href: "/documents/reviewed" },
        ],
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
  secondary: {
    items: [
      {
        id: "settings",
        type: "link",
        title: "تنظیمات",
        href: "/settings",
        icon: IconAdjustmentsHorizontal,
      },
    ],
  },
} as const;
