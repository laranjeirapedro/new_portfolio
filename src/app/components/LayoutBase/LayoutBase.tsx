import { ReactNode } from "react";
import {Header} from "@components/Header";
import { Footer } from "@components/Footer";

interface LayoutProps{
    children: ReactNode;
}

export const LayoutBase = ({children}: LayoutProps) => {
    return(
        <div className="m-0 p-0 bg-[#F0F4F8]">
            <Header />
            <main className="flex-grow p-0 m-0">{children}</main>
            <Footer />
        </div>
    )
}