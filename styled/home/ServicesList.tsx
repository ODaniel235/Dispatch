import React from "react";
import ServiceBox from "./ServiceBox";
import LocationSvg from "../LocationSvg";
import Boxtime from "../Boxtime";
import Twobox from "../Twobox";

function ServicesList() {
  return (
    <div className="py-10 px-3 my-7 flex flex-col justify-between md:flex-row gap-10">
      <ServiceBox
        svg={<LocationSvg />}
        title="Local Delivery"
        textbold="Need to send a package across town?"
        text="Need it there fast? Our same-day delivery option ensures your parcel gets to its destination within hours."
      />
      <ServiceBox
        svg={<Boxtime />}
        title="Scheduled Deliveries"
        textbold="Need to send a package across town?"
        text="Plan your deliveries in advance and let us handle the timing. Perfect for businesses needing regular dispatch services."
      />
      <ServiceBox
        svg={<Twobox />}
        title="Bulk Deliveries"
        textbold="Need to send a package across town?"
        text="We manage bulk shipments with ease, ensuring your larger consignments are delivered efficiently and safely."
      />
    </div>
  );
}

export default ServicesList;
