"use client";
import { Button } from "@/components/ui/button";
import { useTeacherStore } from "@/store/useTeacherStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, X } from "lucide-react"
import { Mail, Phone, Award, BookOpen } from "lucide-react"
import {useState} from "react";
import {useThemeStore} from "@/store/useThemeStore";

export function TeacherSearchHero() {
    const { mainGradient } = useThemeStore();
    const { searchQuery, setSearchQuery, filteredTeachers, teachers, departments } = useTeacherStore();
    const [search, setSearch] = useState("");
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    return (
        <section className={`relative w-full pt-20 md:py-10 ${mainGradient} text-white`}>
            <div className="container mx-auto text-center pt-6">
                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                        Teachers Organizations
                    </h2>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                        Join one of our many Teacher-led groups to build lasting connections,
                        develop leadership skills, and pursue your passions.
                    </p>
                </div>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                    Find teachers by <span className="font-semibold">Name</span>,{" "}
                    <span className="font-semibold">ID</span>,{" "}
                </p>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-6">
                    <div className="flex items-center w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg overflow-hidden">
                        <Search className="ml-4 w-6 h-6 text-white/70" />
                        <input
                            type="text"
                            placeholder="Type Teacher name, ID, or department..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent px-4 py-4 text-lg text-white placeholder-white/60 focus:outline-none"
                        />
                        <Button
                            variant="default"
                            className="rounded-full mr-2 bg-white text-indigo-700 font-semibold px-6 py-2 hover:bg-gray-100 transition"
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <Tabs defaultValue="All" className="w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
                        {/* Desktop: Tabs and Search Icon/Bar */}
                        <div className="hidden md:flex w-full items-center">
                            <div className="flex-1 flex justify-center">
                                <TabsList className="grid w-max grid-flow-col gap-4">
                                    {departments.map((dept) => (
                                        <TabsTrigger key={dept} value={dept} className="text-xs lg:text-sm">
                                            {dept === "Business Administration" ? "Business" : dept === "Arts & Design" ? "Arts" : dept}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>
                        </div>

                        {/* Mobile: Tabs and Search Bar are separate */}
                        <div className="md:hidden">
                            <div className="w-full overflow-x-auto pb-4">
                                <TabsList className="grid w-max grid-flow-col gap-4">
                                    {departments.map((dept) => (
                                        <TabsTrigger key={dept} value={dept} className="text-xs lg:text-sm">
                                            {dept === "Business Administration" ? "Business" : dept === "Arts & Design" ? "Arts" : dept}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>
                            <div className="w-full flex items-center bg-background rounded-full shadow-sm border border-border px-4 py-2 mt-4">
                                <Search className="w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search teachers..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full bg-transparent outline-none ml-3 text-base text-foreground placeholder:text-muted-foreground"
                                />
                            </div>
                        </div>
                    </div>

                    {departments.map((department) => {
                        const filtered = filteredTeachers()
                            .filter((teacher) => department === "All" || teacher.department === department)
                            .filter((teacher) =>
                                teacher.name.toLowerCase().includes(search.toLowerCase()) ||
                                teacher.title.toLowerCase().includes(search.toLowerCase()) ||
                                teacher.department.toLowerCase().includes(search.toLowerCase()) ||
                                (teacher.specialization && teacher.specialization.toLowerCase().includes(search.toLowerCase()))
                            );
                        return (
                            <TabsContent key={department} value={department}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filtered.length > 0 ? filtered.map((teacher) => (
                                        <Card key={teacher.id} className="group hover:shadow-xl transition-all duration-300">
                                            <CardHeader className="text-center">
                                                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                                                    <img
                                                        src={teacher.image || "/placeholder.svg"}
                                                        alt={teacher.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <CardTitle className="text-xl">{teacher.name}</CardTitle>
                                                <CardDescription className="text-primary font-medium">{teacher.title}</CardDescription>
                                                <Badge variant="secondary" className="w-fit mx-auto">
                                                    {teacher.department}
                                                </Badge>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Award className="h-4 w-4 text-accent" />
                                                        <span>{teacher.experience}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <BookOpen className="h-4 w-4 text-accent" />
                                                        <span className="text-xs">{teacher.education}</span>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-muted-foreground line-clamp-3">{teacher.bio}</p>
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Mail className="h-4 w-4 text-accent" />
                                                        <span className="text-xs">{teacher.email}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Phone className="h-4 w-4 text-accent" />
                                                        <span className="text-xs">{teacher.phone}</span>
                                                    </div>
                                                </div>
                                                <div className="pt-2">
                                                    <h4 className="font-medium text-sm mb-2">Specialization:</h4>
                                                    <p className="text-xs text-muted-foreground">{teacher.specialization}</p>
                                                </div>
                                                <div className="pt-2">
                                                    <h4 className="font-medium text-sm mb-2">Recent Achievements:</h4>
                                                    <ul className="space-y-1">
                                                        {teacher.achievements.slice(0, 2).map((achievement, index) => (
                                                            <li key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                                                                <div className="w-1 h-1 bg-accent rounded-full"></div>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )) : (
                                        <div className="col-span-full text-center text-muted-foreground py-16 text-lg">
                                            No teachers found. Try adjusting your search or filters.
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
}
