import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ProjectImageOne from "../../../../public/logo.png";
import Arrow from "../../../../public/arrow_light.svg";

export const SecondSection = () => {
  return (
    <div className="p-4 mx-14 flex flex-col items-center">
      <section className="flex flex-row items-center">
        <h2 className="pr-2 text-6xl text-[#A0D6FF] font-bold">
          Recent Projects
        </h2>
        <FaArrowRight size={60} className="mt-4" color="#A0D6FF" />
      </section>
      <div>
        <div className="mt-10 flex flex-row items-center border-2 bg-[#333333] max-w-[70%]">
          <Image src={ProjectImageOne} alt="" className="max-w-48" />
          <article className="text-[#F0F4F8] pl-4">
            <h4>Project Name</h4>
            <p className="pt-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </article>
        </div>
        <div className="mt-10 flex flex-row items-center border-2 bg-[#333333] max-w-[70%] justify-self-end">
          <Image src={ProjectImageOne} alt="" className="max-w-48" />
          <article className="text-[#F0F4F8] pl-4">
            <h4>Project Name</h4>
            <p className="pt-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </article>
        </div>
        <div className="mt-10 flex flex-row items-center border-2 bg-[#333333] max-w-[70%]">
          <Image src={ProjectImageOne} alt="" className="max-w-48" />
          <article className="text-[#F0F4F8] pl-4">
            <h4>Project Name</h4>
            <p className="pt-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </article>
        </div>
        <div className="mt-10 flex flex-row items-center border-2 bg-[#333333] max-w-[70%] justify-self-end">
          <Image src={ProjectImageOne} alt="" className="max-w-48" />
          <article className="text-[#F0F4F8] pl-4">
            <h4>Project Name</h4>
            <p className="pt-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </article>
        </div>
      </div>
      <div className="p-2 pt-4">
        <a href=""><Image src={Arrow} alt="arrow" /></a>
      </div>
    </div>
  );
};
