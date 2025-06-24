"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Star,
  Building2,
  Users,
  TrendingUp,
  Heart,
  MessageSquare,
  Award,
  Clock,
  MapPin,
  Calendar,
  BarChart3,
  Target,
  Zap,
} from "lucide-react"
import { companies } from "@/data/real-companies"

export default function CompanyPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")

  // Find company by ID
  const company = companies.find((c) => c.id === params.id) || companies[0]

  // Mock data for comprehensive reviews
  const companyReviews = {
    overall: {
      rating: 4.6,
      totalReviews: 127,
      breakdown: {
        5: 68,
        4: 32,
        3: 18,
        2: 7,
        1: 2,
      },
    },
    products: company.products.map((product) => ({
      ...product,
      rating: (4.0 + Math.random() * 1.0).toFixed(1),
      reviews: Math.floor(Math.random() * 50) + 10,
      boomerVerdict: product.boomerVerdict || "Solid product that delivers on its promises.",
    })),
    founders: [
      {
        id: 1,
        name: company.founder,
        role: "Founder & CEO",
        rating: 4.7,
        reviews: 23,
        avatar: "/placeholder.svg?height=64&width=64",
        boomerVerdict: "Experienced leader who knows the business inside out.",
        experience: "25+ years",
        achievements: ["Built company from scratch", "Industry pioneer", "Trusted by customers"],
      },
    ],
    timeline: [
      { year: "1991", event: "Company founded", type: "milestone" },
      { year: "1995", event: "First major product launch", type: "product" },
      { year: "2000", event: "Expanded to national market", type: "growth" },
      { year: "2010", event: "International expansion", type: "growth" },
      { year: "2020", event: "Digital transformation", type: "innovation" },
      { year: "2024", event: "IPO preparation", type: "milestone" },
    ],
  }

  const sidebarItems = [
    { id: "overview", label: "Company Overview", icon: <Building2 className="w-4 h-4" /> },
    { id: "products", label: "Products Reviews", icon: <Star className="w-4 h-4" /> },
    { id: "founders", label: "Founders Reviews", icon: <Users className="w-4 h-4" /> },
    { id: "financials", label: "Financial Analysis", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "timeline", label: "Company Timeline", icon: <Clock className="w-4 h-4" /> },
    { id: "content", label: "Content Hub", icon: <MessageSquare className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Company Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-white rounded-xl p-4 flex items-center justify-center">
              <Building2 className="w-12 h-12 text-orange-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
              <p className="text-xl text-orange-100 mb-4">{company.description}</p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {company.location || "India"}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Founded {company.founded || "1991"}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {company.employees || "500+"} employees
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center mb-2">
                <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
                <span className="text-2xl font-bold">{companyReviews.overall.rating}</span>
              </div>
              <p className="text-orange-100">{companyReviews.overall.totalReviews} reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Company Sections</h3>
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === item.id
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <Button size="sm" className="w-full justify-start bg-orange-600 hover:bg-orange-700" asChild>
                    <Link href="/submit">
                      <Star className="w-4 h-4 mr-2" />
                      Write Review
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start" asChild>
                    <Link href={`/content-hubs/company/${company.id}`}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      View Content
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Follow Company
                  </Button>
                </div>
              </div>

              {/* Company Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Company Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Industry</span>
                    <span className="font-medium">{company.industry}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Years in Business</span>
                    <span className="font-medium">{company.yearsInBusiness}+ years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Products</span>
                    <span className="font-medium">{company.products.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Reviews</span>
                    <span className="font-medium">{companyReviews.overall.totalReviews}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Company Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Company Overview</CardTitle>
                    <CardDescription>Comprehensive analysis and boomer verdict</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">About {company.name}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {company.description} Founded by {company.founder}, this company has been a trusted name in
                          the {company.industry} industry for over {company.yearsInBusiness} years.
                        </p>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-semibold text-orange-700 mb-2">🧓 Boomer Verdict</h4>
                        <p className="text-gray-700">
                          This is a solid company that's been around long enough to prove itself. They don't chase every
                          new trend, they focus on what works. Real products, real customers, real results. The kind of
                          business that makes sense to people who've seen companies come and go.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-green-600">Stable</div>
                          <div className="text-sm text-gray-600">Financial Health</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-blue-600">Trusted</div>
                          <div className="text-sm text-gray-600">Market Position</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-purple-600">Focused</div>
                          <div className="text-sm text-gray-600">Business Strategy</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Rating Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle>Overall Rating Breakdown</CardTitle>
                    <CardDescription>What customers are saying</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-center mb-4">
                          <div className="text-4xl font-bold text-orange-600">{companyReviews.overall.rating}</div>
                          <div className="flex justify-center my-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-5 h-5 ${
                                  star <= Math.floor(companyReviews.overall.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-sm text-gray-600">
                            {companyReviews.overall.totalReviews} total reviews
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <span className="text-sm w-8">{rating}★</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-orange-500 h-2 rounded-full"
                                style={{
                                  width: `${(companyReviews.overall.breakdown[rating] / companyReviews.overall.totalReviews) * 100}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-8">
                              {companyReviews.overall.breakdown[rating]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === "products" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Reviews & Ratings</CardTitle>
                    <CardDescription>Honest reviews of all {company.name} products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {companyReviews.products.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`}>
                          <Card className="hover:shadow-lg transition-all border-2 hover:border-orange-300 group">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <h3 className="font-semibold group-hover:text-orange-600">{product.name}</h3>
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span className="ml-1 text-sm font-medium">{product.rating}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>
                              <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500 mb-4">
                                <p className="text-sm text-gray-700">
                                  <strong>Boomer Verdict:</strong> {product.boomerVerdict}
                                </p>
                              </div>
                              <div className="flex items-center justify-between">
                                <Badge variant="outline">{product.category}</Badge>
                                <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Founders Tab */}
            {activeTab === "founders" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Founder Reviews & Analysis</CardTitle>
                    <CardDescription>Leadership assessment and founder insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {companyReviews.founders.map((founder) => (
                      <div key={founder.id} className="space-y-6">
                        <div className="flex items-start space-x-6">
                          <Avatar className="w-20 h-20">
                            <AvatarImage src={founder.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {founder.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold">{founder.name}</h3>
                            <p className="text-gray-600 mb-2">{founder.role}</p>
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="flex items-center">
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <span className="ml-1 font-medium">{founder.rating}</span>
                              </div>
                              <span className="text-sm text-gray-500">{founder.reviews} leadership reviews</span>
                              <Badge variant="outline">{founder.experience}</Badge>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                              <h4 className="font-semibold text-orange-700 mb-2">🧓 Leadership Assessment</h4>
                              <p className="text-gray-700">{founder.boomerVerdict}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Key Achievements</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {founder.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                                <Award className="w-5 h-5 text-green-500" />
                                <span className="text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Financial Analysis Tab */}
            {activeTab === "financials" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Analysis</CardTitle>
                    <CardDescription>Business performance and financial health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">Strong</div>
                        <div className="text-sm text-gray-600">Revenue Growth</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">Stable</div>
                        <div className="text-sm text-gray-600">Market Position</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-600">Focused</div>
                        <div className="text-sm text-gray-600">Business Model</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-orange-600">Profitable</div>
                        <div className="text-sm text-gray-600">Operations</div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-orange-700 mb-3">🧓 Financial Boomer Analysis</h4>
                      <p className="text-gray-700 mb-4">
                        This company knows how to make money the old-fashioned way: by providing real value to real
                        customers. They're not burning through investor cash on fancy marketing campaigns or trying to
                        "disrupt" everything. They focus on profitable operations and sustainable growth.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-green-700 mb-2">✅ What They Do Right</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Consistent revenue streams</li>
                            <li>• Focus on profitability over growth at any cost</li>
                            <li>• Strong customer retention</li>
                            <li>• Conservative debt management</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-orange-700 mb-2">⚠️ Areas to Watch</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Digital transformation pace</li>
                            <li>• Competition from tech startups</li>
                            <li>• Market expansion opportunities</li>
                            <li>• Next generation leadership</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Timeline Tab */}
            {activeTab === "timeline" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Timeline</CardTitle>
                    <CardDescription>Key milestones and achievements over the years</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {companyReviews.timeline.map((event, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              event.type === "milestone"
                                ? "bg-orange-100 text-orange-600"
                                : event.type === "product"
                                  ? "bg-blue-100 text-blue-600"
                                  : event.type === "growth"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            {event.type === "milestone" ? (
                              <Award className="w-6 h-6" />
                            ) : event.type === "product" ? (
                              <Star className="w-6 h-6" />
                            ) : event.type === "growth" ? (
                              <TrendingUp className="w-6 h-6" />
                            ) : (
                              <Zap className="w-6 h-6" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold text-lg">{event.year}</span>
                              <Badge variant="outline" className="text-xs">
                                {event.type}
                              </Badge>
                            </div>
                            <p className="text-gray-700">{event.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Content Hub Tab */}
            {activeTab === "content" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Content Hub</CardTitle>
                    <CardDescription>Latest content and insights from {company.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Content Hub Integration</h3>
                      <p className="text-gray-600 mb-6">
                        Connect with {company.name}'s content across all StartHub Media hubs
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button variant="outline" asChild>
                          <Link href="/content-hubs/hrhub">
                            <Users className="w-4 h-4 mr-2" />
                            HR Hub
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/content-hubs/finhub">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Finance Hub
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/content-hubs/techhub">
                            <Zap className="w-4 h-4 mr-2" />
                            Tech Hub
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
