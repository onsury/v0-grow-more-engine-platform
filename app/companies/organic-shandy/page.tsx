import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  ExternalLink,
  Users,
  Award,
  Leaf,
  Heart,
  ShoppingCart,
  CheckCircle,
  Target,
  Lightbulb,
} from "lucide-react"

export default function OrganicShandyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-orange-600 rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-green-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Organic Shandy
                </span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Because you shouldn't need a PhD in chemistry to eat a tomato
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">25+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Organic Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">0</div>
              <div className="text-sm text-gray-600">Middlemen</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4.8</div>
              <div className="text-sm text-gray-600">Boomer Rating</div>
            </div>
          </div>
        </div>

        {/* Founder Story */}
        <Card className="mb-12 border-2 border-green-100 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-green-50 to-orange-50">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="w-6 h-6 text-green-600" />
              The Organic Vigilantes: Murali & Hari's Story
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-4">🧑‍🌾 Murali - The OG Farm Whisperer</h3>
                <p className="text-gray-700 mb-4">
                  The man who wanted his veggies pesticide-free — couldn't find any, so he just built the whole damn
                  supply chain. Murali probably knows each spinach plant by name. This isn't just farming, it's
                  agricultural artistry.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800 italic">
                    "Remember the days when you'd pluck tomatoes from your backyard? I'm bringing that memory back. But
                    without the back pain. And the cows in your front yard."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-700 mb-4">
                  👨‍💻 Hari Sethuraman - The IITian Nature Convert
                </h3>
                <p className="text-gray-700 mb-4">
                  A successful tech entrepreneur who said "CTRL+ALT+DEL" to tech, and "Namaskaram" to nature. Saw
                  Murali's mission, sold his company, and jumped into the mud (literally).
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-orange-800 italic">
                    "If karma had a startup portfolio, Organic Shandy would be a unicorn with a halo."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-orange-100 rounded-xl">
              <h4 className="text-lg font-bold text-gray-800 mb-3">🌱 What Shandy Stands For</h4>
              <p className="text-gray-700 mb-3">
                <strong>Shandy = Tamil "Sandhai" = Marketplace.</strong>
                <br />
                But with clean air, cleaner conscience, and veg that doesn't glow in the dark.
              </p>
              <p className="text-gray-700">
                This is not your average overpriced "Farm-fresh-but-actually-from-Koyambedu" kind of place. This is the
                real deal — from soil to shelf, with no shady backdoor ripened bananas. Just actual, certified,
                walked-the-farm, smelled-the-soil organic goodness.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Company Ethos */}
        <Card className="mb-12 border-2 border-orange-100 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-600" />
              Company Ethos That Melts Our Old Hearts
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Real Farm Checks</h4>
                    <p className="text-gray-600 text-sm">
                      Not "Google Maps visit" kind of sourcing. They go, talk to the farmers, help them when they're
                      down, and build actual trust. It's not a supply chain. It's a human chain.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Backing Farmers in Distress</h4>
                    <p className="text-gray-600 text-sm">
                      They don't just talk organic. They live it, support it, and make sure their suppliers survive and
                      thrive. CSR? Nah bro, this is Human R&D.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">No Middlemen Mafia</h4>
                    <p className="text-gray-600 text-sm">
                      Farm to fork. Minus the fork cost. Direct relationships mean better prices for farmers and fresher
                      produce for customers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Authentic Organic Vigilantes</h4>
                    <p className="text-gray-600 text-sm">
                      These aren't founders, they're organic vigilantes fighting the good fight against chemical-laden
                      produce and fake organic labels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Boomer Rating Section */}
        <Card className="mb-12 border-2 border-red-100 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="w-6 h-6 text-red-600" />
              GrowMoreEngine™ Boomer Verdict
            </CardTitle>
            <CardDescription className="text-lg">
              "Not just a store — it's a movement wrapped in moringa leaves."
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Authenticity</span>
                    <span className="text-sm text-gray-600">5/5</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">
                    Murali might be the only guy who's rejected more suppliers than Shark Tank investors.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Product Quality</span>
                    <span className="text-sm text-gray-600">5/5</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">Even turmeric here has a personality.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Founders' Guts</span>
                    <span className="text-sm text-gray-600">5/5</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">Sold a tech company to sell brinjals. Respect++</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Impact to Farmers</span>
                    <span className="text-sm text-gray-600">5/5</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">The kind of support system Agri India dreams about.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Digital Experience</span>
                    <span className="text-sm text-gray-600">4/5</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">
                    Website works. Cart works. But UI could use some "Hari 2.0 magic."
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Room for Growth</span>
                    <span className="text-sm text-gray-600">🔥🔥🔥🔥🔥</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">
                    Subscription models, mobile app, farmer vlogs — the sky is green.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-8 h-8 text-yellow-500 fill-current" />
                <span className="text-3xl font-bold text-gray-800">4.8/5</span>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">Overall Boomer Rating</p>
              <p className="text-gray-700 italic">
                "If you're in Chennai and not buying from Organic Shandy, you're not eating veggies — you're just
                chewing regrets."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Product Categories */}
        <Card className="mb-12 border-2 border-green-100 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardTitle className="text-2xl flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-green-600" />
              Product Reviews - Boomer Style
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Veggies & Greens */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-green-800">🥬 Organic Veggies & Greens</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-semibold">5.0</span>
                  </div>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  "Every keerai here has been touched by sunlight and NOT by chemical labs. Even the palak doesn't look
                  depressed."
                </p>
                <Button asChild size="sm" className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/products/organic-shandy-veggies-greens">Read Full Review</Link>
                </Button>
              </div>

              {/* Fruits */}
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-orange-800">🍌 Organic Fruits</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-semibold">4.0</span>
                  </div>
                </div>
                <p className="text-sm text-orange-700 mb-3">
                  "Bananas that taste like… bananas. Not like latex gloves with sugar injections. Revolutionary."
                </p>
                <Button asChild size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/products/organic-shandy-fruits">Read Full Review</Link>
                </Button>
              </div>

              {/* Grains */}
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-yellow-800">🍚 Rice, Millets & Grains</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-semibold">5.0</span>
                  </div>
                </div>
                <p className="text-sm text-yellow-700 mb-3">"Sir, if rice had an MBA, this is the Ivy League batch."</p>
                <Button asChild size="sm" className="w-full bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/products/organic-shandy-grains">Read Full Review</Link>
                </Button>
              </div>

              {/* Pickles & Oils */}
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-red-800">🫙 Pickles, Oils & Spices</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-semibold">5.0</span>
                  </div>
                </div>
                <p className="text-sm text-red-700 mb-3">"The ginger pickle slapped harder than 1980s parenting."</p>
                <Button asChild size="sm" className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/products/organic-shandy-pickles-oils">Read Full Review</Link>
                </Button>
              </div>

              {/* Personal Care */}
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-purple-800">🧼 Personal & Home Care</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-semibold">4.0</span>
                  </div>
                </div>
                <p className="text-sm text-purple-700 mb-3">"Even the soap smells like it went to gurukulam."</p>
                <Button asChild size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/products/organic-shandy-personal-care">Read Full Review</Link>
                </Button>
              </div>

              {/* Millets Mix (Existing) */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-blue-800">🌾 Multi-Millet Mix</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-semibold">4.4</span>
                  </div>
                </div>
                <p className="text-sm text-blue-700 mb-3">
                  "Millets that taste good and are actually good for you - revolutionary concept."
                </p>
                <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/products/organic-shandy-millets-mix">Read Full Review</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="mb-12 border-2 border-blue-100 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-blue-600" />
              Recommendations to Shandy (From Your Well-Meaning Uncle)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Double Down on Storytelling</h4>
                    <p className="text-gray-600 text-sm">
                      Show more farmer faces, sourcing journeys, and behind-the-scenes. You have real gold. Just let
                      people feel it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Subscription Model</h4>
                    <p className="text-gray-600 text-sm">
                      Boomers love predictability. Let us set a veg box and forget it. Bonus: Less WhatsApp reminders
                      about ordering spinach.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Teach the Younger Gen</h4>
                    <p className="text-gray-600 text-sm">
                      A YouTube series where Murali explains how to really buy tomatoes? Instant hit. Call it "Veggie
                      Sense with Uncle M."
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Product Expansion</h4>
                    <p className="text-gray-600 text-sm">
                      You've built trust. Now launch organic laddus, murukkus, ready-to-roast veggie mixes. Be the
                      kitchen's savior too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 via-orange-600 to-red-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Eat Clean & Think Clear?</h2>
          <p className="text-xl mb-6 opacity-90">
            "So go ahead. Order from organicshandy.com. Eat clean. Think clear. And thank Murali and Hari for making
            organic feel original again."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 shadow-xl">
              <Link href="https://organicshandy.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Organic Shandy
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600"
            >
              <Link href="/products">View All Product Reviews</Link>
            </Button>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-xl">
            <p className="text-lg font-semibold mb-2">Final Boomer Say</p>
            <p className="italic opacity-90">
              "In a world of fake 'organic' stickers and influencer-driven kale cults, here's a duo that quietly turned
              a home into a hub, a sandhai into a system, and farmers into family."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
