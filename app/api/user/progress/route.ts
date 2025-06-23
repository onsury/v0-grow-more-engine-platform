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

    const progress = await db.getUserRecentProgress(user.id as number)

    return NextResponse.json({
      success: true,
      data: progress,
    })
  } catch (error) {
    console.error("Progress API error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch progress" }, { status: 500 })
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

    const { contentId, progressPercentage } = await request.json()

    if (!contentId || progressPercentage === undefined) {
      return NextResponse.json({ error: "Content ID and progress required" }, { status: 400 })
    }

    const progress = await db.updateUserProgress(user.id as number, contentId, progressPercentage)

    return NextResponse.json({
      success: true,
      data: progress,
    })
  } catch (error) {
    console.error("Update progress API error:", error)
    return NextResponse.json({ success: false, error: "Failed to update progress" }, { status: 500 })
  }
}
