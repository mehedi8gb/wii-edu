"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentExamsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Exams</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Your exams, results and schedules will appear here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
