import React from "react";
import HeroSection from "./sections";
import { MotionDiv } from "./animateOnEnter";

const sectionsData = [
  {
    title: "$XEND To $RWA Migration is live",
    description:
      "Experience the seamless migration from $XEND to Real World Assets (RWA). Xend Finance offers you the opportunity to stake your assets in real-world investments, providing stability and higher returns. Our community is at the forefront of financial innovation, leading the way in merging traditional finance with the limitless potential of decentralized finance. Join us in this transformative journey and maximize your earnings with RWA staking.",
    buttonText1: "Learn More",
    buttonText2: "Stake Now",
    imageUrl: "/image-bg-1.png",
    reverse: false,
  },
  {
    title:
      "Revolutionizing Finance with Cryptocurrency-backed Real World Assets (RWA)",
    description:
      "Xend Finance is dedicated to bringing the benefits of cryptocurrency to real-world investments. By leveraging blockchain technology, we provide our users with access to high-yield, stable investment opportunities traditionally reserved for institutional investors. Our platform ensures security, transparency, and efficiency, offering a new era of financial freedom. Discover how you can diversify your portfolio with cryptocurrency-backed RWAs and achieve financial independence.",
    buttonText1: "Discover",
    buttonText2: "Join Us",
    imageUrl: "/image-bg-2.png",
    reverse: true,
  },
  {
    title: "Funds insured by",
    description:
      "At Xend Finance, we prioritize the security of your investments. Our funds are insured, providing peace of mind to our community members. Audited by top security firms, we ensure that your assets are protected and that our platform adheres to the highest standards of security. Join a community that values safety and reliability as much as you do.",
    buttonText1: "Our Security",
    buttonText2: "Audit Reports",
    imageUrl: "/image-bg-4.png",
    reverse: false,
  },
  {
    title: "Award-Winning Technology Featured On",
    description:
      "Xend Finance has been recognized globally for its innovative approach to decentralized finance. Our award-winning technology has been featured on platforms like Coindesk, highlighting our efforts to bring higher yields to savers in Nigeria and across Africa. Backed by Binance Labs, we are committed to providing DeFi solutions that are accessible to everyone. Learn more about our journey and the impact we're making in the financial world.",
    buttonText1: "Read More",
    buttonText2: "Our Story",
    imageUrl: "/image-bg-5.png",
    reverse: true,
  },
];
//this is the supeermavenn
const Section: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {sectionsData.map((section, index) => (
        <MotionDiv key={index}>
          <HeroSection
            key={index}
            title={section.title}
            description={section.description}
            buttonText1={section.buttonText1}
            buttonText2={section.buttonText2}
            imageUrl={section.imageUrl}
            reverse={section.reverse}
          />
        </MotionDiv>
      ))}
    </div>
  );
};

export default Section;
