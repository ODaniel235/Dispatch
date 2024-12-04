import boxtime from "../../public/box-time.svg";
import location from "../../public/location.svg";
import convert3D from "../../public/convert-3d-cube.svg";

const heroContent = {
  text: "unlock seamless deliveries Now!",
  subtext:
    "Enjoy fast, reliable and eco-friendly delivery solutions that keep your business moving efficiently",
};

const services = [
  {
    heading: "Local Delivery",
    subHeading: "Need to send a package across town ?",
    desc: "Need it there fast? Our same-day delivery option ensures your parcel gets to its destination within hours.",
    icon: location,
  },
  {
    heading: "Scheduled Deliveries",
    subHeading: "Need to send a package across town ?",
    desc: "Plan your deliveries in advance and let us handle the timing. Perfect for businesses needing regular dispatch services.",
    icon: boxtime,
  },
  {
    heading: "Bulk Deliveries",
    subHeading: "Need to send a package across town ?",
    desc: "We manage bulk shipments with ease, ensuring your larger consignments are delivered efficiently and safely..",
    icon: convert3D,
  },
];
export { heroContent, services };
