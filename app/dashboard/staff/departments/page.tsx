"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffDepartmentsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Departments (Staff)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Coordinate with departments and internal operations.</p>
        </CardContent>
      </Card>
    </div>
  )
}
