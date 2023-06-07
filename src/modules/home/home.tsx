import HeroSection from "@/modules/home/components/hero-section";
import ApplicationPresentation from "@/modules/home/components/application-presentation";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="w-full absolute -bottom-6">
        <svg className="relative w-full" viewBox="0 0 1440 320">
          <path className="fill-secondary-100 dark:fill-primary-950" d="M0,64L80,58.7C160,53,320,43,480,74.7C640,107,800,181,960,197.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          <path className="fill-secondary-200 dark:fill-primary-900" d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,170.7C840,192,960,256,1080,277.3C1200,299,1320,277,1380,266.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      <div className="py-8 h-40 bg-secondary-200 dark:bg-primary-900" />
      <ApplicationPresentation />
    </div>
  )
}


export default Home;