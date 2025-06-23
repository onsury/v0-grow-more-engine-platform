import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const company = await db.getCompanyBySlug(params.slug)

    if (!company) {
      return NextResponse.json({ success: false, error: "Company not found" }, { status: 404 })
    }

    // Get company products
    const products = await db.getProductsByCompanyId(company.id)

    return NextResponse.json({
      success: true,
      data: {
        ...company,
        products,
      },
    })
  } catch (error) {
    console.error("Company API error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch company" }, { status: 500 })
  }
}
