import User from "../assets/images/user.png";

const UserReview = () => {
  return (
    <div className="bg-black rounded-[16px] min-w-[335px] max-w-[335px] flex flex-col gap-[32px] p-[32px] border border-grayborder">
      <p className="text-gray5">
        "AI stramlines international client coordination by scheduling emails
        for optimal inbox timing"
      </p>
      <div className="flex items-center gap-4">
        <img src={User} alt={`user`} className="h-[50px] w-[50px]" />
        <div className="flex flex-col">
          <span className="text-white text-sm">Joe Alonzo</span>
          <span className="text-gray2 text-[12px]">Co-Founder</span>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
