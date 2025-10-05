import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function ProfileCardSkeleton() {
  return (
    <Card className="overflow-hidden border-0 bg-gray-900">
      <div className="aspect-[3/4]">
        <Skeleton className="w-full h-full" />
      </div>
    </Card>
  )
}

export function ExperienceHeroSkeleton() {
  return (
    <div className="relative h-[70vh] bg-gray-900">
      <Skeleton className="w-full h-full" />
    </div>
  )
}

export function EpisodeCardSkeleton() {
  return (
    <Card className="overflow-hidden border-0 bg-gray-900/50">
      <div className="aspect-video">
        <Skeleton className="w-full h-full" />
      </div>
      <CardContent className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
      </CardContent>
    </Card>
  )
}
