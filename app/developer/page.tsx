import XendDeveloper from "@/components/developer/hero";
import CommandSnippet from "@/components/developer/installationCommand";
import { SdkPage } from "@/components/developer/sdk-page";
import WhyUseSDK from "@/components/developer/why-data";
import StickySection from "../products/stickySection";
import WhySection from "@/components/developer/why-section";
import DeveloperResources from "@/components/developer/developer-resources";
import Section1 from "@/components/developer/sections/section-1";
import Section2 from "@/components/developer/sections/section-2";
import Section3 from "@/components/developer/sections/section-3";
import { IconCloudDemo } from "@/components/developer/icon-cloud";
export default function Home() {
  return (
    <div className="items-center justify-center bg-neutral-950">
      <main className="bg-neutral-950">
        <XendDeveloper />
      </main>

      <CommandSnippet command={"npm i @xend-finance/web-sdk"} />
      <StickySection>
        <main className="bg-neutral-950">
          <SdkPage />
        </main>
      </StickySection>
      <StickySection>
        <WhySection />
      </StickySection>
      <StickySection className="mx-auto">
        <Section1 />
      </StickySection>
      <StickySection className="mx-auto">
        <Section2 />
      </StickySection>
      <StickySection className="mx-auto">
        <Section3 />
      </StickySection>

      {/* <StickySection> */}
      {/* <main className="bg-neutral-950">
        <WhyUseSDK />
      </main> */}
      {/* </StickySection> */}
      <StickySection>
        <main className=" bg-neutral-950">
          <DeveloperResources />
        </main>
      </StickySection>
      <StickySection>
        <IconCloudDemo />
      </StickySection>
    </div>
  );
}
