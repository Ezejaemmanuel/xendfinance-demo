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
    <div className="p-4 bg-neutral-900">
      <h1 className="text-2xl scroll-m-20 font-extrabold tracking-tight md:text-4xl  text-center mb-8">
        Our Top <span className="text-orange-500">Investors</span>
      </h1>
      <div className="flex flex-wrap justify-center space-x-4">
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.src}
            alt={partner.alt}
            width={partner.width}
            height={partner.height}
            className="object-contain bg-white dark:bg-neutral-800"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
