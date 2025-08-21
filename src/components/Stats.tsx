import SectionHeader from "./SectionHeader";
import Overlay from "./Overlay";
import { HEADER_CONTENT, STATS } from "../constants";
const Stats = () => {
  return (
    <div className="w-full flex flex-col relative gap-[80px] md:py-[120px] py-[80px] md:px-[120px] bg-gray4 mt-10">
      <SectionHeader
        nowrap
        tag={HEADER_CONTENT["Stats"].tag}
        title={HEADER_CONTENT["Stats"].title}
        description={HEADER_CONTENT["Stats"].description}
      />
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-[72px]">
        {STATS.map((s) => (
          <div className="flex flex-col gap-5 items-center justify-center">
            <span className="text-primary text-[50px]">{s.value}</span>
            <span className="text-gray1 text-[20px]">{s.title}</span>
          </div>
        ))}
      </div>
      <Overlay />
    </div>
  );
};

export default Stats;
