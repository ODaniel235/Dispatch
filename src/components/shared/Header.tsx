import { headerConstants } from "@/constants";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const location = useLocation();
  const checkUrl = (url: string) => {
    const value = location.pathname == url;
    return value;
  };
  return (
    <header className="w-screen h-fit flex flex-row gap-4 px-2 lg:px-8 py-2 md:py-4 justify-between md:items-center bg-white opacity-100 bg-opacity-100 drop-shadow-lg sticky top-0 z-50">
      {/* Desktop screen */}
      <Logo />
      <nav className=" hidden md:flex">
        <ul className=" list-none flex flex-row justify-between items-center text-lg text-black md:gap-4 lg:gap-10">
          {headerConstants.map((data, idx) => (
            <Link
              onClick={() => setIsActive(idx)}
              className={` lg:p-2 lg:px-3 md:py-2 md:px-3 flex justify-center items-center font-unaego  ${
                checkUrl(data.path)
                  ? "rounded-full bg-orange text-white "
                  : idx == isActive && "rounded-full bg-orange text-white "
              }`}
              key={idx}
              to={data.path}
            >
              <li>{data.text}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <button className="  bg-orange text-white font-unaego-light text-xl w-fit h-fit md:px-4 lg:px-6 py-2 hidden md:flex justify-center items-center rounded-full hover:scale-110">
        Register
      </button>
      {/* For Mobile screen */}

      <div className="flex flex-col relative w-fit sm:hidden justify-center   ">
        <svg
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-align-right sm:hidden cursor-pointer"
        >
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="21" x2="9" y1="12" y2="12" />
          <line x1="21" x2="7" y1="18" y2="18" />
        </svg>
        <div
          className={
            !hamburgerOpen
              ? "flex flex-col absolute top-20 right-0 z-20 bg-white text-right w-40 opacity-0 pointer-events-none transition-all"
              : "flex flex-col absolute top-20 right-0 z-20 bg-white text-right w-44 opacity-100 transition-all"
          }
        >
          <ul className="flex flex-col p-5 gap-10 bg-white w-fit">
            {headerConstants.map((item, idx) => (
              <Link key={idx} to={item.path} className="mr-1 font-unaego">
                <span
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                  className={
                    checkUrl(item.path)
                      ? "bg-[#FE581C] text-white p-1 rounded-full"
                      : ""
                  }
                >
                  {item.text}
                </span>
              </Link>
            ))}
            <Link to={"/register"}>
              <button
                className={`flex bg-orange hover:brightness-75 border-white  rounded-[77px] text-white order-2 w-[211px] max-sm:w-[158px] flex-none justify-center items-center py-[10px] max-sm:h-[48px] px-8 max-sm:px-2 gap-[10px] my-0 h-[64px]`}
              >
                Register
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
