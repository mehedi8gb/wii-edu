"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, GraduationCap, UserCheck, Calendar, Search, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DashboardStats {
  students: number
  teachers: number
  parents: number
  staff: number
  attendance: number
  courses: number
  revenue: number
  expenses: number
}

interface AccountRecord {
  id: string
  student: string
  class: string
  invoiceTitle: string
  totalAmount: number
  paidAmount: number
  status: "paid" | "pending" | "overdue"
  date: string
}

interface ExpenseRecord {
  id: string
  expense: string
  amount: number
  date: string
  category: string
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    students: 1247,
    teachers: 89,
    parents: 1156,
    staff: 45,
    attendance: 1089,
    courses: 24,
    revenue: 125000,
    expenses: 45000,
  })
  const [accounts, setAccounts] = useState<AccountRecord[]>([])
  const [expenses, setExpenses] = useState<ExpenseRecord[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [entriesPerPage, setEntriesPerPage] = useState("10")

  useEffect(() => {
    // Load demo data
    setAccounts([
      {
        id: "1",
        student: "John Smith",
        class: "Computer Science",
        invoiceTitle: "Semester Fee",
        totalAmount: 2500,
        paidAmount: 2500,
        status: "paid",
        date: "2024-08-15",
      },
      {
        id: "2",
        student: "Sarah Johnson",
        class: "Business Admin",
        invoiceTitle: "Lab Fee",
        totalAmount: 500,
        paidAmount: 250,
        status: "pending",
        date: "2024-08-10",
      },
      {
        id: "3",
        student: "Mike Wilson",
        class: "Engineering",
        invoiceTitle: "Library Fee",
        totalAmount: 200,
        paidAmount: 0,
        status: "overdue",
        date: "2024-07-30",
      },
    ])

    setExpenses([
      {
        id: "1",
        expense: "Laboratory Equipment",
        amount: 15000,
        date: "2024-08-12",
        category: "Equipment",
      },
      {
        id: "2",
        expense: "Faculty Salaries",
        amount: 25000,
        date: "2024-08-01",
        category: "Payroll",
      },
      {
        id: "3",
        expense: "Utilities",
        amount: 3500,
        date: "2024-08-05",
        category: "Operations",
      },
    ])
  }, [])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "overdue":
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Students</p>
                <p className="text-2xl font-bold text-gray-900">{stats.students.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Total number of students</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Teachers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.teachers}</p>
                <p className="text-xs text-gray-500">Total number of teachers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Parents</p>
                <p className="text-2xl font-bold text-gray-900">{stats.parents.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Total number of parents</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Staff</p>
                <p className="text-2xl font-bold text-gray-900">{stats.staff}</p>
                <p className="text-xs text-gray-500">Total number of staff</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Attendance */}
        <Card className="lg:col-span-1">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardTitle className="text-lg">Today's Attendance</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.attendance.toLocaleString()}</div>
              <p className="text-gray-600 mb-4">{stats.attendance} students are attending today</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Go to attendance <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Events */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Recent Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">New Student Orientation</p>
                  <p className="text-sm text-gray-600">August 20, 2024 - 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Faculty Meeting</p>
                  <p className="text-sm text-gray-600">August 18, 2024 - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Semester Exam Schedule</p>
                  <p className="text-sm text-gray-600">August 25, 2024 - All Day</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accounts and Expenses Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Accounts Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Accounts of August</span>
              <ChevronRight className="w-5 h-5" />
            </CardTitle>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Show</span>
                <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-600">entries</span>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Student</th>
                    <th className="text-left py-2">Class</th>
                    <th className="text-left py-2">Invoice Title</th>
                    <th className="text-left py-2">Total Amount</th>
                    <th className="text-left py-2">Paid Amount</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.length > 0 ? (
                    accounts.map((account) => (
                      <tr key={account.id} className="border-b">
                        <td className="py-2">{account.student}</td>
                        <td className="py-2">{account.class}</td>
                        <td className="py-2">{account.invoiceTitle}</td>
                        <td className="py-2">${account.totalAmount}</td>
                        <td className="py-2">${account.paidAmount}</td>
                        <td className="py-2">{getStatusBadge(account.status)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-8 text-gray-500">
                        No data available in table
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
              <span>
                Showing 1 to {accounts.length} of {accounts.length} entries
              </span>
              <div className="flex space-x-1">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expenses Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Expense of August</span>
              <ChevronRight className="w-5 h-5" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Expense</th>
                    <th className="text-left py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.length > 0 ? (
                    expenses.map((expense) => (
                      <tr key={expense.id} className="border-b">
                        <td className="py-2">{expense.expense}</td>
                        <td className="py-2">${expense.amount.toLocaleString()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="text-center py-8 text-gray-500">
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
