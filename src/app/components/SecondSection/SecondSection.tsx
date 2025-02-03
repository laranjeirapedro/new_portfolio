import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ProjectImageOne from "../../../../public/to-do-list-thumbnail.webp";
import ProjectImageTwo from "../../../../public/weather-app-thumbnail.png";
import ProjectImageThree from "../../../../public/logo.png";
import ProjectImageFour from "../../../../public/logo.png";
import ProjectImageFive from "../../../../public/logo.png";
import Arrow from "../../../../public/arrow_light.svg";

export const SecondSection = () => {
  return (
    <div className="px-16">
      <div id="section2" className="p-4 mx-14 flex flex-col">
        <section className="flex flex-row">
          <h2 className="pr-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#A0D6FF] font-bold">
            Recent Projects
          </h2>
          <FaArrowRight className="mt-1 sm:mt-2 text-[#A0D6FF] text-3xl md:text-4xl lg:text-5xl xl:text-6xl" />
        </section>
      </div>

      <div>
        <div className="mt-4 xl:mt-6 p-2 flex flex-col lg:flex-row items-center border-2 bg-[#333333]  lg:max-w-[70%]">
          <div>
            <Image
              src={ProjectImageOne}
              alt=""
              className="max-w-36 lg:max-w-40 xl:max-w-48"
            />
          </div>
          <article className="text-[#F0F4F8] lg:p-2 lg:max-w-[70%]">
            <h4 className="font-bold text-xl 2xl:text-2xl">TO DO LIST</h4>
            <p className="pt-6 2xl:w-9/12 xl:text-xl 2xl:text-2xl">
              A responsive To-Do App built with React, Next.js, Tailwind CSS,
              and TypeScript. Features include task addition, deletion, and a
              clean UI, showcasing my skills in state management, modern web
              development, and responsive design.
            </p>
            <div className="py-2 xl:py-4 flex flex-row flex-nowrap justify-between items-center md:w-1/2 lg:w-4/5 xl:w-3/5 xl:text-xl">
              <a href="https://github.com/laranjeirapedro/portfolio_project--to-do-list">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  Git Hub
                </button>
              </a>
              <a href="">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  App
                </button>
              </a>
            </div>
          </article>
        </div>

        <div className="mt-4 xl:mt-6 p-2 flex flex-col lg:flex-row items-center border-2 bg-[#333333]  lg:max-w-[70%] justify-self-end">
          <div>
            <Image
              src={ProjectImageTwo}
              alt=""
              className="max-w-36 lg:max-w-40 xl:max-w-48"
            />
          </div>
          <article className="text-[#F0F4F8] lg:p-2 lg:max-w-[70%]">
            <h4 className="font-bold text-xl 2xl:text-2xl">WEATHER APP</h4>
            <p className="pt-6 2xl:w-9/12 xl:text-xl 2xl:text-2xl">
              SkyWatch is a weather forecast application built with Next.js and
              Tailwind CSS, utilizing the WeatherAPI.com to provide real-time
              weather data. It allows users to search for weather conditions by
              city, address, or postal code, displaying current temperature,
              wind speed, humidity, sunrise and sunset times, and a 10-day
              forecast. With a clean and responsive interface, SkyWatch offers a
              seamless experience for checking weather updates quickly and
              efficiently. 🚀🌤️
            </p>
            <div className="py-2 xl:py-4 flex flex-row flex-nowrap justify-between items-center md:w-1/2 lg:w-4/5 xl:w-3/5 xl:text-xl">
              <a href="https://github.com/laranjeirapedro/portfolio_project--weather-app.git">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  Git Hub
                </button>
              </a>
              <a href="">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  App
                </button>
              </a>
            </div>
          </article>
        </div>

        <div className="mt-4 xl:mt-6 p-2 flex flex-col lg:flex-row items-center border-2 bg-[#333333]  lg:max-w-[70%]">
          <div>
            <Image
              src={ProjectImageThree}
              alt=""
              className="max-w-36 lg:max-w-40 xl:max-w-48"
            />
          </div>
          <article className="text-[#F0F4F8] lg:p-2 lg:max-w-[70%]">
            <h4 className="font-bold text-xl 2xl:text-2xl">PROJECT NAME</h4>
            <p className="pt-6 2xl:w-9/12 xl:text-xl 2xl:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="py-2 xl:py-4 flex flex-row flex-nowrap justify-between items-center md:w-1/2 lg:w-4/5 xl:w-3/5 xl:text-xl">
              <a href="https://github.com/laranjeirapedro/portfolio_project--to-do-list">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  Git Hub
                </button>
              </a>
              <a href="">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  App
                </button>
              </a>
            </div>
          </article>
        </div>

        <div className="mt-4 xl:mt-6 p-2 flex flex-col lg:flex-row items-center border-2 bg-[#333333]  lg:max-w-[70%] justify-self-end">
          <div>
            <Image
              src={ProjectImageFour}
              alt=""
              className="max-w-36 lg:max-w-40 xl:max-w-48"
            />
          </div>
          <article className="text-[#F0F4F8] lg:p-2 lg:max-w-[70%]">
            <h4 className="font-bold text-xl 2xl:text-2xl">PROJECT NAME</h4>
            <p className="pt-6 2xl:w-9/12 xl:text-xl 2xl:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="py-2 xl:py-4 flex flex-row flex-nowrap justify-between items-center md:w-1/2 lg:w-4/5 xl:w-3/5 xl:text-xl">
              <a href="https://github.com/laranjeirapedro/portfolio_project--to-do-list">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  Git Hub
                </button>
              </a>
              <a href="">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  App
                </button>
              </a>
            </div>
          </article>
        </div>

        <div className="mt-4 xl:mt-6 p-2 flex flex-col lg:flex-row items-center border-2 bg-[#333333]  lg:max-w-[70%]">
          <div>
            <Image
              src={ProjectImageFive}
              alt=""
              className="max-w-36 lg:max-w-40 xl:max-w-48"
            />
          </div>
          <article className="text-[#F0F4F8] lg:p-2 lg:max-w-[70%]">
            <h4 className="font-bold text-xl 2xl:text-2xl">TO DO LIST</h4>
            <p className="pt-6 2xl:w-9/12 xl:text-xl 2xl:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="py-2 xl:py-4 flex flex-row flex-nowrap justify-between items-center md:w-1/2 lg:w-4/5 xl:w-3/5 xl:text-xl">
              <a href="https://github.com/laranjeirapedro/portfolio_project--to-do-list">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  Git Hub
                </button>
              </a>
              <a href="">
                <button className="w-20 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                  App
                </button>
              </a>
            </div>
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
