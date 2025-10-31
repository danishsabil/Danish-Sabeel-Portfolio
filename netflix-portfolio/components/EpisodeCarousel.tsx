"use client"

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
        className="flex gap-4 overflow-x-auto overflow-y-visible scrollbar-hide snap-x snap-mandatory px-2 -mx-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {episodes.map((episode, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-96 snap-center"
          >
            <div className="relative">
              {/* Glow effect container - extends beyond card to prevent clipping */}
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-rose-500/0 via-rose-500/0 to-rose-500/0 group-hover:from-rose-500/30 group-hover:via-rose-500/20 group-hover:to-rose-500/30 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-2xl pointer-events-none"></div>
              
              <Card className="group relative overflow-hidden border border-white/20 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/20 hover:to-white/15 hover:backdrop-blur-3xl hover:border-white/30 hover:shadow-rose-500/30 hover:scale-[1.02]">
                {/* Frosted glass overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/15 group-hover:to-white/10 transition-all duration-500 pointer-events-none backdrop-blur-sm rounded-lg"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                    <h4 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-rose-200 transition-colors duration-300">
                      {episode.title}
                    </h4>
                  </div>
                  <p className="text-gray-300 mb-5 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {episode.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/20 group-hover:border-white/30 transition-colors duration-300">
                    {episode.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="relative group/badge"
                      >
                        <div className="absolute inset-0 bg-rose-500/0 group-hover/badge:bg-rose-500/20 rounded-md blur-sm transition-all duration-300 -z-10"></div>
                        <div className="flex flex-col items-start justify-center px-3 py-2 rounded-md border border-rose-500/40 bg-gradient-to-br from-rose-500/10 via-rose-500/15 to-rose-500/10 backdrop-blur-md text-rose-300 transition-all duration-300 group-hover/badge:border-rose-500/60 group-hover/badge:bg-gradient-to-br group-hover/badge:from-rose-500/20 group-hover/badge:via-rose-500/25 group-hover/badge:to-rose-500/20 group-hover/badge:shadow-lg group-hover/badge:shadow-rose-500/30 min-h-[48px]">
                          <span className="text-[10px] uppercase tracking-wider text-rose-400/80 font-medium mb-0.5">
                            {metric.label}
                          </span>
                          <span className="text-sm font-semibold text-rose-200">
                            {metric.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
