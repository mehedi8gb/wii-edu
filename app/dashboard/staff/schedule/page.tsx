"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const items = [
  { date: "2025-08-20", title: "Admissions Meeting", time: "10:00", place: "Conference Room" },
  { date: "2025-08-22", title: "Inventory Audit", time: "12:00", place: "EEE Lab" },
  { date: "2025-08-24", title: "Tech Fest Prep", time: "15:00", place: "Main Ground" },
]

export default function StaffSchedulePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Schedule</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {items.map((it) => (
            <div key={it.title} className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-yellow-700" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{it.title}</div>
                <div className="text-xs text-gray-600">{it.date} • {it.time} • {it.place}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
