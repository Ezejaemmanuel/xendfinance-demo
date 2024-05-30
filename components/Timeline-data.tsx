import { BlurIn } from "./magicui/blurIn";
import { TimelineData } from "./timeline.data";

interface TimelineProps {
  data: TimelineData;
  index: number;
}

export const TimelineLarge: React.FC<TimelineProps> = ({ data, index }) => {
  return (
    <section>
      <div className="bg-black py-8 text-white">
        <div className="container mx-auto  flex flex-col items-start md:my-24 md:flex-row">
          <div className="sticky mt-2 flex w-full flex-col px-8 md:top-36 md:mt-12 lg:w-1/3">
            {/* <p className="tracking-loose ml-2 uppercase text-yellow-300"> */}
            {/* <BlurIn index={index}>{data.subtitle}</BlurIn> */}
            <BlurIn
              text={data.subtitle}
              className="tracking-loose ml-2 uppercase text-yellow-300"
              delay={0}
            />
            {/* </p> */}
            {/* <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed"> */}
            {/* <BlurIn index={index}>{data.title}</BlurIn> */}
            <BlurIn
              text={data.title}
              className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed"
              delay={1}
            />
            {/* </p> */}
            {/* <p className="mb-4 text-sm text-gray-50 md:text-base">
              {data.description}
            </p> */}
            <BlurIn
              text={data.description}
              className="mb-4 text-sm text-gray-50 md:text-base"
              delay={2}
            />
            <a
              href="#"
              className="mr-auto rounded border border-yellow-300 bg-transparent px-4 py-2 text-yellow-300 shadow hover:border-transparent hover:bg-yellow-300 hover:text-white hover:shadow-lg"
            >
              Explore Now
            </a>
          </div>
          <div className="sticky ml-0 w-full md:ml-12 lg:w-2/3">
            <div className="container mx-auto h-full w-full">
              <div className="wrap relative h-full overflow-hidden p-10">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                {data.events.map((event, index) => (
                  <div
                    key={index}
                    className={`mb-8 flex justify-between ${index % 2 === 0 ? "flex-row-reverse" : ""} w-full items-center ${index % 2 === 0 ? "left-timeline" : "right-timeline"}`}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div
                      className={`order-1 w-5/12 px-1 py-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                      {/* <p className="mb-3 text-base text-yellow-300">
                        {event.date}
                      </p> */}
                      <BlurIn
                        text={event.date}
                        delay={index * 0.2}
                        className="mb-3 text-base text-yellow-300"
                      />
                      {/* <h4 className="mb-3 text-lg font-bold md:text-2xl">
                        {event.title}
                      </h4> */}
                      <BlurIn
                        text={event.title}
                        delay={index * 0.2}
                        className="mb-3 text-lg font-bold md:text-2xl"
                      />
                      {/* <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                        {event.description}
                      </p> */}
                      <BlurIn
                        text={event.description}
                        delay={index * 0.2}
                        className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="timeline illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineProps {
  data: TimelineData;
  index: number;
}

export const TimelineSmall: React.FC<TimelineProps> = ({ data, index }) => {
  return (
    <section>
      <div className="bg-black py-8 text-white">
        <div className="container mx-auto flex flex-col items-start md:my-24 md:flex-row">
          <div className="mt-2 flex w-full flex-col px-8 md:sticky md:top-36 md:mt-12 lg:w-1/3">
            {/* <p className="tracking-loose ml-2 uppercase text-yellow-300"> */}
            {/* <BlurIn index={index}>{data.subtitle}</BlurIn> */}
            <BlurIn
              text={data.subtitle}
              className="tracking-loose ml-2 uppercase text-yellow-300"
              delay={0}
            />
            {/* </p> */}
            {/* <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed"> */}
            {/* <BlurIn index={index}>{data.title}</BlurIn> */}
            <BlurIn
              text={data.title}
              className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed"
              delay={0}
            />
            {/* </p> */}
            {/* <p className="mb-4 text-sm text-gray-50 md:text-base">
              {data.description}
            </p> */}
            <BlurIn
              text={data.description}
              className="mb-4 text-sm text-gray-50 md:text-base"
              delay={0}
            />
            <a
              href="#"
              className="mr-auto rounded border border-yellow-300 bg-transparent px-4 py-2 text-yellow-300 shadow hover:border-transparent hover:bg-yellow-300 hover:text-white hover:shadow-lg"
            >
              Explore Now
            </a>
          </div>
          <div className="ml-0 mt-8 w-full md:ml-12 lg:w-2/3">
            <div className="container mx-auto h-full w-full">
              <div className="wrap relative h-full overflow-hidden p-10">
                <div
                  className="border-2-2 border-yellow-555 absolute hidden h-full border md:block"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border md:hidden"
                  style={{
                    right: "0",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                {data.events.map((event, index) => (
                  <div
                    key={index}
                    className={`mb-8 flex w-full flex-col items-start ${index % 2 === 0 ? "left-timeline" : "right-timeline"} md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div
                      className={`order-1 w-full px-1 py-4 md:w-5/12 ${index % 2 === 0 ? "text-right md:text-left" : "text-left md:text-right"}`}
                    >
                      {/* <p className="mb-3 text-base text-yellow-300">
                        {event.date}
                      </p> */}
                      <BlurIn
                        text={event.date}
                        delay={index * 0.2}
                        className="mb-3 text-base text-yellow-300"
                      />
                      {/* <h4 className="mb-3 text-lg font-bold md:text-2xl">
                        {event.title}
                      </h4> */}
                      <BlurIn
                        text={event.title}
                        delay={index * 0.2}
                        className="mb-3 text-lg font-bold md:text-2xl"
                      />
                      {/* <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                        {event.description}
                      </p> */}
                      <BlurIn
                        text={event.description}
                        delay={index * 0.2}
                        className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <img
                className="mx-auto mt-8 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="timeline illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
