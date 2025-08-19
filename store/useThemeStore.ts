import { create } from "zustand";

interface ThemeStore {
    mainGradient: string;
    setMainGradient: (gradient: string) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    // Default gradient
    mainGradient: "bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]",

    setMainGradient: (gradient: string) => set({ mainGradient: gradient }),
}));
