import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  ExternalLink,
  Shield,
  Users,
  Award,
  Globe,
  Calendar,
  CheckCircle,
  Crown,
  Zap,
  AlertTriangle,
} from "lucide-react"
import { companies } from "@/data/real-companies"

export default function JammiPage() {
  const company = companies.find((c) => c.id === "jammi")!

  const featureAnalysis = [
    {
      feature: "🧬 Legacy",
      verdict: "125+ years of trust, no gimmicks",
      rating: 10,
      color: "green",
    },
    {
      feature: "🧪 Manufacturing",
      verdict: "Follows Shastra-based prep, GMP-level quality control",
      rating: 9,
      color: "blue",
    },
    {
      feature: "🌍 Science-first Approach",
      verdict: "Led by pharma + Ayurveda researcher with real-world clinical backing",
      rating: 9,
      color: "purple",
    },
    {
      feature: "📦 Ecommerce UI",
      verdict: "Basic but functional — UI works, UX could use a nudge",
      rating: 6,
      color: "orange",
    },
    {
      feature: "📋 Product Range",
      verdict: "Liver, Immunity, Skin, Women's Health — no silly gimmicks",
      rating: 8,
      color: "green",
    },
    {
      feature: "🧘‍♂️ Clinic Offering",
      verdict: "Good intent, poor visibility. Where's the experience zone?",
      rating: 5,
      color: "red",
    },
    {
      feature: "🔍 Transparency",
      verdict: "All ingredients, dosage, use-cases listed clearly",
      rating: 9,
      color: "green",
    },
    {
      feature: "💬 Customer Trust",
      verdict: "Old patients swear by them. New ones don't know them yet.",
      rating: 7,
      color: "yellow",
    },
  ]

  const boomerAdvice = [
    "Form a South-wide Ayurveda doctor network – let others prescribe you.",
    "Reboot your storytelling – every founder, every formula has a story.",
    "Launch Boomer Circles – 60+ ambassadors who don't need AI to tell the truth.",
    "Show off your clinic – let people feel the Jammi way of treatment, not just read about it.",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/jammi-founder-logo.png"
                alt="Jammi Founder Legacy - Since 1897"
                width={200}
                height={240}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  💥 {company.name}
                </h1>
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg px-4 py-2">
                  👑 {company.yearsInBusiness} Years Young!
                </Badge>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🍷 Ayurvedic Powerhouse: Still Kicking Ailments Since 1897!
              </h2>

              <p className="text-xl text-gray-700 mb-4 font-medium">
                🔥 "Since 1897, Jammi has been the OG of Ayurveda in India—back when telegrams were trending and a rupee
                actually got you something."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-orange-500" />
                  <span>
                    <strong>Dynasty:</strong> {company.founder}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-5 h-5 mr-2 text-blue-500" />
                  <span>
                    <strong>Legacy:</strong> Living Ayurveda Institution
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-green-500" />
                  <span>
                    <strong>Founded:</strong> 1897 (Pre-Independence Era)
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  <span>
                    <strong>Model:</strong> {company.businessModel}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  <Link href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Jammi.in
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Website Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🛒 What Makes Jammi.in Stand Out?
          </h2>

          {/* Website Screenshot */}
          <div className="mb-8">
            <Image
              src="/images/jammi-website-homepage.jpeg"
              alt="Jammi.in Website Homepage"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Feature Analysis Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureAnalysis.map((item, index) => (
              <Card key={index} className={`border-2 border-${item.color}-200 hover:shadow-lg transition-shadow`}>
                <CardHeader className={`bg-${item.color}-50`}>
                  <CardTitle className={`text-${item.color}-700 text-lg flex items-center justify-between`}>
                    <span>{item.feature}</span>
                    <Badge variant="outline" className={`border-${item.color}-500 text-${item.color}-700`}>
                      {item.rating}/10
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 text-sm">{item.verdict}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Boomer Rating Section */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🧓 GROWMORE ENGINE™ VERDICT</h2>
            <div className="text-6xl font-bold mb-4">{company.boomerRating}/10</div>
            <p className="text-xl mb-6 max-w-4xl mx-auto">"{company.boomerVerdict}"</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">Institutional Trust</h3>
                <p className="text-sm opacity-90">🏛️ Brand capital you can't buy</p>
              </div>
              <div>
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">Clinical Depth</h3>
                <p className="text-sm opacity-90">🔬 Therapeutic interventions, not supplements</p>
              </div>
              <div>
                <Crown className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">Generational Legacy</h3>
                <p className="text-sm opacity-90">👨‍👩‍👧‍👦 Four generations of healing wisdom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section with Real Images */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🔥 The Jammi Arsenal: Products That Actually Work
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {company.products.map((product) => (
              <Card key={product.id} className="hover:shadow-2xl transition-all border-2 hover:border-orange-200">
                <CardHeader>
                  {/* Product Image */}
                  <div className="flex justify-center mb-4">
                    {product.id === "jammi-livercure-complex-forte" && (
                      <Image
                        src="/images/jammi-livercure-product.png"
                        alt="Jammi Livercure Complex Forte"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-md"
                      />
                    )}
                    {product.id === "jammi-kumkumadi-serum" && (
                      <Image
                        src="/images/jammi-kumkumadi-serum-product.png"
                        alt="Jammi Kumkumadi Serum"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-md"
                      />
                    )}
                    {product.id === "jammi-ayurvedic-consultation" && (
                      <div className="w-48 h-32 bg-gradient-to-r from-green-500 via-orange-500 to-red-500 rounded-lg shadow-md flex items-center justify-center">
                        <div className="text-center text-white">
                          <Shield className="w-12 h-12 mx-auto mb-2" />
                          <div className="text-sm font-bold">CLINIC SERVICES</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700">
                      {product.category}
                    </Badge>
                    <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="font-bold text-yellow-700">{product.rating}</span>
                    </div>
                  </div>

                  <CardTitle className="text-xl flex items-center gap-2">
                    {product.name}
                    {product.officialLink && (
                      <Button asChild size="sm" variant="outline">
                        <Link href={product.officialLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </Button>
                    )}
                  </CardTitle>

                  <CardDescription className="text-gray-600 font-medium">
                    💬 "{product.shortDescription}"
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <strong className="text-orange-600">🧓 Boomer Verdict:</strong> {product.boomerVerdict}
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">✅ What Actually Works</h4>
                        <ul className="text-xs space-y-1">
                          {product.thingsThatWork.slice(0, 3).map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-lg font-bold text-green-600">₹{product.price}</span>
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      >
                        <Link href={`/products/${product.id}`}>Full Review</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Big Boomer Advice */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center">
            <AlertTriangle className="w-8 h-8 mr-3 text-orange-600" />💡 Our Big Boomer Advice to Jammi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boomerAdvice.map((advice, index) => (
              <Card key={index} className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 font-medium">{advice}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Heritage Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            📜 The Dynasty Story: 127 Years of Uninterrupted Healing
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              With over a century of uninterrupted healing tradition, the Jammi family hasn't just handed down secret
              scrolls and medicinal wisdom—they've handed down results. Led now by the latest in the Jammi dynasty, the
              legacy still runs deep and strong—fusing ancient formulations with today's demands.
            </p>
            <p className="text-gray-700 mb-4">
              While others are still busy slapping "natural" stickers on plastic bottles, Jammi has been doing authentic
              Ayurveda before it was cool. This isn't some flash-in-the-pan Insta-ayurveda. This is 127 years of sweat,
              science, and sambar-fed wisdom, treating generations of patients without the side effects or side-eye.
            </p>
            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
              <p className="text-orange-800 font-medium italic text-lg">
                💡 "Boomer Truth Drop: Back in our day, we didn't have transplants. We had Jammi. And we lived longer."
              </p>
            </div>
          </div>
        </div>

        {/* Final Growmore Verdict */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">📣 FINAL GROWMORE VERDICT</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl mb-6">
              <strong>
                Jammi is an IP-rich, clinically-backed, brand-trusted Ayurveda engine — just waiting for the right fuel.
              </strong>
            </p>
            <p className="text-lg mb-6 opacity-90">
              Invest in voice. Build the ecosystem. Let the brand speak loud without losing its roots. The upside is not
              just profit — it's market leadership in ethical, effective Ayurveda for the modern world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🏛️</div>
                <h3 className="font-bold mb-2">Institutional Trust</h3>
                <p className="text-sm opacity-75">127 years of proven results</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-bold mb-2">Clinical Validation</h3>
                <p className="text-sm opacity-75">Real patients, real recoveries</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-bold mb-2">Scale Potential</h3>
                <p className="text-sm opacity-75">Ready for digital explosion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
