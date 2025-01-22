import { ContactForm } from "../ContactForm";

export const ThirdSection = () => {
  return (
    <div id="section3" className="w-screen bg-[#333333] p-4 m-0 flex flex-col items-center">
      <div className="text-[#A0D6FF] sm:w-[70%] xl:w-[80%]">
        <h4 className="text-center lg:text-xl xl:text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </h4>
      </div>
      <div className="mt-6 py-6 px-12 bg-[#F0F4F8] rounded-lg">
        <ContactForm />
      </div>
    </div>
  );
};
