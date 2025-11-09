"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProfileCard from "@/components/ProfileCard"
import { Experience } from "@/lib/types"

interface MoreLikeThisCarouselProps {
  experiences: Experience[]
}

export default function MoreLikeThisCarousel({ experiences }: MoreLikeThisCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const updateScrollState = () => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const scrollPosition = container.scrollLeft
      const maxScroll = container.scrollWidth - container.clientWidth
      setIsAtStart(scrollPosition <= 10)
      setIsAtEnd(scrollPosition >= maxScroll - 10)
    }
  }

  useEffect(() => {
    updateScrollState()
  }, [experiences])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const children = Array.from(container.children) as HTMLElement[]
      if (children.length === 0) return

      const firstCardWidth = children[0]?.offsetWidth || 0
      const gap = 24
      const cardWidthWithGap = firstCardWidth + gap
      const currentScroll = container.scrollLeft
      const scrollAmount = direction === 'right' 
        ? currentScroll + cardWidthWithGap
        : Math.max(0, currentScroll - cardWidthWithGap)

      container.scrollTo({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      {/* Navigation Buttons - Mobile Only */}
      <div className="flex items-center justify-between mb-6 md:hidden">
        <button
          onClick={() => scroll('left')}
          disabled={isAtStart}
          className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={isAtEnd}
          className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel Container - Mobile */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide snap-x snap-mandatory px-2 -mx-2 pb-4 md:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={updateScrollState}
      >
        {experiences.map((experience, index) => (
          <div
            key={experience.slug}
            className="flex-shrink-0 w-[calc(100%-2rem)] snap-center"
          >
            <ProfileCard
              experience={experience}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Grid Layout - Desktop */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience, index) => (
          <ProfileCard
            key={experience.slug}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

