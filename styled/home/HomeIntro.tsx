import Image from "next/image";
import riderImg from "../../public/dispatchRider.png";
import Btn from "./Btn";
import scooter from "../../public/scooter.png";
import OrangeStar from "../OrangeStar";
import Cube from "../Cube";
import Link from "next/link";

function HomeIntro() {
  return (
    <section className="bg-[#001132] text-white relative flex flex-col items-center justify-center px-4 md:pb-2">
      <div className="max-sm:hidden">
        <OrangeStar size={30} top={20} left={50} />
        <OrangeStar size={22} top={"20%"} left={"50%"} />
        <OrangeStar size={30} top={"15%"} right={"5%"} />
        <OrangeStar size={22} bottom={"10%"} left={"50%"} />
      </div>
      <div className=" w-screen overflow-x-hidden px-8 md:px-8 flex flex-col justify-between items-center  sm:flex sm:flex-row max-sm:pt-20 md:pt-20 relative">
        <div className="flex justify-start gap-1 flex-col text-left relative">
          <Cube />
          <div className="flex flex-col  gap-10">
            <div className="flex flex-col  gap-4 px-4 md:px-0">
              <h1 className="text-[3.2rem] md:text-[64px] leading-[1.2] max-sm:text-[40px] md:mb-4 relative font-custom font-bold break-words">
                Unlock Seamless Deliveries Now!
                <Image
                  src={scooter}
                  className="inline-flex ml-3 pb-2"
                  alt="scooter-png"
                  width={30}
                />
              </h1>
              <p className="text-[#FCFCFC] md:w-[471px] leading-[25.5px] font-customLight max-sm:text-[14px]">
                Enjoy fast, reliable, and eco-friendly delivery solutions that
                keep your business moving efficiently.
              </p>
            </div>
            <div className="flex flex-row sm:gap-2 justify-start gap-4 items-start font-custom md:gap-6 max-sm:justify-center">
              <Link href="#download" passHref>
                <Btn bg="#FE581C" text="Downlaod App" />
              </Link>
              <Link href="/register" passHref>
                <Btn bg="transparent" text="Register" border="border-2" />
              </Link>
            </div>
          </div>
        </div>
        {/* rider image section */}
        <div>
          <Image width={608} height={700} src={riderImg} alt="dispatch_rider" />
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;
