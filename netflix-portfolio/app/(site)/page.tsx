import { getExperiences } from "@/lib/data"
import HomePageClient from "@/components/HomePageClient"

export default async function HomePage() {
  const experiences = await getExperiences()

  return <HomePageClient experiences={experiences} />
}
