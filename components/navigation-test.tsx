"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, ExternalLink } from "lucide-react"

export function NavigationTest() {
  const [testedLinks, setTestedLinks] = useState<Record<string, boolean>>({})

  const testLink = (linkId: string) => {
    setTestedLinks((prev) => ({ ...prev, [linkId]: true }))
  }

  const navigationLinks = [
    {
      category: "Main Navigation",
      links: [
        { id: "home", label: "Home", href: "/" },
        { id: "products", label: "All Products", href: "/products" },
        { id: "companies", label: "All Companies", href: "/companies" },
        { id: "founders", label: "All Founders", href: "/founders" },
        { id: "about", label: "About Us", href: "/about" },
        { id: "contact", label: "Contact", href: "/contact" },
        { id: "submit", label: "Submit Review", href: "/submit" },
      ],
    },
    {
      category: "StartHub Media Platform",
      links: [
        { id: "starthub-overview", label: "Platform Overview", href: "/starthub-media" },
        { id: "starthub-dashboard", label: "Dashboard", href: "/starthub-media/dashboard" },
        { id: "starthub-users", label: "User Management", href: "/starthub-media/dashboard/users" },
        { id: "starthub-login", label: "Login", href: "/starthub-media/login" },
        { id: "starthub-signup", label: "Sign Up", href: "/starthub-media/login?tab=signup" },
      ],
    },
    {
      category: "Content Hubs",
      links: [
        { id: "content-hubs", label: "All Content Hubs", href: "/content-hubs" },
        { id: "hrhub", label: "HR Hub", href: "/content-hubs/hrhub" },
        { id: "finhub", label: "Finance Hub", href: "/content-hubs/finhub" },
        { id: "techhub", label: "Tech Hub", href: "/content-hubs/techhub" },
        { id: "marketinghub", label: "Marketing Hub", href: "/content-hubs/marketinghub" },
        { id: "saleshub", label: "Sales Hub", href: "/content-hubs/saleshub" },
        { id: "retailhub", label: "Retail Hub", href: "/content-hubs/retailhub" },
        { id: "content-explore", label: "Explore Content", href: "/content-hubs/explore" },
      ],
    },
    {
      category: "Company Pages",
      links: [
        { id: "k7-computing", label: "K7 Computing", href: "/companies/k7-computing" },
        { id: "jammi", label: "Jammi Ayurveda", href: "/companies/jammi" },
        { id: "milky-mist", label: "Milky Mist", href: "/companies/milky-mist" },
        { id: "milky-mist-ipo", label: "Milky Mist IPO", href: "/companies/milky-mist/ipo-tracker" },
        { id: "organic-shandy", label: "Organic Shandy", href: "/companies/organic-shandy" },
        { id: "music-temple", label: "Music Temple", href: "/companies/music-temple" },
        { id: "watsan", label: "Watsan Envirotech", href: "/companies/watsan" },
      ],
    },
    {
      category: "Product Pages",
      links: [
        { id: "k7-total-security", label: "K7 Total Security", href: "/products/k7-total-security" },
        { id: "jammi-livercure", label: "Jammi Livercure", href: "/products/jammi-livercure-complex-forte" },
        { id: "jammi-kumkumadi", label: "Jammi Kumkumadi Serum", href: "/products/jammi-kumkumadi-serum" },
        { id: "milky-mist-paneer", label: "Milky Mist Paneer", href: "/products/milky-mist-paneer" },
        { id: "watsan-ro", label: "Watsan RO System", href: "/products/watsan-home-ro-system" },
        { id: "organic-veggies", label: "Organic Veggies", href: "/products/organic-shandy-veggies-greens" },
      ],
    },
    {
      category: "User Dashboard",
      links: [
        { id: "user-dashboard", label: "User Dashboard", href: "/dashboard" },
        { id: "user-settings", label: "User Settings", href: "/dashboard/settings" },
        { id: "user-bookmarks", label: "User Bookmarks", href: "/dashboard/bookmarks" },
      ],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Navigation Test Dashboard</h1>
        <p className="text-gray-600">
          Test all navigation links to ensure they're properly connected. Click "Test" next to each link to verify it
          works.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {navigationLinks.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {category.category}
                <Badge variant="outline">
                  {Object.keys(testedLinks).filter((id) => category.links.some((link) => link.id === id)).length} /{" "}
                  {category.links.length} tested
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {category.links.map((link) => (
                  <div key={link.id} className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center gap-2">
                      {testedLinks[link.id] ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-gray-300" />
                      )}
                      <span className="text-sm font-medium">{link.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" onClick={() => testLink(link.id)} asChild>
                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Test
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Test All */}
      <div className="mt-8 text-center">
        <Button
          size="lg"
          className="bg-orange-600 hover:bg-orange-700"
          onClick={() => {
            const allLinkIds = navigationLinks.flatMap((cat) => cat.links.map((link) => link.id))
            const newTestedLinks = {}
            allLinkIds.forEach((id) => (newTestedLinks[id] = true))
            setTestedLinks(newTestedLinks)
          }}
        >
          Mark All as Tested
        </Button>
      </div>
    </div>
  )
}
