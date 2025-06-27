<<<<<<< HEAD
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Star,
  Building2,
  Users,
  TrendingUp,
  Eye,
  Heart,
  MessageSquare,
  Award,
  Clock,
  ArrowRight,
  Plus,
} from "lucide-react"
import { companies } from "@/data/real-companies"

export default function GrowMoreEngineDashboard() {
  const [activeFilter, setActiveFilter] = useState("all")

  // Mock dashboard data
  const dashboardStats = {
    totalReviews: 127,
    totalCompanies: 6,
    totalFounders: 8,
    totalViews: 45672,
    avgRating: 4.3,
    monthlyGrowth: 23,
  }

  const recentReviews = [
    {
      id: 1,
      title: "K7 Total Security - Comprehensive Protection",
      company: "K7 Computing",
      rating: 4.5,
      type: "product",
      views: 2341,
      date: "2 days ago",
      thumbnail: "/images/k7-total-security-logo.png",
    },
    {
      id: 2,
      title: "Milky Mist IPO Analysis",
      company: "Milky Mist",
      rating: 4.8,
      type: "company",
      views: 3567,
      date: "3 days ago",
      thumbnail: "/images/milky-mist-logo.png",
    },
    {
      id: 3,
      title: "Jammi Ayurveda Founder Story",
      company: "Jammi Ayurveda",
      rating: 4.6,
      type: "founder",
      views: 1892,
      date: "5 days ago",
      thumbnail: "/images/jammi-founder-logo.png",
    },
  ]

  const topCompanies = companies.slice(0, 6).map((company) => ({
    ...company,
    rating: (4.0 + Math.random() * 1.0).toFixed(1),
    reviews: Math.floor(Math.random() * 20) + 5,
    views: Math.floor(Math.random() * 5000) + 1000,
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">GrowMoreEngine Dashboard</h1>
              <p className="text-orange-100">Comprehensive platform overview and analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/submit">
                  <Plus className="w-4 h-4 mr-2" />
                  Submit Review
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Platform Navigation</h3>
              <nav className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center px-3 py-2 text-sm font-medium text-orange-600 bg-orange-50 rounded-md"
                >
                  <BarChart3 className="w-4 h-4 mr-3" />
                  Dashboard Overview
                </Link>
                <Link
                  href="/products"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                >
                  <Star className="w-4 h-4 mr-3" />
                  Products Reviews
                </Link>
                <Link
                  href="/companies"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                >
                  <Building2 className="w-4 h-4 mr-3" />
                  Companies Reviews
                </Link>
                <Link
                  href="/founders"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                >
                  <Users className="w-4 h-4 mr-3" />
                  Founders Reviews
                </Link>
                <Link
                  href="/featured-reviews"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                >
                  <Award className="w-4 h-4 mr-3" />
                  Featured Reviews
                </Link>
                <Link
                  href="/ads"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                >
                  <TrendingUp className="w-4 h-4 mr-3" />
                  Sponsored Content
                </Link>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <Button size="sm" className="w-full justify-start bg-orange-600 hover:bg-orange-700" asChild>
                    <Link href="/submit">
                      <Plus className="w-4 h-4 mr-2" />
                      Submit Review
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start" asChild>
                    <Link href="/contact">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Star className="h-8 w-8 text-orange-500" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{dashboardStats.totalReviews}</p>
                      <p className="text-sm text-gray-600">Total Reviews</p>
                    </div>
=======
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  BookOpen,
  TrendingUp,
  Award,
  Clock,
  Eye,
  MessageSquare,
  Target,
  BarChart3,
  Users,
  Zap,
  CheckCircle,
  Calendar,
  Bookmark,
  ThumbsUp,
  Share2,
} from "lucide-react"
import { companies } from "@/data/real-companies"
import { getFeaturedContent, getTrendingContent, getLatestContent } from "@/data/sample-content"

export default function GrowMoreEngineDashboard() {
  const featuredContent = getFeaturedContent().slice(0, 4)
  const trendingContent = getTrendingContent().slice(0, 4)
  const latestContent = getLatestContent().slice(0, 4)
  const recentlyViewed = companies.flatMap((c) => c.products).slice(0, 3)

  // Mock user data
  const userStats = {
    reviewsRead: 47,
    companiesExplored: 12,
    bookmarkedProducts: 8,
    achievementPoints: 1250,
    learningStreak: 7,
    totalTimeSpent: "24h 30m",
  }

  const achievements = [
    { id: 1, title: "First Review Reader", description: "Read your first product review", completed: true, points: 50 },
    { id: 2, title: "Company Explorer", description: "Explore 5 different companies", completed: true, points: 100 },
    { id: 3, title: "Boomer Wisdom Seeker", description: "Read 25 reviews", completed: true, points: 200 },
    { id: 4, title: "Trust Builder", description: "Bookmark 10 trusted products", completed: false, points: 150 },
    { id: 5, title: "Knowledge Collector", description: "Read 50 reviews", completed: false, points: 300 },
    { id: 6, title: "Founder Fanatic", description: "Learn about 10 founders", completed: false, points: 250 },
  ]

  const completedAchievements = achievements.filter((a) => a.completed)
  const nextAchievements = achievements.filter((a) => !a.completed).slice(0, 2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Your Learning Dashboard
              </h1>
              <p className="text-gray-600 mt-2">
                Track your journey through authentic product reviews and company insights
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                <Zap className="w-4 h-4 mr-1" />
                {userStats.achievementPoints} Points
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Calendar className="w-4 h-4 mr-1" />
                {userStats.learningStreak} Day Streak
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{userStats.reviewsRead}</div>
              <div className="text-sm text-gray-600">Reviews Read</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{userStats.companiesExplored}</div>
              <div className="text-sm text-gray-600">Companies</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Bookmark className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{userStats.bookmarkedProducts}</div>
              <div className="text-sm text-gray-600">Bookmarks</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{completedAchievements.length}</div>
              <div className="text-sm text-gray-600">Achievements</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{userStats.totalTimeSpent}</div>
              <div className="text-sm text-gray-600">Time Spent</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{userStats.learningStreak}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Learning Progress */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-orange-500" />
                    Learning Progress
                  </CardTitle>
                  <CardDescription>Your journey through boomer wisdom</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Reviews Read</span>
                      <span>{userStats.reviewsRead}/50</span>
                    </div>
                    <Progress value={(userStats.reviewsRead / 50) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Companies Explored</span>
                      <span>{userStats.companiesExplored}/20</span>
                    </div>
                    <Progress value={(userStats.companiesExplored / 20) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Achievement Points</span>
                      <span>{userStats.achievementPoints}/2000</span>
                    </div>
                    <Progress value={(userStats.achievementPoints / 2000) * 100} className="h-2" />
>>>>>>> fe3c7b5 (Initial commit with Baserow integration)
                  </div>
                </CardContent>
              </Card>

<<<<<<< HEAD
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Building2 className="h-8 w-8 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{dashboardStats.totalCompanies}</p>
                      <p className="text-sm text-gray-600">Companies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-green-500" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{dashboardStats.totalFounders}</p>
                      <p className="text-sm text-gray-600">Founders</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Eye className="h-8 w-8 text-purple-500" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{dashboardStats.totalViews.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Total Views</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Heart className="h-8 w-8 text-red-500" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{dashboardStats.avgRating}</p>
                      <p className="text-sm text-gray-600">Avg Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-emerald-500" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">+{dashboardStats.monthlyGrowth}%</p>
                      <p className="text-sm text-gray-600">Monthly Growth</p>
                    </div>
                  </div>
=======
              {/* Next Achievements */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-500" />
                    Next Achievements
                  </CardTitle>
                  <CardDescription>Keep learning to unlock these rewards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {nextAchievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        +{achievement.points}
                      </Badge>
                    </div>
                  ))}
>>>>>>> fe3c7b5 (Initial commit with Baserow integration)
                </CardContent>
              </Card>
            </div>

<<<<<<< HEAD
            {/* Recent Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>Latest reviews and ratings from our platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Image
                        src={review.thumbnail || "/placeholder.svg"}
                        alt={review.company}
                        width={48}
                        height={48}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{review.title}</h4>
                        <p className="text-sm text-gray-600">{review.company}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="ml-1 text-sm font-medium">{review.rating}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {review.type}
                          </Badge>
                          <div className="flex items-center text-xs text-gray-500">
                            <Eye className="w-3 h-3 mr-1" />
                            {review.views}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="w-4 h-4" />
=======
            {/* Recently Viewed */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-500" />
                  Recently Viewed Products
                </CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recentlyViewed.map((product) => (
                    <div key={product.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs ml-1">{product.rating}</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{product.name}</h4>
                      <p className="text-xs text-gray-600 mb-3">{product.shortDescription}</p>
                      <Button asChild size="sm" className="w-full text-xs">
                        <Link href={`/products/${product.id}`}>Continue Reading</Link>
>>>>>>> fe3c7b5 (Initial commit with Baserow integration)
                      </Button>
                    </div>
                  ))}
                </div>
<<<<<<< HEAD
                <div className="mt-4 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/featured-reviews">View All Reviews</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Top Companies */}
            <Card>
              <CardHeader>
                <CardTitle>Top Rated Companies</CardTitle>
                <CardDescription>Companies with highest ratings and engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {topCompanies.map((company) => (
                    <Link key={company.id} href={`/companies/${company.id}`}>
                      <div className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium group-hover:text-orange-600">{company.name}</h4>
                          <p className="text-sm text-gray-600">{company.industry}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="ml-1 text-sm font-medium">{company.rating}</span>
                            </div>
                            <span className="text-xs text-gray-500">{company.reviews} reviews</span>
                            <div className="flex items-center text-xs text-gray-500">
                              <Eye className="w-3 h-3 mr-1" />
                              {company.views}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600" />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/companies">View All Companies</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Platform Features */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Features</CardTitle>
                <CardDescription>Explore all GrowMoreEngine capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/products" className="group">
                    <div className="p-4 border rounded-lg hover:bg-orange-50 hover:border-orange-200 transition-colors">
                      <Star className="w-8 h-8 text-orange-500 mb-3" />
                      <h4 className="font-medium group-hover:text-orange-600">Product Reviews</h4>
                      <p className="text-sm text-gray-600 mt-1">Honest reviews of products with boomer wisdom</p>
                    </div>
                  </Link>
                  <Link href="/companies" className="group">
                    <div className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors">
                      <Building2 className="w-8 h-8 text-blue-500 mb-3" />
                      <h4 className="font-medium group-hover:text-blue-600">Company Analysis</h4>
                      <p className="text-sm text-gray-600 mt-1">Deep dive into company performance and strategy</p>
                    </div>
                  </Link>
                  <Link href="/founders" className="group">
                    <div className="p-4 border rounded-lg hover:bg-green-50 hover:border-green-200 transition-colors">
                      <Users className="w-8 h-8 text-green-500 mb-3" />
                      <h4 className="font-medium group-hover:text-green-600">Founder Stories</h4>
                      <p className="text-sm text-gray-600 mt-1">Insights from successful entrepreneurs</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
=======
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Featured Content */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Star className="w-5 h-5 mr-2 text-orange-500" />
                    Featured
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {featuredContent.map((content) => (
                    <div
                      key={content.id}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {content.hub}
                        </Badge>
                        <span className="text-xs text-gray-500">{content.views}</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{content.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{content.company_name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{content.posted}</span>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-3 h-3 text-gray-400" />
                          <Share2 className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Trending Content */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
                    Trending
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {trendingContent.map((content) => (
                    <div
                      key={content.id}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {content.hub}
                        </Badge>
                        <span className="text-xs text-gray-500">{content.views}</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{content.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{content.company_name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{content.posted}</span>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-3 h-3 text-gray-400" />
                          <Share2 className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Latest Content */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Clock className="w-5 h-5 mr-2 text-blue-500" />
                    Latest
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {latestContent.map((content) => (
                    <div
                      key={content.id}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {content.hub}
                        </Badge>
                        <span className="text-xs text-gray-500">{content.views}</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{content.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{content.company_name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{content.posted}</span>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-3 h-3 text-gray-400" />
                          <Share2 className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Bookmarks Tab */}
          <TabsContent value="bookmarks" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bookmark className="w-5 h-5 mr-2 text-pink-500" />
                  Your Bookmarked Products
                </CardTitle>
                <CardDescription>Products you've saved for later review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentlyViewed.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {product.category}
                          </Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm ml-1">{product.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-base">{product.name}</CardTitle>
                        <CardDescription className="text-sm">{product.shortDescription}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-green-600">₹{product.price}</span>
                          <Button asChild size="sm">
                            <Link href={`/products/${product.id}`}>Read Review</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Completed Achievements */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Completed Achievements
                  </CardTitle>
                  <CardDescription>Your learning milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {completedAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        +{achievement.points}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Achievements */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-orange-500" />
                    Upcoming Achievements
                  </CardTitle>
                  <CardDescription>Keep learning to unlock these</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {nextAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center opacity-60">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        +{achievement.points}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Learning Analytics */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
                    Learning Analytics
                  </CardTitle>
                  <CardDescription>Your learning patterns and insights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Reading Activity</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">This Week</span>
                        <span className="text-sm font-semibold">12 reviews</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm">This Month</span>
                        <span className="text-sm font-semibold">47 reviews</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Favorite Categories</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Technology</span>
                        <span>35%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Healthcare</span>
                        <span>28%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Food & Dairy</span>
                        <span>22%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Environment</span>
                        <span>15%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning Goals */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-500" />
                    Learning Goals
                  </CardTitle>
                  <CardDescription>Set and track your learning objectives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-sm mb-2">Monthly Goal: Read 50 Reviews</h4>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>47/50</span>
                    </div>
                    <Progress value={94} className="h-2 mb-2" />
                    <p className="text-xs text-gray-600">3 more reviews to reach your goal!</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-sm mb-2">Explore All Companies</h4>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>5/6</span>
                    </div>
                    <Progress value={83} className="h-2 mb-2" />
                    <p className="text-xs text-gray-600">Visit Music Temple to complete!</p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-sm mb-2">7-Day Learning Streak</h4>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Current Streak</span>
                      <span>7 days</span>
                    </div>
                    <Progress value={100} className="h-2 mb-2" />
                    <p className="text-xs text-gray-600">Great job! Keep it up!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="bg-white/80 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump to your favorite sections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link href="/products">
                  <BookOpen className="w-6 h-6" />
                  <span>Browse Reviews</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link href="/companies">
                  <Users className="w-6 h-6" />
                  <span>Explore Companies</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link href="/founders">
                  <Award className="w-6 h-6" />
                  <span>Meet Founders</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link href="/content-hubs">
                  <MessageSquare className="w-6 h-6" />
                  <span>Content Hubs</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
>>>>>>> fe3c7b5 (Initial commit with Baserow integration)
      </div>
    </div>
  )
}
