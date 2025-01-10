import { RiInstagramFill, RiLinkedinBoxFill, RiGithubFill   } from "react-icons/ri";

export const SocialMedia = () => {
    return(
        <div className="flex flex-row justify-between pt-10">
        <a href="https://www.instagram.com/pedrolaranjeira85/" target="_blank"><RiInstagramFill size={60} color="#F0F4F8" /></a>
        <a href="https://www.linkedin.com/in/pedroh-magalhaes/" target="_blank"><RiLinkedinBoxFill size={60} color="#F0F4F8" /></a>
        <a href="https://github.com/laranjeirapedro" target="_blank"><RiGithubFill size={60} color="#F0F4F8" /></a>
      </div>
    )
}