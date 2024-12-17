import { useEffect } from "react";
import { create } from "zustand";

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const InitializeTheme = () => {
  const { theme, toggleTheme } = Theme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'dark';

    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    if (initialTheme !== theme) {
      toggleTheme();
    }
  }, [theme, toggleTheme]);
};


export const Theme = create<ThemeState>((set) => ({
  theme: 'dark',
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    }),
}));
