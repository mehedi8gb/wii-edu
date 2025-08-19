"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeacherAttendancePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Attendance (Teacher)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Mark and view attendance for your classes.</p>
        </CardContent>
      </Card>
    </div>
  )
}
