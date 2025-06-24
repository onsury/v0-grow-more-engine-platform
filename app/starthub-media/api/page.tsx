import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database } from "lucide-react"

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">StartHub Media API</h1>
          <p className="text-xl text-gray-300">Powerful APIs to integrate StartHub Media into your applications</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <Code className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Content API</CardTitle>
              <CardDescription>Manage and retrieve content programmatically</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500">GET</Badge>
                  <code className="text-sm">/api/v1/content</code>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-500">POST</Badge>
                  <code className="text-sm">/api/v1/content</code>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-orange-500">PUT</Badge>
                  <code className="text-sm">/api/v1/content/:id</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Analytics API</CardTitle>
              <CardDescription>Access detailed analytics and metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500">GET</Badge>
                  <code className="text-sm">/api/v1/analytics</code>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500">GET</Badge>
                  <code className="text-sm">/api/v1/analytics/views</code>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500">GET</Badge>
                  <code className="text-sm">/api/v1/analytics/engagement</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
