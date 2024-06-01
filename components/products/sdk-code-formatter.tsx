"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useState, useRef, useEffect, memo, SetStateAction } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { motion, useAnimate, useInView } from "framer-motion";

const FeaturesDemo = () => {
  const [selected, setSelected] = useState(0);
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const inView = useInView(ref);
  const [manualSelect, setManualSelect] = useState(false);
  const codeImportsString = `import { XendFinance } from "@xendfinance/sdk";`;

  const initSDKString = `const sdk = new XendFinance({
    secret: "your-secret",
    network: "testnet",
    mnemonic: "your-mnemonic",
  });`;

  const createWalletString = `const wallet = await sdk.createWallet({
    password: "your-password",
  });`;

  const getWalletBalanceString = `const balance = await sdk.getBalance({
    walletAddress: "your-wallet-address",
  });`;

  const depositString = `const deposit = await sdk.deposit({
    amount: "100",
    asset: "DAI",
    walletAddress: "your-wallet-address",
  });`;

  const withdrawString = `const withdraw = await sdk.withdraw({
    amount: "50",
    asset: "DAI",
    walletAddress: "your-wallet-address",
  });`;

  const features = [
    {
      title: "Initialize SDK",
      text: "Set up the Xend Finance SDK with your secret, network, and mnemonic.",
      icon: "path/to/sdk-icon.svg",
    },
    {
      title: "Create Wallet",
      text: "Create a new wallet with a password.",
      icon: "path/to/wallet-icon.svg",
    },
    {
      title: "Get Wallet Balance",
      text: "Retrieve the balance of a wallet.",
      icon: "path/to/balance-icon.svg",
    },
    {
      title: "Deposit Funds",
      text: "Deposit funds into a wallet.",
      icon: "path/to/deposit-icon.svg",
    },
    {
      title: "Withdraw Funds",
      text: "Withdraw funds from a wallet.",
      icon: "path/to/withdraw-icon.svg",
    },
  ];

  const startAnimationSequence = async () => {
    if (!manualSelect) {
      for (let i = 0; i < features.length; i++) {
        if (manualSelect) break;
        setSelected(i);
        await animate(scope.current, { opacity: 1 });
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
      if (!manualSelect) startAnimationSequence();
    }
  };

  const handleClick = (index: SetStateAction<number>) => {
    setSelected(index);
    setManualSelect(true);
    setTimeout(() => {
      setManualSelect(false);
      startAnimationSequence();
    }, 5000);
  };

  useEffect(() => {
    if (inView) {
      startAnimationSequence();
    }
  }, [inView]);

  return (
    <div
      className="mx-auto flex items-center justify-center overflow-hidden "
      ref={ref}
    >
      <div className="relative mt-16 grid md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex md:col-span-5 md:mb-0 md:flex-col md:gap-4"
          ref={scope}
        >
          {features.map((el, index) => (
            <FeatureElement
              selected={selected}
              isSelected={selected === index}
              setSelected={handleClick}
              index={index}
              key={index}
              title={el.title}
              text={el.text}
              icon={el.icon}
            />
            // bg-[#0D0D11]
          ))}
        </motion.div>

        <div className="rounded-lg  border-[#14181D]   bg-[#0D0D11]  bg-opacity-90  backdrop-blur-lg backdrop-filter md:col-span-7">
          <div className="w-full border-b border-[#14181D]">
            <div className="flex max-w-max items-center gap-2 border-b-2 border-[#8690EA] bg-white bg-opacity-5 px-6 py-1.5 text-sm text-[#CCCDF0] text-opacity-75">
              <BiLogoTypescript />
              index.ts
            </div>
          </div>
          <div
            className="custom-scrollbar pb-24 pt-5 text-sm"
            style={{ height: `calc(100% - 35px)` }}
          >
            <CustomCode
              codeString={codeImportsString}
              display={selected === 0 || selected === 4}
            />
            <CustomCode
              codeString={initSDKString}
              display={selected >= 0}
              highlight={selected === 0}
              marginTop={16}
            />
            <CustomCode
              codeString={createWalletString}
              display={selected === 1 || selected >= 3}
              highlight={selected === 1}
              marginTop={16}
            />
            <CustomCode
              codeString={getWalletBalanceString}
              display={selected >= 2}
              highlight={selected === 2}
              marginTop={16}
            />
            <CustomCode
              codeString={depositString}
              display={selected === 3}
              highlight={selected === 3}
              marginTop={16}
            />
            <CustomCode
              codeString={withdrawString}
              display={selected === 4}
              highlight={selected === 4}
              marginTop={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureElement = ({
  selected,
  icon,
  isSelected,
  title,
  text,
  index,
  setSelected,
}: {
  selected: number;
  isSelected: boolean;
  icon: string;
  title: string;
  text: string;
  index: number;
  setSelected: any;
}) => {
  const thisElement = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      className="flex items-center"
      ref={thisElement}
      // onClick={() => setSelected(index)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`flex w-full max-w-xs cursor-pointer rounded-md border bg-slate-950  transition-all md:p-5 ${
          isSelected
            ? "border-t-main bg-opacity-5 md:border-orange-500"
            : "border-white border-opacity-10 bg-opacity-0 hover:bg-opacity-5"
        }`}
      >
        <div>
          <h3
            className={`text-xs  md:text-lg md:font-bold ${isSelected ? "text-red-500" : "text-white"}`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 hidden text-xs  text-opacity-75 ${isSelected ? "" : "text-white"} md:block`}
          >
            {text}
          </p>
        </div>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isSelected ? "50%" : "0" }}
        transition={{ duration: 0.5 }}
        className="hidden transition-all delay-300 duration-1000 md:block"
        style={{
          background: isSelected
            ? "linear-gradient(90deg, #8690EA 0%, rgba(134, 144, 234, 0) 100%)"
            : "rgb(255,255,255,0)",
          height: 2,
          opacity: isSelected ? 1 : 0,
        }}
      ></motion.div>
    </motion.div>
  );
};

const CustomCodeNoMemo = ({
  display,
  codeString,
  marginTop,
  maxHeight,
  highlight,
  delay,
}: {
  marginTop?: number;
  display: boolean;
  codeString: string;
  maxHeight?: number;
  delay?: number;
  highlight?: boolean;
}) => {
  return (
    <motion.div
      initial={{ maxHeight: 0, opacity: 0 }}
      animate={{
        maxHeight: display ? (maxHeight ? maxHeight : 100) : 0,
        opacity: display ? 1 : 0,
        marginTop: display ? (marginTop ? marginTop : 0) : 0,
      }}
      transition={{ duration: 0.5, delay: delay ? delay / 1000 : 0 }}
      className={`w-full border-l-2 ${
        highlight ? "border-orange-500 bg-slate-800" : "border-transparent"
      }`}
    >
      <div className="px-4 py-2">
        <SyntaxHighlighter
          language="typescript"
          style={nord}
          customStyle={{ background: "transparent", padding: 0, margin: 0 }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
};

const CustomInner = ({
  display,
  codeString,
  maxHeight,
  showOnHover,
  highlight,
  top,
}: {
  display: boolean;
  codeString: string;
  maxHeight?: number;
  showOnHover?: boolean;
  highlight?: boolean;
  top?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: display ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full border-l-2 ${
        highlight ? "border-purple-500 bg-gray-800" : "border-transparent"
      }`}
    >
      <div className="px-4 py-2">
        <SyntaxHighlighter
          language="typescript"
          style={nord}
          customStyle={{ background: "transparent", padding: 0, margin: 0 }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
};

const CustomCode = memo(CustomCodeNoMemo);

export default FeaturesDemo;
