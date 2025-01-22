import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ProjectImageOne from "../../../../public/logo.png";
import Arrow from "../../../../public/arrow_light.svg";

export const SecondSection = () => {
  return (
    <div id="section2" className="p-4 mx-14 flex flex-col">
      <section className="flex flex-row">
        <h2 className="pr-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#A0D6FF] font-bold">
          Recent Projects
        </h2>
        <FaArrowRight className="mt-1 sm:mt-2 text-[#A0D6FF] text-3xl md:text-4xl lg:text-5xl xl:text-6xl"/>
      </section>
      <div>
        <div className="mt-4 xl:mt-6 p-2 flex flex-col lg:flex-row items-center border-2 bg-[#333333]  lg:max-w-[70%] xl:max-w-[80%]">
          <Image src={ProjectImageOne} alt="" className="max-w-36 lg:max-w-40 xl:max-w-48" />
          <article className="text-[#F0F4F8] lg:p-2 xl:text-xl">
            <h4>Project Name</h4>
            <p className="pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </article>
        </div>
        <div className="mt-4 xl:mt-6 p-2 flex flex-col lg:flex-row items-center border-2 bg-[#333333]  lg:max-w-[70%] xl:max-w-[80%] justify-self-end">
          <Image src={ProjectImageOne} alt="" className="max-w-36 lg:max-w-40 xl:max-w-48" />
          <article className="text-[#F0F4F8] lg:p-2 xl:text-xl">
            <h4>Project Name</h4>
            <p className="pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </article>
        </div>
        <div className="mt-4 xl:mt-6 p-2 flex flex-col lg:flex-row items-center border-2 bg-[#333333]  lg:max-w-[70%] xl:max-w-[80%]">
          <Image src={ProjectImageOne} alt="" className="max-w-36 lg:max-w-40 xl:max-w-48" />
          <article className="text-[#F0F4F8] lg:p-2 xl:text-xl">
            <h4>Project Name</h4>
            <p className="pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </article>
        </div>
        <div className="mt-4 xl:mt-6 p-2 flex flex-col lg:flex-row items-center border-2 bg-[#333333]  lg:max-w-[70%] xl:max-w-[80%] justify-self-end">
          <Image src={ProjectImageOne} alt="" className="max-w-36 lg:max-w-40 xl:max-w-48" />
          <article className="text-[#F0F4F8] lg:p-2 xl:text-xl">
            <h4>Project Name</h4>
            <p className="pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </article>
        </div>
      </div>
      <div className="flex justify-center pt-4 pb-4">
        <a href="#section3">
          <Image src={Arrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};
