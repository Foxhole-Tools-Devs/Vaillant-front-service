import Layout from "@/modules/layout/layout";
import Home from "@/modules/home/home";
import { useSession } from "next-auth/react";
import { session } from "next-auth/core/routes";

export default function Index(){
  const  { data } = useSession();
  return (
    <Layout>
      <Home/>
    </Layout>
  )
}
