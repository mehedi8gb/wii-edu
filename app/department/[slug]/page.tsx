'use client';

import {useParams} from 'next/navigation'; // App Router recommends this
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDepartmentStore } from "@/store/useDepartmentStore";

export default function DepartmentPage() {
    const params = useParams();
    const slug = params.slug as string; // get slug from URL
    const getDepartmentBySlug = useDepartmentStore((state) => state.getDepartmentBySlug);
    const department = slug ? getDepartmentBySlug(slug as string) : undefined;

    if (!department) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center">
                <p className="text-xl text-muted-foreground">Department not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-primary text-primary-foreground py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-6xl">{department.icon}</div>
                                <div>
                                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">{department.name}</h1>
                                    <p className="text-xl text-primary-foreground/90">{department.description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">{department.students}</div>
                                    <div className="text-sm text-primary-foreground/80">Students</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">{department.duration}</div>
                                    <div className="text-sm text-primary-foreground/80">Duration</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">{department.courses}</div>
                                    <div className="text-sm text-primary-foreground/80">Courses</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">{department.jobPlacement}</div>
                                    <div className="text-sm text-primary-foreground/80">Job Placement</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Courses Offered */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">Courses Offered</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: department.courses }).map((_, i) => (
                                <Card key={i} className="hover:shadow-md transition-shadow">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg">Course {i + 1}</CardTitle>
                                            <Badge variant="secondary">Credits TBD</Badge>
                                        </div>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
