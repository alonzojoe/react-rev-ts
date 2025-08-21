import SectionHeader from "./SectionHeader";
import MarqueeRow from "./MarqueeRow";
import { HEADER_CONTENT } from "../constants";
const Testimonial = () => {
  return (
    <div className="w-full flex flex-col gap-[80px] relative py-[60px] bg-gray4">
      <SectionHeader
        nowrap
        tag={HEADER_CONTENT["Testimonial"].tag}
        title={HEADER_CONTENT["Testimonial"].title}
        description={HEADER_CONTENT["Testimonial"].description}
      />
      <div className="w-full flex flex-col gap-4 overflow-hidden">
        <MarqueeRow prefix="marquee1" />
        <MarqueeRow prefix="rev" offset={200} />
      </div>
    </div>
  );
};

export default Testimonial;
