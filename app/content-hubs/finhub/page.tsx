import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Search, Filter, Clock, Eye, ArrowRight, TrendingUp } from "lucide-react"

export default function FinHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 rounded-full p-3">
              <DollarSign className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Finance Hub</h1>
          </div>
          <p className="text-xl max-w-2xl mb-8 text-emerald-100">
            Financial insights, investment strategies, and business growth stories from India's most successful
            companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search financial content..."
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

      {/* Featured Companies */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Financial Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Milky Mist IPO */}
            <Link href="/companies/milky-mist/ipo-tracker">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-300 group">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/milky-mist-logo.png"
                        alt="Milky Mist"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600">Milky Mist IPO Journey</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Track the IPO journey of India's leading dairy brand from startup to public company.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                          IPO Tracker
                        </Badge>
                        <span className="text-sm text-emerald-600 font-medium group-hover:underline flex items-center">
                          Track IPO <TrendingUp className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* K7 Computing Growth */}
            <Link href="/companies/k7-computing">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-300 group">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/k7-security-logo.png"
                        alt="K7 Computing"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600">K7 Computing Growth</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Financial strategies and growth metrics of India's leading cybersecurity company.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                          Growth Story
                        </Badge>
                        <span className="text-sm text-emerald-600 font-medium group-hover:underline flex items-center">
                          View Analysis <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Organic Shandy Funding */}
            <Link href="/companies/organic-shandy">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-300 group">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">OS</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600">Organic Shandy Funding</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Sustainable agriculture funding and financial sustainability in organic farming.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                          Funding Round
                        </Badge>
                        <span className="text-sm text-emerald-600 font-medium group-hover:underline flex items-center">
                          View Details <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="featured" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger
                value="featured"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger
                value="trending"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                Trending
              </TabsTrigger>
              <TabsTrigger value="latest" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                Latest
              </TabsTrigger>
            </TabsList>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/content-hubs/explore">View All</Link>
            </Button>
          </div>

          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Milky Mist IPO Analysis */}
              <Card className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-emerald-300">
                <Link href="/companies/milky-mist/ipo-tracker">
                  <div className="relative">
                    <div className="bg-emerald-500 h-1 w-full absolute top-0 left-0 z-10"></div>
                    <Image
                      src="/images/milky-mist-complete-range.png"
                      alt="Milky Mist IPO"
                      width={320}
                      height={180}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      15:30
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-emerald-500">Video</Badge>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link href="/companies/milky-mist/ipo-tracker">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-emerald-600">
                      Milky Mist IPO: From Dairy Farm to Stock Market
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src="/images/milky-mist-logo.png"
                        alt="Milky Mist"
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <Link href="/companies/milky-mist" className="text-xs font-medium hover:text-emerald-600">
                      Milky Mist
                    </Link>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      32.1K views
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />3 days ago
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* K7 Computing Financial Strategy */}
              <Card className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-emerald-300">
                <Link href="/companies/k7-computing">
                  <div className="relative">
                    <div className="bg-emerald-500 h-1 w-full absolute top-0 left-0 z-10"></div>
                    <Image
                      src="/images/k7-website-screenshot.jpg"
                      alt="K7 Computing Growth"
                      width={320}
                      height={180}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-emerald-500">Case Study</Badge>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link href="/companies/k7-computing">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-emerald-600">
                      K7 Computing: Building a Profitable Cybersecurity Business
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src="/images/k7-security-logo.png"
                        alt="K7 Computing"
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <Link href="/companies/k7-computing" className="text-xs font-medium hover:text-emerald-600">
                      K7 Computing
                    </Link>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      28.7K views
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />1 week ago
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Organic Shandy Sustainable Finance */}
              <Card className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-emerald-300">
                <Link href="/companies/organic-shandy">
                  <div className="relative">
                    <div className="bg-emerald-500 h-1 w-full absolute top-0 left-0 z-10"></div>
                    <div className="w-full h-48 bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                      <div className="text-white text-4xl font-bold">OS</div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      22:15
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-emerald-500">Podcast</Badge>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link href="/companies/organic-shandy">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-emerald-600">
                      Sustainable Agriculture: Financial Models That Work
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">OS</span>
                    </div>
                    <Link href="/companies/organic-shandy" className="text-xs font-medium hover:text-emerald-600">
                      Organic Shandy
                    </Link>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      19.4K views
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />5 days ago
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500">Trending financial content will appear here.</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/starthub-media/dashboard">Create Content</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="latest" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500">Latest financial content will appear here.</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/starthub-media/dashboard">Create Content</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Financial Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Financial Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "IPO Analysis", count: 24, link: "/content-hubs/finhub/ipo" },
              { name: "Startup Funding", count: 18, link: "/content-hubs/finhub/funding" },
              { name: "Growth Strategies", count: 32, link: "/content-hubs/finhub/growth" },
              { name: "Financial Planning", count: 15, link: "/content-hubs/finhub/planning" },
              { name: "Investment Insights", count: 28, link: "/content-hubs/finhub/investment" },
              { name: "Revenue Models", count: 21, link: "/content-hubs/finhub/revenue" },
              { name: "Cost Optimization", count: 17, link: "/content-hubs/finhub/optimization" },
              { name: "Market Analysis", count: 23, link: "/content-hubs/finhub/market" },
            ].map((topic, index) => (
              <Link href={topic.link} key={index}>
                <Card className="hover:shadow-md transition-all border-2 hover:border-emerald-300">
                  <CardContent className="p-4">
                    <h3 className="font-medium hover:text-emerald-600">{topic.name}</h3>
                    <p className="text-sm text-gray-500">{topic.count} resources</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-emerald-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Financial Success</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Share your business growth stories, financial strategies, and investment insights with our community of
            entrepreneurs and investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link href="/starthub-media/dashboard">Create Content</Link>
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50" asChild>
              <Link href="/submit">Submit Review</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
