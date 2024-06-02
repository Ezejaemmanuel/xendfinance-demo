import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "telegram",
  "twitter",
  "youtube",
  "reddit",
  "discord",
  "medium",
  "facebook",
  "github",
];

export function IconCloudDemo() {
  return (
    <div className=" flex h-screen w-screen flex-col items-center justify-center bg-neutral-950 py-10">
      <div className="max-w-2xl text-center text-white">
        <h1 className="mb-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-orange-600 to-sky-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          Join Our Communities
        </h1>

        <p className="md:text-md mb-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-orange-600 to-sky-700 bg-clip-text text-xs font-bold text-transparent sm:text-sm">
          Be the first to learn about company updates, product launches, and
          giveaways.
        </p>
      </div>
      <div className=" max relative mx-auto flex h-full max-w-[32rem] items-center  justify-center overflow-hidden px-20  py-6 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <SocialIcons />
    </div>
  );
}

import React from "react";
import {
  FaTelegram,
  FaTwitter,
  FaYoutube,
  FaReddit,
  FaDiscord,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
const Icons = [
  { name: "telegram", color: "#0088cc", icon: FaTelegram },
  { name: "twitter", color: "#1DA1F2", icon: FaTwitter },
  { name: "youtube", color: "#FF0000", icon: FaYoutube },
  { name: "reddit", color: "#FF5700", icon: FaReddit },
  { name: "discord", color: "#7289DA", icon: FaDiscord },
  { name: "medium", color: "", icon: FaMedium },
  { name: "facebook", color: "#1877F2", icon: FaFacebook },
  { name: "github", color: "", icon: FaGithub },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-wrap space-x-4 space-y-4">
      {Icons.map((slug) => {
        const IconComponent = slug.icon;
        return (
          <a
            key={slug.name}
            href={`https://${slug.name}.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2"
            style={{ backgroundColor: "transparent" }}
          >
            <IconComponent size={40} color={slug.color} />
          </a>
        );
      })}
    </div>
  );
};
