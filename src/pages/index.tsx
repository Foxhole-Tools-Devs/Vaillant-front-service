import Layout from "@/modules/layout/layout";
import Home from "@/modules/home/home";
import { useSession } from "next-auth/react";

export default function Index(){
  const  { data } = useSession();
  return (
    <Layout>
      <Home/>
    </Layout>
  )
}
