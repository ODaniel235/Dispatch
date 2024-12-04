import React from "react";
import Image from "next/image";
import AppStore from "../../public/AppsStore.png";
import PlayStore from "../../public/PlayStore.png";
import AppReg from "../../public/appReg.png";
import OrangeStar from "../OrangeStar";

function HomeDownload() {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-[#001132]" id="download">
      <div
        className={
          "flex flex-row w-full max-w-[1240px] justify-between items-center px-5 py-10 max-sm:flex-col max-sm:gap-8"
        }
      >
        <div className="flex flex-row relative justify-center items-center w-full max-w-[564px]">
          <Image
            className="max-sm:w-full"
            width={564}
            src={AppReg}
            alt="App"
          />
        </div>
        <div className="flex flex-col max-w-[564px] w-full gap-10 max-sm:text-center max-sm:flex-col">
          <div className="flex flex-col items-start w-full gap-6">
            <h2 className="text-[#FFFFFF] w-full font-semibold text-4xl max-sm:text-2xl font-custom">
              Download Our App Today!
            </h2>
            <p className="text-lg max-sm:text-sm text-[#FCFCFC] font-customLight">
              Enhance your dispatch experience with our easy-to-use mobile app.
              Whether you’re managing deliveries, tracking your orders, or
              booking dispatch services, our app provides a seamless and
              efficient solution right at your fingertips.
            </p>
          </div>
          <div className="flex flex-row gap-6">
            <Image
              className="max-sm:w-full"
              width={214.26}
              src={AppStore}
              alt="App"
            />
            <Image
              className="max-sm:w-full"
              width={214.26}
              src={PlayStore}
              alt="App"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDownload;
