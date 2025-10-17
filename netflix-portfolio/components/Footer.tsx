"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Mail, Linkedin, MapPin, Palette } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: "About", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/danishsabeel/",
      icon: Linkedin,
    },
    {
      name: "Behance",
      href: "https://www.behance.net/danishsabil",
      icon: Palette,
    },
    {
      name: "Email",
      href: "mailto:danishsabil@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Danish Sabeel</h3>
                <p className="text-sm text-gray-400">Assistant PM • Facades & Curtain Walls</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Dedicated to delivering exceptional construction projects through innovative 
              solutions, expert project management, and collaborative team leadership.
            </p>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Boston, MA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>danishsabil@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-rose-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-rose-400 transition-colors text-sm"
                >
                  <social.icon className="w-4 h-4" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="bg-gray-700 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Danish Sabeel. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-rose-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-rose-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
