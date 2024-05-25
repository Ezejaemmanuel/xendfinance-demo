"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import CountUp from "./countup";

const data = [
  {
    number: 2534023452,
    label: "Fee paying accounts, all time",
    color: "#bd1e59",
  },
  { number: 303427891221, label: "NFTs minted", color: "#00d8ff" },
  {
    number: 332917819821,
    label: "Median fee per transaction",
    color: "#00ff89",
  },
];

export default function Statistics() {
  return (
    <Card className="bg-[#000000] py-6 flex flex-col md:flex-row text-white">
      <CardHeader className="mb-4">
        <CardTitle className="text-4xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Join a community of millions.
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-10">
        {data.map((item, index) => (
          <NumberDisplay
            key={index}
            number={item.number}
            label={item.label}
            color={item.color}
            index={index}
          />
        ))}
      </CardContent>
    </Card>
  );
}

interface NumberDisplayProps {
  number: number;
  label: string;
  color: string;
  index: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({
  number,
  label,
  index,
  color,
}) => {
  // Extract numeric value from the string for CountUp

  return (
    <div className="space-y-2">
      <div className={`text-3xl md:text-6xl font-bold`} style={{ color }}>
        <CountUp
          end={number}
          duration={3 * index * 1.5}
          enableScrollSpy
          scrollSpyDelay={100}
          className=""
        />
      </div>
      <div className="text-sm uppercase" style={{ color }}>
        {label}
      </div>
    </div>
  );
};
