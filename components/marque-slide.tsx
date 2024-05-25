import Marquee from "@/components/magicui/marquee";
import { FeatureBox } from "./marque-slide-2";
const insuranceData = [
  {
    text: "Funds insured by",
    img: "https://xend.finance/icons/tidal-dark.svg",
    link: "https://medium.com/tidal-finance/xend-finance-buys-1-million-worth-of-coverage-tvl-through-tidal-finance-12648b604d08",
  },
  {
    text: "Audited by",
    img: "https://xend.finance/icons/certik-dark.svg",
    link: "https://www.certik.com/projects/xendfinance",
  },
  {
    text: "",
    img: "https://xend.finance/icons/techrate.svg",
    link: "https://techrate.org/",
  },
  {
    text: "",
    img: "https://xend.finance/icons/vidma.png",
    link: "https://www.vidma.io/",
  },
  {
    text: "",
    img: "https://xend.finance/icons/Omniscia.svg",
    link: "https://omniscia.io/",
  },
];

const MarqueeDemo = () => {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {insuranceData.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse={true} className="[--duration:20s]">
        <FeatureBox />
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeDemo;

import { cn } from "@/lib/utils";
import Image from "next/image";

interface ReviewCardProps {
  img: string;
  text: string;
  link: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ img, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden h-32 rounded-xl border p-4",
        // light styles
        "border-gray-950 bg-orange-500 hover:bg-neutral-950",
        // dark styles
        "dark:border-orange-50 dark:bg-orange-300 dark:hover:bg-orange-50"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black">
            {text}
          </figcaption>
        </div>
        <Image
          className="rounded-full  text-white"
          width={300}
          height={150}
          alt=""
          src={img}
        />
      </div>
    </a>
  );
};
