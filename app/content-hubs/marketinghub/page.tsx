import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Search, Filter, ArrowRight } from "lucide-react"

export default function MarketingHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 rounded-full p-3">
              <Megaphone className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Marketing Hub</h1>
          </div>
          <p className="text-xl max-w-2xl mb-8 text-orange-100">
            Marketing strategies, brand building, and customer engagement tactics from India's most innovative
            companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search marketing content..."
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
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Marketing Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Milky Mist Brand Building */}
            <Link href="/companies/milky-mist">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/milky-mist-logo.png"
                        alt="Milky Mist"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600">Milky Mist Brand Story</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        How Milky Mist built a national dairy brand through innovative marketing and quality focus.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-orange-200 text-orange-700">
                          Brand Building
                        </Badge>
                        <span className="text-sm text-orange-600 font-medium group-hover:underline flex items-center">
                          View Story <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Jammi Ayurveda Traditional Marketing */}
            <Link href="/companies/jammi">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/jammi-founder-logo.png"
                        alt="Jammi Ayurveda"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600">Jammi Ayurveda Marketing</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Traditional Ayurveda meets modern marketing: Building trust in authentic wellness products.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-orange-200 text-orange-700">
                          Traditional Marketing
                        </Badge>
                        <span className="text-sm text-orange-600 font-medium group-hover:underline flex items-center">
                          View Strategy <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Organic Shandy Digital Marketing */}
            <Link href="/companies/organic-shandy">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">OS</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600">Organic Shandy Digital</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Farm-to-table marketing: How Organic Shandy connects directly with health-conscious consumers.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-orange-200 text-orange-700">
                          Digital Marketing
                        </Badge>
                        <span className="text-sm text-orange-600 font-medium group-hover:underline flex items-center">
                          View Campaign <ArrowRight className="w-4 h-4 ml-1" />
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

      {/* Marketing Topics */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Popular Marketing Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Brand Building", count: 24, link: "/content-hubs/marketinghub/branding" },
              { name: "Digital Marketing", count: 18, link: "/content-hubs/marketinghub/digital" },
              { name: "Content Strategy", count: 32, link: "/content-hubs/marketinghub/content" },
              { name: "Social Media", count: 15, link: "/content-hubs/marketinghub/social" },
              { name: "Customer Acquisition", count: 28, link: "/content-hubs/marketinghub/acquisition" },
              { name: "Email Marketing", count: 21, link: "/content-hubs/marketinghub/email" },
              { name: "SEO & SEM", count: 17, link: "/content-hubs/marketinghub/seo" },
              { name: "Analytics", count: 23, link: "/content-hubs/marketinghub/analytics" },
            ].map((topic, index) => (
              <Link href={topic.link} key={index}>
                <Card className="hover:shadow-md transition-all border-2 hover:border-orange-300">
                  <CardContent className="p-4">
                    <h3 className="font-medium hover:text-orange-600">{topic.name}</h3>
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
          <div className="bg-orange-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Marketing Success</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Share your marketing campaigns, brand building strategies, and customer engagement tactics with our
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                <Link href="/starthub-media/dashboard">Create Content</Link>
              </Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50" asChild>
                <Link href="/submit">Submit Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
