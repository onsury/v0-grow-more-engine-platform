import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const content = await db.getContentBySlug(params.slug)

    if (!content) {
      return NextResponse.json({ success: false, error: "Content not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: content,
    })
  } catch (error) {
    console.error("Content API error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch content" }, { status: 500 })
  }
}
