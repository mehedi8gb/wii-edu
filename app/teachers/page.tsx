import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Award, BookOpen } from "lucide-react"

const teachers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Head of Computer Science",
    department: "Computer Science",
    image: "/professional-woman-teacher.png",
    email: "s.johnson@diplomaacademy.edu",
    phone: "+1 (555) 123-4567",
    experience: "15+ Years",
    education: "Ph.D. Computer Science, MIT",
    specialization: "Artificial Intelligence, Machine Learning",
    bio: "Dr. Johnson is a renowned expert in AI and machine learning with extensive industry experience at leading tech companies. She has published over 50 research papers and leads several innovative projects.",
    achievements: ["Best Faculty Award 2023", "AI Research Excellence", "Industry Partnership Leader"],
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Senior Business Faculty",
    department: "Business Administration",
    image: "/professional-man-teacher.png",
    email: "m.chen@diplomaacademy.edu",
    phone: "+1 (555) 123-4568",
    experience: "12+ Years",
    education: "MBA Harvard Business School",
    specialization: "Strategic Management, Entrepreneurship",
    bio: "Prof. Chen brings real-world business expertise having founded two successful startups. He specializes in strategic management and helps students develop entrepreneurial mindsets.",
    achievements: ["Entrepreneur of the Year 2022", "Outstanding Teaching Award", "Business Innovation Leader"],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Healthcare Department Head",
    department: "Healthcare",
    image: "/professional-woman-doctor.png",
    email: "e.rodriguez@diplomaacademy.edu",
    phone: "+1 (555) 123-4570",
    experience: "18+ Years",
    education: "M.D. Johns Hopkins, MPH Harvard",
    specialization: "Public Health, Healthcare Administration",
    bio: "Dr. Rodriguez combines clinical experience with healthcare administration expertise. She has worked in major hospitals and healthcare systems, bringing practical insights to the classroom.",
    achievements: ["Healthcare Excellence Award", "Community Service Recognition", "Medical Education Leader"],
  },
  {
    id: 4,
    name: "Prof. David Kim",
    title: "Engineering Faculty Lead",
    department: "Engineering",
    image: "/professional-engineer.png",
    email: "d.kim@diplomaacademy.edu",
    phone: "+1 (555) 123-4569",
    experience: "20+ Years",
    education: "Ph.D. Mechanical Engineering, Stanford",
    specialization: "Sustainable Engineering, Design Innovation",
    bio: "Prof. Kim is a leading expert in sustainable engineering practices with numerous patents in green technology. He leads industry partnerships and research initiatives.",
    achievements: ["Engineering Innovation Award", "Sustainability Champion", "Patent Holder (15+ Patents)"],
  },
  {
    id: 5,
    name: "Ms. Lisa Thompson",
    title: "Arts & Design Coordinator",
    department: "Arts & Design",
    image: "/creative-arts-teacher.png",
    email: "l.thompson@diplomaacademy.edu",
    phone: "+1 (555) 123-4571",
    experience: "10+ Years",
    education: "MFA Visual Arts, RISD",
    specialization: "Digital Design, Visual Communication",
    bio: "Ms. Thompson is an accomplished designer with work featured in major publications. She bridges traditional art techniques with modern digital design practices.",
    achievements: ["Design Excellence Award", "Student Favorite Teacher", "Creative Industry Recognition"],
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    title: "Education Department Head",
    department: "Education",
    image: "/education-professor.png",
    email: "j.wilson@diplomaacademy.edu",
    phone: "+1 (555) 123-4572",
    experience: "16+ Years",
    education: "Ed.D. Educational Leadership, Columbia",
    specialization: "Curriculum Development, Educational Psychology",
    bio: "Dr. Wilson has extensive experience in educational leadership and curriculum design. He has worked with school districts nationwide to improve educational outcomes.",
    achievements: ["Educational Leadership Award", "Curriculum Innovation Recognition", "Teacher Training Expert"],
  },
  {
    id: 7,
    name: "Prof. Maria Garcia",
    title: "Computer Science Faculty",
    department: "Computer Science",
    image: "/tech-professor-woman.png",
    email: "m.garcia@diplomaacademy.edu",
    phone: "+1 (555) 123-4573",
    experience: "8+ Years",
    education: "M.S. Software Engineering, Carnegie Mellon",
    specialization: "Web Development, Database Systems",
    bio: "Prof. Garcia specializes in modern web technologies and database systems. She has developed several popular online courses and maintains active industry connections.",
    achievements: ["Rising Star Faculty", "Technology Innovation Award", "Student Mentorship Excellence"],
  },
  {
    id: 8,
    name: "Dr. Robert Taylor",
    title: "Business Faculty",
    department: "Business Administration",
    image: "/business-professor.png",
    email: "r.taylor@diplomaacademy.edu",
    phone: "+1 (555) 123-4574",
    experience: "14+ Years",
    education: "Ph.D. Finance, Wharton",
    specialization: "Financial Management, Investment Analysis",
    bio: "Dr. Taylor brings Wall Street experience to the classroom, having worked as an investment analyst before transitioning to academia. He makes complex financial concepts accessible to students.",
    achievements: ["Finance Faculty Excellence", "Industry Connection Award", "Research Publication Leader"],
  },
]

const departments = [
  "All",
  "Computer Science",
  "Business Administration",
  "Healthcare",
  "Engineering",
  "Arts & Design",
  "Education",
]

export default function TeachersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Faculty</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Meet our distinguished faculty members who bring expertise, passion, and real-world experience to guide
                your educational journey
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Expert Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Hold Advanced Degrees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12:1</div>
                <div className="text-muted-foreground">Student-Faculty Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years Avg Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Directory */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-4xl grid-cols-3 lg:grid-cols-7">
                  {departments.map((dept) => (
                    <TabsTrigger key={dept} value={dept} className="text-xs lg:text-sm">
                      {dept === "Business Administration" ? "Business" : dept === "Arts & Design" ? "Arts" : dept}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {departments.map((department) => (
                <TabsContent key={department} value={department}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teachers
                      .filter((teacher) => department === "All" || teacher.department === department)
                      .map((teacher) => (
                        <Card key={teacher.id} className="group hover:shadow-xl transition-all duration-300">
                          <CardHeader className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                              <img
                                src={teacher.image || "/placeholder.svg"}
                                alt={teacher.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <CardTitle className="text-xl">{teacher.name}</CardTitle>
                            <CardDescription className="text-primary font-medium">{teacher.title}</CardDescription>
                            <Badge variant="secondary" className="w-fit mx-auto">
                              {teacher.department}
                            </Badge>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-accent" />
                                <span>{teacher.experience}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-accent" />
                                <span className="text-xs">{teacher.education}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-3">{teacher.bio}</p>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4 text-accent" />
                                <span className="text-xs">{teacher.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-accent" />
                                <span className="text-xs">{teacher.phone}</span>
                              </div>
                            </div>
                            <div className="pt-2">
                              <h4 className="font-medium text-sm mb-2">Specialization:</h4>
                              <p className="text-xs text-muted-foreground">{teacher.specialization}</p>
                            </div>
                            <div className="pt-2">
                              <h4 className="font-medium text-sm mb-2">Recent Achievements:</h4>
                              <ul className="space-y-1">
                                {teacher.achievements.slice(0, 2).map((achievement, index) => (
                                  <li key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Learn from the Best</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join our community of learners and benefit from personalized guidance from industry experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="/admissions">Apply Now</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <a href="/contact">Contact Faculty</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
