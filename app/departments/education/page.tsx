import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, BookOpen, Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">📚</div>
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">Education</h1>
                  <p className="text-xl text-primary-foreground/90">
                    Preparing the next generation of educators and leaders
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">180+</div>
                  <div className="text-sm text-primary-foreground/80">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-primary-foreground/80">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">9</div>
                  <div className="text-sm text-primary-foreground/80">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">94%</div>
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
                    Our Education diploma program prepares future educators with comprehensive knowledge of teaching
                    methodologies, educational psychology, and curriculum development. Students gain practical
                    experience through classroom observations and student teaching placements.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    The program emphasizes inclusive education, technology integration, and evidence-based teaching
                    practices to prepare graduates for modern educational environments.
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
                          Elementary Teacher
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Teaching Assistant
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Educational Coordinator
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Curriculum Developer
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Education Consultant
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
                          Teaching Methods
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Classroom Management
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Curriculum Planning
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Student Assessment
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Educational Technology
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
                      <span className="font-medium">2 Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mode:</span>
                      <span className="font-medium">Full-time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Intake:</span>
                      <span className="font-medium">Jan, Sep</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fee:</span>
                      <span className="font-medium">$8,500/year</span>
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
                      <span className="text-sm">education@wii.edu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="text-sm">+880 123-4572</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm">Building F, Floor 1</span>
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
                { name: "Educational Psychology", code: "ED101", credits: 3 },
                { name: "Teaching Methods", code: "ED201", credits: 4 },
                { name: "Curriculum Development", code: "ED301", credits: 4 },
                { name: "Classroom Management", code: "ED302", credits: 3 },
                { name: "Educational Technology", code: "ED401", credits: 3 },
                { name: "Special Needs Education", code: "ED402", credits: 3 },
                { name: "Student Assessment", code: "ED501", credits: 3 },
                { name: "Teaching Practicum I", code: "ED601", credits: 4 },
                { name: "Teaching Practicum II", code: "ED602", credits: 4 },
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
