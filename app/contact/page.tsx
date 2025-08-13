import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, GraduationCap } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "Toll-free: 1-800-DIPLOMA"],
    hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@diplomaacademy.edu", "admissions@diplomaacademy.edu"],
    hours: "Response within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Education Street", "Academic City, AC 12345", "United States"],
    hours: "Campus tours available daily",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    hours: "Extended hours during enrollment periods",
  },
]

const departments = [
  { name: "General Information", email: "info@diplomaacademy.edu" },
  { name: "Admissions", email: "admissions@diplomaacademy.edu" },
  { name: "Academic Affairs", email: "academic@diplomaacademy.edu" },
  { name: "Student Services", email: "students@diplomaacademy.edu" },
  { name: "Financial Aid", email: "financial@diplomaacademy.edu" },
  { name: "Career Services", email: "careers@diplomaacademy.edu" },
  { name: "IT Support", email: "support@diplomaacademy.edu" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Get in touch with our team for admissions, academic support, or any questions about our programs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-muted-foreground/80 pt-2">{info.hours}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept, index) => (
                          <SelectItem key={index} value={dept.name.toLowerCase().replace(/\s+/g, "-")}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Enter the subject of your inquiry" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-primary" />
                      Visit Our Campus
                    </CardTitle>
                    <CardDescription>Located in the heart of Academic City</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">123 Education Street, Academic City, AC 12345</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Free parking available on campus</p>
                      <p>• Accessible by public transportation</p>
                      <p>• Campus tours available Monday-Saturday</p>
                      <p>• Visitor parking in Lot A</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Quick Contacts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Admissions Office",
                        phone: "+1 (555) 123-4581",
                        email: "admissions@diplomaacademy.edu",
                      },
                      { title: "Student Services", phone: "+1 (555) 123-4584", email: "students@diplomaacademy.edu" },
                      { title: "Financial Aid", phone: "+1 (555) 123-4582", email: "financial@diplomaacademy.edu" },
                    ].map((contact, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium">{contact.title}</h4>
                        <p className="text-sm text-muted-foreground">{contact.phone}</p>
                        <p className="text-sm text-muted-foreground">{contact.email}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Department Contacts</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect directly with specific departments for specialized assistance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {dept.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{dept.email}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Contact Department
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Emergency Contact</h2>
              <p className="text-primary-foreground/90 mb-6">
                For campus emergencies or urgent matters outside office hours
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="text-lg font-medium">Campus Security: +1 (555) 123-HELP</span>
                </div>
                <div className="text-primary-foreground/80">Available 24/7</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
