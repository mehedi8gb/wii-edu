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
  FileText,
  Users,
  Plus,
  Search,
  Edit,
  Eye,
  BarChart3,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

interface Exam {
  id: string
  title: string
  course: string
  type: "midterm" | "final" | "quiz" | "assignment"
  date: string
  time: string
  duration: number
  totalMarks: number
  status: "scheduled" | "ongoing" | "completed" | "graded"
  studentsEnrolled: number
  studentsCompleted: number
  averageScore: number
  instructor: string
}

interface Grade {
  id: string
  studentName: string
  studentId: string
  course: string
  examTitle: string
  marksObtained: number
  totalMarks: number
  percentage: number
  grade: string
  status: "graded" | "pending" | "published"
}

interface QuestionBank {
  id: string
  question: string
  type: "mcq" | "short" | "long" | "practical"
  subject: string
  difficulty: "easy" | "medium" | "hard"
  marks: number
  createdBy: string
  createdDate: string
}

export default function ExaminationPage() {
  const [exams, setExams] = useState<Exam[]>([])
  const [grades, setGrades] = useState<Grade[]>([])
  const [questions, setQuestions] = useState<QuestionBank[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [isCreateExamOpen, setIsCreateExamOpen] = useState(false)
  const [isAddQuestionOpen, setIsAddQuestionOpen] = useState(false)

  // Mock data
  useEffect(() => {
    const mockExams: Exam[] = [
      {
        id: "1",
        title: "Programming Fundamentals Mid-term",
        course: "CSE-101",
        type: "midterm",
        date: "2025-02-15",
        time: "09:00",
        duration: 120,
        totalMarks: 100,
        status: "scheduled",
        studentsEnrolled: 45,
        studentsCompleted: 0,
        averageScore: 0,
        instructor: "Dr. Sarah Johnson",
      },
      {
        id: "2",
        title: "Database Design Quiz",
        course: "CSE-201",
        type: "quiz",
        date: "2025-01-20",
        time: "14:00",
        duration: 60,
        totalMarks: 50,
        status: "completed",
        studentsEnrolled: 38,
        studentsCompleted: 36,
        averageScore: 42.5,
        instructor: "Prof. Michael Chen",
      },
      {
        id: "3",
        title: "Business Communication Assignment",
        course: "BBA-101",
        type: "assignment",
        date: "2025-01-25",
        time: "23:59",
        duration: 0,
        totalMarks: 75,
        status: "graded",
        studentsEnrolled: 52,
        studentsCompleted: 48,
        averageScore: 58.3,
        instructor: "Ms. Emily Rodriguez",
      },
      {
        id: "4",
        title: "Engineering Mathematics Final",
        course: "ENG-101",
        type: "final",
        date: "2025-03-20",
        time: "10:00",
        duration: 180,
        totalMarks: 150,
        status: "scheduled",
        studentsEnrolled: 41,
        studentsCompleted: 0,
        averageScore: 0,
        instructor: "Dr. David Kim",
      },
      {
        id: "5",
        title: "Medical Terminology Test",
        course: "HLT-101",
        type: "quiz",
        date: "2025-01-14",
        time: "13:00",
        duration: 45,
        totalMarks: 40,
        status: "ongoing",
        studentsEnrolled: 35,
        studentsCompleted: 12,
        averageScore: 0,
        instructor: "Dr. Lisa Wang",
      },
    ]

    const mockGrades: Grade[] = [
      {
        id: "1",
        studentName: "Ahmed Rahman",
        studentId: "CSE2023001",
        course: "CSE-201",
        examTitle: "Database Design Quiz",
        marksObtained: 45,
        totalMarks: 50,
        percentage: 90,
        grade: "A+",
        status: "published",
      },
      {
        id: "2",
        studentName: "Fatima Khatun",
        studentId: "BBA2023002",
        course: "BBA-101",
        examTitle: "Business Communication Assignment",
        marksObtained: 68,
        totalMarks: 75,
        percentage: 90.7,
        grade: "A+",
        status: "published",
      },
      {
        id: "3",
        studentName: "Mohammad Hasan",
        studentId: "ENG2023003",
        course: "CSE-201",
        examTitle: "Database Design Quiz",
        marksObtained: 38,
        totalMarks: 50,
        percentage: 76,
        grade: "A-",
        status: "published",
      },
      {
        id: "4",
        studentName: "Rashida Begum",
        studentId: "HLT2023004",
        course: "BBA-101",
        examTitle: "Business Communication Assignment",
        marksObtained: 52,
        totalMarks: 75,
        percentage: 69.3,
        grade: "B+",
        status: "graded",
      },
      {
        id: "5",
        studentName: "Karim Uddin",
        studentId: "CSE2023005",
        course: "CSE-201",
        examTitle: "Database Design Quiz",
        marksObtained: 42,
        totalMarks: 50,
        percentage: 84,
        grade: "A",
        status: "published",
      },
    ]

    const mockQuestions: QuestionBank[] = [
      {
        id: "1",
        question: "What is the primary key in a database table?",
        type: "mcq",
        subject: "Database Management",
        difficulty: "easy",
        marks: 2,
        createdBy: "Prof. Michael Chen",
        createdDate: "2025-01-10",
      },
      {
        id: "2",
        question: "Explain the concept of normalization in database design.",
        type: "long",
        subject: "Database Management",
        difficulty: "hard",
        marks: 10,
        createdBy: "Prof. Michael Chen",
        createdDate: "2025-01-12",
      },
      {
        id: "3",
        question: "Write a Java program to implement bubble sort algorithm.",
        type: "practical",
        subject: "Programming",
        difficulty: "medium",
        marks: 15,
        createdBy: "Dr. Sarah Johnson",
        createdDate: "2025-01-08",
      },
      {
        id: "4",
        question: "Define effective communication in business context.",
        type: "short",
        subject: "Business Communication",
        difficulty: "easy",
        marks: 5,
        createdBy: "Ms. Emily Rodriguez",
        createdDate: "2025-01-15",
      },
    ]

    setExams(mockExams)
    setGrades(mockGrades)
    setQuestions(mockQuestions)
  }, [])

  const filteredExams = exams.filter((exam) => {
    const matchesSearch =
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || exam.status === statusFilter
    const matchesType = typeFilter === "all" || exam.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "ongoing":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "graded":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "final":
        return "bg-red-100 text-red-800"
      case "midterm":
        return "bg-orange-100 text-orange-800"
      case "quiz":
        return "bg-blue-100 text-blue-800"
      case "assignment":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getGradeBadgeColor = (grade: string) => {
    switch (grade) {
      case "A+":
      case "A":
        return "bg-green-100 text-green-800"
      case "A-":
      case "B+":
        return "bg-blue-100 text-blue-800"
      case "B":
      case "B-":
        return "bg-yellow-100 text-yellow-800"
      case "C+":
      case "C":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-red-100 text-red-800"
    }
  }

  const getDifficultyBadgeColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "hard":
        return "bg-red-100 text-red-800"
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
                <FileText className="h-6 w-6" />
                Examination System
              </h1>
              <p className="text-gray-600 mt-1">Manage exams, assessments, and student evaluations</p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
                <Link href="/dashboard">← Back to Dashboard</Link>
              </Button>
              <Dialog open={isCreateExamOpen} onOpenChange={setIsCreateExamOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Exam
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Create New Exam</DialogTitle>
                    <DialogDescription>Schedule a new examination</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="exam-title">Exam Title</Label>
                      <Input id="exam-title" placeholder="Enter exam title" />
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
                      <Label htmlFor="exam-type">Exam Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quiz">Quiz</SelectItem>
                          <SelectItem value="midterm">Mid-term</SelectItem>
                          <SelectItem value="final">Final</SelectItem>
                          <SelectItem value="assignment">Assignment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="exam-date">Date</Label>
                      <Input id="exam-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="total-marks">Total Marks</Label>
                      <Input id="total-marks" type="number" placeholder="100" />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Create Exam</Button>
                      <Button variant="outline" onClick={() => setIsCreateExamOpen(false)}>
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
                  <p className="text-sm font-medium text-gray-600">Total Exams</p>
                  <p className="text-2xl font-bold text-gray-900">{exams.length}</p>
                </div>
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ongoing Exams</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {exams.filter((e) => e.status === "ongoing").length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed Exams</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {exams.filter((e) => e.status === "completed" || e.status === "graded").length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Score</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(
                      exams
                        .filter((e) => e.averageScore > 0)
                        .reduce((sum, e) => sum + (e.averageScore / e.totalMarks) * 100, 0) /
                        exams.filter((e) => e.averageScore > 0).length || 0,
                    )}
                    %
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="exams" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="exams">Exams</TabsTrigger>
            <TabsTrigger value="grades">Grades</TabsTrigger>
            <TabsTrigger value="questions">Question Bank</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Exams Tab */}
          <TabsContent value="exams" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search exams by title, course, or instructor..."
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
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="graded">Graded</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="quiz">Quiz</SelectItem>
                        <SelectItem value="midterm">Mid-term</SelectItem>
                        <SelectItem value="final">Final</SelectItem>
                        <SelectItem value="assignment">Assignment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExams.map((exam) => (
                <Card key={exam.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{exam.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{exam.course}</CardDescription>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge className={`${getStatusBadgeColor(exam.status)} text-xs`}>
                          {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                        </Badge>
                        <Badge className={`${getTypeBadgeColor(exam.type)} text-xs`}>
                          {exam.type.charAt(0).toUpperCase() + exam.type.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Instructor:</span>
                        <span className="font-medium">{exam.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{exam.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{exam.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{exam.duration} min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Marks:</span>
                        <span className="font-medium">{exam.totalMarks}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Enrolled:</span>
                        <span className="font-medium">{exam.studentsEnrolled}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Completed:</span>
                        <span className="font-medium">{exam.studentsCompleted}</span>
                      </div>
                      {exam.averageScore > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Average:</span>
                          <span className="font-medium">
                            {Math.round((exam.averageScore / exam.totalMarks) * 100)}%
                          </span>
                        </div>
                      )}
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

          {/* Grades Tab */}
          <TabsContent value="grades" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Grades</CardTitle>
                <CardDescription>View and manage student examination results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Student</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Course</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Exam</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Marks</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Percentage</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Grade</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades.map((grade) => (
                        <tr key={grade.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{grade.studentName}</p>
                              <p className="text-sm text-gray-600">{grade.studentId}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{grade.course}</td>
                          <td className="py-4 px-4 text-gray-600">{grade.examTitle}</td>
                          <td className="py-4 px-4 font-medium">
                            {grade.marksObtained}/{grade.totalMarks}
                          </td>
                          <td className="py-4 px-4 font-medium">{grade.percentage.toFixed(1)}%</td>
                          <td className="py-4 px-4">
                            <Badge className={`${getGradeBadgeColor(grade.grade)} text-xs`}>{grade.grade}</Badge>
                          </td>
                          <td className="py-4 px-4">
                            <Badge
                              className={`${
                                grade.status === "published"
                                  ? "bg-green-100 text-green-800"
                                  : grade.status === "graded"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              } text-xs`}
                            >
                              {grade.status.charAt(0).toUpperCase() + grade.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
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

          {/* Question Bank Tab */}
          <TabsContent value="questions" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Question Bank</h3>
                <p className="text-gray-600">Manage examination questions and question sets</p>
              </div>
              <Dialog open={isAddQuestionOpen} onOpenChange={setIsAddQuestionOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Question
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Question</DialogTitle>
                    <DialogDescription>Create a new question for the question bank</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="question-text">Question</Label>
                      <Input id="question-text" placeholder="Enter question text" />
                    </div>
                    <div>
                      <Label htmlFor="question-type">Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mcq">Multiple Choice</SelectItem>
                          <SelectItem value="short">Short Answer</SelectItem>
                          <SelectItem value="long">Long Answer</SelectItem>
                          <SelectItem value="practical">Practical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter subject" />
                    </div>
                    <div>
                      <Label htmlFor="difficulty">Difficulty</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="marks">Marks</Label>
                      <Input id="marks" type="number" placeholder="Enter marks" />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Add Question</Button>
                      <Button variant="outline" onClick={() => setIsAddQuestionOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {questions.map((question) => (
                <Card key={question.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 mb-2">{question.question}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Subject: {question.subject}</span>
                          <span>Type: {question.type.toUpperCase()}</span>
                          <span>Marks: {question.marks}</span>
                          <span>Created: {question.createdDate}</span>
                          <span>By: {question.createdBy}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getDifficultyBadgeColor(question.difficulty)} text-xs`}>
                          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Overall Pass Rate</span>
                      <span className="font-bold text-green-600">92.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Score</span>
                      <span className="font-bold">78.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Highest Score</span>
                      <span className="font-bold text-blue-600">98.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Lowest Score</span>
                      <span className="font-bold text-red-600">45.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Grade Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>A+ (90-100%)</span>
                      <span className="font-bold">15 students</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>A (80-89%)</span>
                      <span className="font-bold">28 students</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>B+ (70-79%)</span>
                      <span className="font-bold">22 students</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>B (60-69%)</span>
                      <span className="font-bold">18 students</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Below B</span>
                      <span className="font-bold">12 students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Department Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Computer Science</span>
                      <span className="font-bold">82.4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Business Administration</span>
                      <span className="font-bold">79.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Engineering</span>
                      <span className="font-bold">75.6%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Healthcare</span>
                      <span className="font-bold">77.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Attention Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm font-medium text-yellow-800">5 exams pending grading</p>
                      <p className="text-xs text-yellow-600">Review and publish results</p>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm font-medium text-red-800">3 students with failing grades</p>
                      <p className="text-xs text-red-600">Consider remedial actions</p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">2 exams scheduled this week</p>
                      <p className="text-xs text-blue-600">Ensure preparation is complete</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
