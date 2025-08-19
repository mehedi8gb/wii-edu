import { create } from "zustand";
import { students } from "@/data/students";
import {Student} from "@/types/student";
interface StudentStore {
    students: Student[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredStudents: () => Student[];
}

export const useStudentStore = create<StudentStore>((set, get) => ({
    students,
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),
    filteredStudents: () => {
        const { students, searchQuery } = get();
        if (!searchQuery) return students;

        const q = searchQuery.toLowerCase();
        return students.filter(
            (s) =>
                s.name.toLowerCase().includes(q) ||
                String(s.roll).toLowerCase().includes(q) ||
                String(s.registration).toLowerCase().includes(q)

        );
    },

}));
