const Header = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between md:px-[120px] px-5 md:h-[calc(100vh-80px)] relative md:pb-0 pb-20">
      <div className="flex flex-col gap-6 md:mt-0 mt-5">
        <div className="flex items-center justify-center gap-2 border border-grayborder rounded-[24px] w-fit px-4 h-[37px]">
          <span className="bg-primary w-[9px] h-[9px] rounded-full" />
          <span className="text-primary">Decentralized</span>
        </div>
        <div className="text-light font-bold md:text-[84px] text-[45px] max-w-[661px] md:leading-[80px]">
          Revolutionazing Web3 Finance
        </div>
        <p className="text-gray1 text-[20px] max-w-[661px]">
          Secure scalable and decentralized solutions for your digital
          assets-experience the future of financial freedom
        </p>
      </div>
    </div>
  );
};

export default Header;
