import SectionHeader from "./SectionHeader";
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
        
      </div>
    </div>
  );
};

export default Testimonial;
