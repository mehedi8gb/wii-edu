"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffSettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Settings (Staff)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Manage your profile and preferences.</p>
        </CardContent>
      </Card>
    </div>
  )
}
