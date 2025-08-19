"use client"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import Link from "next/link"
import {Users, Clock, Award, BookOpen} from "lucide-react"
import {departments} from "@/data/departments";
import {useDepartmentStore} from "@/store/useDepartmentStore";
import {useThemeStore} from "@/store/useThemeStore";


export default function DepartmentsPage() {
    const { mainGradient } = useThemeStore(); // Get dynamic theme gradient
    const {searchQuery, setSearchQuery, filteredDepartments, departments} = useDepartmentStore();
    const featuredDepartments = departments.filter((dept) => dept.featured)
    const otherDepartments = departments.filter((dept) => !dept.featured)

    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1">
                {/* Hero Section */}
                <section className={`${mainGradient} text-white py-16 md:py-24`}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Departments</h1>
                            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                                Explore our comprehensive range of government-certified diploma programs designed to
                                prepare you for
                                career success
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Departments */}
                <section className={`${mainGradient} text-white py-16 md:py-20`}>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Featured
                                Programs</h2>
                            <p className="text-xl text-white max-w-2xl mx-auto">
                                Our most popular and in-demand diploma programs
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredDepartments().map((dept) => (
                                <Card
                                    key={dept.slug}
                                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="text-5xl">{dept.icon}</div>
                                            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                                        </div>
                                        <CardTitle
                                            className="text-2xl group-hover:text-primary transition-colors">{dept.name}</CardTitle>
                                        <CardDescription className="text-base">{dept.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Users className="h-4 w-4"/>
                                                {dept.students}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="h-4 w-4"/>
                                                {dept.duration}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <BookOpen className="h-4 w-4"/>
                                                {dept.courses} Courses
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Award className="h-4 w-4"/>
                                                {dept.jobPlacement} Placement
                                            </div>
                                        </div>
                                        <Button
                                            asChild
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                        >
                                            <Link href={`/department/${dept.slug}`}>Explore Program</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Other Departments */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">All
                                Programs</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Complete list of our diploma programs across various fields
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherDepartments.map((dept) => (
                                <Card
                                    key={dept.slug}
                                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <CardHeader>
                                        <div className="text-4xl mb-4">{dept.icon}</div>
                                        <CardTitle
                                            className="text-xl group-hover:text-primary transition-colors">{dept.name}</CardTitle>
                                        <CardDescription>{dept.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                                            <div className="flex justify-between">
                                                <span>Students:</span>
                                                <span>{dept.students}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Duration:</span>
                                                <span>{dept.duration}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Job Placement:</span>
                                                <span className="text-primary font-medium">{dept.jobPlacement}</span>
                                            </div>
                                        </div>
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                                        >
                                            <Link href={`/departments/${dept.slug}`}>Learn More</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Choose Your
                                Path?</h2>
                            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                                Get personalized guidance to select the perfect program for your career goals
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg"
                                        className="bg-accent hover:bg-accent/90 text-accent-foreground">
                                    <Link href="/admissions">Start Application</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                                >
                                    <Link href="/contact">Get Guidance</Link>
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
