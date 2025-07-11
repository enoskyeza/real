'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star, Download, Code, Zap, Shield, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const products = [
  {
    id: 1,
    name: 'React Component Library',
    description: 'A comprehensive collection of 50+ reusable React components built with TypeScript and Tailwind CSS.',
    longDescription: 'This premium component library includes everything you need to build modern web applications quickly. Features responsive design, accessibility compliance, and comprehensive documentation.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 99,
    originalPrice: 149,
    rating: 4.9,
    reviews: 127,
    category: 'Components',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Components'],
    features: [
      '50+ Premium Components',
      'TypeScript Support',
      'Responsive Design',
      'Dark Mode Support',
      'Accessibility Compliant',
      'Comprehensive Documentation',
      'Figma Design Files',
      'Lifetime Updates'
    ],
    specifications: {
      'Framework': 'React 18+',
      'Language': 'TypeScript',
      'Styling': 'Tailwind CSS',
      'Bundle Size': '< 50KB gzipped',
      'Browser Support': 'Modern browsers',
      'License': 'Commercial'
    },
    demoUrl: 'https://demo-components.com',
    downloadUrl: '/downloads/react-components.zip',
    featured: true
  },
  {
    id: 2,
    name: 'Next.js SaaS Starter',
    description: 'Complete SaaS application template with authentication, payments, and dashboard built with Next.js 14.',
    longDescription: 'Launch your SaaS product faster with this comprehensive starter template. Includes user authentication, subscription management, payment processing, and a beautiful admin dashboard.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 199,
    originalPrice: 299,
    rating: 4.8,
    reviews: 89,
    category: 'Templates',
    tags: ['Next.js', 'SaaS', 'Stripe', 'Authentication'],
    features: [
      'Next.js 14 App Router',
      'User Authentication',
      'Stripe Integration',
      'Subscription Management',
      'Admin Dashboard',
      'Email Templates',
      'Database Schema',
      '6 Months Support'
    ],
    specifications: {
      'Framework': 'Next.js 14',
      'Database': 'PostgreSQL',
      'Authentication': 'NextAuth.js',
      'Payments': 'Stripe',
      'Deployment': 'Vercel Ready',
      'License': 'Commercial'
    },
    demoUrl: 'https://demo-saas.com',
    downloadUrl: '/downloads/nextjs-saas.zip',
    featured: true
  },
  {
    id: 3,
    name: 'Mobile App UI Kit',
    description: 'Beautiful mobile app UI kit with 100+ screens designed for React Native and Flutter applications.',
    longDescription: 'Professional mobile app designs covering all common use cases. Perfect for e-commerce, social media, fitness, and business applications.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 79,
    originalPrice: 119,
    rating: 4.7,
    reviews: 156,
    category: 'UI Kits',
    tags: ['Mobile', 'UI Kit', 'React Native', 'Flutter'],
    features: [
      '100+ Mobile Screens',
      'React Native Components',
      'Flutter Widgets',
      'Design System',
      'Icon Library',
      'Color Schemes',
      'Typography Guide',
      'Sketch & Figma Files'
    ],
    specifications: {
      'Screens': '100+ Unique Designs',
      'Platforms': 'iOS & Android',
      'Frameworks': 'React Native, Flutter',
      'Design Tools': 'Figma, Sketch',
      'Resolution': 'Multiple Sizes',
      'License': 'Commercial'
    },
    demoUrl: 'https://demo-mobile.com',
    downloadUrl: '/downloads/mobile-ui-kit.zip',
    featured: false
  },
  {
    id: 4,
    name: 'API Development Toolkit',
    description: 'Complete toolkit for building RESTful APIs with Node.js, including authentication, validation, and documentation.',
    longDescription: 'Everything you need to build production-ready APIs. Includes boilerplate code, middleware, testing utilities, and comprehensive documentation.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 129,
    originalPrice: 179,
    rating: 4.9,
    reviews: 73,
    category: 'Tools',
    tags: ['Node.js', 'API', 'Express', 'MongoDB'],
    features: [
      'Express.js Boilerplate',
      'JWT Authentication',
      'Input Validation',
      'Error Handling',
      'API Documentation',
      'Testing Suite',
      'Docker Configuration',
      'Deployment Scripts'
    ],
    specifications: {
      'Runtime': 'Node.js 18+',
      'Framework': 'Express.js',
      'Database': 'MongoDB, PostgreSQL',
      'Authentication': 'JWT',
      'Documentation': 'Swagger/OpenAPI',
      'License': 'Commercial'
    },
    demoUrl: 'https://demo-api.com',
    downloadUrl: '/downloads/api-toolkit.zip',
    featured: false
  },
  {
    id: 5,
    name: 'E-commerce Dashboard',
    description: 'Modern admin dashboard template for e-commerce platforms with analytics, inventory management, and order tracking.',
    longDescription: 'Comprehensive dashboard solution for e-commerce businesses. Features real-time analytics, inventory management, order processing, and customer management.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 159,
    originalPrice: 229,
    rating: 4.8,
    reviews: 94,
    category: 'Dashboards',
    tags: ['Dashboard', 'E-commerce', 'Analytics', 'Admin'],
    features: [
      'Sales Analytics',
      'Inventory Management',
      'Order Processing',
      'Customer Management',
      'Product Catalog',
      'Payment Tracking',
      'Report Generation',
      'Mobile Responsive'
    ],
    specifications: {
      'Framework': 'React/Vue.js',
      'Charts': 'Chart.js, D3.js',
      'Styling': 'Tailwind CSS',
      'Data': 'REST API Ready',
      'Export': 'PDF, Excel',
      'License': 'Commercial'
    },
    demoUrl: 'https://demo-dashboard.com',
    downloadUrl: '/downloads/ecommerce-dashboard.zip',
    featured: true
  },
  {
    id: 6,
    name: 'DevOps Automation Scripts',
    description: 'Collection of automation scripts for deployment, monitoring, and maintenance of web applications.',
    longDescription: 'Streamline your DevOps workflow with these battle-tested automation scripts. Includes CI/CD pipelines, monitoring setups, and maintenance utilities.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 89,
    originalPrice: 129,
    rating: 4.6,
    reviews: 67,
    category: 'Scripts',
    tags: ['DevOps', 'Automation', 'CI/CD', 'Monitoring'],
    features: [
      'CI/CD Pipelines',
      'Docker Configurations',
      'Monitoring Scripts',
      'Backup Automation',
      'Security Scans',
      'Performance Tests',
      'Log Management',
      'Documentation'
    ],
    specifications: {
      'Platforms': 'Linux, macOS',
      'Languages': 'Bash, Python',
      'CI/CD': 'GitHub Actions, GitLab',
      'Containers': 'Docker, Kubernetes',
      'Cloud': 'AWS, GCP, Azure',
      'License': 'Commercial'
    },
    demoUrl: 'https://demo-devops.com',
    downloadUrl: '/downloads/devops-scripts.zip',
    featured: false
  }
]

