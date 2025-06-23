"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react"

export function CodeAnalysis() {
  const codeIssues = [
    {
      type: "warning",
      category: "Database",
      issue: "Environment variables may not be configured",
      file: "lib/db.ts",
      description: "POSTGRES_URL and other DB vars need to be set in production",
      priority: "high",
    },
    {
      type: "error",
      category: "Authentication",
      issue: "JWT_SECRET not configured",
      file: "lib/auth.ts",
      description: "Required for user sessions to work",
      priority: "critical",
    },
    {
      type: "warning",
      category: "Images",
      issue: "Image paths may be broken",
      file: "Multiple files",
      description: "Company logos and product images need to be verified",
      priority: "medium",
    },
    {
      type: "info",
      category: "API Routes",
      issue: "API endpoints created but untested",
      file: "app/api/*",
      description: "All API routes need testing with real data",
      priority: "high",
    },
    {
      type: "warning",
      category: "Forms",
      issue: "Form submissions may not work",
      file: "components/homepage-auth.tsx",
      description: "Login/signup forms need backend integration testing",
      priority: "high",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case "info":
        return <Info className="w-5 h-5 text-blue-500" />
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "destructive"
      case "high":
        return "secondary"
      case "medium":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Code Analysis Report</CardTitle>
          <p className="text-sm text-gray-600">
            Based on code review, here are potential issues that could affect your MVP launch:
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {codeIssues.map((issue, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                {getIcon(issue.type)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{issue.issue}</span>
                    <Badge variant={getPriorityColor(issue.priority) as any}>{issue.priority}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">{issue.category}</span>
                    <span className="font-mono">{issue.file}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
