"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeacherClassesPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Classes (Teacher)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">List and manage your classes here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
