import AuroraHero from "@/components/products/heroSection";
import MobileApp from "@/components/products/mobilePhone";
import React, { Suspense } from "react";
import StartBackGround from "./aside";
import { SdkPage } from "@/components/products/sdk";
import LargeNumber from "@/components/products/largeNumber";
import AutoYieldPage from "@/components/products/autoYield";
import XendBridge from "@/components/products/xendBridge";
import MigrationPage from "@/components/products/migration";
import MadWallet from "@/components/products/madWallet";
import SwitchWallet from "@/components/products/switchWallet";
const ProductPage = () => {
  return (
    <div className="flex flex-col gap-12">
      <AuroraHero />
      <div className="relative flex w-full flex-col items-center justify-center">
        <MobileApp />
        <Suspense>
          <StartBackGround />
        </Suspense>
        <div className={`w-full max-w-3xl border-t border-gray-300 px-12 `} />
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
        <Suspense>
          <LargeNumber number={2} className={"z-20 mb-10 mr-4 mt-4"} />
        </Suspense>

        <SdkPage />
      </div>
      <div className="relative flex w-full flex-col items-center justify-center ">
        <AutoYieldPage />
      </div>
      <div className="relative flex w-full flex-col items-center justify-center ">
        <XendBridge />
      </div>
      <div className="relative flex w-full flex-col items-center justify-center ">
        <MigrationPage />
      </div>
      <div className="relative flex w-full flex-col items-center justify-center ">
        <MadWallet />
      </div>
      <div className="relative flex w-full flex-col items-center justify-center ">
        <SwitchWallet />
      </div>
    </div>
  );
};

export default ProductPage;
