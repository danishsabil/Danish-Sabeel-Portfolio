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
    <div className="relative h-[70vh] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        {project.hero ? (
          <>
            <Image
              src={project.hero}
              alt={`${project.title} hero image`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 netflix-gradient" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-6 pt-20 pb-16">
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl">
                {project.subtitle}
              </h2>
            )}

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
            <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
              {project.description}
            </p>

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
                             <a href={download.file} download target="_blank" rel="noopener noreferrer">
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

