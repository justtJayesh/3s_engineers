"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productData } from "@/data/products-services-data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import Image from "next/image";

export default function ProductsPage() {
    const products = Object.values(productData);

    return (
        <div className="bg-neutral-100 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/placeholder.svg?height=600&width=1920"
                        alt="SteelCorp Products"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0C223F]/90 to-[#2986C7]/80"></div>
                </div>

                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <p className="text-white/80 text-sm md:text-base uppercase tracking-wider mb-4 font-light">
                            our products
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                            innovative steel solutions for every industry
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            our product range
                        </h2>
                        <p className="text-xl text-neutral-700 font-light max-w-3xl mx-auto">
                            Discover our comprehensive range of steel products
                            designed for performance and reliability
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                className="group bg-[#e9f3fa] overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={
                                            product.productImage ||
                                            "/placeholder.svg?height=300&width=400"
                                        }
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C223F]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-6 border-l-4 border-[#2986C7]">
                                    <h3 className="text-xl font-light text-neutral-900 mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-neutral-600 text-sm mb-3">
                                        {product.subtitle}
                                    </p>
                                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                                        {product.description}
                                    </p>

                                    <Link
                                        href={`/products/${product.id}`}
                                        className="text-[#2986C7] inline-flex items-center text-sm group-hover:underline"
                                    >
                                        learn more{" "}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
