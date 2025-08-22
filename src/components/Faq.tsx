import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { HEADER_CONTENT } from "../constants";
const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full flex flex-col gap-[80px] relative py-[60px] md:px-[120px]">
      <SectionHeader
        nowrap
        tag={HEADER_CONTENT["FAQ"].tag}
        title={HEADER_CONTENT["FAQ"].title}
        description={HEADER_CONTENT["FAQ"].description}
      />
    </div>
  );
};

export default Faq;
