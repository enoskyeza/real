'use client'
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import ScrollToTop from "@/components/ScrollToTop";
import {ParallaxProvider} from 'react-scroll-parallax';

export default function ClientLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="main-container">
            {/*<Header/>*/}
            <Header />
            <ParallaxProvider>
                {children}
            </ParallaxProvider>
            <Footer />
            <ScrollToTop/>
            {/*  <Underconstruction />*/}
        </div>
    );
}
