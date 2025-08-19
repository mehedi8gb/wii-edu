"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function StudentSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-gray-700">Full Name</Label>
              <Input className="mt-1" placeholder="Enter your full name" defaultValue="Mike Student" />
            </div>
            <div>
              <Label className="text-sm text-gray-700">Email</Label>
              <Input className="mt-1" type="email" placeholder="Email" defaultValue="student@example.com" />
            </div>
            <div>
              <Label className="text-sm text-gray-700">Department</Label>
              <Input className="mt-1" placeholder="e.g. Computer Science" defaultValue="Computer Science" />
            </div>
            <div>
              <Label className="text-sm text-gray-700">Student ID</Label>
              <Input className="mt-1" placeholder="ID" defaultValue="ST-2025-0142" />
            </div>
          </div>
          <div className="mt-4">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      {/* Password */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="text-sm text-gray-700">Current Password</Label>
              <Input className="mt-1" type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label className="text-sm text-gray-700">New Password</Label>
              <Input className="mt-1" type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label className="text-sm text-gray-700">Confirm Password</Label>
              <Input className="mt-1" type="password" placeholder="••••••••" />
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline">Update Password</Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="accent-blue-600" />
              <span>Email me about assignment deadlines</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="accent-blue-600" />
              <span>Notify me about exam schedules</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="accent-blue-600" />
              <span>Notify me about payment dues</span>
            </label>
          </div>
          <div className="mt-4">
            <Button>Save Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
