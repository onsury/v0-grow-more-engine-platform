import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Calendar,
  DollarSign,
  Target,
  Building2,
  Users,
  Award,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Milky Mist IPO Tracker - The Dairy Empire Goes Public | GrowMoreEngine",
  description:
    "Track Milky Mist's IPO journey from Erode startup to public dairy giant. Investment timeline, milestones, and boomer analysis of India's next big FMCG IPO.",
  keywords: "Milky Mist IPO, dairy IPO India, T Sathish Kumar IPO, FMCG IPO tracker, dairy investment",
}

export default function MilkyMistIPOTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-orange-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild className="text-gray-600 hover:text-orange-600">
                <Link href="/companies/milky-mist">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Company
                </Link>
              </Button>
              <div className="h-8 w-px bg-gray-300" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Milky Mist IPO Tracker</h1>
                <p className="text-sm text-gray-600">From Erode to Exchange: The Dairy Empire Goes Public</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
              <TrendingUp className="w-3 h-3 mr-1" />
              IPO Ready
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/milky-mist-logo.png"
                  alt="Milky Mist Logo"
                  width={60}
                  height={40}
                  className="bg-white rounded-lg p-2"
                />
                <div>
                  <h2 className="text-3xl font-bold">🚀 THE BIG DAIRY IPO</h2>
                  <p className="text-blue-100">T. Sathish Kumar's 40-Year Journey to the Stock Exchange</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">₹2,500Cr+</div>
                  <div className="text-sm text-blue-100">Expected Valuation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">40+</div>
                  <div className="text-sm text-blue-100">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-blue-100">Product Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5 States</div>
                  <div className="text-sm text-blue-100">Market Presence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IPO Progress Tracker */}
        <Card className="mb-8 border-orange-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardTitle className="flex items-center text-orange-800">
              <Target className="w-5 h-5 mr-2" />
              IPO Journey Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall IPO Readiness</span>
                  <span className="text-sm font-bold text-green-600">85%</span>
                </div>
                <Progress value={85} className="h-3" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Completed Milestones
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      Business Model Validation ✅
                    </div>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      Scale Operations (5 States) ✅
                    </div>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      Brand Recognition Achieved ✅
                    </div>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      Financial Audits Complete ✅
                    </div>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      Investment Banking Partnerships ✅
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    Upcoming Milestones
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-orange-600">
                      <Clock className="w-3 h-3 mr-2" />
                      SEBI Filing & Approval 🔄
                    </div>
                    <div className="flex items-center text-orange-600">
                      <Clock className="w-3 h-3 mr-2" />
                      Roadshow & Investor Meetings 🔄
                    </div>
                    <div className="flex items-center text-gray-500">
                      <AlertCircle className="w-3 h-3 mr-2" />
                      Price Band Announcement 📅
                    </div>
                    <div className="flex items-center text-gray-500">
                      <AlertCircle className="w-3 h-3 mr-2" />
                      Public Issue Opening 📅
                    </div>
                    <div className="flex items-center text-gray-500">
                      <AlertCircle className="w-3 h-3 mr-2" />
                      Stock Exchange Listing 🎯
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8 border-blue-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="flex items-center text-blue-800">
              <Calendar className="w-5 h-5 mr-2" />
              The Journey: From Milk Vendor to IPO Candidate
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {[
                {
                  year: "1985",
                  title: "The Beginning",
                  description: "16-year-old T. Sathish Kumar drops out to save father's failing milk business in Erode",
                  status: "completed",
                  impact: "Foundation laid for dairy empire",
                },
                {
                  year: "1994",
                  title: "Paneer Production Starts",
                  description: "First paneer manufacturing unit established with determination and zero funding",
                  status: "completed",
                  impact: "Product diversification begins",
                },
                {
                  year: "1997",
                  title: "Milky Mist Brand Born",
                  description: "Official brand launch with focus on quality and freshness",
                  status: "completed",
                  impact: "Brand identity established",
                },
                {
                  year: "2010",
                  title: "First TV Commercial",
                  description: "Mass media marketing reaches millions of South Indian households",
                  status: "completed",
                  impact: "Brand awareness explosion",
                },
                {
                  year: "2018",
                  title: "German Technology Integration",
                  description: "Robotic automation and world-class processing technology implemented",
                  status: "completed",
                  impact: "Quality & scale transformation",
                },
                {
                  year: "2023",
                  title: "Full Dairy Empire",
                  description: "20+ products, 5-state presence, end-to-end supply chain control",
                  status: "completed",
                  impact: "Market leadership achieved",
                },
                {
                  year: "2024",
                  title: "IPO Preparation Phase",
                  description: "Investment banking partnerships, financial audits, regulatory compliance",
                  status: "current",
                  impact: "Public market readiness",
                },
                {
                  year: "2025",
                  title: "Expected IPO Launch",
                  description: "Public offering expected with ₹2,500Cr+ valuation target",
                  status: "upcoming",
                  impact: "Stock market debut",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      milestone.status === "completed"
                        ? "bg-green-500"
                        : milestone.status === "current"
                          ? "bg-orange-500"
                          : "bg-gray-400"
                    }`}
                  >
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-800">
                        {milestone.year} - {milestone.title}
                      </h4>
                      <Badge
                        variant={
                          milestone.status === "completed"
                            ? "default"
                            : milestone.status === "current"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {milestone.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{milestone.description}</p>
                    <p className="text-xs text-blue-600 font-medium">Impact: {milestone.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center text-green-800">
                <DollarSign className="w-5 h-5 mr-2" />
                Investment Thesis
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">End-to-End Control</h4>
                    <p className="text-sm text-gray-600">Own farms, processing, cold chain, and distribution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Proven Founder</h4>
                    <p className="text-sm text-gray-600">40 years of consistent growth without external funding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Market Timing</h4>
                    <p className="text-sm text-gray-600">Wellness boom + premium dairy demand surge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Scalability</h4>
                    <p className="text-sm text-gray-600">German tech + Indian operations = global potential</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center text-purple-800">
                <Award className="w-5 h-5 mr-2" />
                Competitive Advantages
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Paneer Leadership</h4>
                    <p className="text-sm text-gray-600">Undisputed #1 in South India fresh paneer market</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Innovation Pipeline</h4>
                    <p className="text-sm text-gray-600">Greek yogurt, cheese spreads, premium ice creams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Regional Dominance</h4>
                    <p className="text-sm text-gray-600">Deep penetration in high-growth South Indian markets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quality Reputation</h4>
                    <p className="text-sm text-gray-600">Consumer trust built over 40 years of consistency</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Boomer Verdict Section */}
        <Card className="mb-8 border-orange-300 shadow-xl bg-gradient-to-r from-orange-50 to-red-50">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800 text-center">🧠 GrowMoreEngine BOOMER IPO VERDICT</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-orange-600 mb-2">A+</div>
              <div className="text-xl font-semibold text-gray-800">PRIORITY IPO WATCHLIST</div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg text-gray-800 mb-3">💥 THE BOOMER TAKE:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                "This isn't just another IPO. This is 40 years of grit, sweat, and dairy mastery going public. When a
                16-year-old dropout builds a better empire than most MBA graduates, you don't just invest — you BET
                BIG."
              </p>
              <p className="text-gray-700 leading-relaxed">
                "Milky Mist is about to cause a dairyquake in the stock market. Amul started the white revolution, but
                Milky Mist is about to start the wealth revolution for smart investors."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-green-600">🚀</div>
                <div className="text-sm font-semibold text-gray-800">Growth Potential</div>
                <div className="text-xs text-gray-600">EXPLOSIVE</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-blue-600">🎯</div>
                <div className="text-sm font-semibold text-gray-800">Market Timing</div>
                <div className="text-xs text-gray-600">PERFECT</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-purple-600">👑</div>
                <div className="text-sm font-semibold text-gray-800">Founder Quality</div>
                <div className="text-xs text-gray-600">LEGENDARY</div>
              </div>
            </div>

            <div className="text-center">
              <Badge className="bg-orange-600 text-white text-lg px-6 py-2">
                💯 DOUBLE THUMBS UP WITH DAIRY DRIPPIN' CONFIDENCE
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            <Link href="/companies/milky-mist">
              <Building2 className="w-4 h-4 mr-2" />
              View Company Profile
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
            <Link href="https://www.milkymist.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Official Website
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
          >
            <Link href="/submit">
              <Users className="w-4 h-4 mr-2" />
              Submit Your IPO Analysis
            </Link>
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg border">
          <p className="text-xs text-gray-600 text-center">
            <strong>Disclaimer:</strong> This analysis is for informational purposes only and should not be considered
            as investment advice. IPO timelines and valuations are estimates based on publicly available information and
            market analysis. Always consult with qualified financial advisors before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  )
}
