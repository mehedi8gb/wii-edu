import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, BookOpen, Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function HealthcarePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🏥</div>
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">Healthcare</h1>
                  <p className="text-xl text-primary-foreground/90">
                    Comprehensive medical training for healthcare professionals
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">320+</div>
                  <div className="text-sm text-primary-foreground/80">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2-3</div>
                  <div className="text-sm text-primary-foreground/80">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">14</div>
                  <div className="text-sm text-primary-foreground/80">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-sm text-primary-foreground/80">Job Placement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">Program Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    Our Healthcare diploma program provides comprehensive training for various healthcare professions.
                    Students learn medical terminology, patient care, healthcare administration, and clinical procedures
                    through theoretical study and hands-on practice.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    The program includes clinical rotations at partner hospitals and healthcare facilities, ensuring
                    graduates are well-prepared for the demands of modern healthcare environments.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-accent" />
                        Career Opportunities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Medical Assistant
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Healthcare Administrator
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Clinical Coordinator
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Patient Care Technician
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Health Information Specialist
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-accent" />
                        Key Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Patient Care
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Medical Terminology
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Healthcare Ethics
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Clinical Procedures
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Healthcare Management
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">2-3 Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mode:</span>
                      <span className="font-medium">Full-time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Intake:</span>
                      <span className="font-medium">Jan, May, Sep</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fee:</span>
                      <span className="font-medium">$13,000/year</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Department Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-accent" />
                      <span className="text-sm">healthcare@diplomaacademy.edu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="text-sm">+1 (555) 123-4570</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm">Building D, Floor 2</span>
                    </div>
                  </CardContent>
                </Card>

                <Button asChild className="w-full" size="lg">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Offered */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">Courses Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Human Anatomy & Physiology", code: "HC101", credits: 4 },
                { name: "Medical Terminology", code: "HC102", credits: 3 },
                { name: "Healthcare Ethics", code: "HC201", credits: 2 },
                { name: "Patient Care Fundamentals", code: "HC202", credits: 4 },
                { name: "Medical Office Administration", code: "HC301", credits: 3 },
                { name: "Clinical Procedures", code: "HC302", credits: 4 },
                { name: "Healthcare Management", code: "HC401", credits: 3 },
                { name: "Pharmacology Basics", code: "HC402", credits: 3 },
                { name: "Health Information Systems", code: "HC403", credits: 3 },
                { name: "Emergency Care", code: "HC501", credits: 3 },
                { name: "Mental Health Awareness", code: "HC502", credits: 2 },
                { name: "Healthcare Quality Assurance", code: "HC503", credits: 2 },
                { name: "Clinical Internship I", code: "HC601", credits: 4 },
                { name: "Clinical Internship II", code: "HC602", credits: 4 },
              ].map((course) => (
                <Card key={course.code} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <Badge variant="secondary">{course.credits} Credits</Badge>
                    </div>
                    <CardDescription>{course.code}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