const categories = ['All', 'Components', 'Templates', 'UI Kits', 'Tools', 'Dashboards', 'Scripts']
const featuredProducts = products.filter(product => product.featured)

export default function Store() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Prototype <span className="gradient-text">Store</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Premium digital products, templates, and tools to accelerate your development workflow
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="#featured">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#support">
                  Customer Support
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Instant Download</h3>
              <p className="mt-2 text-gray-600">Get immediate access to your purchases with secure download links</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Secure Payment</h3>
              <p className="mt-2 text-gray-600">Safe and secure payment processing with industry-standard encryption</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Premium Support</h3>
              <p className="mt-2 text-gray-600">Get help from our expert team with dedicated customer support</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured products */}
      <div id="featured" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hand-picked premium products to boost your development productivity
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4">
                      Featured
                    </Badge>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{product.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full" size="lg">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <Link href={product.demoUrl} target="_blank">
                            Live Demo
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <Link href={`/store/${product.id}`}>
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* All products */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Products
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Complete collection of premium development tools and resources
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {product.category}
                    </Badge>
                    {product.originalPrice > product.price && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription>
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <Link href={product.demoUrl} target="_blank">
                            Demo
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <Link href={`/store/${product.id}`}>
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Support section */}
      <div id="support" className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need Help?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Our dedicated support team is here to help you get the most out of your purchases.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact Support
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/docs">
                  View Documentation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}