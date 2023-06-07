import Image from "next/image";
import Button from "@/shared/components/inputs/Button";

const HeroSection = () => {
  return (
    <section className="flex flex-row w-full dark:bg-gradient-to-tr dark:from-gray-800 dark:to-primary-950">
      <div className="mx-auto max-w-screen-xl pl-4 py-48 lg:flex lg:h-screnn lg:items-center">
        <div className="flex flex-row justify-items-center h-72">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-secondary-500 to-info-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl font-encode-sc">
              Plan Organize Conquer with
              <div className="text-white text-6xl">Vaillant</div>
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed dark:text-primary-100 text-primary-950">
              Vaillant is made to plan, organize your foxhole regiment
            </p>
            <div className="flex flex-row w-full items-center justify-center align-middle p-4 gap-16">
              <div>
                <Button className="w-40 p-2 text-xl bg-secondary-500 rounded-xl hover:bg-white border border-secondary-500 hover:text-secondary-500 transition-all">
                  Register
                </Button>
              </div>
              <div>
                <Button className="w-40 p-2 text-xl dark:bg-gray-800 rounded-xl text-secondary-500 border border-secondary-500 dark:hover:bg-secondary-500 hover:text-primary-950 transition-all">
                  See more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 relative min-w-[480px] max-w-[1920px]" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }}>
        <Image className=""
               src="/HeroPageImage.jpg"
               alt="Foxhole_Arm_Race_WallPaper"
               objectFit="cover"
               fill/>
      </div>
    </section>
  );
}

export default HeroSection;