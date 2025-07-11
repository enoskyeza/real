'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Calendar, Users, TrendingUp, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.',
    longDescription: 'Built a comprehensive e-commerce solution from the ground up, featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and an admin dashboard with real-time analytics.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Docker'],
    role: 'Full-Stack Developer & Team Lead',
    duration: '6 months',
    teamSize: '4 developers',
    impact: [
      'Increased client sales by 150% within first quarter',
      'Reduced cart abandonment rate by 35%',
      'Achieved 99.9% uptime with scalable architecture',
      'Processed over $500K in transactions'
    ],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management SaaS',
    description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.',
    longDescription: 'Developed a comprehensive task management application with features like drag-and-drop kanban boards, real-time collaboration, time tracking, file attachments, and detailed project analytics.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redis', 'Heroku'],
    role: 'Frontend Lead',
    duration: '4 months',
    teamSize: '3 developers',
    impact: [
      'Improved team productivity by 40%',
      'Reduced project delivery time by 25%',
      'Achieved 95% user satisfaction rating',
      'Onboarded 200+ active users in beta'
    ],
    liveUrl: 'https://example-taskmanager.com',
    githubUrl: 'https://github.com/username/task-manager',
    featured: true
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'An intelligent analytics platform that uses machine learning to provide actionable business insights and predictions.',
    longDescription: 'Created an advanced analytics dashboard that integrates multiple data sources, applies machine learning algorithms for predictive analytics, and presents insights through interactive visualizations.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI', 'PostgreSQL'],
    role: 'Full-Stack Developer',
    duration: '8 months',
    teamSize: '5 developers',
    impact: [
      'Increased data-driven decisions by 60%',
      'Reduced manual reporting time by 80%',
      'Improved forecast accuracy by 45%',
      'Saved 20 hours/week of manual analysis'
    ],
    liveUrl: 'https://example-analytics.com',
    githubUrl: 'https://github.com/username/ai-analytics',
    featured: true
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    description: 'A modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
    longDescription: 'Built a comprehensive real estate platform featuring property search with advanced filters, virtual tour integration, mortgage calculations, agent profiles, and a CRM system for property management.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Mapbox', 'Tailwind CSS'],
    role: 'Solo Developer',
    duration: '5 months',
    teamSize: '1 developer',
    impact: [
      'Generated 300+ qualified leads monthly',
      'Reduced property search time by 50%',
      'Increased agent efficiency by 35%',
      'Achieved 4.8/5 user rating'
    ],
    liveUrl: 'https://example-realestate.com',
    githubUrl: 'https://github.com/username/real-estate-platform',
    featured: false
  },
  {
    id: 5,
    title: 'Social Media Scheduler',
    description: 'A comprehensive social media management tool with content scheduling, analytics, and multi-platform posting capabilities.',
    longDescription: 'Developed a social media management platform that allows users to schedule posts across multiple platforms, analyze engagement metrics, and manage content calendars with team collaboration features.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MySQL', 'Twitter API', 'Facebook API', 'AWS Lambda'],
    role: 'Backend Developer',
    duration: '3 months',
    teamSize: '2 developers',
    impact: [
      'Automated 1000+ social media posts',
      'Increased engagement rates by 30%',
      'Saved 15 hours/week of manual posting',
      'Managed 50+ client accounts'
    ],
    liveUrl: 'https://example-scheduler.com',
    githubUrl: 'https://github.com/username/social-scheduler',
    featured: false
  }
]

const stats = [
  { label: 'Projects Completed', value: '50+', icon: TrendingUp },
  { label: 'Technologies Used', value: '20+', icon: Zap },
  { label: 'Team Members Led', value: '15+', icon: Users },
  { label: 'Years Experience', value: '5+', icon: Calendar },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

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
              My Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A showcase of applications I've built, from concept to deployment. 
              Each project represents a unique challenge and innovative solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 mb-4"
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-2xl font-bold text-indigo-600 sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-gray-500">{stat.label}</div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Highlighting my most impactful and technically challenging projects.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-none">
            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">Featured</Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={project.liveUrl} target="_blank">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={project.githubUrl} target="_blank">
                                <Github className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{project.longDescription}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">My Role & Duration:</h4>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <span>👤 {project.role}</span>
                              <span>⏱️ {project.duration}</span>
                              <span>👥 {project.teamSize}</span>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Impact & Results:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                              {project.impact.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative h-64 lg:h-full min-h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
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
              More Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Additional projects showcasing diverse skills and technologies.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="relative h-48 rounded-t-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.liveUrl} target="_blank">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.githubUrl} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span>👤 {project.role}</span>
                          <span>⏱️ {project.duration}</span>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {project.impact.slice(0, 2).map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                            ))}
                            {project.technologies.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Interested in working together?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              I'm always excited to take on new challenges and create innovative solutions. 
              Let's discuss your next project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600" asChild>
                <Link href="/career">View Resume</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}