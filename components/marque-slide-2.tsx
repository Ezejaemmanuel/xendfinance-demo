import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  summary: string;
  width: number;
  height: number;
}

export const featureData = [
  {
    href: "https://www.coindesk.com/binance-labs-xend-finance-nigeria-defi",
    imgSrc: "https://xend.finance/icons/coindesk.svg",
    imgAlt: "coindesk",
    summary:
      "“Binance Labs-Backed 'DeFi Credit Union' Bringing Higher Yields to Savers in Nigeria”",
    width: 250,
    height: 150,
  },
  {
    href: "https://techcrunch.com/2021/03/22/binance-backed-xend-finance-launches-defi-platform-for-credit-unions-in-africa/",
    imgSrc: "https://xend.finance/icons/techcrunch.svg",
    imgAlt: "techcrunch",
    summary:
      "Binance-backed Xend Finance launches DeFi platform for credit unions in Africa",
    width: 100,
    height: 100,
  },
  {
    href: "https://decrypt.co/62369/xend-finance-is-bringing-defi-services-to-africa",
    imgSrc: "https://xend.finance/icons/decrypt.svg",
    imgAlt: "decrypt",
    summary: "Xend Finance is Bringing DeFi Services to Africa",
    width: 200,
    height: 100,
  },
];

const Card: React.FC<CardProps> = ({
  href,
  imgSrc,
  imgAlt,
  summary,
  width,
  height,
}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col items-center justify-between w-64 h-40 overflow-hidden rounded-xl border p-4 transition-transform duration-300 transform hover:scale-105 bg-orange-300 shadow-lg">
      <div className="flex flex-row space-y-2 space-x-4 items-center justify-between w-full">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={width}
          height={height}
          className="rounded-full"
        />
        <ArrowRight className="text-red-500 animate-bounce text-lg" />
      </div>
      <p className="text-sm mt-2 text-black font-medium tracking-wide leading-relaxed">
        {summary}
      </p>
    </div>
  </Link>
);

export const FeatureBox: React.FC = () => (
  <div className="flex flex-row gap-4">
    {featureData.map((item, index) => (
      <Card key={index} {...item} />
    ))}
  </div>
);
