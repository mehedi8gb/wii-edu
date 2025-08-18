'use client'
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {useState} from "react"
import Link from "next/link"
import {Calendar, Users, BookOpen, Heart, Award, Medal, Handshake, Palette, Search, X} from "lucide-react"
import {students} from "@/data/students";

// Enhanced achievement data with icons
const achievements = [
    {
        title: "National Programming Championship",
        winner: "Computer Science Team",
        date: "December 2024",
        description: "First place in the National Collegiate Programming Contest.",
        award: "Gold Medal",
        icon: Medal
    },
    {
        title: "Business Plan Competition",
        winner: "Sarah Kim & Team",
        date: "November 2024",
        description: "Top 3 finish with an innovative healthcare app.",
        award: "Bronze Medal",
        icon: Award
    },
    {
        title: "Community Service Award",
        winner: "Healthcare Heroes Club",
        date: "October 2024",
        description: "Outstanding community service with 500+ volunteer hours.",
        award: "Service Excellence",
        icon: Handshake
    },
    {
        title: "Art Exhibition Recognition",
        winner: "Creative Arts Collective",
        date: "September 2024",
        description: "Featured in the City Art Gallery for exceptional student works.",
        award: "Artistic Achievement",
        icon: Palette
    },
]

// Resources data remains the same
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

