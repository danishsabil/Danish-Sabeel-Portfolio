import { PortfolioData, Experience } from "./types"

// Load and validate the experiences data
export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const data = await import("../content/experiences.json")
    const portfolioData = data.default as PortfolioData
    
    // Basic validation
    if (!portfolioData.owner || !portfolioData.experiences) {
      throw new Error("Invalid portfolio data structure")
    }
    
    return portfolioData
  } catch (error) {
    console.error("Failed to load portfolio data:", error)
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
