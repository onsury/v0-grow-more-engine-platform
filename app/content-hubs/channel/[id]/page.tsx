import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Video,
  FileText,
  Music,
  ImageIcon,
  Grid,
  List,
  Calendar,
  Eye,
  Clock,
  Play,
  Bell,
  Share2,
  ExternalLink,
} from "lucide-react"

// This would normally come from a database or API
const getChannelById = (id) => {
  const channels = {
    c1: {
      id: "c1",
      name: "K7 Computing",
      logo: "/images/k7-security-logo.png",
      banner: "/placeholder.svg?height=300&width=1200",
      description:
        "Official channel of K7 Computing, India's premier cybersecurity company. Discover the latest in cybersecurity trends, product updates, and expert insights to keep your digital life secure.",
      subscribers: "45K",
      totalViews: "1.2M",
      joinedDate: "March 2018",
      website: "https://www.k7computing.com",
      socialLinks: {
        twitter: "https://twitter.com/k7computing",
        facebook: "https://facebook.com/k7computing",
        linkedin: "https://linkedin.com/company/k7-computing",
      },
      content: [
        {
          id: "1",
          title: "How K7 Computing Revolutionized Cybersecurity in India",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "24K",
          timestamp: "3 days ago",
          duration: "18:42",
          category: "Technology",
          type: "video",
        },
        {
          id: "10",
          title: "The Science Behind K7's Antivirus Technology",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "19K",
          timestamp: "5 days ago",
          duration: "26:18",
          category: "Technology",
          type: "article",
        },
        {
          id: "13",
          title: "K7 Total Security: Complete Protection for Your Digital Life",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "15K",
          timestamp: "2 weeks ago",
          duration: "12:45",
          category: "Product",
          type: "video",
        },
        {
          id: "14",
          title: "Cybersecurity Best Practices for Small Businesses",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "8.2K",
          timestamp: "1 month ago",
          duration: "22:10",
          category: "Business",
          type: "video",
        },
        {
          id: "15",
          title: "Understanding Ransomware: Prevention and Recovery",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "12K",
          timestamp: "3 weeks ago",
          duration: "N/A",
          category: "Security",
          type: "article",
        },
        {
          id: "16",
          title: "K7 Mobile Security: Protecting Your Smartphone",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "9.5K",
          timestamp: "1 month ago",
          duration: "15:30",
          category: "Mobile",
          type: "video",
        },
      ],
    },
    c2: {
      id: "c2",
      name: "Milky Mist",
      logo: "/images/milky-mist-logo.png",
      banner: "/placeholder.svg?height=300&width=1200",
      description:
        "Welcome to the official Milky Mist channel. Explore our journey from farm to table, discover delicious recipes using our dairy products, and learn about our sustainable farming practices.",
      subscribers: "32K",
      totalViews: "876K",
      joinedDate: "June 2019",
      website: "https://www.milkymist.in",
      socialLinks: {
        instagram: "https://instagram.com/milkymist",
        facebook: "https://facebook.com/milkymist",
        youtube: "https://youtube.com/milkymist",
      },
      content: [
        {
          id: "2",
          title: "Milky Mist: The Journey from Farm to Table",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "15K",
          timestamp: "1 week ago",
          duration: "22:15",
          category: "Business",
          type: "video",
        },
        {
          id: "11",
          title: "Dairy Industry Innovations by Milky Mist",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "11K",
          timestamp: "2 weeks ago",
          duration: "19:45",
          category: "Food",
          type: "gallery",
        },
        {
          id: "17",
          title: "How to Make Perfect Paneer at Home with Milky Mist",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "22K",
          timestamp: "3 days ago",
          duration: "8:15",
          category: "Recipe",
          type: "video",
        },
        {
          id: "18",
          title: "The Art of Cheese Making: Milky Mist's Process",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "18K",
          timestamp: "2 weeks ago",
          duration: "16:40",
          category: "Process",
          type: "video",
        },
        {
          id: "19",
          title: "Sustainable Dairy Farming Practices",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "7.8K",
          timestamp: "1 month ago",
          duration: "N/A",
          category: "Sustainability",
          type: "article",
        },
        {
          id: "20",
          title: "Milky Mist Product Range Overview",
          thumbnail: "/placeholder.svg?height=180&width=320",
          views: "14K",
          timestamp: "3 weeks ago",
          duration: "N/A",
          category: "Products",
          type: "gallery",
        },
      ],
    },
  }

  return channels[id] || channels["c1"] // Default to first channel if not found
}

