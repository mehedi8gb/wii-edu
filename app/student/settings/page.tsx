"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentSettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Update your profile, password and notification preferences here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
