import OrangeStar from "@/components/OrangeStar";
import Blocks from "@/components/blocks";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center py-14 max-md:py-14 gap-20 px-4 md:PX-8">
      <div className="flex flex-col w-full max-w-[1240px] gap-[64px] py-[40px] max-md:py-0 relative justify-between">
        <div className="max-sm:hidden">
          <OrangeStar size={56} top={160} right={0} />

          <OrangeStar size={24} top={0} right={160} />
          <OrangeStar size={56} top={100} left={10} />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <h1 className="text-[#1E1E1E] font-semibold text-center text-5xl max-sm:text-[32px] font-custom">
            Our Services
          </h1>
          <p className="font-customLight max-w-[1027px] px-5 text-center">
            We understand the importance of timely deliveries. Whether it{"'"}s
            a business document, a package, or personal items, our dedicated
            dispatch riders ensure your items are delivered on time, every time.
          </p>
        </div>
        <div className="flex flex-row justify-center items-end bg-[#001132] rounded-[20px] max-sm:rounded-[5.4px]  w-full max-sm:h-[221px]">
          <img
            className="max-sm:w-[170px] max-sm:h-[223px] hidden md:flex justify-center items-center"
            width={500}
            height={580.26}
            src={"./dispatchRider.png"}
            alt="dispatch_rider"
          />
          <img
            className="max-sm:w-[170px] max-sm:h-[223px] md:hidden flex justify-center items-center"
            width={100}
            height={100}
            src={"./dispatchRider.png"}
            alt="dispatch_rider"
          />
        </div>
      </div>
      <Blocks
        title="Local Delivery"
        desc="Look no further! Dispatch Hub is your go-to partner for all your
                delivery needs, offering seamless and efficient courier services
                across major cities in Nigeria."
        itemList={[
          "Local delivery services in Nigeria",
          "Affordable courier services in Nigeria",
          "Fast dispatch services in Lagos, Nigeria",
          "Nationwide delivery in Nigeria",
          "Reliable same-day delivery Nigeria",
        ]}
        imgSrc={"./localDelivery.png"}
        imgAlt="localDelivery"
      />
      <Blocks
        title="Scheduled Deliveries"
        desc="Look no further! Dispatch Hub is your go-to partner for all your
                delivery needs, offering seamless and efficient courier services
                across major cities in Nigeria."
        itemList={[
          "Local delivery services in Nigeria",
          "Affordable courier services in Nigeria",
          "Fast dispatch services in Lagos, Nigeria",
          "Nationwide delivery in Nigeria",
          "Reliable same-day delivery Nigeria",
        ]}
        imgSrc={"./scheduledDeliveries.png"}
        imgAlt="scheduledDeliveries"
        reversed={true}
      />
      <Blocks
        title="Bulk Deliveries"
        desc="Are you a business or individual with large volumes of packages
                to deliver? Dispatch Hub offers reliable and cost-effective bulk
                delivery services across Nigeria. We specialize in handling
                high-volume deliveries, ensuring that your goods reach their
                destinations safely and on time."
        itemList={[
          "Bulk delivery services in Nigeria",
          "Affordable bulk courier services",
          "Large-scale delivery solutions Nigeria",
          "Nationwide bulk deliveries Nigeria",
          "E-commerce bulk deliveries Nigeria",
        ]}
        imgSrc={"./bulkDeliveries.png"}
        imgAlt="bulkDeliveries"
      />
    </div>
  );
}

export default Services
