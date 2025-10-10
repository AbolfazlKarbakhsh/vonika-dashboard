import type { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import type { SidebarItem, SidebarSection, SidebarLink } from "@/types/sidebar";

type SecondaryNavProps = {
  section: SidebarSection;
} & ComponentPropsWithoutRef<typeof SidebarGroup>;

// تابع بازگشتی برای رندر آیتم‌ها
function renderItem(item: SidebarItem) {
  console.log(item)
  switch (item.type) {
    case "link": {
      const IconComponent = item.icon;
      return (
        <SidebarMenuItem key={item.id ?? item.title}>
          <SidebarMenuButton asChild>
            <Link
              to={item.href}
              target={item.targetBlank ? "_blank" : undefined}
              rel={item.targetBlank ? "noopener" : undefined}
            >
              {IconComponent && <IconComponent className="mr-2 w-4 h-4" />}
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    }

    case "group":
      return (
        <SidebarMenuItem key={item.id ?? item.title}>
          <SidebarMenuButton>{item.title}</SidebarMenuButton>
          <SidebarMenu>
            {item.children.map(renderItem)}
          </SidebarMenu>
        </SidebarMenuItem>
      );

    case "separator":
      return (
        <SidebarMenuItem key={item.id ?? Math.random()}>
          <hr className="border-t border-gray-200" />
        </SidebarMenuItem>
      );

    case "label":
      return (
        <SidebarMenuItem key={item.id ?? item.title}>
          <span className="font-semibold text-gray-500">{item.title}</span>
        </SidebarMenuItem>
      );

    default:
      return null;
  }
}


export default function SecondaryNav({ section, ...props }: SecondaryNavProps) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {section.items.map(renderItem)}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
