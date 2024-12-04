import Blocks from "@/components/blocks";
import OrangeStar from "@/components/OrangeStar";

function page() {
  return (
    <div className="flex flex-col justify-center items-center py-14 max-md:py-14 gap-20 px-8 max-sm:text-center overflow-x-hidden">
      <div className="flex flex-col w-full max-w-[1240px] gap-[64px] py-[40px] max-md:py-0 relative justify-between">
        <div className="max-sm:hidden">
          <OrangeStar size={56} top={160} right={0} />
          <OrangeStar size={24} top={10} right={160} />
          <OrangeStar size={56} top={100} left={10} />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <h1 className="text-[#1E1E1E] font-semibold text-center text-5xl max-sm:text-[32px] font-unaego">
            About Dispatch Hub
          </h1>
          <p className="font-unaego-light text-center">
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
            src={"./dispatchRider.png"}
            alt="dispatch_rider"
          />
        </div>
      </div>
      <div className="flex max-w-[1240px] w-full">
        <div
          className={
            "flex flex-row w-full justify-between gap-6 max-lg:flex-col"
          }
        >
          <div className="flex flex-col items-start w-full gap-6">
            <h2 className="text-[#1E1E1E] w-full font-semibold text-4xl max-sm:text-2xl font-unaego">
              Impact
            </h2>
            <p className="text-lg max-sm:text-sm font-unaego-light">
              At Dispatch Hub, our focus goes beyond just delivering packages;
              we aim to create lasting connections that empower businesses and
              individuals alike. We cater to the growing needs of small
              businesses, helping them reach new customers and expand their
              horizons across Nigeria. By offering fast, reliable, and
              cost-effective delivery services, we play a key role in fueling
              local economies and supporting the growth of the digital
              marketplace. Our team is committed to providing innovative
              logistics solutions that enhance customer experiences and
              streamline operations. With every delivery, we strive to
              contribute to a more connected, efficient, and prosperous future
              for Nigeria.
            </p>
          </div>
        </div>
      </div>
      <Blocks
        title="Our Mission"
        desc="At Dispatch Hub, we aim to revolutionize delivery services in Nigeria by offering innovative, seamless, and accessible logistics solutions. We strive to support the growth of businesses, online platforms, and individuals by ensuring timely and secure transportation of goods. Our commitment is to provide a hassle-free delivery experience that customers can rely on, making us a go-to partner for efficient and trustworthy courier services nationwide. Through our dedication to reliability and excellence, we are setting a new standard in Nigeria's logistics industry."
        imgSrc={"./ourVision.png"}
        imgAlt="localDelivery"
      />
      <Blocks
        title="Our Vision"
        desc="At Dispatch Hub, our vision is to become the leading force in transforming Nigeria's logistics industry through innovation, efficiency, and customer-centric solutions. We aspire to build a future where every business, regardless of size, has access to seamless delivery services that connect them to their customers effortlessly. By leveraging technology and sustainable practices, we aim to set new benchmarks in reliability and speed, fostering stronger connections across Nigeria. Our goal is to empower businesses and individuals, helping them thrive in an increasingly digital and interconnected world, while driving the evolution of logistics in the country"
        imgSrc={"./ourMission.png"}
        imgAlt="scheduledDeliveries"
        reversed={true}
      />
      <div className="flex max-w-[1240px] relative w-full">
        <div className="max-sm:hidden">
          <OrangeStar size={32} left={50} color="#021336" />
        </div>
        <div
          className={
            "flex flex-row items-center relative w-full justify-between gap-6 max-lg:flex-col"
          }
        >
          <div className="flex flex-col max-w-[564px] w-full gap-10 max-sm:text-center">
            <div className="flex flex-col items-start w-full gap-6">
              <h2 className="text-[#1E1E1E] w-full font-semibold text-4xl max-sm:text-2xl font-custom">
                Download Our App <span className="text-[#F3693B]">Today!</span>
              </h2>
              <p className="text-lg max-sm:text-sm font-unaego-light">
                Enhance your dispatch experience with our easy-to-use mobile
                app. Whether you’re managing deliveries, tracking your orders,
                or booking dispatch services, our app provides a seamless and
                efficient solution right at your fingertips.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                className="max-sm:w-full rounded-[20px] max-sm:rounded-[5.4px] flex md:hidden justify-center items-center"
                width={100}
                src={"./AppsStore.png"}
                alt="App"
              />
              <img
                className="max-sm:w-full rounded-[20px] max-sm:rounded-[5.4px]  flex md:hidden justify-center items-center"
                width={100}
                src={"./PlayStore.png"}
                alt="App"
              />
              <img
                className="max-sm:w-full rounded-[20px] max-sm:rounded-[5.4px] md:flex hidden md:justify-center md:items-center"
                width={200}
                src={"./AppsStore.png"}
                alt="App"
              />
              <img
                className="max-sm:w-full rounded-[20px] max-sm:rounded-[5.4px]  md:flex hidden md:justify-center md:items-center"
                width={200}
                src={"./PlayStore.png"}
                alt="App"
              />
            </div>
          </div>
          <div className="flex flex-row relative justify-center items-center w-full max-w-[567.42px]">
            <div className="max-sm:hidden">
              <OrangeStar size={32} left={30} />
              <OrangeStar size={56} bottom={100} left={60} color="#021336" />
            </div>
            <div className="hidden max-sm:flex">
              <OrangeStar size={33} bottom={0} left={20} color="#021336" />
            </div>
            <img
              className="max-sm:w-[160.8px]"
              width={272}
              src={"./app.png"}
              alt="App"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
