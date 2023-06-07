import { Session } from "next-auth";
import { ReactNode } from "react";
import AppHeader from "@/modules/app/layout/component/app-header";
import AppSidebar from "@/modules/app/layout/component/app-sidebar";
import AppFooter from "@/modules/app/layout/component/app-footer";

type AppLayoutThrone = {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutThrone) => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <AppHeader />
      <AppSidebar />
      { children }
      <AppFooter />
    </div>
  )
}

export default AppLayout;