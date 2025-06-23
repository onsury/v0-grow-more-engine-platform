"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bookmark, Search, Filter, Play, Clock, Eye, ArrowLeft, Download, Trash2, Share2, BookOpen } from "lucide-react"
import Link from "next/link"

// Mock bookmarked content data
const mockBookmarks = [
  {
    id: 1,
    title: "Digital Marketing Strategies for Ayurvedic Products",
    type: "video",
    thumbnail: "/placeholder.svg?height=180&width=320",
    company: "Jammi Ayurveda",
    hub: "MarketingHub",
    duration: "15:30",
    views: 15000,
    bookmarkedDate: "2024-01-15",
    progress: 75,
    industry: "healthcare",
  },
  {
    id: 2,
    title: "Financial Growth Strategies: The Milky Mist Success Story",
    type: "article",
    thumbnail: "/placeholder.svg?height=180&width=320",
    company: "Milky Mist",
    hub: "FinHub",
    readTime: "8 min read",
    views: 18000,
    bookmarkedDate: "2024-01-12",
    progress: 100,
    industry: "food",
  },
  {
    id: 3,
    title: "HR Best Practices in Tech Companies",
    type: "podcast",
    thumbnail: "/placeholder.svg?height=180&width=320",
    company: "K7 Computing",
    hub: "HRHub",
    duration: "32:15",
    views: 24000,
    bookmarkedDate: "2024-01-10",
    progress: 45,
    industry: "technology",
  },
  {
    id: 4,
    title: "Sales Techniques That Transformed Music Temple's Business",
    type: "video",
    thumbnail: "/placeholder.svg?height=180&width=320",
    company: "Music Temple",
    hub: "SalesHub",
    duration: "22:40",
    views: 28000,
    bookmarkedDate: "2024-01-08",
    progress: 0,
    industry: "education",
  },
  {
    id: 5,
    title: "Retail Distribution: How Watsan Expanded Their Market Reach",
    type: "case-study",
    thumbnail: "/placeholder.svg?height=180&width=320",
    company: "Watsan Envirotech",
    hub: "RetailHub",
    readTime: "12 min read",
    views: 21000,
    bookmarkedDate: "2024-01-05",
    progress: 30,
    industry: "manufacturing",
  },
  {
    id: 6,
    title: "Cloud Infrastructure: Milky Mist's Digital Transformation",
    type: "video",
    thumbnail: "/placeholder.svg?height=180&width=320",
    company: "Milky Mist",
    hub: "TechHub",
    duration: "19:15",
    views: 29000,
    bookmarkedDate: "2024-01-03",
    progress: 60,
    industry: "food",
  },
]

export default function BookmarksPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [bookmarks, setBookmarks] = useState(mockBookmarks)
  const [filteredBookmarks, setFilteredBookmarks] = useState(mockBookmarks)
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, isLoading, router])

  useEffect(() => {
    let filtered = bookmarks

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (bookmark) =>
          bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          bookmark.company.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter((bookmark) => bookmark.type === typeFilter)
    }

    // Apply sorting
    switch (sortBy) {
      case "recent":
        filtered = filtered.sort((a, b) => new Date(b.bookmarkedDate).getTime() - new Date(a.bookmarkedDate).getTime())
        break
      case "oldest":
        filtered = filtered.sort((a, b) => new Date(a.bookmarkedDate).getTime() - new Date(b.bookmarkedDate).getTime())
        break
      case "title":
        filtered = filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "views":
        filtered = filtered.sort((a, b) => b.views - a.views)
        break
    }

    setFilteredBookmarks(filtered)
  }, [bookmarks, searchQuery, typeFilter, sortBy])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  const handleRemoveBookmark = (id: number) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id))
  }

  const handleClearAll = () => {
    if (confirm("Are you sure you want to remove all bookmarks?")) {
      setBookmarks([])
    }
  }

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />
      case "article":
        return <BookOpen className="h-4 w-4" />
      case "podcast":
        return <Clock className="h-4 w-4" />
      case "case-study":
        return <Eye className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Bookmark className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Bookmarks</h1>
                <p className="text-gray-600">
                  {filteredBookmarks.length} saved {filteredBookmarks.length === 1 ? "item" : "items"}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              {bookmarks.length > 0 && (
                <Button variant="outline" size="sm" onClick={handleClearAll}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search bookmarks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                  <SelectItem value="article">Articles</SelectItem>
                  <SelectItem value="podcast">Podcasts</SelectItem>
                  <SelectItem value="case-study">Case Studies</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="title">Title A-Z</SelectItem>
                  <SelectItem value="views">Most Viewed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Bookmarks Grid */}
        {filteredBookmarks.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Bookmark className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {bookmarks.length === 0 ? "No bookmarks yet" : "No bookmarks match your filters"}
              </h3>
              <p className="text-gray-500 mb-6">
                {bookmarks.length === 0
                  ? "Start exploring content and save your favorites here"
                  : "Try adjusting your search or filter criteria"}
              </p>
              {bookmarks.length === 0 && (
                <Link href="/content-hubs">
                  <Button>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Explore Content
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookmarks.map((bookmark) => (
              <Card key={bookmark.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={bookmark.thumbnail || "/placeholder.svg"}
                    alt={bookmark.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="flex items-center">
                      {getContentTypeIcon(bookmark.type)}
                      <span className="ml-1 capitalize">{bookmark.type}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleRemoveBookmark(bookmark.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Bookmark className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                  {bookmark.progress > 0 && (
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-black bg-opacity-50 rounded px-2 py-1">
                        <div className="flex items-center justify-between text-white text-xs mb-1">
                          <span>{bookmark.progress}% complete</span>
                          <span>{bookmark.duration || bookmark.readTime}</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-1">
                          <div
                            className="bg-blue-500 h-1 rounded-full"
                            style={{ width: `${bookmark.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{bookmark.hub}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-3 w-3 mr-1" />
                      {bookmark.views.toLocaleString()}
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{bookmark.title}</h3>

                  <p className="text-sm text-gray-600 mb-3">{bookmark.company}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>Saved {formatDate(bookmark.bookmarkedDate)}</span>
                    <span>{bookmark.duration || bookmark.readTime}</span>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      {bookmark.progress > 0 ? "Continue" : "Start"}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
