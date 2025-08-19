"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentFeesPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Fees & Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Your invoices, dues and payment history will appear here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
