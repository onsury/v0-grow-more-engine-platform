import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Heart, Award, CheckCircle, AlertCircle, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MilkyMistButterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link
          href="/companies/milky-mist"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Milky Mist
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  4.5/5 Rating
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Table Butter
                </Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Milky Mist Table Butter</h1>
              <p className="text-xl text-purple-100 mb-6">
                Butter that spreads like butter should, not like cold concrete.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold">₹65</span>
                <span className="text-purple-200">per 100g pack</span>
              </div>
              <div className="flex gap-4">
                <Button size="lg" asChild className="bg-white text-purple-600 hover:bg-purple-50">
                  <a href="https://www.milkymist.com/products" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🧈</div>
                <p className="text-lg text-purple-100">Spreadable Table Butter</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <Card className="mb-12 border-l-4 border-l-purple-600">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Butter That Actually Butters
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-4">
            <p className="text-gray-700">
              Butter that doesn't require a construction drill to spread on bread. Creamy table butter made from fresh
              cream. Spreads easily and tastes like actual butter, not margarine in disguise.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <p className="text-purple-800 font-semibold italic">
                "While premium brands charge you like butter is made from unicorn milk, Milky Mist delivers decent
                butter at prices that won't make you cry."
              </p>
              <p className="text-purple-600 text-sm mt-2">- GrowMoreEngine Boomer Logic</p>
            </div>
          </CardContent>
        </Card>

        {/* Rating Breakdown */}
        <Card className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800 flex items-center gap-3">
              <Star className="w-6 h-6" />
              Boomer Rating Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold text-orange-600">4.5</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Spreadability</span>
                    <span className="font-semibold text-green-600">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taste</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Freshness</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Value for Money</span>
                    <span className="font-semibold text-green-600">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Consistency</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-bold text-green-800 mb-2">✅ What Works:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Spreads easily on bread</li>
                    <li>• Good for cooking and baking</li>
                    <li>• Authentic butter taste</li>
                    <li>• Reasonable pricing</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ What's Meh:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Can be too soft in summer</li>
                    <li>• Limited variety options</li>
                    <li>• Basic packaging</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Review */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                The Good Stuff
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Spreads easily even when cold</strong>
                    <p className="text-gray-600 text-sm">No more torn bread slices</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Made from fresh cream</strong>
                    <p className="text-gray-600 text-sm">Authentic butter taste and texture</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Good butter flavor</strong>
                    <p className="text-gray-600 text-sm">Tastes like actual butter, not margarine</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Good for both cooking and spreading</strong>
                    <p className="text-gray-600 text-sm">Versatile for all butter needs</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-orange-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Room for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Can melt quickly in hot weather</strong>
                    <p className="text-gray-600 text-sm">Summer storage can be challenging</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Limited salted/unsalted options</strong>
                    <p className="text-gray-600 text-sm">Could use more variety</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Shorter shelf life than processed alternatives</strong>
                    <p className="text-gray-600 text-sm">Fresh means it doesn't last as long</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Requires refrigeration</strong>
                    <p className="text-gray-600 text-sm">No room temperature storage</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Target Audience */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800 flex items-center gap-3">
              <Users className="w-6 h-6" />
              Who Should Buy This?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-bold text-purple-800 mb-2">Families</h3>
                <p className="text-gray-700 text-sm">
                  Who want good quality butter for daily use without breaking the bank
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🍞</div>
                <h3 className="font-bold text-blue-800 mb-2">Breakfast Lovers</h3>
                <p className="text-gray-700 text-sm">Who need butter that spreads easily on morning toast</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">👨‍🍳</div>
                <h3 className="font-bold text-green-800 mb-2">Home Cooks</h3>
                <p className="text-gray-700 text-sm">Who want reliable butter for cooking and baking</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Verdict */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-300">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800 flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              Final Boomer Verdict
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl">🧈</div>
              <h3 className="text-2xl font-bold text-purple-800">4.5/5 - Butter That Spreads and Tastes Right</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Solid, dependable butter that does what butter should do. Sometimes simple is perfect. Butter that
                spreads and tastes right.
              </p>
              <div className="bg-purple-100 p-6 rounded-lg border-l-4 border-purple-400 max-w-2xl mx-auto">
                <p className="text-purple-800 font-semibold">
                  "Spreads easily on bread, good for cooking and baking, authentic butter taste, and reasonable pricing.
                  Consistent quality without the premium price drama."
                </p>
                <p className="text-purple-600 text-sm mt-2">- GrowMoreEngine Boomer Council</p>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
                  <a href="https://www.milkymist.com/products" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Milky Mist Butter
                  </a>
                </Button>
                <Link href="/companies/milky-mist">
                  <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
