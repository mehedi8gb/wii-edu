"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeacherSchedulePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Schedule (Teacher)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">View and manage your schedule.</p>
        </CardContent>
      </Card>
    </div>
  )
}
