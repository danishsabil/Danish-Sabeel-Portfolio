"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Download, Mail, Linkedin, Github, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const skills = [
    "Project Management", "Curtain Wall Systems", "MS Project", "Excel Automation",
    "Stakeholder Communication", "Vendor Coordination", "Quality Control",
    "Schedule Management", "Cost Control", "Risk Assessment", "Team Leadership",
    "Technical Documentation", "Process Improvement", "Client Relations"
  ]

  const achievements = [
    {
      title: "Budget Optimization",
      description: "Saved $250k through efficient project management and vendor coordination",
      metric: "$250k Saved"
    },
    {
      title: "Process Improvement",
      description: "Increased project accuracy by 15% through automated tracking systems",
      metric: "+15% Accuracy"
    },
    {
      title: "Team Leadership",
      description: "Managed cross-functional teams of 15+ members across multiple projects",
      metric: "15+ Team Members"
    },
    {
      title: "Quality Excellence",
      description: "Achieved 100% completion rate on EWA-5 curtain wall projects",
      metric: "100% Completion"
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Danish Sabeel"
                fill
                className="rounded-full object-cover border-4 border-rose-500/20"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Danish <span className="text-gradient">Sabeel</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Assistant Project Manager specializing in Facades & Curtain Walls with a passion for 
              delivering exceptional construction projects through innovative solutions and team leadership.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Boston, MA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>Available for Opportunities</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a dedicated Assistant Project Manager with extensive experience in 
                  curtain wall systems and facade engineering. My passion lies in delivering 
                  complex construction projects that exceed client expectations while maintaining 
                  strict quality standards and timelines.
                </p>
                <p>
                  With a strong background in project coordination, vendor management, and 
                  technical documentation, I&apos;ve successfully managed multiple high-value 
                  projects ranging from commercial buildings to residential complexes.
                </p>
                <p>
                  I believe in the power of process improvement and have implemented 
                  automated tracking systems that have significantly increased project 
                  accuracy and efficiency across all my assignments.
                </p>
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
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                    <div className="text-2xl font-bold text-rose-400">{achievement.metric}</div>
                  </CardHeader>
                  <CardContent>
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
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
