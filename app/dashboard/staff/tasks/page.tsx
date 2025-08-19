"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

interface Task { id: string; title: string; dept: string; due: string; status: "open" | "in-progress" | "done" }

const tasks: Task[] = [
  { id: "T-01", title: "Prepare orientation kits", dept: "Admin", due: "2025-08-25", status: "in-progress" },
  { id: "T-02", title: "Collect lab inventory", dept: "EEE", due: "2025-08-22", status: "open" },
  { id: "T-03", title: "Event logistics - Tech Fest", dept: "CSE", due: "2025-08-30", status: "done" },
]

export default function StaffTasksPage() {
  const [q, setQ] = useState("")
  const filtered = tasks.filter((t) => (t.title + t.dept + t.id).toLowerCase().includes(q.toLowerCase()))

  const sBadge = (s: Task["status"]) => s === "open" ? (
    <Badge className="bg-yellow-100 text-yellow-700">Open</Badge>
  ) : s === "in-progress" ? (
    <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>
  ) : (
    <Badge className="bg-green-100 text-green-700">Done</Badge>
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Tasks</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tasks by title, dept or ID" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">ID</th>
                  <th className="text-left py-2">Title</th>
                  <th className="text-left py-2">Department</th>
                  <th className="text-left py-2">Due</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((t) => (
                  <tr key={t.id} className="border-b">
                    <td className="py-2">{t.id}</td>
                    <td className="py-2">{t.title}</td>
                    <td className="py-2">{t.dept}</td>
                    <td className="py-2">{t.due}</td>
                    <td className="py-2">{sBadge(t.status)}</td>
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
