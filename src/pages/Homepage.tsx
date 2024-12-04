import Hero from "@/components/HomePage/Hero";
import OurServices from "@/components/HomePage/OurServices";
import DoMore from "@/components/HomePage/DoMore";
import AppAdsBanner from "@/components/HomePage/AppAdsBanner";
import Faq from "@/components/HomePage/Faq";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <DoMore />
      <AppAdsBanner />
      <Faq />
    </div>
  );
};

export default Homepage;
