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

import NavMain from "./SidebarNav/NavMain";

import logo from "@/assets/img/logo.png"

export default function DashboardSidebar({
  ...props
}: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:!p-1.5 flex justify-center"
              asChild
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="داشبورد مدیریت ونیکا"
                  width={160}
                  height={160}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
                <NavMain section={sidebarGroups.main} />
      </SidebarContent>
    </Sidebar>
  );
}
