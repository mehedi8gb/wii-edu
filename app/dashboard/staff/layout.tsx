"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, Settings, LogOut, Bell, Users, Building, Calendar } from "lucide-react"

interface User {
  email: string
  role: string
  name: string
}

const nav = [
  { href: "/dashboard/staff", icon: Briefcase, label: "Overview" },
  { href: "/dashboard/staff/tasks", icon: Users, label: "Tasks" },
  { href: "/dashboard/staff/departments", icon: Building, label: "Departments" },
  { href: "/dashboard/staff/schedule", icon: Calendar, label: "Schedule" },
  { href: "/dashboard/staff/settings", icon: Settings, label: "Settings" },
]

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    const parsed: User = JSON.parse(userData)
    if (parsed.role !== "staff") {
      switch (parsed.role) {
        case "student":
          router.push("/dashboard/student"); return
        case "admin":
          router.push("/dashboard/admin"); return
        case "teacher":
          router.push("/dashboard/teacher"); return
        default:
          router.push("/auth/login"); return
      }
    }
    setUser(parsed)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/auth/login")
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-500 capitalize">Staff</p>
            </div>
          </div>
        </div>
        <nav className="p-4">
          <div className="space-y-2">
            {nav.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${isActive ? "bg-purple-50 text-purple-700" : "text-gray-700 hover:bg-gray-100"}`}>
                  <Icon className="w-5 h-5" />
                  <span className={isActive ? "font-medium" : ""}>{item.label}</span>
                </Link>
              )
            })}
          </div>
          <div className="mt-6">
            <Button onClick={handleLogout} variant="outline" className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-sm border-b px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Staff Dashboard</h1>
              <p className="text-gray-600 text-sm">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  )
}
