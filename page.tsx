import { supabase } from '../lib/supabaseClient'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Shield, Heart, Users, TrendingUp, Award, Clock } from "lucide-react"

export default async function HomePage() {
  // Fetch companies from Supabase
  const { data: companies, error } = await supabase.from('companies').select('*').limit(3)

  if (error) {
    return <div>Error loading companies: {error.message}</div>
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 flex items-center justify-center shadow-2xl">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                GrowMoreEngine
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">Run by Boomers. Not Bots.</p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Authentic product reviews with boomer wisdom, zero affiliate BS, and real talk from decades of experience. We've seen every marketing gimmick, tried every "revolutionary" product, and we're here to tell you what actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                <Link href="/products">
                  <Star className="w-5 h-5 mr-2" />
                  Browse Reviews
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all">
                <Link href="/companies">
                  <Shield className="w-5 h-5 mr-2" />
                  Meet Our Companies
                </Link>
              </Button>
            </div>
            <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-orange-200 max-w-2xl mx-auto">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Premium Members Get:</strong> Exclusive company insights, founder interviews, and detailed business analysis
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">📊 Financial Deep Dives</Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-700">🎯 Market Analysis</Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-700">💡 Growth Strategies</Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">🔍 Competitive Intelligence</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Companies We Actually Trust
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These aren't fly-by-night startups. These are companies with decades of proven track records, real customers, and products that actually work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies?.map((company) => (
              <Card key={company.id} className="hover:shadow-xl transition-shadow border-2 hover:border-orange-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700">
                      {company.industry}
                    </Badge>
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      {company.yearsInBusiness}+ years
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <CardDescription className="text-gray-600">{company.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-orange-500" />
                      Founded by: {company.founder}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                      {/* You can add more company info here */}
                    </div>
                    <Button asChild className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                      <Link href={`/companies/${company.id}`}>View Company Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Some Real Talk?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of smart consumers who've had enough of fake reviews and affiliate marketing BS. Get honest opinions from people who actually know what they're talking about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl">
              <Link href="/dashboard">
                <Heart className="w-5 h-5 mr-2" />
                Access Dashboard
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600">
              <Link href="/submit">Submit Product for Review</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}