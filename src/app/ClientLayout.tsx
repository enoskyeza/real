'use client'
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer"
import {ParallaxProvider} from 'react-scroll-parallax';
import Underconstruction from "@/components/uderconstruction"

export default function ClientLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="main-container">
            <Header/>
            <ParallaxProvider>
                {children}
            </ParallaxProvider>
            <Footer/>
            <ScrollToTop/>
            {/*  <Underconstruction />*/}
        </div>
    );
}
