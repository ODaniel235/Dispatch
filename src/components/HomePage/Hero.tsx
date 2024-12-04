import { heroContent } from "@/constants/Herocontants";
import Button from "./Button";
import HeroImage from "../../../public/bikeman.png";

const Hero = () => {
  return (
    <section className="  w-screen min-h-0 md:h-[93vh] bg-[#001132] flex flex-col md:flex-row items-center justify-between px-5 md:px-10 lg:px-28  ">
      <div className="text-white capitalize md:max-w-[50%] flex flex-col items-start  p-5">
        <h1 className="text-[35px] md:text-[64px] font-semibold leading-tight">
          {heroContent.text}
        </h1>
        <p className="text-[14px] md:text-[18px] font-normal mt-3 max-w-[471px]">
          {heroContent.subtext}
        </p>
        <div className="flex gap-3 mt-5">
          <Button
            text="Download App"
            backgroundColor="#fe581c"
            textColor="white"
          />
          <Button borderColor="white" text="Register" />
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center w-full md:w-1/2 lg:p-5">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-auto h-[400px] md:h-[595px] max-w-full rounded-md shadow-md"
        />
      </div>
    </section>
  );
};

export default Hero;
