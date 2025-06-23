import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { db } from "./db"

const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production"
const JWT_EXPIRES_IN = "7d"

export interface AuthUser {
  id: number
  name: string
  email: string
  role: string
  avatar_url?: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: number): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

export function verifyToken(token: string): { userId: number } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number }
    return decoded
  } catch (error) {
    return null
  }
}

export async function createUser(name: string, email: string, password: string) {
  // Check if user already exists
  const existingUser = await db.getUserByEmail(email)
  if (existingUser) {
    throw new Error("User already exists with this email")
  }

  // Hash password and create user
  const passwordHash = await hashPassword(password)
  const user = await db.createUser({
    name,
    email,
    password_hash: passwordHash,
    role: "user",
  })

  // Generate token
  const token = generateToken(user.id)

  // Create session
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7) // 7 days
  await db.createSession(user.id, token, expiresAt)

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar_url: user.avatar_url,
    } as AuthUser,
    token,
  }
}

export async function loginUser(email: string, password: string) {
  // Find user
  const user = await db.getUserByEmail(email)
  if (!user) {
    throw new Error("Invalid email or password")
  }

  // Verify password
  const isValidPassword = await verifyPassword(password, user.password_hash)
  if (!isValidPassword) {
    throw new Error("Invalid email or password")
  }

  // Generate token
  const token = generateToken(user.id)

  // Create session
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7) // 7 days
  await db.createSession(user.id, token, expiresAt)

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar_url: user.avatar_url,
    } as AuthUser,
    token,
  }
}

export async function getUserFromToken(token: string): Promise<AuthUser | null> {
  try {
    const session = await db.getSessionByToken(token)
    if (!session) {
      return null
    }

    return {
      id: session.id,
      name: session.name,
      email: session.email,
      role: session.role,
      avatar_url: session.avatar_url,
    }
  } catch (error) {
    console.error("Error getting user from token:", error)
    return null
  }
}

export async function logoutUser(token: string) {
  await db.deleteSession(token)
}
