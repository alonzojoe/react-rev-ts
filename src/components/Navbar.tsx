import logo from "../assets/images/logo.png";
import { NAV_ITEMS } from "../constants";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between h-[80px] md:px-[120px] px-5">
      <div className="w-full">
        <img src={logo} alt="app-logo" className="cursor-pointer" />
      </div>
      <div className="hidden w-full lg:flex items-center justify-center gap-[40px]">
        {NAV_ITEMS.map((n, index) => (
          <a
            href={n.path}
            key={index}
            className="text-gray1 hover:text-primary font-semibold"
          >
            {n.title}
          </a>
        ))}
      </div>
      <div className="w-full flex items-center justify-end md:gap-[40px] gap-5">
        <a href="#" className="text-white">
          Log in
        </a>
        <button className="text-black bg-primary w-[141px] h-[40px] rounded-[40px] text-center cursor-pointer">
          Try for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
