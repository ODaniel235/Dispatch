import OrangeStar from "@/components/OrangeStar";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center py-14 max-md:py-14 gap-20 px-8 max-sm:text-center">
      <div className="flex flex-col w-full max-w-[1240px] gap-[64px] py-[40px] max-md:py-0 relative justify-between">
        <div className="max-sm:hidden">
          <OrangeStar size={56} top={160} right={0} />
          <OrangeStar size={24} top={10} right={160} />
          <OrangeStar size={56} top={100} left={10} />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <h1 className="text-[#1E1E1E] font-semibold text-center text-5xl max-sm:text-[32px] font-custom">
            About Dispatch Hub
          </h1>
          <p className="font-customLight max-w-[1027px] text-center">
            At Dispatch Hub, we’re all about making deliveries easy and
            reliable. As a leading logistics company in Nigeria, we take pride
            in offering fast, secure, and affordable delivery services across
            the country. Whether you’re sending important documents, parcels, or
            packages, we ensure they reach their destination safely and on time.
            Our goal is to take the stress out of deliveries for both
            individuals and businesses. With a dedicated team, smart logistics
            solutions, and a strong network across Nigeria, we’re here to make
            sure your deliveries are smooth and worry-free. Dispatch Hub—your
            trusted partner in reliable delivery services.
          </p>
        </div>
        <div className="flex flex-row justify-center items-end from-[#FE581C] to-[#983511] bg-gradient-to-b rounded-[20px] max-sm:rounded-[5.4px]  w-full max-sm:h-[221px]">
          <img
            className="max-sm:w-[170px] max-sm:h-[223px]"
            width={500}
            height={580.26}
            src="./dispatchRider.png"
            alt="dispatch_rider"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
