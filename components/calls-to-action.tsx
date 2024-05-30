// components/ResponsiveComponent.tsx
import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
  buttonText: string;
  buttonLink: string;
  email: string;
}

const ResponsiveComponent: React.FC<Props> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  email,
}) => {
  return (
    <div className="relative h-[80dvh] w-[98dvw] max-w-4xl rounded-xl p-2 px-6 text-sm sm:text-base md:max-h-[60dvh] md:w-[50dvw] md:text-lg lg:text-xl xl:text-2xl">
      {/* Glassmorphism Background */}
      {/* <div className="absolute inset-0 bg-neutral-950 backdrop-blur-3xl"></div> */}

      <div className="relative overflow-hidden rounded-xl bg-neutral-950 px-6 py-24 text-center opacity-70 shadow-2xl ring-1 ring-yellow-500 sm:rounded-3xl sm:px-16">
        <Image
          src={imageUrl!}
          alt="Background"
          quality={75}
          fill={true}
          className="-z-10 object-cover opacity-20"
        />
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-yellow-600 sm:text-xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 text-balance text-xs text-white md:text-sm">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6">
          <a
            href={buttonLink}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {buttonText}
          </a>
          <a
            href={`mailto:${email}`}
            className="text-sm font-semibold leading-6 text-white hover:underline hover:underline-offset-2"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
