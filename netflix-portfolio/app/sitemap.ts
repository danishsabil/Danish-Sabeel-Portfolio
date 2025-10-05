import { MetadataRoute } from 'next'
import { getExperiences } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const experiences = await getExperiences()
  
  const experiencePages = experiences.map((experience) => ({
    url: `https://your-domain.com/experience/${experience.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...experiencePages,
  ]
}
