import Image from "next/image";
import { list } from "postcss";
import React from "react";

export default function Blocks({
  title,
  desc,
  itemList,
  imgSrc,
  imgAlt,
  reversed
}: {
  title: string;
  desc: string;
  itemList: string[];
  imgSrc: any;
  imgAlt: string;
  reversed?: boolean;
}) {
  return (
    <div className="flex max-w-[1240px] w-full">
      <div className={!reversed? "flex flex-row w-full justify-between gap-6 max-lg:flex-col" : "flex flex-row-reverse w-full justify-between gap-6 max-sm:flex-col" }>
        <div className="flex flex-col max-w-[564px] w-full gap-6 max-sm:text-center">
          <div className="flex flex-col items-start w-full gap-6">
            <h2 className="text-[#1E1E1E] w-full font-semibold text-4xl max-sm:text-2xl font-custom">
              {title}
            </h2>
            <p className="text-lg max-sm:text-sm font-customLight">{desc}</p>
          </div>
          <ul className="text-[#545454] text-lg list-inside list-disc max-sm:text-sm font-customLight">
            {itemList.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <Image
          className="max-sm:w-full rounded-[20px] max-sm:rounded-[5.4px]"
          width={612}
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    </div>
  );
}
