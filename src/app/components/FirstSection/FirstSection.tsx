import Image from "next/image";
import Photo from "../../../../public/profile-image.webp";
import Arrow from "../../../../public/arrow.svg";
import { SocialMedia } from "../SocialMedia";

export const FirstSection = () => {
  return (
    <div className="bg-[#333333] min-w-full p-0 pb-4 m-0 flex flex-col items-center">
      <div>
        <section className="container mx-auto flex flex-row justify-between items-center p-[50px]">
          <div>
            <Image
              src={Photo}
              alt="profile_image"
              className="max-w-64 rounded-full"
            />
            <SocialMedia />
          </div>
          <article className="max-w-[50%] border-2 border-black rounded-3xl p-5 shadow-custom bg-[#F0F4F8]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </article>
        </section>
      </div>
      <div>
        <a href=""><Image src={Arrow} alt="arrow" /></a>
      </div>
    </div>
  );
};
