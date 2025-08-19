'use client'
import {Header} from "@/components/header"
import {StudentSearchHero} from "@/components/StudentSearchHero"
import {Footer} from "@/components/footer"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import Link from "next/link"
import {Calendar, Users, Search, X} from "lucide-react"
import {achievements, resources} from "@/data/data";
import { useThemeStore } from "@/store/useThemeStore";
// Main component
export default function StudentsPage() {
    const { mainGradient, setMainGradient } = useThemeStore();
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header/>
            <main className="flex-1">

                {/* Hero Section with Gradient */}
                <section className={`${mainGradient} text-white py-20 md:py-28`}>
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
                <StudentSearchHero />


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
                            className={`${mainGradient} text-white py-20 rounded-2xl p-8 md:p-12 text-center shadow-xl`}>
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