"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavList() {
  const pathName = usePathname();

  return (
    <div className=" items-center hidden md:flex">
      <ul className="flex gap-3 ">
        <Link href="/about" passHref className="mr-1">
          <span
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
            className={
              pathName === "/contact"
                ? "bg-[#FE581C] text-white p-1 rounded-full"
                : ""
            }
          >
            Contact Us
          </span>
        </Link>
      </ul>
    </div>
  );
}

export default NavList;
