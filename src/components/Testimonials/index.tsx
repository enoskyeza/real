'use client'
import {services, testimonials} from "@/components/data";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer";
import SingleService from "@/components/Services/SingleService";
import React from "react";

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
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
};
const Testimonials = () => {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            className="dark:bg-bg-color-dark bg-orange-100 relative z-10 py-16 md:py-20 lg:py-28 flex justify-center"
            ref={ref}>
            <div className="container custom-container">

                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                <SectionTitle
                    title="What Our Clients Say"
                    subtitle="Testimonials"
                    paragraph="We have worked on a number of projects and below is what some of our clients say about our services."
                    center
                />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                        >
                            <SingleTestimonial key={testimonial.id} testimonial={testimonial}/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
