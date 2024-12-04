import React from "react";
import ServicesBlock from "../ServicesBlock";
import { Motor, Location, ScheduleBox, BulkBoxes } from "../Icons";

function HomeServices() {
  return (
    <div className="flex flex-row justify-center items-center py-20 my-28 mb-12 pb-28 bg-[#FFF6F3CC] max-sm:bg-[#FFFFFF] max-sm:my-6 max-sm:pb-0 max-sm:mb-0 ">
      <div className="flex flex-col justify-center items-center max-w-[1240px] px-5 w-full gap-10 max-sm:gap-8">
        <div className="flex flex-col relative justify-center items-center text-center gap-6">
          <div className=" absolute top-[-30px] right-80 max-sm:hidden">
            <Motor />
          </div>
          <h1 className="text-[#1E1E1E] font-semibold text-center text-5xl font-custom max-sm:text-2xl">
            Our Services
          </h1>
          <p className="font-customLight max-w-[1027px] text-center max-sm:text-sm">
            We understand the importance of timely and reliable delivery in
            today’s fast-paced world. Our local dispatch services are designed
            to meet the unique needs of businesses and individuals across
            Nigeria with efficiency and professionalism.
          </p>
        </div>
        <div className="flex flex-row w-full justify-between max-sm:flex-col max-sm:gap-8">
          <ServicesBlock
            icon={<Location />}
            title="Local Delivery"
            subtitle="Need to send a package across town ?"
            paragraph="Need it there fast? Our same-day delivery option ensures your parcel gets to its destination within hours."
          />
          <ServicesBlock
            icon={<ScheduleBox />}
            title="Scheduled Deliveries"
            subtitle="Need to send a package across town ?"
            paragraph="Plan your deliveries in advance and let us handle the timing. Perfect for businesses needing regular dispatch services."
          />
          <ServicesBlock
            icon={<BulkBoxes />}
            title="Bulk Deliveries"
            subtitle="Need to send a package across town ?"
            paragraph="We manage bulk shipments with ease, ensuring your larger consignments are delivered efficiently and safely."
          />
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
