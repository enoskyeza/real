import React from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import { services } from "@/components/data";
import './services.css'; // Import the CSS file

const Services = () => {
  return (
      <section
        id="services"
        className="relative pt-16 md:pt-20 lg:py-28 flex items-center justify-center"
      >
          <div
              className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/background/bg-1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
                width: '100%',
                height: '55%'
            }}
          >
          </div>
          <div className="absolute inset-0 bg-orange-300 opacity-80"
            style={{
                width: '100%',
                height: '55%'
            }}></div>
      <div className="container content ">
        <SectionTitle
          title="Below are some of our services"
          subtitle="Our Services"
          paragraph=" "
          center
        />
        <div className="relative">
          <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {services.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
