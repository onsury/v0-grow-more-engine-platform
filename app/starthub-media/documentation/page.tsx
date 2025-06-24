import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Video, ArrowRight } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">StartHub Media Documentation</h1>
          <p className="text-xl text-blue-100">
            Complete guides, tutorials, and resources to help you get the most out of our platform
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Quick start guide for new users</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/starthub-media/documentation/getting-started">
                  View Guide <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Complete API documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/starthub-media/api">
                  View API Docs <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Video className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Step-by-step video guides</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/starthub-media/videos">
                  Watch Videos <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
