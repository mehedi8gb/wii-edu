import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Download, ExternalLink, Star } from "lucide-react"

const booksData = {
  "Computer Science": [
    {
      title: "Data Structures & Algorithms",
      author: "Dr. Sarah Johnson",
      isbn: "978-0-123456-78-9",
      year: "2024",
      pages: 450,
      format: ["PDF", "Hardcover"],
      description: "Comprehensive guide to data structures and algorithmic thinking",
      rating: 4.8,
      price: "$89.99",
      availability: "Available",
    },
    {
      title: "Web Development Fundamentals",
      author: "Prof. Maria Garcia",
      isbn: "978-0-234567-89-0",
      year: "2023",
      pages: 380,
      format: ["PDF", "eBook"],
      description: "Modern web development with HTML, CSS, JavaScript, and frameworks",
      rating: 4.7,
      price: "$75.99",
      availability: "Available",
    },
    {
      title: "Database Management Systems",
      author: "Dr. Michael Chen",
      isbn: "978-0-345678-90-1",
      year: "2024",
      pages: 520,
      format: ["PDF", "Hardcover"],
      description: "Complete guide to database design, implementation, and optimization",
      rating: 4.9,
      price: "$95.99",
      availability: "Available",
    },
    {
      title: "Artificial Intelligence Basics",
      author: "Dr. Sarah Johnson",
      isbn: "978-0-456789-01-2",
      year: "2024",
      pages: 340,
      format: ["PDF", "eBook"],
      description: "Introduction to AI concepts, machine learning, and neural networks",
      rating: 4.6,
      price: "$82.99",
      availability: "Pre-order",
    },
  ],
  "Business Administration": [
    {
      title: "Business Ethics & Leadership",
      author: "Prof. Michael Chen",
      isbn: "978-0-567890-12-3",
      year: "2023",
      pages: 290,
      format: ["PDF", "Hardcover"],
      description: "Ethical decision-making and leadership principles in modern business",
      rating: 4.5,
      price: "$68.99",
      availability: "Available",
    },
    {
      title: "Marketing Principles",
      author: "Dr. Lisa Park",
      isbn: "978-0-678901-23-4",
      year: "2024",
      pages: 410,
      format: ["PDF", "eBook"],
      description: "Contemporary marketing strategies and consumer behavior analysis",
      rating: 4.7,
      price: "$79.99",
      availability: "Available",
    },
    {
      title: "Financial Management",
      author: "Dr. Robert Taylor",
      isbn: "978-0-789012-34-5",
      year: "2023",
      pages: 480,
      format: ["PDF", "Hardcover"],
      description: "Corporate finance, investment analysis, and financial planning",
      rating: 4.8,
      price: "$92.99",
      availability: "Available",
    },
  ],
  Engineering: [
    {
      title: "Engineering Mathematics",
      author: "Prof. David Kim",
      isbn: "978-0-890123-45-6",
      year: "2024",
      pages: 650,
      format: ["PDF", "Hardcover"],
      description: "Advanced mathematics for engineering applications",
      rating: 4.6,
      price: "$105.99",
      availability: "Available",
    },
    {
      title: "Thermodynamics",
      author: "Dr. James Wilson",
      isbn: "978-0-901234-56-7",
      year: "2023",
      pages: 420,
      format: ["PDF", "eBook"],
      description: "Principles of thermodynamics and heat transfer",
      rating: 4.4,
      price: "$87.99",
      availability: "Available",
    },
    {
      title: "Materials Science",
      author: "Prof. David Kim",
      isbn: "978-0-012345-67-8",
      year: "2024",
      pages: 380,
      format: ["PDF", "Hardcover"],
      description: "Properties and applications of engineering materials",
      rating: 4.7,
      price: "$91.99",
      availability: "Available",
    },
  ],
  Healthcare: [
    {
      title: "Human Anatomy & Physiology",
      author: "Dr. Emily Rodriguez",
      isbn: "978-0-123456-78-0",
      year: "2024",
      pages: 720,
      format: ["PDF", "Hardcover"],
      description: "Comprehensive study of human body systems and functions",
      rating: 4.9,
      price: "$125.99",
      availability: "Available",
    },
    {
      title: "Medical Ethics",
      author: "Dr. Angela Foster",
      isbn: "978-0-234567-89-1",
      year: "2023",
      pages: 280,
      format: ["PDF", "eBook"],
      description: "Ethical principles and decision-making in healthcare",
      rating: 4.6,
      price: "$65.99",
      availability: "Available",
    },
    {
      title: "Healthcare Management",
      author: "Dr. Emily Rodriguez",
      isbn: "978-0-345678-90-2",
      year: "2024",
      pages: 450,
      format: ["PDF", "Hardcover"],
      description: "Healthcare systems, administration, and quality management",
      rating: 4.8,
      price: "$98.99",
      availability: "Available",
    },
  ],
  "Arts & Design": [
    {
      title: "Design Principles",
      author: "Ms. Lisa Thompson",
      isbn: "978-0-456789-01-3",
      year: "2023",
      pages: 320,
      format: ["PDF", "Hardcover"],
      description: "Fundamental principles of visual design and composition",
      rating: 4.7,
      price: "$72.99",
      availability: "Available",
    },
    {
      title: "Art History",
      author: "Prof. Jennifer Adams",
      isbn: "978-0-567890-12-4",
      year: "2024",
      pages: 540,
      format: ["PDF", "eBook"],
      description: "Survey of art movements from ancient to contemporary",
      rating: 4.5,
      price: "$85.99",
      availability: "Available",
    },
    {
      title: "Digital Media",
      author: "Ms. Lisa Thompson",
      isbn: "978-0-678901-23-5",
      year: "2024",
      pages: 380,
      format: ["PDF", "eBook"],
      description: "Digital design tools and multimedia production techniques",
      rating: 4.8,
      price: "$79.99",
      availability: "Available",
    },
  ],
  Education: [
    {
      title: "Educational Psychology",
      author: "Dr. James Wilson",
      isbn: "978-0-789012-34-6",
      year: "2023",
      pages: 420,
      format: ["PDF", "Hardcover"],
      description: "Learning theories and psychological principles in education",
      rating: 4.6,
      price: "$81.99",
      availability: "Available",
    },
    {
      title: "Curriculum Development",
      author: "Dr. Angela Foster",
      isbn: "978-0-890123-45-7",
      year: "2024",
      pages: 350,
      format: ["PDF", "eBook"],
      description: "Designing effective curricula and instructional materials",
      rating: 4.7,
      price: "$74.99",
      availability: "Available",
    },
    {
      title: "Teaching Methods",
      author: "Dr. James Wilson",
      isbn: "978-0-901234-56-8",
      year: "2024",
      pages: 390,
      format: ["PDF", "Hardcover"],
      description: "Effective teaching strategies and classroom management",
      rating: 4.8,
      price: "$77.99",
      availability: "Available",
    },
  ],
}

