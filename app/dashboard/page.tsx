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
                  </div>
                </CardContent>
              </Card>

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
                </CardContent>
              </Card>
            </div>

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
                      </Button>
                    </div>
                  ))}
                </div>
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
      </div>
    </div>
  )
}
