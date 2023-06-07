import Layout from "@/modules/layout/layout";

const Custom500 = () => {
  return (
    <Layout>
      <div className="w-full h-full bg-white dark:bg-gray-700">
        <h1 className="h-full font-exo text-center py-24">
          <span className="text-8xl text-secondary-500 align-top">#</span><span className="text-10xl text-white">500</span>
        </h1>
        <h3 className="h-full font-exo text-center">
          <span className="text-xl text-secondary-500 align-top">An unexpected Error was thrown</span>
        </h3>
      </div>
    </Layout>
  )
}

export default Custom500;