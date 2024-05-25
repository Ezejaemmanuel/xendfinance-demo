// // CountUp.tsx
// "use client";
// import { useCountUp } from "react-countup";
// import { useRef } from "react";

// interface CountUpProps {
//   end: number;
//   prefix?: string;
//   className: string;
//   enableScrollSpy?: boolean;
//   duration?: number;
//   scrollSpyDelay?: number;
//   currency?: boolean;
// }

// const formatCurrency = (value: number): string => {
//   return value.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
// };
// const formatCurrencyNaira = (value: number): string => {
//   return value.toLocaleString("en-US", {
//     style: "currency",
//     currency: "NGN",
//   });
// };
// export default function CountUp({
//   end,
//   prefix,
//   duration = 5,
//   className,
//   enableScrollSpy = false,
//   scrollSpyDelay = 0,
//   currency = false,
// }: CountUpProps) {
//   const countUpRef = useRef<HTMLSpanElement>(null);

//   useCountUp({
//     ref: countUpRef,
//     start: 0,
//     end,
//     duration: duration,
//     prefix,
//     enableScrollSpy,
//     scrollSpyDelay,
//     formattingFn: currency ? formatCurrency : undefined,
//   });

//   return <span ref={countUpRef} className={className} />;
// }

// CountUp.tsx

"use client";
import { useCountUp } from "react-countup";
import { useRef } from "react";

type CountUpType = "percentage" | "dollar" | "naira" | undefined;

interface CountUpProps {
  end: number;
  prefix?: string;
  className: string;
  enableScrollSpy?: boolean;
  duration?: number;
  scrollSpyDelay?: number;
  type?: CountUpType;
}

const formatCurrency = (value: number): string => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const formatCurrencyNaira = (value: number): string => {
  return value.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
};

const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};

export default function CountUp({
  end,
  prefix,
  duration = 5,
  className,

  enableScrollSpy = false,
  scrollSpyDelay = 0,
  type,
}: CountUpProps) {
  const countUpRef = useRef<HTMLSpanElement>(null);

  const getFormattingFn = () => {
    switch (type) {
      case "percentage":
        return formatPercentage;
      case "dollar":
        return formatCurrency;
      case "naira":
        return formatCurrencyNaira;
      default:
        return undefined;
    }
  };

  useCountUp({
    ref: countUpRef,
    start: 0,
    end,
    duration: duration,
    prefix,
    enableScrollSpy,
    scrollSpyDelay,
    formattingFn: getFormattingFn(),
  });

  return <span ref={countUpRef} className={className} />;
}
