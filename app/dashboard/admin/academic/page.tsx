"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  BookOpen,
  Calendar,
  Users,
  Plus,
  Search,
  Edit,
  Eye,
  BarChart3,
  GraduationCap,
  FileText,
  Award,
} from "lucide-react"
import Link from "next/link"

interface Course {
  id: string
  name: string
  code: string
  department: string
  semester: string
  credits: number
  instructor: string
  students: number
  status: "active" | "completed" | "upcoming"
  schedule: string
  room: string
}

interface AcademicEvent {
  id: string
  title: string
  date: string
  type: "exam" | "assignment" | "holiday" | "registration"
  department: string
  description: string
}

export default function AcademicPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [events, setEvents] = useState<AcademicEvent[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [semesterFilter, setSemesterFilter] = useState("all")
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false)

  // Mock data
  useEffect(() => {
    const mockCourses: Course[] = [
      {
        id: "1",
        name: "Programming Fundamentals",
        code: "CSE-101",
        department: "Computer Science",
        semester: "Spring 2025",
        credits: 3,
        instructor: "Dr. Sarah Johnson",
        students: 45,
        status: "active",
        schedule: "Mon, Wed, Fri 9:00-10:30 AM",
        room: "Lab-201",
      },
      {
        id: "2",
        name: "Database Management Systems",
        code: "CSE-201",
        department: "Computer Science",
        semester: "Spring 2025",
        credits: 4,
        instructor: "Prof. Michael Chen",
        students: 38,
        status: "active",
        schedule: "Tue, Thu 2:00-4:00 PM",
        room: "Lab-301",
      },
      {
        id: "3",
        name: "Business Communication",
        code: "BBA-101",
        department: "Business Administration",
        semester: "Spring 2025",
        credits: 2,
        instructor: "Ms. Emily Rodriguez",
        students: 52,
        status: "active",
        schedule: "Mon, Wed 11:00-12:00 PM",
        room: "Room-105",
      },
      {
        id: "4",
        name: "Engineering Mathematics",
        code: "ENG-101",
        department: "Engineering",
        semester: "Spring 2025",
        credits: 4,
        instructor: "Dr. David Kim",
        students: 41,
        status: "active",
        schedule: "Tue, Thu, Sat 8:00-9:30 AM",
        room: "Room-203",
      },
      {
        id: "5",
        name: "Medical Terminology",
        code: "HLT-101",
        department: "Healthcare",
        semester: "Fall 2024",
        credits: 3,
        instructor: "Dr. Lisa Wang",
        students: 35,
        status: "completed",
        schedule: "Mon, Wed, Fri 1:00-2:30 PM",
        room: "Room-401",
      },
    ]

    const mockEvents: AcademicEvent[] = [
      {
        id: "1",
        title: "Mid-term Examinations",
        date: "2025-02-15",
        type: "exam",
        department: "All Departments",
        description: "Mid-term examinations for all courses",
      },
      {
        id: "2",
        title: "Assignment Submission Deadline",
        date: "2025-01-25",
        type: "assignment",
        department: "Computer Science",
        description: "Final project submission for CSE courses",
      },
      {
        id: "3",
        title: "Spring Break",
        date: "2025-03-01",
        type: "holiday",
        department: "All Departments",
        description: "One week spring break for all students",
      },
      {
        id: "4",
        title: "Summer Semester Registration",
        date: "2025-04-01",
        type: "registration",
        department: "All Departments",
        description: "Registration opens for summer semester",
      },
    ]

    setCourses(mockCourses)
    setEvents(mockEvents)
  }, [])

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === "all" || course.department === departmentFilter
    const matchesSemester = semesterFilter === "all" || course.semester === semesterFilter

    return matchesSearch && matchesDepartment && matchesSemester
  })

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getEventTypeBadgeColor = (type: string) => {
    switch (type) {
      case "exam":
        return "bg-red-100 text-red-800"
      case "assignment":
        return "bg-yellow-100 text-yellow-800"
      case "holiday":
        return "bg-green-100 text-green-800"
      case "registration":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Academic Management
              </h1>
              <p className="text-gray-600 mt-1">Manage courses, curriculum, and academic activities</p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
                <Link href="/dashboard">← Back to Dashboard</Link>
              </Button>
              <Dialog open={isAddCourseOpen} onOpenChange={setIsAddCourseOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Course
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Course</DialogTitle>
                    <DialogDescription>Create a new course in the academic system</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="course-name">Course Name</Label>
                      <Input id="course-name" placeholder="Enter course name" />
                    </div>
                    <div>
                      <Label htmlFor="course-code">Course Code</Label>
                      <Input id="course-code" placeholder="e.g., CSE-101" />
                    </div>
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Computer Science">Computer Science</SelectItem>
                          <SelectItem value="Business Administration">Business Administration</SelectItem>
                          <SelectItem value="Engineering">Engineering</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="credits">Credits</Label>
                      <Input id="credits" type="number" placeholder="Enter credits" />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Create Course</Button>
                      <Button variant="outline" onClick={() => setIsAddCourseOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Courses</p>
                  <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Courses</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {courses.filter((c) => c.status === "active").length}
                  </p>
                </div>
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {courses.reduce((sum, course) => sum + course.students, 0)}
                  </p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
                  <p className="text-2xl font-bold text-gray-900">{events.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search courses by name, code, or instructor..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="Computer Science">Computer Science</SelectItem>
                        <SelectItem value="Business Administration">Business</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={semesterFilter} onValueChange={setSemesterFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Semesters</SelectItem>
                        <SelectItem value="Spring 2025">Spring 2025</SelectItem>
                        <SelectItem value="Fall 2024">Fall 2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{course.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{course.code}</CardDescription>
                      </div>
                      <Badge className={`${getStatusBadgeColor(course.status)} text-xs`}>
                        {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Department:</span>
                        <span className="font-medium">{course.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Instructor:</span>
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Students:</span>
                        <span className="font-medium">{course.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Credits:</span>
                        <span className="font-medium">{course.credits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Schedule:</span>
                        <span className="font-medium text-xs">{course.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Room:</span>
                        <span className="font-medium">{course.room}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Academic Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Academic Calendar</CardTitle>
                <CardDescription>Important academic dates and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">{new Date(event.date).getDate()}</div>
                          <div className="text-xs text-gray-600">
                            {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-600">{event.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{event.department}</p>
                        </div>
                      </div>
                      <Badge className={`${getEventTypeBadgeColor(event.type)} text-xs`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Enrollment Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Computer Science</span>
                      <span className="font-bold">83 students</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Business Administration</span>
                      <span className="font-bold">52 students</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Engineering</span>
                      <span className="font-bold">41 students</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Healthcare</span>
                      <span className="font-bold">35 students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Average GPA</span>
                      <span className="font-bold">3.42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pass Rate</span>
                      <span className="font-bold">94.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Attendance Rate</span>
                      <span className="font-bold">87.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Completion Rate</span>
                      <span className="font-bold">91.8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Curriculum Tab */}
          <TabsContent value="curriculum" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Curriculum Management
                </CardTitle>
                <CardDescription>Manage course curricula and learning outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Department Curricula</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        Computer Science Curriculum
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        Business Administration Curriculum
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        Engineering Curriculum
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        Healthcare Curriculum
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Quick Actions</h3>
                    <div className="space-y-2">
                      <Button className="w-full">Update Curriculum</Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Generate Reports
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Export Curriculum
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Review Learning Outcomes
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
