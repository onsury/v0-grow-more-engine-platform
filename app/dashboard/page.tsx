"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Clock, Bookmark, Trophy, TrendingUp, Play, Settings, Target, Crown, Zap } from "lucide-react"
import Link from "next/link"

// Mock data for dashboard
const mockDashboardData = {
  stats: {
    contentViewed: 47,
    hoursSpent: 23.5,
    bookmarks: 12,
    achievements: 8,
  },
  weeklyGoal: {
    target: 10,
    completed: 7,
    streak: 5,
  },
  recentActivity: [
    {
      id: 1,
      title: "Digital Marketing Strategies for Ayurvedic Products",
      type: "video",
      progress: 75,
      thumbnail: "/placeholder.svg?height=80&width=120",
      duration: "15:30",
      company: "Jammi Ayurveda",
    },
    {
      id: 2,
      title: "Financial Growth Strategies: The Milky Mist Success Story",
      type: "article",
      progress: 100,
      thumbnail: "/placeholder.svg?height=80&width=120",
      readTime: "8 min read",
      company: "Milky Mist",
    },
    {
      id: 3,
      title: "HR Best Practices in Tech Companies",
      type: "podcast",
      progress: 45,
      thumbnail: "/placeholder.svg?height=80&width=120",
      duration: "32:15",
      company: "K7 Computing",
    },
  ],
  savedContent: [
    {
      id: 4,
      title: "Sales Techniques That Transformed Music Temple's Business",
      type: "video",
      thumbnail: "/placeholder.svg?height=80&width=120",
      company: "Music Temple",
      savedDate: "2 days ago",
    },
    {
      id: 5,
      title: "Retail Distribution: How Watsan Expanded Their Market Reach",
      type: "case-study",
      thumbnail: "/placeholder.svg?height=80&width=120",
      company: "Watsan Envirotech",
      savedDate: "1 week ago",
    },
  ],
  recommendations: [
    {
      id: 6,
      title: "Cloud Infrastructure: Milky Mist's Digital Transformation",
      type: "video",
      thumbnail: "/placeholder.svg?height=80&width=120",
      company: "Milky Mist",
      reason: "Based on your interest in Digital Transformation",
    },
    {
      id: 7,
      title: "Employee Wellness Programs at Jammi Ayurveda",
      type: "article",
      thumbnail: "/placeholder.svg?height=80&width=120",
      company: "Jammi Ayurveda",
      reason: "Popular in HR Hub",
    },
  ],
  achievements: [
    { id: 1, name: "First Steps", description: "Completed your first content", icon: "🎯", unlocked: true },
    { id: 2, name: "Bookworm", description: "Saved 10 pieces of content", icon: "📚", unlocked: true },
    { id: 3, name: "Streak Master", description: "5-day learning streak", icon: "🔥", unlocked: true },
    { id: 4, name: "Explorer", description: "Visited all 6 content hubs", icon: "🗺️", unlocked: false },
  ],
  insights: {
    favoriteHub: "MarketingHub",
    favoriteContentType: "Videos",
    weeklyMinutes: 180,
    monthlyMinutes: 720,
  },
}

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [dashboardData, setDashboardData] = useState(mockDashboardData)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  const { stats, weeklyGoal, recentActivity, savedContent, recommendations, achievements, insights } = dashboardData

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="text-lg font-semibold">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name.split(" ")[0]}! 👋</h1>
                <p className="text-gray-600 flex items-center mt-1">
                  <Zap className="h-4 w-4 mr-1 text-orange-500" />
                  {weeklyGoal.streak} day learning streak
                </p>
              </div>
            </div>
            <Link href="/dashboard/settings">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">{stats.contentViewed}</p>
                      <p className="text-sm text-gray-600">Content Viewed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">{stats.hoursSpent}h</p>
                      <p className="text-sm text-gray-600">Time Spent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Bookmark className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold">{stats.bookmarks}</p>
                      <p className="text-sm text-gray-600">Bookmarks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-2xl font-bold">{stats.achievements}</p>
                      <p className="text-sm text-gray-600">Achievements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Weekly Learning Goal
                </CardTitle>
                <CardDescription>
                  {weeklyGoal.completed} of {weeklyGoal.target} content pieces completed this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{Math.round((weeklyGoal.completed / weeklyGoal.target) * 100)}%</span>
                  </div>
                  <Progress value={(weeklyGoal.completed / weeklyGoal.target) * 100} className="h-2" />
                  <p className="text-sm text-gray-600">
                    Great job! You're {weeklyGoal.completed >= weeklyGoal.target ? "ahead of" : "on track with"} your
                    weekly goal.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Content Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Your Learning Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recent" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                    <TabsTrigger value="saved">Saved Content</TabsTrigger>
                    <TabsTrigger value="recommendations">For You</TabsTrigger>
                  </TabsList>

                  <TabsContent value="recent" className="space-y-4">
                    {recentActivity.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          className="w-20 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.company}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Progress value={item.progress} className="h-1 flex-1" />
                            <span className="text-xs text-gray-500">{item.progress}%</span>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="saved" className="space-y-4">
                    {savedContent.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          className="w-20 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.company}</p>
                          <p className="text-xs text-gray-500">Saved {item.savedDate}</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <div className="text-center py-4">
                      <Link href="/dashboard/bookmarks">
                        <Button variant="outline">View All Bookmarks</Button>
                      </Link>
                    </div>
                  </TabsContent>

                  <TabsContent value="recommendations" className="space-y-4">
                    {recommendations.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          className="w-20 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.company}</p>
                          <p className="text-xs text-blue-600">{item.reason}</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements
                  .filter((a) => a.unlocked)
                  .slice(0, 3)
                  .map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <p className="font-medium text-sm">{achievement.name}</p>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                <Button variant="outline" size="sm" className="w-full mt-3">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/content-hubs">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Explore Content Hubs
                  </Button>
                </Link>
                <Link href="/dashboard/bookmarks">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Bookmark className="h-4 w-4 mr-2" />
                    My Bookmarks
                  </Button>
                </Link>
                <Link href="/companies">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Browse Companies
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Learning Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learning Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-medium">{insights.weeklyMinutes} min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Month</span>
                  <span className="font-medium">{insights.monthlyMinutes} min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Favorite Hub</span>
                  <Badge variant="secondary">{insights.favoriteHub}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Preferred Type</span>
                  <Badge variant="secondary">{insights.favoriteContentType}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Prompt */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="p-4">
                <div className="text-center">
                  <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Upgrade to Pro</h3>
                  <p className="text-xs text-gray-600 mb-3">
                    Unlock premium content, advanced analytics, and exclusive features
                  </p>
                  <Button size="sm" className="w-full">
                    Upgrade Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
