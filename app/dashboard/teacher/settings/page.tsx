"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TeacherSettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-gray-700">Full Name</Label>
              <Input className="mt-1" defaultValue="Sarah Teacher" />
            </div>
            <div>
              <Label className="text-sm text-gray-700">Email</Label>
              <Input className="mt-1" type="email" defaultValue="teacher@example.com" />
            </div>
            <div>
              <Label className="text-sm text-gray-700">Department</Label>
              <Input className="mt-1" defaultValue="Computer Science" />
            </div>
            <div>
              <Label className="text-sm text-gray-700">Employee ID</Label>
              <Input className="mt-1" defaultValue="EMP-5678" />
            </div>
          </div>
          <div className="mt-4">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <label className="flex items-center gap-3"><input type="checkbox" defaultChecked className="accent-green-600" /> Assignment submissions</label>
            <label className="flex items-center gap-3"><input type="checkbox" defaultChecked className="accent-green-600" /> Class schedule changes</label>
            <label className="flex items-center gap-3"><input type="checkbox" className="accent-green-600" /> Student messages</label>
          </div>
          <div className="mt-4"><Button>Save Preferences</Button></div>
        </CardContent>
      </Card>
    </div>
  )
}
