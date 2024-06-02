import AutoYieldPage from "./why-use-sdk";

const sectionsData = [
  {
    title: "Automated Yield Aggregator",
    description:
      "The Xend Finance lending protocol aggregator – unlike other DeFi protocols who only list other Layer-1 DeFi protocols – will automatically shift funds across different lending protocols to provide very high yields without any input from the user.",
    imageUrl: "/why-1.png",
    reverse: false,
  },
  {
    title: "x-Vault system",
    description:
      "The x-vault system is a system that implements multiple yield generation strategies that automatically seek out the highest yields available in DeFi. These x-vaults accept your deposit, then the vault system distributes the funds through multiple strategies, which automatically seek out the best yields (inspired by yearn vaults). Supported Blockchains: BSC and Polygon.",
    imageUrl: "/why-2.png",
    reverse: true,
  },
  {
    title: "Governance",
    description:
      "The Xend Finance governance system will determine strategies that are accepted into the vaults and community members who participate in governance earn a part of the processing fees from the vault operations. The Xend Finance governance system will be deployed across blockchains and users can govern on multiple blockchains.",
    imageUrl: "/why-3.png",
    reverse: false,
  },
];

const WhyUseSDK = () => {
  return <AutoYieldPage sections={sectionsData} />;
};

export default WhyUseSDK;
