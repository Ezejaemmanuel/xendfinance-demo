import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import MarketDataChart from "./marketDataChart";

export default function NewChart() {
  return (
    <div className=" bg-neutral-950 flex flex-col justify-center items-center transition-colors duration-300">
      <div>
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Price per dollar of <span className="text-orange-500">$RWA</span> in
          24 hours
        </h1>
      </div>

      <MarketDataChart coinId="rwa-finance" />
    </div>
  );
}
