import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Smartphone, Shield, Battery, CheckCircle, XCircle, ArrowLeft } from "lucide-react"

export default function K7MobileSecurityiOSReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
              src="/images/k7-mobitrack-ios-logo.png"
              alt="K7 MobiTrack iOS"
              width={80}
              height={80}
              className="rounded-lg mr-4"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  K7 Mobile Security for iOS
                </span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Advanced protection for Apple iOS devices that doesn't pretend to do more than iOS allows
              </p>
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
                  <span className="font-bold text-yellow-700">3.8/5</span>
                </div>
                <Badge className="bg-purple-600">iOS Security</Badge>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">₹499</div>
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
              "Works within Apple's walled garden without trying to break down the walls. Does what it can within iOS
              limits. Not K7's fault that Apple is controlling."
            </p>
          </CardContent>
        </Card>

        {/* Product Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Is K7 Mobile Security for iOS?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Specialized security features for iOS devices within Apple's security framework. K7 doesn't promise to
              turn your iPhone into something it's not - they work within Apple's rules to give you what protection is
              actually possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Web Protection</h3>
                <p className="text-sm text-gray-600">Safe browsing within iOS limits</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Smartphone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">iOS Integration</h3>
                <p className="text-sm text-gray-600">Respects iOS security model</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Battery className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Minimal Impact</h3>
                <p className="text-sm text-gray-600">Battery impact is minimal</p>
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
                  <span className="text-sm">Web protection is solid</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Doesn't interfere with iOS functionality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Battery impact is minimal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Interface fits iOS design language</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Reasonable pricing for iOS security</span>
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
                  <span className="text-sm">Limited features compared to Android</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Higher price for fewer features</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">iOS restrictions limit effectiveness</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Some features require specific iOS versions</span>
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
              "Good iOS security within the constraints Apple imposes. Does what it can within iOS limits. Not K7's
              fault that Apple is controlling."
            </p>
            <div className="flex items-center">
              <div className="flex items-center bg-yellow-500 px-3 py-2 rounded-full mr-4">
                <Star className="w-5 h-5 text-white fill-current mr-1" />
                <span className="font-bold">3.8/5</span>
              </div>
              <span className="text-gray-300">
                Does what it can within iOS limits. Not K7's fault that Apple is controlling.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Company Link */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Link href="/companies/k7-computing">Learn More About K7 Computing</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
