import Image from "next/image";
import { Projects } from "../Projects/Projects";
import Arrow from "../../../../public/arrow_light.svg";

export const SecondSection = () => {
  return (
    <div className="px-16">
      <div id="section2" className="p-4 mx-14 flex flex-col">
        <h1 className="text-3xl font-bold mb-6">GitHub Projects</h1>
        <Projects />
      </div>

      <div className="flex justify-center pt-4 pb-4">
        <a href="#section3">
          <Image src={Arrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};
