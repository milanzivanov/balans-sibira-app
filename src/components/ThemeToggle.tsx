/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setDark(true);
        document.documentElement.classList.add("dark");
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark, mounted]);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    try {
      localStorage.setItem("theme", newDark ? "dark" : "light");
    } catch {}
  };

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-slate-200 flex items-center px-1">
        <div className="w-5 h-5 rounded-full bg-white shadow flex items-center justify-center">
          <Image src="/sun.svg" alt="Sun icon" width={12} height={12} />
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
      <Image
        src="/sun.svg"
        alt="day mode icon"
        width={12}
        height={12}
        aria-hidden="true"
        className="absolute left-1.5 top-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ opacity: dark ? 0 : 1 }}
      />
      <Image
        src="/moon.svg"
        alt="night mode icon"
        width={12}
        height={12}
        aria-hidden="true"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ opacity: dark ? 1 : 0 }}
      />

      <span
        className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${
          dark ? "translate-x-7" : "translate-x-1"
        }`}
      >
        <Image
          src={dark ? "/moon.svg" : "/sun.svg"}
          alt=""
          width={11}
          height={11}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
