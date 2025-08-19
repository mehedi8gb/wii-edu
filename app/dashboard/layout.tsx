"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

interface User {
  email: string
  role: string
  name: string
}

export default function DashboardGatewayLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const isRoleSubroute = (p?: string) =>
    !!p && (p.startsWith("/dashboard/admin") || p.startsWith("/dashboard/teacher") || p.startsWith("/dashboard/staff") || p.startsWith("/dashboard/student"))

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    const parsedUser: User = JSON.parse(userData)
    setUser(parsedUser)

    // If already under a role subroute, let nested layout render.
    if (isRoleSubroute(pathname)) {
      // Guard: ensure role matches the subroute
      if (pathname?.startsWith("/dashboard/admin") && parsedUser.role !== "admin") {
        redirectByRole(parsedUser.role)
        return
      }
      if (pathname?.startsWith("/dashboard/teacher") && parsedUser.role !== "teacher") {
        redirectByRole(parsedUser.role)
        return
      }
      if (pathname?.startsWith("/dashboard/staff") && parsedUser.role !== "staff") {
        redirectByRole(parsedUser.role)
        return
      }
      if (pathname?.startsWith("/dashboard/student") && parsedUser.role !== "student") {
        redirectByRole(parsedUser.role)
        return
      }
      return
    }

    // Otherwise redirect base /dashboard to the correct role area
    redirectByRole(parsedUser.role)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, pathname])

  const redirectByRole = (role: string) => {
    switch (role) {
      case "admin":
        router.push("/dashboard/admin"); return
      case "teacher":
        router.push("/dashboard/teacher"); return
      case "staff":
        router.push("/dashboard/staff"); return
      case "student":
        router.push("/dashboard/student"); return
      default:
        router.push("/auth/login"); return
    }
  }

  // While deciding/redirecting: render children only if inside role subroute
  if (isRoleSubroute(pathname)) {
    return <>{children}</>
  }

  return null
}
