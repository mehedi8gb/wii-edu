"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface ExamRow { id: string; title: string; course: string; date: string; status: "scheduled" | "published" }

const rows: ExamRow[] = [
  { id: "1", title: "Midterm", course: "CSE-220", date: "2025-09-10", status: "scheduled" },
  { id: "2", title: "Quiz 2", course: "MAT-210", date: "2025-09-05", status: "published" },
]

export default function TeacherExamsPage() {
  const [q, setQ] = useState("")
  const filtered = rows.filter((r) => (r.title + r.course).toLowerCase().includes(q.toLowerCase()))

  const sBadge = (s: ExamRow["status"]) => s === "scheduled" ? (
    <Badge className="bg-yellow-100 text-yellow-700">Scheduled</Badge>
  ) : (
    <Badge className="bg-green-100 text-green-700">Published</Badge>
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Exams</CardTitle>
            <Button>Create Exam</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search exams" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Title</th>
                  <th className="text-left py-2">Course</th>
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr key={r.id} className="border-b">
                    <td className="py-2">{r.title}</td>
                    <td className="py-2">{r.course}</td>
                    <td className="py-2">{r.date}</td>
                    <td className="py-2">{sBadge(r.status)}</td>
                    <td className="py-2">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm">Publish</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
