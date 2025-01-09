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
            <main className="flex-grow container mx-auto py-8">{children}</main>
            <Footer />
        </div>
    )
}