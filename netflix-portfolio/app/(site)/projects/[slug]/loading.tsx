import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Skeleton */}
      <div className="relative h-[70vh]">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-32 w-full" />
          </div>
          <div className="lg:col-span-1">
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  )
}

