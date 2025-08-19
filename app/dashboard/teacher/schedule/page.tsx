"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const schedule = [
  { day: "Monday", items: [{ time: "10:00", title: "CSE-220 Lecture", room: "R-204" }] },
  { day: "Wednesday", items: [{ time: "12:00", title: "CSE-220 Lab", room: "Lab-2" }, { time: "15:00", title: "Office Hours", room: "Dept Office" }] },
  { day: "Friday", items: [{ time: "09:00", title: "MAT-210 Lecture", room: "R-105" }] },
]

export default function TeacherSchedulePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Schedule</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {schedule.map((d) => (
            <div key={d.day} className="border rounded-lg p-4">
              <div className="flex items-center gap-2 font-medium text-gray-900 mb-3">
                <Calendar className="w-4 h-4 text-purple-600" /> {d.day}
              </div>
              <div className="space-y-2">
                {d.items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <div className="text-gray-600">{it.time}</div>
                    <div className="flex-1 mx-4 text-gray-900">{it.title}</div>
                    <div className="text-gray-500">{it.room}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
