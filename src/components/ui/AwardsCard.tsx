import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export interface AwardsCardProps {
    image: string;
    title: string;
    institution: string;
    year: string | number;
    alt?: string;
    className?: string;
}

export const AwardsCard: React.FC<AwardsCardProps> = ({
    image,
    title,
    institution,
    year,
    alt,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = () => setIsOpen(true);
    const closeLightbox = useCallback(() => setIsOpen(false), []);

    // Lock body scroll & listen for Escape key when lightbox is open
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, closeLightbox]);

    return (
        <>
            {/* Card */}
            <div
                onClick={openLightbox}
                className={`group flex flex-row items-center bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden h-[96px] md:h-[112px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${className}`}
            >
                {/* Image Container */}
                <div className="relative h-full aspect-[4/3] shrink-0 overflow-hidden bg-white/[0.01] border-r border-white/10 flex items-center justify-center">
                    <img
                        src={image}
                        alt={alt || title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                {/* Content Container */}
                <div className="p-4 md:p-5 flex flex-col justify-center min-w-0 flex-grow gap-1">
                    <h4 className="font-spline text-xs sm:text-sm md:text-base font-medium tracking-tight text-white leading-snug line-clamp-2">
                        {title}
                    </h4>
                    <div className="font-spline text-[10px] sm:text-xs md:text-sm text-[#A0A0A0] tracking-wide font-light">
                        {institution}, {year}
                    </div>
                </div>
            </div>

            {/* Lightbox Overlay */}
            {isOpen && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 animate-[fadeIn_200ms_ease-out]"
                    onClick={closeLightbox}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/70 hover:text-white hover:border-white/40 hover:bg-black/60 transition-all duration-200 cursor-pointer"
                        aria-label="Close lightbox"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Image + Caption */}
                    <div
                        className="relative z-10 flex flex-col items-center gap-4 max-w-4xl w-full animate-[scaleIn_250ms_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={image}
                            alt={alt || title}
                            className="max-h-[80vh] w-auto max-w-full object-contain rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                        />
                        <div className="text-center">
                            <p className="font-spline text-sm md:text-base font-medium text-white tracking-tight">
                                {title}
                            </p>
                            <p className="font-spline text-xs md:text-sm text-[#A0A0A0] tracking-wide font-light mt-1">
                                {institution}, {year}
                            </p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export const AWARDS_DATA = [
    {
        image: "/awards-image/ux-cert.png",
        title: "Foundations of User Exprience Design",
        institution: "Google",
        year: "2024",
    },
    {
        image: "/awards-image/java-1st-runner-up.jpg",
        title: "1st Runner-Up, Java Programming Competition",
        institution: "Western Institute of Technology",
        year: "2025",
    },
    {
        image: "/awards-image/web-dev.jpg",
        title: "Web Development",
        institution: "Sololearn",
        year: "2026",
    },
    {
        image: "/awards-image/programmer-of-the-year.jpg",
        title: "Programmer of the Year 2026",
        institution: "Western Institute of Technology",
        year: "2026",
    },
    {
        image: "/awards-image/best-capstone.jpg",
        title: "Best in Thesis — Smart Aquatic Steward",
        institution: "Western Institute of Technology",
        year: "2026",
    }
];

