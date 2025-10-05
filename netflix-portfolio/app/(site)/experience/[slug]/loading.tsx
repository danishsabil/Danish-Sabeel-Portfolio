import { Skeleton } from "@/components/ui/skeleton"
import { ExperienceHeroSkeleton, EpisodeCardSkeleton } from "@/components/Skeletons"

export default function ExperienceLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section Skeleton */}
      <ExperienceHeroSkeleton />

      {/* Content Section Skeleton */}
      <div className="container mx-auto px-6 py-16">
        {/* Episodes Skeleton */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-8 w-32" />
            <div className="flex gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-80">
                <EpisodeCardSkeleton />
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-white/10 mb-16" />

        {/* More Like This Skeleton */}
        <section>
          <Skeleton className="h-8 w-48 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="aspect-[3/4]">
                <Skeleton className="w-full h-full" />
              </div>
            ))}
          </div>
        </section>

        {/* Back Button Skeleton */}
        <div className="mt-16 text-center">
          <Skeleton className="h-12 w-48 mx-auto" />
        </div>
      </div>
    </div>
  )
}
