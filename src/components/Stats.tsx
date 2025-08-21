import SectionHeader from "./SectionHeader";
import { HEADER_CONTENT } from "../constants";
const Stats = () => {
  return (
    <div className="w-full flex flex-col relative gap-[80px] md:py-[120px] py-[80px] md:px-[120px] bg-gray4">
      <SectionHeader
        nowrap
        tag={HEADER_CONTENT["Stats"].tag}
        title={HEADER_CONTENT["Stats"].title}
        description={HEADER_CONTENT["Stats"].description}
      />
    </div>
  );
};

export default Stats;
