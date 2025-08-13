import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, Target, Eye, Heart } from "lucide-react"

const leadership = [
  {
    name: "Dr. Margaret Thompson",
    title: "President & CEO",
    image: "/leadership-president.png",
    bio: "Dr. Thompson brings over 25 years of educational leadership experience, having previously served as Dean at prestigious institutions.",
    education: "Ph.D. Educational Administration, Harvard University",
  },
  {
    name: "Prof. William Davis",
    title: "Vice President of Academic Affairs",
    image: "/leadership-vp-academic.png",
    bio: "Prof. Davis oversees all academic programs and ensures the highest standards of educational excellence across departments.",
    education: "Ed.D. Curriculum & Instruction, Columbia University",
  },
  {
    name: "Ms. Catherine Lee",
    title: "Vice President of Student Services",
    image: "/leadership-vp-student.png",
    bio: "Ms. Lee is dedicated to student success and oversees all student support services, from admission to graduation.",
    education: "M.A. Student Affairs, University of Pennsylvania",
  },
  {
    name: "Dr. Richard Brown",
    title: "Vice President of Operations",
    image: "/leadership-vp-operations.png",
    bio: "Dr. Brown manages institutional operations, facilities, and strategic planning to support the academy's growth.",
    education: "MBA Operations Management, Wharton School",
  },
]

const accreditations = [
  {
    name: "Department of Education",
    description: "Fully accredited by the State Department of Education",
    year: "2018",
    status: "Active",
  },
  {
    name: "National Association of Career Colleges",
    description: "Member institution with full accreditation status",
    year: "2019",
    status: "Active",
  },
  {
    name: "ISO 9001:2015",
    description: "Quality management system certification",
    year: "2020",
    status: "Active",
  },
  {
    name: "Regional Accreditation Board",
    description: "Regional accreditation for diploma programs",
    year: "2021",
    status: "Active",
  },
]

const milestones = [
  { year: "2010", event: "Academy Founded", description: "Established with 3 programs and 50 students" },
  { year: "2012", event: "First Graduation", description: "Celebrated our first graduating class of 25 students" },
  { year: "2015", event: "Expansion", description: "Added new campus building and 5 additional programs" },
  { year: "2018", event: "Government Certification", description: "Received full government accreditation" },
  {
    year: "2020",
    event: "Digital Transformation",
    description: "Launched online learning platform and hybrid programs",
  },
  { year: "2022", event: "Industry Partnerships", description: "Established partnerships with 50+ leading companies" },
  {
    year: "2024",
    event: "Excellence Recognition",
    description: "Awarded 'Institution of Excellence' by Education Board",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Our Academy</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Discover our rich history, unwavering commitment to excellence, and the vision that drives us to prepare
                students for successful careers
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-serif">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide high-quality, government-certified diploma programs that prepare students for successful
                    careers in their chosen fields. We are committed to delivering practical, industry-relevant
                    education through innovative teaching methods, experienced faculty, and strong industry
                    partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-serif">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading institution for diploma education, recognized for academic excellence, innovation,
                    and graduate success. We envision a future where our graduates are highly sought after by employers
                    and contribute meaningfully to their communities and industries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We strive for the highest standards in education, facilities, and student support.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "We foster a supportive, inclusive environment where everyone can thrive and succeed.",
                },
                {
                  icon: Globe,
                  title: "Innovation",
                  description: "We embrace new technologies and teaching methods to enhance the learning experience.",
                },
                {
                  icon: Heart,
                  title: "Integrity",
                  description: "We operate with honesty, transparency, and ethical principles in all our interactions.",
                },
              ].map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our academy's growth and development
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {milestone.year}
                      </div>
                    </div>
                    <Card className="flex-1">
                      <CardHeader>
                        <CardTitle className="text-xl">{milestone.event}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced leaders guiding our institution's vision and growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{leader.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{leader.bio}</p>
                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground font-medium">{leader.education}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                Accreditations & Certifications
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our commitment to quality is recognized by leading educational and industry organizations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accreditations.map((accreditation, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{accreditation.name}</CardTitle>
                      <Badge className="bg-accent text-accent-foreground">{accreditation.status}</Badge>
                    </div>
                    <CardDescription>Since {accreditation.year}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{accreditation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">By the Numbers</h2>
              <p className="text-xl text-primary-foreground/90">Our impact in education and student success</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">15,000+</div>
                <div className="text-primary-foreground/80">Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-primary-foreground/80">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                <div className="text-primary-foreground/80">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">14</div>
                <div className="text-primary-foreground/80">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
