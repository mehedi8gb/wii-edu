"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffOverviewPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Overview (Staff)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Your staff tasks and updates appear here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
