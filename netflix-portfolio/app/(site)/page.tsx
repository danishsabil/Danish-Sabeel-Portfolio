"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Download, Mail, Linkedin, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const skills = [
    "Project Management", "Curtain Wall Systems", "MS Project", "Microsoft Office Suite",
    "Stakeholder Communication", "Vendor Coordination", "Quality Control",
    "Schedule Management", "Cost Control", "Risk Assessment", "Team Leadership",
    "Technical Documentation", "Process Improvement", "Client Relations",
    "Logistics", "Takeoff", "RFI/CO/NCR Management"
  ]

  const achievements = [
    {
      title: "Project Portfolio",
      description: "Successfully delivered projects with combined value exceeding $50M across residential and commercial sectors",
      metric: "$50M+ Value"
    },
    {
      title: "Process Improvement",
      description: "Improved Project Material Reconciliation accuracy by 15% using automated tracking systems",
      metric: "+15% Accuracy"
    },
    {
      title: "Team Leadership",
      description: "Managed cross-functional teams of 15+ members across multiple projects",
      metric: "15+ Team Members"
    },
    {
      title: "Quality Excellence",
      description: "Delivered Residential Projects on schedule and with highest quality standards",
      metric: "100% On-Time"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Column - Text */}
              <div className="flex flex-col justify-center">
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-2">
                  Danish <span className="text-gradient">Sabeel</span>
                </h1>
                <p className="text-sm text-gray-400 mb-4 font-medium">
                  Architect | Construction Manager | Facade and Curtain Walls
                </p>
                <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed max-w-lg">
                  Project Management professional with architecture and construction management expertise, delivering projects from $2M to $50M across the U.S. and India. Currently Assistant Project Manager at Island Exterior Fabricators, specializing in façade and curtain wall systems.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-5 h-5" />
                    <span>Boston, MA</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-5 h-5" />
                    <span>Available for Opportunities</span>
                  </div>
                </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <a href="/Resume_DanishSabeel.pdf" target="_blank" rel="noopener" className="inline-flex">
                        <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download Resume
                        </Button>
                      </a>
                      <a href="mailto:danishsabil@gmail.com" className="inline-flex">
                        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 w-full">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Me
                        </Button>
                      </a>
                    </div>
                    <div className="w-full mt-4">
                      <a href="https://www.linkedin.com/in/danishsabeel/" target="_blank" rel="noopener" className="inline-flex w-full">
                        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 w-full">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </a>
                    </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full h-[500px] lg:h-[600px]">
                  <Image
                    src="/images/professional headshot.png"
                    alt="Danish Sabeel"
                    fill
                    className="rounded-2xl object-cover border-4 border-rose-500/20 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Project Management professional with a foundation in architecture and construction management, experienced in delivering projects ranging from $2M to $50M across the U.S. and India. Skilled in scheduling, procurement, estimation, subcontractor management, and stakeholder coordination, I bring a balanced perspective from both design and field execution.
                </p>
                <p>
                  Currently an Assistant Project Manager at Island Exterior Fabricators, I support large-scale curtain wall projects by managing schedules, logistics, RFIs, change orders, and design-assist coordination. Previously, I led residential and commercial projects in India, overseeing subcontractor teams of 10–20 while driving efficiency through lean construction practices and delivering projects on time and within budget.
                </p>
                <p>
                  I hold a Master&apos;s in Project Management from Boston University (GPA: 3.6) and a Bachelor&apos;s in Architecture from Aayojan School of Architecture, along with certifications in CAPM (PMI), Scrum Master (Scrum Inc.), and Construction Management (Scheduling & Estimation). I focus on developing practical solutions that align design intent with on-site realities, ensuring projects run efficiently and meet client expectations.
                </p>
                <Separator className="bg-white/10" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Boston University — MSc Project Management, GPA 3.60 (Jan 2024)</li>
                  <li>Aayojan School of Architecture — Bachelor of Architecture (Jun 2021)</li>
                </ul>
                <h3 className="text-2xl font-semibold text-white mt-6">Certifications</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>CAPM (PMI)</li>
                  <li>Scrum Master (Scrum Inc.)</li>
                  <li>Construction Management: Scheduling & Estimation (LinkedIn)</li>
                </ul>
                <h3 className="text-2xl font-semibold text-white mt-6">Interests</h3>
                <p>Soccer, swimming, and painting. Portfolio: <a href="https://www.behance.net/danishsabil" target="_blank" rel="noopener" className="text-rose-400 underline">Behance</a></p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-rose-600/20 text-rose-400 border-rose-500/30 hover:bg-rose-600/30 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Key Achievements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Delivering exceptional results through innovative project management and team leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors h-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                    <div className="text-2xl font-bold text-rose-400">{achievement.metric}</div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
            <p className="text-gray-300 mb-8 text-lg">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s discuss how I can contribute to your next construction project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/Resume_DanishSabeel.pdf" target="_blank" rel="noopener" className="inline-flex">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
              <a href="mailto:danishsabil@gmail.com" className="inline-flex">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/danishsabeel/" target="_blank" rel="noopener" className="inline-flex">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}