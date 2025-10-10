import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";

import type { SidebarGroup as SidebarGroupItem, SidebarLink, SidebarSection } from "@/types/sidebar";
import { cn } from "@/lib/utils";

function FeaturedCTA({ link }: { link?: SidebarLink }) {
  if (!link) return null;
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center gap-2">
        <SidebarMenuButton
          className="h-10 min-w-8 bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90 hover:text-white" 
          asChild
        >
          <Link to={link.href} className="flex items-center gap-2" target={link.targetBlank ? "_blank" : undefined} rel={link.targetBlank ? "noopener" : undefined}>
            {link.icon && <link.icon />}
            <span>{link.title}</span>
            {link.badge != null && (
              <Badge appearance="light" className="mr-auto size-6 rounded-full font-semibold">
                {String(link.badge)}
              </Badge>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function MainNavLinkItem({ link, isActive }: { link: SidebarLink; isActive: (href: string) => boolean }) {
  return (
    <SidebarMenuItem key={link.id ?? link.title} className="list-none">
      <SidebarMenuButton isActive={isActive(link.href)} asChild>
        <Link to={link.href} target={link.targetBlank ? "_blank" : undefined} rel={link.targetBlank ? "noopener" : undefined}>
          {link.icon && <link.icon />}
          <span>{link.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function MainNavGroupItem({
  group,
  onFocus,
  isFocused,
  onExitFocus,
  isActive,
}: {
  group: SidebarGroupItem;
  onFocus?: () => void;
  isFocused?: boolean;
  onExitFocus?: () => void;
  isActive: (href: string) => boolean;
}) {
  return (
    <Collapsible key={group.id ?? group.title} asChild open={!!isFocused} className="group/collapsible">
      <SidebarMenuItem className="list-none">
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={group.title} onClick={isFocused ? onExitFocus : onFocus}>
            {isFocused ? <IconChevronRight /> : group.icon && <group.icon />}
            <span>{group.title}</span>
            <IconChevronLeft
              className={cn(
                "group-data-[state=open]/collapsible:-rotate-90 mr-auto transition-transform duration-200",
                isFocused && "hidden"
              )}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub >
            {group.children.map((sub) => {
              if (sub.type === "separator") {
                return <li key={sub.id ?? `sub-sep-${Math.random()}`} className="my-1 border-sidebar-border border-t" />;
              }
              if (sub.type === "label") {
                return <div key={sub.id ?? sub.title} className="px-2 py-1 text-sidebar-foreground/70 text-xs">{sub.title}</div>;
              }
              return (
                <SidebarMenuSubItem key={sub.id ?? sub.title} >
                  <SidebarMenuSubButton asChild isActive={isActive(sub.href)}>
                    <Link to={sub.href} target={sub.targetBlank ? "_blank" : undefined} rel={sub.targetBlank ? "noopener" : undefined}>
                      <span>{sub.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function MainNavItemsList({
  items,
  isActive,
  onFocusGroup,
}: {
  items: SidebarSection["items"];
  isActive: (href: string) => boolean;
  onFocusGroup: (key: string) => void;
}) {
  return (
    <>
      {items.map((item) => {
        if (item.type === "separator") return <SidebarSeparator key={item.id ?? `sep-${Math.random()}`} />;
        if (item.type === "label") return <div key={item.id ?? item.title} className="px-2 py-1 text-sidebar-foreground/70 text-xs">{item.title}</div>;
        if (item.type === "link") return <MainNavLinkItem key={item.id ?? item.title} link={item} isActive={isActive} />;

        const group = item as SidebarGroupItem;
        const key = group.id ?? group.title;
        return <MainNavGroupItem key={key} group={group} onFocus={() => onFocusGroup(key)} isActive={isActive} />;
      })}
    </>
  );
}

export default function NavMain({ section }: { section: SidebarSection }) {
  const location = useLocation();
  const isActive = (href: string) => href === location.pathname;
  const [focusedGroupKey, setFocusedGroupKey] = useState<string | null>(null);

  const focusedGroup = focusedGroupKey
    ? (section.items.find((i) => i.type === "group" && (i.id ?? i.title) === focusedGroupKey) as SidebarGroupItem | undefined)
    : undefined;

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2 overflow-x-hidden">
        <FeaturedCTA link={section.featured} />
        <div className="w-full space-y-2">
          {focusedGroup ? (
            <MainNavGroupItem
              group={focusedGroup}
              isFocused
              onExitFocus={() => setFocusedGroupKey(null)}
              isActive={isActive}
            />
          ) : (
            <MainNavItemsList items={section.items} isActive={isActive} onFocusGroup={(key) => setFocusedGroupKey(key)} />
          )}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
