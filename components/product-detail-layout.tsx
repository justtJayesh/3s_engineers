"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Award, DollarSign, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { ProductDetailProps } from "@/data/products-services-data";
// import Image from "next/image";

const getFeatureIcon = (iconType: string) => {
    switch (iconType) {
        case "technical":
            return <Award className="h-6 w-6" />;
        case "cost":
            return <DollarSign className="h-6 w-6" />;
        case "quality":
            return <Star className="h-6 w-6" />;
        default:
            return <CheckCircle className="h-6 w-6" />;
    }
};

interface ProductDetailLayoutProps {
    product: ProductDetailProps;
    type: "product" | "service";
}

export default function ProductDetailLayout({
    product,
    type,
}: ProductDetailLayoutProps) {
    const backUrl = type === "product" ? "/products" : "/services";
    const backText =
        type === "product" ? "Back to Products" : "Back to Services";

    return (
        <div className="bg-neutral-100 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={
                            product.backgroundImage ||
                            "/placeholder.svg?height=1080&width=1920"
                        }
                        alt={product.name}
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
                        <Link
                            href={backUrl}
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            {backText}
                        </Link>
                        <p className="text-white/80 text-sm md:text-base uppercase tracking-wider mb-4 font-light">
                            {product.subtitle}
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
                            {product.name}
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl">
                            {product.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product/Service Overview */}
            <section className="py-24 bg-[#e9f3fa]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-light text-neutral-900 mb-6">
                                {type === "product"
                                    ? "product overview"
                                    : "service overview"}
                            </h2>
                            <p className="text-neutral-700 leading-relaxed text-lg">
                                {product.longDescription}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={
                                    product.productImage ||
                                    "/placeholder.svg?height=500&width=600"
                                }
                                alt={product.name}
                                className="w-full h-auto object-cover rounded-sm"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            key benefits
                        </h2>
                        <p className="text-xl text-neutral-700 font-light">
                            Why choose our {product.name.toLowerCase()}{" "}
                            {type === "product" ? "solution" : "service"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            {product.benefits.column1.map((benefit) => (
                                <div
                                    key={benefit.id}
                                    className="flex items-start space-x-3"
                                >
                                    <CheckCircle className="h-5 w-5 text-[#2986C7] mt-1 flex-shrink-0" />
                                    <span className="text-neutral-700">
                                        {benefit.text}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            {product.benefits.column2.map((benefit) => (
                                <div
                                    key={benefit.id}
                                    className="flex items-start space-x-3"
                                >
                                    <CheckCircle className="h-5 w-5 text-[#2986C7] mt-1 flex-shrink-0" />
                                    <span className="text-neutral-700">
                                        {benefit.text}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-[#e9f3fa]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            why choose steelcorp
                        </h2>
                        <p className="text-xl text-neutral-700 font-light">
                            Our commitment to excellence in every aspect
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {product.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.6,
                                }}
                                className="text-center bg-white p-8 rounded-sm shadow-sm"
                            >
                                <div className="w-16 h-16 bg-[#2986C7] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <div className="text-[#f6f8fa]">
                                        {getFeatureIcon(feature.icon)}
                                    </div>
                                </div>
                                <h3 className="text-xl font-light text-neutral-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#0C223F] to-[#2986C7] text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-light mb-6">
                            ready to get started?
                        </h2>
                        <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
                            Contact our experts to learn more about how{" "}
                            {product.name.toLowerCase()} can benefit your
                            operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-white hover:text-[#2986C7]"
                            >
                                Request Quote
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-white hover:text-[#2986C7]"
                            >
                                Contact Sales
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
