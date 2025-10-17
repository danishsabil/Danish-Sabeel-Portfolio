"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/ProjectCard"
import { Project } from "@/lib/types"

interface ProjectsPageClientProps {
  projects: Project[]
  categories: string[]
}

export default function ProjectsPageClient({ projects, categories }: ProjectsPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black">
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
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A collection of my work spanning curtain wall systems, architecture, 3D visualization, 
              and academic research. Each project represents a unique challenge and innovative solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-900/30 sticky top-[72px] z-40 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No projects found in this category. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Interested in Collaborating?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always looking for exciting new projects and opportunities to create something amazing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                  Get In Touch
                </Button>
              </a>
              <a href="/experience" className="inline-flex">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  View Experience
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

