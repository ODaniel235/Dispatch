import React from "react";

export default function Btn({
  text,
  onClick,
  disabled,
  px,
  py,
  width
}: {
  text: string;
  onClick?: any;
  disabled?: boolean;
  px?: string;
  py?: string;
  width?: string;
}) {
    const style = "text-white h-[64px] max-sm:px-4 max-sm:max-w-44 max-sm:h-[40px] rounded-full w-full bg-[#FE581C] disabled:bg-[#ff9b77] hover:bg-[#612e1b]";
  return <button className={style + " py-" + py + " " + " px-" + px + " " + " w-" + width} onClick={onClick} disabled={disabled}>{text}</button>;
}
