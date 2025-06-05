"use client";

import { motion } from "framer-motion";
import { Award, Lightbulb, Leaf, Shield } from "lucide-react";

interface ValueCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function ValueCard({
    title,
    description,
    icon,
}: ValueCardProps) {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "award":
                return <Award className="h-8 w-8" />;
            case "lightbulb":
                return <Lightbulb className="h-8 w-8" />;
            case "leaf":
                return <Leaf className="h-8 w-8" />;
            case "shield":
                return <Shield className="h-8 w-8" />;
            default:
                return <Award className="h-8 w-8" />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#e9f3fa] p-8 text-center group hover:bg-[#d0e7f7] transition-colors duration-300"
        >
            <div className="flex justify-center mb-4">
                <div className="text-[#2986C7] group-hover:text-[#0C223F] transition-colors duration-300">
                    {getIcon(icon)}
                </div>
            </div>
            <h3 className="text-xl font-light text-neutral-900 mb-3">
                {title}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
