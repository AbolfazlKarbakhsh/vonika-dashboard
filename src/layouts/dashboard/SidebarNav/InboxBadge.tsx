import { sidebarGroups } from "@/core/sidebar";

import type { SidebarSection } from "@/types/sidebar";

interface InboxBadgeProps {
  children: (section: SidebarSection) => React.ReactNode;
}

export function InboxBadge({ children }: InboxBadgeProps) {


  // Create a modified section with the dynamic badge
  const modifiedSection: SidebarSection = {
    ...sidebarGroups.main,
    featured: sidebarGroups.main.featured
      ? {
          ...sidebarGroups.main.featured,
          badge:  0,
        }
      : undefined,
  };

  return <>{children(modifiedSection)}</>;
}
