import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Calendar, Users, BookOpen, Heart } from "lucide-react"

const activities = [
  {
    id: 1,
    name: "Student Government Association",
    category: "Leadership",
    description: "Represent student interests and organize campus-wide initiatives",
    members: "45+ Active Members",
    meetingTime: "Every Tuesday, 6:00 PM",
    contact: "sga@diplomaacademy.edu",
    image: "/student-government.png",
  },
  {
    id: 2,
    name: "Tech Innovation Club",
    category: "Academic",
    description: "Explore cutting-edge technology and work on innovative projects",
    members: "80+ Members",
    meetingTime: "Wednesdays, 7:00 PM",
    contact: "techclub@diplomaacademy.edu",
    image: "/tech-club.png",
  },
  {
    id: 3,
    name: "Business Entrepreneurs Society",
    category: "Professional",
    description: "Network with industry professionals and develop business skills",
    members: "60+ Members",
    meetingTime: "Thursdays, 6:30 PM",
    contact: "business@diplomaacademy.edu",
    image: "/business-club.png",
  },
  {
    id: 4,
    name: "Healthcare Heroes",
    category: "Service",
    description: "Community health initiatives and medical volunteer work",
    members: "35+ Members",
    meetingTime: "Fridays, 5:00 PM",
    contact: "healthcare@diplomaacademy.edu",
    image: "/healthcare-club.png",
  },
  {
    id: 5,
    name: "Creative Arts Collective",
    category: "Arts",
    description: "Showcase artistic talents through exhibitions and performances",
    members: "50+ Members",
    meetingTime: "Saturdays, 2:00 PM",
    contact: "arts@diplomaacademy.edu",
    image: "/arts-club.png",
  },
  {
    id: 6,
    name: "International Student Association",
    category: "Cultural",
    description: "Celebrate diversity and support international students",
    members: "70+ Members",
    meetingTime: "Sundays, 4:00 PM",
    contact: "international@diplomaacademy.edu",
    image: "/international-club.png",
  },
]

const achievements = [
  {
    title: "National Programming Championship",
    winner: "Computer Science Team",
    date: "December 2024",
    description: "First place in the National Collegiate Programming Contest",
    award: "Gold Medal",
  },
  {
    title: "Business Plan Competition",
    winner: "Sarah Kim & Team",
    date: "November 2024",
    description: "Top 3 finish in Regional Startup Competition with innovative healthcare app",
    award: "Bronze Medal",
  },
  {
    title: "Community Service Award",
    winner: "Healthcare Heroes Club",
    date: "October 2024",
    description: "Outstanding community service with 500+ volunteer hours",
    award: "Service Excellence",
  },
  {
    title: "Art Exhibition Recognition",
    winner: "Creative Arts Collective",
    date: "September 2024",
    description: "Featured in City Art Gallery with student works",
    award: "Artistic Achievement",
  },
]

const resources = [
  {
    title: "Student Portal",
    description: "Access grades, schedules, and academic records",
    link: "/portal",
    icon: BookOpen,
  },
  {
    title: "Career Services",
    description: "Job placement assistance and career counseling",
    link: "/career-services",
    icon: Users,
  },
  {
    title: "Library Resources",
    description: "Digital and physical library access",
    link: "/library",
    icon: BookOpen,
  },
  {
    title: "Student Support",
    description: "Counseling and wellness services",
    link: "/support",
    icon: Heart,
  },
]

export default function StudentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Student Life</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Discover a vibrant campus community where learning extends beyond the classroom through activities,
                achievements, and lifelong connections
              </p>
            </div>
          </div>
        </section>

        {/* Student Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Student Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Annual Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Activities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Student Organizations</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join one of our many student organizations and make lasting connections while developing leadership
                skills
              </p>
            </div>

            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-4xl grid-cols-3 lg:grid-cols-7">
                  <TabsTrigger value="All">All</TabsTrigger>
                  <TabsTrigger value="Leadership">Leadership</TabsTrigger>
                  <TabsTrigger value="Academic">Academic</TabsTrigger>
                  <TabsTrigger value="Professional">Professional</TabsTrigger>
                  <TabsTrigger value="Service">Service</TabsTrigger>
                  <TabsTrigger value="Arts">Arts</TabsTrigger>
                  <TabsTrigger value="Cultural">Cultural</TabsTrigger>
                </TabsList>
              </div>

              {["All", "Leadership", "Academic", "Professional", "Service", "Arts", "Cultural"].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities
                      .filter((activity) => category === "All" || activity.category === category)
                      .map((activity) => (
                        <Card key={activity.id} className="group hover:shadow-xl transition-all duration-300">
                          <CardHeader>
                            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                              <img
                                src={activity.image || "/placeholder.svg"}
                                alt={activity.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary">{activity.category}</Badge>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                {activity.members}
                              </div>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {activity.name}
                            </CardTitle>
                            <CardDescription>{activity.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 text-accent" />
                              {activity.meetingTime}
                            </div>
                            <div className="text-sm text-muted-foreground">Contact: {activity.contact}</div>
                            <Button className="w-full mt-4">Join Organization</Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Student Achievements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Recent Achievements</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Celebrating our students' outstanding accomplishments and recognition
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-accent text-accent-foreground">{achievement.award}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {achievement.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">{achievement.winner}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Resources */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Student Resources</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access essential services and support systems designed to help you succeed
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <resource.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={resource.link}>Access Resource</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Become part of a vibrant student community where your potential can flourish
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/contact">Visit Campus</Link>
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
