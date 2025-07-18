import React from 'react';
import Link from 'next/link';
import { Download, Package, ArrowRight, Star, ShoppingCart } from 'lucide-react';

const featuredPrototypes = [
  {
    id: 1,
    title: "Modern Urban Pavilion",
    price: 3205999,
    originalPrice: 4500000,
    rating: 4.8,
    downloads: 847,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Sustainable Housing Unit",
    price: 4200000,
    rating: 4.9,
    downloads: 623,
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Community Center Design",
    price: 3005990,
    originalPrice: 4000000,
    rating: 4.7,
    downloads: 412,
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const formatMoney = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0
  }).format(amount);
};

const PrototypesCTA = () => {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="container custom-container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download Architectural <span className="brand-text-peach">Prototypes</span>
            </h2>

            <p className="text-xl brand-text-peach mb-8 max-w-3xl mx-auto leading-relaxed">
              Access our premium collection of 3D models, CAD files, and design templates.
              Perfect for architects, students, and design professionals.
            </p>

          </div>

          {/* Featured Prototypes */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPrototypes.map((prototype) => (
                <div key={prototype.id} className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                  <img
                    src={prototype.image}
                    alt={prototype.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-2 text-white">{prototype.title}</h4>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-brand-lighter">{prototype.rating}</span>
                      </div>
                      <div className="flex items-center text-sm brand-text-peach">
                        <Download className="w-3 h-3 mr-1" />
                        {prototype.downloads}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-white">{formatMoney(prototype.price)}</span>
                        {prototype.originalPrice && (
                          <span className="text-sm text-brand-lighter line-through ml-2">
                            {formatMoney(prototype.originalPrice)}
                          </span>
                        )}
                      </div>
                      <Link
                        href={`/prototypes/${prototype.id}`}
                        className="bg-white brand-text-primary px-3 py-1 rounded-lg text-sm font-medium hover:bg-brand-lighter transition-colors"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services#prototypes"
                    className="bg-white brand-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-orange-100 transition-colors group">
                Browse All Prototypes
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
              </Link>
              <button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-800 transition-colors">
                Request Custom Design
              </button>
            </div>

            <p className="text-brand-lighter text-sm mt-6">
              30-day money-back guarantee • Instant download • Commercial license included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypesCTA;