import { Skeleton } from "@/components/ui/skeleton"
import { ProfileCardSkeleton } from "@/components/Skeletons"

export default function Loading() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section Skeleton */}
      <div className="text-center mb-16">
        <Skeleton className="h-16 w-96 mx-auto mb-6" />
        <Skeleton className="h-6 w-80 mx-auto" />
      </div>

      {/* Filter Categories Skeleton */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-20" />
        ))}
      </div>

      {/* Experience Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProfileCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
