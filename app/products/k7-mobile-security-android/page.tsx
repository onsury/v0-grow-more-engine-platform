import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Smartphone, Shield, Battery, CheckCircle, XCircle, ArrowLeft } from "lucide-react"

export default function K7MobileSecurityAndroidReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
              src="/images/k7-mobitrack-android-logo.png"
              alt="K7 MobiTrack Android"
              width={80}
              height={80}
              className="rounded-lg mr-4"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  K7 Mobile Security for Android
                </span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">If your phone is smarter than you, protect it smarter too</p>
            </div>
          </div>
        </div>

        {/* Rating and Price */}
        <Card className="mb-8 border-2 border-green-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="flex items-center bg-yellow-100 px-3 py-2 rounded-full mr-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-yellow-700">4.0/5</span>
                </div>
                <Badge className="bg-green-600">Mobile Security</Badge>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">₹399</div>
                <div className="text-sm text-gray-600">per year</div>
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
              "Peace of mind in your pocket. Or your handbag. Or your belt clip. We don't judge."
            </p>
          </CardContent>
        </Card>

        {/* Product Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Is K7 Mobile Security for Android?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Anti-theft, App Lock, Parental Control, Web Protection for Android devices. This isn't some bloated
              security app that turns your phone into a brick - it's mobile security that actually works without killing
              your battery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold">Anti-Theft Protection</h3>
                <p className="text-sm text-gray-600">Find, lock, or wipe your device remotely</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">App Lock</h3>
                <p className="text-sm text-gray-600">Keep nosy apps under control</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Battery className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Battery Friendly</h3>
                <p className="text-sm text-gray-600">Minimal battery drain</p>
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
                  <span className="text-sm">Battery life remains normal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Anti-theft features work as advertised</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No constant notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Easy to set up and forget</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Clean, simple interface</span>
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
                  <span className="text-sm">Feature set is basic compared to premium options</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Android-only limits market</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Some advanced users might want more control</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Customer support could be faster</span>
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
              "Solid mobile security for people who want protection without complications. Protects your phone without
              making it unusable. Simple concept, well executed."
            </p>
            <div className="flex items-center">
              <div className="flex items-center bg-yellow-500 px-3 py-2 rounded-full mr-4">
                <Star className="w-5 h-5 text-white fill-current mr-1" />
                <span className="font-bold">4.0/5</span>
              </div>
              <span className="text-gray-300">
                Protects your phone without making it unusable. Simple concept, well executed.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Company Link */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            <Link href="/companies/k7-computing">Learn More About K7 Computing</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
