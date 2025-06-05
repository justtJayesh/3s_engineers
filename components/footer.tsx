import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = [
    {
        title: "our technologies",
        links: [
            "advanced mechatronics",
            "fluid control",
            "industrial niches",
            "specialized manufacturing",
            "surface technologies",
        ],
    },
    {
        title: "sustainability",
        links: ["our strategy", "our impact", "our focus", "benchmarks"],
    },
    {
        title: "people & culture",
        links: ["careers", "values", "development"],
    },
    {
        title: "contact details",
        links: ["our locations"],
    },
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#0C223F] to-[#2986C7] text-white">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-light mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href="#"
                                            className="text-white/80 hover:text-white text-sm flex items-center group"
                                        >
                                            {link}
                                            <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-yellow-200/30">
                    <div className="flex items-center mb-4 md:mb-0">
                        <svg
                            width="40"
                            height="30"
                            viewBox="0 0 60 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M45 0H60L45 40H30L45 0Z" fill="#FEF3C7" />
                            <path d="M15 0H30L15 40H0L15 0Z" fill="#FEF3C7" />
                            <path d="M30 0H45L30 40H15L30 0Z" fill="#FEF3C7" />
                        </svg>
                        <span className="ml-2 text-sm">3S Engineers</span>
                    </div>

                    <div className="flex space-x-6">
                        <Link
                            href="#"
                            className="text-white/80 hover:text-white text-xs"
                        >
                            privacy policy
                        </Link>
                        <Link
                            href="#"
                            className="text-white/80 hover:text-white text-xs"
                        >
                            cookie policy
                        </Link>
                        <Link
                            href="#"
                            className="text-white/80 hover:text-white text-xs"
                        >
                            disclaimer
                        </Link>
                    </div>
                </div>

                {/* <div className="mt-8 text-center">
                    <form className="max-w-sm mx-auto">
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="subscribe"
                                className="flex-1 bg-transparent border-b border-white/30 py-2 px-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 text-yellow-900 py-2 px-4 hover:bg-yellow-300 transition-colors"
                            >
                                submit
                            </button>
                        </div>
                    </form>
                </div> */}
            </div>
        </footer>
    );
}
