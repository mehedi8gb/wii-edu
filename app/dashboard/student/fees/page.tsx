"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wallet, Search } from "lucide-react"

interface Invoice {
  id: string
  title: string
  amount: number
  paid: number
  status: "paid" | "pending" | "overdue"
  date: string
}

export default function StudentFeesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [filter, setFilter] = useState("all")
  const [query, setQuery] = useState("")

  useEffect(() => {
    setInvoices([
      { id: "1", title: "Semester Fee", amount: 2500, paid: 2500, status: "paid", date: "2025-01-15" },
      { id: "2", title: "Lab Fee", amount: 500, paid: 250, status: "pending", date: "2025-02-02" },
      { id: "3", title: "Library Fine", amount: 50, paid: 0, status: "overdue", date: "2025-03-01" },
    ])
  }, [])

  const filtered = invoices.filter((inv) =>
    (filter === "all" || inv.status === filter) && inv.title.toLowerCase().includes(query.toLowerCase()),
  )

  const totalDue = invoices.reduce((sum, inv) => sum + (inv.amount - inv.paid), 0)
  const totalPaid = invoices.reduce((sum, inv) => sum + inv.paid, 0)

  const statusBadge = (s: Invoice["status"]) =>
    s === "paid" ? (
      <Badge className="bg-green-100 text-green-700">Paid</Badge>
    ) : s === "pending" ? (
      <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
    ) : (
      <Badge className="bg-red-100 text-red-700">Overdue</Badge>
    )

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Wallet className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Total Paid</div>
              <div className="text-2xl font-bold text-gray-900">${totalPaid.toLocaleString()}</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600">Total Due</div>
            <div className={`text-2xl font-bold ${totalDue > 0 ? "text-red-600" : "text-gray-900"}`}>${totalDue.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600">Invoices</div>
            <div className="text-2xl font-bold text-gray-900">{invoices.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters & Search */}
      <Card>
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search invoices by title"
                className="pl-9"
              />
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Download Statement</Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Title</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Paid</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((inv) => (
                  <tr key={inv.id} className="border-b">
                    <td className="py-2">{inv.title}</td>
                    <td className="py-2">${inv.amount.toLocaleString()}</td>
                    <td className="py-2">${inv.paid.toLocaleString()}</td>
                    <td className="py-2">{statusBadge(inv.status)}</td>
                    <td className="py-2">{inv.date}</td>
                    <td className="py-2">
                      {inv.status !== "paid" ? (
                        <Button size="sm">Pay Now</Button>
                      ) : (
                        <Button size="sm" variant="outline">Receipt</Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
