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
  Settings,
  FileText,
  Package,
  Users,
  Plus,
  Search,
  Eye,
  Edit,
  Download,
  Archive,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

interface Document {
  id: string
  title: string
  type: "policy" | "form" | "certificate" | "report" | "contract"
  department: string
  uploadDate: string
  size: string
  status: "active" | "archived" | "pending"
  uploadedBy: string
}

interface InventoryItem {
  id: string
  name: string
  category: string
  quantity: number
  minStock: number
  unit: string
  location: string
  lastUpdated: string
  status: "in-stock" | "low-stock" | "out-of-stock"
  supplier: string
}

interface StaffRecord {
  id: string
  name: string
  employeeId: string
  department: string
  position: string
  joinDate: string
  status: "active" | "on-leave" | "terminated"
  contact: string
  salary: number
}

export default function BackOfficePage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [staff, setStaff] = useState<StaffRecord[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddDocumentOpen, setIsAddDocumentOpen] = useState(false)
  const [isAddInventoryOpen, setIsAddInventoryOpen] = useState(false)

  // Mock data
  useEffect(() => {
    const mockDocuments: Document[] = [
      {
        id: "1",
        title: "Student Admission Policy 2025",
        type: "policy",
        department: "Administration",
        uploadDate: "2025-01-10",
        size: "2.5 MB",
        status: "active",
        uploadedBy: "Admin Office",
      },
      {
        id: "2",
        title: "Course Registration Form",
        type: "form",
        department: "Academic",
        uploadDate: "2025-01-08",
        size: "1.2 MB",
        status: "active",
        uploadedBy: "Academic Office",
      },
      {
        id: "3",
        title: "Teacher Employment Contract Template",
        type: "contract",
        department: "HR",
        uploadDate: "2025-01-05",
        size: "3.1 MB",
        status: "active",
        uploadedBy: "HR Department",
      },
      {
        id: "4",
        title: "Annual Financial Report 2024",
        type: "report",
        department: "Finance",
        uploadDate: "2024-12-31",
        size: "5.8 MB",
        status: "archived",
        uploadedBy: "Finance Office",
      },
      {
        id: "5",
        title: "Graduation Certificate Template",
        type: "certificate",
        department: "Academic",
        uploadDate: "2025-01-12",
        size: "800 KB",
        status: "pending",
        uploadedBy: "Registrar Office",
      },
    ]

    const mockInventory: InventoryItem[] = [
      {
        id: "1",
        name: "Whiteboard Markers",
        category: "Stationery",
        quantity: 45,
        minStock: 20,
        unit: "pieces",
        location: "Storage Room A",
        lastUpdated: "2025-01-10",
        status: "in-stock",
        supplier: "Office Supplies Ltd",
      },
      {
        id: "2",
        name: "Computer Keyboards",
        category: "IT Equipment",
        quantity: 8,
        minStock: 10,
        unit: "pieces",
        location: "IT Storage",
        lastUpdated: "2025-01-08",
        status: "low-stock",
        supplier: "Tech Solutions",
      },
      {
        id: "3",
        name: "Projector Bulbs",
        category: "Electronics",
        quantity: 0,
        minStock: 5,
        unit: "pieces",
        location: "Maintenance Room",
        lastUpdated: "2025-01-05",
        status: "out-of-stock",
        supplier: "Electronics Hub",
      },
      {
        id: "4",
        name: "A4 Paper",
        category: "Stationery",
        quantity: 150,
        minStock: 50,
        unit: "reams",
        location: "Storage Room B",
        lastUpdated: "2025-01-12",
        status: "in-stock",
        supplier: "Paper World",
      },
      {
        id: "5",
        name: "Cleaning Supplies",
        category: "Maintenance",
        quantity: 25,
        minStock: 15,
        unit: "sets",
        location: "Janitor Room",
        lastUpdated: "2025-01-09",
        status: "in-stock",
        supplier: "Clean Pro",
      },
    ]

    const mockStaff: StaffRecord[] = [
      {
        id: "1",
        name: "Dr. Sarah Johnson",
        employeeId: "EMP001",
        department: "Computer Science",
        position: "Head of Department",
        joinDate: "2020-03-15",
        status: "active",
        contact: "+880-1712-345678",
        salary: 85000,
      },
      {
        id: "2",
        name: "Prof. Michael Chen",
        employeeId: "EMP002",
        department: "Business Administration",
        position: "Senior Lecturer",
        joinDate: "2019-08-20",
        status: "active",
        contact: "+880-1812-345679",
        salary: 75000,
      },
      {
        id: "3",
        name: "Ms. Emily Rodriguez",
        employeeId: "EMP003",
        department: "Administration",
        position: "Registrar",
        joinDate: "2021-01-10",
        status: "on-leave",
        contact: "+880-1912-345680",
        salary: 55000,
      },
      {
        id: "4",
        name: "Dr. David Kim",
        employeeId: "EMP004",
        department: "Engineering",
        position: "Associate Professor",
        joinDate: "2018-06-05",
        status: "active",
        contact: "+880-1612-345681",
        salary: 80000,
      },
      {
        id: "5",
        name: "Mr. Ahmed Hassan",
        employeeId: "EMP005",
        department: "IT Support",
        position: "System Administrator",
        joinDate: "2022-09-12",
        status: "active",
        contact: "+880-1512-345682",
        salary: 45000,
      },
    ]

    setDocuments(mockDocuments)
    setInventory(mockInventory)
    setStaff(mockStaff)
  }, [])

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === "all" || doc.type === typeFilter
    const matchesStatus = statusFilter === "all" || doc.status === statusFilter

    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
      case "in-stock":
        return "bg-green-100 text-green-800"
      case "pending":
      case "low-stock":
      case "on-leave":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
      case "out-of-stock":
      case "terminated":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
      case "in-stock":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
      case "low-stock":
      case "on-leave":
        return <AlertTriangle className="h-4 w-4" />
      case "archived":
      case "out-of-stock":
      case "terminated":
        return <Archive className="h-4 w-4" />
      default:
        return <CheckCircle className="h-4 w-4" />
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
                <Settings className="h-6 w-6" />
                Back Office Management
              </h1>
              <p className="text-gray-600 mt-1">Manage documents, inventory, and administrative operations</p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
                <Link href="/dashboard">← Back to Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Documents</p>
                  <p className="text-2xl font-bold text-gray-900">{documents.length}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Inventory Items</p>
                  <p className="text-2xl font-bold text-gray-900">{inventory.length}</p>
                </div>
                <Package className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Staff Records</p>
                  <p className="text-2xl font-bold text-gray-900">{staff.length}</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {inventory.filter((item) => item.status === "low-stock" || item.status === "out-of-stock").length}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="staff">Staff Records</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
          </TabsList>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Document Management</h3>
                <p className="text-gray-600">Manage institutional documents and files</p>
              </div>
              <Dialog open={isAddDocumentOpen} onOpenChange={setIsAddDocumentOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Document
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Upload New Document</DialogTitle>
                    <DialogDescription>Add a new document to the system</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="doc-title">Document Title</Label>
                      <Input id="doc-title" placeholder="Enter document title" />
                    </div>
                    <div>
                      <Label htmlFor="doc-type">Document Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="policy">Policy</SelectItem>
                          <SelectItem value="form">Form</SelectItem>
                          <SelectItem value="certificate">Certificate</SelectItem>
                          <SelectItem value="report">Report</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Administration">Administration</SelectItem>
                          <SelectItem value="Academic">Academic</SelectItem>
                          <SelectItem value="HR">HR</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="file">Upload File</Label>
                      <Input id="file" type="file" />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Upload Document</Button>
                      <Button variant="outline" onClick={() => setIsAddDocumentOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search documents by title or department..."
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
                        <SelectItem value="policy">Policy</SelectItem>
                        <SelectItem value="form">Form</SelectItem>
                        <SelectItem value="certificate">Certificate</SelectItem>
                        <SelectItem value="report">Report</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents Table */}
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Document</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Department</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Upload Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Size</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDocuments.map((doc) => (
                        <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{doc.title}</p>
                              <p className="text-sm text-gray-600">Uploaded by {doc.uploadedBy}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant="secondary" className="text-xs">
                              {doc.type.charAt(0).toUpperCase() + doc.type.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{doc.department}</td>
                          <td className="py-4 px-4 text-gray-600">{doc.uploadDate}</td>
                          <td className="py-4 px-4 text-gray-600">{doc.size}</td>
                          <td className="py-4 px-4">
                            <Badge
                              className={`${getStatusBadgeColor(doc.status)} flex items-center gap-1 w-fit text-xs`}
                            >
                              {getStatusIcon(doc.status)}
                              {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
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
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
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

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Inventory Management</h3>
                <p className="text-gray-600">Track and manage institutional inventory</p>
              </div>
              <Dialog open={isAddInventoryOpen} onOpenChange={setIsAddInventoryOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add Inventory Item</DialogTitle>
                    <DialogDescription>Add a new item to the inventory</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="item-name">Item Name</Label>
                      <Input id="item-name" placeholder="Enter item name" />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Stationery">Stationery</SelectItem>
                          <SelectItem value="IT Equipment">IT Equipment</SelectItem>
                          <SelectItem value="Electronics">Electronics</SelectItem>
                          <SelectItem value="Maintenance">Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" type="number" placeholder="Enter quantity" />
                    </div>
                    <div>
                      <Label htmlFor="min-stock">Minimum Stock</Label>
                      <Input id="min-stock" type="number" placeholder="Enter minimum stock level" />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="Enter storage location" />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Add Item</Button>
                      <Button variant="outline" onClick={() => setIsAddInventoryOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Item</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Quantity</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Min Stock</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Location</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventory.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{item.name}</p>
                              <p className="text-sm text-gray-600">Supplier: {item.supplier}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{item.category}</td>
                          <td className="py-4 px-4 font-medium">
                            {item.quantity} {item.unit}
                          </td>
                          <td className="py-4 px-4 text-gray-600">
                            {item.minStock} {item.unit}
                          </td>
                          <td className="py-4 px-4 text-gray-600">{item.location}</td>
                          <td className="py-4 px-4">
                            <Badge
                              className={`${getStatusBadgeColor(item.status)} flex items-center gap-1 w-fit text-xs`}
                            >
                              {getStatusIcon(item.status)}
                              {item.status.replace("-", " ").charAt(0).toUpperCase() + item.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
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

          {/* Staff Records Tab */}
          <TabsContent value="staff" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Staff Records</CardTitle>
                <CardDescription>Manage employee information and records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Employee</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Department</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Position</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Join Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Salary</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staff.map((employee) => (
                        <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{employee.name}</p>
                              <p className="text-sm text-gray-600">{employee.employeeId}</p>
                              <p className="text-sm text-gray-600">{employee.contact}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{employee.department}</td>
                          <td className="py-4 px-4 text-gray-600">{employee.position}</td>
                          <td className="py-4 px-4 text-gray-600">{employee.joinDate}</td>
                          <td className="py-4 px-4 font-medium">{formatCurrency(employee.salary)}</td>
                          <td className="py-4 px-4">
                            <Badge
                              className={`${getStatusBadgeColor(employee.status)} flex items-center gap-1 w-fit text-xs`}
                            >
                              {getStatusIcon(employee.status)}
                              {employee.status.replace("-", " ").charAt(0).toUpperCase() + employee.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
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

          {/* Operations Tab */}
          <TabsContent value="operations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Operations</CardTitle>
                  <CardDescription>Manage system-wide operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Settings className="h-4 w-4 mr-2" />
                      System Configuration
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Archive className="h-4 w-4 mr-2" />
                      Data Backup
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Export Reports
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Users className="h-4 w-4 mr-2" />
                      User Management
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used administrative tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Reports
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Package className="h-4 w-4 mr-2" />
                      Stock Alerts
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      System Alerts
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Maintenance Tasks
                    </Button>
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
