"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import riderImg from "../../public/dispatchRider.png";
import Input from "@/components/Input";
import ImageInput from "@/components/ImageInput";
import { SuccessIcon } from "@/components/Icons";
import { title } from "process";
import { redirect } from "next/navigation";
import Btn from "@/components/Btn";

export default function Register() {
  const [content, setContent] = useState({
    title: "Register as a Courier",
    desc: "Join thousands of satisfied customers and businesses who trust Dispatch Hub for their delivery needs. Whether you’re a small business owner, an online retailer, or an individual, we have the right solution for you.",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [showForm, setShowForm] = useState({
    one: true,
    two: false,
    three: false,
    ongoing: true,
    error: false,
    success: false,
  });

  interface FormOne {
    fName: string;
    lName: string;
    birth: string;
    email: string;
  }

  interface FormTwo {
    vehiclePhoto: File | string; // File para manejar archivos, string para cadenas de texto.
    vehicleCert: string;
    vehicleYear: string;
    vehicleBrand: string;
  }

  interface FormThree {
    license: string;
    licenseFront: File | string;
    licenseBack: File | string;
    registrationPlate: string;
  }

  interface Fields {
    formOne: FormOne;
    formTwo: FormTwo;
    formThree: FormThree;
  }

  const [fields, setFields] = useState<Fields>({
    formOne: {
      fName: "",
      lName: "",
      birth: "",
      email: "",
    },
    formTwo: {
      vehiclePhoto: "",
      vehicleCert: "",
      vehicleYear: "",
      vehicleBrand: "",
    },
    formThree: {
      license: "",
      licenseFront: "",
      licenseBack: "",
      registrationPlate: "",
    },
  });

  const colors = {
    active:
      "flex items-center justify-center bg-[#F3693B] w-16 h-16 text-white text-4xl rounded-full max-sm:min-w-[50px] max-sm:max-h-[50px] max-sm:text-xl",
    inactive:
      "flex items-center justify-center bg-[#E5E5EA] w-16 h-16 text-black text-4xl rounded-full max-sm:min-w-[50px] max-sm:max-h-[50px] max-sm:text-[#545454] max-sm:text-xl",
  };

  function handleStepOne(event: any) {
    setShowForm((pastValue) => {
      return {
        ...pastValue,
        one: false,
        two: true,
      };
    });
    setBtnDisabled(!isFormComplete(fields.formTwo));
    console.log(fields.formOne);
  }

  function handleStepTwo() {
    setShowForm((pastValue) => {
      return {
        ...pastValue,
        two: false,
        three: true,
      };
    });
    setBtnDisabled(!isFormComplete(fields.formThree));
    console.log(fields.formTwo);
  }

  function handleStepThree() {
    console.log(fields);
    let success = true;

    setShowForm((pastValue) => {
      return {
        ...pastValue,
        ongoing: false
      };
    });

    if(success) {
      setShowForm((pastValue) => {
        return {
          ...pastValue,
          three: false,
          success: true
        };
      });
      setContent({title: "Registration Successful", desc: "Dispatch Hub I ’ll get back to you through your email address . "});
      setTimeout(() => {
        redirect('/');
      }, 5000);
    }
  }

  function isFormComplete(form: { [key: string]: any }): boolean {
    return Object.values(form).every((value) => value !== "");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;
  
    setFields((prevFields) => {
      let formKey: keyof Fields | undefined;
  
      if (name in prevFields.formOne) {
        formKey = "formOne";
      } else if (name in prevFields.formTwo) {
        formKey = "formTwo";
      } else if (name in prevFields.formThree) {
        formKey = "formThree";
      }
  
      if (!formKey) {
        return prevFields;
      }
  
      const updatedForm = {
        ...prevFields[formKey],
        [name]: files && files.length > 0 ? files[0] : value,
      };
  
      const newFields = {
        ...prevFields,
        [formKey]: updatedForm,
      };
  
      // Verificar si el formulario actual está completo
      let isComplete = isFormComplete(newFields[formKey]);
  
      setBtnDisabled(!isComplete);
  
      return newFields;
    });
  }

  //   useEffect(() => {
  //     setStepForm(formOne);
  //   }, []);

  return (
    <div className="flex flex-col justify-center items-center py-20 gap-20 px-8">
      <div className="flex flex-col w-full max-w-[906px] justify-center items-center gap-10">
        <div className="flex flex-col text-center gap-6">
          <h1 className="text-5xl font-custom font-semibold max-sm:text-[32px]">
            {content.title}
          </h1>
          <p className="font-customLight">
            {content.desc}
          </p>
        </div>
        {!showForm.success && <>
          <div className="flex flex-row justify-center items-end bg-[#001132] rounded-[20px] max-sm:rounded-[5.4px] w-full h-[221px] sm:hidden">
              <Image
                width={197}
                height={223}
                src={riderImg}
                alt="dispatch_rider"
              />
            </div>
        <div className="flex flex-row justify-center items-center w-full gap-2">
          <h1 className={showForm.one ? colors.active : colors.inactive}>1</h1>
          <hr className="w-[236.5px] border-t-2 border-dashed border-t-[#E5E5EA}" />
          <h1 className={showForm.two ? colors.active : colors.inactive}>2</h1>
          <hr className="w-[236.5px] border-t-2 border-dashed border-t-[#E5E5EA}" />
          <h1 className={showForm.three ? colors.active : colors.inactive}>
            3
          </h1>
        </div>
        </>}
      </div>
        {showForm.success && <div className=" items-center justify-center"><SuccessIcon /></div>}
      <div className="flex flex-row w-full max-w-[1240px] gap-6">
        {showForm.ongoing && 
        <div className="flex flex-col gap-12 w-full">
          {/* STEP 1 */}
          {showForm.one && (
            <>
              <div className="flex flex-col gap-[50px] max-sm:gap-5">
                {/* FORM FIELDS */}
                <Input
                  onChange={handleChange}
                  label="Enter First Name"
                  name="fName"
                  type="text"
                  value={String(fields.formOne.fName)}
                  placeholder=""
                />
                <Input
                  onChange={handleChange}
                  label="Enter Last Name"
                  name="lName"
                  type="text"
                  value={String(fields.formOne.lName)}
                  placeholder=""
                />
                <Input
                  onChange={handleChange}
                  label="Date of Birth"
                  name="birth"
                  type="date"
                  value={String(fields.formOne.birth)}
                  placeholder=""
                />
                <Input
                  onChange={handleChange}
                  label="Email Address"
                  name="email"
                  type="mail"
                  value={String(fields.formOne.email)}
                  placeholder=""
                />
              </div>
              <div className="flex flex-row justify-center">
                {/* FORM BUTTON */}
                <Btn text={"Continue"} width="full" disabled={btnDisabled} onClick={handleStepOne} />
              </div>
            </>
          )}

          {/* STEP 2 */}
          {showForm.two && (
            <>
              <div className="flex flex-col gap-[50px] max-sm:gap-5">
                {/* FORM FIELDS */}
                <ImageInput
                  title="Upload Photo of Vehicle"
                  inputName="vehiclePhoto"
                  onChange={handleChange}
                />
                <ImageInput
                  title="Upload Certificate of Vehicle Registration"
                  inputName="vehicleCert"
                  onChange={handleChange}
                />
                <Input
                  onChange={handleChange}
                  label="Vehicle Production Year"
                  name="vehicleYear"
                  type="number"
                  value={String(fields.formTwo.vehicleYear)}
                  placeholder=""
                />
                <Input
                  onChange={handleChange}
                  label="Brand of Vehicle"
                  name="vehicleBrand"
                  type="text"
                  value={String(fields.formTwo.vehicleBrand)}
                  placeholder=""
                />
              </div>
              <div className="flex flex-row justify-center">
                {/* FORM BUTTON */}
                <button
                  disabled={btnDisabled}
                  onClick={handleStepTwo}
                  className=" text-white h-[64px] max-sm:max-w-44 rounded-full w-full bg-[#FE581C] disabled:bg-[#ff9b77]"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {showForm.three && (
            <>
              <div className="flex flex-col gap-[50px] max-sm:gap-5">
                {/* FORM FIELDS */}
                <ImageInput
                  title="Upload Driver License"
                  inputName="license"
                  onChange={handleChange}
                />
                <ImageInput
                  title="Selfie with Driver License Front"
                  inputName="licenseFront"
                  onChange={handleChange}
                />
                <ImageInput
                  title="Selfie with Driver License Back"
                  inputName="licenseBack"
                  onChange={handleChange}
                />
                <Input
                  label="Registration Plate"
                  name="registrationPlate"
                  type="text"
                  value={String(fields.formThree.registrationPlate)}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
              <div className="flex flex-row justify-center">
                {/* FORM BUTTON */}
                <button
                  disabled={btnDisabled}
                  onClick={handleStepThree}
                  className=" text-white h-[64px] max-sm:max-w-44 rounded-full w-full bg-[#FE581C] disabled:bg-[#ff9b77]"
                >
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
        }
        {!showForm.success && (
          <>
            <div className="flex flex-row justify-center items-end bg-[#001132] rounded-[20px] w-full h-[648px] max-sm:hidden">
              <Image
                width={441}
                height={580.26}
                src={riderImg}
                alt="dispatch_rider"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
