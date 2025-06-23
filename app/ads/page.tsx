import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Volume2, ChevronLeft, ChevronRight, Eye, Heart, MessageCircle, Share } from "lucide-react"

export default function AdsPage() {
  // Sample ad data - you can expand this with real multimedia content
  const ads = [
    {
      id: 1,
      company: "Jammi Ayurveda",
      title: "128 Years of Authentic Ayurveda",
      type: "video",
      duration: "2:30",
      views: "15.2K",
      likes: "892",
      comments: "156",
      description:
        "Discover the heritage of authentic Ayurvedic formulations that have been trusted for over a century.",
    },
    {
      id: 2,
      company: "K7 Computing",
      title: "Silent Protection, Loud Results",
      type: "audio",
      duration: "1:45",
      views: "8.7K",
      likes: "445",
      comments: "89",
      description: "Cybersecurity that works quietly in the background while you focus on what matters.",
    },
    {
      id: 3,
      company: "Organic Shandy",
      title: "From Farm to Table - The Organic Way",
      type: "carousel",
      images: 5,
      views: "12.1K",
      likes: "678",
      comments: "234",
      description: "See how we've been growing organic produce for 25+ years, before it was trendy.",
    },
    {
      id: 4,
      company: "Music Temple",
      title: "Innovation Meets Tradition",
      type: "image",
      views: "6.3K",
      likes: "321",
      comments: "67",
      description: "Revolutionary music notation system designed for Indian classical music.",
    },
    {
      id: 5,
      company: "Watsan Envirotech",
      title: "Clean Water, Clear Conscience",
      type: "video",
      duration: "3:15",
      views: "9.8K",
      likes: "567",
      comments: "123",
      description: "Water purification technology that doesn't waste water like crazy.",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="w-5 h-5" />
      case "audio":
        return <Volume2 className="w-5 h-5" />
      case "carousel":
        return <ChevronRight className="w-5 h-5" />
      default:
        return <Eye className="w-5 h-5" />
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-100 text-red-700"
      case "audio":
        return "bg-purple-100 text-purple-700"
      case "carousel":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-green-100 text-green-700"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Featured Advertising Platform
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {
              "Multimedia advertising that doesn't insult your intelligence. Real companies, real products, real results - no influencer nonsense or fake testimonials."
            }
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-2 border-orange-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">{ads.length}</div>
              <div className="text-gray-600">Active Campaigns</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">
                {ads.reduce((sum, ad) => sum + Number.parseFloat(ad.views.replace("K", "")), 0).toFixed(1)}K
              </div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">5</div>
              <div className="text-gray-600">Trusted Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">0%</div>
              <div className="text-gray-600">Fake Reviews</div>
            </div>
          </div>
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ads.map((ad) => (
            <Card key={ad.id} className="hover:shadow-xl transition-shadow border-2 hover:border-orange-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={`${getTypeBadgeColor(ad.type)} flex items-center gap-1`}>
                    {getTypeIcon(ad.type)}
                    {ad.type.toUpperCase()}
                    {ad.duration && ` • ${ad.duration}`}
                    {ad.images && ` • ${ad.images} images`}
                  </Badge>
                  <Badge variant="outline" className="border-orange-500 text-orange-700">
                    {ad.company}
                  </Badge>
                </div>

                {/* Mock Media Preview */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                      {getTypeIcon(ad.type)}
                    </div>
                    <p className="text-gray-600 font-medium">
                      {ad.type.charAt(0).toUpperCase() + ad.type.slice(1)} Preview
                    </p>
                  </div>
                  {ad.type === "carousel" && (
                    <div className="absolute bottom-2 right-2 flex gap-1">
                      <ChevronLeft className="w-6 h-6 bg-white/80 rounded-full p-1 cursor-pointer" />
                      <ChevronRight className="w-6 h-6 bg-white/80 rounded-full p-1 cursor-pointer" />
                    </div>
                  )}
                </div>

                <CardTitle className="text-lg">{ad.title}</CardTitle>
                <CardDescription className="text-gray-600">{ad.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {ad.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {ad.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {ad.comments}
                      </span>
                    </div>
                    <Share className="w-4 h-4 cursor-pointer hover:text-orange-600" />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                    >
                      {ad.type === "video" ? "Watch" : ad.type === "audio" ? "Listen" : "View"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advertise With Us */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl shadow-xl p-8 mt-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Advertise with Real Impact?</h2>
          <p className="text-xl mb-6 opacity-90">
            {
              "No fake followers, no bot engagement, no influencer drama. Just real people who make real purchasing decisions based on honest reviews."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl">
              Start Advertising
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600"
            >
              View Pricing
            </Button>
          </div>
        </div>

        {/* Boomer Truth */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 border-2 border-orange-200">
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🧓 The Boomer Truth About Advertising
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">What We Do</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Honest product demonstrations</li>
                <li>• Real customer testimonials</li>
                <li>• Transparent pricing</li>
                <li>• Actual problem-solving</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">What We Don't Do</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Influencer partnerships</li>
                <li>• Fake lifestyle marketing</li>
                <li>• Unrealistic promises</li>
                <li>• Trendy buzzword bingo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
