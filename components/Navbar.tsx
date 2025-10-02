"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/70 backdrop-blur z-50 border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-xl text-blue-600">ZA</Link>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <div className={`lg:flex gap-6 ${open ? "block" : "hidden"}`}>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/experience" className="hover:text-blue-600">Experience</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <a href="/Zain_ul_Abdin.pdf" download className="px-3 py-1 border rounded hover:bg-blue-600 hover:text-white">Resume</a>
        </div>
      </nav>
    </header>
  );
}
