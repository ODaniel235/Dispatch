import React from "react";

function ServiceBox({
  svg,
  title,
  text,
  textbold,
}: {
  svg: React.ReactNode;
  title: string;
  textbold: string;
  text: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2">
      <div>{svg}</div>
      <h2 className="text-[1.28rem] font-bold font-custom leading-8">{title}</h2>
      <div>
        <p className="text-base font-custom">{textbold}</p>
        <p className="text-[0.9rem] font-customLight">{text}</p>
      </div>
    </div>
  );
}

export default ServiceBox;