// Main component
export default function StudentsPage() {
    const [search, setSearch] = useState("");
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State for large screen search bar

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header/>
            <main className="flex-1">
                {/* Hero Section with Gradient */}
                <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-20 md:py-28">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">Student
                                Life</h1>
                            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                                Discover a vibrant campus community where learning extends beyond the classroom through
                                diverse organizations, celebrated achievements, and lifelong connections.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Student Stats with enhanced styling */}
                <section className="py-16 bg-muted/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <div className="text-center p-4">
                                <div
                                    className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in">2,500+
                                </div>
                                <div className="text-muted-foreground text-sm md:text-base">Active Students</div>
                            </div>
                            <div className="text-center p-4">
                                <div
                                    className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in">50+
                                </div>
                                <div className="text-muted-foreground text-sm md:text-base">Student Organizations</div>
                            </div>
                            <div className="text-center p-4">
                                <div
                                    className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in">200+
                                </div>
                                <div className="text-muted-foreground text-sm md:text-base">Annual Events</div>
                            </div>
                            <div className="text-center p-4">
                                <div
                                    className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in">95%
                                </div>
                                <div className="text-muted-foreground text-sm md:text-base">Student Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Student Organizations */}
                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Student
                                Organizations</h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Join one of our many student-led groups to build lasting connections, develop leadership
                                skills, and pursue your passions.
                            </p>
                        </div>

                        <Tabs defaultValue="All" className="w-full">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
                                {/* Desktop: Tabs and Search Icon/Bar */}
                                <div className="hidden md:flex w-full items-center">
                                    <div className="flex-1 flex justify-center">
                                        <TabsList className="grid w-max grid-flow-col gap-4">
                                            {["All", "Leadership", "Academic", "Professional", "Service", "Arts", "Cultural"].map(tab => (
                                                <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
                                            ))}
                                        </TabsList>
                                    </div>
                                    <div className="flex items-center justify-end" style={{minWidth: 0}}>
                                        {isSearchVisible ? (
                                            <div
                                                className="w-full max-w-xs flex items-center bg-background rounded-full shadow-sm border border-border px-4 py-2 transition-all duration-300 animate-in fade-in-0 slide-in-from-left-4">
                                                <Search className="w-5 h-5 text-muted-foreground"/>
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
                                                    <X className="h-5 w-5"/>
                                                </Button>
                                            </div>
                                        ) : (
                                            <Button variant="ghost" size="icon" className="rounded-full"
                                                    onClick={() => setIsSearchVisible(true)}>
                                                <Search className="h-5 w-5"/>
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                {/* Mobile: Tabs and Search Bar are separate */}
                                <div className="md:hidden">
                                    <div className="w-full overflow-x-auto pb-4">
                                        <TabsList className="grid w-max grid-flow-col gap-4">
                                            {["All", "Leadership", "Academic", "Professional", "Service", "Arts", "Cultural"].map(tab => (
                                                <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
                                            ))}
                                        </TabsList>
                                    </div>
                                    <div
                                        className="w-full flex items-center bg-background rounded-full shadow-sm border border-border px-4 py-2 mt-4">
                                        <Search className="w-5 h-5 text-muted-foreground"/>
                                        <input
                                            type="text"
                                            placeholder="Search organizations..."
                                            value={search}
                                            onChange={e => setSearch(e.target.value)}
                                            className="w-full bg-transparent outline-none ml-3 text-base text-foreground placeholder:text-muted-foreground"
                                        />
                                    </div>
                                </div>
                            </div>

                            {["All", "Leadership", "Academic", "Professional", "Service", "Arts", "Cultural"].map((category) => {
                                const filtered = students.filter((activity) =>
                                    (category === "All" || activity.category === category) &&
                                    (activity.name.toLowerCase().includes(search.toLowerCase()) || activity.description.toLowerCase().includes(search.toLowerCase()))
                                );
                                return (
                                    <TabsContent key={category} value={category}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {filtered.length > 0 ? filtered.map((activity) => (
                                                <Card key={activity.id}
                                                      className="group overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                                                    <CardHeader className="p-0">
                                                        <div className="w-full h-48 overflow-hidden">
                                                            <img
                                                                src={activity.image || "/placeholder.svg"}
                                                                alt={activity.name}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                            />
                                                        </div>
                                                        <div className="p-6">
                                                            <div className="flex items-center justify-between mb-3">
                                                                <Badge variant="secondary">{activity.category}</Badge>
                                                                <div
                                                                    className="flex items-center gap-2 text-sm text-muted-foreground">
                                                                    <Users className="h-4 w-4"/>
                                                                    {activity.members} Members
                                                                </div>
                                                            </div>
                                                            <CardTitle
                                                                className="text-xl mb-2 group-hover:text-primary transition-colors">
                                                                {activity.name}
                                                            </CardTitle>
                                                            <CardDescription>{activity.description}</CardDescription>
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent
                                                        className="p-6 pt-0 flex-grow flex flex-col justify-end">
                                                        <div>
                                                            <div className="text-sm text-muted-foreground mb-4">
                                                                <p><span
                                                                    className="font-semibold">Registration:</span> {activity.registration}
                                                                </p>
                                                                <p><span
                                                                    className="font-semibold">Roll:</span> {activity.roll}
                                                                </p>
                                                            </div>
                                                            <Button className="w-full mt-auto">Join
                                                                Organization</Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            )) : (
                                                <div
                                                    className="col-span-full text-center text-muted-foreground py-16 text-lg">
                                                    No organizations found. Try adjusting your search or filters.
                                                </div>
                                            )}
                                        </div>
                                    </TabsContent>
                                );
                            })}
                        </Tabs>
                    </div>
                </section>

                {/* Student Achievements with improved cards */}
                <section className="py-20 md:py-24 bg-muted/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Recent
                                Achievements</h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Celebrating the outstanding accomplishments and recognition of our talented students.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {achievements.map((achievement, index) => (
                                <Card key={index}
                                      className="flex flex-col sm:flex-row items-start p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div
                                        className="w-12 h-12 mb-4 sm:mb-0 sm:mr-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <achievement.icon className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="flex-grow">
                                        <div
                                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <CardTitle
                                                className="text-xl mb-1 sm:mb-0">{achievement.title}</CardTitle>
                                            <Badge
                                                className="bg-accent text-accent-foreground w-max">{achievement.award}</Badge>
                                        </div>
                                        <CardDescription
                                            className="text-primary font-medium mb-2">{achievement.winner}</CardDescription>
                                        <p className="text-muted-foreground mb-3">{achievement.description}</p>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4"/>
                                            {achievement.date}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Student Resources with better visual cards */}
                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Student
                                Resources</h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Access essential services and support systems designed to help you succeed throughout
                                your academic journey.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {resources.map((resource, index) => (
                                <Card key={index}
                                      className="text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                    <CardHeader className="items-center">
                                        <div
                                            className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                            <resource.icon className="h-10 w-10 text-primary"/>
                                        </div>
                                        <CardTitle className="text-xl">{resource.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col justify-between">
                                        <p className="text-muted-foreground mb-6">{resource.description}</p>
                                        <Button asChild variant="outline"
                                                className="w-full bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Link href={resource.link}>Access Resource</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section with Gradient */}
                <section className="py-20 md:py-24 bg-muted/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div
                            className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-xl">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Join Our
                                Community?</h2>
                            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                                Become part of a vibrant student community where your potential can flourish and your
                                future begins.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg"
                                        className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                                    <Link href="/admissions">Apply Now</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-transform hover:scale-105"
                                >
                                    <Link href="/contact">Visit Campus</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}