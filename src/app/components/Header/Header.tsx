import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../../public/logo.png";

export const Header = () => {
    return(
        <header className="bg-white text-white py-2">
            <div className="container p-4 mx-auto flex flex-row justify-between items-center">
                <GiHamburgerMenu size={40} className="p-0" color="#333333"/>
                <Image src={Logo} alt="logo" className="max-w-20 rounded-full border-2 border-[#333333]"/>
            </div>
        </header>
    )
}