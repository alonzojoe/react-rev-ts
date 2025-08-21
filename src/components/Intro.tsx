import SectionHeader from "./SectionHeader";
import Overlay from "./Overlay";
import { HEADER_CONTENT, INTRO_ITEMS } from "../constants";
import ImageLeft from "../assets/images/imgLeft.svg";

const Intro = () => {
  return (
    <div className="w-full flex flex-col gap-[80px] relative py-[60px] md:px-[120px] mt-10">
      <SectionHeader
        nowrap
        tag={HEADER_CONTENT["Intro"].tag}
        title={HEADER_CONTENT["Intro"].title}
        description={HEADER_CONTENT["Intro"].description}
      />
      <div className="w-full flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-[40%] w-[400px]">
          <img src={ImageLeft} alt="Image-left" className="w-full" />
        </div>
        <div className="flex md:w-[45%] w-[80%] flex-col gap-[40px]">
          {INTRO_ITEMS.map((i, index) => (
            <div
              className="w-full bg-gray4 rounded-[20px] px-5 py-[30px] flex items-start gap-[24px] border border-grayborder"
              key={index}
            >
              <img src={i.icon} alt={`icon-${i.title}`} />
              <div className="flex flex-col gap-[8px]">
                <div className="text-light text-[20px]">{i.title}</div>
                <p className="text-gray1">{i.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Overlay />
    </div>
  );
};

export default Intro;
