"use client";
import {Calendar, Search, Users} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStudentStore } from "@/store/useStudentStore";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {useState} from "react";
import { useThemeStore } from "@/store/useThemeStore";

export function StudentSearchHero() {
    const { mainGradient } = useThemeStore();
    const { searchQuery, setSearchQuery } = useStudentStore();
    const [search, setSearch] = useState("");
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State for large screen search bar
    const { filteredStudents } = useStudentStore();
    return (
        <section className={`relative w-full pt-20 md:py-10 ${mainGradient} text-white`}>
            <div className="container mx-auto text-center pt-6">
                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                        Student Organizations
                    </h2>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                        Join one of our many student-led groups to build lasting connections,
                        develop leadership skills, and pursue your passions.
                    </p>
                </div>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                    Find students by <span className="font-semibold">Name</span>,{" "}
                    <span className="font-semibold">Roll</span>,{" "}
                    <span className="font-semibold">Registration</span>,{" "}
                </p>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                    <div className="flex items-center w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg overflow-hidden">
                        <Search className="ml-4 w-6 h-6 text-white/70" />
                        <input
                            type="text"
                            placeholder="Type student name, ID, or department..."
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

            {/* Student Organizations */}
            <section className="pb-20 md:b-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="All" className="w-full">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
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
                            const filtered = filteredStudents().filter((activity) =>
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
        </section>
    );
}
