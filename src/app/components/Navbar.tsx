"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
};

function NavItem({ title, url, isSelected }: NavItemProps) {
  return (
    <li>
      <a
        href={url}
        className={`block px-5 py-3 rounded-lg transition duration-300 ease-in-out hover:text-teal-500 hover:bg-teal-100 ${
          isSelected ? "text-white bg-teal-500" : "text-zinc-700"
        }`}
      >
        {title}
      </a>
    </li>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 transition"
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center mx-auto max-w-7xl h-16 pt-6 px-4">
      <nav>
        <ul className="flex space-x-4 rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-lg">
          <NavItem title="Tentang Saya" url="/" isSelected={pathname === "/"} />
          <NavItem title="Proyek" url="/projects" isSelected={pathname === "/projects"} />
          <NavItem title="Essai" url="/essays" isSelected={pathname === "/essays"} />
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  );
}
