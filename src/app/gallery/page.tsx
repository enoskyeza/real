'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Kampala Modern Residence",
    category: "Residential",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400",
    fullImage: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "A sustainable modern home featuring local materials and contemporary design principles."
  },
  {
    id: 2,
    title: "East African Trade Center",
    category: "Commercial",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
    fullImage: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "A mixed-use development combining office spaces with retail and cultural facilities."
  },
  {
    id: 3,
    title: "University Health Center",
    category: "Healthcare",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/236947/pexels-photo-236947.jpeg?auto=compress&cs=tinysrgb&w=400",
    fullImage: "https://images.pexels.com/photos/236947/pexels-photo-236947.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "A state-of-the-art healthcare facility designed for optimal patient care."
  },
  {
    id: 4,
    title: "Cultural Arts Center",
    category: "Institutional",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400",
    fullImage: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "A vibrant cultural hub celebrating East African arts and heritage."
  },
  {
    id: 5,
    title: "Eco-Village Housing",
    category: "Residential",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
    fullImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Sustainable community housing with renewable energy integration."
  },
  {
    id: 6,
    title: "Urban Park Design",
    category: "Landscape",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    fullImage: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Innovative landscape design integrating nature with urban development."
  },
  {
    id: 7,
    title: "Corporate Headquarters",
    category: "Commercial",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400",
    fullImage: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Modern corporate building with sustainable features and flexible workspaces."
  },
  {
    id: 8,
    title: "Community Library",
    category: "Institutional",
    type: "image",
    thumbnail: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400",
    fullImage: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "A modern library design promoting learning and community engagement."
  }
];

const categories = ["All", "Residential", "Commercial", "Healthcare", "Institutional", "Landscape"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-lighter to-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Project <span className="text-brand-primary">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our portfolio of innovative architectural solutions across East Africa
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary">75+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">8</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">11+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-brand-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-brand-primary hover:text-brand-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openLightbox(index)}
                        className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Play className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <img
              src={filteredItems[lightboxImage].fullImage}
              alt={filteredItems[lightboxImage].title}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">{filteredItems[lightboxImage].title}</h3>
                <p className="text-sm opacity-90">{filteredItems[lightboxImage].description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-brand-light text-sm">{filteredItems[lightboxImage].category}</span>
                  <span className="text-sm opacity-75">{lightboxImage + 1} of {filteredItems.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brand-lighter mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your architectural vision to life with the same quality and innovation shown in our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white brand-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-brand-lighter transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-700 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;