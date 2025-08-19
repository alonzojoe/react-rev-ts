const Header = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between md:px-[120px] px-5 md:h-[calc(100vh-80px)] relative md:pb-0 pb-20">
      <div className="flex flex-col gap-6 md:mt-0 mt-5">
        <div className="flex items-center justify-center gap-2 border border-grayborder rounded-[24px] w-fit px-4 h-[37px]"></div>
      </div>
    </div>
  );
};

export default Header;
