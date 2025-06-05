"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { name: "Home", href: "/", featured: true, highlight: true },
    { name: "About", href: "/about" },
    { name: "Our Offerings", href: "#" },
    { name: "Contact", href: "/contact" },
    // { name: "people & culture", href: "#" },
    // { name: "who we are", href: "#" },
    // { name: "newsroom", href: "#" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-[#e9f3fa]/95 backdrop-blur-md shadow-md"
                        : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center">
                            {/* <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <svg
                                    width="60"
                                    height="40"
                                    viewBox="0 0 60 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M45 0H60L45 40H30L45 0Z"
                                        fill="#EAB308"
                                    />
                                    <path
                                        d="M15 0H30L15 40H0L15 0Z"
                                        fill="#EAB308"
                                    />
                                    <path
                                        d="M30 0H45L30 40H15L30 0Z"
                                        fill="#EAB308"
                                    />
                                </svg>
                            </motion.div> */}
                            <Image
                                src="/images/3sEngineersLogo.png"
                                alt="3S Engineers"
                                width={60}
                                height={60}
                            />
                            <span
                                className={`ml-2 text-lg font-light ${
                                    isScrolled
                                        ? "text-neutral-900"
                                        : "text-white"
                                }`}
                            >
                                3S Engineers
                            </span>
                        </Link>

                        <nav className="hidden lg:flex items-center space-x-6">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`text-sm font-light transition-colors duration-200 ${
                                        item.highlight
                                            ? "text-[#2986C7] hover:text-[#6B2326]"
                                            : isScrolled
                                            ? "text-neutral-800 hover:text-[#2986C7]"
                                            : "text-white hover:text-white/80"
                                    } ${item.featured ? "font-normal" : ""}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center">
                            <button
                                className={`p-2 ${
                                    isScrolled
                                        ? "text-neutral-800"
                                        : "text-white"
                                }`}
                                aria-label="Search"
                            >
                                <Search className="h-5 w-5" />
                            </button>

                            <button
                                className={`p-2 ml-2 lg:hidden hover:cursor-pointer ${
                                    isScrolled
                                        ? "text-neutral-800"
                                        : "text-white"
                                }`}
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                                aria-label="Menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5" color="#020617" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="lg:hidden fixed inset-0 z-40 bg-blue-50 pt-20"
                >
                    <div className="container mx-auto px-4 py-8">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`text-lg py-2 border-b border-neutral-200 ${
                                        item.highlight
                                            ? "text-[#2986C7]"
                                            : "text-neutral-800"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </motion.div>
            )}
        </>
    );
}
