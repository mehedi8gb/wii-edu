import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const staff = [
  {
    id: 1,
    name: "Jennifer Adams",
    title: "Registrar",
    department: "Academic Affairs",
    image: "/staff-registrar.png",
    email: "j.adams@diplomaacademy.edu",
    phone: "+1 (555) 123-4580",
    office: "Administration Building, Room 101",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    responsibilities: "Student records, enrollment, transcripts, graduation requirements",
  },
  {
    id: 2,
    name: "Mark Stevens",
    title: "Director of Admissions",
    department: "Admissions",
    image: "/staff-admissions.png",
    email: "m.stevens@diplomaacademy.edu",
    phone: "+1 (555) 123-4581",
    office: "Admissions Office, Room 205",
    hours: "Mon-Fri: 8:30 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
    responsibilities: "Application processing, student recruitment, admission decisions, orientation programs",
  },
  {
    id: 3,
    name: "Patricia Wong",
    title: "Financial Aid Coordinator",
    department: "Financial Services",
    image: "/staff-financial-aid.png",
    email: "p.wong@diplomaacademy.edu",
    phone: "+1 (555) 123-4582",
    office: "Financial Aid Office, Room 150",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM",
    responsibilities: "Student financial aid, scholarships, payment plans, financial counseling",
  },
  {
    id: 4,
    name: "Carlos Martinez",
    title: "IT Support Manager",
    department: "Information Technology",
    image: "/staff-it-manager.png",
    email: "c.martinez@diplomaacademy.edu",
    phone: "+1 (555) 123-4583",
    office: "IT Department, Room 301",
    hours: "Mon-Fri: 7:30 AM - 6:00 PM",
    responsibilities: "Network administration, technical support, system maintenance, software licensing",
  },
  {
    id: 5,
    name: "Dr. Angela Foster",
    title: "Student Services Director",
    department: "Student Affairs",
    image: "/staff-student-services.png",
    email: "a.foster@diplomaacademy.edu",
    phone: "+1 (555) 123-4584",
    office: "Student Services, Room 220",
    hours: "Mon-Fri: 8:00 AM - 5:30 PM",
    responsibilities: "Student counseling, career services, student activities, wellness programs",
  },
  {
    id: 6,
    name: "Robert Chen",
    title: "Library Director",
    department: "Academic Support",
    image: "/staff-librarian.png",
    email: "r.chen@diplomaacademy.edu",
    phone: "+1 (555) 123-4585",
    office: "Main Library, Room 100",
    hours: "Mon-Thu: 7:00 AM - 9:00 PM, Fri: 7:00 AM - 6:00 PM, Sat-Sun: 10:00 AM - 6:00 PM",
    responsibilities: "Library operations, research assistance, digital resources, study spaces",
  },
  {
    id: 7,
    name: "Michelle Davis",
    title: "Human Resources Manager",
    department: "Administration",
    image: "/staff-hr-manager.png",
    email: "m.davis@diplomaacademy.edu",
    phone: "+1 (555) 123-4586",
    office: "HR Department, Room 180",
    hours: "Mon-Fri: 8:30 AM - 5:00 PM",
    responsibilities: "Employee relations, recruitment, benefits administration, policy development",
  },
  {
    id: 8,
    name: "Thomas Johnson",
    title: "Facilities Manager",
    department: "Operations",
    image: "/staff-facilities.png",
    email: "t.johnson@diplomaacademy.edu",
    phone: "+1 (555) 123-4587",
    office: "Facilities Office, Room 050",
    hours: "Mon-Fri: 7:00 AM - 4:00 PM",
    responsibilities: "Building maintenance, security, campus safety, event setup",
  },
  {
    id: 9,
    name: "Lisa Park",
    title: "Marketing Coordinator",
    department: "Communications",
    image: "/staff-marketing.png",
    email: "l.park@diplomaacademy.edu",
    phone: "+1 (555) 123-4588",
    office: "Marketing Office, Room 250",
    hours: "Mon-Fri: 9:00 AM - 5:30 PM",
    responsibilities: "Social media, website content, promotional materials, event marketing",
  },
  {
    id: 10,
    name: "Kevin Brown",
    title: "Accounting Manager",
    department: "Financial Services",
    image: "/staff-accounting.png",
    email: "k.brown@diplomaacademy.edu",
    phone: "+1 (555) 123-4589",
    office: "Accounting Office, Room 160",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    responsibilities: "Budget management, financial reporting, accounts payable/receivable, payroll",
  },
]

const departments = [
  "All",
  "Academic Affairs",
  "Admissions",
  "Financial Services",
  "Information Technology",
  "Student Affairs",
  "Academic Support",
  "Administration",
  "Operations",
  "Communications",
]

export default function StaffPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Staff</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Meet the dedicated professionals who support your educational journey and ensure smooth operations
                across all departments
              </p>
            </div>
          </div>
        </section>

        {/* Staff Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">75+</div>
                <div className="text-muted-foreground">Support Staff</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-muted-foreground">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Student Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Directory */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-6xl grid-cols-2 lg:grid-cols-5">
                  {departments.slice(0, 5).map((dept) => (
                    <TabsTrigger key={dept} value={dept} className="text-xs lg:text-sm">
                      {dept === "Academic Affairs"
                        ? "Academic"
                        : dept === "Financial Services"
                          ? "Financial"
                          : dept === "Information Technology"
                            ? "IT"
                            : dept === "Student Affairs"
                              ? "Student"
                              : dept}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-6xl grid-cols-2 lg:grid-cols-5">
                  {departments.slice(5).map((dept) => (
                    <TabsTrigger key={dept} value={dept} className="text-xs lg:text-sm">
                      {dept === "Academic Support" ? "Support" : dept === "Communications" ? "Marketing" : dept}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {departments.map((department) => (
                <TabsContent key={department} value={department}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staff
                      .filter((member) => department === "All" || member.department === department)
                      .map((member) => (
                        <Card key={member.id} className="group hover:shadow-xl transition-all duration-300">
                          <CardHeader className="text-center">
                            <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden">
                              <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <CardTitle className="text-xl">{member.name}</CardTitle>
                            <CardDescription className="text-primary font-medium">{member.title}</CardDescription>
                            <Badge variant="secondary" className="w-fit mx-auto">
                              {member.department}
                            </Badge>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-3 text-sm">
                              <div className="flex items-start gap-2">
                                <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-xs break-all">{member.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                                <span className="text-xs">{member.phone}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-xs">{member.office}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-xs">{member.hours}</span>
                              </div>
                            </div>
                            <div className="pt-2">
                              <h4 className="font-medium text-sm mb-2">Responsibilities:</h4>
                              <p className="text-xs text-muted-foreground leading-relaxed">{member.responsibilities}</p>
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

        {/* Contact Information */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Need Assistance?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our staff is here to help you with any questions or concerns you may have
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">General Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Main Reception</p>
                  <p className="text-sm font-medium">+1 (555) 123-4567</p>
                  <p className="text-xs text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Student Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Academic Support</p>
                  <p className="text-sm font-medium">+1 (555) 123-4584</p>
                  <p className="text-xs text-muted-foreground">Mon-Fri: 8:00 AM - 5:30 PM</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">IT Help Desk</p>
                  <p className="text-sm font-medium">+1 (555) 123-4583</p>
                  <p className="text-xs text-muted-foreground">Mon-Fri: 7:30 AM - 6:00 PM</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Emergency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Campus Security</p>
                  <p className="text-sm font-medium">+1 (555) 123-HELP</p>
                  <p className="text-xs text-muted-foreground">24/7 Available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
