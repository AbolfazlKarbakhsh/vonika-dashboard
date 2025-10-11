
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// import PermissionsProvider from "@/providers/permissions";
import DashboardHeader from "./Header/DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router";
import useLocationView from "@/hooks/ui/useLocationView";

export default function DashboardLayout() {
  useLocationView();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <DashboardSidebar side="right" />
      <SidebarInset>
        <DashboardHeader />
        <main className="flex flex-1 flex-col p-6">
          {/* <PermissionsProvider>{children}</PermissionsProvider> */}
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
