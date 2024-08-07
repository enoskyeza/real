'use client'
import SectionTitle from "../Common/SectionTitle";
import SingleStatistic from "./singleStatistic";
import {statistics} from "@/components/data";
import {Parallax} from "react-scroll-parallax";
import React from "react";
import Image from "next/image";

const Statistics = () => {
    return (
        <section className="relative flex flex-col items-center pb-0 md:pb-0 lg:pb-0 mt-16 md:mt-0">
            <SectionTitle
                title=""
                subtitle="Mission and Achievements"
                paragraph=""
                center
            />

            <div className="relative w-full flex flex-col overflow-hidden items-center py-8">
                <div className="absolute inset-0 z-0 w-full h-full">
                    <Parallax translateY={[-30, 30]} className="relative w-full h-full">
                        <Image
                            src="/images/background/bg-2.jpg"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="w-full h-full"
                        />
                        <div className="w-full h-full absolute inset-0 bg-brand-dark opacity-80"></div>
                    </Parallax>

                </div>

                <div className="z-10 container custom-container grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                    <div className="flex items-center text-white">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="border-8 border-orange-500 p-6 flex flex-col items-center">
                                <h2 className="text-6xl font-medium text-white">15</h2>
                                <p className="text-xl text-center">Years</p>
                            </div>
                            <p className="text-xl mt-4">
                                The mission of Resident Architects is to be a one-stop center for ingenious, top quality
                                architectural designs and
                                services in the building industry within East Africa.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-white ">
                        {statistics.map((stat, index) => (
                            <SingleStatistic key={index} statistic={stat}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
