import { RiInstagramFill, RiLinkedinBoxFill, RiGithubFill   } from "react-icons/ri";

export const SocialMedia = () => {
    return(
        <div className="flex flex-row justify-between pt-4">
        <a href="https://www.instagram.com/pedrolaranjeira85/" target="_blank"><RiInstagramFill className="text-[#F0F4F8] text-3xl sm:text-4xl xl:text-8xl" /></a>
        <a href="https://www.linkedin.com/in/pedroh-magalhaes/" target="_blank"><RiLinkedinBoxFill className="text-[#F0F4F8] text-3xl sm:text-4xl xl:text-8xl" /></a>
        <a href="https://github.com/laranjeirapedro" target="_blank"><RiGithubFill className="text-[#F0F4F8] text-3xl sm:text-4xl xl:text-8xl"  /></a>
      </div>
    )
}