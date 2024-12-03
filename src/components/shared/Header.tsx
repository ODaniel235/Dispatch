import { headerConstants } from "@/constants";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const location = useLocation();
  const checkUrl = (url: string) => {
    const newLocation = location.pathname.replace(/\//g, "");
    const value = newLocation.toLowerCase() == url.toLowerCase();
    console.log(value, url, newLocation);
    return value;
  };
  return (
    <header className="w-screen h-fit px-8 py-4 hidden md:flex md:flex-row md:justify-between md:items-center bg-white">
      <img src="./HeaderLogo.png" alt="Logo" width={80} height={80} />
      <nav>
        <ul className=" list-none flex flex-row justify-between items-center text-lg text-black gap-10">
          {headerConstants.map((data, idx) => (
            <Link
              onClick={() => setIsActive(idx)}
              className={` p-2 px-3 flex justify-center items-center font-unaego ${
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
    </header>
  );
};

export default Header;
