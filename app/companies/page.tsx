import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Calendar, ExternalLink, Building2 } from "lucide-react"
import { companies } from "@/data/real-companies"

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Companies We Actually Trust
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {
              "These aren't fly-by-night startups. These are companies with decades of proven track records, real customers, and products that actually work. No unicorn valuations, just solid businesses."
            }
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-2 border-orange-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">{companies.length}</div>
              <div className="text-gray-600">Trusted Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">
                {companies.reduce((sum, c) => sum + c.yearsInBusiness, 0)}+
              </div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">
                {companies.reduce((sum, c) => sum + c.products.length, 0)}
              </div>
              <div className="text-gray-600">Products Reviewed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">0</div>
              <div className="text-gray-600">Affiliate Links</div>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
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
                <CardTitle className="text-xl flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-600" />
                  {company.name}
                </CardTitle>
                <CardDescription className="text-gray-600">{company.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-orange-500" />
                      Founded by: {company.founder}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      Heritage: {company.heritage.slice(0, 60)}...
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                      {company.products.length} products reviewed
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                    >
                      <Link href={`/companies/${company.id}`}>View Company Profile</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                    >
                      <Link
                        href={company.website.startsWith("http") ? company.website : `https://${company.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl shadow-xl p-8 mt-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Want Your Company Reviewed?</h2>
          <p className="text-xl mb-6 opacity-90">
            {
              "We only review companies that have been around long enough to prove themselves. If you've got the track record, we've got the honest opinions."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl">
              <Link href="/submit">Submit Your Company</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Link href="/products">View All Reviews</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
