import SectionHeader from "./SectionHeader";
import Overlay from "./Overlay";
import { HEADER_CONTENT } from "../constants";
import { FEATURES } from "../constants";
const Features = () => {
  return (
    <div className="w-full flex flex-col relative pt-[80px] gap-[80px] md:px-[120px]">
      <SectionHeader
        nowrap
        tag={HEADER_CONTENT["Features"].tag}
        title={HEADER_CONTENT["Features"].title}
        description={HEADER_CONTENT["Features"].description}
      />
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-[24px]">
        {FEATURES.map((f, index) => (
          <div className="w-fit px-[50px] rounded-[12px] bg-white/4 border border-grayborder py-[50px] flex flex-col gap-[35px] items-center justify-center">
            <img src={f.icon} alt={`${f.title}-index`} key={index} />
            <div className="flex flex-col gap-4 items-center justify-center">
              <span className="text-light text-[20px]">{f.title}</span>
              <p className="text-gray1 max-w-[310px] text-center">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Overlay />
    </div>
  );
};

export default Features;
