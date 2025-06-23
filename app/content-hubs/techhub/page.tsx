import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Search, Filter, Clock, Eye, ArrowRight } from "lucide-react"

export default function TechHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 rounded-full p-3">
              <Cpu className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Tech Hub</h1>
          </div>
          <p className="text-xl max-w-2xl mb-8 text-purple-100">
            Technology innovations, digital transformation strategies, and IT solutions from India's leading tech
            companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search tech content..."
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
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Tech Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* K7 Computing */}
            <Link href="/companies/k7-computing">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300 group">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/k7-security-logo.png"
                        alt="K7 Computing"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600">K7 Computing</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Leading cybersecurity solutions provider with innovative antivirus and endpoint security
                        products.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-purple-200 text-purple-700">
                          8 tech resources
                        </Badge>
                        <span className="text-sm text-purple-600 font-medium group-hover:underline flex items-center">
                          View Company <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Watsan Envirotech */}
            <Link href="/companies/watsan">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300 group">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/watsan-logo.png"
                        alt="Watsan Envirotech"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600">Watsan Envirotech</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Environmental technology solutions including water purification and green sanitation systems.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-purple-200 text-purple-700">
                          5 tech resources
                        </Badge>
                        <span className="text-sm text-purple-600 font-medium group-hover:underline flex items-center">
                          View Company <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Music Temple */}
            <Link href="/companies/music-temple">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300 group">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 w-full"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 rounded-xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src="/images/music-temple-logo.png"
                        alt="Music Temple"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600">Music Temple</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Digital music platform preserving Indian classical music through innovative technology
                        solutions.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-purple-200 text-purple-700">
                          4 tech resources
                        </Badge>
                        <span className="text-sm text-purple-600 font-medium group-hover:underline flex items-center">
                          View Company <ArrowRight className="w-4 h-4 ml-1" />
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
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger
                value="trending"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Trending
              </TabsTrigger>
              <TabsTrigger value="latest" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Latest
              </TabsTrigger>
            </TabsList>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/content-hubs/explore">View All</Link>
            </Button>
          </div>

          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* K7 Total Security */}
              <Card className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-purple-300">
                <Link href="/products/k7-total-security">
                  <div className="relative">
                    <div className="bg-purple-500 h-1 w-full absolute top-0 left-0 z-10"></div>
                    <Image
                      src="/images/k7-total-security-logo.png"
                      alt="K7 Total Security"
                      width={320}
                      height={180}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      12:45
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-purple-500">Video</Badge>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link href="/products/k7-total-security">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-purple-600">
                      K7 Total Security: Complete Cybersecurity Solution
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
                    <Link href="/companies/k7-computing" className="text-xs font-medium hover:text-purple-600">
                      K7 Computing
                    </Link>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      24.5K views
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />2 days ago
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Watsan Water Purification */}
              <Card className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-purple-300">
                <Link href="/products/watsan-home-ro-system">
                  <div className="relative">
                    <div className="bg-purple-500 h-1 w-full absolute top-0 left-0 z-10"></div>
                    <Image
                      src="/images/watsan-household-purifier.png"
                      alt="Watsan Water Purification"
                      width={320}
                      height={180}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      8:30
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-purple-500">Video</Badge>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link href="/products/watsan-home-ro-system">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-purple-600">
                      Advanced Water Purification Technology
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src="/images/watsan-logo.png"
                        alt="Watsan Envirotech"
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <Link href="/companies/watsan" className="text-xs font-medium hover:text-purple-600">
                      Watsan Envirotech
                    </Link>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      18.2K views
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />5 days ago
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Music Temple Digital Platform */}
              <Card className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-purple-300">
                <Link href="/companies/music-temple">
                  <div className="relative">
                    <div className="bg-purple-500 h-1 w-full absolute top-0 left-0 z-10"></div>
                    <Image
                      src="/images/ramesh-vinayakam-presentation.png"
                      alt="Music Temple Platform"
                      width={320}
                      height={180}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-purple-500">Article</Badge>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link href="/companies/music-temple">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-purple-600">
                      Digital Preservation of Indian Classical Music
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src="/images/music-temple-logo.png"
                        alt="Music Temple"
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <Link href="/companies/music-temple" className="text-xs font-medium hover:text-purple-600">
                      Music Temple
                    </Link>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      12.8K views
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />1 week ago
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500">Trending tech content will appear here.</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/starthub-media/dashboard">Create Content</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="latest" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500">Latest tech content will appear here.</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/starthub-media/dashboard">Create Content</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Tech Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Tech Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Cybersecurity", count: 24, link: "/content-hubs/techhub/cybersecurity" },
              { name: "Cloud Computing", count: 18, link: "/content-hubs/techhub/cloud" },
              { name: "AI & Machine Learning", count: 32, link: "/content-hubs/techhub/ai" },
              { name: "Digital Transformation", count: 15, link: "/content-hubs/techhub/digital" },
              { name: "IoT Solutions", count: 28, link: "/content-hubs/techhub/iot" },
              { name: "Mobile Development", count: 21, link: "/content-hubs/techhub/mobile" },
              { name: "Data Analytics", count: 17, link: "/content-hubs/techhub/analytics" },
              { name: "Blockchain", count: 23, link: "/content-hubs/techhub/blockchain" },
            ].map((topic, index) => (
              <Link href={topic.link} key={index}>
                <Card className="hover:shadow-md transition-all border-2 hover:border-purple-300">
                  <CardContent className="p-4">
                    <h3 className="font-medium hover:text-purple-600">{topic.name}</h3>
                    <p className="text-sm text-gray-500">{topic.count} resources</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-purple-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Tech Community</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Share your technology insights, connect with other tech leaders, and showcase your innovations on our
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/starthub-media/dashboard">Create Content</Link>
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50" asChild>
              <Link href="/submit">Submit Review</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
