"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, FileSpreadsheet } from "lucide-react"

interface Exam {
  id: string
  course: string
  code: string
  date: string
  time: string
  room: string
  status: "upcoming" | "completed"
}

export default function StudentExamsPage() {
  const [exams, setExams] = useState<Exam[]>([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    setExams([
      { id: "1", course: "Data Structures", code: "CSE-220", date: "2025-09-10", time: "10:00 AM", room: "R-204", status: "upcoming" },
      { id: "2", course: "Discrete Mathematics", code: "MAT-210", date: "2025-09-12", time: "02:00 PM", room: "R-105", status: "upcoming" },
      { id: "3", course: "Digital Logic Design", code: "EEE-230", date: "2025-05-21", time: "09:00 AM", room: "R-305", status: "completed" },
    ])
  }, [])

  const filtered = exams.filter((e) => (e.course + e.code).toLowerCase().includes(query.toLowerCase()))

  const badge = (s: Exam["status"]) => (
    s === "upcoming" ? (
      <Badge className="bg-blue-100 text-blue-700">Upcoming</Badge>
    ) : (
      <Badge className="bg-green-100 text-green-700">Completed</Badge>
    )
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Exam Schedule & Results</CardTitle>
            <Button variant="outline" size="sm">
              <FileSpreadsheet className="w-4 h-4 mr-2" /> Download Schedule
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by course or code"
                className="pl-3"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Course</th>
                  <th className="text-left py-2">Code</th>
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Time</th>
                  <th className="text-left py-2">Room</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e) => (
                  <tr key={e.id} className="border-b">
                    <td className="py-2">{e.course}</td>
                    <td className="py-2">{e.code}</td>
                    <td className="py-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-gray-500" /> {e.date}</td>
                    <td className="py-2">{e.time}</td>
                    <td className="py-2">{e.room}</td>
                    <td className="py-2">{badge(e.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-green-50 border border-green-100">
              <div className="text-sm text-gray-600">CSE-220</div>
              <div className="text-2xl font-semibold text-gray-900">A-</div>
              <div className="text-xs text-gray-500">Grade</div>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
              <div className="text-sm text-gray-600">MAT-210</div>
              <div className="text-2xl font-semibold text-gray-900">B+</div>
              <div className="text-xs text-gray-500">Grade</div>
            </div>
            <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-100">
              <div className="text-sm text-gray-600">EEE-230</div>
              <div className="text-2xl font-semibold text-gray-900">A</div>
              <div className="text-xs text-gray-500">Grade</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
