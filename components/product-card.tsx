"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    slug?: string;
}

export default function ProductCard({
    title,
    description,
    image,
    slug,
}: ProductCardProps) {
    const cardContent = (
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
                <h3 className="text-xl font-light text-neutral-900 mb-3">
                    {title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                <div className="text-[#2986C7] inline-flex items-center text-sm group-hover:underline">
                    learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </motion.div>
    );

    if (slug) {
        return <Link href={`/products/${slug}`}>{cardContent}</Link>;
    }

    return cardContent;
}
