import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, TrendingUp, Users } from "lucide-react"
import { companies } from "@/data/real-companies"

export default function FeaturedReviewsPage() {
  // Get top-rated products across all companies
  const allProducts = companies.flatMap((company) =>
    company.products.map((product) => ({
      ...product,
      companyName: company.name,
      companyId: company.id,
    })),
  )

  const featuredProducts = allProducts.sort((a, b) => b.rating - a.rating).slice(0, 9) // Top 9 products

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Featured Reviews
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {
              "The cream of the crop - our highest-rated products that have earned their stripes through real-world testing and boomer wisdom. These aren't just good products, they're the ones we'd actually recommend to our own families."
            }
          </p>
        </div>

        {/* Featured Badge */}
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl shadow-xl p-8 mb-12 text-white text-center">
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">🏆 Boomer-Certified Excellence</h2>
          <p className="text-xl opacity-90">
            {
              "These products didn't just pass our tests - they exceeded our expectations. And trust us, we have very high standards."
            }
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="hover:shadow-xl transition-shadow border-2 hover:border-orange-200 relative"
            >
              {/* Featured Badge */}
              {index < 3 && (
                <div className="absolute -top-3 -right-3 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 text-xs font-bold">
                    #{index + 1} FEATURED
                  </Badge>
                </div>
              )}

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700">
                    {product.category}
                  </Badge>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-bold text-yellow-700">{product.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  <span className="text-xs text-orange-600 font-medium">{product.companyName}</span>
                  <br />
                  {product.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm">
                    <strong className="text-orange-600">🧓 Boomer Verdict:</strong>
                    <p className="text-gray-700 mt-1">{product.boomerVerdict}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Why It's Featured:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {product.thingsThatWork.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <TrendingUp className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-lg font-bold text-green-600">₹{product.price}</span>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                      >
                        <Link href={`/companies/${product.companyId}`}>Company</Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      >
                        <Link href={`/products/${product.id}`}>Full Review</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why These Are Featured */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-12 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🧓 Why These Made the Cut
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Proven Performance</h3>
              <p className="text-gray-600 text-sm">
                These products consistently deliver on their promises. No marketing fluff, just results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Real User Satisfaction</h3>
              <p className="text-gray-600 text-sm">
                Actual customers love these products, not just paid reviewers or influencers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Boomer Approved</h3>
              <p className="text-gray-600 text-sm">
                They passed our toughest critics - people who've seen every trend come and go.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 mt-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Want More Honest Reviews?</h2>
          <p className="text-xl mb-6 opacity-90">
            {
              "These are just the highlights. We've got honest opinions on dozens more products that might be perfect for your needs."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              <Link href="/products">Browse All Reviews</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/companies">Meet the Companies</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
