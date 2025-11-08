"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Linkedin, Send, Palette } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "danishsabil@gmail.com",
      href: "mailto:danishsabil@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Boston, MA, USA",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/danishsabeel/",
      color: "hover:text-blue-400"
    },
    {
      icon: Palette,
      name: "Behance",
      href: "https://www.behance.net/danishsabil",
      color: "hover:text-rose-400"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to discuss your next construction project? I&apos;m always excited to 
              explore new opportunities and innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
                  <p className="text-gray-400">
                    Fill out the form below and I&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-rose-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-rose-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-rose-500"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-rose-500 resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Whether you&apos;re looking for project management expertise, curtain wall 
                  consultation, or innovative construction solutions, I&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="bg-gray-900/50 border-gray-700 hover:bg-gray-900/70 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-rose-600/20 rounded-lg flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-rose-400" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{info.title}</h3>
                            <a
                              href={info.href}
                              className="text-gray-300 hover:text-rose-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Separator className="bg-gray-700" />

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let&apos;s discuss how I can help bring your construction vision to life 
              with innovative solutions and expert project management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:danishsabil@gmail.com" className="inline-flex">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/danishsabeel/" target="_blank" rel="noopener" className="inline-flex">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
