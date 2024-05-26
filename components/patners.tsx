import React from "react";
import Image from "next/image";

const Partners: React.FC = () => {
  const partners = [
    {
      src: "https://xend.finance/icons/haskey.svg",
      alt: "Haskey",
      width: 400,
      height: 300,
    },
    {
      src: "https://xend.finance/icons/google-launchpad-3.svg",
      alt: "Google Launchpad",
      width: 400,
      height: 300,
    },
    {
      src: "https://xend.finance/icons/binance.png",
      alt: "Binance",
      width: 400,
      height: 300,
    },
  ];

  return (
    <div className="bg-neutral-900 p-4">
      <h1 className="mb-8 scroll-m-20 text-center text-2xl font-extrabold  tracking-tight md:text-4xl">
        Our Top <span className="text-orange-500">Investors</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center space-x-4 space-y-4">
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.src}
            alt={partner.alt}
            width={partner.width}
            height={partner.height}
            className="rounded-md bg-white object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
