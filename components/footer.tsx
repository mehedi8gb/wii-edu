import Link from "next/link"
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-serif text-xl font-bold">Diploma Academy</h3>
                <p className="text-sm text-primary-foreground/80">Government Certified</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Excellence in education with government-certified diploma programs designed to prepare students for
              successful careers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/admissions" className="text-sm hover:text-accent transition-colors">
                Admissions
              </Link>
              <Link href="/departments" className="text-sm hover:text-accent transition-colors">
                Departments
              </Link>
              <Link href="/teachers" className="text-sm hover:text-accent transition-colors">
                Teacher
              </Link>
              <Link href="/students" className="text-sm hover:text-accent transition-colors">
                Student Life
              </Link>
            </nav>
          </div>

          {/* Departments */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Departments</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/departments/computer-science" className="text-sm hover:text-accent transition-colors">
                Computer Science
              </Link>
              <Link href="/departments/business-administration" className="text-sm hover:text-accent transition-colors">
                Business Administration
              </Link>
              <Link href="/departments/engineering" className="text-sm hover:text-accent transition-colors">
                Engineering
              </Link>
              <Link href="/departments/healthcare" className="text-sm hover:text-accent transition-colors">
                Healthcare
              </Link>
              <Link href="/departments/arts-design" className="text-sm hover:text-accent transition-colors">
                Arts & Design
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Rupshi Bus Stand, Rupganj, Narayanganj</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+880 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@wii.edu</span>
              </div>
            </div>
            <div className="pt-2">
              <h5 className="font-medium text-sm mb-2">Office Hours</h5>
              <p className="text-xs text-primary-foreground/80">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Accreditation & Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-4 text-xs text-primary-foreground/80">
              <span className="bg-accent text-accent-foreground px-2 py-1 rounded">Government Certified</span>
              <span className="bg-accent text-accent-foreground px-2 py-1 rounded">Accredited Institution</span>
              <span className="bg-accent text-accent-foreground px-2 py-1 rounded">ISO 9001:2015</span>
            </div>
            <p className="text-xs text-primary-foreground/80">
              © 2024 Government-Certified Diploma Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
