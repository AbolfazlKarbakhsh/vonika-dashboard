import type { ComponentProps } from "react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { sidebarGroups } from "@/core/sidebar";

import SecondaryNav from "./secondary-nav";
import { InboxBadge } from "./components/InboxBadge";

import logo from "@/assets/img/logo.png"
import NavMain from "./components/NavMain";

export default function DashboardSidebar({
  ...props
}: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:!p-1.5"
              asChild
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="لوگو آریان خودرو جهان گستر"
                  width={70}
                  height={70}
                />
                <h3 className="font-semibold text-base text-primary">
                  آریان خودرو جهان گستر
                </h3>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <InboxBadge>{(section) => <NavMain section={section} />}</InboxBadge>
        <SecondaryNav section={sidebarGroups.secondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
