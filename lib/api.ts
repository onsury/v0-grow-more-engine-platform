const API_BASE_URL = process.env.NODE_ENV === "production" ? "https://your-domain.vercel.app/api" : "/api"

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

      // OLD
      // const result = await response.json()

      // NEW – robust JSON parsing (falls back to text)
      let result: any
      try {
        result = await response.json()
      } catch {
        const text = await response.text()
        result = {
          success: false,
          error: text || "Internal Server Error",
        }
      }

      if (response.ok && result.success) {
        return {
          success: true,
          data: {
            token: result.data.token,
            user: result.data.user,
          },
        }
      } else {
        return {
          success: false,
          error: result.error || "Login failed",
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
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      // OLD
      // const result = await response.json()

      // NEW – robust JSON parsing (falls back to text)
      let result: any
      try {
        result = await response.json()
      } catch {
        const text = await response.text()
        result = {
          success: false,
          error: text || "Internal Server Error",
        }
      }

      if (response.ok && result.success) {
        return {
          success: true,
          data: {
            token: result.data.token,
            user: result.data.user,
          },
        }
      } else {
        return {
          success: false,
          error: result.error || "Registration failed",
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

      if (response.ok && result.success) {
        return {
          success: true,
          data: result.data,
        }
      } else {
        return {
          success: false,
          error: result.error || "Failed to get user info",
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
      await makeAuthenticatedRequest("/auth/logout", {
        method: "POST",
      })

      return {
        success: true,
      }
    } catch (error) {
      console.error("Logout API error:", error)
      return {
        success: true,
      }
    }
  },
}

export const contentApi = {
  async list(params?: { limit?: number; offset?: number }): Promise<ApiResponse> {
    try {
      const searchParams = new URLSearchParams()
      if (params?.limit) searchParams.set("limit", params.limit.toString())
      if (params?.offset) searchParams.set("offset", params.offset.toString())

      const response = await fetch(`${API_BASE_URL}/content?${searchParams}`)
      const result = await response.json()

      return result
    } catch (error) {
      console.error("contentApi.list error:", error)
      return { success: false, error: "Network error" }
    }
  },

  async getAllContent(params?: { limit?: number; offset?: number }) {
    return this.list(params)
  },

  async get(slug: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/content/${slug}`)
      const result = await response.json()

      return result
    } catch (error) {
      console.error("contentApi.get error:", error)
      return { success: false, error: "Network error" }
    }
  },
}

export const companyApi = {
  async list(params?: { limit?: number; offset?: number }): Promise<ApiResponse> {
    try {
      const searchParams = new URLSearchParams()
      if (params?.limit) searchParams.set("limit", params.limit.toString())
      if (params?.offset) searchParams.set("offset", params.offset.toString())

      const response = await fetch(`${API_BASE_URL}/companies?${searchParams}`)
      const result = await response.json()

      return result
    } catch (error) {
      console.error("companyApi.list error:", error)
      return { success: false, error: "Network error" }
    }
  },

  async getAllCompanies(params?: { limit?: number; offset?: number }) {
    return this.list(params)
  },

  async get(slug: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/companies/${slug}`)
      const result = await response.json()

      return result
    } catch (error) {
      console.error("companyApi.get error:", error)
      return { success: false, error: "Network error" }
    }
  },
}

export const productApi = {
  async list(params?: { limit?: number; offset?: number }): Promise<ApiResponse> {
    try {
      const searchParams = new URLSearchParams()
      if (params?.limit) searchParams.set("limit", params.limit.toString())
      if (params?.offset) searchParams.set("offset", params.offset.toString())

      const response = await fetch(`${API_BASE_URL}/products?${searchParams}`)
      const result = await response.json()

      return result
    } catch (error) {
      console.error("productApi.list error:", error)
      return { success: false, error: "Network error" }
    }
  },

  async get(slug: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${slug}`)
      const result = await response.json()

      return result
    } catch (error) {
      console.error("productApi.get error:", error)
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

// Hub API (placeholder for future content hubs)
export const hubApi = {
  async list(): Promise<ApiResponse> {
    return { success: true, data: [] }
  },

  async getAllHubs(params?: { limit?: number; offset?: number }) {
    return this.list(params)
  },

  async get(slug: string): Promise<ApiResponse> {
    return { success: false, error: "Hub not found" }
  },
}
