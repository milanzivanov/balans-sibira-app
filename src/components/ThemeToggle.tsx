/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark, mounted]);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-slate-200 flex items-center px-1">
        <div className="w-5 h-5 rounded-full bg-white shadow flex items-center justify-center text-amber-500">
          <LuSun size={12} />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 ${
        dark ? "bg-slate-700" : "bg-slate-200"
      }`}
    >
      {/* Track icons */}
      <LuSun
        size={12}
        className="absolute left-1.5 top-1/2 -translate-y-1/2 text-amber-500 transition-opacity duration-300"
        style={{ opacity: dark ? 0 : 1 }}
      />
      <LuMoon
        size={12}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-300 transition-opacity duration-300"
        style={{ opacity: dark ? 1 : 0 }}
      />
      {/* Thumb */}
      <span
        className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${
          dark ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {dark ? (
          <LuMoon size={11} className="text-slate-600" />
        ) : (
          <LuSun size={11} className="text-amber-500" />
        )}
      </span>
    </button>
  );
}
