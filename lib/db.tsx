import { sql } from "@vercel/postgres"

const isDbConfigured = Boolean(process.env.POSTGRES_URL)
/* If false we’ll use an in-memory mock so pages don’t crash during
   local / preview builds that lack a database connection string. */

const realDb = {
  /* Companies */
  async getCompanies() {
    try {
      const { rows } = await sql`SELECT * FROM companies`
      return rows
    } catch (error) {
      console.error("Database error:", error)
      return []
    }
  },
  async getCompanyBySlug(slug: string) {
    try {
      const { rows } = await sql`SELECT * FROM companies WHERE slug = ${slug}`
      return rows[0]
    } catch (error) {
      console.error("Database error:", error)
      return undefined
    }
  },
  async getCompanyById(id: string) {
    try {
      const { rows } = await sql`SELECT * FROM companies WHERE id = ${id}`
      return rows[0]
    } catch (error) {
      console.error("Database error:", error)
      return undefined
    }
  },

  /* Products */
  async getProducts() {
    try {
      const { rows } = await sql`SELECT * FROM products`
      return rows
    } catch (error) {
      console.error("Database error:", error)
      return []
    }
  },
  async getProductBySlug(slug: string) {
    try {
      const { rows } = await sql`SELECT * FROM products WHERE slug = ${slug}`
      return rows[0]
    } catch (error) {
      console.error("Database error:", error)
      return undefined
    }
  },
  async getProductsByCompanyId(companyId: string) {
    try {
      const { rows } = await sql`SELECT * FROM products WHERE company_id = ${companyId}`
      return rows
    } catch (error) {
      console.error("Database error:", error)
      return []
    }
  },

  /* Content */
  async getContent() {
    try {
      const { rows } = await sql`SELECT * FROM content`
      return rows
    } catch (error) {
      console.error("Database error:", error)
      return []
    }
  },
  async getContentBySlug(slug: string) {
    try {
      const { rows } = await sql`SELECT * FROM content WHERE slug = ${slug}`
      return rows[0]
    } catch (error) {
      console.error("Database error:", error)
      return undefined
    }
  },

  /* Auth / sessions */
  async createUser(email: string, passwordHash: string) {
    try {
      const { rows } = await sql`
        INSERT INTO users (email, password)
        VALUES (${email}, ${passwordHash})
        RETURNING id, email
      `
      return rows[0]
    } catch (error) {
      console.error("Database error:", error)
      return undefined
    }
  },
  async getUserByEmail(email: string) {
    try {
      const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`
      return rows[0]
    } catch (error) {
      console.error("Database error:", error)
      return undefined
    }
  },
  async getUserById(id: string) {
    try {
      const { rows } = await sql`SELECT * FROM users WHERE id = ${id}`
      return rows[0]
    } catch (error) {
      console.error("Database error:", error)
      return undefined
    }
  },
  async createSession(userId: string, token: string, expiresAt: Date) {
    try {
      await sql`
        INSERT INTO sessions (user_id, token, expires_at)
        VALUES (${userId}, ${token}, ${expiresAt})
      `
    } catch (error) {
      console.error("Database error:", error)
    }
  },
  async getSessionByToken(token: string) {
    try {
      const { rows } = await sql`SELECT * FROM sessions WHERE token = ${token}`
      return rows[0]
    } catch (error) {
      console.error("Database error:", error)
      return undefined
    }
  },
  async deleteSession(token: string) {
    try {
      await sql`DELETE FROM sessions WHERE token = ${token}`
    } catch (error) {
      console.error("Database error:", error)
    }
  },
  async getUserBookmarks(userId: string) {
    try {
      const { rows } = await sql`
        SELECT products.*
        FROM bookmarks
        JOIN products ON bookmarks.product_id = products.id
        WHERE bookmarks.user_id = ${userId}
      `
      return rows
    } catch (error) {
      console.error("Database error:", error)
      return []
    }
  },
  async addBookmark(userId: string, productId: string) {
    try {
      await sql`
        INSERT INTO bookmarks (user_id, product_id)
        VALUES (${userId}, ${productId})
      `
    } catch (error) {
      console.error("Database error:", error)
    }
  },
  async removeBookmark(userId: string, productId: string) {
    try {
      await sql`
        DELETE FROM bookmarks
        WHERE user_id = ${userId} AND product_id = ${productId}
      `
    } catch (error) {
      console.error("Database error:", error)
    }
  },
  async getUserProgress(userId: string, contentId: string) {
    try {
      const { rows } = await sql`
        SELECT *
        FROM user_progress
        WHERE user_id = ${userId} AND content_id = ${contentId}
      `
      return rows[0]
    } catch (error) {
      console.error("Database error:", error)
      return undefined
    }
  },
  async updateUserProgress(userId: string, contentId: string, progress: number) {
    try {
      await sql`
        INSERT INTO user_progress (user_id, content_id, progress)
        VALUES (${userId}, ${contentId}, ${progress})
        ON CONFLICT (user_id, content_id)
        DO UPDATE SET progress = ${progress}
      `
    } catch (error) {
      console.error("Database error:", error)
    }
  },
  async getUserRecentProgress(userId: string) {
    try {
      const { rows } = await sql`
        SELECT content.*, user_progress.progress
        FROM user_progress
        JOIN content ON user_progress.content_id = content.id
        WHERE user_progress.user_id = ${userId}
        ORDER BY user_progress.updated_at DESC
        LIMIT 5
      `
      return rows
    } catch (error) {
      console.error("Database error:", error)
      return []
    }
  },
}

// --- Fallback for environments without a DB connection --------------------
const mockDb = {
  /* Companies */
  async getCompanies() {
    return []
  },
  async getCompanyBySlug() {
    return undefined
  },
  async getCompanyById() {
    return undefined
  },

  /* Products */
  async getProducts() {
    return []
  },
  async getProductBySlug() {
    return undefined
  },
  async getProductsByCompanyId() {
    return []
  },

  /* Content */
  async getContent() {
    return []
  },
  async getContentBySlug() {
    return undefined
  },

  /* Auth / sessions – no-ops */
  async createUser() {
    throw new Error("DB not configured")
  },
  async getUserByEmail() {
    return undefined
  },
  async getUserById() {
    return undefined
  },
  async createSession() {
    return undefined
  },
  async getSessionByToken() {
    return undefined
  },
  async deleteSession() {},
  async getUserBookmarks() {
    return []
  },
  async addBookmark() {},
  async removeBookmark() {},
  async getUserProgress() {
    return undefined
  },
  async updateUserProgress() {},
  async getUserRecentProgress() {
    return []
  },
}

// Export whichever implementation is appropriate
export const db = isDbConfigured ? realDb : mockDb
