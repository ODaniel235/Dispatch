// "use client"
// import React from "react";
// import { useState } from "react";

// export default function Slider({
//   title,
//   desc,
// }: {
//   title: string;
//   desc: string;
// }) {
//   const [click,setClick] = useState(false)
//   return (
//     <div className="group flex flex-row items-start justify-start px-5 h-auto max-h-[109px] bg-[#EAF1FF] hover:max-h-[609px] transition-all">
//       <div className="flex flex-col text-start justify-center relative">
//         <div className="flex flex-row w-full justify-between items-center">
//           <h4 className="flex items-center font-semibold text-2xl font-custom h-[109px] max-sm:text-xl">
//             {title}
//           </h4>
//           <svg
//             className="group-hover:rotate-180"
//             width="24"
//             onChange={()=> setClick(true)}
//             height="25"
//             viewBox="0 0 24 25"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12 7.69999C11.3 7.69999 10.6 7.96999 10.07 8.49999L3.55002 15.02C3.26002 15.31 3.26002 15.79 3.55002 16.08C3.84002 16.37 4.32002 16.37 4.61002 16.08L11.13 9.55999C11.61 9.07999 12.39 9.07999 12.87 9.55999L19.39 16.08C19.68 16.37 20.16 16.37 20.45 16.08C20.74 15.79 20.74 15.31 20.45 15.02L13.93 8.49999C13.4 7.96999 12.7 7.69999 12 7.69999Z"
//               fill="#292D32"
//             />
//           </svg>
//         </div>

//         {/* <p className="font-customLight text-lg py-5 opacity-0 group-hover:opacity-100 transition-all">
//           {desc}
//         </p> */}
//         <p className={`${click ? "h-0": "h-fit"}`}>
//           {desc}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";
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
          <p className="font-customLight text-lg pt-1 pb-5 px-6 ">
      {desc}
      </p> 
      </div>
    </div>
  );
};

export default Slider;
