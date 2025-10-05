"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Episode } from "@/lib/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface EpisodeCarouselProps {
  episodes: Episode[]
}

export default function EpisodeCarousel({ episodes }: EpisodeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const itemWidth = container.children[0]?.clientWidth || 0
      const scrollLeft = index * (itemWidth + 16) // 16px gap
      container.scrollTo({ left: scrollLeft, behavior: "smooth" })
    }
    setCurrentIndex(index)
  }

  const nextEpisode = () => {
    const nextIndex = Math.min(currentIndex + 1, episodes.length - 1)
    scrollToIndex(nextIndex)
  }

  const prevEpisode = () => {
    const prevIndex = Math.max(currentIndex - 1, 0)
    scrollToIndex(prevIndex)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        prevEpisode()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        nextEpisode()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, episodes.length])

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Episodes</h3>
        <div className="flex gap-2">
          <button
            onClick={prevEpisode}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
            aria-label="Previous episode"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextEpisode}
            disabled={currentIndex === episodes.length - 1}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
            aria-label="Next episode"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {episodes.map((episode, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-80 snap-center"
          >
            <Card className="overflow-hidden border-0 bg-gray-900/50 backdrop-blur-sm">
              <div className="relative aspect-video">
                <Image
                  src={episode.thumb}
                  alt={`${episode.title} thumbnail`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {episode.title}
                  </h4>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {episode.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {episode.metrics.map((metric, metricIndex) => (
                    <Badge
                      key={metricIndex}
                      variant="outline"
                      className="border-rose-500/50 text-rose-400"
                    >
                      {metric.label}: {metric.value}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
