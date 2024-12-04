import React from "react";

export default function ServicesBlock({
  icon,
  title,
  subtitle,
  paragraph,
}: {
  icon: any;
  title: string;
  subtitle: string;
  paragraph: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center text-center max-w-[380px] gap-4 max-sm:gap-3">
      {icon}
      <div className="flex flex-col gap-2">
        <h3 className="text-[28px] font-semibold font-custom max-sm:text-xl">{title}</h3>
        <div className="flex flex-col gap-1">
          <h5 className="font-custom text-[#021336] max-sm:text-sm">{subtitle}</h5>
          <p className="font-customLight max-sm:text-xs">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
