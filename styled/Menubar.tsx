"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Btn from "./Btn";

function Menubar({ onClick }: { onClick?: any }) {
  const pathName = usePathname();
  const [menuShow, setMenuShow] = useState(false);

  function handleChange() {
    if (!menuShow) {
      setMenuShow(true);
    } else {
      setMenuShow(false);
    }
  }

  return (
    <div className="flex flex-col relative w-fit sm:hidden">
      <svg
        onClick={handleChange}
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
          !menuShow
            ? "flex flex-col absolute top-20 right-0 z-20 bg-white text-right w-40 opacity-0 pointer-events-none transition-all"
            : "flex flex-col absolute top-20 right-0 z-20 bg-white text-right w-44 opacity-100 transition-all"
        }
      >
        <ul className="flex flex-col p-5 gap-10 ">
          <Link href="/about" passHref className="mr-1">
            <span
              onClick={handleChange}
              className={
                pathName === "/about"
                  ? "bg-[#FE581C] text-white p-1 rounded-full"
                  : ""
              }
            >
              About Us
            </span>
          </Link>
          <Link href="/track" passHref className="mr-1">
            <span
              onClick={handleChange}
              className={
                pathName === "/track"
                  ? "bg-[#FE581C] text-white p-1 rounded-full"
                  : ""
              }
            >
              Track Delivery
            </span>
          </Link>
          <Link href="/ourService" passHref className="mr-1">
            <span
              onClick={handleChange}
              className={
                pathName === "/ourService"
                  ? "bg-[#FE581C] text-white p-1 rounded-full"
                  : ""
              }
            >
              Our Service
            </span>
          </Link>
          <Link href="/contact" passHref className="mr-1">
            <span
              onClick={handleChange}
              className={
                pathName === "/contact"
                  ? "bg-[#FE581C] text-white p-1 rounded-full"
                  : ""
              }
            >
              Contact Us
            </span>
          </Link>
          <Link href={"/register"}>
            <Btn onClick={handleChange} py="1" text="Register" />
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Menubar;
