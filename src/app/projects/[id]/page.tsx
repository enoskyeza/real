'use client'
import React from 'react';
import Link from 'next/link';
import {ArrowLeft, MapPin, Calendar, ChevronLeft, ChevronRight, Download} from 'lucide-react';
import {useState} from 'react';
import Image from "next/image";

const projectsData = {
    1: {
        title: 'Kampala Business Center',
        category: 'Commercial',
        location: 'Kampala, Uganda',
        year: '2023',
        status: 'Completed',
        client: 'Kampala Holdings Ltd',
        size: '50,000 sq ft',
        duration: '18 months',
        budget: '$2.5M',
        architect: 'David Kamau',
        description: 'The Kampala Business Center stands as a testament to modern commercial architecture in Uganda. This 15-story office complex seamlessly blends functionality with aesthetic appeal, featuring sustainable design elements and state-of-the-art facilities that cater to the evolving needs of modern businesses.',
        challenge: 'The primary challenge was designing a high-rise structure that would complement the existing urban landscape while maximizing natural light and energy efficiency. The site constraints required innovative solutions for parking and public access.',
        solution: 'We implemented a stepped facade design that reduces wind load while creating terraced gardens on multiple levels. The building features a double-skin facade system for optimal thermal performance and incorporates rainwater harvesting systems.',
        features: [
            'LEED Gold certified sustainable design',
            'Smart building automation systems',
            'Rooftop garden and recreational areas',
            'Underground parking for 200+ vehicles',
            'High-speed elevator systems',
            'Flexible office spaces with modular design'
        ],
        images: [
            'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
            'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
            'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
            'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
        ],
        testimonial: {
            text: "ArchStudio delivered beyond our expectations. The building not only meets our functional requirements but has become an iconic landmark in Kampala's skyline.",
            author: "Sarah Nakimuli",
            position: "CEO, Kampala Holdings Ltd"
        },
        downloads: [
            {name: "Project Plans (PDF)", size: "2.4 MB", type: "pdf"},
            {name: "3D Model (OBJ)", size: "15.7 MB", type: "3d"},
            {name: "Material Specifications", size: "1.2 MB", type: "pdf"}
        ],
    },
    2: {
        title: 'Riverside Residences',
        category: 'Residential',
        location: 'Entebbe, Uganda',
        year: '2023',
        status: 'In Progress',
        client: 'Private Developer',
        size: '25,000 sq ft',
        duration: '24 months',
        budget: '$1.8M',
        architect: 'James Mugisha',
        description: 'Riverside Residences represents the pinnacle of luxury waterfront living in Uganda. These contemporary homes are designed to maximize the stunning lake views while providing modern comfort and sustainable living solutions.',
        challenge: 'Designing homes that could withstand the lakeside environment while maintaining luxury standards and environmental sensitivity.',
        solution: 'We used locally sourced materials resistant to humidity and implemented elevated foundations with proper drainage systems. Large windows and open floor plans maximize natural ventilation and lake views.',
        features: [
            'Panoramic lake views from all units',
            'Private boat docks and waterfront access',
            'Solar panel integration',
            'Natural ventilation systems',
            'Infinity pools overlooking the lake',
            'Landscaped gardens with native plants'
        ],
        images: [
            'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
            'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
            'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
            'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
        ],
        testimonial: {
            text: "The attention to detail and understanding of our vision for luxury lakeside living has been exceptional throughout this project.",
            author: "Michael Ssebunya",
            position: "Project Developer"
        },
        downloads: [
            {name: "Project Plans (PDF)", size: "2.4 MB", type: "pdf"},
            {name: "3D Model (OBJ)", size: "15.7 MB", type: "3d"},
            {name: "Material Specifications", size: "1.2 MB", type: "pdf"}
        ],
    }
};

export default function ProjectDetail({params}: { params: { id: string } }) {
    const {id} = params;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project = projectsData[Number(id) as keyof typeof projectsData];

    if (!project) {
        return (
            <div className="pt-20 min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Project Not Found</h1>
                    <Link href="/projects" className="brand-text-primary hover:text-red-700">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50 dark:bg-slate-900">
            {/* Back Button */}
            <div className="container mx-auto px-4 lg:px-8 py-6">
                <Link
                    href="/projects"
                    className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:brand-text-primary dark:hover:text-red-400 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5"/>
                    <span>Back to Projects</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <Image
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    width={200}   // or whatever thumbnail width you want
                    height={80}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Image Navigation */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                    <ChevronLeft className="w-6 h-6"/>
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                    <ChevronRight className="w-6 h-6"/>
                </button>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                    <div className="container mx-auto">
                        <div className="flex items-center space-x-4 mb-4">
              <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                project.status === 'Completed'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-yellow-600 text-white'
                            }`}>
                {project.status}
              </span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                            {project.title}
                        </h1>
                        <div className="flex items-center space-x-6 text-white/90">
                            <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4"/>
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4"/>
                                <span>{project.year}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                    Project Overview
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                                    The Challenge
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                                    Our Solution
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                                    Key Features
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <div
                                                className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Client Testimonial */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                                    Client Testimonial
                                </h3>
                                <blockquote className="text-lg text-slate-600 dark:text-slate-300 italic mb-4">
                                    &quot;{project.testimonial.text}&quot;
                                </blockquote>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <p className="font-semibold text-slate-800 dark:text-white">
                                            {project.testimonial.author}
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {project.testimonial.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                                    Project Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600 dark:text-slate-400">Client:</span>
                                        <span
                                            className="font-medium text-slate-800 dark:text-white">{project.client}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600 dark:text-slate-400">Size:</span>
                                        <span
                                            className="font-medium text-slate-800 dark:text-white">{project.size}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600 dark:text-slate-400">Duration:</span>
                                        <span
                                            className="font-medium text-slate-800 dark:text-white">{project.duration}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600 dark:text-slate-400">Budget:</span>
                                        <span
                                            className="font-medium text-slate-800 dark:text-white">{project.budget}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600 dark:text-slate-400">Lead Architect:</span>
                                        <span
                                            className="font-medium text-slate-800 dark:text-white">{project.architect}</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-brand-primary rounded-xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-3">
                                    Start Your Project
                                </h3>
                                <p className="mb-4 opacity-90">
                                    Looking to start a similar project? Let&apos;s discuss your vision.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white brand-text-primary text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Get In Touch
                                </Link>
                            </div>

                            {/* Image Thumbnails */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                                    Project Gallery
                                </h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {project.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`relative overflow-hidden rounded-lg ${
                                                currentImageIndex === index ? 'ring-2 ring-red-600' : ''
                                            }`}
                                        >
                                            <Image
                                                src={image}
                                                width={200}   // or whatever thumbnail width you want
                                                height={80}
                                                alt={`${project.title} ${index + 1}`}
                                                className="w-full h-20 object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Project Files */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                                    Project Files
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {project.downloads.map((download, index) => (
                                        <button
                                            key={index}
                                            className="bg-white flex items-center justify-between p-4 rounded-xl
                                            shadow-lg border border-orange-600 hover:bg-orange-100 transition-colors w-full"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <Download className="w-6 h-6 text-brand-primary"/>
                                                <span
                                                    className="text-sm font-medium text-gray-800">{download.name}</span>
                                            </div>
                                            <span className="text-xs text-gray-500">{download.size}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}