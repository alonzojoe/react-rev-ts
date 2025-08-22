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
    </div>
  );
};

export default Action;
