import { notFound } from "next/navigation"
import Link from "next/link"
import { getProjectBySlug, getRelatedProjects } from "@/lib/data"
import ProjectHero from "@/components/ProjectHero"
import ProjectGallery from "@/components/ProjectGallery"
import ProjectSpecs from "@/components/ProjectSpecs"
import ProjectCard from "@/components/ProjectCard"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found."
    }
  }

  return {
    title: `${project.title} - ${project.subtitle || 'Project'}`,
    description: project.description,
    openGraph: {
      title: `${project.title} - ${project.subtitle || 'Project'}`,
      description: project.description,
      images: [
        {
          url: project.hero,
          width: 1920,
          height: 1080,
          alt: `${project.title} hero image`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${project.subtitle || 'Project'}`,
      description: project.description,
      images: [project.hero]
    }
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }

  const relatedProjects = await getRelatedProjects(params.slug, 3)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <ProjectHero project={project} />

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content - Left 2/3 */}
          <div className="lg:col-span-2 space-y-12">
            {/* Scope */}
            {project.scope && (
              <section>
                <h3 className="text-3xl font-bold text-white mb-4">Project Scope</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{project.scope}</p>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h3 className="text-3xl font-bold text-white mb-4">Challenges</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{project.challenges}</p>
              </section>
            )}

            {/* Solutions */}
            {project.solutions && (
              <section>
                <h3 className="text-3xl font-bold text-white mb-4">Solutions</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{project.solutions}</p>
              </section>
            )}
          </div>

          {/* Sidebar - Right 1/3 */}
          <div className="lg:col-span-1">
            <ProjectSpecs specifications={project.specifications} />
          </div>
        </div>

        <Separator className="bg-white/10 mb-16" />

        {/* Image Gallery */}
        {project.images && project.images.length > 1 && (
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">Project Gallery</h3>
            <ProjectGallery images={project.images} projectTitle={project.title} />
          </section>
        )}

        {project.images && project.images.length > 1 && relatedProjects.length > 0 && (
          <Separator className="bg-white/10 mb-16" />
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section>
            <h3 className="text-3xl font-bold text-white mb-8">Related Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard
                  key={relatedProject.slug}
                  project={relatedProject}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

