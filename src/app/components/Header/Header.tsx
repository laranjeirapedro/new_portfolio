import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../../public/logo.png";

export const Header = () => {
    return(
        <header className="bg-blue-500 text-white py-4">
            <div className="container mx-auto flex flex-row justify-between">
                <GiHamburgerMenu size={40} className="p-0"/>
                <Image src={Logo} alt="logo" className="max-w-14 rounded-full"/>
            </div>
        </header>
    )
}