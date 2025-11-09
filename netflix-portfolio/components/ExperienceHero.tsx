"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin, Calendar } from "lucide-react"
import { Experience } from "@/lib/types"

interface ExperienceHeroProps {
  experience: Experience
}

export default function ExperienceHero({ experience }: ExperienceHeroProps) {
  return (
    <div className="relative min-h-[50vh]">
      {/* Backdrop Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={experience.backdrop}
          alt={`${experience.title} backdrop`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 netflix-gradient z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[50vh] flex items-end">
        <div className="container mx-auto px-6 pb-6 md:pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            {/* Logo */}
            <div className="mb-6">
              <div className="relative w-24 h-24">
                <Image
                  src={experience.logo}
                  alt={`${experience.title} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Title and Role */}
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-4 inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
                {experience.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90">
                {experience.role}
              </h2>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-8 max-w-2xl">
              <p className="text-base md:text-lg text-white leading-relaxed">
                {experience.summary}
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {experience.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {experience.links.map((link, index) => (
                <Button
                  key={index}
                  variant="default"
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 text-white"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.label}
                  </a>
                </Button>
              ))}
              {experience.slug === "island-exterior-fabricators" && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => {
                    const projectsSection = document.getElementById("projects-section")
                    projectsSection?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  View Projects
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
