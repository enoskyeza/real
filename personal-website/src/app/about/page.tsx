'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, Heart, Coffee, Code, Music, Camera, Plane } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const values = [
  {
    name: 'Innovation',
    description: 'Constantly exploring new technologies and pushing the boundaries of what\'s possible.',
    icon: Code,
  },
  {
    name: 'Quality',
    description: 'Committed to delivering exceptional work that exceeds expectations and stands the test of time.',
    icon: Heart,
  },
  {
    name: 'Collaboration',
    description: 'Believing that the best solutions come from diverse perspectives and open communication.',
    icon: Coffee,
  },
]

const interests = [
  { name: 'Photography', icon: Camera },
  { name: 'Music Production', icon: Music },
  { name: 'Travel', icon: Plane },
  { name: 'Open Source', icon: Code },
]

const timeline = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Corp',
    description: 'Leading development of next-generation web applications using cutting-edge technologies.',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd',
    description: 'Developed and maintained multiple client projects, focusing on performance and user experience.',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'Creative Agency',
    description: 'Specialized in creating responsive, interactive web experiences for diverse clients.',
  },
  {
    year: '2019',
    title: 'Computer Science Graduate',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in software engineering and web technologies.',
  },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-blue-600">About Me</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Passionate Developer & Digital Creator
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  I'm a full-stack developer with over 5 years of experience creating innovative digital solutions 
                  that make a real impact.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
              <Image
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] relative"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional headshot"
                width={800}
                height={600}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  My journey in technology began during my university years, where I discovered my passion for 
                  creating digital experiences that solve real-world problems. Since then, I've had the privilege 
                  of working with diverse teams and clients, from startups to enterprise companies.
                </p>
                <p className="mt-6">
                  I specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms. 
                  My approach combines technical expertise with a deep understanding of user experience and business needs.
                </p>
                <p className="mt-6">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge through writing and mentoring. I believe in the power of community and 
                  continuous learning.
                </p>
                
                <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Available for projects</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">Let's Work Together</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values section */}
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
              My Core Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The principles that guide my work and relationships
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <Icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {value.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{value.description}</p>
                    </dd>
                  </motion.div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Key milestones in my professional development
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-x-4"
                >
                  <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 ring-1 ring-blue-600" />
                  </div>
                  <div className="flex-auto">
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-semibold leading-6 text-blue-600">{item.year}</p>
                      <Badge variant="outline">{item.company}</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interests section */}
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
              Beyond Code
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              What I'm passionate about outside of development
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 lg:max-w-none lg:grid-cols-4">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{interest.name}</h3>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}