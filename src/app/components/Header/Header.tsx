import Image from "next/image";
import { Menu } from "@components/Menu";
import Logo from "../../../../public/logo.png";

export const Header = () => {
  return (
    <header className="text-[#333333] py-2 mx-12">
      <div className="flex justify-between items-center w-full px-4">
        <div className="flex-shrink-0">
          <Menu />
        </div>
        <div className="flex-shrink-0 ml-auto">
          <Image
            src={Logo}
            alt="logo"
            className="w-auto max-w-20 rounded-full border-2 border-[#333333]"
          />
        </div>
      </div>
    </header>
  );
};
