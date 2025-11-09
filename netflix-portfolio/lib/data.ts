import { PortfolioData, Experience, ProjectsData, Project } from "./types"
import fs from "fs/promises"
import path from "path"

// Load and validate the experiences data
export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    // Try reading from file system first (works in server components)
    const filePath = path.join(process.cwd(), "content", "experiences.json")
    const fileContents = await fs.readFile(filePath, "utf8")
    const portfolioData = JSON.parse(fileContents) as PortfolioData
    
    // Basic validation
    if (!portfolioData.owner || !portfolioData.experiences) {
      console.error("Invalid portfolio data structure:", portfolioData)
      throw new Error("Invalid portfolio data structure")
    }
    
    console.log(`Loaded ${portfolioData.experiences.length} experiences`)
    return portfolioData
  } catch (error) {
    console.error("Failed to load portfolio data:", error)
    // Try fallback import method
    try {
      const data = await import("../content/experiences.json")
      const portfolioData = data.default as PortfolioData
      if (portfolioData.owner && portfolioData.experiences) {
        console.log(`Loaded ${portfolioData.experiences.length} experiences via import`)
        return portfolioData
      }
    } catch (importError) {
      console.error("Import fallback also failed:", importError)
    }
    // Return fallback data to prevent crashes
    return {
      owner: {
        name: "Your Name",
        tagline: "Professional Tagline",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
      },
      experiences: []
    }
  }
}

export async function getExperiences(): Promise<Experience[]> {
  const data = await getPortfolioData()
  return data.experiences
}

export async function getExperienceBySlug(slug: string): Promise<Experience | null> {
  const experiences = await getExperiences()
  return experiences.find((exp) => exp.slug === slug) || null
}

export async function getRelatedExperiences(
  currentSlug: string,
  limit: number = 3
): Promise<Experience[]> {
  const experiences = await getExperiences()
  const current = await getExperienceBySlug(currentSlug)
  
  if (!current) return experiences.slice(0, limit)
  
  // Find experiences with overlapping skills
  const related = experiences
    .filter((exp) => exp.slug !== currentSlug)
    .filter((exp) => 
      exp.skills.some(skill => current.skills.includes(skill))
    )
    .slice(0, limit)
  
  // If not enough related experiences, fill with random ones
  if (related.length < limit) {
    const remaining = experiences
      .filter((exp) => exp.slug !== currentSlug && !related.includes(exp))
      .slice(0, limit - related.length)
    related.push(...remaining)
  }
  
  return related
}

// Project data functions
export async function getProjectsData(): Promise<ProjectsData> {
  try {
    // Try reading from file system first (works in server components)
    const filePath = path.join(process.cwd(), "content", "projects.json")
    const fileContents = await fs.readFile(filePath, "utf8")
    const projectsData = JSON.parse(fileContents) as ProjectsData
    
    // Basic validation
    if (!projectsData.projects || !projectsData.categories) {
      console.error("Invalid projects data structure:", projectsData)
      throw new Error("Invalid projects data structure")
    }
    
    console.log(`Loaded ${projectsData.projects.length} projects`)
    return projectsData
  } catch (error) {
    console.error("Failed to load projects data:", error)
    // Try fallback import method
    try {
      const data = await import("../content/projects.json")
      const projectsData = data.default as ProjectsData
      if (projectsData.projects && projectsData.categories) {
        console.log(`Loaded ${projectsData.projects.length} projects via import`)
        return projectsData
      }
    } catch (importError) {
      console.error("Import fallback also failed:", importError)
    }
    // Return fallback data to prevent crashes
    return {
      projects: [],
      categories: ["All"]
    }
  }
}

export async function getProjects(): Promise<Project[]> {
  const data = await getProjectsData()
  return data.projects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects()
  return projects.find((project) => project.slug === slug) || null
}

export async function getProjectsByExperience(experienceSlug: string): Promise<Project[]> {
  const projects = await getProjects()
  return projects.filter((project) => project.experienceSlug === experienceSlug)
}

export async function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Promise<Project[]> {
  const projects = await getProjects()
  const current = await getProjectBySlug(currentSlug)
  
  if (!current) return projects.slice(0, limit)
  
  // Find projects with same category or experience
  const related = projects
    .filter((project) => project.slug !== currentSlug)
    .filter((project) => 
      project.category === current.category || 
      project.experienceSlug === current.experienceSlug
    )
    .slice(0, limit)
  
  // For academic/research projects, don't show random projects
  if (current.category === "Research" || current.category === "Academic") {
    return related
  }
  
  // If not enough related projects, fill with random ones (only for non-academic projects)
  if (related.length < limit) {
    const remaining = projects
      .filter((project) => project.slug !== currentSlug && !related.includes(project))
      .slice(0, limit - related.length)
    related.push(...remaining)
  }
  
  return related
}

export async function getProjectCategories(): Promise<string[]> {
  const data = await getProjectsData()
  return data.categories
}
