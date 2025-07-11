'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Calendar, Users, Code, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe integration. Features include product management, shopping cart, payment processing, and order tracking.',
    longDescription: 'This comprehensive e-commerce solution was built for a mid-sized retail company looking to expand their online presence. The platform handles thousands of products across multiple categories and processes hundreds of orders daily.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Full Stack',
    role: 'Lead Developer',
    team: '4 developers',
    duration: '6 months',
    status: 'Live',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/example/ecommerce',
    outcomes: [
      'Increased online sales by 150%',
      'Reduced cart abandonment by 30%',
      'Improved page load speed by 40%',
      'Achieved 99.9% uptime'
    ],
    challenges: [
      'Implementing real-time inventory management',
      'Optimizing for mobile performance',
      'Integrating multiple payment gateways'
    ]
  },
  {
    id: 2,
    title: 'Task Management SaaS',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project analytics.',
    longDescription: 'Designed and developed a comprehensive project management tool that helps teams organize, track, and complete their work more efficiently. The application supports multiple project views, time tracking, and detailed reporting.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
    category: 'SaaS',
    role: 'Full Stack Developer',
    team: '3 developers',
    duration: '4 months',
    status: 'Live',
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/example/task-manager',
    outcomes: [
      'Improved team productivity by 25%',
      'Reduced project completion time by 20%',
      'Achieved 95% user satisfaction rate',
      'Scaled to 1000+ active users'
    ],
    challenges: [
      'Implementing real-time collaboration',
      'Designing intuitive user interface',
      'Optimizing database queries for performance'
    ]
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'An intelligent analytics dashboard that uses machine learning to provide insights and predictions for business data.',
    longDescription: 'Built an advanced analytics platform that processes large datasets and provides actionable insights through machine learning algorithms. The dashboard features predictive analytics, automated reporting, and customizable visualizations.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Django', 'React', 'D3.js', 'TensorFlow', 'PostgreSQL'],
    category: 'AI/ML',
    role: 'Technical Lead',
    team: '5 developers',
    duration: '8 months',
    status: 'Live',
    liveUrl: 'https://example-analytics.com',
    githubUrl: 'https://github.com/example/analytics',
    outcomes: [
      'Reduced data analysis time by 60%',
      'Improved prediction accuracy by 35%',
      'Automated 80% of reporting tasks',
      'Saved 20 hours per week for analysts'
    ],
    challenges: [
      'Processing large datasets efficiently',
      'Creating intuitive data visualizations',
      'Implementing machine learning models'
    ]
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'A React Native fitness application with workout tracking, nutrition logging, and social features for fitness enthusiasts.',
    longDescription: 'Developed a comprehensive fitness application that helps users track their workouts, monitor nutrition, and connect with other fitness enthusiasts. The app includes personalized workout plans, progress tracking, and social sharing features.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    category: 'Mobile',
    role: 'Mobile Developer',
    team: '3 developers',
    duration: '5 months',
    status: 'Live',
    liveUrl: 'https://example-fitness.com',
    githubUrl: 'https://github.com/example/fitness-app',
    outcomes: [
      'Downloaded by 10,000+ users',
      'Achieved 4.5-star rating on app stores',
      'Increased user engagement by 40%',
      'Featured in fitness app collections'
    ],
    challenges: [
      'Optimizing for different device sizes',
      'Implementing offline functionality',
      'Integrating with health APIs'
    ]
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate platform with property listings, virtual tours, and mortgage calculator features.',
    longDescription: 'Created a modern real estate platform that connects buyers, sellers, and agents. The platform features advanced search capabilities, virtual property tours, mortgage calculations, and integrated communication tools.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3', 'Stripe', 'Google Maps API'],
    category: 'Web Platform',
    role: 'Senior Developer',
    team: '6 developers',
    duration: '7 months',
    status: 'Live',
    liveUrl: 'https://example-realestate.com',
    githubUrl: 'https://github.com/example/realestate',
    outcomes: [
      'Listed 5,000+ properties',
      'Facilitated $50M+ in transactions',
      'Reduced property search time by 50%',
      'Achieved 90% user retention rate'
    ],
    challenges: [
      'Handling large amounts of property data',
      'Implementing virtual tour functionality',
      'Integrating multiple third-party services'
    ]
  }
]

const categories = ['All', 'Full Stack', 'SaaS', 'AI/ML', 'Mobile', 'Web Platform']

export default function Projects() {
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
              Project <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Explore my collection of innovative projects showcasing modern technologies and creative solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">20+</div>
              <div className="text-sm text-gray-600">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">30+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="relative rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                  </div>
                </div>
                
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {project.longDescription}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{project.team}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {project.outcomes.slice(0, 3).map((outcome, i) => (
                          <li key={i}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Button asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Start a Project
                  <Code className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/career">
                  View My Experience
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}