'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Corp',
    location: 'San Francisco, CA',
    period: '2023 - Present',
    type: 'Full-time',
    description: 'Leading development of next-generation web applications using React, Next.js, and Node.js. Managing a team of 4 developers and architecting scalable solutions for enterprise clients.',
    achievements: [
      'Increased application performance by 40% through optimization',
      'Led migration to microservices architecture',
      'Mentored 3 junior developers',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd',
    location: 'Remote',
    period: '2021 - 2023',
    type: 'Full-time',
    description: 'Developed and maintained multiple client projects focusing on e-commerce and SaaS applications. Collaborated with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Built 8 production applications from scratch',
      'Reduced bug reports by 50% through comprehensive testing',
      'Implemented responsive designs for mobile-first approach',
      'Integrated payment systems and third-party APIs'
    ],
    technologies: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'Stripe', 'Firebase']
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Agency',
    location: 'New York, NY',
    period: '2020 - 2021',
    type: 'Full-time',
    description: 'Specialized in creating responsive, interactive web experiences for diverse clients including startups and Fortune 500 companies.',
    achievements: [
      'Delivered 15+ client projects on time and within budget',
      'Improved website loading speeds by 35% on average',
      'Created reusable component library',
      'Collaborated with designers to implement pixel-perfect UIs'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'SASS', 'Webpack']
  },
  {
    title: 'Junior Web Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2019 - 2020',
    type: 'Full-time',
    description: 'Started my professional journey building web applications and learning modern development practices in a fast-paced startup environment.',
    achievements: [
      'Contributed to 3 major product releases',
      'Fixed 100+ bugs and implemented new features',
      'Learned agile development methodologies',
      'Built internal tools to improve team productivity'
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery']
  }
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    location: 'California, USA',
    period: '2015 - 2019',
    gpa: '3.8/4.0',
    achievements: [
      'Graduated Magna Cum Laude',
      'Dean\'s List for 6 semesters',
      'President of Computer Science Club',
      'Winner of Annual Hackathon 2018'
    ]
  }
]

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-CSA-2023-001'
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
  },
  {
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB Inc.',
    date: '2021',
    credentialId: 'MDB-DEV-2021-001'
  }
]

const skills = {
  'Frontend': ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS'],
  'Backend': ['Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'Laravel'],
  'Database': ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
  'Cloud & DevOps': ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
  'Tools': ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Figma']
}

const achievements = [
  {
    title: 'Employee of the Year 2023',
    organization: 'Tech Innovation Corp',
    description: 'Recognized for outstanding performance and leadership in delivering critical projects.'
  },
  {
    title: 'Best Innovation Award',
    organization: 'Digital Solutions Ltd',
    description: 'Awarded for developing an AI-powered customer service chatbot that increased satisfaction by 30%.'
  },
  {
    title: 'Hackathon Winner',
    organization: 'TechCrunch Disrupt 2022',
    description: 'First place winner for developing a sustainable energy management platform.'
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    description: 'Active contributor to popular open-source projects with 500+ stars and 100+ forks.'
  }
]

export default function Career() {
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
              Professional <span className="gradient-text">Career</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my professional journey, skills, and achievements in software development
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills section */}
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
              Technical Skills & Expertise
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Technologies and tools I work with to build exceptional digital experiences
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
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Experience
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              My journey through various roles and the impact I've made
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={`${job.company}-${job.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-blue-600">
                            {job.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <Badge variant="outline">{job.type}</Badge>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {job.period}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {job.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
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
      </div>

      {/* Education section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Education
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Academic foundation that shaped my technical expertise
            </p>
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
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-blue-600">
                          {edu.school}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <Badge variant="outline">GPA: {edu.gpa}</Badge>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
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
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Achievements & Activities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Certifications
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional certifications that validate my expertise
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription className="font-semibold text-blue-600">
                        {cert.issuer}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{cert.date}</Badge>
                        <span className="text-sm text-gray-600">ID: {cert.credentialId}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notable Achievements
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Recognition and accomplishments throughout my career
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription className="font-semibold text-blue-600">
                        {achievement.organization}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}