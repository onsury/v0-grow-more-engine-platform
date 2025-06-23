import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Eye, Calendar, Play, Music, FileText, ImageIcon, Video, Zap } from "lucide-react"

export default function ExplorePage() {
  // Mock data for content
  const allContent = [
    {
      id: "1",
      title: "How K7 Computing Revolutionized Cybersecurity in India",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Tech Insights",
      views: "24K",
      timestamp: "3 days ago",
      duration: "18:42",
      category: "Technology",
      type: "video",
    },
    {
      id: "2",
      title: "Milky Mist: The Journey from Farm to Table",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Business Stories",
      views: "15K",
      timestamp: "1 week ago",
      duration: "22:15",
      category: "Business",
      type: "video",
    },
    {
      id: "3",
      title: "Organic Farming Techniques by Organic Shandy",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Green Living",
      views: "8.5K",
      timestamp: "2 weeks ago",
      duration: "15:30",
      category: "Agriculture",
      type: "video",
    },
    {
      id: "4",
      title: "Ayurvedic Remedies for Modern Ailments - Jammi Ayurveda",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Health & Wellness",
      views: "32K",
      timestamp: "5 days ago",
      duration: "27:18",
      category: "Health",
      type: "video",
    },
    {
      id: "5",
      title: "Water Conservation Technologies by Watsan Envirotech",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Eco Solutions",
      views: "42K",
      timestamp: "2 days ago",
      duration: "20:05",
      category: "Environment",
      type: "video",
    },
    {
      id: "6",
      title: "Music Temple's Latest Classical Fusion Performance",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Arts & Culture",
      views: "18K",
      timestamp: "4 days ago",
      duration: "35:22",
      category: "Music",
      type: "audio",
    },
    {
      id: "7",
      title: "StartHub Media: Empowering Indian Entrepreneurs",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Startup Central",
      views: "12K",
      timestamp: "1 week ago",
      duration: "24:10",
      category: "Business",
      type: "article",
    },
    {
      id: "8",
      title: "Traditional vs Modern: The Evolution of Indian Businesses",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Business Insights",
      views: "28K",
      timestamp: "3 days ago",
      duration: "31:45",
      category: "Business",
      type: "article",
    },
    {
      id: "9",
      title: "How to Choose the Right Water Purifier - Watsan Guide",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Home Solutions",
      views: "7.8K",
      timestamp: "1 week ago",
      duration: "14:32",
      category: "Home",
      type: "video",
    },
    {
      id: "10",
      title: "The Science Behind K7's Antivirus Technology",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Tech Deep Dive",
      views: "19K",
      timestamp: "5 days ago",
      duration: "26:18",
      category: "Technology",
      type: "article",
    },
    {
      id: "11",
      title: "Dairy Industry Innovations by Milky Mist",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Food Tech",
      views: "11K",
      timestamp: "2 weeks ago",
      duration: "19:45",
      category: "Food",
      type: "gallery",
    },
    {
      id: "12",
      title: "Jammi's Ancient Ayurvedic Recipes Revealed",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Traditional Wellness",
      views: "22K",
      timestamp: "4 days ago",
      duration: "23:10",
      category: "Health",
      type: "article",
    },
  ]

  const categories = [
    "All",
    "Technology",
    "Business",
    "Health",
    "Agriculture",
    "Environment",
    "Music",
    "Food",
    "Startups",
    "Education",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-4">Explore Content</h1>
          <p className="text-lg text-orange-100 mb-6">
            Discover authentic stories, expert insights, and exclusive content from India's most trusted companies and
            founders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for content, companies, or topics..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500"
              />
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/20 h-12">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-6 border-b border-gray-200 bg-white sticky top-[104px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="all" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                <Zap className="w-4 h-4 mr-2" />
                All
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                <Video className="w-4 h-4 mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="articles"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                <FileText className="w-4 h-4 mr-2" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="audio" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                <Music className="w-4 h-4 mr-2" />
                Audio
              </TabsTrigger>
              <TabsTrigger
                value="galleries"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Galleries
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

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allContent.map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allContent
                .filter((c) => c.type === "video")
                .map((content) => (
                  <ContentCard key={content.id} content={content} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allContent
                .filter((c) => c.type === "article")
                .map((content) => (
                  <ContentCard key={content.id} content={content} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allContent
                .filter((c) => c.type === "audio")
                .map((content) => (
                  <ContentCard key={content.id} content={content} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="galleries" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allContent
                .filter((c) => c.type === "gallery")
                .map((content) => (
                  <ContentCard key={content.id} content={content} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </div>
  )
}

function ContentCard({ content }) {
  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />
      case "audio":
        return <Music className="w-4 h-4" />
      case "article":
        return <FileText className="w-4 h-4" />
      case "gallery":
        return <ImageIcon className="w-4 h-4" />
      default:
        return <Zap className="w-4 h-4" />
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-orange-300">
      <Link href={`/content-hubs/${content.type}/${content.id}`}>
        <div className="relative">
          <Image
            src={content.thumbnail || "/placeholder.svg"}
            alt={content.title}
            width={320}
            height={180}
            className="w-full object-cover"
          />
          {content.type === "video" && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {content.duration}
            </div>
          )}
          <div className="absolute top-2 left-2">
            <Badge
              className={`
              ${content.type === "video" ? "bg-blue-500" : ""}
              ${content.type === "audio" ? "bg-purple-500" : ""}
              ${content.type === "article" ? "bg-green-500" : ""}
              ${content.type === "gallery" ? "bg-amber-500" : ""}
            `}
            >
              <div className="flex items-center">
                {getTypeIcon(content.type)}
                <span className="ml-1 capitalize">{content.type}</span>
              </div>
            </Badge>
          </div>
          {content.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="bg-black/50 rounded-full p-3">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/content-hubs/${content.type}/${content.id}`}>
          <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-orange-600">{content.title}</h3>
        </Link>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <Link
            href={`/content-hubs/channel/${content.channel.replace(/\s+/g, "-").toLowerCase()}`}
            className="hover:text-orange-600"
          >
            {content.channel}
          </Link>
          <Badge variant="outline" className="text-xs font-normal">
            {content.category}
          </Badge>
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <div className="flex items-center">
            <Eye className="w-3 h-3 mr-1" />
            {content.views} views
          </div>
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {content.timestamp}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
