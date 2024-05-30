// pages/index.tsx
import React from "react";

const articles = [
  {
    href: "#",
    imgSrc:
      "https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1",
    title: "Revenge of the Never Trumpers",
    description:
      "Meet the Republican dissidents fighting to push Donald Trump out of office—and reclaim their party",
    category: "Election",
    main: true,
  },
  {
    href: "#",
    imgSrc:
      "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
    title: "Trump Steps Back Into Coronavirus Spotlight",
    main: false,
  },
  {
    href: "#",
    imgSrc:
      "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1",
    title: "How Trump's Mistakes Became Biden's Big Breaks",
    main: false,
  },
  {
    href: "#",
    imgSrc:
      "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1",
    title: "Survey: Many Americans 'Dissatisfied' With U.S.",
    main: false,
  },
  {
    href: "#",
    imgSrc:
      "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1",
    title: "How Trump's Mistakes Became Biden's Big Breaks",
    main: false,
  },
  {
    href: "#",
    imgSrc:
      "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1",
    title: "Survey: Many Americans 'Dissatisfied' With U.S.",
    main: false,
  },
  {
    href: "#",
    imgSrc:
      "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
    title: "Trump Steps Back Into Coronavirus Spotlight",
    main: false,
  },
];

const News: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-screen-xl bg-neutral-950 p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
        <div className="sm:col-span-5">
          <a href={articles[0].href}>
            <div
              className="overflow-hidden bg-cover text-center"
              style={{
                minHeight: "300px",
                backgroundImage: `url(${articles[0].imgSrc})`,
              }}
              title="Woman holding a mug"
            />
          </a>
          <div className="mt-3 flex flex-col justify-between rounded-b  leading-normal lg:rounded-b-none lg:rounded-r">
            <div>
              <a
                href={articles[0].href}
                className="text-xs font-medium uppercase text-white transition duration-500 ease-in-out hover:text-gray-900"
              >
                {articles[0].category}
              </a>
              <a
                href={articles[0].href}
                className="mb-2 block text-2xl font-bold text-white transition duration-500 ease-in-out hover:text-indigo-600"
              >
                {articles[0].title}
              </a>
              <p className="mt-2 text-base text-white">
                {articles[0].description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:col-span-7 lg:grid-cols-3">
          {articles.slice(1).map((article, index) => (
            <div key={index}>
              <a href={article.href}>
                <div
                  className="h-40 overflow-hidden bg-cover text-center"
                  style={{ backgroundImage: `url(${article.imgSrc})` }}
                  title="Article Image"
                />
              </a>
              <a
                href={article.href}
                className="text-md my-2 inline-block font-semibold text-white transition duration-500 ease-in-out hover:text-indigo-600"
              >
                {article.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
