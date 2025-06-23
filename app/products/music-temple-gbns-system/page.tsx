import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Music, BookOpen, Users, CheckCircle, XCircle, ArrowLeft } from "lucide-react"

export default function MusicTempleGBNSReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link href="/products" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Products
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/images/music-temple-logo.png"
              alt="Music Temple"
              width={80}
              height={80}
              className="rounded-lg mr-4"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                  GBNS Music Notation System
                </span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">Music notation system that makes sense to Indian musicians</p>
            </div>
          </div>
        </div>

        {/* Rating and Price */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="flex items-center bg-yellow-100 px-3 py-2 rounded-full mr-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-yellow-700">4.2/5</span>
                </div>
                <Badge className="bg-purple-600">Music Education</Badge>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">₹2,500</div>
                <div className="text-sm text-gray-600">complete system</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Boomer Verdict */}
        <Card className="mb-8 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800">
              <span className="text-2xl mr-2">🧓</span>
              Boomer Verdict
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-orange-700 font-medium">
              "Finally, someone who understands that Western notation doesn't work for everything. Music Temple is
              trying to solve a real problem - Western notation for Indian music is like using chopsticks to eat soup."
            </p>
          </CardContent>
        </Card>

        {/* Product Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Is the GBNS Music Notation System?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Innovative music notation system designed specifically for Indian classical and contemporary music.
              Created by Ramesh Vinayakam, this IIT-incubated system addresses the fundamental problem that Western
              notation simply doesn't capture the nuances of Indian music.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Music className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Indian Music Focus</h3>
                <p className="text-sm text-gray-600">Designed for Indian classical and contemporary styles</p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <BookOpen className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <h3 className="font-semibold">Comprehensive Materials</h3>
                <p className="text-sm text-gray-600">Complete learning system with support materials</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold">All Skill Levels</h3>
                <p className="text-sm text-gray-600">Suitable for beginners to advanced musicians</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pros and Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                What Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Notation system is logical and intuitive</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Good support materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Instructor guidance is helpful</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Innovative approach to old problems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Intuitive for Indian music styles</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                What's Meh
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Takes time to unlearn old habits</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Price is steep for individual learners</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Limited market adoption so far</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Learning curve for traditional musicians</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Final Judgment */}
        <Card className="mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">🧓 Final Boomer Logic</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              "If you're serious about Indian music education, this is worth considering despite the learning curve.
              Innovative solution to a real problem, but needs time to prove itself in the market."
            </p>
            <div className="flex items-center">
              <div className="flex items-center bg-yellow-500 px-3 py-2 rounded-full mr-4">
                <Star className="w-5 h-5 text-white fill-current mr-1" />
                <span className="font-bold">4.2/5</span>
              </div>
              <span className="text-gray-300">
                Innovative solution to a real problem, but needs time to prove itself in the market.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Company Link */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Link href="/companies/music-temple">Learn More About Music Temple</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
