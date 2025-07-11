'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, Search, Tag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with Next.js 14',
    excerpt: 'Learn how to leverage the latest features in Next.js 14 to build performant and scalable React applications with server components and improved routing.',
    content: 'In this comprehensive guide, we\'ll explore the powerful features of Next.js 14 and how they can help you build better React applications...',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'John Doe',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    tags: ['Next.js', 'React', 'JavaScript', 'Web Development'],
    featured: true
  },
  {
    id: 2,
    title: 'Mastering TypeScript: Advanced Types and Patterns',
    excerpt: 'Dive deep into TypeScript\'s advanced type system and learn powerful patterns that will make your code more robust and maintainable.',
    content: 'TypeScript has become an essential tool for modern JavaScript development. In this article, we\'ll explore advanced TypeScript concepts...',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'John Doe',
    publishDate: '2024-01-10',
    readTime: '12 min read',
    category: 'TypeScript',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Types'],
    featured: false
  },
  {
    id: 3,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the emerging trends and technologies that are shaping the future of web development, from AI integration to edge computing.',
    content: 'The web development landscape is constantly evolving. Let\'s look at the key trends that will define web development in 2024...',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'John Doe',
    publishDate: '2024-01-05',
    readTime: '10 min read',
    category: 'Trends',
    tags: ['Web Development', 'Trends', 'AI', 'Future'],
    featured: true
  },
  {
    id: 4,
    title: 'Optimizing Database Performance in Node.js Applications',
    excerpt: 'Learn essential techniques for optimizing database queries and improving the performance of your Node.js applications.',
    content: 'Database performance is crucial for any web application. In this guide, we\'ll cover various optimization techniques...',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'John Doe',
    publishDate: '2023-12-28',
    readTime: '15 min read',
    category: 'Backend',
    tags: ['Node.js', 'Database', 'Performance', 'Optimization'],
    featured: false
  },
  {
    id: 5,
    title: 'Creating Responsive Designs with Tailwind CSS',
    excerpt: 'Master the art of responsive web design using Tailwind CSS utility classes and modern CSS techniques.',
    content: 'Responsive design is more important than ever. Let\'s explore how Tailwind CSS makes it easier to create beautiful, responsive layouts...',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'John Doe',
    publishDate: '2023-12-20',
    readTime: '7 min read',
    category: 'CSS',
    tags: ['Tailwind CSS', 'CSS', 'Responsive Design', 'Frontend'],
    featured: false
  },
  {
    id: 6,
    title: 'Building RESTful APIs with Express.js and MongoDB',
    excerpt: 'A complete guide to building robust RESTful APIs using Express.js and MongoDB, including authentication and error handling.',
    content: 'APIs are the backbone of modern web applications. In this tutorial, we\'ll build a complete RESTful API from scratch...',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'John Doe',
    publishDate: '2023-12-15',
    readTime: '20 min read',
    category: 'Backend',
    tags: ['Express.js', 'MongoDB', 'API', 'Node.js'],
    featured: false
  }
]

const categories = ['All', 'React', 'TypeScript', 'Backend', 'CSS', 'Trends']

const featuredPosts = blogPosts.filter(post => post.featured)
const recentPosts = blogPosts.slice(0, 3)

export default function Blog() {
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
              Technical <span className="gradient-text">Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on modern web development, emerging technologies, and industry best practices
            </p>
            
            {/* Search bar */}
            <div className="mt-10 flex max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
              <Button className="ml-2">Search</Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured posts */}
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
              Featured Articles
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hand-picked articles covering the latest in web development
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
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
                  <Tag className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* All posts */}
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
              Latest Articles
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay updated with the latest insights and tutorials
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter signup */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Subscribe to my newsletter and get the latest articles delivered directly to your inbox.
            </p>
            <div className="mt-10 flex max-w-md mx-auto gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}