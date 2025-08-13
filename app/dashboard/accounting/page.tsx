"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Plus,
  Search,
  Eye,
  Download,
  CreditCard,
  Receipt,
  PieChart,
  Calendar,
} from "lucide-react"
import Link from "next/link"

interface Transaction {
  id: string
  type: "income" | "expense"
  category: string
  description: string
  amount: number
  date: string
  status: "completed" | "pending" | "cancelled"
  studentId?: string
  studentName?: string
  paymentMethod: string
}

interface StudentFee {
  id: string
  studentName: string
  studentId: string
  course: string
  semester: string
  totalFee: number
  paidAmount: number
  dueAmount: number
  dueDate: string
  status: "paid" | "partial" | "overdue"
  lastPayment: string
}

interface FinancialSummary {
  totalRevenue: number
  totalExpenses: number
  netProfit: number
  pendingFees: number
  monthlyGrowth: number
}

export default function AccountingPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [studentFees, setStudentFees] = useState<StudentFee[]>([])
  const [summary, setSummary] = useState<FinancialSummary>({
    totalRevenue: 0,
    totalExpenses: 0,
    netProfit: 0,
    pendingFees: 0,
    monthlyGrowth: 0,
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false)

  // Mock data
  useEffect(() => {
    const mockTransactions: Transaction[] = [
      {
        id: "1",
        type: "income",
        category: "Tuition Fee",
        description: "Spring 2025 Semester Fee",
        amount: 25000,
        date: "2025-01-10",
        status: "completed",
        studentId: "CSE2023001",
        studentName: "Ahmed Rahman",
        paymentMethod: "Bank Transfer",
      },
      {
        id: "2",
        type: "expense",
        category: "Utilities",
        description: "Electricity Bill - December 2024",
        amount: 15000,
        date: "2025-01-08",
        status: "completed",
        paymentMethod: "Cash",
      },
      {
        id: "3",
        type: "income",
        category: "Admission Fee",
        description: "New Student Admission",
        amount: 5000,
        date: "2025-01-12",
        status: "completed",
        studentId: "BBA2025001",
        studentName: "Fatima Khatun",
        paymentMethod: "Mobile Banking",
      },
      {
        id: "4",
        type: "expense",
        category: "Salary",
        description: "Faculty Salary - January 2025",
        amount: 180000,
        date: "2025-01-05",
        status: "completed",
        paymentMethod: "Bank Transfer",
      },
      {
        id: "5",
        type: "income",
        category: "Lab Fee",
        description: "Computer Lab Usage Fee",
        amount: 3000,
        date: "2025-01-13",
        status: "pending",
        studentId: "CSE2023005",
        studentName: "Karim Uddin",
        paymentMethod: "Cash",
      },
    ]

    const mockStudentFees: StudentFee[] = [
      {
        id: "1",
        studentName: "Ahmed Rahman",
        studentId: "CSE2023001",
        course: "Computer Science",
        semester: "Spring 2025",
        totalFee: 30000,
        paidAmount: 25000,
        dueAmount: 5000,
        dueDate: "2025-02-15",
        status: "partial",
        lastPayment: "2025-01-10",
      },
      {
        id: "2",
        studentName: "Fatima Khatun",
        studentId: "BBA2023002",
        course: "Business Administration",
        semester: "Spring 2025",
        totalFee: 28000,
        paidAmount: 28000,
        dueAmount: 0,
        dueDate: "2025-01-31",
        status: "paid",
        lastPayment: "2025-01-05",
      },
      {
        id: "3",
        studentName: "Mohammad Hasan",
        studentId: "ENG2023003",
        course: "Engineering",
        semester: "Spring 2025",
        totalFee: 35000,
        paidAmount: 20000,
        dueAmount: 15000,
        dueDate: "2025-01-20",
        status: "overdue",
        lastPayment: "2024-12-15",
      },
      {
        id: "4",
        studentName: "Rashida Begum",
        studentId: "HLT2023004",
        course: "Healthcare",
        semester: "Spring 2025",
        totalFee: 32000,
        paidAmount: 32000,
        dueAmount: 0,
        dueDate: "2025-01-31",
        status: "paid",
        lastPayment: "2025-01-08",
      },
      {
        id: "5",
        studentName: "Karim Uddin",
        studentId: "CSE2023005",
        course: "Computer Science",
        semester: "Spring 2025",
        totalFee: 30000,
        paidAmount: 15000,
        dueAmount: 15000,
        dueDate: "2025-02-01",
        status: "partial",
        lastPayment: "2024-12-20",
      },
    ]

    const mockSummary: FinancialSummary = {
      totalRevenue: 1250000,
      totalExpenses: 850000,
      netProfit: 400000,
      pendingFees: 125000,
      monthlyGrowth: 12.5,
    }

    setTransactions(mockTransactions)
    setStudentFees(mockStudentFees)
    setSummary(mockSummary)
  }, [])

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (transaction.studentName && transaction.studentName.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = typeFilter === "all" || transaction.type === typeFilter
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter

    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "completed":
      case "paid":
        return "bg-green-100 text-green-800"
      case "pending":
      case "partial":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                Accounting & Finance
              </h1>
              <p className="text-gray-600 mt-1">Manage financial transactions and student fee collections</p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
                <Link href="/dashboard">← Back to Dashboard</Link>
              </Button>
              <Dialog open={isAddTransactionOpen} onOpenChange={setIsAddTransactionOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Transaction
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Transaction</DialogTitle>
                    <DialogDescription>Record a new financial transaction</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="transaction-type">Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="income">Income</SelectItem>
                          <SelectItem value="expense">Expense</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tuition">Tuition Fee</SelectItem>
                          <SelectItem value="admission">Admission Fee</SelectItem>
                          <SelectItem value="lab">Lab Fee</SelectItem>
                          <SelectItem value="salary">Salary</SelectItem>
                          <SelectItem value="utilities">Utilities</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Input id="description" placeholder="Enter description" />
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount (BDT)</Label>
                      <Input id="amount" type="number" placeholder="Enter amount" />
                    </div>
                    <div>
                      <Label htmlFor="payment-method">Payment Method</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="mobile">Mobile Banking</SelectItem>
                          <SelectItem value="card">Card Payment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Add Transaction</Button>
                      <Button variant="outline" onClick={() => setIsAddTransactionOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(summary.totalRevenue)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                  <p className="text-2xl font-bold text-red-600">{formatCurrency(summary.totalExpenses)}</p>
                </div>
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Net Profit</p>
                  <p className="text-2xl font-bold text-blue-600">{formatCurrency(summary.netProfit)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Fees</p>
                  <p className="text-2xl font-bold text-orange-600">{formatCurrency(summary.pendingFees)}</p>
                </div>
                <Receipt className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
                  <p className="text-2xl font-bold text-purple-600">+{summary.monthlyGrowth}%</p>
                </div>
                <PieChart className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="student-fees">Student Fees</TabsTrigger>
            <TabsTrigger value="reports">Financial Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search transactions by description, category, or student..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="income">Income</SelectItem>
                        <SelectItem value="expense">Expense</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transactions Table */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>All financial transactions and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Description</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Student</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTransactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 text-gray-600">{transaction.date}</td>
                          <td className="py-4 px-4">
                            <Badge
                              className={`${
                                transaction.type === "income"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              } text-xs`}
                            >
                              {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{transaction.category}</td>
                          <td className="py-4 px-4 text-gray-600">{transaction.description}</td>
                          <td className="py-4 px-4">
                            {transaction.studentName ? (
                              <div>
                                <p className="font-medium text-gray-900">{transaction.studentName}</p>
                                <p className="text-xs text-gray-600">{transaction.studentId}</p>
                              </div>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`font-medium ${
                                transaction.type === "income" ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {transaction.type === "income" ? "+" : "-"}
                              {formatCurrency(transaction.amount)}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={`${getStatusBadgeColor(transaction.status)} text-xs`}>
                              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Student Fees Tab */}
          <TabsContent value="student-fees" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Fee Management</CardTitle>
                <CardDescription>Track and manage student fee payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Student</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Course</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Semester</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Total Fee</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Paid</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Due</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Due Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentFees.map((fee) => (
                        <tr key={fee.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{fee.studentName}</p>
                              <p className="text-sm text-gray-600">{fee.studentId}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{fee.course}</td>
                          <td className="py-4 px-4 text-gray-600">{fee.semester}</td>
                          <td className="py-4 px-4 font-medium">{formatCurrency(fee.totalFee)}</td>
                          <td className="py-4 px-4 font-medium text-green-600">{formatCurrency(fee.paidAmount)}</td>
                          <td className="py-4 px-4 font-medium text-red-600">{formatCurrency(fee.dueAmount)}</td>
                          <td className="py-4 px-4 text-gray-600">{fee.dueDate}</td>
                          <td className="py-4 px-4">
                            <Badge className={`${getStatusBadgeColor(fee.status)} text-xs`}>
                              {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <CreditCard className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Monthly Revenue Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>January 2025</span>
                      <span className="font-bold text-green-600">{formatCurrency(450000)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>December 2024</span>
                      <span className="font-bold">{formatCurrency(420000)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>November 2024</span>
                      <span className="font-bold">{formatCurrency(380000)}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Q4 2024 Total</span>
                        <span className="font-bold text-blue-600">{formatCurrency(1250000)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Monthly Expenses Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Salaries</span>
                      <span className="font-bold text-red-600">{formatCurrency(180000)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Utilities</span>
                      <span className="font-bold">{formatCurrency(25000)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Maintenance</span>
                      <span className="font-bold">{formatCurrency(15000)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Supplies</span>
                      <span className="font-bold">{formatCurrency(12000)}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Total Expenses</span>
                        <span className="font-bold text-red-600">{formatCurrency(232000)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>Download detailed financial reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Income Statement
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Balance Sheet
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Cash Flow Report
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Student Fee Report
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Expense Report
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Tax Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Tuition Fees</span>
                      <span className="font-bold">75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Admission Fees</span>
                      <span className="font-bold">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Lab Fees</span>
                      <span className="font-bold">8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Other Fees</span>
                      <span className="font-bold">2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Bank Transfer</span>
                      <span className="font-bold">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mobile Banking</span>
                      <span className="font-bold">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cash</span>
                      <span className="font-bold">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Card Payment</span>
                      <span className="font-bold">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
