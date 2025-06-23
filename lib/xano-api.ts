// lib/xano-api.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_XANO_API_URL

interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
}

interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  name: string
  email: string
  password: string
}

// Helper function to get auth token
function getAuthToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authToken")
  }
  return null
}

// Helper function to make authenticated requests
async function makeAuthenticatedRequest(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const token = getAuthToken()

  return fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  })
}

export const authApi = {
  async login(data: LoginData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        return {
          success: true,
          data: {
            token: result.authToken || result.token,
            user: {
              id: result.id || result.user?.id,
              name: result.name || result.user?.name,
              email: result.email || result.user?.email,
              role: result.role || result.user?.role || "user",
            },
          },
        }
      } else {
        return {
          success: false,
          error: result.message || "Login failed",
        }
      }
    } catch (error) {
      console.error("Login API error:", error)
      return {
        success: false,
        error: "Network error occurred",
      }
    }
  },

  async register(data: RegisterData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        return {
          success: true,
          data: {
            token: result.authToken || result.token,
            user: {
              id: result.id || result.user?.id,
              name: result.name || result.user?.name,
              email: result.email || result.user?.email,
              role: result.role || result.user?.role || "user",
            },
          },
        }
      } else {
        return {
          success: false,
          error: result.message || "Registration failed",
        }
      }
    } catch (error) {
      console.error("Registration API error:", error)
      return {
        success: false,
        error: "Network error occurred",
      }
    }
  },

  async getCurrentUser(): Promise<ApiResponse> {
    try {
      const response = await makeAuthenticatedRequest("/auth/me")
      const result = await response.json()

      if (response.ok) {
        return {
          success: true,
          data: {
            id: result.id,
            name: result.name,
            email: result.email,
            role: result.role || "user",
          },
        }
      } else {
        return {
          success: false,
          error: result.message || "Failed to get user info",
        }
      }
    } catch (error) {
      console.error("Get current user API error:", error)
      return {
        success: false,
        error: "Network error occurred",
      }
    }
  },

  async logout(): Promise<ApiResponse> {
    try {
      // Make logout request to server if needed
      await makeAuthenticatedRequest("/auth/logout", {
        method: "POST",
      })

      return {
        success: true,
      }
    } catch (error) {
      console.error("Logout API error:", error)
      // Even if server logout fails, we can still clear local storage
      return {
        success: true,
      }
    }
  },
}

/* ---------- GrowMoreEngine: additional APIs ---------- */
interface Content {
  id: number
  title: string
  slug: string
  description?: string
  thumbnail_url?: string
  views?: number
}

interface Hub {
  id: number
  name: string
  slug: string
  description?: string
  logo_url?: string
}

interface Company {
  id: number
  name: string
  slug: string
  description?: string
  logo_url?: string
}

/* Content endpoints */
export const contentApi = {
  async list(): Promise<ApiResponse<Content[]>> {
    try {
      const res = await fetch(`${API_BASE_URL}/content`)
      const data = await res.json()
      return { success: res.ok, data }
    } catch (err) {
      console.error("contentApi.list error:", err)
      return { success: false, error: "Network error" }
    }
  },

  async get(idOrSlug: number | string): Promise<ApiResponse<Content>> {
    try {
      const res = await fetch(`${API_BASE_URL}/content/${idOrSlug}`)
      const data = await res.json()
      return { success: res.ok, data }
    } catch (err) {
      console.error("contentApi.get error:", err)
      return { success: false, error: "Network error" }
    }
  },
}

/* Hub endpoints */
export const hubApi = {
  async list(): Promise<ApiResponse<Hub[]>> {
    try {
      const res = await fetch(`${API_BASE_URL}/hubs`)
      const data = await res.json()
      return { success: res.ok, data }
    } catch (err) {
      console.error("hubApi.list error:", err)
      return { success: false, error: "Network error" }
    }
  },

  async get(idOrSlug: number | string): Promise<ApiResponse<Hub>> {
    try {
      const res = await fetch(`${API_BASE_URL}/hubs/${idOrSlug}`)
      const data = await res.json()
      return { success: res.ok, data }
    } catch (err) {
      console.error("hubApi.get error:", err)
      return { success: false, error: "Network error" }
    }
  },
}

/* Company endpoints */
export const companyApi = {
  async list(): Promise<ApiResponse<Company[]>> {
    try {
      const res = await fetch(`${API_BASE_URL}/companies`)
      const data = await res.json()
      return { success: res.ok, data }
    } catch (err) {
      console.error("companyApi.list error:", err)
      return { success: false, error: "Network error" }
    }
  },

  async get(idOrSlug: number | string): Promise<ApiResponse<Company>> {
    try {
      const res = await fetch(`${API_BASE_URL}/companies/${idOrSlug}`)
      const data = await res.json()
      return { success: res.ok, data }
    } catch (err) {
      console.error("companyApi.get error:", err)
      return { success: false, error: "Network error" }
    }
  },
}

// Legacy exports for backward compatibility
export async function signupUser(name: string, email: string, password: string) {
  const result = await authApi.register({ name, email, password })
  return result.success ? result.data : { error: result.error }
}

export async function loginUser(email: string, password: string) {
  const result = await authApi.login({ email, password })
  return result.success ? result.data : { error: result.error }
}

// Make sure authApi is properly exported
