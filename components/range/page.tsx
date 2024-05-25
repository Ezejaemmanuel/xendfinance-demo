// pages/index.tsx

import { Suspense } from "react";
import Coin from "./aside";

const Home: React.FC = () => {
  console.log("Rendering Home component");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CoinGecko API with Next.js</h1>
      <Suspense fallback={<div>loading .....</div>}>
        <Coin coinId="rwa-finance" />
      </Suspense>
    </div>
  );
};

export default Home;
