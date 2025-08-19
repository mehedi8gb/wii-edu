"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Calendar } from "lucide-react"

export default function StaffOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Open Tasks</div>
              <div className="text-2xl font-bold text-gray-900">12</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Departments</div>
              <div className="text-2xl font-bold text-gray-900">8</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Events this week</div>
              <div className="text-2xl font-bold text-gray-900">4</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Announcements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-purple-50 border border-purple-100 rounded-lg text-sm">New admission drive starts next month.</div>
          <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm">Maintenance scheduled for Lab-3 on Saturday.</div>
          <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg text-sm">Submit budget proposals by Friday.</div>
        </CardContent>
      </Card>
    </div>
  )
}
