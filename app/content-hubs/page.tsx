"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import {
  Search,
  Users,
  Cpu,
  Megaphone,
  Store,
  Filter,
  Building2,
  Briefcase,
  TrendingUp,
  DollarSign,
} from "lucide-react"
import { contentApi, hubApi, companyApi } from "@/lib/api"
import ContentCard from "@/components/content-card"

// Enhanced hub definitions with more distinctive colors and better icons
const hubIcons = {
  hrhub: {
    icon: <Users className="h-6 w-6" />,
    color: "bg-blue-600",
    gradient: "from-blue-500 to-blue-700",
    lightBg: "bg-blue-50",
    textColor: "text-blue-700",
  },
  finhub: {
    icon: <DollarSign className="h-6 w-6" />,
    color: "bg-emerald-600",
    gradient: "from-emerald-500 to-emerald-700",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  techhub: {
    icon: <Cpu className="h-6 w-6" />,
    color: "bg-purple-600",
    gradient: "from-purple-500 to-purple-700",
    lightBg: "bg-purple-50",
    textColor: "text-purple-700",
  },
  marketinghub: {
    icon: <Megaphone className="h-6 w-6" />,
    color: "bg-orange-600",
    gradient: "from-orange-500 to-orange-700",
    lightBg: "bg-orange-50",
    textColor: "text-orange-700",
  },
  saleshub: {
    icon: <TrendingUp className="h-6 w-6" />,
    color: "bg-red-600",
    gradient: "from-red-500 to-red-700",
    lightBg: "bg-red-50",
    textColor: "text-red-700",
  },
  retailhub: {
    icon: <Store className="h-6 w-6" />,
    color: "bg-amber-600",
    gradient: "from-amber-500 to-amber-700",
    lightBg: "bg-amber-50",
    textColor: "text-amber-700",
  },
}

export default function ContentHubsPage() {
  const [activeFilter, setActiveFilter] = useState({
    industry: "all",
    company: "all",
    hub: "all",
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [hubs, setHubs] = useState([])
  const [industries, setIndustries] = useState([])
  const [companies, setCompanies] = useState([])
  const [featuredContent, setFeaturedContent] = useState([])
  const [trendingContent, setTrendingContent] = useState([])
  const [latestContent, setLatestContent] = useState([])
  const { toast } = useToast()

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true)
      try {
        // Fetch hubs
        const hubsResponse = await hubApi.getAllHubs()
        if (hubsResponse.success && hubsResponse.data) {
          setHubs(hubsResponse.data)
        } else {
          // Set comprehensive default hubs with all six hubs
          setHubs([
            {
              id: 1,
              name: "HR Hub",
              slug: "hrhub",
              description: "Human Resources insights, talent management, and workplace culture strategies",
              content_count: 28,
            },
            {
              id: 2,
              name: "Finance Hub",
              slug: "finhub",
              description: "Financial planning, investment strategies, and business growth insights",
              content_count: 22,
            },
            {
              id: 3,
              name: "Tech Hub",
              slug: "techhub",
              description: "Technology innovations, digital transformation, and IT solutions",
              content_count: 35,
            },
            {
              id: 4,
              name: "Marketing Hub",
              slug: "marketinghub",
              description: "Marketing strategies, brand building, and customer engagement tactics",
              content_count: 31,
            },
            {
              id: 5,
              name: "Sales Hub",
              slug: "saleshub",
              description: "Sales techniques, customer acquisition, and revenue growth strategies",
              content_count: 26,
            },
            {
              id: 6,
              name: "Retail Hub",
              slug: "retailhub",
              description: "Retail operations, customer experience, and omnichannel strategies",
              content_count: 19,
            },
          ])
        }

        // Fetch companies
        const companiesResponse = await companyApi.getAllCompanies()
        if (companiesResponse.success && companiesResponse.data) {
          setCompanies(companiesResponse.data)
        } else {
          // Set default companies if API fails
          setCompanies([
            {
              id: 1,
              name: "K7 Computing",
              slug: "k7-computing",
              logo_url: "/images/k7-security-logo.png",
              content_count: 8,
            },
            {
              id: 2,
              name: "Jammi Ayurveda",
              slug: "jammi",
              logo_url: "/images/jammi-founder-logo.png",
              content_count: 6,
            },
            { id: 3, name: "Watsan Envirotech", slug: "watsan", logo_url: "/images/watsan-logo.png", content_count: 5 },
            {
              id: 4,
              name: "Milky Mist",
              slug: "milky-mist",
              logo_url: "/images/milky-mist-logo.png",
              content_count: 12,
            },
            {
              id: 5,
              name: "Organic Shandy",
              slug: "organic-shandy",
              logo_url: "/placeholder.svg?height=64&width=64",
              content_count: 9,
            },
            {
              id: 6,
              name: "Music Temple",
              slug: "music-temple",
              logo_url: "/images/music-temple-logo.png",
              content_count: 4,
            },
          ])
        }

        // Set industries (static list)
        setIndustries([
          { id: "all", name: "All Industries" },
          { id: "technology", name: "Technology" },
          { id: "healthcare", name: "Healthcare" },
          { id: "finance", name: "Finance" },
          { id: "retail", name: "Retail" },
          { id: "manufacturing", name: "Manufacturing" },
          { id: "food", name: "Food & Agriculture" },
          { id: "education", name: "Education" },
        ])

        // Fetch featured content
        const featuredResponse = await contentApi.getAllContent({ featured: true, limit: 6 })
        if (featuredResponse.success && featuredResponse.data) {
          setFeaturedContent(featuredResponse.data)
        } else {
          // Set mock featured content
          setFeaturedContent([
            {
              id: 1,
              title: "K7 Total Security: Complete Cybersecurity Solution",
              content_type: "video",
              thumbnail_url: "/images/k7-total-security-logo.png",
              duration: "12:45",
              views: 2500,
              posted: "2 days ago",
              hub_id: 3,
              company_id: 1,
              industry: "technology",
            },
            {
              id: 2,
              title: "Jammi Ayurveda: Traditional Medicine for Modern Health",
              content_type: "article",
              thumbnail_url: "/images/jammi-livercure-product.png",
              views: 1800,
              posted: "1 week ago",
              hub_id: 1,
              company_id: 2,
              industry: "healthcare",
            },
            {
              id: 3,
              title: "Milky Mist IPO: Dairy Industry Growth Story",
              content_type: "case-study",
              thumbnail_url: "/images/milky-mist-complete-range.png",
              views: 3200,
              posted: "3 days ago",
              hub_id: 2,
              company_id: 4,
              industry: "food",
            },
          ])
        }

        // Fetch trending content
        const trendingResponse = await contentApi.getAllContent({ sort: "views", order: "desc", limit: 6 })
        if (trendingResponse.success && trendingResponse.data) {
          setTrendingContent(trendingResponse.data)
        } else {
          // Set mock trending content
          setTrendingContent([
            {
              id: 4,
              title: "Watsan Water Purification Technology",
              content_type: "video",
              thumbnail_url: "/images/watsan-household-purifier.png",
              duration: "8:30",
              views: 4500,
              posted: "5 days ago",
              hub_id: 3,
              company_id: 3,
              industry: "manufacturing",
            },
            {
              id: 5,
              title: "Organic Shandy: Farm to Table Success",
              content_type: "podcast",
              thumbnail_url: "/placeholder.svg?height=180&width=320",
              views: 3800,
              posted: "1 week ago",
              hub_id: 6,
              company_id: 5,
              industry: "food",
            },
          ])
        }

        // Fetch latest content
        const latestResponse = await contentApi.getAllContent({ sort: "created_at", order: "desc", limit: 6 })
        if (latestResponse.success && latestResponse.data) {
          setLatestContent(latestResponse.data)
        } else {
          // Set mock latest content
          setLatestContent([
            {
              id: 6,
              title: "Music Temple: Preserving Indian Classical Music",
              content_type: "article",
              thumbnail_url: "/images/ramesh-vinayakam-presentation.png",
              views: 1200,
              posted: "1 day ago",
              hub_id: 1,
              company_id: 6,
              industry: "education",
            },
            {
              id: 7,
              title: "K7 MobiTrack: Mobile Security Innovation",
              content_type: "video",
              thumbnail_url: "/images/k7-mobitrack-android-logo.png",
              duration: "15:20",
              views: 2100,
              posted: "2 days ago",
              hub_id: 3,
              company_id: 1,
              industry: "technology",
            },
          ])
        }
      } catch (error) {
        console.error("Error fetching initial data:", error)
        toast({
          title: "Error",
          description: "Failed to load content. Using offline data.",
          variant: "destructive",
        })

        // Set fallback data even on error
        setHubs([
          { id: 1, name: "HR Hub", slug: "hrhub", description: "Human Resources insights", content_count: 28 },
          { id: 2, name: "Finance Hub", slug: "finhub", description: "Financial strategies", content_count: 22 },
          { id: 3, name: "Tech Hub", slug: "techhub", description: "Technology innovations", content_count: 35 },
          {
            id: 4,
            name: "Marketing Hub",
            slug: "marketinghub",
            description: "Marketing strategies",
            content_count: 31,
          },
          { id: 5, name: "Sales Hub", slug: "saleshub", description: "Sales techniques", content_count: 26 },
          { id: 6, name: "Retail Hub", slug: "retailhub", description: "Retail operations", content_count: 19 },
        ])
        setCompanies([
          {
            id: 1,
            name: "K7 Computing",
            slug: "k7-computing",
            logo_url: "/images/k7-security-logo.png",
            content_count: 8,
          },
        ])
        setFeaturedContent([])
        setTrendingContent([])
        setLatestContent([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchInitialData()
  }, [toast])

  // Fetch filtered content when filters change
  useEffect(() => {
    const fetchFilteredContent = async () => {
      if (isLoading) return // Skip if initial load is still happening

      setIsLoading(true)
      try {
        const params = {
          ...(activeFilter.industry !== "all" && { industry: activeFilter.industry }),
          ...(activeFilter.company !== "all" && { company_id: activeFilter.company }),
          ...(activeFilter.hub !== "all" && { hub_id: activeFilter.hub }),
          ...(searchQuery && { search: searchQuery }),
        }

        // Fetch featured content with filters
        const featuredResponse = await contentApi.getAllContent({ ...params, featured: true, limit: 6 })
        if (featuredResponse.success) {
          setFeaturedContent(featuredResponse.data)
        }

        // Fetch trending content with filters
        const trendingResponse = await contentApi.getAllContent({
          ...params,
          sort: "views",
          order: "desc",
          limit: 6,
        })
        if (trendingResponse.success) {
          setTrendingContent(trendingResponse.data)
        }

        // Fetch latest content with filters
        const latestResponse = await contentApi.getAllContent({
          ...params,
          sort: "created_at",
          order: "desc",
          limit: 6,
        })
        if (latestResponse.success) {
          setLatestContent(latestResponse.data)
        }
      } catch (error) {
        console.error("Error fetching filtered content:", error)
        toast({
          title: "Error",
          description: "Failed to apply filters. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    // Only fetch if not the initial load
    if (!isLoading) {
      fetchFilteredContent()
    }
  }, [activeFilter, searchQuery, toast])

  const handleSearch = (e) => {
    e.preventDefault()
    // The search query state is already set, and the useEffect will trigger the search
  }

  // Filter content based on active filters
  const filterContent = (content) => {
    return content.filter(
      (item) =>
        (activeFilter.industry === "all" || item.industry === activeFilter.industry) &&
        (activeFilter.company === "all" || item.company_id.toString() === activeFilter.company) &&
        (activeFilter.hub === "all" || item.hub_id.toString() === activeFilter.hub),
    )
  }

  const filteredFeatured = filterContent(featuredContent)
  const filteredTrending = filterContent(trendingContent)
  const filteredLatest = filterContent(latestContent)

  // Get hub info by ID
  const getHubInfo = (hubId) => {
    const hub = hubs.find((h) => h.id.toString() === hubId.toString())
    if (!hub) return null

    const hubIconInfo = hubIcons[hub.slug] || {
      icon: <Store className="h-6 w-6" />,
      color: "bg-gray-500",
      gradient: "from-gray-400 to-gray-600",
      lightBg: "bg-gray-50",
      textColor: "text-gray-700",
    }
    return {
      ...hub,
      ...hubIconInfo,
    }
  }

  // Get company by ID
  const getCompany = (companyId) => {
    return companies.find((c) => c.id.toString() === companyId.toString())
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Content Hubs</h1>
              <p className="text-lg md:text-xl mb-6 text-orange-100">
                Discover industry-specific insights, strategies, and success stories from India's most trusted
                companies.
              </p>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search across all content hubs..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {isLoading
                ? // Skeleton loaders for hubs
                  Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="rounded-lg p-4">
                        <Skeleton className="h-12 w-12 rounded-full mb-3" />
                        <Skeleton className="h-6 w-24 mb-2" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    ))
                : // Show all 6 hubs in hero section
                  hubs
                    .slice(0, 6)
                    .map((hub) => {
                      const hubInfo = hubIcons[hub.slug] || {
                        icon: <Store className="h-6 w-6" />,
                        color: "bg-gray-500",
                        gradient: "from-gray-400 to-gray-600",
                      }
                      return (
                        <Link href={`/content-hubs/${hub.slug}`} key={hub.id} className="group">
                          <div
                            className={`bg-gradient-to-br ${hubInfo.gradient} group-hover:scale-105 rounded-xl p-4 text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                          >
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-white/30 transition-all">
                              {hubInfo.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-1">{hub.name}</h3>
                            <p className="text-sm text-white/90">{hub.content_count || 0} resources</p>
                          </div>
                        </Link>
                      )
                    })}
            </div>
          </div>
        </div>
      </section>

      {/* All Hubs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore All Content Hubs</h2>
          {isLoading ? (
            // Skeleton loaders for hub cards
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-2 w-full">
                      <Skeleton className="h-2 w-full" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="flex-1">
                          <Skeleton className="h-6 w-32 mb-2" />
                          <Skeleton className="h-4 w-full mb-4" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <div className="flex items-center justify-between">
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hubs.map((hub) => {
                const hubInfo = hubIcons[hub.slug] || {
                  icon: <Store className="h-6 w-6" />,
                  color: "bg-gray-500",
                  gradient: "from-gray-400 to-gray-600",
                  lightBg: "bg-gray-50",
                  textColor: "text-gray-700",
                }
                return (
                  <Link href={`/content-hubs/${hub.slug}`} key={hub.id} className="group">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 h-full group-hover:-translate-y-1">
                      <div className={`bg-gradient-to-r ${hubInfo.gradient} h-3 w-full`}></div>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`${hubInfo.lightBg} rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <div className={hubInfo.textColor}>{hubInfo.icon}</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                              {hub.name}
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{hub.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge
                                variant="outline"
                                className={`font-medium border-2 ${hubInfo.textColor} hover:${hubInfo.color} hover:text-white transition-all`}
                              >
                                {hub.content_count || 0} resources
                              </Badge>
                              <span className="text-sm text-orange-600 font-medium group-hover:underline flex items-center">
                                Explore Hub →
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 border-b border-gray-200 bg-white sticky top-[104px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
            </div>

            {/* Industry Filter */}
            <div className="relative">
              <select
                className="border rounded-md py-1 pl-8 pr-8 text-sm appearance-none bg-white"
                value={activeFilter.industry}
                onChange={(e) => setActiveFilter({ ...activeFilter, industry: e.target.value })}
                disabled={isLoading}
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>
              <Briefcase className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            {/* Company Filter */}
            <div className="relative">
              <select
                className="border rounded-md py-1 pl-8 pr-8 text-sm appearance-none bg-white"
                value={activeFilter.company}
                onChange={(e) => setActiveFilter({ ...activeFilter, company: e.target.value })}
                disabled={isLoading}
              >
                <option value="all">All Companies</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
              <Building2 className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            {/* Hub Filter */}
            <div className="relative">
              <select
                className="border rounded-md py-1 pl-8 pr-8 text-sm appearance-none bg-white"
                value={activeFilter.hub}
                onChange={(e) => setActiveFilter({ ...activeFilter, hub: e.target.value })}
                disabled={isLoading}
              >
                <option value="all">All Hubs</option>
                {hubs.map((hub) => (
                  <option key={hub.id} value={hub.id}>
                    {hub.name}
                  </option>
                ))}
              </select>
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500">
                {activeFilter.hub === "all" ? (
                  <Store className="h-4 w-4" />
                ) : (
                  hubIcons[hubs.find((h) => h.id.toString() === activeFilter.hub)?.slug]?.icon || (
                    <Store className="h-4 w-4" />
                  )
                )}
              </div>
            </div>

            {/* Reset Filters */}
            {(activeFilter.industry !== "all" || activeFilter.company !== "all" || activeFilter.hub !== "all") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFilter({ industry: "all", company: "all", hub: "all" })}
                className="text-orange-600 hover:text-orange-700"
                disabled={isLoading}
              >
                Reset Filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="featured" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger
                value="featured"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger
                value="trending"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Trending
              </TabsTrigger>
              <TabsTrigger value="latest" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Latest
              </TabsTrigger>
            </TabsList>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/content-hubs/explore">View All</Link>
            </Button>
          </div>

          <TabsContent value="featured" className="mt-0">
            {isLoading ? (
              // Skeleton loaders for content cards
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Skeleton className="absolute inset-0" />
                      </div>
                      <CardContent className="p-4">
                        <Skeleton className="h-5 w-full mb-3" />
                        <Skeleton className="h-5 w-3/4 mb-3" />
                        <div className="flex items-center gap-2 mb-3">
                          <Skeleton className="h-6 w-6 rounded-full" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : filteredFeatured.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFeatured.map((content) => (
                  <ContentCard key={content.id} content={content} getHubInfo={getHubInfo} getCompany={getCompany} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No content matches your current filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setActiveFilter({ industry: "all", company: "all", hub: "all" })}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="trending" className="mt-0">
            {isLoading ? (
              // Skeleton loaders (same as above)
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Skeleton className="absolute inset-0" />
                      </div>
                      <CardContent className="p-4">
                        <Skeleton className="h-5 w-full mb-3" />
                        <Skeleton className="h-5 w-3/4 mb-3" />
                        <div className="flex items-center gap-2 mb-3">
                          <Skeleton className="h-6 w-6 rounded-full" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : filteredTrending.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTrending.map((content) => (
                  <ContentCard key={content.id} content={content} getHubInfo={getHubInfo} getCompany={getCompany} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No content matches your current filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setActiveFilter({ industry: "all", company: "all", hub: "all" })}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="latest" className="mt-0">
            {isLoading ? (
              // Skeleton loaders (same as above)
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Skeleton className="absolute inset-0" />
                      </div>
                      <CardContent className="p-4">
                        <Skeleton className="h-5 w-full mb-3" />
                        <Skeleton className="h-5 w-3/4 mb-3" />
                        <div className="flex items-center gap-2 mb-3">
                          <Skeleton className="h-6 w-6 rounded-full" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : filteredLatest.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLatest.map((content) => (
                  <ContentCard key={content.id} content={content} getHubInfo={getHubInfo} getCompany={getCompany} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No content matches your current filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setActiveFilter({ industry: "all", company: "all", hub: "all" })}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Featured Companies */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Companies</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/companies">View All</Link>
            </Button>
          </div>

          {isLoading ? (
            // Skeleton loaders for companies
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Skeleton className="w-16 h-16 rounded-full mb-3" />
                      <Skeleton className="h-4 w-24 mb-1" />
                      <Skeleton className="h-3 w-16" />
                    </CardContent>
                  </Card>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {companies.slice(0, 6).map((company) => (
                <Link
                  key={company.id}
                  href={`/content-hubs/company/${company.id}`}
                  className="group"
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveFilter({ ...activeFilter, company: company.id.toString() })
                    window.scrollTo({ top: 400, behavior: "smooth" })
                  }}
                >
                  <Card className="border-2 hover:border-orange-300 transition-all hover:shadow-md">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-gray-200 group-hover:border-orange-300">
                        <Image
                          src={company.logo_url || "/placeholder.svg?height=64&width=64"}
                          alt={company.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-medium text-sm mb-1 group-hover:text-orange-600">{company.name}</h3>
                      <p className="text-xs text-gray-500">{company.content_count || 0} resources</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Hub Highlights */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hub Highlights</h2>

          {isLoading ? (
            // Skeleton loaders for hub highlights
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Skeleton className="h-10 w-10 rounded-full mr-3" />
                        <Skeleton className="h-6 w-32" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hubs.slice(0, 3).map((hub) => {
                const hubInfo = hubIcons[hub.slug] || {
                  icon: <Store className="h-6 w-6" />,
                  color: "bg-gray-500",
                  lightBg: "bg-gray-50",
                  textColor: "text-gray-700",
                }
                return (
                  <div key={hub.id} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`${hubInfo.lightBg} rounded-xl p-3 flex items-center justify-center`}>
                          <div className={hubInfo.textColor}>{hubInfo.icon}</div>
                        </div>
                        <h3 className="font-bold text-lg ml-3">{hub.name}</h3>
                      </div>
                      <Badge variant="outline" className={`font-medium border-2 ${hubInfo.textColor}`}>
                        {hub.content_count || 0} resources
                      </Badge>
                    </div>
                    <p className="text-gray-600">{hub.description}</p>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
