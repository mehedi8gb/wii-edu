"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffTasksPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tasks (Staff)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">View and manage assigned tasks.</p>
        </CardContent>
      </Card>
    </div>
  )
}
