"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import VideoBackground from "@/components/video-background";
import { useEffect } from "react";
// import Image from "next/image";

// const teamMembers = [
//     {
//         name: "John Smith",
//         position: "Chief Executive Officer",
//         image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//         name: "Sarah Johnson",
//         position: "Chief Technology Officer",
//         image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//         name: "Michael Chen",
//         position: "Chief Operations Officer",
//         image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//         name: "Emily Davis",
//         position: "Chief Financial Officer",
//         image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//         name: "Robert Wilson",
//         position: "VP of Engineering",
//         image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//         name: "Lisa Anderson",
//         position: "VP of Sales",
//         image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//         name: "David Brown",
//         position: "VP of Manufacturing",
//         image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//         name: "Jennifer Taylor",
//         position: "VP of Quality Assurance",
//         image: "/placeholder.svg?height=300&width=300",
//     },
// ];

const values = [
    {
        icon: Award,
        title: "Excellence",
        description: "Pursuing the highest standards in everything we do",
    },
    {
        icon: Users,
        title: "Teamwork",
        description: "Collaborating to achieve extraordinary results",
    },
    {
        icon: Globe,
        title: "Sustainability",
        description: "Building a responsible future for generations",
    },
    {
        icon: TrendingUp,
        title: "Innovation",
        description: "Continuously pushing the boundaries of what's possible",
    },
    {
        icon: Award,
        title: "Integrity",
        description:
            "Operating with honesty and transparency in all our dealings",
    },
];

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-neutral-100 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <VideoBackground videoPath="/videos/about-page.mp4" />
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
                            who we are
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
                            we are relentless in our pursuit of{" "}
                            <span className="font-normal">excellence</span>
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Distinctio quasi beatae, mollitia commodi
                            harum numquam quod aliquam voluptas delectus
                            temporibus, ea recusandae doloribus vel ratione
                            pariatur! Beatae non perferendis ipsum!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Values */}
            <section className="py-24 bg-[#e9f3fa]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            our core values
                        </h2>
                        <p className="text-xl text-neutral-700 font-light max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-[#2986C7] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="h-10 w-10 text-[#f6f8fa]" />
                                </div>
                                <h3 className="text-lg font-light text-neutral-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/placeholder.svg?height=800&width=1920"
                        alt="SteelCorp culture"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0C223F]/90 to-[#2986C7]/80"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                                our pragmatic culture and lean structure keep us
                                ahead of the game
                            </h2>
                            <p className="text-white/90 text-lg font-light mb-8">
                                No matter how frequently or significantly the
                                game is disrupted, our adaptive approach and
                                streamlined operations ensure we remain
                                competitive and innovative in an ever-changing
                                industry.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            {/* <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            our lean and effective structure
                        </h2>
                        <p className="text-xl text-neutral-700 font-light max-w-3xl mx-auto">
                            Meet the experienced leaders driving SteelCorp's
                            vision and strategy
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                className="text-center group"
                            >
                                <div className="relative overflow-hidden mb-4">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-lg font-light text-neutral-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    {member.position}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Innovation Section */}
            <section className="py-24 bg-[#e9f3fa]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-light text-neutral-900 mb-6">
                                Innovation drives organic growth
                            </h2>
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                                Lorem Ipsum comes from sections 1.10.32 and
                                1.10.33 of &ldquo;de Finibus Bonorum et
                                Malorum&ldquo; (The Extremes of Good and Evil)
                                by Cicero, written in 45 BC. Sections 1.10.32
                                and 1.10.33 from &ldquo;de Finibus Bonorum et
                                Malorum&ldquo; by Cicero are also reproduced in
                                their exact original form, accompanied by
                                English versions from the 1914 translation by H.
                                Rackham.
                            </p>
                            <p className="text-neutral-700 leading-relaxed">
                                We at 3S Engineering Solutions are very well
                                aware of the fact that how a small O-Ring or an
                                Oil Seal or Bearing failure can halt the
                                production process & result in huge losses.
                                Frequent failures not only cause financial
                                losses, it also results in mental & physical
                                fatigue of the maintenance staff.
                            </p>
                            <p className="text-neutral-700 leading-relaxed">
                                3S Engineering Solutions is a unique solution
                                provider in the field of Mechanical Maintenance
                                & Operations (MMO) related field. Be it an
                                imported Oil Seal or hard to find imported
                                Bearing or a Chain that elongates very
                                frequently or a belt that doesn&lsquo;t last
                                long enough. We have solutions & products that
                                will definitely solve the problem & help you in
                                getting best service life & uptime of the
                                equipment.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/placeholder.svg?height=500&width=600"
                                alt="Innovation lab"
                                className="w-full h-auto object-cover rounded-sm"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Facts */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            key facts
                        </h2>
                        <p className="text-xl text-neutral-700 font-light">
                            Our journey in numbers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center bg-[#e9f3fa] p-8"
                        >
                            <div className="text-5xl font-light text-[#2986C7] mb-2">
                                1978
                            </div>
                            <div className="text-neutral-700">
                                Year of founding
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-center bg-[#e9f3fa] p-8"
                        >
                            <div className="text-5xl font-light text-[#2986C7] mb-2">
                                71%
                            </div>
                            <div className="text-neutral-700">
                                Market share growth
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-center bg-[#e9f3fa] p-8"
                        >
                            <div className="text-5xl font-light text-[#2986C7] mb-2">
                                125
                            </div>
                            <div className="text-neutral-700">
                                Countries served
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-center bg-[#e9f3fa] p-8"
                        >
                            <div className="text-5xl font-light text-[#2986C7] mb-2">
                                13,124
                            </div>
                            <div className="text-neutral-700">
                                Employees worldwide
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
