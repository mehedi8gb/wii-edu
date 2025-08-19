import { create } from "zustand";
import { teachers } from "@/data/teachers";
import { Teacher } from "@/types/teacher";

interface TeacherStore {
    teachers: Teacher[];                   // lowercase
    departments: string[];                 // lowercase
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredTeachers: () => Teacher[];     // plural & lowercase
}

export const useTeacherStore = create<TeacherStore>((set, get) => ({
    teachers,
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),
    departments: [
        "All",
        "Computer Science",
        "Business Administration",
        "Healthcare",
        "Engineering",
        "Arts & Design",
        "Education",
    ],
    filteredTeachers: () => {
        const { teachers, searchQuery } = get();
        if (!searchQuery) return teachers;

        const q = searchQuery.toLowerCase();
        return teachers.filter(
            (t) =>
                t.name.toLowerCase().includes(q) ||
                String(t.id).toLowerCase().includes(q) ||
                t.department.toLowerCase().includes(q) ||
                t.title.toLowerCase().includes(q) ||
                t.specialization.toLowerCase().includes(q)
        );
    },
}));
