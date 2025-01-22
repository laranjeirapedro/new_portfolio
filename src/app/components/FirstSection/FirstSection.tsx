import Image from "next/image";
import Photo from "../../../../public/profile-image.webp";
import Arrow from "../../../../public/arrow.svg";
import { SocialMedia } from "../SocialMedia";
import TypingEffect from "../TypingEffect/TypingEffect";

export const FirstSection = () => {
  const textToType = "Hey there! I'm <strong>Pedro Laranjeira</strong>.";
  return (
    <div id="#section1" className="min-w-full bg-[#333333] xl:flex flex-col">
      <div>
        <section className="my-0 ml-5 flex flex-col xl:flex-row items-center space-y-10 p-4 xl:p-[50px] justify-between xl:space-x-48">
          <div className="">
            <Image
              src={Photo}
              alt="profile_image"
              className="max-w-48 rounded-full sm:max-w-60 lg:max-w-64 xl:max-w-96"
            />
            <SocialMedia />
          </div>
          <div className="border-2 border-black rounded-3xl p-2 lg:p-5 shadow-custom bg-[#F0F4F8]">
            <TypingEffect
              text={textToType}
              className="text-[#A0D6FF] text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
            />
            <article className="text-xs sm:text-sm lg:text-base xl:text-xl">
              <br />I'm a <strong>Web Developer | Front-End</strong> who really enjoys
              coding responsive, interactive, and classy web applications by
              using JavaScript, React, HTML5, CSS3, and CMS platforms.
              <br />
              Over the years, I've honed my skills through a variety of
              projects, ranging from e-commerce sites to personal blogs, always
              looking to push myself further with each new challenge. One of my
              favorite things to do is dive deep into React hooks,
              styled-components, and making sure the user experience is
              top-notch. I’ve worked on everything from front-end design to
              full-stack development, using JavaScript (and TypeScript),
              alongside frameworks and libraries like Express, Next.js, and
              TailwindCSS. Plus, I’ve built some cool stuff on Shopify, which
              taught me a lot about e-commerce and customizing platforms. What
              drives me is the constant learning and problem-solving—whether
              it’s improving a site’s performance or implementing new features
              to make the user experience even better. <br />
              <br />
              When I’m not coding, you’ll find me exploring new tech, reading up
              on web trends, or working on my blog, My Better Self, where I
              write about health, wellness, and travel. Feel free to check out
              my work below. If you're interested in collaborating or just want
              to chat, don’t hesitate to reach out. Let’s build something great
              together!
            </article>
          </div>
        </section>
      </div>
      <div className="flex justify-center pb-4">
        <a href="#section2">
          <Image src={Arrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};
