"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, DollarSign, ArrowLeft, ExternalLink, Download } from "lucide-react"
import { Project } from "@/lib/types"

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="relative min-h-[50vh]">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        {project.hero ? (
          <>
            <Image
              src={project.hero}
              alt={`${project.title} hero image`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 netflix-gradient z-[1]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-[1]" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[50vh] flex items-end">
        <div className="container mx-auto px-6 pt-12 pb-6 md:pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            {/* Back Button */}
            <div className="mb-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10"
                asChild
              >
                <Link href="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>

            {/* Category Badge */}
            <div className="mb-4">
              <Badge 
                variant="secondary" 
                className="bg-rose-600/90 text-white border-rose-500"
              >
                {project.category}
              </Badge>
            </div>

            {/* Title */}
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-6 mb-4 inline-block">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                {project.title}
              </h1>
              {project.subtitle && (
                <h2 className="text-xl md:text-2xl text-white/90">
                  {project.subtitle}
                </h2>
              )}
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
              {project.value && (
                <div className="flex items-center gap-2 text-white">
                  <DollarSign className="w-5 h-5" />
                  <span>{project.value}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Badge 
                  variant="outline" 
                  className="border-white/50 text-white"
                >
                  {project.status}
                </Badge>
              </div>
            </div>

            {/* Description */}
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-3xl">
              <p className="text-base md:text-lg text-white leading-relaxed">
                {(() => {
                  const firstParagraph = project.description.split('\n\n')[0]
                  if (firstParagraph.length <= 280) return firstParagraph
                  // Find the last sentence ending before 280 characters
                  const truncated = firstParagraph.substring(0, 280)
                  const lastPeriod = truncated.lastIndexOf('.')
                  const lastExclamation = truncated.lastIndexOf('!')
                  const lastQuestion = truncated.lastIndexOf('?')
                  const lastSentenceEnd = Math.max(lastPeriod, lastExclamation, lastQuestion)
                  return lastSentenceEnd > 100 
                    ? truncated.substring(0, lastSentenceEnd + 1)
                    : truncated + '...'
                })()}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                >
                  {tag}
                </Badge>
              ))}
            </div>

                   {/* Downloads and Action Buttons */}
                   <div className="flex flex-wrap gap-3 items-center">
                     {/* Downloads */}
                     {project.downloads && project.downloads.length > 0 && (
                       <>
                         {project.downloads.map((download, index) => (
                           <Button
                             key={index}
                             variant="default"
                             size="sm"
                             className="bg-rose-600 hover:bg-rose-700 text-white text-sm"
                             asChild
                           >
                             <a href={download.file} {...(download.file.startsWith("http") ? {} : { download: true })} target="_blank" rel="noopener noreferrer">
                               <Download className="w-3 h-3 mr-1" />
                               {download.label}
                               {download.size && <span className="ml-1 text-xs opacity-80">({download.size})</span>}
                             </a>
                           </Button>
                         ))}
                       </>
                     )}

                     {/* Action Button */}
                     {project.experienceSlug && (
                       <Button
                         variant="default"
                         size="sm"
                         className="bg-rose-600 hover:bg-rose-700 text-white text-sm"
                         asChild
                       >
                         <Link href={`/experience/${project.experienceSlug}`}>
                           <ExternalLink className="w-3 h-3 mr-1" />
                           View Related Experience
                         </Link>
                       </Button>
                     )}
                   </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

