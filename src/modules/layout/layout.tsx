import { ReactNode } from "react";
import Header from "@/modules/layout/components/header";
import Footer from "@/modules/layout/components/footer";
import { Session } from "next-auth";

type LayoutProps =  {
  session?: Session ;
  children: ReactNode;
}

const Layout = ( {session, children}: LayoutProps ) => {
  return (
    <>
      <Header/>
      <div className="w-full h-full min-h-[calc(100vh-432px)] bg-white dark:bg-gray-700">
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Layout;