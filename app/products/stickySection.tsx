// "use client";
// // components/StickySection.tsx
// import React, { useEffect, useRef, useState } from "react";

// interface StickySectionProps {
//   children: React.ReactNode;
//   key?: string;
// }

// const StickySection: React.FC<StickySectionProps> = ({ children, key }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isSticky, setSticky] = useState(false);

//   const handleScroll = () => {
//     if (ref.current) {
//       const { top } = ref.current.getBoundingClientRect();
//       setSticky(top <= 0);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       key={key}
//       className={`w-full ${isSticky ? "sticky top-0" : "relative"}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default StickySection;

// components/StickySection.tsx

// "use client";
// import React from "react";
// import Sticky from "react-stickynode";

// interface StickySectionProps {
//   children: React.ReactNode;
//   key?: string;
//   className?: string;
// }

// const StickySection: React.FC<StickySectionProps> = ({
//   children,
//   key,
//   className,
// }) => {
//   return (
//     <Sticky className={className} enabled={true} top={0} key={key}>
//       <div>{children}</div>
//     </Sticky>
//   );
// };

// export default StickySection;

"use client";
import React from "react";
import StickyBox from "react-sticky-box";
interface StickySectionProps {
  children: React.ReactNode;
  key?: string;
  className?: string;
}

const StickySection: React.FC<StickySectionProps> = ({
  children,
  key,
  className,
}) => {
  return (
    <StickyBox className={className} offsetTop={10} key={key}>
      <div>{children}</div>
    </StickyBox>
  );
};

export default StickySection;
