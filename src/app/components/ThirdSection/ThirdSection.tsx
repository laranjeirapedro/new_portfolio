import Image from "next/image";
import Arrow from "../../../../public/arrow.svg";
import { ContactForm } from "../ContactForm";

export const ThirdSection = () => {
  return (
    <div className="bg-[#333333] min-w-full p-4 m-0 flex flex-col items-center">
      <div className="text-[#A0D6FF] w-[50%] ">
        <h4 className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </h4>
      </div>
      <div className="mt-6 py-6 px-12 bg-[#F0F4F8] rounded-lg">
        <ContactForm />
      </div>
    </div>
  );
};
