import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = Number.parseInt(searchParams.get("offset") || "0")
    const featured = searchParams.get("featured") === "true"
    const sort = searchParams.get("sort") || "created_at"
    const order = searchParams.get("order") || "desc"

    // Mock content data
    const mockContent = [
      {
        id: 1,
        title: "K7 Total Security: Complete Cybersecurity Solution",
        content_type: "video",
        thumbnail_url: "/images/k7-total-security-logo.png",
        duration: "12:45",
        views: 2500,
        posted: "2 days ago",
        hub_id: 2,
        company_id: 1,
        industry: "technology",
        featured: true,
        created_at: "2024-01-20T10:00:00Z",
      },
      {
        id: 2,
        title: "Jammi Ayurveda: Traditional Medicine for Modern Health",
        content_type: "article",
        thumbnail_url: "/images/jammi-livercure-product.png",
        views: 1800,
        posted: "1 week ago",
        hub_id: 1,
        company_id: 2,
        industry: "healthcare",
        featured: true,
        created_at: "2024-01-18T14:30:00Z",
      },
      {
        id: 3,
        title: "Milky Mist IPO: Dairy Industry Growth Story",
        content_type: "case-study",
        thumbnail_url: "/images/milky-mist-complete-range.png",
        views: 3200,
        posted: "3 days ago",
        hub_id: 5,
        company_id: 4,
        industry: "food",
        featured: true,
        created_at: "2024-01-19T09:15:00Z",
      },
      {
        id: 4,
        title: "Watsan Water Purification Technology",
        content_type: "video",
        thumbnail_url: "/images/watsan-household-purifier.png",
        duration: "8:30",
        views: 4500,
        posted: "5 days ago",
        hub_id: 2,
        company_id: 3,
        industry: "manufacturing",
        featured: false,
        created_at: "2024-01-17T16:45:00Z",
      },
      {
        id: 5,
        title: "Organic Shandy: Farm to Table Success",
        content_type: "podcast",
        thumbnail_url: "/placeholder.svg?height=180&width=320",
        views: 3800,
        posted: "1 week ago",
        hub_id: 6,
        company_id: 5,
        industry: "food",
        featured: false,
        created_at: "2024-01-16T11:20:00Z",
      },
      {
        id: 6,
        title: "Music Temple: Preserving Indian Classical Music",
        content_type: "article",
        thumbnail_url: "/images/ramesh-vinayakam-presentation.png",
        views: 1200,
        posted: "1 day ago",
        hub_id: 1,
        company_id: 6,
        industry: "education",
        featured: false,
        created_at: "2024-01-21T08:00:00Z",
      },
    ]

    // Filter content based on parameters
    let filteredContent = mockContent

    if (featured) {
      filteredContent = filteredContent.filter((item) => item.featured)
    }

    // Sort content
    if (sort === "views") {
      filteredContent.sort((a, b) => (order === "desc" ? b.views - a.views : a.views - b.views))
    } else if (sort === "created_at") {
      filteredContent.sort((a, b) => {
        const dateA = new Date(a.created_at).getTime()
        const dateB = new Date(b.created_at).getTime()
        return order === "desc" ? dateB - dateA : dateA - dateB
      })
    }

    // Apply pagination
    const paginatedContent = filteredContent.slice(offset, offset + limit)

    return NextResponse.json({
      success: true,
      data: paginatedContent,
      total: filteredContent.length,
      limit,
      offset,
    })
  } catch (error) {
    console.error("Content API error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch content" }, { status: 500 })
  }
}
