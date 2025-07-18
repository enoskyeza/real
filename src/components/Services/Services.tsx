import React from 'react';
import Link from 'next/link';
import { Building, ClipboardList, Sofa, TreePine, Map, DollarSign } from 'lucide-react';

const services = [
  {
    title: 'Architectural Design',
    description: 'Creating functional and aesthetically pleasing architectural designs tailored to client needs.',
    icon: <Building className="w-10 h-10 text-white" />,
  },
  {
    title: 'Project Management',
    description: 'Comprehensive project management services to ensure timely and efficient project completion.',
    icon: <ClipboardList className="w-10 h-10 text-white" />,
  },
  {
    title: 'Interior Design',
    description: 'Transforming interior spaces with innovative and sustainable design solutions.',
    icon: <Sofa className="w-10 h-10 text-white" />,
  },
  {
    title: 'Landscape Design',
    description: 'Designing sustainable and aesthetically pleasing landscapes that enhance the built environment.',
    icon: <TreePine className="w-10 h-10 text-white" />,
  },
  {
    title: 'Urban Design & Planning',
    description: 'Strategic planning and design for urban spaces to promote sustainable and vibrant communities.',
    icon: <Map className="w-10 h-10 text-white" />,
  },
  {
    title: 'Build Cost Engineering',
    description: 'Providing accurate cost estimates and value engineering to optimize construction budgets.',
    icon: <DollarSign className="w-10 h-10 text-white" />,
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container custom-container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Our <span className="brand-text-primary">Services</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We provide a full suite of services to turn your vision into reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 group"
            >
              <div className="bg-brand-primary rounded-full p-4 inline-flex mb-4 group-hover:scale-105 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/services" className="btn-primary inline-flex">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
