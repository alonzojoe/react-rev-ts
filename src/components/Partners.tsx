import { PARTNERS } from "../constants";
const Partners = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[40px] py-[40px] bg-gray4">
      <span className="text-gray1">Satisfied Partners</span>
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-[72px]">
        {PARTNERS.map((p, index) => (
          <img src={p} alt={`partners-${index + 1}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
