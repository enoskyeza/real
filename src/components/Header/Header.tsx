'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Home', path: '/', type: 'single' },
    {
      label: 'About',
      type: 'dropdown',
      items: [
        { label: 'About Us', path: '/about' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Services', path: '/services' },
      ],
    },
    {
      label: 'Projects',
      type: 'dropdown',
      items: [
        { label: 'Projects', path: '/projects' },
        { label: 'Prototypes', path: '/prototypes' },
      ],
    },
    { label: 'Careers', path: '/careers', type: 'single' },
    { label: 'Blog', path: '/blog', type: 'single' },
    // { label: 'Contact', path: '/contact', type: 'single' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-brand-primary'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className=" flex items-center justify-center">
              <Image
                  src={`${isScrolled ? '/images/logo/nav-logo-01.svg' : '/images/logo/nav-logo-02.svg'}`}
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-32"
                />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                {item.type === 'single' ? (
                  <Link
                    href={item.path!}
                    className={`nav-link hover:text-orange-400 ${
                      isActive(item.path!) ? 
                          (isScrolled ? 'brand-text-primary' : 'brand-text-peach')
                          : (isScrolled ?  'text-gray-700 hover:brand-text-primary' : 'text-white hover:brand-text-primary')
                    }`}
                    onClick={closeDropdowns}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`nav-link flex items-center hover:text-orange-400 ${
                        item.items?.some(subItem => isActive(subItem.path))
                          ? (isScrolled ? 'brand-text-primary' : 'brand-text-peach')
                          : (isScrolled ?  'text-gray-700 hover:brand-text-primary' : 'text-white hover:brand-text-primary')
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(subItem.path)
                                ? 'text-brand-primary bg-brand-lighter'
                                : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50'
                            }`}
                            onClick={closeDropdowns}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <Link href="/contact" className={`${isScrolled? "btn-primary" : "btn-secondary"}`}>
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 brand-text-primary" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.type === 'single' ? (
                    <Link
                      href={item.path!}
                      className="nav-link text-gray-700 hover:text-brand-primary block py-2"
                      onClick={closeDropdowns}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(`mobile-${item.label}`)}
                        className="nav-link flex items-center justify-between w-full text-gray-700 hover:text-brand-primary py-2"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === `mobile-${item.label}` ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === `mobile-${item.label}` && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.path}
                              className={`block py-2 text-sm transition-colors ${
                                isActive(subItem.path)
                                  ? 'text-brand-primary'
                                  : 'text-gray-600 hover:text-brand-primary'
                              }`}
                              onClick={closeDropdowns}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/contact" className="btn-primary w-full text-center" onClick={closeDropdowns}>
                Get Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
