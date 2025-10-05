import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getExperienceBySlug, getRelatedExperiences } from "@/lib/data"
import ExperienceHero from "@/components/ExperienceHero"
import EpisodeCarousel from "@/components/EpisodeCarousel"
import ProfileCard from "@/components/ProfileCard"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { Metadata } from "next"

interface ExperiencePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const experience = await getExperienceBySlug(params.slug)
  
  if (!experience) {
    return {
      title: "Experience Not Found",
      description: "The requested experience could not be found."
    }
  }

  return {
    title: `${experience.title} - ${experience.role}`,
    description: experience.summary,
    openGraph: {
      title: `${experience.title} - ${experience.role}`,
      description: experience.summary,
      images: [
        {
          url: experience.backdrop,
          width: 1920,
          height: 1080,
          alt: `${experience.title} backdrop`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${experience.title} - ${experience.role}`,
      description: experience.summary,
      images: [experience.backdrop]
    }
  }
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = await getExperienceBySlug(params.slug)
  
  if (!experience) {
    notFound()
  }

  const relatedExperiences = await getRelatedExperiences(params.slug, 3)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <ExperienceHero experience={experience} />

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        {/* Episodes */}
        <section className="mb-16">
          <EpisodeCarousel episodes={experience.episodes} />
        </section>

        <Separator className="bg-white/10 mb-16" />

        {/* More Like This */}
        {relatedExperiences.length > 0 && (
          <section>
            <h3 className="text-3xl font-bold text-white mb-8">More Like This</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedExperiences.map((relatedExp, index) => (
                <ProfileCard
                  key={relatedExp.slug}
                  experience={relatedExp}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Experiences
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
