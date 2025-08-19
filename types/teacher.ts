// types/teacher.ts
export interface Teacher {
    id: number;
    name: string;
    title: string;
    department: string;
    image: string;         // URL or path to the image
    email: string;
    phone: string;
    experience: string;    // e.g., "15+ Years"
    education: string;     // e.g., degrees and institutions
    specialization: string;
    bio: string;
    achievements: string[]; // Array of achievement titles
}
