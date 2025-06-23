import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Droplets, Zap, CheckCircle, XCircle, ArrowLeft } from "lucide-react"

export default function WatsanCommunityPurifierReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
              src="/images/watsan-logo.png"
              alt="Watsan Envirotech"
              width={80}
              height={80}
              className="rounded-lg mr-4"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Watsan Community Water Purifiers
                </span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                From 50 LPH to 2500 LPH - built for Bharat, not just metro cities
              </p>
            </div>
          </div>
        </div>

        {/* Rating and Price */}
        <Card className="mb-8 border-2 border-blue-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="flex items-center bg-yellow-100 px-3 py-2 rounded-full mr-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-yellow-700">5.0/5</span>
                </div>
                <Badge className="bg-blue-600">Community Water Systems</Badge>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">₹75,000</div>
                <div className="text-sm text-gray-600">community system</div>
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
              "One of the rare community projects that doesn't just 'raise awareness' — it raises water quality.
              Hydration for all. Not just the chosen few with pin codes ending in 001."
            </p>
          </CardContent>
        </Card>

        {/* Product Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Are Watsan Community Water Purifiers?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Community-level water purification systems with Water on Wheels and Water ATW solutions. Your apartment
              association can't agree on whether to put a gate? Watsan can install a community-level purifier before
              they finish debating.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Scalable Capacity</h3>
                <p className="text-sm text-gray-600">50 LPH to 2500 LPH systems</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">No Electricity</h3>
                <p className="text-sm text-gray-600">Works without power supply</p>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-lg">
                <Users className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <h3 className="font-semibold">Community Focus</h3>
                <p className="text-sm text-gray-600">Jal Shakti Ministry endorsed</p>
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
                  <span className="text-sm">Serves entire communities reliably</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Works without electricity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Government endorsed technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Portable solutions available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Scales to community needs</span>
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
                  <span className="text-sm">Requires significant upfront investment</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Community coordination can be challenging</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Technical support limited in remote areas</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Maintenance needs training</span>
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
              "For communities serious about clean water access, this is the real deal. Hydration for all. Not just the
              chosen few with pin codes ending in 001."
            </p>
            <div className="flex items-center">
              <div className="flex items-center bg-yellow-500 px-3 py-2 rounded-full mr-4">
                <Star className="w-5 h-5 text-white fill-current mr-1" />
                <span className="font-bold">5.0/5</span>
              </div>
              <span className="text-gray-300">
                Hydration for all. Not just the chosen few with pin codes ending in 001.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Company Link */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
          >
            <Link href="/companies/watsan">Learn More About Watsan Envirotech</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
