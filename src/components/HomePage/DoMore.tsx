import DoMoreBlock from "../DoMoreBlock";
import App from "../../../public/app.png";
import appProfile from "../../../public/AppProfile.png";
import AppMap from "../../../public/AppMap.png";

const DoMore = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-44">
      <h1 className="text-[#1E1E1E] font-semibold text-center text-5xl pb-16 font-custom max-sm:text-2xl">
        Do More with our Mobile App
      </h1>
      <div className="flex flex-col items-center w-full gap-16 max-sm:gap-10">
        <DoMoreBlock
          title="Delivery Your Logistics Safely and "
          titleC="Quickly"
          text="We blend fast, bike-based delivery with the convenience of our mobile app. Our team of cyclists ensures quick, reliable service while you track and manage your orders effortlessly through our app. Committed to speed and sustainability, we’re here to transform your local delivery experience."
          imgSrc={appProfile} 
          imgAlt="App Profile"
          secondStarPosLeft="32"
        />
        <DoMoreBlock
          title="Track all your deliveries in "
          titleC="Real Time"
          text="Our user-friendly platform lets you monitor your parcel’s journey in real-time, from pickup to drop-off. Receive instant updates and precise location details, ensuring you know exactly when and where your delivery will arrive."
          imgSrc={AppMap}
          imgAlt="App Map"
          reversed={true}
          secondStarPosLeft="500"
        />
        <DoMoreBlock
          title="Earn with us as a Dispatch Rider with "
          titleC="Flexible Working Hours"
          text="As a dispatch rider, you’ll enjoy flexible working hours, competitive pay, and the satisfaction of providing essential delivery services. If you’re driven, reliable, and ready to be part of a dynamic team, we’d love to have you on board. Start earning with us today!"
          imgSrc="/AppMap.png"
          imgAlt={App}
          secondStarPosLeft="32"
        />
      </div>
    </div>
  );
};

export default DoMore;