export default function ChannelPage({ params }) {
  const channel = getChannelById(params.id)

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
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Channel Banner */}
      <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden">
        <Image
          src={channel.banner || "/placeholder.svg"}
          alt={`${channel.name} banner`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Channel Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={channel.logo || "/placeholder.svg"}
                alt={channel.name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{channel.name}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1 text-sm text-gray-600">
                <span>{channel.subscribers} subscribers</span>
                <span>•</span>
                <span>{channel.totalViews} views</span>
                <span>•</span>
                <span>Joined {channel.joinedDate}</span>
              </div>
              <p className="mt-2 text-gray-600 line-clamp-2 md:line-clamp-none">{channel.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Bell className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center mt-6 pt-6 border-t">
            <div className="flex items-center space-x-4">
              {channel.website && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={channel.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Website
                  </a>
                </Button>
              )}
              {channel.socialLinks?.twitter && (
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                  <a href={channel.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </Button>
              )}
              {channel.socialLinks?.facebook && (
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                  <a href={channel.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </Button>
              )}
              {channel.socialLinks?.linkedin && (
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                  <a href={channel.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </Button>
              )}
              {channel.socialLinks?.instagram && (
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                  <a href={channel.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </Button>
              )}
              {channel.socialLinks?.youtube && (
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                  <a href={channel.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-600"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Channel Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="videos" className="space-y-8">
          <div className="flex justify-between items-center">
            <TabsList>
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
              <TabsTrigger
                value="galleries"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Galleries
              </TabsTrigger>
              <TabsTrigger value="about" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                About
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channel.content
                .filter((c) => c.type === "video")
                .map((content) => (
                  <div key={content.id} className="group">
                    <Link href={`/content-hubs/video/${content.id}`}>
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                        <Image
                          src={content.thumbnail || "/placeholder.svg"}
                          alt={content.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {content.duration}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href={`/content-hubs/video/${content.id}`}>
                      <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-orange-600">
                        {content.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {content.views} views
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {content.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channel.content
                .filter((c) => c.type === "article")
                .map((content) => (
                  <div key={content.id} className="group">
                    <Link href={`/content-hubs/article/${content.id}`}>
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                        <Image
                          src={content.thumbnail || "/placeholder.svg"}
                          alt={content.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-green-500">
                            <FileText className="w-3 h-3 mr-1" />
                            Article
                          </Badge>
                        </div>
                      </div>
                    </Link>
                    <Link href={`/content-hubs/article/${content.id}`}>
                      <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-orange-600">
                        {content.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {content.views} views
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {content.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="galleries" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channel.content
                .filter((c) => c.type === "gallery")
                .map((content) => (
                  <div key={content.id} className="group">
                    <Link href={`/content-hubs/gallery/${content.id}`}>
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                        <Image
                          src={content.thumbnail || "/placeholder.svg"}
                          alt={content.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-amber-500">
                            <ImageIcon className="w-3 h-3 mr-1" />
                            Gallery
                          </Badge>
                        </div>
                      </div>
                    </Link>
                    <Link href={`/content-hubs/gallery/${content.id}`}>
                      <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-orange-600">
                        {content.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {content.views} views
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {content.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-0">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">About {channel.name}</h2>
              <p className="text-gray-700 mb-6">{channel.description}</p>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Channel Stats</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Joined</span>
                      <span className="font-medium">{channel.joinedDate}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Subscribers</span>
                      <span className="font-medium">{channel.subscribers}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Total Views</span>
                      <span className="font-medium">{channel.totalViews}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Content Count</span>
                      <span className="font-medium">{channel.content.length} items</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Links</h3>
                  <ul className="space-y-2 text-sm">
                    {channel.website && (
                      <li>
                        <a
                          href={channel.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-orange-600 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Official Website
                        </a>
                      </li>
                    )}
                    {Object.entries(channel.socialLinks || {}).map(([platform, url]) => (
                      <li key={platform}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-orange-600 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
