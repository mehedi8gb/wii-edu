"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, ImageIcon, CheckCircle } from "lucide-react"

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nid: "",
    address: "",
    birthCertificate: "",
    department: "",
    references: "",
    previousAcademic: "",
    bloodGroup: "",
  })

  const [files, setFiles] = useState({
    certificates: [] as File[],
    picture: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const departments = [
    "Computer Science & IT",
    "Business Administration",
    "Engineering Technology",
    "Healthcare & Medical",
    "Arts & Design",
    "Education & Teaching",
  ]

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (type: "certificates" | "picture", uploadedFiles: FileList | null) => {
    if (!uploadedFiles) return

    if (type === "certificates") {
      setFiles((prev) => ({
        ...prev,
        certificates: [...prev.certificates, ...Array.from(uploadedFiles)],
      }))
    } else {
      setFiles((prev) => ({ ...prev, picture: uploadedFiles[0] }))
    }
  }

  const removeFile = (type: "certificates" | "picture", index?: number) => {
    if (type === "certificates" && index !== undefined) {
      setFiles((prev) => ({
        ...prev,
        certificates: prev.certificates.filter((_, i) => i !== index),
      }))
    } else if (type === "picture") {
      setFiles((prev) => ({ ...prev, picture: null }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-12 pb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for your application. We will review your submission and contact you within 3-5 business days.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Application ID:</strong> ADM-{Date.now().toString().slice(-6)}
                </p>
                <p className="text-sm text-blue-800 mt-1">Please save this ID for future reference.</p>
              </div>
              <Button onClick={() => window.location.reload()} className="bg-navy-600 hover:bg-navy-700">
                Submit Another Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-navy-800 mb-4">Student Admission Application</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our prestigious Government-Certified Diploma Academy. Fill out the form below to begin your academic
            journey with us.
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="bg-navy-600 text-white">
            <CardTitle className="text-2xl">Admission Form</CardTitle>
            <CardDescription className="text-blue-100">Please fill out all required fields accurately</CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="nid" className="text-sm font-medium text-gray-700">
                      National ID Number *
                    </Label>
                    <Input
                      id="nid"
                      type="text"
                      required
                      value={formData.nid}
                      onChange={(e) => handleInputChange("nid", e.target.value)}
                      className="mt-1"
                      placeholder="Enter your NID number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="birthCertificate" className="text-sm font-medium text-gray-700">
                      Birth Certificate Number *
                    </Label>
                    <Input
                      id="birthCertificate"
                      type="text"
                      required
                      value={formData.birthCertificate}
                      onChange={(e) => handleInputChange("birthCertificate", e.target.value)}
                      className="mt-1"
                      placeholder="Enter birth certificate number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bloodGroup" className="text-sm font-medium text-gray-700">
                      Blood Group *
                    </Label>
                    <Select
                      value={formData.bloodGroup}
                      onValueChange={(value) => handleInputChange("bloodGroup", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select blood group" />
                      </SelectTrigger>
                      <SelectContent>
                        {bloodGroups.map((group) => (
                          <SelectItem key={group} value={group}>
                            {group}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Complete Address *
                  </Label>
                  <Textarea
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="mt-1"
                    rows={3}
                    placeholder="Enter your complete address including city, state, and postal code"
                  />
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Academic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                      Department *
                    </Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) => handleInputChange("department", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your preferred department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="previousAcademic" className="text-sm font-medium text-gray-700">
                    Previous Academic Background *
                  </Label>
                  <Textarea
                    id="previousAcademic"
                    required
                    value={formData.previousAcademic}
                    onChange={(e) => handleInputChange("previousAcademic", e.target.value)}
                    className="mt-1"
                    rows={4}
                    placeholder="Please provide details about your previous education, including school/college names, years attended, grades/GPA, and any relevant achievements"
                  />
                </div>

                <div className="mt-6">
                  <Label htmlFor="references" className="text-sm font-medium text-gray-700">
                    References
                  </Label>
                  <Textarea
                    id="references"
                    value={formData.references}
                    onChange={(e) => handleInputChange("references", e.target.value)}
                    className="mt-1"
                    rows={3}
                    placeholder="Please provide contact information for 2-3 references (teachers, employers, or community leaders)"
                  />
                </div>
              </div>

              {/* File Uploads */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Document Uploads
                </h3>

                {/* Profile Picture */}
                <div className="mb-6">
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Profile Picture *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload("picture", e.target.files)}
                      className="hidden"
                      id="picture-upload"
                    />
                    <label htmlFor="picture-upload" className="cursor-pointer">
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload your profile picture</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                    </label>
                    {files.picture && (
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-green-800">{files.picture.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile("picture")}
                            className="text-red-600 hover:text-red-800"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Academic Certificates */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Academic Certificates *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload("certificates", e.target.files)}
                      className="hidden"
                      id="certificates-upload"
                    />
                    <label htmlFor="certificates-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload your certificates</p>
                      <p className="text-xs text-gray-500 mt-1">PDF, PNG, JPG up to 10MB each</p>
                    </label>
                  </div>

                  {files.certificates.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.certificates.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-blue-800">{file.name}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile("certificates", index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="px-8 py-2 bg-transparent"
                    onClick={() => window.history.back()}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="px-8 py-2 bg-navy-600 hover:bg-navy-700">
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
