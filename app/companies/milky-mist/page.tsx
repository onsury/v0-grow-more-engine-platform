import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { TrendingUp, ExternalLink, MessageSquare, Building2, Users, Globe, Award, Star } from "lucide-react"

export default function MilkyMistPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Milky Mist Dairy Food Pvt. Ltd.</h1>
        <p className="text-gray-500 mt-2">Leading manufacturer and supplier of dairy products in South India.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="https://www.milkymist.com/products" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Buy Milky Mist Products
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
            <Link href="/companies/milky-mist/ipo-tracker">
              <TrendingUp className="w-4 h-4 mr-2" />
              Track IPO Journey
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Link href="/submit">
              <MessageSquare className="w-4 h-4 mr-2" />
              Submit Review
            </Link>
          </Button>
        </div>
      </div>

      <Separator className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>About Milky Mist</CardTitle>
            <CardDescription>Information about the company.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-500" />
                <span>Founded: 2014</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span>Employees: 1000+</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <span>Headquarters: Erode, Tamil Nadu, India</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Awards & Recognition</CardTitle>
            <CardDescription>Achievements and accolades.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gray-500" />
                <span>Best Dairy Brand - 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gray-500" />
                <span>Quality Excellence Award - 2021</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Key financial highlights.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <span>Details coming soon...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
