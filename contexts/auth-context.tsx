"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { authApi } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"

interface User {
  id: string | number
  name: string
  email: string
  role: string
  avatar_url?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => Promise<void>
  /**
   *  Register a new user – kept for backward-compatibility with existing components
   */
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message?: string }>
  /**
   *  Preferred new signature that takes an object (optional for new code)
   */
  signup?: (data: { name: string; email: string; password: string }) => Promise<{ success: boolean; message?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Check if user is already logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true)
      try {
        const token = localStorage.getItem("authToken")
        if (token) {
          const response = await authApi.getCurrentUser()
          if (response.success) {
            setUser(response.data)
          } else {
            // Token is invalid or expired
            localStorage.removeItem("authToken")
          }
        }
      } catch (error) {
        console.error("Auth check error:", error)
        localStorage.removeItem("authToken")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await authApi.login({ email, password })
      if (response.success) {
        localStorage.setItem("authToken", response.data.token)
        setUser(response.data.user)
        return { success: true }
      } else {
        return { success: false, message: response.error || "Invalid credentials" }
      }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, message: "An unexpected error occurred. Please try again." }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      await authApi.logout()
      localStorage.removeItem("authToken")
      setUser(null)
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (data: { name: string; email: string; password: string }) => {
    setIsLoading(true)
    try {
      const response = await authApi.register(data)
      if (response.success) {
        localStorage.setItem("authToken", response.data.token)
        setUser(response.data.user)
        return { success: true }
      } else {
        return { success: false, message: response.error || "Could not create account" }
      }
    } catch (error) {
      console.error("Registration error:", error)
      return { success: false, message: "An unexpected error occurred. Please try again." }
    } finally {
      setIsLoading(false)
    }
  }

  // Back-compat wrapper so older components can still call register(name,email,password)
  const register = async (name: string, email: string, password: string) => {
    return signup({ name, email, password })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        register, // legacy signature
        signup, // optional new signature
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
