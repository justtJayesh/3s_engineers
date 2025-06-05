"use client";

import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
    videoPath: string;
}

export default function VideoBackground({ videoPath }: VideoBackgroundProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
        >
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
