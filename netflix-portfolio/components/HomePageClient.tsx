"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import ProfileCard from "@/components/ProfileCard"
import { Experience } from "@/lib/types"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "PM", "Design", "Visualization"]

interface HomePageClientProps {
  experiences: Experience[]
}

export default function HomePageClient({ experiences }: HomePageClientProps) {
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>(experiences)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(0)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isProgrammaticScroll = useRef(false)
  const [cardsPerPage, setCardsPerPage] = useState(3)

  // Detect screen size and set cardsPerPage accordingly
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1) // Mobile: 1 card at a time
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2) // Tablet: 2 cards
      } else {
        setCardsPerPage(3) // Desktop: 3 cards
      }
    }

    updateCardsPerPage()
    window.addEventListener('resize', updateCardsPerPage)
    return () => window.removeEventListener('resize', updateCardsPerPage)
  }, [])

  const totalPages = Math.ceil(filteredExperiences.length / cardsPerPage)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredExperiences(experiences)
    } else {
      const filtered = experiences.filter((exp) =>
        exp.skills.some((skill) =>
          skill.toLowerCase().includes(category.toLowerCase())
        )
      )
      setFilteredExperiences(filtered)
    }
    setCurrentPage(0) // Reset to first page when filtering
  }

  const scrollToPage = useCallback((page: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current
      
      // Mark as programmatic scroll
      isProgrammaticScroll.current = true
      setCurrentPage(page)
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        const children = Array.from(container.children) as HTMLElement[]
        
        if (children.length === 0) {
          isProgrammaticScroll.current = false
          return
        }
        
        // Calculate based on actual card widths
        const firstCardWidth = children[0]?.offsetWidth || 0
        const gap = 24 // gap-6
        // Scroll to the first card of the page
        const scrollLeft = page * cardsPerPage * (firstCardWidth + gap)
        
        container.scrollTo({ left: scrollLeft, behavior: "smooth" })
        
        // Reset flag after scroll animation completes (smooth scroll takes ~300ms)
        setTimeout(() => {
          isProgrammaticScroll.current = false
        }, 400)
      })
    }
  }, [cardsPerPage])

  const nextPage = () => {
    if (cardsPerPage === 1) {
      // On mobile, scroll one card at a time
      if (scrollRef.current) {
        const container = scrollRef.current
        const children = Array.from(container.children) as HTMLElement[]
        if (children.length === 0) return
        
        const firstCardWidth = children[0]?.offsetWidth || 0
        const gap = 24
        const currentScroll = container.scrollLeft
        const cardWidthWithGap = firstCardWidth + gap
        const nextScroll = currentScroll + cardWidthWithGap
        
        container.scrollTo({ left: nextScroll, behavior: "smooth" })
      }
    } else {
      // On desktop, scroll one page at a time
      const nextPageIndex = Math.min(currentPage + 1, totalPages - 1)
      scrollToPage(nextPageIndex)
    }
  }

  const prevPage = () => {
    if (cardsPerPage === 1) {
      // On mobile, scroll one card at a time
      if (scrollRef.current) {
        const container = scrollRef.current
        const children = Array.from(container.children) as HTMLElement[]
        if (children.length === 0) return
        
        const firstCardWidth = children[0]?.offsetWidth || 0
        const gap = 24
        const currentScroll = container.scrollLeft
        const cardWidthWithGap = firstCardWidth + gap
        const prevScroll = Math.max(0, currentScroll - cardWidthWithGap)
        
        container.scrollTo({ left: prevScroll, behavior: "smooth" })
      }
    } else {
      // On desktop, scroll one page at a time
      const prevPageIndex = Math.max(currentPage - 1, 0)
      scrollToPage(prevPageIndex)
    }
  }

  // Reset to first page when filtered experiences change
  useEffect(() => {
    setCurrentPage(0)
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "auto" })
    }
  }, [filteredExperiences.length])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        const prevPageIndex = Math.max(currentPage - 1, 0)
        scrollToPage(prevPageIndex)
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        const nextPageIndex = Math.min(currentPage + 1, totalPages - 1)
        scrollToPage(nextPageIndex)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, totalPages, scrollToPage])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              My <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Delivering construction excellence through strategic project management, technical expertise, and collaborative leadership across residential and commercial sectors.
            </p>
            
            {/* Professional Summary Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">6+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Projects Delivered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">$50M+</div>
                <div className="text-gray-300 text-sm">Project Value</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">2</div>
                <div className="text-gray-300 text-sm">Markets (U.S. & India)</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedCategory === category
                    ? "bg-rose-600 text-white border-rose-600"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Badge>
            ))}
          </motion.div>

          {/* Experience Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <button
                  onClick={prevPage}
                  disabled={cardsPerPage === 1 ? isAtStart : currentPage === 0}
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextPage}
                  disabled={cardsPerPage === 1 ? isAtEnd : currentPage === totalPages - 1}
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              {/* Dots Indicator - Hide on mobile if too many cards */}
              {cardsPerPage > 1 && (
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToPage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPage
                          ? "bg-rose-500 w-8"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Carousel Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide snap-x snap-mandatory px-2 -mx-2 pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={(e) => {
                // Skip updating page state if scroll was programmatic (from dot click)
                if (isProgrammaticScroll.current) return
                
                const container = e.currentTarget
                const children = Array.from(container.children) as HTMLElement[]
                
                if (children.length === 0) return
                
                const scrollPosition = container.scrollLeft
                const maxScroll = container.scrollWidth - container.clientWidth
                
                // Update scroll position states for mobile button disabling
                setIsAtStart(scrollPosition <= 10)
                setIsAtEnd(scrollPosition >= maxScroll - 10)
                
                if (cardsPerPage === 1) {
                  // On mobile, update currentPage based on card index
                  const firstCardWidth = children[0]?.offsetWidth || 0
                  const gap = 24
                  const cardWidthWithGap = firstCardWidth + gap
                  const cardIndex = Math.round(scrollPosition / cardWidthWithGap)
                  if (cardIndex !== currentPage && cardIndex >= 0 && cardIndex < filteredExperiences.length) {
                    setCurrentPage(cardIndex)
                  }
                } else {
                  // On desktop, calculate page based on cards per page
                  const firstCardWidth = children[0]?.offsetWidth || 0
                  const gap = 24
                  const cardWidthWithGap = firstCardWidth + gap
                  const cardIndex = Math.round(scrollPosition / cardWidthWithGap)
                  const calculatedPage = Math.floor(cardIndex / cardsPerPage)
                  if (calculatedPage !== currentPage && calculatedPage >= 0 && calculatedPage < totalPages) {
                    setCurrentPage(calculatedPage)
                  }
                }
              }}
            >
              {filteredExperiences.map((experience, index) => (
                <div
                  key={experience.slug}
                  className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] snap-center"
                >
                  <ProfileCard
                    experience={experience}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {filteredExperiences.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                No experiences found
              </h3>
              <p className="text-gray-400">
                Try selecting a different category or check back later.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
