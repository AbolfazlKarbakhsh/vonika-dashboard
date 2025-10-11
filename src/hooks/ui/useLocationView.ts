import { sidebarGroups } from "@/core/sidebar";
import type { SidebarItem } from "@/types/sidebar";
import { useEffect } from "react";
import { useLocation } from "react-router";

  const sidebar = sidebarGroups.main.items;

function findTitleByHref(menu: SidebarItem[], href: string): string | null {
  for (const item of menu) {
    if (item.type === "link" && item.href === href) {
      return item.title;
    }
    if (item.type === "group" && item.children) {
      const found = findTitleByHref(item.children, href);
      if (found) return found;
    }
  }
  return null;
}


const useLocationView = ( ) => {
    const location = useLocation();
  useEffect(() => {
    const title = findTitleByHref(sidebar, location.pathname);
     document.title = title ?? "کارتابل آریان خودرو جهان گستر";
  }, [location]);
}
export default useLocationView;