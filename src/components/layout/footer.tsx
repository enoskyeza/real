import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Career', href: '/career' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Store', href: '/store' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:hello@example.com',
      icon: Mail,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300 transition-colors">
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" />
              </Link>
            )
          })}
        </div>
        <div className="mt-10 flex items-center justify-center space-x-2 text-xs leading-5 text-gray-400">
          <span>&copy; 2024 Portfolio. Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span>by Your Name</span>
        </div>
      </div>
    </footer>
  )
}