"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import VideoBackground from "@/components/video-background";
import ProductCard from "@/components/product-card";
import ServiceCard from "@/components/service-card";
import ValueCard from "@/components/value-card";
import PhotoGallery from "@/components/photo-gallery";
import Link from "next/link";

export default function LandingPage() {
    const { scrollYProgress } = useScroll();
    const heroRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Parallax effects
    const textY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    useEffect(() => {
        setIsLoaded(true);
        window.scrollTo(0, 0);
    }, []);

    const products = [
        {
            id: 1,
            title: "Roller Transmission Chains",
            description:
                "High-quality roller transmission chains for industrial applications. Built to last with premium materials and precise engineering.",
            image: "/images/productImages/rolling-chain.jpg",
        },
        {
            id: 2,
            title: "Conveyor Chains",
            description:
                "Durable conveyor chains designed for heavy-duty applications. Perfect for material handling and industrial automation.",
            image: "/images/productImages/convayer-chain.jpg",
        },
        {
            id: 3,
            title: "Sprockets",
            description:
                "Precision-engineered sprockets for optimal power transmission. Available in various sizes and configurations.",
            image: "/images/productImages/Sprockets.webp",
        },
    ];

    const services = [
        {
            id: 1,
            title: "Custom Engineering Solutions",
            description:
                "Tailored engineering solutions for your unique needs. Our expert team provides comprehensive design and implementation services.",
            image: "/images/servicesImages/Custom-Engineering-Solutions.jpg",
            icon: "lightbulb",
        },
        {
            id: 2,
            title: "Maintenance & Support",
            description:
                "Comprehensive maintenance and support services to keep your equipment running at peak performance. Regular inspections and preventive maintenance.",
            image: "/images/servicesImages/maintenance-support.jpg",
            icon: "flame",
        },
        {
            id: 3,
            title: "Consultation",
            description:
                "Expert consultation for industrial projects. Get professional advice on equipment selection, system optimization, and process improvement.",
            image: "/images/servicesImages/Consultation.jpg",
            icon: "paintbrush",
        },
    ];

    const galleryImages = [
        {
            src: "/images/photoGallery/gallery-image1.jpg",
            alt: "Steel mill production line",
            caption: "State-of-the-art continuous casting facility",
        },
        {
            src: "/images/photoGallery/gallery-2.webp",
            alt: "Molten steel pouring",
            caption: "Precision temperature-controlled pouring process",
        },
        {
            src: "/images/photoGallery/gallery-3.webp",
            alt: "Steel coils",
            caption: "Finished hot-rolled steel coils ready for shipment",
        },
        {
            src: "/images/photoGallery/gallery-4.webp",
            alt: "Quality testing lab",
            caption: "Advanced metallurgical testing laboratory",
        },
        {
            src: "/images/photoGallery/gallery-5.jpg",
            alt: "Aerial view of steel plant",
            caption: "Our flagship manufacturing facility",
        },
        {
            src: "/images/photoGallery/gallery-6.webp",
            alt: "Steel bridge construction",
            caption: "SteelCorp structural steel in action",
        },
        {
            src: "/images/photoGallery/gallery-7.avif",
            alt: "Steel bridge construction",
            caption: "SteelCorp structural steel in action",
        },
        {
            src: "/images/photoGallery/gallery-8.png",
            alt: "Steel bridge construction",
            caption: "SteelCorp structural steel in action",
        },
        {
            src: "/images/photoGallery/gallery-9.jpg",
            alt: "Steel bridge construction",
            caption: "SteelCorp structural steel in action",
        },
        {
            src: "/images/photoGallery/gallery-10.webp",
            alt: "Steel bridge construction",
            caption: "SteelCorp structural steel in action",
        },
    ];

    const values = [
        {
            title: "Excellence",
            description:
                "We pursue the highest standards in everything we do, from production quality to customer service.",
            icon: "award",
        },
        {
            title: "Innovation",
            description:
                "Continuously developing new steel technologies and processes to solve tomorrow's challenges.",
            icon: "lightbulb",
        },
        {
            title: "Sustainability",
            description:
                "Committed to environmentally responsible manufacturing and reducing our carbon footprint.",
            icon: "leaf",
        },
        {
            title: "Safety",
            description:
                "Prioritizing the well-being of our employees, customers, and communities in all operations.",
            icon: "shield",
        },
    ];

    const aboutBulletTitles = [
        {
            id: 1,
            title: "Project Layout for Plant & Machinery, Shed & Civil, Utilities & Process",
        },
        {
            id: 2,
            title: "Project Cost Estimation & Payback Calculation",
        },
        {
            id: 3,
            title: "Basic & Detailed Engineering",
        },
        {
            id: 4,
            title: "Civil & Structural Drawings",
        },
        {
            id: 5,
            title: "Machinery and Utilities Selection",
        },
        {
            id: 6,
            title: "Technical Data, RFQ, BOQ & BOM Preparation",
        },
        {
            id: 7,
            title: "Coordination with OEMs & Material Suppliers",
        },
        {
            id: 8,
            title: "Project Management & Execution",
        },
    ];

    return (
        <div className="bg-neutral-100 min-h-screen">
            <Navbar />

            {/* 1. Hero Section with Video Background */}
            <section
                ref={heroRef}
                className="relative h-screen overflow-hidden"
            >
                <VideoBackground videoPath="/videos/hero-section-video.mp4" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0C223F]/90 to-[#2986C7]/80 z-10"></div>

                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ y: textY }}
                        className="max-w-3xl"
                    >
                        <p className="text-white/80 text-sm md:text-base uppercase tracking-wider mb-2 font-light">
                            forging the future of steel manufacturing
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
                            you will find{" "}
                            <b>
                                <u> 3S Engineers</u>
                            </b>{" "}
                            where{" "}
                            <span className="font-normal">
                                strength meets innovation
                            </span>{" "}
                            and industrial
                            <span className="font-normal">
                                {" "}
                                excellence is forged
                            </span>
                        </h1>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="inline-flex"
                        >
                            <Button
                                variant="outline"
                                className="mt-6 rounded-none border-white/30 text-white hover:bg-white/10 hover:text-white group"
                            >
                                <Play className="mr-2 h-4 w-4" /> our story
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. About Section */}
            <section className="py-24 bg-[#e9f3fa]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-4xl font-light text-neutral-900 mb-6">
                                about 3S Engineers
                            </h2>
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                We at 3S introduce ourselves as Economical and
                                Sustainable Solution providers. 3S is a pool of
                                Industry Experts, Professionals, and Experienced
                                Personnel having experience from EAF, Induction
                                Furnace, Rolling Mill, CCM, FES, AOD, LRF, EOT
                                Cranes, Transformer Manufacturing Companies and
                                reputed plants to provide the best Service,
                                Solution, and Satisfactory Results for the Steel
                                Plants. OUR SERVICES.
                            </p>
                            {aboutBulletTitles?.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <li>{item.title}</li>
                                    </div>
                                );
                            })}
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="bg-[#e9f3fa] p-6">
                                    <div className="text-[#2986C7] text-3xl font-light mb-2">
                                        45+
                                    </div>
                                    <div className="text-neutral-700">
                                        Years of experience
                                    </div>
                                </div>
                                <div className="bg-[#e9f3fa] p-6">
                                    <div className="text-[#2986C7] text-3xl font-light mb-2">
                                        12
                                    </div>
                                    <div className="text-neutral-700">
                                        Global facilities
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1583215047909-9534ce8813c9?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="SteelCorp Manufacturing Facility"
                                    className="w-full h-auto object-cover rounded-sm"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-[#2986C7] p-6 max-w-xs">
                                    <p className="text-[#e9f3fa] font-light italic">
                                        "Our mission is to forge the future
                                        through innovative steel solutions that
                                        build a stronger, more sustainable
                                        world."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Products and Services Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            products & services
                        </h2>
                        <p className="text-xl text-neutral-700 font-light max-w-3xl mx-auto">
                            Comprehensive steel solutions engineered for
                            performance and precision
                        </p>
                    </div>

                    <Tabs defaultValue="products" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="bg-[#e9f3fa]">
                                <TabsTrigger
                                    value="products"
                                    className="text-lg px-8 py-3 font-light"
                                >
                                    Products
                                </TabsTrigger>
                                <TabsTrigger
                                    value="services"
                                    className="text-lg px-8 py-3 font-light"
                                >
                                    Services
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="products" className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        title={product.title}
                                        description={product.description}
                                        image={product.image}
                                    />
                                ))}
                                <div className="bg-[#e9f3fa] p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-[#e9f3fa]/50 transition-colors duration-300">
                                    <div className="text-[#2986C7] mb-4">
                                        <ChevronRight className="h-12 w-12" />
                                    </div>
                                    <Link href="/products">
                                        <h3 className="text-xl font-light text-neutral-900 mb-3 hover:underline">
                                            View All Products
                                        </h3>
                                    </Link>
                                    <p className="text-neutral-600 text-sm">
                                        Explore our complete range of steel
                                        products and solutions
                                    </p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="services" className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {services.map((service) => (
                                    <ServiceCard
                                        key={service.id}
                                        title={service.title}
                                        description={service.description}
                                        image={service.image}
                                        icon={service.icon}
                                    />
                                ))}
                                <div className="bg-[#e9f3fa] p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-[#e9f3fa]/50 transition-colors duration-300">
                                    <div className="text-[#2986C7] mb-4">
                                        <ChevronRight className="h-12 w-12" />
                                    </div>
                                    <Link href="/services">
                                        <h3 className="text-xl font-light text-neutral-900 mb-3 hover:underline">
                                            View All Services
                                        </h3>
                                    </Link>
                                    <p className="text-neutral-600 text-sm">
                                        Discover our comprehensive steel
                                        processing and consulting services
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* 4. Photo Gallery Section */}
            <section className="py-24 bg-[#e9f3fa]/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            photo gallery
                        </h2>
                        <p className="text-xl text-neutral-700 font-light max-w-3xl mx-auto">
                            Explore our facilities and see our steel
                            manufacturing excellence in action
                        </p>
                    </div>

                    <PhotoGallery images={galleryImages} />
                </div>
            </section>

            {/* 5. Our Values Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            our values
                        </h2>
                        <p className="text-xl text-neutral-700 font-light max-w-3xl mx-auto">
                            The principles that guide everything we do at
                            SteelCorp
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <ValueCard
                                key={index}
                                title={value.title}
                                description={value.description}
                                icon={value.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Footer (unchanged) */}
            <Footer />
        </div>
    );
}
