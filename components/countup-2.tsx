"use client";
import { useCountUp } from "react-countup";
import { useRef } from "react";

type CountUpType = "percentage" | "dollar" | "naira" | undefined;

interface CountUpProps {
  end: number;
  prefix?: string;
  prefixStyle?: string;
  className: string;
  spanClassName?: string;
  enableScrollSpy?: boolean;
  duration?: number;
  scrollSpyDelay?: number;
  type?: CountUpType;
  decimalPlaces?: number; // New prop for specifying decimal places
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

const formatDecimal = (value: number, decimalPlaces: number): string => {
  return value.toFixed(decimalPlaces);
};

export default function CountUp({
  end,
  prefix,
  prefixStyle,
  duration = 5,
  className,
  spanClassName,
  enableScrollSpy = false,
  scrollSpyDelay = 0,
  type,
  decimalPlaces = 18, // Default decimal places
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
        return (value: number) => formatDecimal(value, decimalPlaces);
    }
  };

  const decimals = end % 1 !== 0 ? decimalPlaces : 0; // Use the provided decimal places if the number has decimals

  useCountUp({
    ref: countUpRef,
    start: 0,
    end,
    duration: duration,
    enableScrollSpy,
    scrollSpyDelay,
    decimals,
    formattingFn: getFormattingFn(),
  });

  return (
    <span className={className}>
      {prefix && <span className={prefixStyle}>{prefix}</span>}
      <span className={spanClassName} ref={countUpRef} />
    </span>
  );
}
