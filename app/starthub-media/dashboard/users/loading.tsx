import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Skeleton className="h-10 w-64 mb-8" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Skeleton className="h-10 w-[300px]" />
            <Skeleton className="h-10 w-[180px]" />
            <Skeleton className="h-10 w-[180px]" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-24" />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <Skeleton className="h-5 w-5 mr-2" />
              <Skeleton className="h-5 w-16" />
            </div>
          </div>

          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="p-4 border-b">
                <div className="flex items-center">
                  <Skeleton className="h-5 w-5 mr-3" />
                  <Skeleton className="h-10 w-10 rounded-full mr-3" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-32 mb-1" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <Skeleton className="h-6 w-16 mx-4" />
                  <div className="flex items-center mx-4">
                    <Skeleton className="h-3 w-3 rounded-full mr-2" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-5 w-24 mx-4" />
                  <div className="flex justify-end">
                    <Skeleton className="h-9 w-20 mr-2" />
                    <Skeleton className="h-9 w-9" />
                  </div>
                </div>
              </div>
            ))}

          <div className="p-4 border-t">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-48" />
              <div className="flex items-center space-x-2">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
