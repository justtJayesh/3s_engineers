"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Scissors,
    Flame,
    Paintbrush,
    Lightbulb,
} from "lucide-react";
// import Image from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    icon: string;
}

export default function ServiceCard({
    title,
    description,
    image,
    icon,
}: ServiceCardProps) {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "scissors":
                return <Scissors className="h-6 w-6" />;
            case "flame":
                return <Flame className="h-6 w-6" />;
            case "paintbrush":
                return <Paintbrush className="h-6 w-6" />;
            case "lightbulb":
                return <Lightbulb className="h-6 w-6" />;
            default:
                return <Lightbulb className="h-6 w-6" />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group bg-[#e9f3fa] overflow-hidden"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C223F]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 border-l-4 border-[#2986C7]">
                <div className="flex items-center mb-3">
                    <div className="bg-[#2986C7]/20 p-2 rounded-sm mr-3 text-[#2986C7]">
                        {getIcon(icon)}
                    </div>
                    <h3 className="text-xl font-light text-neutral-900">
                        {title}
                    </h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                <a
                    href="#"
                    className="text-[#6B2326] inline-flex items-center text-sm group-hover:underline"
                >
                    learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </motion.div>
    );
}
