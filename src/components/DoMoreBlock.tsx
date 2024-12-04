import React from "react";
import OrangeStar from "../OrangeStar";
import Image from "next/image";

export default function DoMoreBlock({
  title,
  titleC,
  text,
  imgSrc,
  imgAlt,
  reversed,
  secondStarPosLeft,
}: {
  title: string;
  titleC: string;
  text: string;
  imgSrc: any;
  imgAlt: string;
  reversed?: boolean;
  secondStarPosLeft?: string;
}) {
  return (
    <div className="flex max-w-[1240px] px-5 relative w-full">
      <div className="max-sm:hidden">
        <OrangeStar size={32} left={50} color="#021336" />
      </div>

      <div
        className={
          !reversed
            ? "flex flex-row items-center relative w-full justify-between gap-6 max-lg:flex-col max-sm:flex-col-reverse"
            : "flex flex-row-reverse items-center relative w-full justify-between gap-6 max-lg:flex-col max-sm:flex-col-reverse"
        }
      >
        <div className="flex flex-col max-w-[564px] w-full gap-10 max-sm:text-center">
          <div className="flex flex-col items-start w-full gap-6">
            <h2 className="text-[#1E1E1E] font-semibold text-4xl w-[95%] max-sm:text-xl font-custom">
              {title} <span className="text-[#F3693B]">{titleC}</span>
            </h2>
            <p className="text-lg max-sm:text-sm font-customLight">{text}</p>
          </div>
        </div>
        <div className="flex flex-row relative justify-center items-center w-full max-w-[567.42px]">
          <div className="max-sm:hidden">
            <OrangeStar size={32} left={secondStarPosLeft} />
            <OrangeStar size={56} bottom={100} left={60} color="#021336" />
          </div>
          <div className="hidden max-sm:flex">
            <OrangeStar size={33} bottom={20} left={20} color="#021336" />
          </div>
          <Image
            className="max-md:w-full rounded-[20px] max-sm:rounded-[5.4px] max-sm:w-[160.8px]"
            width={272}
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
      </div>
    </div>
  );
}
