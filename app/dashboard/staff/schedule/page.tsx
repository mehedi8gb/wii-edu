"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffSchedulePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Schedule (Staff)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Your staff schedule and calendar.</p>
        </CardContent>
      </Card>
    </div>
  )
}
