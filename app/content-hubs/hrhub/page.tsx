import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Filter, Building2, Briefcase, Play, Clock, Eye } from "lucide-react"

export default function HRHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 rounded-full p-3">
              <Users className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">HRHub</h1>
          </div>
          <p className="text-xl max-w-2xl mb-8 text-blue-100">
            Human resources insights, talent management strategies, and workplace culture resources to help you build
            and maintain exceptional teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search HR resources..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12 w-full rounded-md focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500"
              />
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/20 h-12">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>
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
              <select className="border rounded-md py-1 pl-8 pr-8 text-sm appearance-none bg-white">
                <option>All Industries</option>
                <option>Technology</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Retail</option>
                <option>Manufacturing</option>
                <option>Food & Agriculture</option>
                <option>Education</option>
              </select>
              <Briefcase className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            {/* Company Filter */}
            <div className="relative">
              <select className="border rounded-md py-1 pl-8 pr-8 text-sm appearance-none bg-white">
                <option>All Companies</option>
                <option>Jammi Ayurveda</option>
                <option>K7 Computing</option>
                <option>Milky Mist</option>
                <option>Organic Shandy</option>
                <option>Music Temple</option>
                <option>Watsan Envirotech</option>
              </select>
              <Building2 className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            {/* Content Type Filter */}
            <div className="relative">
              <select className="border rounded-md py-1 pl-8 pr-8 text-sm appearance-none bg-white">
                <option>All Content Types</option>
                <option>Videos</option>
                <option>Articles</option>
                <option>Podcasts</option>
                <option>Case Studies</option>
              </select>
              <Play className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="featured" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="featured" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Featured
              </TabsTrigger>
              <TabsTrigger value="trending" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Trending
              </TabsTrigger>
              <TabsTrigger value="latest" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Latest
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm border rounded-md px-2 py-1">
                <option>Trending</option>
                <option>Newest</option>
                <option>Most Viewed</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "How K7 Computing Built a World-Class Tech Team",
                  thumbnail: "/placeholder.svg?height=180&width=320",
                  company: "K7 Computing",
                  companyLogo: "/images/k7-security-logo.png",
                  views: "24K",
                  posted: "2 days ago",
                  duration: "12:45",
                  type: "video",
                },
                {
                  id: 7,
                  title: "Employee Wellness Programs at Jammi Ayurveda",
                  thumbnail: "/placeholder.svg?height=180&width=320",
                  company: "Jammi Ayurveda",
                  companyLogo: "/images/jammi-founder-logo.png",
                  views: "42K",
                  posted: "1 week ago",
                  duration: "16:30",
                  type: "article",
                },
                {
                  id: 13,
                  title: "Remote Work Policies: Milky Mist's Approach",
                  thumbnail: "/placeholder.svg?height=180&width=320",
                  company: "Milky Mist",
                  companyLogo: "/images/milky-mist-logo.png",
                  views: "18K",
                  posted: "3 days ago",
                  duration: "22:15",
                  type: "podcast",
                },
                {
                  id: 19,
                  title: "Building Inclusive Teams: Organic Shandy's Journey",
                  thumbnail: "/placeholder.svg?height=180&width=320",
                  company: "Organic Shandy",
                  companyLogo: "/placeholder.svg?height=80&width=80",
                  views: "15K",
                  posted: "1 week ago",
                  duration: "18:30",
                  type: "case-study",
                },
                {
                  id: 25,
                  title: "Talent Acquisition Strategies for Specialized Skills",
                  thumbnail: "/placeholder.svg?height=180&width=320",
                  company: "Music Temple",
                  companyLogo: "/images/music-temple-logo.png",
                  views: "32K",
                  posted: "2 weeks ago",
                  duration: "14:20",
                  type: "video",
                },
                {
                  id: 31,
                  title: "Employee Retention in Manufacturing: Watsan's Success",
                  thumbnail: "/placeholder.svg?height=180&width=320",
                  company: "Watsan Envirotech",
                  companyLogo: "/images/watsan-logo.png",
                  views: "21K",
                  posted: "5 days ago",
                  duration: "26:45",
                  type: "article",
                },
              ].map((content) => (
                <Card
                  key={content.id}
                  className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-blue-300"
                >
                  <Link href={`/content-hubs/hrhub/${content.id}`}>
                    <div className="relative">
                      <div className="bg-blue-500 h-1 w-full absolute top-0 left-0 z-10"></div>
                      <Image
                        src={content.thumbnail || "/placeholder.svg"}
                        alt={content.title}
                        width={320}
                        height={180}
                        className="w-full object-cover"
                      />
                      {content.duration && content.type === "video" && (
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {content.duration}
                        </div>
                      )}
                      <div className="absolute top-2 left-2">
                        <Badge
                          className={`${
                            content.type === "video"
                              ? "bg-blue-500"
                              : content.type === "podcast"
                                ? "bg-purple-500"
                                : content.type === "article"
                                  ? "bg-green-500"
                                  : "bg-amber-500"
                          }`}
                        >
                          <span className="capitalize">{content.type}</span>
                        </Badge>
                      </div>
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <Link href={`/content-hubs/hrhub/${content.id}`}>
                      <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-blue-600">{content.title}</h3>
                    </Link>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <Image
                          src={content.companyLogo || "/placeholder.svg"}
                          alt={content.company}
                          width={24}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                      <Link
                        href={`/content-hubs/company/${content.company.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-xs font-medium hover:text-blue-600"
                      >
                        {content.company}
                      </Link>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {content.views} views
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {content.posted}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-0">
            {/* Similar content structure as featured tab */}
            <div className="text-center py-12">
              <p className="text-gray-500">Trending content will appear here.</p>
            </div>
          </TabsContent>

          <TabsContent value="latest" className="mt-0">
            {/* Similar content structure as featured tab */}
            <div className="text-center py-12">
              <p className="text-gray-500">Latest content will appear here.</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Topics Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular HR Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Talent Acquisition", count: 24 },
              { name: "Employee Engagement", count: 18 },
              { name: "Performance Management", count: 32 },
              { name: "Workplace Culture", count: 15 },
              { name: "Diversity & Inclusion", count: 28 },
              { name: "Leadership Development", count: 21 },
              { name: "HR Technology", count: 17 },
              { name: "Remote Work", count: 23 },
            ].map((topic, index) => (
              <Link href={`/content-hubs/hrhub/topic/${topic.name.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                <Card className="hover:shadow-md transition-all border-2 hover:border-blue-300">
                  <CardContent className="p-4">
                    <h3 className="font-medium hover:text-blue-600">{topic.name}</h3>
                    <p className="text-sm text-gray-500">{topic.count} resources</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Companies */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Companies in HR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "K7 Computing",
                logo: "/images/k7-security-logo.png",
                description: "Building tech teams that drive cybersecurity innovation",
                resourceCount: 12,
              },
              {
                name: "Jammi Ayurveda",
                logo: "/images/jammi-founder-logo.png",
                description: "Blending traditional values with modern HR practices",
                resourceCount: 8,
              },
              {
                name: "Milky Mist",
                logo: "/images/milky-mist-logo.png",
                description: "Creating a culture of excellence in the dairy industry",
                resourceCount: 10,
              },
            ].map((company, index) => (
              <Card key={index} className="hover:shadow-md transition-all border-2 hover:border-blue-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={company.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold">{company.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{company.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{company.resourceCount} HR resources</span>
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      View Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
