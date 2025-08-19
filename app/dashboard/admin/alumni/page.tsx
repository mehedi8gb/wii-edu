"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GraduationCap, UserPlus, Search, Eye, Mail, Award, TrendingUp, MapPin, Briefcase, Star } from "lucide-react"
import Link from "next/link"

interface Alumni {
  id: string
  name: string
  email: string
  phone: string
  graduationYear: string
  department: string
  degree: string
  currentPosition: string
  company: string
  location: string
  salary: string
  achievements: string[]
  avatar: string
  linkedIn: string
  status: "employed" | "entrepreneur" | "further-study" | "seeking"
}

export default function AlumniPage() {
  const [alumni, setAlumni] = useState<Alumni[]>([])
  const [filteredAlumni, setFilteredAlumni] = useState<Alumni[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null)
  const [isAddAlumniOpen, setIsAddAlumniOpen] = useState(false)

  // Mock data
  useEffect(() => {
    const mockAlumni: Alumni[] = [
      {
        id: "1",
        name: "Ahmed Rahman",
        email: "ahmed.rahman@gmail.com",
        phone: "+880-1712-345678",
        graduationYear: "2022",
        department: "Computer Science",
        degree: "Diploma in Computer Science",
        currentPosition: "Software Engineer",
        company: "Tech Solutions Ltd",
        location: "Dhaka, Bangladesh",
        salary: "৳45,000/month",
        achievements: ["Best Student Award 2022", "Hackathon Winner"],
        avatar: "/placeholder.svg?height=40&width=40",
        linkedIn: "linkedin.com/in/ahmed-rahman",
        status: "employed",
      },
      {
        id: "2",
        name: "Fatima Khatun",
        email: "fatima.khatun@gmail.com",
        phone: "+880-1812-345679",
        graduationYear: "2021",
        department: "Business Administration",
        degree: "Diploma in Business Administration",
        currentPosition: "Marketing Manager",
        company: "Digital Marketing Pro",
        location: "Chittagong, Bangladesh",
        salary: "৳38,000/month",
        achievements: ["Dean's List", "Business Plan Competition Winner"],
        avatar: "/placeholder.svg?height=40&width=40",
        linkedIn: "linkedin.com/in/fatima-khatun",
        status: "employed",
      },
      {
        id: "3",
        name: "Mohammad Hasan",
        email: "mohammad.hasan@gmail.com",
        phone: "+880-1912-345680",
        graduationYear: "2023",
        department: "Engineering",
        degree: "Diploma in Civil Engineering",
        currentPosition: "Founder & CEO",
        company: "BuildTech Solutions",
        location: "Narayanganj, Bangladesh",
        salary: "৳80,000/month",
        achievements: ["Entrepreneur of the Year", "Innovation Award"],
        avatar: "/placeholder.svg?height=40&width=40",
        linkedIn: "linkedin.com/in/mohammad-hasan",
        status: "entrepreneur",
      },
      {
        id: "4",
        name: "Rashida Begum",
        email: "rashida.begum@gmail.com",
        phone: "+880-1612-345681",
        graduationYear: "2020",
        department: "Healthcare",
        degree: "Diploma in Medical Technology",
        currentPosition: "Medical Technologist",
        company: "Square Hospital",
        location: "Dhaka, Bangladesh",
        salary: "৳42,000/month",
        achievements: ["Excellence in Healthcare", "Research Publication"],
        avatar: "/placeholder.svg?height=40&width=40",
        linkedIn: "linkedin.com/in/rashida-begum",
        status: "employed",
      },
      {
        id: "5",
        name: "Karim Uddin",
        email: "karim.uddin@gmail.com",
        phone: "+880-1512-345682",
        graduationYear: "2023",
        department: "Computer Science",
        degree: "Diploma in Computer Science",
        currentPosition: "Master's Student",
        company: "University of Dhaka",
        location: "Dhaka, Bangladesh",
        salary: "Scholarship",
        achievements: ["Merit Scholarship", "Research Assistant"],
        avatar: "/placeholder.svg?height=40&width=40",
        linkedIn: "linkedin.com/in/karim-uddin",
        status: "further-study",
      },
      {
        id: "6",
        name: "Nasir Ahmed",
        email: "nasir.ahmed@gmail.com",
        phone: "+880-1412-345683",
        graduationYear: "2024",
        department: "Business Administration",
        degree: "Diploma in Business Administration",
        currentPosition: "Job Seeker",
        company: "N/A",
        location: "Sylhet, Bangladesh",
        salary: "N/A",
        achievements: ["Academic Excellence"],
        avatar: "/placeholder.svg?height=40&width=40",
        linkedIn: "linkedin.com/in/nasir-ahmed",
        status: "seeking",
      },
    ]
    setAlumni(mockAlumni)
    setFilteredAlumni(mockAlumni)
  }, [])

  // Filter alumni based on search and filters
  useEffect(() => {
    const filtered = alumni.filter((person) => {
      const matchesSearch =
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.currentPosition.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDepartment = departmentFilter === "all" || person.department === departmentFilter
      const matchesStatus = statusFilter === "all" || person.status === statusFilter
      const matchesYear = yearFilter === "all" || person.graduationYear === yearFilter

      return matchesSearch && matchesDepartment && matchesStatus && matchesYear
    })
    setFilteredAlumni(filtered)
  }, [alumni, searchTerm, departmentFilter, statusFilter, yearFilter])

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "employed":
        return "bg-green-100 text-green-800"
      case "entrepreneur":
        return "bg-purple-100 text-purple-800"
      case "further-study":
        return "bg-blue-100 text-blue-800"
      case "seeking":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "employed":
        return <Briefcase className="h-4 w-4" />
      case "entrepreneur":
        return <TrendingUp className="h-4 w-4" />
      case "further-study":
        return <GraduationCap className="h-4 w-4" />
      case "seeking":
        return <Search className="h-4 w-4" />
      default:
        return <Briefcase className="h-4 w-4" />
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "employed":
        return "Employed"
      case "entrepreneur":
        return "Entrepreneur"
      case "further-study":
        return "Further Study"
      case "seeking":
        return "Job Seeking"
      default:
        return status
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
                <GraduationCap className="h-6 w-6" />
                Alumni Network
              </h1>
              <p className="text-gray-600 mt-1">Track and connect with our successful graduates</p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
                <Link href="/dashboard">← Back to Dashboard</Link>
              </Button>
              <Dialog open={isAddAlumniOpen} onOpenChange={setIsAddAlumniOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Alumni
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add Alumni Record</DialogTitle>
                    <DialogDescription>Add a new graduate to the alumni network</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div>
                      <Label htmlFor="graduation-year">Graduation Year</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                        </SelectContent>
                      </Select>
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
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Add Alumni</Button>
                      <Button variant="outline" onClick={() => setIsAddAlumniOpen(false)}>
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

      {/* Filters and Search */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search alumni by name, company, or position..."
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
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="employed">Employed</SelectItem>
                <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                <SelectItem value="further-study">Further Study</SelectItem>
                <SelectItem value="seeking">Job Seeking</SelectItem>
              </SelectContent>
            </Select>
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
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
                  <p className="text-sm font-medium text-gray-600">Total Alumni</p>
                  <p className="text-2xl font-bold text-gray-900">{alumni.length}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Employed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {alumni.filter((a) => a.status === "employed").length}
                  </p>
                </div>
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Entrepreneurs</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {alumni.filter((a) => a.status === "entrepreneur").length}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Further Study</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {alumni.filter((a) => a.status === "further-study").length}
                  </p>
                </div>
                <Award className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alumni Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Alumni Directory ({filteredAlumni.length})</CardTitle>
            <CardDescription>Connect with our successful graduates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlumni.map((person) => (
                <Card key={person.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={person.avatar || "/placeholder.svg"}
                        alt={person.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{person.name}</h3>
                        <p className="text-sm text-gray-600 truncate">{person.currentPosition}</p>
                        <p className="text-sm text-gray-500 truncate">{person.company}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{person.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Department:</span>
                        <span className="text-sm font-medium">{person.department}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Graduated:</span>
                        <span className="text-sm font-medium">{person.graduationYear}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Salary:</span>
                        <span className="text-sm font-medium">{person.salary}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Badge className={`${getStatusBadgeColor(person.status)} flex items-center gap-1 w-fit`}>
                        {getStatusIcon(person.status)}
                        {getStatusLabel(person.status)}
                      </Badge>
                    </div>

                    {person.achievements.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs text-gray-600 mb-2">Achievements:</p>
                        <div className="flex flex-wrap gap-1">
                          {person.achievements.slice(0, 2).map((achievement, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              <Star className="h-3 w-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Mail className="h-4 w-4 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
