import React from "react";
import RealismButton from "../realism-button";

const XendDeveloper: React.FC = () => {
  return (
    <section className="bg-neutral-950 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mx-auto mb-4 max-w-4xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-300 via-red-800  to-blue-700 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
            Xend Finance Developer Platform
          </p>
          <h1 className="font-inter mx-auto max-w-2xl px-6 text-lg text-gray-300">
            Build on our robust Layer-2 DeFi protocol with automated yield
            aggregation and governance. Access comprehensive resources and join
            our developer community to innovate in decentralized finance.
          </h1>
          <div className="mt-9 px-8 sm:flex sm:items-start sm:justify-center sm:space-x-5 sm:px-0">
            <a
              href="#"
              title=""
              className=""
              // className="mb-3 inline-flex w-full items-center justify-center rounded-xl border-2 border-transparent bg-gray-900 px-8 py-3 text-lg font-bold text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:mb-0 sm:w-auto"
              role="button"
            >
              <RealismButton text={"Get Started"} />
            </a>
            {/* <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-xl border-2 border-gray-900 bg-gray-100 px-8 py-3 text-lg font-bold text-gray-900 transition-all duration-200 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:w-auto"
              role="button"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
      <div className="bg-neutral-950">
        <div className="relative mx-auto mt-4 md:mt-8">
          <div className="lg:mx-auto lg:max-w-4xl">
            <img
              className="px-4 md:px-8"
              src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
              alt="Xend Finance"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default XendDeveloper;
