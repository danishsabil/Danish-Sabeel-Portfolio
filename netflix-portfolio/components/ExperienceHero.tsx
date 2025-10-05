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
    <div className="relative h-[70vh] overflow-hidden">
      {/* Backdrop Image */}
      <div className="absolute inset-0">
        <Image
          src={experience.backdrop}
          alt={`${experience.title} backdrop`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 netflix-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-6 pb-16">
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {experience.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              {experience.role}
            </h2>

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
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {experience.summary}
            </p>

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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
