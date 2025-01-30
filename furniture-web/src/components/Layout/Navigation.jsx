"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
            const handleScroll = () => {
                setIsOpen(false);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [isOpen]);
    return (
        <nav className="relative z-10 flex items-center justify-between px-6 py-8 md:px-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-widest">
                Raev Design
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <NavLinks />
            </div>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
            >
                <svg
                    className="w-8 h-8 transition-transform duration-300"
                    style={{
                        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        className="transition-all duration-300"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                            isOpen
                                ? "M6 18L18 6M6 6l12 12"
                                : "M4 6h16M4 12h16M4 18h16"
                        }
                    />
                </svg>
            </button>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden fixed top-20 left-0 right-0 bg-[black]/35 backdrop-blur-sm py-4 px-6
          transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-50
          ${
              isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
            >
                <div className="flex flex-col space-y-4 items-end">
                    <NavLinks mobile onClick={() => setIsOpen(false)} />
                </div>
            </div>
        </nav>
    );
}

function NavLinks({ mobile, onClick }) {
    return (
        <>
            <Link
                href="/"
                className={`text-white/90 hover:text-white transition-colors ${
                    mobile
                        ? "text-xl py-2 hover:pl-2 transition-all"
                        : "text-lg"
                }`}
                onClick={onClick}
            >
                НАЧАЛО
            </Link>
            <Link
                href="/gallery"
                className={`text-white/90 hover:text-white transition-colors ${
                    mobile
                        ? "text-xl py-2 hover:pl-2 transition-all"
                        : "text-lg"
                }`}
                onClick={onClick}
            >
                ГАЛЕРИЯ
            </Link>
            <Link
                href="/about"
                className={`text-white/90 hover:text-white transition-colors ${
                    mobile
                        ? "text-xl py-2 hover:pl-2 transition-all"
                        : "text-lg"
                }`}
                onClick={onClick}
            >
                ЗА НАС
            </Link>
            <Link
                href="/contact-us"
                className={`text-white/90 hover:text-white transition-colors ${
                    mobile
                        ? "text-xl py-2 hover:pl-2 transition-all"
                        : "text-lg"
                }`}
                onClick={onClick}
            >
                КОНТАКТИ
            </Link>
        </>
    );
}
