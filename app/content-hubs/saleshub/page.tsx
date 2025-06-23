import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Search, Filter, ArrowRight } from "lucide-react"

export default function SalesHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 rounded-full p-3">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Sales Hub</h1>
          </div>
          <p className="text-xl max-w-2xl mb-8 text-red-100">
            Sales techniques, customer acquisition strategies, and revenue growth insights from India's top-performing
            sales teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search sales content..."
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
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Sales Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* K7 Computing Sales Strategy */}
            <Link href="/companies/k7-computing">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-300 group">
                <div className="bg-gradient-to-r from-red-500 to-red-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/k7-security-logo.png"
                        alt="K7 Computing"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-red-600">K7 Computing Sales</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        B2B cybersecurity sales strategies and enterprise customer acquisition techniques.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-red-200 text-red-700">
                          B2B Sales
                        </Badge>
                        <span className="text-sm text-red-600 font-medium group-hover:underline flex items-center">
                          View Strategy <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Milky Mist Distribution */}
            <Link href="/companies/milky-mist">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-300 group">
                <div className="bg-gradient-to-r from-red-500 to-red-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/milky-mist-logo.png"
                        alt="Milky Mist"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-red-600">Milky Mist Distribution</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        National retail distribution strategy and channel partner management for dairy products.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-red-200 text-red-700">
                          Retail Sales
                        </Badge>
                        <span className="text-sm text-red-600 font-medium group-hover:underline flex items-center">
                          View Model <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Organic Shandy Direct Sales */}
            <Link href="/companies/organic-shandy">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-300 group">
                <div className="bg-gradient-to-r from-red-500 to-red-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">OS</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-red-600">Organic Shandy Direct Sales</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Farm-to-consumer direct sales model and community-based customer acquisition.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-red-200 text-red-700">
                          Direct Sales
                        </Badge>
                        <span className="text-sm text-red-600 font-medium group-hover:underline flex items-center">
                          View Approach <ArrowRight className="w-4 h-4 ml-1" />
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

      {/* Sales Topics */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Popular Sales Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Lead Generation", count: 24, link: "/content-hubs/saleshub/leads" },
              { name: "Sales Funnels", count: 18, link: "/content-hubs/saleshub/funnels" },
              { name: "Customer Retention", count: 32, link: "/content-hubs/saleshub/retention" },
              { name: "Sales Training", count: 15, link: "/content-hubs/saleshub/training" },
              { name: "CRM Systems", count: 28, link: "/content-hubs/saleshub/crm" },
              { name: "Sales Analytics", count: 21, link: "/content-hubs/saleshub/analytics" },
              { name: "Channel Partners", count: 17, link: "/content-hubs/saleshub/partners" },
              { name: "Closing Techniques", count: 23, link: "/content-hubs/saleshub/closing" },
            ].map((topic, index) => (
              <Link href={topic.link} key={index}>
                <Card className="hover:shadow-md transition-all border-2 hover:border-red-300">
                  <CardContent className="p-4">
                    <h3 className="font-medium hover:text-red-600">{topic.name}</h3>
                    <p className="text-sm text-gray-500">{topic.count} resources</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Sales Success</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Share your sales strategies, customer acquisition techniques, and revenue growth stories with our
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700" asChild>
                <Link href="/starthub-media/dashboard">Create Content</Link>
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50" asChild>
                <Link href="/submit">Submit Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
