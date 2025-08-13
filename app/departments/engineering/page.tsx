import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, BookOpen, Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function EngineeringPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">⚙️</div>
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">Engineering</h1>
                  <p className="text-xl text-primary-foreground/90">
                    Innovative engineering solutions for tomorrow's challenges
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">290+</div>
                  <div className="text-sm text-primary-foreground/80">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-primary-foreground/80">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-primary-foreground/80">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">96%</div>
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
                    Our Engineering diploma program provides comprehensive training in mechanical, electrical, and civil
                    engineering principles. Students gain practical experience through laboratory work, design projects,
                    and industry partnerships.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    The program emphasizes problem-solving, innovation, and sustainable engineering practices. Graduates
                    are prepared for careers in manufacturing, construction, energy, and technology sectors.
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
                          Design Engineer
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Project Engineer
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Quality Engineer
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Manufacturing Engineer
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Technical Consultant
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
                          Technical Design
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          CAD Software
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Project Management
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Problem Solving
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Quality Control
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
                      <span className="font-medium">3 Years</span>
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
                      <span className="font-medium">$14,000/year</span>
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
                      <span className="text-sm">engineering@diplomaacademy.edu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="text-sm">+1 (555) 123-4569</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm">Building C, Floor 1</span>
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
                { name: "Engineering Mathematics", code: "ENG101", credits: 4 },
                { name: "Engineering Physics", code: "ENG102", credits: 4 },
                { name: "Technical Drawing", code: "ENG201", credits: 3 },
                { name: "Materials Science", code: "ENG202", credits: 3 },
                { name: "Thermodynamics", code: "ENG301", credits: 4 },
                { name: "Fluid Mechanics", code: "ENG302", credits: 4 },
                { name: "Electrical Circuits", code: "ENG303", credits: 3 },
                { name: "Mechanical Design", code: "ENG401", credits: 4 },
                { name: "Control Systems", code: "ENG402", credits: 3 },
                { name: "Manufacturing Processes", code: "ENG403", credits: 3 },
                { name: "Project Management", code: "ENG501", credits: 2 },
                { name: "Engineering Ethics", code: "ENG502", credits: 2 },
                { name: "CAD/CAM Systems", code: "ENG503", credits: 3 },
                { name: "Quality Control", code: "ENG504", credits: 2 },
                { name: "Capstone Design Project", code: "ENG601", credits: 6 },
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
