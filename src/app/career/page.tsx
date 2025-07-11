'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading a team of 5 developers in building scalable web applications. Architected microservices infrastructure serving 100K+ users.',
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led migration to cloud infrastructure, reducing costs by 30%',
      'Mentored 3 junior developers, with 2 receiving promotions',
      'Implemented CI/CD pipeline, reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to implement pixel-perfect UIs.',
    achievements: [
      'Built 8 production applications from scratch',
      'Improved code coverage from 60% to 95%',
      'Reduced bug reports by 50% through better testing practices',
      'Implemented real-time features using WebSocket technology'
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis', 'Nginx']
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'Remote',
    period: '2019 - 2020',
    description: 'Specialized in creating responsive, accessible web interfaces for various clients across different industries.',
    achievements: [
      'Delivered 15+ client projects on time and within budget',
      'Achieved 98% client satisfaction rating',
      'Improved website performance scores by average of 35%',
      'Established component library used across all projects'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Sass', 'Webpack']
  }
]

const skills = {
  'Frontend': ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Python', 'Django', 'Express.js', 'GraphQL', 'REST APIs'],
  'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'],
  'DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Linux'],
  'Tools': ['Git', 'Figma', 'Postman', 'Jest', 'Cypress', 'Webpack']
}

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    location: 'California, USA',
    period: '2015 - 2019',
    gpa: '3.8/4.0',
    achievements: ['Magna Cum Laude', 'Dean\'s List (6 semesters)', 'Computer Science Society President']
  }
]

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SA-2023-001'
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-PD-2022-001'
  },
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2022',
    credentialId: 'CKA-2022-001'
  }
]

const achievements = [
  {
    title: 'Tech Innovation Award',
    organization: 'TechCorp Solutions',
    year: '2023',
    description: 'Recognized for developing an AI-powered analytics dashboard that increased user engagement by 45%.'
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    year: '2022',
    description: 'Contributed to 15+ open source projects with over 500 stars and 100+ forks combined.'
  },
  {
    title: 'Hackathon Winner',
    organization: 'CodeFest 2021',
    year: '2021',
    description: 'First place winner for developing a sustainable transportation app in 48 hours.'
  }
]

export default function CareerPage() {
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
              My Career Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              5+ years of experience building scalable applications and leading development teams. 
              Passionate about creating innovative solutions that drive business growth.
            </p>
            <div className="mt-10">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
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
              Professional Experience
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              My journey through various roles and the impact I've made.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-indigo-600">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="mt-2 sm:mt-0 text-sm text-gray-500 flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
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

      {/* Skills Section */}
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
              Technical Skills
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Technologies and tools I work with to build exceptional products.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
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
              Education
            </h2>
          </motion.div>
          <div className="mx-auto mt-16 max-w-4xl">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-indigo-600">
                          {edu.school}
                        </CardDescription>
                        <div className="mt-2 text-sm text-gray-500 flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-gray-600">GPA: <span className="font-semibold">{edu.gpa}</span></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <Badge key={achievement} variant="secondary">{achievement}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Certifications
              </h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{cert.name}</CardTitle>
                            <CardDescription>{cert.issuer}</CardDescription>
                            <p className="text-sm text-gray-500 mt-1">
                              Issued: {cert.date} • ID: {cert.credentialId}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Notable Achievements
              </h2>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{achievement.title}</CardTitle>
                            <CardDescription>{achievement.organization} • {achievement.year}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}