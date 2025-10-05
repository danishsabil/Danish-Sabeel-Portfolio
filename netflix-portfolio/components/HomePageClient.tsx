"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import ProfileCard from "@/components/ProfileCard"
import { Experience } from "@/lib/types"

const categories = ["All", "PM", "Design", "Visualization"]

interface HomePageClientProps {
  experiences: Experience[]
}

export default function HomePageClient({ experiences }: HomePageClientProps) {
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>(experiences)
  const [selectedCategory, setSelectedCategory] = useState("All")

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
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              My <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore my professional journey through interactive experience cards. 
              Each card represents a unique chapter in my career, showcasing projects, 
              achievements, and the skills I've developed along the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-rose-600/20 border border-rose-500/30 rounded-lg px-4 py-2">
                <span className="text-rose-400 font-semibold">3+ Years Experience</span>
              </div>
              <div className="bg-rose-600/20 border border-rose-500/30 rounded-lg px-4 py-2">
                <span className="text-rose-400 font-semibold">15+ Projects</span>
              </div>
              <div className="bg-rose-600/20 border border-rose-500/30 rounded-lg px-4 py-2">
                <span className="text-rose-400 font-semibold">$500k+ Saved</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
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

          {/* Experience Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {filteredExperiences.map((experience, index) => (
              <ProfileCard
                key={experience.slug}
                experience={experience}
                index={index}
              />
            ))}
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
