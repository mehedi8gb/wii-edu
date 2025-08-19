"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Users } from "lucide-react"

interface ClassItem {
  id: string
  name: string
  code: string
  students: number
  status: "ongoing" | "completed"
}

export default function TeacherClassesPage() {
  const [classes, setClasses] = useState<ClassItem[]>([])
  const [q, setQ] = useState("")

  useEffect(() => {
    setClasses([
      { id: "1", name: "Data Structures", code: "CSE-220", students: 48, status: "ongoing" },
      { id: "2", name: "Discrete Mathematics", code: "MAT-210", students: 52, status: "ongoing" },
      { id: "3", name: "Digital Logic Design", code: "EEE-230", students: 45, status: "completed" },
    ])
  }, [])

  const filtered = classes.filter((c) => (c.name + c.code).toLowerCase().includes(q.toLowerCase()))

  const statusBadge = (s: ClassItem["status"]) => (
    s === "ongoing" ? (
      <Badge className="bg-green-100 text-green-700">Ongoing</Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-700">Completed</Badge>
    )
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>My Classes</CardTitle>
            <Button>Add New Class</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative mb-4">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search classes" className="pl-9" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <Card key={c.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{c.name}</div>
                      <div className="text-sm text-gray-500">{c.code}</div>
                    </div>
                    {statusBadge(c.status)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" /> {c.students} students
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" variant="outline">Open</Button>
                    <Button className="flex-1">Manage</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
