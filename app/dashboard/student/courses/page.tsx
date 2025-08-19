"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentCoursesPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Your enrolled courses will appear here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
