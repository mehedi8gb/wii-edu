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
import { Video, Users, Clock, Plus, Search, Play, Pause, Settings, Monitor, Share, UserCheck } from "lucide-react"
import Link from "next/link"

interface LiveClass {
  id: string
  title: string
  course: string
  instructor: string
  date: string
  time: string
  duration: number
  status: "scheduled" | "live" | "completed" | "cancelled"
  participants: number
  maxParticipants: number
  meetingLink: string
  recordingAvailable: boolean
}

interface ClassSchedule {
  id: string
  day: string
  time: string
  course: string
  instructor: string
  room: string
  type: "live" | "recorded" | "hybrid"
}

export default function LiveClassPage() {
  const [liveClasses, setLiveClasses] = useState<LiveClass[]>([])
  const [schedule, setSchedule] = useState<ClassSchedule[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isScheduleClassOpen, setIsScheduleClassOpen] = useState(false)

  // Mock data
  useEffect(() => {
    const mockLiveClasses: LiveClass[] = [
      {
        id: "1",
        title: "Programming Fundamentals - Lecture 15",
        course: "CSE-101",
        instructor: "Dr. Sarah Johnson",
        date: "2025-01-14",
        time: "09:00",
        duration: 90,
        status: "scheduled",
        participants: 0,
        maxParticipants: 50,
        meetingLink: "https://meet.wii.edu.bd/cse101-lec15",
        recordingAvailable: false,
      },
      {
        id: "2",
        title: "Database Design Workshop",
        course: "CSE-201",
        instructor: "Prof. Michael Chen",
        date: "2025-01-14",
        time: "14:00",
        duration: 120,
        status: "live",
        participants: 32,
        maxParticipants: 40,
        meetingLink: "https://meet.wii.edu.bd/cse201-workshop",
        recordingAvailable: true,
      },
      {
        id: "3",
        title: "Business Communication Skills",
        course: "BBA-101",
        instructor: "Ms. Emily Rodriguez",
        date: "2025-01-13",
        time: "11:00",
        duration: 60,
        status: "completed",
        participants: 48,
        maxParticipants: 50,
        meetingLink: "https://meet.wii.edu.bd/bba101-comm",
        recordingAvailable: true,
      },
      {
        id: "4",
        title: "Engineering Mathematics Review",
        course: "ENG-101",
        instructor: "Dr. David Kim",
        date: "2025-01-15",
        time: "08:00",
        duration: 75,
        status: "scheduled",
        participants: 0,
        maxParticipants: 45,
        meetingLink: "https://meet.wii.edu.bd/eng101-review",
        recordingAvailable: false,
      },
      {
        id: "5",
        title: "Medical Terminology Quiz Session",
        course: "HLT-101",
        instructor: "Dr. Lisa Wang",
        date: "2025-01-13",
        time: "13:00",
        duration: 45,
        status: "cancelled",
        participants: 0,
        maxParticipants: 35,
        meetingLink: "https://meet.wii.edu.bd/hlt101-quiz",
        recordingAvailable: false,
      },
    ]

    const mockSchedule: ClassSchedule[] = [
      {
        id: "1",
        day: "Monday",
        time: "09:00-10:30",
        course: "Programming Fundamentals",
        instructor: "Dr. Sarah Johnson",
        room: "Virtual Room 1",
        type: "live",
      },
      {
        id: "2",
        day: "Monday",
        time: "11:00-12:00",
        course: "Business Communication",
        instructor: "Ms. Emily Rodriguez",
        room: "Virtual Room 2",
        type: "hybrid",
      },
      {
        id: "3",
        day: "Tuesday",
        time: "14:00-16:00",
        course: "Database Management",
        instructor: "Prof. Michael Chen",
        room: "Virtual Room 1",
        type: "live",
      },
      {
        id: "4",
        day: "Wednesday",
        time: "09:00-10:30",
        course: "Programming Fundamentals",
        instructor: "Dr. Sarah Johnson",
        room: "Virtual Room 1",
        type: "live",
      },
      {
        id: "5",
        day: "Thursday",
        time: "08:00-09:15",
        course: "Engineering Mathematics",
        instructor: "Dr. David Kim",
        room: "Virtual Room 3",
        type: "live",
      },
    ]

    setLiveClasses(mockLiveClasses)
    setSchedule(mockSchedule)
  }, [])

  const filteredClasses = liveClasses.filter((liveClass) => {
    const matchesSearch =
      liveClass.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      liveClass.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      liveClass.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || liveClass.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-100 text-red-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "live":
        return <Video className="h-4 w-4" />
      case "scheduled":
        return <Clock className="h-4 w-4" />
      case "completed":
        return <UserCheck className="h-4 w-4" />
      case "cancelled":
        return <Pause className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "live":
        return <Video className="h-4 w-4 text-red-600" />
      case "recorded":
        return <Play className="h-4 w-4 text-blue-600" />
      case "hybrid":
        return <Monitor className="h-4 w-4 text-purple-600" />
      default:
        return <Video className="h-4 w-4" />
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
                <Video className="h-6 w-6" />
                Live Classes
              </h1>
              <p className="text-gray-600 mt-1">Manage virtual classrooms and live sessions</p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
                <Link href="/dashboard">← Back to Dashboard</Link>
              </Button>
              <Dialog open={isScheduleClassOpen} onOpenChange={setIsScheduleClassOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule Class
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Schedule Live Class</DialogTitle>
                    <DialogDescription>Create a new live class session</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="class-title">Class Title</Label>
                      <Input id="class-title" placeholder="Enter class title" />
                    </div>
                    <div>
                      <Label htmlFor="course">Course</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CSE-101">Programming Fundamentals</SelectItem>
                          <SelectItem value="CSE-201">Database Management</SelectItem>
                          <SelectItem value="BBA-101">Business Communication</SelectItem>
                          <SelectItem value="ENG-101">Engineering Mathematics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" />
                    </div>
                    <div>
                      <Label htmlFor="duration">Duration (minutes)</Label>
                      <Input id="duration" type="number" placeholder="90" />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Schedule Class</Button>
                      <Button variant="outline" onClick={() => setIsScheduleClassOpen(false)}>
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
                  <p className="text-sm font-medium text-gray-600">Total Classes</p>
                  <p className="text-2xl font-bold text-gray-900">{liveClasses.length}</p>
                </div>
                <Video className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Live Now</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {liveClasses.filter((c) => c.status === "live").length}
                  </p>
                </div>
                <Play className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Scheduled</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {liveClasses.filter((c) => c.status === "scheduled").length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Participants</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {liveClasses.reduce((sum, c) => sum + c.participants, 0)}
                  </p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="classes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="classes">Live Classes</TabsTrigger>
            <TabsTrigger value="schedule">Class Schedule</TabsTrigger>
            <TabsTrigger value="recordings">Recordings</TabsTrigger>
          </TabsList>

          {/* Live Classes Tab */}
          <TabsContent value="classes" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search classes by title, course, or instructor..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="live">Live</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((liveClass) => (
                <Card key={liveClass.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{liveClass.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{liveClass.course}</CardDescription>
                      </div>
                      <Badge className={`${getStatusBadgeColor(liveClass.status)} flex items-center gap-1 text-xs`}>
                        {getStatusIcon(liveClass.status)}
                        {liveClass.status.charAt(0).toUpperCase() + liveClass.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Instructor:</span>
                        <span className="font-medium">{liveClass.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{liveClass.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{liveClass.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{liveClass.duration} min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Participants:</span>
                        <span className="font-medium">
                          {liveClass.participants}/{liveClass.maxParticipants}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      {liveClass.status === "live" && (
                        <Button className="flex-1 bg-red-600 hover:bg-red-700">
                          <Video className="h-4 w-4 mr-1" />
                          Join Live
                        </Button>
                      )}
                      {liveClass.status === "scheduled" && (
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Settings className="h-4 w-4 mr-1" />
                          Configure
                        </Button>
                      )}
                      {liveClass.status === "completed" && liveClass.recordingAvailable && (
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Play className="h-4 w-4 mr-1" />
                          Recording
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Class Schedule</CardTitle>
                <CardDescription>Regular class schedule for live and hybrid sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Day</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Time</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Course</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Instructor</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Room</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">{item.day}</td>
                          <td className="py-4 px-4">{item.time}</td>
                          <td className="py-4 px-4">{item.course}</td>
                          <td className="py-4 px-4">{item.instructor}</td>
                          <td className="py-4 px-4">{item.room}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              {getTypeIcon(item.type)}
                              <span className="capitalize">{item.type}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recordings Tab */}
          <TabsContent value="recordings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Class Recordings</CardTitle>
                <CardDescription>Access recorded live classes and lectures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {liveClasses
                    .filter((c) => c.recordingAvailable)
                    .map((recording) => (
                      <Card key={recording.id} className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Play className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{recording.title}</h3>
                              <p className="text-sm text-gray-600">{recording.course}</p>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm mb-4">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Instructor:</span>
                              <span className="font-medium">{recording.instructor}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Date:</span>
                              <span className="font-medium">{recording.date}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Duration:</span>
                              <span className="font-medium">{recording.duration} min</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button className="flex-1">
                              <Play className="h-4 w-4 mr-1" />
                              Watch
                            </Button>
                            <Button variant="outline" size="sm" className="bg-transparent">
                              <Share className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
