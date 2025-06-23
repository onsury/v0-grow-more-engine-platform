import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark,
  Clock,
  Eye,
  Calendar,
  Download,
  ExternalLink,
  Play,
} from "lucide-react"

// This would normally come from a database or API
const getVideoById = (id) => {
  const videos = {
    "1": {
      id: "1",
      title: "How K7 Computing Revolutionized Cybersecurity in India",
      description:
        "In this exclusive interview, J Kesavardhanan, founder of K7 Computing, shares the journey of building India's premier cybersecurity company. Learn about the challenges faced, innovations developed, and how K7 has stayed ahead of evolving cyber threats for over two decades.",
      videoUrl: "https://example.com/videos/k7-computing-interview.mp4",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      channel: {
        id: "c1",
        name: "Tech Insights",
        logo: "/images/k7-security-logo.png",
        subscribers: "45K",
      },
      stats: {
        views: "24,532",
        likes: "1,245",
        comments: "98",
        published: "May 15, 2023",
      },
      category: "Technology",
      tags: ["Cybersecurity", "Indian Tech", "K7 Computing", "Antivirus", "Tech Founders"],
      relatedVideos: ["5", "10", "7", "2"],
    },
    "2": {
      id: "2",
      title: "Milky Mist: The Journey from Farm to Table",
      description:
        "Discover how Milky Mist transformed from a small dairy operation to one of India's most beloved dairy brands. T. Sathish Kumar shares insights on quality control, innovation in dairy products, and building a sustainable supply chain that benefits thousands of farmers across South India.",
      videoUrl: "https://example.com/videos/milky-mist-journey.mp4",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      channel: {
        id: "c2",
        name: "Business Stories",
        logo: "/images/milky-mist-logo.png",
        subscribers: "32K",
      },
      stats: {
        views: "15,876",
        likes: "987",
        comments: "76",
        published: "June 3, 2023",
      },
      category: "Business",
      tags: ["Dairy Industry", "Indian Startups", "Food Processing", "Entrepreneurship", "Milky Mist"],
      relatedVideos: ["11", "3", "8", "4"],
    },
  }

  return videos[id] || videos["1"] // Default to first video if not found
}

// This would normally come from a database or API
const getRelatedVideos = (ids) => {
  const allVideos = {
    "2": {
      id: "2",
      title: "Milky Mist: The Journey from Farm to Table",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Business Stories",
      views: "15K",
      timestamp: "1 week ago",
      duration: "22:15",
    },
    "3": {
      id: "3",
      title: "Organic Farming Techniques by Organic Shandy",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Green Living",
      views: "8.5K",
      timestamp: "2 weeks ago",
      duration: "15:30",
    },
    "5": {
      id: "5",
      title: "Water Conservation Technologies by Watsan Envirotech",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Eco Solutions",
      views: "42K",
      timestamp: "2 days ago",
      duration: "20:05",
    },
    "7": {
      id: "7",
      title: "StartHub Media: Empowering Indian Entrepreneurs",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Startup Central",
      views: "12K",
      timestamp: "1 week ago",
      duration: "24:10",
    },
    "8": {
      id: "8",
      title: "Traditional vs Modern: The Evolution of Indian Businesses",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Business Insights",
      views: "28K",
      timestamp: "3 days ago",
      duration: "31:45",
    },
    "10": {
      id: "10",
      title: "The Science Behind K7's Antivirus Technology",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Tech Deep Dive",
      views: "19K",
      timestamp: "5 days ago",
      duration: "26:18",
    },
    "11": {
      id: "11",
      title: "Dairy Industry Innovations by Milky Mist",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Food Tech",
      views: "11K",
      timestamp: "2 weeks ago",
      duration: "19:45",
    },
    "4": {
      id: "4",
      title: "Ayurvedic Remedies for Modern Ailments - Jammi Ayurveda",
      thumbnail: "/placeholder.svg?height=180&width=320",
      channel: "Health & Wellness",
      views: "32K",
      timestamp: "5 days ago",
      duration: "27:18",
    },
  }

  return ids.map((id) => allVideos[id]).filter(Boolean)
}

export default function VideoPage({ params }) {
  const video = getVideoById(params.id)
  const relatedVideos = getRelatedVideos(video.relatedVideos)

  // Mock comments data
  const comments = [
    {
      id: "c1",
      user: {
        name: "Rajesh Kumar",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "This was incredibly insightful! I've been using K7 products for years but never knew the story behind the company. Great to see an Indian tech company making such an impact globally.",
      timestamp: "2 days ago",
      likes: 24,
    },
    {
      id: "c2",
      user: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "The section about how they handled the 2012 cyber attacks was fascinating. Would love to see more technical deep dives into their security architecture.",
      timestamp: "3 days ago",
      likes: 18,
    },
    {
      id: "c3",
      user: {
        name: "Anand Verma",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "As someone working in cybersecurity, I appreciate how they've maintained their focus on the Indian market while still competing globally. Their threat detection system is truly world-class.",
      timestamp: "5 days ago",
      likes: 32,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 rounded-full w-16 h-16 flex items-center justify-center"
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>

            {/* Video Info */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
              <div className="flex flex-wrap items-center justify-between gap-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Eye className="w-4 h-4 mr-1" />
                    {video.stats.views} views
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {video.stats.published}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {video.stats.likes}
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Bookmark className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Channel Info */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={video.channel.logo || "/placeholder.svg"} alt={video.channel.name} />
                  <AvatarFallback>{video.channel.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <Link
                    href={`/content-hubs/channel/${video.channel.id}`}
                    className="font-medium hover:text-orange-600"
                  >
                    {video.channel.name}
                  </Link>
                  <p className="text-sm text-gray-600">{video.channel.subscribers} subscribers</p>
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700">Subscribe</Button>
            </div>

            {/* Video Description */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{video.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Comments ({video.stats.comments})</h2>
                <Button variant="outline" size="sm">
                  Sort By
                </Button>
              </div>

              {/* Add Comment */}
              <div className="flex items-start space-x-4 mb-6">
                <Avatar>
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Add a comment..."
                    rows={3}
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <Button variant="outline" size="sm" className="mr-2">
                      Cancel
                    </Button>
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                      <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="font-medium mr-2">{comment.user.name}</span>
                        <span className="text-sm text-gray-500">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{comment.content}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {comment.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <h2 className="text-xl font-bold mb-4">Related Videos</h2>
            <div className="space-y-4">
              {relatedVideos.map((video) => (
                <Link key={video.id} href={`/content-hubs/video/${video.id}`} className="block group">
                  <div className="flex space-x-3">
                    <div className="relative flex-shrink-0 w-40">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={160}
                        height={90}
                        className="rounded-lg object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium line-clamp-2 group-hover:text-orange-600">{video.title}</h3>
                      <p className="text-xs text-gray-600 mt-1">{video.channel}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Eye className="w-3 h-3 mr-1" />
                        {video.views} views
                        <span className="mx-1">•</span>
                        <Clock className="w-3 h-3 mr-1" />
                        {video.timestamp}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Featured Content */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Featured Content</h2>
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">StartHub Media Platform</CardTitle>
                  <CardDescription>Create and distribute your own content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Launch your own branded content hub with our easy-to-use platform. Reach new audiences and grow your
                    business.
                  </p>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link href="/starthub-media/dashboard">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
