import Logo from "../assets/images/logo.png";
import Arrow from "../assets/images/arrow.svg";
import { footerContent } from "../constants";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[80px] pt-[80px] pb-[40px] md:px-[120px] px-5">
      <div className="w-full flex md:flex-row flex-col md:px-0 px-5 items-start justify-between md:gap-[90px] gap-10">
        <img src={Logo} alt="logo" className="w-[130px]" />
        {footerContent.map((f, index) => (
          <div className="flex flex-col gap-6" key={index}>
            <span className="text-light text-[20px]">{f.title}</span>
            <div className="flex flex-col gap-1">
              {f.links.map((l, idx) => (
                <a href={l.path} className="text-sm text-gray1" key={idx}>
                  {l.title}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-6">
          <span className="text-light text-[20px] md:max-w-[250px]">
            Join our mailing list for updates
          </span>
          <div className="flex md:flex-row flex-col md:items-center gap-5">
            <input
              type="email"
              placeholder="Your email address"
              className="outline-none md:w-fit w-full bg-transparent border-b border-gray1 text-white"
            />
            <button className="flex items-center justify-center bg-primary rounded-full w-[40px] h-[40px] cursor-pointer">
              <img src={Arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
