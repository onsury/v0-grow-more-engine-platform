import { type NextRequest, NextResponse } from "next/server"
import { getUserFromToken } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Authorization required" }, { status: 401 })
    }

    const token = authHeader.substring(7)
    const user = await getUserFromToken(token)

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const bookmarks = await db.getUserBookmarks(user.id as number)

    return NextResponse.json({
      success: true,
      data: bookmarks,
    })
  } catch (error) {
    console.error("Bookmarks API error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch bookmarks" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Authorization required" }, { status: 401 })
    }

    const token = authHeader.substring(7)
    const user = await getUserFromToken(token)

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const { contentId } = await request.json()

    if (!contentId) {
      return NextResponse.json({ error: "Content ID required" }, { status: 400 })
    }

    const bookmark = await db.addBookmark(user.id as number, contentId)

    return NextResponse.json({
      success: true,
      data: bookmark,
    })
  } catch (error) {
    console.error("Add bookmark API error:", error)
    return NextResponse.json({ success: false, error: "Failed to add bookmark" }, { status: 500 })
  }
}
