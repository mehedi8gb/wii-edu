"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, ClipboardList, Wallet, GraduationCap, ChevronRight } from "lucide-react"

interface Course {
  id: string
  title: string
  code: string
  credits: number
  progress: number
}

export default function StudentDashboardPage() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // demo data for student courses
    setCourses([
      { id: "1", title: "Data Structures", code: "CSE-220", credits: 3, progress: 72 },
      { id: "2", title: "Discrete Mathematics", code: "MAT-210", credits: 3, progress: 45 },
      { id: "3", title: "Digital Logic Design", code: "EEE-230", credits: 3, progress: 88 },
    ])
  }, [])

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Courses</p>
              <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Class</p>
              <p className="text-gray-900">Today, 2:00 PM</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending Assignments</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Wallet className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Due Payment</p>
              <p className="text-2xl font-bold text-gray-900">$250</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* My Courses */}
      <Card>
        <CardHeader>
          <CardTitle>My Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="p-4 border rounded-lg bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-900">{course.title}</div>
                    <div className="text-sm text-gray-500">{course.code} • {course.credits} credits</div>
                  </div>
                  <Badge variant="secondary">{course.progress}%</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Go to course <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Announcements & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-gray-900">Mid-term exams schedule published</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Check the exams section for details.</p>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
              <div className="flex items-center space-x-2">
                <Wallet className="w-4 h-4 text-yellow-600" />
                <span className="font-medium text-gray-900">Tuition payment due</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Please clear your dues by 25th Aug.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span>Data Structures class</span>
              <span className="text-gray-500">Today, 2:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Math Quiz</span>
              <span className="text-gray-500">Aug 21</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Library Workshop</span>
              <span className="text-gray-500">Aug 24</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
