"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, BookOpen, Award, Calendar, Star, TrendingUp, Clock, CheckCircle } from "lucide-react"
import {departments} from "@/data/departments";
import {teachers} from "@/data/teachers";
import {useThemeStore} from "@/store/useThemeStore";

export default function HomePage() {
    const { mainGradient } = useThemeStore(); // Get dynamic theme gradient
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('https://cherryblossomacademy.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-13-at-22.21.07_a0a5e3ca-e1755103116659.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-accent text-accent-foreground text-sm px-4 py-2">
                Government Certified Institution
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Excellence in <span className="text-accent">Education</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Empowering students with government-certified diploma programs designed for career success and academic
                excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
                >
                  <Link href="/admissions">Start Your Journey</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 bg-transparent"
                >
                  <Link href="/departments">Explore Departments</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-muted-foreground">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Expert Teacher</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Diploma Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Job Placement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Departments */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Popular Departments</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our most sought-after programs designed to meet industry demands
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept) => (
                <Card
                  key={dept.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="text-4xl mb-4">{dept.icon}</div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{dept.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{dept.students}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{dept.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <Link href={dept.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Teachers */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Teacher</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn from industry experts and experienced educators
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher) => (
                <Card key={teacher.name} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={teacher.image || "/placeholder.svg"}
                        alt={teacher.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{teacher.name}</h3>
                    <p className="text-primary text-sm mb-2">{teacher.title}</p>
                    <p className="text-xs text-muted-foreground">{teacher.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/teachers">View All Teacher</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Student Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Student Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Celebrating our students' remarkable achievements and career milestones
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "National Programming Competition",
                  description: "Our Computer Science students won 1st place in the National Coding Championship",
                  date: "December 2024",
                  icon: Award,
                  category: "Academic Excellence",
                },
                {
                  title: "Healthcare Innovation Award",
                  description: "Healthcare students developed an innovative patient care system",
                  date: "November 2024",
                  icon: TrendingUp,
                  category: "Innovation",
                },
                {
                  title: "Business Plan Competition",
                  description: "Business Administration team secured top 3 in regional startup competition",
                  date: "October 2024",
                  icon: Star,
                  category: "Entrepreneurship",
                },
              ].map((achievement) => (
                <Card key={achievement.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                      <achievement.icon className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      {achievement.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News & Events */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Latest News & Events</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest happenings at our academy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Spring Semester Registration Open",
                  description: "Early bird registration for Spring 2025 semester is now open with special discounts",
                  date: "January 15, 2025",
                  type: "Registration",
                  urgent: true,
                },
                {
                  title: "Industry Partnership Announcement",
                  description: "New partnerships with leading tech companies for internship and job placement programs",
                  date: "January 10, 2025",
                  type: "Partnership",
                  urgent: false,
                },
                {
                  title: "Annual Science Fair 2025",
                  description: "Students showcase innovative projects and research in our annual science exhibition",
                  date: "February 20, 2025",
                  type: "Event",
                  urgent: false,
                },
              ].map((news) => (
                <Card key={news.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={news.urgent ? "default" : "secondary"} className="text-xs">
                        {news.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {news.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{news.description}</p>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
          <section className="py-20">
          <div className="container mx-auto px-4">
            <div className={`${mainGradient} text-white py-20 rounded-2xl p-8 md:p-12`}>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                  Join thousands of successful graduates who started their careers with us
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Explore Programs</h3>
                  <p className="text-primary-foreground/80 mb-4">Browse our comprehensive range of diploma programs</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    <Link href="/departments">View Departments</Link>
                  </Button>
                </div>
                <div className="text-center">
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Meet Teacher</h3>
                  <p className="text-primary-foreground/80 mb-4">Connect with our experienced teachers and mentors</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    <Link href="/teachers">Meet Teachers</Link>
                  </Button>
                </div>
                <div className="text-center">
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Apply Now</h3>
                  <p className="text-primary-foreground/80 mb-4">Start your application process today</p>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/admissions">Apply Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
