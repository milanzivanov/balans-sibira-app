/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after component mounts
    setMounted(true);
    // Check localStorage after mounting
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Apply theme class to document when dark state changes
    if (mounted) {
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark, mounted]);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle Dark Mode"
        className="p-3 rounded-full bg-slate-200 dark:bg-slate-300 cursor-pointer transition-colors hover:bg-slate-300 dark:hover:bg-slate-400"
      >
        <LuSun />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="p-3 rounded-full bg-slate-200 dark:bg-slate-400 cursor-pointer transition-colors hover:bg-slate-300 dark:hover:bg-slate-400"
    >
      {dark ? <LuMoon /> : <LuSun />}
    </button>
  );
}
