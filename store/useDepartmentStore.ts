import { create } from "zustand";
import {departments} from "@/data/departments";

export interface Department {
    name: string;
    slug: string;
    description: string;
    icon: string;
    students: string;
    duration: string;
    courses: number;
    jobPlacement: string;
    featured: boolean;
    href: string;
}

interface DepartmentStore {
    departments: Department[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredDepartments: () => Department[];
    getDepartmentBySlug: (slug: string) => Department | undefined;
}

export const useDepartmentStore = create<DepartmentStore>((set, get) => ({
    departments,
    searchQuery: "",
    setSearchQuery: (query: string) => set({ searchQuery: query }),
    getDepartmentBySlug: (slug: string) =>
        get().departments.find((d) => d.slug === slug),
    filteredDepartments: () => {
        const { departments, searchQuery } = get();
        if (!searchQuery) return departments;

        const q = searchQuery.toLowerCase();
        return departments.filter(
            (d) =>
                d.name.toLowerCase().includes(q) ||
                d.slug.toLowerCase().includes(q) ||
                d.description.toLowerCase().includes(q)
        );
    },
}));
