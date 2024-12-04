import { LogoWhite } from "./Logo";
import { Facebook, Twitter, LinkedIn, Instagram } from "./Icons";
import Link from "next/link";

function Footer() {
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
              <Link href={""}>
                <Facebook />
              </Link>
              <Link href={""}>
                {" "}
                <Twitter />{" "}
              </Link>
              <Link href={""}>
                <LinkedIn />
              </Link>
              <Link href={""}>
                <Instagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between max-sm:gap-5">
          <div>
            <h4>© 2024 Dispatch Hub</h4>
          </div>
          <div className="flex max-sm:flex-wrap gap-5">
            <Link className="w-fit" href={""}>
              <h4>Terms & Conditions</h4>
            </Link>
            <Link className="w-fit" href={""}>
              <h4>Privacy</h4>
            </Link>
            <Link className="w-fit" href={""}>
              <h4>Cookies</h4>
            </Link>
            <Link className="w-fit" href={""}>
              <h4>Security</h4>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
