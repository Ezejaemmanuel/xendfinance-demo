import AuroraHero from "@/components/products/heroSection";
import MobileApp from "@/components/products/mobilePhone";
import React, { Suspense } from "react";
import StartBackGround from "./aside";
import { SdkPage } from "@/components/products/sdk";

const ProductPage = () => {
  return (
    <div className="">
      <AuroraHero />
      <div className="relative flex w-full flex-col items-center justify-center">
        <MobileApp />
        <Suspense>
          <StartBackGround />
        </Suspense>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center pt-8">
        <SdkPage />
      </div>
    </div>
  );
};

export default ProductPage;
