import { getProjects, getProjectCategories } from "@/lib/data"
import ProjectCard from "@/components/ProjectCard"
import ProjectsPageClient from "@/components/ProjectsPageClient"

export default async function ProjectsPage() {
  const projects = await getProjects()
  const categories = await getProjectCategories()

  return <ProjectsPageClient projects={projects} categories={categories} />
}