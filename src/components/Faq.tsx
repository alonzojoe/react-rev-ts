import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { HEADER_CONTENT, FAQ_ITEMS } from "../constants";
const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((p) => p !== index) : [...prev, index]
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
      <div className="w-full flex flex-col items-center justify-center gap-[30px]">
        {FAQ_ITEMS.map((f, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="w-full flex flex-col md:max-w-[800px] max-w-[90%] z-[1]"
            >
              <div
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between border border-gray3 px-5 h-[52px] rounded-[15px] cursor-pointer"
              >
                <span className="text-light">{f.question}</span>
                <span className="text-light text-2xl">
                  {isOpen ? "-" : "+"}
                </span>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] py-4 px-5" : "grid-rows-[0fr] px-5"
                }`}
              >
                <div className="overflow-hidden text-gray1 text-sm">
                  {f.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
