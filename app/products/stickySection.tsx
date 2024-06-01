"use client";
// components/StickySection.tsx
import React, { useEffect, useRef, useState } from "react";

interface StickySectionProps {
  children: React.ReactNode;
}

const StickySection: React.FC<StickySectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      setSticky(top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full ${isSticky ? "sticky top-0" : "relative"}`}
    >
      {children}
    </div>
  );
};

export default StickySection;
