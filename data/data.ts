// Enhanced achievement data with icons
import {Calendar, Users, BookOpen, Heart, Award, Medal, Handshake, Palette, Search, X} from "lucide-react"

export const achievements = [
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
export const resources = [
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