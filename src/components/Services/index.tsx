'use client'
import React from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import {services} from "@/components/data";
import './services.css'; // Import the CSS file
import {Parallax} from 'react-scroll-parallax';
import Image from "next/image";
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';


const containerVariants = {
    hidden: {opacity: 0, x: -50},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1})

    return (
        <section
            id="services"
            className="relative py-16 md:pb-0 md:pt-20 lg:py-28 flex items-center justify-center"
        >
            <div className="absolute inset-0 w-full h-full md:h-3/5 overflow-hidden">
                <Parallax translateY={[-30, 30]} className="relative h-full w-full">
                    <Image
                        src="/images/background/bg-1.jpg"
                        alt="Background"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center'}}
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-orange-300 opacity-80"></div>
                </Parallax>
            </div>

            <div className="container custom-container content" ref={ref}>
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <SectionTitle
                        title="Below are some of our services"
                        subtitle="Our Services"
                        paragraph=" "
                        center
                        subtitle_color="white"
                    />
                </motion.div>

                <div className="relative">
                    <motion.div
                        className="equal-height-grid grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className="service-card-item"
                            >
                                <SingleService service={service}/>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
