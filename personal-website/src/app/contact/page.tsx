'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@example.com',
    description: 'Send me an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    description: 'Call me during business hours'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'San Francisco, CA',
    description: 'Available for local meetings'
  },
  {
    icon: Clock,
    title: 'Response Time',
    details: '24 hours',
    description: 'I typically respond within a day'
  }
]

export default function Contact() {
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact info cards */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                      <CardDescription className="font-semibold text-gray-900">
                        {info.details}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Contact form and info */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send me a message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                          First name
                        </label>
                        <Input
                          type="text"
                          id="first-name"
                          name="first-name"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                          Last name
                        </label>
                        <Input
                          type="text"
                          id="last-name"
                          name="last-name"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company (optional)
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="project-type"
                        name="project-type"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Select a project type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="consulting">Consulting</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's work together
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  I'm always excited to take on new challenges and collaborate with passionate individuals and teams. 
                  Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Response</h3>
                    <p className="text-gray-600">I typically respond to all inquiries within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Consultation</h3>
                    <p className="text-gray-600">I offer a free 30-minute consultation to discuss your project needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Schedule</h3>
                    <p className="text-gray-600">I work across different time zones and can accommodate your schedule.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>I'll review your message and project requirements</li>
                  <li>We'll schedule a call to discuss your needs in detail</li>
                  <li>I'll provide a detailed proposal with timeline and pricing</li>
                  <li>Once approved, we'll kick off your project!</li>
                </ol>
              </div>

              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <a href="mailto:hello@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+15551234567">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Me
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
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
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Common questions about working together
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary based on complexity, but most web development projects take 4-12 weeks. I'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Yes! I work with clients worldwide and am comfortable with different time zones. I use modern collaboration tools to ensure smooth communication."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "I specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and various cloud platforms. I'm always learning new technologies to stay current."
                },
                {
                  question: "Do you provide ongoing maintenance?",
                  answer: "Yes, I offer maintenance packages to keep your applications updated, secure, and running smoothly. This includes bug fixes, security updates, and feature enhancements."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
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