"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentTimetablePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Timetable</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Your class timetable will appear here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
