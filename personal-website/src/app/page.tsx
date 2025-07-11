'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Briefcase, BookOpen, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    name: 'Career Journey',
    description: 'Explore my professional experience, skills, and achievements in the tech industry.',
    icon: Briefcase,
    href: '/career',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Project Portfolio',
    description: 'Discover innovative projects showcasing cutting-edge technologies and solutions.',
    icon: Code,
    href: '/projects',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Technical Blog',
    description: 'Read insights, tutorials, and thoughts on modern web development and technology.',
    icon: BookOpen,
    href: '/blog',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Prototype Store',
    description: 'Browse and purchase innovative digital products and development tools.',
    icon: ShoppingBag,
    href: '/store',
    color: 'from-orange-500 to-red-500'
  },
]

const stats = [
  { name: 'Years of Experience', value: '5+' },
  { name: 'Projects Completed', value: '50+' },
  { name: 'Technologies Mastered', value: '20+' },
  { name: 'Happy Clients', value: '30+' },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Full Stack Developer &{' '}
                <span className="gradient-text">Digital Innovator</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Passionate about creating exceptional digital experiences through modern web technologies, 
                innovative solutions, and clean, scalable code. Let's build something amazing together.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link href="https://github.com" className="text-gray-400 hover:text-gray-500 transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:hello@example.com" className="text-gray-400 hover:text-gray-500 transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:max-w-none"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by clients worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Delivering exceptional results through dedication and expertise
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-white p-8"
                >
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Features section */}
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
              Explore My Digital World
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover different aspects of my professional journey, from career milestones to innovative projects
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                      <Link href={feature.href}>
                        <CardHeader>
                          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="group-hover:text-blue-600 transition-colors">
                            {feature.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            {feature.description}
                          </CardDescription>
                        </CardContent>
                      </Link>
                    </Card>
                  </motion.div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
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
              Ready to work together?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss your next project and create something extraordinary together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}