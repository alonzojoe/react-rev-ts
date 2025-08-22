import SectionHeader from "./SectionHeader";
import { HEADER_CONTENT } from "../constants";
const Action = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 relative py-[80px] md:px-[120px] bg-gray4">
      <SectionHeader
        nowrap={false}
        tag={HEADER_CONTENT["Action"].tag}
        title={HEADER_CONTENT["Action"].title}
        description={HEADER_CONTENT["Action"].description}
      />
      <button className="bg-primary cursor-pointer text-center w-[150px] h-[50px] text-black">
        Get Started
      </button>
    </div>
  );
};

export default Action;
