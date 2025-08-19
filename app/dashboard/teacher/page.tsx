"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeacherOverviewPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Overview (Teacher)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Quick snapshot of your classes and tasks.</p>
        </CardContent>
      </Card>
    </div>
  )
}
