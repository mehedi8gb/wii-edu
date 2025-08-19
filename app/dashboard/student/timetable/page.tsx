"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { useState } from "react"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const periods = ["9:00", "10:00", "11:00", "12:00", "2:00", "3:00"]

export default function StudentTimetablePage() {
  const [semester, setSemester] = useState("fall")
  const [section, setSection] = useState("A")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Weekly Timetable</CardTitle>
            <div className="flex items-center gap-2">
              <Select value={section} onValueChange={setSection}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">Section A</SelectItem>
                  <SelectItem value="B">Section B</SelectItem>
                </SelectContent>
              </Select>
              <Select value={semester} onValueChange={setSemester}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spring">Spring 2025</SelectItem>
                  <SelectItem value="summer">Summer 2025</SelectItem>
                  <SelectItem value="fall">Fall 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[720px]">
              <div className="grid" style={{ gridTemplateColumns: `120px repeat(${days.length}, 1fr)` }}>
                <div className="p-3 font-medium text-gray-500">Time</div>
                {days.map((d) => (
                  <div key={d} className="p-3 font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" /> {d}
                  </div>
                ))}
                {periods.map((p) => (
                  <>
                    <div key={`time-${p}`} className="p-3 text-gray-600 border-t">{p}</div>
                    {days.map((d) => (
                      <div key={`${d}-${p}`} className="p-3 border-t">
                        {/* Example blocks */}
                        {Math.random() > 0.7 ? (
                          <div className="bg-blue-50 border border-blue-100 rounded-md p-2">
                            <div className="text-sm font-medium text-gray-900">CSE-220</div>
                            <div className="text-xs text-gray-600">Room 204 • Dr. Hasan</div>
                          </div>
                        ) : (
                          <div className="text-xs text-gray-400">—</div>
                        )}
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