const departments = Object.keys(booksData)

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Academic Books</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Comprehensive collection of textbooks and reference materials for all diploma programs
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search books by title, author, or ISBN..." className="pl-10 h-12 text-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Books Catalog */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="Computer Science" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-4xl grid-cols-2 lg:grid-cols-6">
                  {departments.map((dept) => (
                    <TabsTrigger key={dept} value={dept} className="text-xs lg:text-sm">
                      {dept === "Business Administration" ? "Business" : dept === "Arts & Design" ? "Arts" : dept}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {departments.map((department) => (
                <TabsContent key={department} value={department}>
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-primary mb-2">{department} Books</h2>
                    <p className="text-muted-foreground">
                      Essential textbooks and reference materials for {department} students
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {booksData[department as keyof typeof booksData].map((book, index) => (
                      <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Badge
                              variant={book.availability === "Available" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {book.availability}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="text-sm font-medium">{book.rating}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                            {book.title}
                          </CardTitle>
                          <CardDescription>
                            <div className="space-y-1">
                              <div>By {book.author}</div>
                              <div className="text-xs">
                                {book.year} • {book.pages} pages • ISBN: {book.isbn}
                              </div>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {book.format.map((format) => (
                              <Badge key={format} variant="outline" className="text-xs">
                                {format}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <span className="text-lg font-bold text-primary">{book.price}</span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Preview
                              </Button>
                              <Button size="sm" disabled={book.availability !== "Available"}>
                                <Download className="h-4 w-4 mr-1" />
                                {book.availability === "Available" ? "Get Book" : "Pre-order"}
                              </Button>
                            </div>
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

        {/* Book Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Our Library Collection</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Academic Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Expert Authors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Digital Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Need Help Finding Books?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Our librarians are here to help you find the right resources for your studies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Contact Librarian</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/library">Visit Library</Link>
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
