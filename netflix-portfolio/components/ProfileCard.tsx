"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Experience } from "@/lib/types"

interface ProfileCardProps {
  experience: Experience
  index: number
}

export default function ProfileCard({ experience, index }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Link 
        href={`/experience/${experience.slug}`}
        className="block focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
        aria-label={`View details for ${experience.title} - ${experience.role}`}
      >
        <Card className="overflow-hidden border-0 bg-gradient-to-b from-gray-900 to-black card-hover">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={experience.poster}
              alt={`${experience.title} poster showing professional work environment`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              priority={index < 4} // Prioritize first 4 images
            />
            
            {/* Logo overlay */}
            <div className="absolute top-4 left-4 z-10">
              <div className="relative w-12 h-12">
                <Image
                  src={experience.logo}
                  alt={`${experience.title} company logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2 group-hover:text-rose-400 transition-colors">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-300 mb-1">{experience.role}</p>
              <p className="text-xs text-gray-400">{experience.period}</p>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
