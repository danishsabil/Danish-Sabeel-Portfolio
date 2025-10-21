"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"
import { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Link 
        href={`/projects/${project.slug}`}
        className="block focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
        aria-label={`View details for ${project.title}`}
      >
        <Card className="overflow-hidden border-0 bg-gradient-to-b from-gray-900 to-black card-hover h-full">
          <div className="relative aspect-[16/10] overflow-hidden">
            {project.hero ? (
              <>
                <Image
                  src={project.hero}
                  alt={`${project.title} - ${project.subtitle || ''}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 via-gray-900 to-black" />
            )}
            
            {/* Status badge overlay */}
            <div className="absolute top-4 right-4 z-10">
              <Badge 
                variant="secondary" 
                className="bg-rose-600/90 text-white border-rose-500"
              >
                {project.status}
              </Badge>
            </div>
            
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1 group-hover:text-rose-400 transition-colors line-clamp-1">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-sm text-gray-300 mb-3 line-clamp-1">{project.subtitle}</p>
              )}
              
              <div className="flex flex-wrap gap-3 text-xs text-gray-300 mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{project.year}</span>
                </div>
              </div>

              <Badge 
                variant="outline" 
                className="border-white/30 text-white text-xs"
              >
                {project.category}
              </Badge>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}

