'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Coffee, Code, Music, Camera, Plane } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const values = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'I believe great work comes from genuine passion and dedication to craft.'
  },
  {
    icon: Code,
    title: 'Quality First',
    description: 'Every line of code and design decision is made with quality and user experience in mind.'
  },
  {
    icon: Coffee,
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and I stay current with the latest trends and best practices.'
  },
]

const interests = [
  { icon: Music, label: 'Music Production' },
  { icon: Camera, label: 'Photography' },
  { icon: Plane, label: 'Travel' },
  { icon: Code, label: 'Open Source' },
]

const timeline = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    description: 'Leading development teams and architecting scalable solutions.'
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    description: 'Expanded expertise in modern frameworks and cloud technologies.'
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    description: 'Started professional journey focusing on user interface development.'
  },
  {
    year: '2019',
    title: 'Computer Science Graduate',
    description: 'Graduated with honors, specializing in software engineering.'
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Me
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. My journey in technology started with 
                curiosity and has evolved into a career dedicated to building exceptional user experiences.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or capturing moments through photography. I believe in the power of technology 
                to solve real-world problems and create meaningful connections.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-2xl transform rotate-6"></div>
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                  alt="Professional headshot"
                  width={400}
                  height={500}
                  className="relative rounded-2xl object-cover shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide my work and interactions.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full text-center">
                      <CardHeader>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Key milestones in my professional development.
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
                  className="relative flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-indigo-600 font-medium">{item.year}</p>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Beyond Code
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              My interests and hobbies that inspire creativity and balance.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon
                return (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                      <Icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-gray-900">{interest.label}</h3>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}