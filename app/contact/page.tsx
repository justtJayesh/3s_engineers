"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const locations = [
    {
        id: 1,
        name: "SteelCorp Headquarters",
        country: "Netherlands",
        business: "Corporate",
    },
    {
        id: 2,
        name: "SteelCorp Manufacturing",
        country: "Germany",
        business: "Production",
    },
    {
        id: 3,
        name: "SteelCorp Americas",
        country: "United States",
        business: "Sales",
    },
    {
        id: 4,
        name: "SteelCorp Asia Pacific",
        country: "Singapore",
        business: "Distribution",
    },
];

export default function ContactPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBusiness, setSelectedBusiness] = useState("All businesses");
    const [selectedCountry, setSelectedCountry] = useState("All countries");

    const filteredLocations = locations.filter((location) => {
        return (
            location.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedBusiness === "All businesses" ||
                location.business === selectedBusiness) &&
            (selectedCountry === "All countries" ||
                location.country === selectedCountry)
        );
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-neutral-100 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/placeholder.svg?height=1080&width=1920"
                        alt="SteelCorp contact"
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
                            contact
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
                            stimulating knowledge sharing, fast learning and{" "}
                            <span className="font-normal">
                                entrepreneurship
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-24 bg-[#e9f3fa]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Company Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-light text-neutral-900 mb-8">
                                3S Engineers
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-light text-neutral-900 mb-2">
                                        Pune Office
                                    </h3>
                                    <div className="text-neutral-700 space-y-1">
                                        <p>Office No. 206,</p>
                                        <p>
                                            Park Plaza Business Center, Porwal
                                            Road,
                                        </p>
                                        <p>Pune, Maharashtra 411047.</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-neutral-700 space-y-1">
                                        <p>PO Box 1218</p>
                                        <p>NL-3500 BE Utrecht</p>
                                    </div>
                                </div>

                                <div className="flex space-x-4 pt-6">
                                    {/* <Button
                                        variant="outline"
                                        className="bg-yellow-100/50 border-yellow-300 text-neutral-700"
                                    >
                                        send message
                                    </Button> */}
                                    <Button
                                        variant="outline"
                                        className="bg-[#e9f3fa] border-[#2986C7] text-[#0C223F]"
                                    >
                                        +91 7028345258
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 rounded-sm shadow-sm"
                        >
                            <h3 className="text-2xl font-light text-neutral-900 mb-6">
                                get in touch
                            </h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-neutral-700 mb-2">
                                            First Name
                                        </label>
                                        <Input className="border-neutral-300" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-neutral-700 mb-2">
                                            Last Name
                                        </label>
                                        <Input className="border-neutral-300" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-neutral-700 mb-2">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        className="border-neutral-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-neutral-700 mb-2">
                                        Company
                                    </label>
                                    <Input className="border-neutral-300" />
                                </div>
                                <div>
                                    <label className="block text-sm text-neutral-700 mb-2">
                                        Message
                                    </label>
                                    <Textarea
                                        rows={4}
                                        className="border-neutral-300"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#2986C7] text-white py-2 px-4 hover:bg-[#0C223F] transition-colors"
                                >
                                    submit
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Travel Directions */}
            {/* <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            travel directions
                        </h2>
                    </div>

                    <Tabs defaultValue="train" className="w-full">
                        <TabsList className="bg-yellow-100/50 mb-8">
                            <TabsTrigger value="train">by train</TabsTrigger>
                            <TabsTrigger value="bicycle">
                                by bicycle
                            </TabsTrigger>
                            <TabsTrigger value="car">by car</TabsTrigger>
                        </TabsList>

                        <TabsContent value="train" className="space-y-6">
                            <div className="bg-yellow-50/50 p-6 rounded-sm">
                                <h3 className="text-lg font-light text-neutral-900 mb-4">
                                    Utrecht Central Station
                                </h3>
                                <p className="text-neutral-700 leading-relaxed">
                                    Utrecht Central Station provides train
                                    connections in all directions, every 6
                                    minutes a train departs from Schiphol to
                                    Utrecht Central Station. It is only a short
                                    walk from the train platform to our office.
                                    When arriving by train, you will find the
                                    nearest entrance of World Trade Center
                                    Utrecht on platform-level. Report to the
                                    reception on the second floor.
                                </p>
                                <p className="text-neutral-700 mt-4">
                                    To plan your journey, please check{" "}
                                    <a
                                        href="#"
                                        className="text-yellow-600 hover:underline"
                                    >
                                        ns.nl/en
                                    </a>
                                </p>
                            </div>
                        </TabsContent>

                        <TabsContent value="bicycle" className="space-y-6">
                            <div className="bg-yellow-50/50 p-6 rounded-sm">
                                <h3 className="text-lg font-light text-neutral-900 mb-4">
                                    Bicycle Access
                                </h3>
                                <p className="text-neutral-700 leading-relaxed">
                                    Utrecht is a bicycle-friendly city with
                                    extensive cycling infrastructure. Our office
                                    is easily accessible by bike with secure
                                    parking facilities available in the
                                    building's basement.
                                </p>
                            </div>
                        </TabsContent>

                        <TabsContent value="car" className="space-y-6">
                            <div className="bg-yellow-50/50 p-6 rounded-sm">
                                <h3 className="text-lg font-light text-neutral-900 mb-4">
                                    Parking Information
                                </h3>
                                <p className="text-neutral-700 leading-relaxed">
                                    Limited parking is available in the WTC
                                    Utrecht parking garage. We recommend using
                                    public transportation when possible. For GPS
                                    navigation, use the address: Stadsplateau
                                    18, 3521 AZ Utrecht.
                                </p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section> */}

            {/* Search Locations */}
            <section className="py-24 bg-[#e9f3fa]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12">
                        <h2 className="text-4xl font-light text-neutral-900 mb-4">
                            search locations
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Search Filters */}
                        {/* <div className="space-y-6">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                                <Input
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="pl-10 border-neutral-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-neutral-700 mb-2">
                                    filter by
                                </label>
                                <div className="space-y-3">
                                    <Select
                                        value={selectedBusiness}
                                        onValueChange={setSelectedBusiness}
                                    >
                                        <SelectTrigger className="border-neutral-300">
                                            <SelectValue placeholder="select business" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="All businesses">
                                                All businesses
                                            </SelectItem>
                                            <SelectItem value="Corporate">
                                                Corporate
                                            </SelectItem>
                                            <SelectItem value="Production">
                                                Production
                                            </SelectItem>
                                            <SelectItem value="Sales">
                                                Sales
                                            </SelectItem>
                                            <SelectItem value="Distribution">
                                                Distribution
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Select
                                        value={selectedCountry}
                                        onValueChange={setSelectedCountry}
                                    >
                                        <SelectTrigger className="border-neutral-300">
                                            <SelectValue placeholder="select country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="All countries">
                                                All countries
                                            </SelectItem>
                                            <SelectItem value="Netherlands">
                                                Netherlands
                                            </SelectItem>
                                            <SelectItem value="Germany">
                                                Germany
                                            </SelectItem>
                                            <SelectItem value="United States">
                                                United States
                                            </SelectItem>
                                            <SelectItem value="Singapore">
                                                Singapore
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full mt-4 text-yellow-600 border-yellow-300"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedBusiness("All businesses");
                                        setSelectedCountry("All countries");
                                    }}
                                >
                                    clear all filters
                                </Button>
                            </div>

                            <div className="text-sm text-neutral-600">
                                {filteredLocations.length} locations found
                            </div>
                        </div> */}

                        {/* Map Placeholder */}
                        <div className="lg:col-span-3">
                            <div className="bg-neutral-200 h-96 rounded-sm flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                                    <p className="text-neutral-600">
                                        Interactive map would be displayed here
                                    </p>
                                    <p className="text-sm text-neutral-500 mt-2">
                                        Showing {filteredLocations.length}{" "}
                                        locations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Results */}
                    {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredLocations.map((location) => (
                            <motion.div
                                key={location.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white p-6 rounded-sm shadow-sm"
                            >
                                <h3 className="text-lg font-light text-neutral-900 mb-2">
                                    {location.name}
                                </h3>
                                <p className="text-neutral-600 text-sm mb-1">
                                    {location.country}
                                </p>
                                <p className="text-neutral-600 text-sm mb-4">
                                    {location.business}
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-yellow-600 border-yellow-300"
                                >
                                    View Details
                                </Button>
                            </motion.div>
                        ))}
                    </div> */}
                </div>
            </section>

            {/* Speak Up Section */}
            <section className="py-24 bg-gradient-to-r from-[#0C223F] to-[#2986C7] text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-light mb-6">speak up!</h2>
                        <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
                            Should you become aware of any conduct that you
                            believe violates our Code of Conduct, please speak
                            up!
                        </p>
                        <Button
                            variant="outline"
                            className="bg-transparent border-white text-white hover:bg-white hover:text-[#2986C7]"
                        >
                            speak up!
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
