import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Plane, Droplets, Leaf, CheckCircle, XCircle, ArrowLeft } from "lucide-react"

export default function WatsanTravelPurifierReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50">
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
                <span className="bg-gradient-to-r from-teal-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
                  Watsan Travel Purifiers
                </span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">Because drinking plastic-flavored water is sooo 2023</p>
            </div>
          </div>
        </div>

        {/* Rating and Price */}
        <Card className="mb-8 border-2 border-teal-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="flex items-center bg-yellow-100 px-3 py-2 rounded-full mr-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-yellow-700">5.0/5</span>
                </div>
                <Badge className="bg-teal-600">Portable Water Purification</Badge>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">₹2,500</div>
                <div className="text-sm text-gray-600">portable system</div>
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
              "Finally, a travel buddy that doesn't nag or charge you ₹40 at a highway dhaba. The future of guilt-free
              hydration — bring it on!"
            </p>
          </CardContent>
        </Card>

        {/* Product Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Are Watsan Travel Purifiers?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Portable water purifiers that filter microplastics and pathogens while saving the planet. One litre =
              240,000 plastic particles, and that's before the bottle hits your car's AC vent and melts into a
              biohazard. Watsan's travel purifiers are poised to kill the bottled water industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <Plane className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <h3 className="font-semibold">Ultra Portable</h3>
                <p className="text-sm text-gray-600">Fits in your bag</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Droplets className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Microplastic Filter</h3>
                <p className="text-sm text-gray-600">Filters microplastics and pathogens</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Leaf className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Eco-Friendly</h3>
                <p className="text-sm text-gray-600">Saves money on bottled water</p>
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
                  <span className="text-sm">Eliminates need for plastic bottles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Filters out harmful microplastics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Portable and convenient</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Cost-effective for frequent travelers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Environmentally responsible choice</span>
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
                  <span className="text-sm">Still in coming soon phase</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Limited to certain water sources</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Requires maintenance</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Limited availability</span>
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
              "The future of guilt-free travel hydration. Bring it on! Future of guilt-free hydration — bring it on!"
            </p>
            <div className="flex items-center">
              <div className="flex items-center bg-yellow-500 px-3 py-2 rounded-full mr-4">
                <Star className="w-5 h-5 text-white fill-current mr-1" />
                <span className="font-bold">5.0/5</span>
              </div>
              <span className="text-gray-300">Future of guilt-free hydration — bring it on!</span>
            </div>
          </CardContent>
        </Card>

        {/* Company Link */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700"
          >
            <Link href="/companies/watsan">Learn More About Watsan Envirotech</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
