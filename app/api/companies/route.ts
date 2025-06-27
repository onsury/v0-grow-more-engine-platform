import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
<<<<<<< HEAD

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    const companies = await db.getCompanies(limit, offset)

    return NextResponse.json({
      success: true,
      data: companies,
    })
  } catch (error) {
    console.error("Companies API error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch companies" }, { status: 500 })
=======
import { realCompanies } from "@/data/real-companies"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const limit = Number.parseInt(searchParams.get("limit") || "50")
  const offset = Number.parseInt(searchParams.get("offset") || "0")

  try {
    // Attempt to fetch from DB
    const companies = (await db.getCompanies()) ?? []

    // If the DB call succeeded but returned no rows, fall back to static data
    const data =
      companies.length > 0 ? companies.slice(offset, offset + limit) : realCompanies.slice(offset, offset + limit)

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    // Typical error when the table hasn’t been migrated yet:
    // “relation "companies" does not exist”
    console.error("Companies API fallback:", error?.message || error)

    const data = realCompanies.slice(offset, offset + limit)
    return NextResponse.json({ success: true, data })
>>>>>>> fe3c7b5 (Initial commit with Baserow integration)
  }
}
