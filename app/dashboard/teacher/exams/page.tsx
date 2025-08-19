"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeacherExamsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Exams (Teacher)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Create and manage exams for your classes.</p>
        </CardContent>
      </Card>
    </div>
  )
}
