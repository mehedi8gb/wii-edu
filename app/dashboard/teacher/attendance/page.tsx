"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface StudentRow { id: string; name: string; status: "present" | "absent" | "late" }

const demo: StudentRow[] = [
  { id: "S-101", name: "John Smith", status: "present" },
  { id: "S-102", name: "Sarah Johnson", status: "late" },
  { id: "S-103", name: "Mike Wilson", status: "absent" },
  { id: "S-104", name: "Amina Khatun", status: "present" },
]

export default function TeacherAttendancePage() {
  const [cls, setCls] = useState("CSE-220")
  const [q, setQ] = useState("")

  const filtered = demo.filter((s) => (s.name + s.id).toLowerCase().includes(q.toLowerCase()))

  const badge = (s: StudentRow["status"]) =>
    s === "present" ? (
      <Badge className="bg-green-100 text-green-700">Present</Badge>
    ) : s === "late" ? (
      <Badge className="bg-yellow-100 text-yellow-700">Late</Badge>
    ) : (
      <Badge className="bg-red-100 text-red-700">Absent</Badge>
    )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Attendance</CardTitle>
            <div className="flex items-center gap-2">
              <Select value={cls} onValueChange={setCls}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CSE-220">CSE-220</SelectItem>
                  <SelectItem value="MAT-210">MAT-210</SelectItem>
                  <SelectItem value="EEE-230">EEE-230</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search student by name or ID" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">ID</th>
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id} className="border-b">
                    <td className="py-2">{s.id}</td>
                    <td className="py-2">{s.name}</td>
                    <td className="py-2">{badge(s.status)}</td>
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
