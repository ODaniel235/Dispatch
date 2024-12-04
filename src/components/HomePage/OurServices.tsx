import { services } from "@/constants/Herocontants";

const OurServices = () => {
  return (
    <section className="w-full py-10 bg-[#fff6f3] mt-28 px-10 mx-auto max-w-[1240px flex flex-col justify-center">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center text-center gap-6 mb-10 ] ">
        <h1 className="text-[#1E1E1E] font-semibold text[24px] md:text-5xl max-sm:text-[32px] font-custom">
          Our Services
        </h1>
        <p className="font-customLight text-[14px] md:text-[18px] max-w-[900px] px-5 text-center text-gray-600">
          We understand the importance of timely and reliable delivery in
          today’s fast-paced world. Our local dispatch services are designed to
          meet the unique needs of businesses and individuals across Nigeria
          with efficiency and professionalism.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 md:mt-20 items-center justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg  hover:shadow-xl transition-shadow duration-300"
          >
            <img src={service.icon} alt="service_icon" className="mb-6" />

            <h2 className="text-[20px] mds:text-[28px] font-semibold mb-2 text-center">
              {service.heading}
            </h2>

            <h3 className="text-[14px] md:text-[18px] text-[#021336] mb-2">
              {service.subHeading}
            </h3>

            <p className="text-[12px] md:text-sm text-[#545454] text-center">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
