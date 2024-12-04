import Input from "@/components/Input";
import OrangeStar from "@/components/OrangeStar";
import React, { useState } from "react";

const Contact = () => {
  const [btndisabled, setBtnDisabled] = useState<boolean>(true);
  const [fields, setFields] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFields((prevField) => {
      return {
        ...prevField,
        [name]: value,
      };
    });

    if (fields.email && fields.phone && fields.message) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };
  function handleClick(event: React.MouseEvent) {
    console.log(fields);
  }
  return (
    <div className="flex justify-center py-10 pb-36 px-10">
      <div className="flex flex-col max-w-[1240px] gap-16 py-10 relative justify-between max-sm:gap-10">
        <div className="relative max-sm:hidden">
          <OrangeStar size={56} top={23} right={0} />
          <OrangeStar size={24} top={12} right={160} />
          <OrangeStar size={56} top={0} left={10} />
        </div>
        <div className="relative hidden max-sm:flex">
          <OrangeStar size={56} top={30} left={-30} />
          <OrangeStar size={24} top={60} right={0} />
          <OrangeStar size={24} top={900} left={-10} />
        </div>
        <h1 className="text-[#1E1E1E] font-semibold text-center text-5xl font-custom max-sm:text-[32px]">
          Get in Touch
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-[40px] max-sm:gap-0">
          <div className="flex flex-col justify-center gap-[40px] w-full">
            <div className="flex flex-col justify-start items-start gap-[8px] text-start max-sm:text-center">
              <h3 className="text-[#1E1E1E] font-custom font-semibold text-4xl w-full max-sm:text-2xl">
                Contact Us
              </h3>
              <p className="text-[#545454] font-customLight font-normal text-base max-sm:text-sm">
                We’re here to assist you with all your delivery needs,
                inquiries, and partnerships. Feel free to reach out to us
                through any of the following channels:
              </p>
            </div>

            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                {/* FORM FIELDS */}
                <Input
                  onChange={handleChange}
                  label="Email Address"
                  name="email"
                  type="email"
                  value={String(fields.email)}
                  placeholder="e.g jaybiu@outlook.com"
                />
                <Input
                  onChange={handleChange}
                  label="Phone Number"
                  name="phone"
                  type="number"
                  value={String(fields.phone)}
                  placeholder="e.g 09033882000"
                />
              </div>
              <div className="">
                {/* FORM BUTTON */}
                <button
                  disabled={btndisabled}
                  onClick={handleClick}
                  className=" text-white h-[64px] rounded-full w-full bg-[#FE581C] disabled:bg-[#ff9b77] max-sm:hidden"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[40px] w-full">
            {/* FORM FIELD MESSAGE */}
            <textarea
              onChange={handleChange}
              value={String(fields.message)}
              name="message"
              placeholder="Message"
              className="border-[#545454] h-[30vh] rounded-xl border-[1px] md:h-full px-[16px] py-[13px] resize-none max-sm:text-xs"
            ></textarea>
            <div className="">
              {/* FORM BUTTON */}
              <button
                disabled={btndisabled}
                onClick={handleClick}
                className=" text-white h-[64px] rounded-full w-full bg-[#FE581C] disabled:bg-[#ff9b77] sm:hidden"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
