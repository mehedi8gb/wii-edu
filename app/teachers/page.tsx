'use client'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, X } from "lucide-react"
import { useState } from "react"
import { Mail, Phone, Award, BookOpen } from "lucide-react"
import {teachers} from "@/data/teachers";

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
  const [search, setSearch] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Teacher</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Meet our distinguished faculty members who bring expertise, passion, and real-world experience to guide
                your educational journey
              </p>
            </div>
          </div>
        </section>

        {/* Teacher Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Expert Teacher</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Hold Advanced Degrees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12:1</div>
                <div className="text-muted-foreground">Student-Teacher Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years Avg Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Teacher Directory */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
                {/* Desktop: Tabs and Search Icon/Bar */}
                <div className="hidden md:flex w-full items-center">
                  <div className="flex-1 flex justify-center">
                    <TabsList className="grid w-max grid-flow-col gap-4">
                      {departments.map((dept) => (
                        <TabsTrigger key={dept} value={dept} className="text-xs lg:text-sm">
                          {dept === "Business Administration" ? "Business" : dept === "Arts & Design" ? "Arts" : dept}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  <div className="flex items-center justify-end" style={{minWidth: 0}}>
                    {isSearchVisible ? (
                      <div className="w-full max-w-xs flex items-center bg-background rounded-full shadow-sm border border-border px-4 py-2 transition-all duration-300 animate-in fade-in-0 slide-in-from-left-4">
                        <Search className="w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Search..."
                          value={search}
                          onChange={e => setSearch(e.target.value)}
                          className="w-full bg-transparent outline-none ml-3 text-base text-foreground placeholder:text-muted-foreground"
                          autoFocus
                        />
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full"
                          onClick={() => setIsSearchVisible(false)}>
                          <X className="h-5 w-5" />
                        </Button>
                      </div>
                    ) : (
                      <Button variant="ghost" size="icon" className="rounded-full"
                        onClick={() => setIsSearchVisible(true)}>
                        <Search className="h-5 w-5" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Mobile: Tabs and Search Bar are separate */}
                <div className="md:hidden">
                  <div className="w-full overflow-x-auto pb-4">
                    <TabsList className="grid w-max grid-flow-col gap-4">
                      {departments.map((dept) => (
                        <TabsTrigger key={dept} value={dept} className="text-xs lg:text-sm">
                          {dept === "Business Administration" ? "Business" : dept === "Arts & Design" ? "Arts" : dept}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  <div className="w-full flex items-center bg-background rounded-full shadow-sm border border-border px-4 py-2 mt-4">
                    <Search className="w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search teachers..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      className="w-full bg-transparent outline-none ml-3 text-base text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              </div>

              {departments.map((department) => {
                const filtered = teachers
                  .filter((teacher) => department === "All" || teacher.department === department)
                  .filter((teacher) =>
                    teacher.name.toLowerCase().includes(search.toLowerCase()) ||
                    teacher.title.toLowerCase().includes(search.toLowerCase()) ||
                    teacher.department.toLowerCase().includes(search.toLowerCase()) ||
                    (teacher.specialization && teacher.specialization.toLowerCase().includes(search.toLowerCase()))
                  );
                return (
                  <TabsContent key={department} value={department}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filtered.length > 0 ? filtered.map((teacher) => (
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
                      )) : (
                        <div className="col-span-full text-center text-muted-foreground py-16 text-lg">
                          No teachers found. Try adjusting your search or filters.
                        </div>
                      )}
                    </div>
                  </TabsContent>
                );
              })}
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
                  <a href="/contact">Contact Teacher</a>
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
