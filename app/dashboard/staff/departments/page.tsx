"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building } from "lucide-react"

const departments = [
  { name: "Computer Science", head: "Dr. Khan", email: "cse@wii.edu" },
  { name: "Electrical Engineering", head: "Mr. Rahman", email: "eee@wii.edu" },
  { name: "Business Administration", head: "Ms. Sultana", email: "ba@wii.edu" },
]

export default function StaffDepartmentsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Departments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((d) => (
              <Card key={d.name} className="border hover:shadow-sm transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Building className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="font-semibold text-gray-900">{d.name}</div>
                  </div>
                  <div className="text-sm text-gray-600">Head: <span className="text-gray-900">{d.head}</span></div>
                  <div className="text-sm text-gray-600">Email: <span className="text-gray-900">{d.email}</span></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
