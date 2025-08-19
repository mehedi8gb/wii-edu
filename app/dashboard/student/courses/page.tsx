"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap, ChevronRight, Search } from "lucide-react"

interface Course {
  id: string
  title: string
  code: string
  credits: number
  progress: number
  teacher: string
}

export default function StudentCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [search, setSearch] = useState("")
  const [term, setTerm] = useState("fall")

  useEffect(() => {
    setCourses([
      { id: "1", title: "Data Structures", code: "CSE-220", credits: 3, progress: 72, teacher: "Dr. Hasan" },
      { id: "2", title: "Discrete Mathematics", code: "MAT-210", credits: 3, progress: 45, teacher: "Ms. Anika" },
      { id: "3", title: "Digital Logic Design", code: "EEE-230", credits: 3, progress: 88, teacher: "Mr. Rahman" },
      { id: "4", title: "Operating Systems", code: "CSE-310", credits: 3, progress: 12, teacher: "Dr. Sultana" },
    ])
  }, [])

  const filtered = courses.filter((c) =>
    (c.title + c.code + c.teacher).toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses by title, code or teacher"
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-3">
              <Select value={term} onValueChange={setTerm}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spring">Spring 2025</SelectItem>
                  <SelectItem value="summer">Summer 2025</SelectItem>
                  <SelectItem value="fall">Fall 2025</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <div className="text-sm text-gray-500">{course.code} • {course.credits} credits</div>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-gray-600">Instructor: <span className="text-gray-900 font-medium">{course.teacher}</span></div>
              <div className="flex items-center justify-between">
                <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <Badge variant="secondary">{course.progress}%</Badge>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" variant="default">
                  Continue <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <Button className="flex-1" variant="outline">View Syllabus</Button>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <GraduationCap className="w-3 h-3" />
                Term: {term === "spring" ? "Spring 2025" : term === "summer" ? "Summer 2025" : "Fall 2025"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <Card>
          <CardContent className="p-6 text-center text-gray-600">No courses found for your filters.</CardContent>
        </Card>
      )}
    </div>
  )
}
