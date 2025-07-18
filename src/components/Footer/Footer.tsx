import React from 'react';
import Link from 'next/link';
import {Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white ">
            <div className="relative ">
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <Image
                        src="/images/footer/bg-01.jpg"
                        alt="Background"
                        fill
                        style={{objectFit: 'cover', objectPosition: 'center', opacity: '30%'}}
                        className="w-full h-full"
                    />
                </div>
                <div className="container custom-container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
                        {/* Company Info */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-50 h-50 flex items-center justify-center">
                                    <Image
                                        src={`/images/logo/nav-logo-02.svg`}
                                        alt="logo"
                                        width={140}
                                        height={30}
                                        className="w-[170px]"
                                    />
                                </div>
                                <span className="text-2xl font-bold hidden">Resident Architects</span>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                                Resident Architects Limited is a consultancy firm registered in Kampala,
                                Uganda specializing in Architecture, Interior design, Landscape design and Project
                                Management.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {/*<li><Link href="/"*/}
                                {/*          className="text-gray-300 hover:text-brand-light transition-colors">Home</Link>*/}
                                {/*</li>*/}
                                <li><Link href="/about"
                                          className="text-gray-300 hover:text-brand-light transition-colors">About</Link>
                                </li>
                                <li><Link href="/projects"
                                          className="text-gray-300 hover:text-brand-light transition-colors">Projects</Link>
                                </li>
                                <li><Link href="/services"
                                          className="text-gray-300 hover:text-brand-light transition-colors">Services</Link>
                                </li>
                                {/*<li><Link href="/prototypes"*/}
                                {/*          className="text-gray-300 hover:text-brand-light transition-colors">Prototypes</Link>*/}
                                {/*</li>*/}
                                <li><Link href="/careers"
                                          className="text-gray-300 hover:text-brand-light transition-colors">Careers</Link>
                                </li>
                                <li><Link href="/blog"
                                          className="text-gray-300 hover:text-brand-light transition-colors">Blog</Link>
                                </li>
                                {/*<li><Link href="/contact"*/}
                                {/*          className="text-gray-300 hover:text-brand-light transition-colors">Contact</Link>*/}
                                {/*</li>*/}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-bold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><span className="text-gray-300">Architecture</span></li>
                                <li><span className="text-gray-300">Interior Design</span></li>
                                <li><span className="text-gray-300">Landscape Design</span></li>
                                <li><span className="text-gray-300">Urban Planning</span></li>
                                <li><span className="text-gray-300">Project Management</span></li>
                            </ul>
                        </div>

                        {/* Contacts */}
                        <div className="lg:col-span-3">
                            <h3 className="text-lg font-bold mb-4">Address</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 text-brand-light mr-3"/>
                                    <div>
                                        <p className="text-gray-300">Plot 2129, Mbogo Road 1</p>
                                        <p className="text-gray-300">Kampala, Uganda</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-brand-light mr-3"/>
                                    <div>
                                        <p className="text-gray-300">+256 393 208 189 </p>
                                        <p className="text-gray-300">+256 783 003 098 </p>
                                        <p className="text-gray-300"> +256 709 688 150 </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-brand-light mr-3"/>
                                    <span className="text-gray-300">info@real.com</span>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* Newsletter */}
                    <div className="bg-gray-800 rounded-2xl p-8 mb-8">
                        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                                <p className="text-gray-300">Get our latest architectural insights and project
                                    updates</p>
                            </div>
                            <div className="flex max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-l-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-brand-light"
                                />
                                <button
                                    className="px-6 py-3 bg-brand-primary text-white rounded-r-xl hover:bg-brand-dark transition-colors font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Copyright */}
                    <div
                        className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <a href="#" className="text-gray-400 hover:text-brand-light transition-colors">
                                <Facebook className="w-6 h-6"/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-light transition-colors">
                                <Twitter className="w-6 h-6"/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-light transition-colors">
                                <Instagram className="w-6 h-6"/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-light transition-colors">
                                <Linkedin className="w-6 h-6"/>
                            </a>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © 2025 Resident Architects Limited. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;