"use client";
import Slider from "../Slider";
import { useState } from "react";

function HomeFaq() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full max-w-[1240px] justify-between items-center px-5 py-28 gap-16">
        <h1 className="font-custom text-[40px] font-semibold max-sm:text-2xl">
          Frequently Asked Question
        </h1>
        <div className="flex flex-col gap-6">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="transition-all duration-200 bg-[#EAF1FF] border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <h4 className="flex items-center font-semibold text-2xl font-custom p-4 max-sm:text-xl">
                What is Dispatch Hub
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
              <p className="font-customLight text-lg pt-1 pb-5 px-6 ">
                Dispatch hub is a platform where we manage and schedule
                deliveries for a variety of user segments, ranging from business
                establishments to individual clients. We ensure{" "}
                <span className="text-[#F3693B]">
                  quality delivery services
                </span>{" "}
                at great prices, and you can track your deliveries at real-time.
              </p>
            </div>
          </div>
          <Slider
            title="How do I use Dispatch Hub Services"
            desc="To use Dispatch Hub, start by creating an account on our website or mobile app. Once logged in, request a delivery by entering the pick-up and delivery details, and select your preferred delivery option (same-day, express, or scheduled)."
          />
          <Slider
            title="What is so unique about Dispatch Hub"
            desc="Dispatch Hub stands out for its commitment to providing fast, secure, and reliable delivery services tailored to the needs of Nigerian businesses and individuals"
          />
          <Slider
            title="How can i work with Dispatch Hub"
            desc="If you’re interested in becoming a delivery rider, Dispatch Hub is always looking for responsible and efficient individuals to join our fleet. You can apply directly on our website or mobile app by filling out the rider application form. Once your application is reviewed, you’ll be contacted for further steps, including training and onboarding."
          />
        </div>
      </div>
    </div>
  );
}

export default HomeFaq;
