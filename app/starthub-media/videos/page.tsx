import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Eye } from "lucide-react"

export default function VideosPage() {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with StartHub Media",
      description: "Complete walkthrough of platform setup and basic features",
      duration: "12:34",
      views: "2.3K",
      category: "Getting Started",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 2,
      title: "Creating Your First Content Hub",
      description: "Step-by-step guide to setting up and customizing content hubs",
      duration: "8:45",
      views: "1.8K",
      category: "Content Creation",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 3,
      title: "Website Integration & Embedding",
      description: "How to embed StartHub Media content on your website",
      duration: "15:22",
      views: "3.1K",
      category: "Integration",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Video Tutorials</h1>
          <p className="text-xl text-purple-100">Learn how to use StartHub Media with our comprehensive video guides</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <Play className="w-12 h-12 text-gray-400" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {tutorial.duration}
                </div>
                <div className="absolute top-2 left-2">
                  <Badge className="bg-purple-500">{tutorial.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                <CardDescription>{tutorial.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {tutorial.views} views
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
                <Button className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
