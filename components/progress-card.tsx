"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// import Image from "next/image";

interface ProgressCardProps {
    title: string;
    description: string;
    image: string;
    date: string;
    link: string;
    index: number;
}

export default function ProgressCard({
    title,
    description,
    image,
    date,
    link,
    index,
}: ProgressCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-[#e9f3fa]/90 to-[#d0e7f7]/80 backdrop-blur-sm border border-[#2986C7]/50 shadow-[#2986C7]/30 hover:shadow-[#2986C7]/60 hover:shadow-xl transition-shadow duration-300 group"
        >
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                    <img
                        src={image || "/placeholder.svg"}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-neutral-900/80 text-white text-xs uppercase tracking-wider py-1 px-3">
                        {date}
                    </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-light text-neutral-900 mb-4">
                            {title}
                        </h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="mt-6">
                        <a
                            href={link}
                            className="text-[#6B2326] inline-flex items-center text-sm group-hover:underline"
                        >
                            learn more{" "}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
