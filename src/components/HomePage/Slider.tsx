import { useState } from "react";

const Slider = ({ title, desc }: { title: string; desc: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="transition-all duration-200 bg-[#EAF1FF] border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
    >
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
      >
        {/* <span className="flex text-lg font-semibold text-black"> {title}</span> */}
        <h4 className="flex items-center font-semibold text-2xl font-custom p-4 max-sm:text-xl">
          {title}
        </h4>

        <svg
          className={`w-6 h-6 text-gray-400  ${
            isOpen ? "rotate-[180deg] transition-all duration-300" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`  transition-all duration-300 ${
          isOpen ? "max-h-80" : "max-h-0 pb-0 overflow-hidden"
        }`}
      >
        {/* <p className="p-3">{desc}</p> */}
        <p className="font-customLight text-lg pt-1 pb-5 px-6 ">{desc}</p>
      </div>
    </div>
  );
};

export default Slider;
