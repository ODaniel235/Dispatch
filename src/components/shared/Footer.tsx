import { LogoWhite } from "./Logo";
import { Facebook, Twitter, LinkedIn, Instagram } from "./Icons";
import { Link } from "react-router-dom";
import { handles } from "@/constants";
const check = (name: string) => {
  switch (name.toLowerCase()) {
    case "facebook":
      return <Facebook />;
      break;
    case "twitter":
      return <Twitter />;
      break;
    case "instagram":
      return <Instagram />;
      break;
    default:
      <LinkedIn />;
      break;
  }
};
const Footer = () => {
  return (
    <div className="px-8 sm:px-10 flex flex-col justify-center items-center py-14 bg-[#001132] text-white">
      <div className="flex flex-col w-full max-w-[1265px] gap-[48px]">
        <div className="flex flex-col sm:flex-row max-sm:gap-5 justify-between">
          <div className="flex flex-col gap-6 max-sm:gap-6">
            <LogoWhite />
            <div className="flex flex-col gap-2 max-sm:gap-6">
              <h5>
                Email{" "}
                <a href="mailto:contact@dispatchhib.org">
                  contact@dispatchhib.org
                </a>
              </h5>

              <h5>
                Hours: Monday to Friday, 8:00 AM - 6:00 PM; Saturday, 9:00 AM -
                4:00 PM
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-sm:gap-5">
            <h5>Social Media</h5>
            <div className="flex flex-row gap-4 max-sm:gap-10">
              {handles.map(
                (handle, idx) =>
                  !handle.exempted && (
                    <Link key={idx} to={handle.handle}>
                      {check(handle.name)}
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between max-sm:gap-5">
          <div>
            <h4>© 2024 Dispatch Hub</h4>
          </div>
          <div className="flex max-sm:flex-wrap gap-5">
            <Link className="w-fit" to={""}>
              <h4>Terms & Conditions</h4>
            </Link>
            <Link className="w-fit" to={""}>
              <h4>Privacy</h4>
            </Link>
            <Link className="w-fit" to={""}>
              <h4>Cookies</h4>
            </Link>
            <Link className="w-fit" to={""}>
              <h4>Security</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
