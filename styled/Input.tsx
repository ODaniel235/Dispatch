import React from "react";

export default function Input({
  label,
  name,
  type,
  value,
  placeholder,
  onChange
}: {
  label?: string;
  name?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: any
}) {
  return (
    <div className="flex flex-col gap-[12px]">
      {label && <h4 className="font-custom max-sm:text-sm">{label}</h4>}
      <input
        onChange={onChange}
        name={name}
        className="border-[#545454] rounded-xl border-[1px] h-[48px] px-[16px] max-sm:text-xs"
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
