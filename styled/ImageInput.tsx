import React from "react";
import { UploadIcon } from "./Icons";

export default function ImageInput({
  title,
  inputName,
  onChange
}: {
  title: string;
  inputName: string;
  onChange: any
}) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-[#1E1E1E] text-lg max-sm:text-base font-semibold font-custom">{title}</h4>
      <div className="flex flex-row gap-4 w-full justify-between">
        <div className="flex flex-row gap-4 ">
          <UploadIcon />
          <div className="flex flex-col gap-1">
            <h5 className="font-normal font-custom text-[#1E1E1E]">Upload your document</h5>
            <h5 className="text-[#98A2B3] text-sm"><span className="font-normal font-customLight">PDF/ JPEG format</span> • <span className="font-medium">Max. 5MB</span></h5>
          </div>
        </div>
        <label className="h-fit bg-[#FE581C] text-white font-custom font-normal py-2 px-4 rounded-lg cursor-pointer">
            Upload
            <input onChange={onChange} type="file" name={inputName} className="hidden" />
        </label>
      </div>
    </div>
  );
}
