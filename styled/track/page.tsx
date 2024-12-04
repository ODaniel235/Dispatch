"use client";

import Btn from "@/components/Btn";
import Input from "@/components/Input";
import OrangeStar from "@/components/OrangeStar";
import React, { useState } from "react";

function Page() {
  const [track, setTrack] = useState("");

  function handleChange(event: any) {
    setTrack(event.target.value);
  }

  function handleClick() {
    console.log(track);
  }

  return (
    <div className="flex flex-col relative justify-center items-center py-20 gap-20 px-8 pb-48">
      <div className="max-sm:hidden">
        <OrangeStar size={24} right={280} top={60} />
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-[679px] rounded-[20px] shadow-2xl">
        <div className="flex flex-col w-full px-10 py-20 gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 text-center">
              <h1 className="text-[#1E1E1E] font-semibold text-center text-5xl max-sm:text-[32px] font-custom">
                Track your Delivery
              </h1>
              <p className="font-customLight">
                Enter the details of the of the message sent to you to you below
                to keep track of the item(s)
              </p>
            </div>
            <Input
              onChange={handleChange}
              label="Enter your Tracking ID"
              placeholder="Tracking ID eg 10002000RD"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <Btn
              text="Track Package"
              width="auto"
              onClick={handleClick}
              disabled={false}
              px={"10"}
              py={"0"}
            ></Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
