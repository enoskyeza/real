'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Search, Calendar, Clock, User, ArrowRight, Tag, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const categories = [
  'All',
  'Web Development',
  'React',
  'Node.js',
  'TypeScript',
  'Career',
  'Tutorials',
  'Industry Insights'
]

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large React applications using TypeScript, best practices for component architecture, and advanced patterns for maintainable code.',
    content: 'In this comprehensive guide, we\'ll explore the essential patterns and practices for building scalable React applications...',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    author: 'Your Name',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    tags: ['React', 'TypeScript', 'Architecture', 'Best Practices'],
    featured: true
  },
  {
    id: 2,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the emerging technologies and trends that are shaping the future of web development, from AI integration to new frameworks.',
    content: 'As we move through 2024, the web development landscape continues to evolve at a rapid pace...',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    author: 'Your Name',
    publishedAt: '2024-01-10',
    readTime: '6 min read',
    category: 'Industry Insights',
    tags: ['Trends', 'Future', 'AI', 'Web Development'],
    featured: true
  },
  {
    id: 3,
    title: 'Mastering Node.js Performance Optimization',
    excerpt: 'Deep dive into Node.js performance optimization techniques, from memory management to database query optimization.',
    content: 'Performance is crucial for any Node.js application. In this article, we\'ll cover advanced techniques...',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    author: 'Your Name',
    publishedAt: '2024-01-05',
    readTime: '10 min read',
    category: 'Node.js',
    tags: ['Node.js', 'Performance', 'Optimization', 'Backend'],
    featured: false
  },
  {
    id: 4,
    title: 'From Junior to Senior: My 5-Year Development Journey',
    excerpt: 'Reflecting on my career progression, key learnings, challenges faced, and advice for aspiring developers.',
    content: 'Five years ago, I started my journey as a junior developer. Here\'s what I\'ve learned along the way...',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    author: 'Your Name',
    publishedAt: '2023-12-28',
    readTime: '7 min read',
    category: 'Career',
    tags: ['Career', 'Growth', 'Experience', 'Advice'],
    featured: false
  },
  {
    id: 5,
    title: 'Complete Guide to Modern CSS Grid and Flexbox',
    excerpt: 'Master CSS Grid and Flexbox with practical examples, common patterns, and real-world use cases for modern web layouts.',
    content: 'CSS Grid and Flexbox are powerful layout systems that have revolutionized how we build web interfaces...',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    author: 'Your Name',
    publishedAt: '2023-12-20',
    readTime: '12 min read',
    category: 'Web Development',
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
    featured: false
  },
  {
    id: 6,
    title: 'Building RESTful APIs with Express.js and TypeScript',
    excerpt: 'Step-by-step tutorial on creating robust, type-safe REST APIs using Express.js and TypeScript with proper error handling.',
    content: 'Building APIs with TypeScript provides excellent developer experience and type safety...',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    author: 'Your Name',
    publishedAt: '2023-12-15',
    readTime: '9 min read',
    category: 'Tutorials',
    tags: ['Express.js', 'TypeScript', 'API', 'Backend'],
    featured: false
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

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
              My Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sharing insights, tutorials, and experiences from my journey in web development. 
              From technical deep-dives to career advice and industry trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col space-y-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
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
                Featured Articles
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                My most popular and impactful articles.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative h-48 rounded-t-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">Featured</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:text-indigo-600">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
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
              Latest Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Recent posts covering various topics in web development and technology.
            </p>
          </motion.div>
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative h-40 rounded-t-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:text-indigo-600 text-xs">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <Mail className="mx-auto h-12 w-12 text-indigo-200 mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Subscribe to my newsletter to get the latest articles, tutorials, and insights 
              delivered directly to your inbox.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-sm text-indigo-200">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}