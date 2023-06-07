import Layout from "@/modules/layout/layout";

const Custom404 = () => {
  return (
    <Layout>
      <div className="w-full h-full bg-white dark:bg-gray-700">
        <h1 className="h-full font-exo text-center py-24">
          <span className="text-8xl text-secondary-500 align-top">#</span><span className="text-10xl text-white">404</span>
        </h1>
      </div>
    </Layout>
  )
}

export default Custom404;