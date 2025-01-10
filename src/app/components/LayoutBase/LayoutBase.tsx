import { ReactNode } from "react";
import {Header} from "@components/Header";
import { Footer } from "@components/Footer";

interface LayoutProps{
    children: ReactNode;
}

export const LayoutBase = ({children}: LayoutProps) => {
    return(
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            <Header />
            <main className="flex-grow container p-0 m-0 min-w-full min-h-screen">{children}</main>
            <Footer />
        </div>
    )
}