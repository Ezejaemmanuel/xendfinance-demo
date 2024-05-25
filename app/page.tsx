import HeroSection from "@/components/herosection";
import Image from "next/image";
import MarqueeDemo from "@/components/marque-slide";
import Statistics from "@/components/statistics";
import NewChart from "@/components/chart";
import { Suspense } from "react";
import LoadingComponent from "@/components/loaderComponent";
export default async function Home() {
  // await checkAuth();
  return (
    <>
      <div className="container mx-auto max-w-7xl px-6 pt-20">
        <div className="absolute -top-20 blur-2xl right-0 w-64 h-64 md:w-80 md:h-80 bg-[radial-gradient(circle,_rgba(255,255,0,0.5),_rgba(128,0,128,0.5))] rounded-full"></div>
        <HeroSection />
      </div>
      <MarqueeDemo />
      <Suspense fallback={<LoadingComponent className="h-24 " />}>
        <Statistics />
      </Suspense>
      <Suspense fallback={<LoadingComponent className="h-32 " />}>
        <NewChart />
      </Suspense>
    </>
  );
}
