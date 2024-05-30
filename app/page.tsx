import HeroSection from "@/components/herosection";
import Image from "next/image";
import MarqueeDemo from "@/components/marque-slide";
import Statistics from "@/components/statistics";
import NewChart from "@/components/chart";
import { Suspense } from "react";
import LoadingComponent from "@/components/loaderComponent";
import Partners from "@/components/patners";
import Coin from "@/components/coin/aside";
import GlassmorphismComponent from "@/components/callToAction";
import Grid from "@/components/grid";
import FeaturesSection from "@/components/features";
import TimeLineComponent from "@/components/timeline";
import { VelocityScroll } from "@/components/call-to-action-compont";
import News from "@/components/news";
export default async function Home() {
  // await checkAuth();
  return (
    <>
      <div className="container mx-auto max-w-7xl bg-black px-6 pt-20">
        <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,255,0,0.5),_rgba(128,0,128,0.5))] blur-2xl md:h-80 md:w-80"></div>
        <HeroSection />
      </div>
      <MarqueeDemo />
      <Suspense fallback={<LoadingComponent className="h-[90dvh] " />}>
        <Statistics />
      </Suspense>

      <Suspense fallback={<LoadingComponent className="h-[90dvh]" />}>
        <NewChart />
      </Suspense>
      <Partners />
      <GlassmorphismComponent />
      <FeaturesSection />
      <TimeLineComponent />
      <VelocityScroll />
      <News />
      {/* <Grid /> */}
    </>
  );
}
