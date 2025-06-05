"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GalleryImage {
    src: string;
    alt: string;
    caption: string;
}

interface PhotoGalleryProps {
    images: GalleryImage[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Create an infinite loop by tripling the images
    // const infiniteImages = [...images, ...images, ...images];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                // Reset to the middle set when we reach the end of the first or last set
                if (nextIndex >= images.length * 2) {
                    return images.length; // Jump back to middle set
                }
                return nextIndex;
            });
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="flex"
                animate={{
                    x: `${-currentIndex * (100 / 3)}%`,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                style={{ width: `${images.length * (100 / 3)}%` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 px-2"
                        style={{ width: `${100 / images.length}%` }}
                    >
                        <div className="relative group">
                            <div className="aspect-[4/3] overflow-hidden rounded-sm">
                                <img
                                    src={
                                        image.src ||
                                        "/placeholder.svg?height=400&width=600"
                                    }
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0C223F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-sm">
                                <p className="text-white text-sm">
                                    {image.caption}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index + images.length)} // Set to middle set
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            currentIndex % images.length === index
                                ? "bg-[#2986C7]"
                                : "bg-[#d0e7f7]"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
