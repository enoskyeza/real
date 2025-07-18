import React from 'react';
import Link from 'next/link';
import {MapPin, Calendar, ArrowRight} from 'lucide-react';
import {projects} from "@/components/data"


const FeaturedProjects = () => {
    return (
        <section className="py-20 bg-orange-50/70">
            <div className="container custom-container mx-auto px-4">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                                Featured <span className="brand-text-primary">Projects</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Explore some of our projects and work.
                            </p>
                        </div>
                        <div className="text-center">
                            <Link href="/projects" className="btn-primary group">
                                View All Projects
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.slice(0, 3).map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4">
                  <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:brand-text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <MapPin className="w-4 h-4 mr-2 brand-text-primary"/>
                                        {project.location}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Calendar className="w-4 h-4 mr-2 brand-text-primary"/>
                                        {project.year}
                                    </div>
                                </div>

                                <Link
                                    href={`/projects/${project.id}`}
                                    className="btn-secondary w-full group-hover:bg-brand-primary group-hover:text-white transition-colors"
                                >
                                    See Full Case Study
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProjects;