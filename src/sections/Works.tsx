import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-work-item", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".reveal-work-item",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            title: "Simple Weather App",
            description: "A simple weather app built with HTML, CSS, and JavaScript that detects the user's location and displays live weather data. It showcases the core foundations of web development.",
            tech: ["HTML", "CSS", "JavaScript", "API"],
            image: "/projects_image/weather-appImg.png",
            link: "https://github.com/joshiancadiz/weather-app",
            demoLink: "https://simple-weather-app-nu-ashy.vercel.app"
        },
        {
            title: "Woosh Resto Bar",
            description: "A modern, frontend-only website for Woosh Resto Bar built with React.js, designed with a mobile-first approach to ensure a smooth and responsive experience across all devices.",
            tech: ["React.js", "Mobile-First", "Responsive Design"],
            image: "/projects_image/wooshImg.png",
            link: "https://github.com/joshiancadiz/woosh-resto-bar",
            demoLink: "https://woosh-resto-bar.vercel.app"
        },
        {
            title: "Prismo AI",
            description: "Prismo AI is a desktop web application that extracts transcripts from YouTube videos and shorts, then processes them using AI-powered tools",
            tech: ["Next.js", "React", "Supabase", "TypeScript", "AI Integration"],
            image: "/projects_image/prismoImg.png",
            link: "https://github.com/joshiancadiz/prismo",
            demoLink: "https://prismo-ai.vercel.app/"
        },
        {
            title: "Capstone: Smart Aquatic Steward",
            description: "An award-winning IoT system that automates fish tank water quality monitoring, water changes, and feeding schedules using a React Native mobile app.",
            tech: ["React Native", "Firebase", "Mobile App", "IoT"],
            image: "/projects_image/logoNobg.png",
            link: "https://github.com/joshiancadiz/SASapp",
            videoDemoLink: "https://drive.google.com/file/d/12zKr33NQyjNtbN5TSAawjdXOJ-vkJa3h/view",
            bgColor: "bg-[#D7EAF9]"
        },
    ];

    return (
        <section ref={sectionRef} id="works" className="bg-[#F7F7F7] text-[#101010] flex flex-col items-center justify-center min-h-screen w-full overflow-hidden relative py-20 md:py-32">
            <div className="max-w-5xl w-full px-6 md:px-12 flex flex-col items-start relative z-[2]">

                {/* Top Label */}
                <div className="reveal-work-item mb-10 md:mb-12">
                    <span className="font-spline text-xs uppercase tracking-[0.2em] text-[#101010]">
                        [ WORKS ]
                    </span>
                    <h2 className="font-spline text-3xl md:text-4xl font-medium tracking-tight text-[#101010] mt-2">
                        Selected Works
                    </h2>
                    <p className="font-spline text-sm font-light text-[#101010] max-w-[700px] mt-2 leading-relaxed">
                        Here's some of what I've been building
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="reveal-work-item flex flex-col bg-white border border-black/5 rounded-sm overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Image Container */}
                            <div className={`w-full aspect-[16/9] ${project.bgColor || 'bg-neutral-100'} overflow-hidden relative border-b border-black/[0.04] flex items-center justify-center`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full ${project.bgColor ? 'object-contain p-2' : 'object-cover'} group-hover:scale-[1.03] transition-transform duration-500`}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 md:p-6 flex flex-col flex-grow gap-3.5">
                                <h3 className="font-spline text-lg md:text-xl font-semibold tracking-tight text-[#101010]">
                                    {project.title}
                                </h3>

                                <p className="font-spline text-xs md:text-sm font-light text-[#101010] leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {project.tech.map((techItem, idx) => (
                                        <span key={idx} className="font-spline text-[10px] border border-black/10 rounded-full px-2.5 py-0.5 text-[#606060] bg-black/[0.02]">
                                            {techItem}
                                        </span>
                                    ))}
                                </div>

                                {/* GitHub & Demo Buttons */}
                                <div className="pt-3 mt-auto flex flex-col gap-2">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-center font-spline text-xs uppercase tracking-[0.1em] font-medium bg-[#101010] text-white border border-[#101010] hover:bg-transparent hover:text-[#101010] px-4 py-2 transition-all duration-300"
                                        >
                                            Live Demo Link
                                        </a>
                                    )}
                                    {project.videoDemoLink && (
                                        <a
                                            href={project.videoDemoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-center font-spline text-xs uppercase tracking-[0.1em] font-medium bg-[#101010] text-white border border-[#101010] hover:bg-transparent hover:text-[#101010] px-4 py-2 transition-all duration-300"
                                        >
                                            Video Demo Link
                                        </a>
                                    )}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-center font-spline text-xs uppercase tracking-[0.1em] font-medium border border-[#101010] text-[#101010] hover:bg-[#101010] hover:text-white px-4 py-2 transition-all duration-300"
                                    >
                                        View On GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Works;
