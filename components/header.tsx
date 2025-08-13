"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, GraduationCap } from "lucide-react"

const departments = [
  { name: "Civil Engineering", href: "/departments/civil-engineering" },
  { name: "Surveying", href: "/departments/surveying" },
  { name: "Electrical Engineering", href: "/departments/electrical-engineering" },
  { name: "Shipbuilding Technology", href: "/departments/shipbuilding-technology" },
  { name: "Marine Engineering", href: "/departments/marine-engineering" },
  { name: "Glass & Ceramics Technology", href: "/departments/glass-ceramics-technology" },
  { name: "Textile Engineering", href: "/departments/textile-engineering" },
  { name: "Garments Design & Pattern Making", href: "/departments/garments-design-pattern-making" },
  { name: "Electronics", href: "/departments/electronics" },
  { name: "Mechanical", href: "/departments/mechanical" },
  { name: "Architecture", href: "/departments/architecture" },
  { name: "Aircraft Maintenance Engineering", href: "/departments/aircraft-maintenance-engineering" },
]

const booksData = {
  "Civil Engineering": ["Structural Analysis", "Construction Materials", "Surveying & Leveling"],
  Surveying: ["Land Surveying", "GPS & GIS", "Photogrammetry"],
  "Electrical Engineering": ["Circuit Analysis", "Power Systems", "Electronics Fundamentals"],
  "Shipbuilding Technology": ["Ship Design", "Marine Materials", "Naval Architecture"],
  "Marine Engineering": ["Marine Engines", "Ship Operations", "Maritime Safety"],
  "Glass & Ceramics Technology": ["Glass Technology", "Ceramic Materials", "Manufacturing Processes"],
  "Textile Engineering": ["Textile Materials", "Fabric Production", "Quality Control"],
  "Garments Design & Pattern Making": ["Fashion Design", "Pattern Making", "Garment Construction"],
  Electronics: ["Digital Electronics", "Microprocessors", "Communication Systems"],
  Mechanical: ["Thermodynamics", "Machine Design", "Manufacturing Technology"],
  Architecture: ["Architectural Drawing", "Building Design", "Construction Technology"],
  "Aircraft Maintenance Engineering": ["Aircraft Systems", "Avionics", "Aerospace Materials"],
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-primary">Western Ideal Institute</span>
              <span className="text-xs text-muted-foreground">Polytechnic Institute</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/users" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Users
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/alumni" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Alumni
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Academic</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                    {departments.map((dept) => (
                      <Link
                        key={dept.name}
                        href={dept.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{dept.name}</div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/live-class" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Live Class
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/examination" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Examination
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/accounting" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Accounting
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/back-office" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Back Office
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/online-courses" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Online Courses
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/settings" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Settings
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            >
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              <Link href="/auth/register">Register</Link>
            </Button>
            <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/admissions">Apply Now</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <Link href="/users" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Users
                  </Link>
                  <Link href="/alumni" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Alumni
                  </Link>
                  <Link href="/departments" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Academic Programs
                  </Link>
                  <Link href="/live-class" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Live Class
                  </Link>
                  <Link href="/examination" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Examination
                  </Link>
                  <Link href="/accounting" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Accounting
                  </Link>
                  <Link href="/back-office" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Back Office
                  </Link>
                  <Link href="/online-courses" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Online Courses
                  </Link>
                  <Link href="/settings" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Settings
                  </Link>
                  <div className="flex flex-col space-y-2 mt-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    >
                      <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                    >
                      <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                        Register
                      </Link>
                    </Button>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="/admissions" onClick={() => setIsOpen(false)}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
