import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Store, Search, Filter, ArrowRight } from "lucide-react"

export default function RetailHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 rounded-full p-3">
              <Store className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Retail Hub</h1>
          </div>
          <p className="text-xl max-w-2xl mb-8 text-amber-100">
            Retail operations, customer experience strategies, and omnichannel approaches from India's leading retail
            brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search retail content..."
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
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Retail Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Milky Mist Retail Strategy */}
            <Link href="/companies/milky-mist">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-300 group">
                <div className="bg-gradient-to-r from-amber-500 to-amber-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/milky-mist-logo.png"
                        alt="Milky Mist"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600">Milky Mist Retail</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        National retail expansion strategy and cold chain management for dairy products.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-amber-200 text-amber-700">
                          Retail Expansion
                        </Badge>
                        <span className="text-sm text-amber-600 font-medium group-hover:underline flex items-center">
                          View Strategy <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Organic Shandy Farm Stores */}
            <Link href="/companies/organic-shandy">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-300 group">
                <div className="bg-gradient-to-r from-amber-500 to-amber-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">OS</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600">Organic Shandy Stores</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Farm-to-store retail model and community-based organic product distribution.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-amber-200 text-amber-700">
                          Farm Stores
                        </Badge>
                        <span className="text-sm text-amber-600 font-medium group-hover:underline flex items-center">
                          View Model <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Jammi Ayurveda Retail */}
            <Link href="/companies/jammi">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-300 group">
                <div className="bg-gradient-to-r from-amber-500 to-amber-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/jammi-founder-logo.png"
                        alt="Jammi Ayurveda"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600">Jammi Ayurveda Retail</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Traditional Ayurvedic product retail and customer education in wellness stores.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-amber-200 text-amber-700">
                          Wellness Retail
                        </Badge>
                        <span className="text-sm text-amber-600 font-medium group-hover:underline flex items-center">
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

      {/* Quick Actions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Retail Success</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Share your retail strategies, customer experience innovations, and operational excellence stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                <Link href="/starthub-media/dashboard">Create Content</Link>
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50" asChild>
                <Link href="/submit">Submit Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
