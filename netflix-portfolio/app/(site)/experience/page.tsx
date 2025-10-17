import { getExperiences } from "@/lib/data"
import HomePageClient from "@/components/HomePageClient"

export default async function ExperiencePage() {
  const experiences = await getExperiences()

  return <HomePageClient experiences={experiences} />
}
