'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Modern Villa",
    type: "Residential",
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Corporate Center",
    type: "Commercial",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Healthcare Complex",
    type: "Institutional",
    // image: "https://images.pexels.com/photos/236947/pexels-photo-236947.jpeg?auto=compress&cs=tinysrgb&w=800"
    image: "images/projects/sketch1.jpeg"
  },
  {
    id: 4,
    title: "Urban Park Design",
    type: "Landscape",
    // image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
    image: "images/projects/sketch2.jpeg"
  }
];

const SketchGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            From Sketch to <span className="brand-text-primary">Reality</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our architectural visions transform from concepts to stunning built environments
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Gallery Display */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={galleryItems[currentIndex].image}
              alt={galleryItems[currentIndex].title}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Overlay with project info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 text-white">
                <span className="text-blue-400 text-sm font-medium bg-blue-600/20 px-3 py-1 rounded-full">
                  {galleryItems[currentIndex].type}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="text-white/80 mt-1">Concept → Built Reality</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-4">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex ? 'ring-2 ring-blue-600 scale-110' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SketchGallery;