'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ShoppingCart, Star, Download, Eye, Code, Zap, Shield, HeadphonesIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const products = [
  {
    id: 1,
    name: 'React Component Library',
    description: 'A comprehensive collection of 50+ reusable React components with TypeScript support.',
    longDescription: 'This premium component library includes everything you need to build modern web applications. Features include form components, data visualization, navigation elements, and more. All components are fully customizable, accessible, and come with comprehensive documentation.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: 99,
    originalPrice: 149,
    rating: 4.9,
    reviews: 127,
    category: 'Components',
    features: [
      '50+ Premium Components',
      'TypeScript Support',
      'Tailwind CSS Styling',
      'Storybook Documentation',
      'Dark Mode Support',
      'Accessibility Compliant'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    downloads: 1250,
    featured: true
  },
  {
    id: 2,
    name: 'Full-Stack SaaS Boilerplate',
    description: 'Complete SaaS application template with authentication, payments, and admin dashboard.',
    longDescription: 'Launch your SaaS product faster with this comprehensive boilerplate. Includes user authentication, subscription management, payment processing with Stripe, admin dashboard, and more. Built with modern technologies and best practices.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: 199,
    originalPrice: 299,
    rating: 4.8,
    reviews: 89,
    category: 'Templates',
    features: [
      'Complete Authentication System',
      'Stripe Payment Integration',
      'Admin Dashboard',
      'User Management',
      'Email Templates',
      'Database Schema'
    ],
    technologies: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS'],
    downloads: 856,
    featured: true
  },
  {
    id: 3,
    name: 'E-commerce Template',
    description: 'Modern e-commerce website template with shopping cart and payment integration.',
    longDescription: 'A beautiful, responsive e-commerce template perfect for online stores. Features include product catalog, shopping cart, checkout process, order management, and payment integration. Fully customizable and SEO optimized.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: 79,
    originalPrice: 119,
    rating: 4.7,
    reviews: 203,
    category: 'Templates',
    features: [
      'Product Catalog',
      'Shopping Cart',
      'Payment Integration',
      'Order Management',
      'Responsive Design',
      'SEO Optimized'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    downloads: 2100,
    featured: false
  },
  {
    id: 4,
    name: 'API Development Kit',
    description: 'Complete toolkit for building RESTful APIs with Node.js and Express.',
    longDescription: 'Everything you need to build robust APIs quickly. Includes authentication middleware, database integration, error handling, API documentation, testing setup, and deployment configurations.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: 59,
    originalPrice: 89,
    rating: 4.6,
    reviews: 156,
    category: 'Tools',
    features: [
      'Express.js Boilerplate',
      'Authentication Middleware',
      'Database Integration',
      'API Documentation',
      'Testing Setup',
      'Docker Configuration'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    downloads: 1680,
    featured: false
  },
  {
    id: 5,
    name: 'Dashboard UI Kit',
    description: 'Professional dashboard components and layouts for admin panels and analytics.',
    longDescription: 'Create stunning admin dashboards with this comprehensive UI kit. Includes charts, tables, forms, navigation components, and pre-built layouts. Perfect for analytics dashboards, admin panels, and data visualization.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: 89,
    originalPrice: 129,
    rating: 4.8,
    reviews: 94,
    category: 'Components',
    features: [
      'Chart Components',
      'Data Tables',
      'Form Elements',
      'Navigation Components',
      'Pre-built Layouts',
      'Responsive Design'
    ],
    technologies: ['React', 'Chart.js', 'Tailwind CSS'],
    downloads: 743,
    featured: false
  },
  {
    id: 6,
    name: 'Mobile App Template',
    description: 'Cross-platform mobile app template built with React Native.',
    longDescription: 'Build mobile apps faster with this React Native template. Includes navigation, authentication, push notifications, offline support, and more. Compatible with both iOS and Android platforms.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: 129,
    originalPrice: 179,
    rating: 4.5,
    reviews: 67,
    category: 'Templates',
    features: [
      'Cross-platform Support',
      'Navigation System',
      'Authentication',
      'Push Notifications',
      'Offline Support',
      'Native Modules'
    ],
    technologies: ['React Native', 'Expo', 'Firebase'],
    downloads: 432,
    featured: false
  }
]

const categories = ['All', 'Components', 'Templates', 'Tools']

const features = [
  {
    icon: Code,
    title: 'Production Ready',
    description: 'All products are thoroughly tested and production-ready.'
  },
  {
    icon: Zap,
    title: 'Fast Setup',
    description: 'Get started in minutes with comprehensive documentation.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security best practices and reliable architecture.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Premium Support',
    description: '6 months of premium support included with every purchase.'
  }
]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState<number[]>([])

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  )

  const featuredProducts = filteredProducts.filter(product => product.featured)
  const regularProducts = filteredProducts.filter(product => !product.featured)

  const addToCart = (productId: number) => {
    setCart(prev => [...prev, productId])
  }

  const isInCart = (productId: number) => cart.includes(productId)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Digital Store
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Premium digital products to accelerate your development workflow. 
              From component libraries to complete application templates.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">
                Browse Products
              </Button>
              <Button variant="outline" size="lg">
                View Cart ({cart.length})
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our most popular and highly-rated digital products.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="relative h-48 rounded-t-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">Featured</Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{product.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-sm text-gray-500">({product.reviews})</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{product.longDescription}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {product.features.slice(0, 3).map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                          <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Download className="h-4 w-4" />
                          <span>{product.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1"
                          onClick={() => addToCart(product.id)}
                          disabled={isInCart(product.id)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                        </Button>
                        <Button variant="outline" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Products */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our complete collection of digital products.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-40 rounded-t-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {product.originalPrice > product.price && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">{product.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="text-sm">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {product.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-indigo-600">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Download className="h-3 w-3" />
                        <span>{product.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => addToCart(product.id)}
                        disabled={isInCart(product.id)}
                      >
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        {isInCart(product.id) ? 'Added' : 'Add to Cart'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <HeadphonesIcon className="mx-auto h-12 w-12 text-indigo-200 mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Premium Support Included
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Every purchase includes 6 months of premium support. Get help with setup, 
              customization, and any questions you might have.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}