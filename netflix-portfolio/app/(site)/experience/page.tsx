import { getExperiences } from "@/lib/data"
import HomePageClient from "@/components/HomePageClient"

export const dynamic = 'force-dynamic'

export default async function ExperiencePage() {
  const experiences = await getExperiences()

  return <HomePageClient experiences={experiences} />
}
