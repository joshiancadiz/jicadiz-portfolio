import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutImage from '../assets/about-me.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-item", {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 1.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="bg-[#101010] text-[#F7F7F7] flex flex-col items-center justify-center min-h-screen w-full overflow-hidden relative py-20 md:py-32">
            <div className="max-w-5xl w-full px-6 md:px-12 flex flex-col items-start relative z-[2]">

                {/* Top Label */}
                <div className="reveal-item mb-6 md:mb-10">
                    <span className="font-spline text-xs uppercase tracking-[0.2em] text-[#707070]">
                        [ ABOUT ]
                    </span>
                </div>

                <div ref={contentRef} className="w-full flex flex-col md:flex-row gap-12 md:gap-20 items-start">

                    {/* Left side: Avatar Card & Name */}
                    <div className="reveal-item flex flex-col items-start gap-3">
                        <div className="w-[180px] h-[240px] border border-white/10 flex items-center justify-center bg-white/[0.02] overflow-hidden">
                            <img
                                src={AboutImage}
                                alt="About Me"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="font-spline font-light text-[15px] text-[#fff] text-left tracking-wide w-[180px]">
                            Hello! I am <br />
                            <span className="whitespace-nowrap">Joshua Ian Cadiz</span>
                        </p>
                        <a
                            href="/cv portfolio.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cv-link group font-spline text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-[#A0A0A0] border border-white/10 hover:border-white/40 hover:text-white hover:bg-white/5 rounded-full px-4 py-2 md:px-5 md:py-2.5 transition-all duration-400 ease-out flex items-center gap-2 w-fit mt-4"
                        >
                            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            View my CV
                        </a>
                    </div>

                    {/* Right side: Bio details */}
                    <div className="flex-1 flex flex-col gap-6 md:gap-8">
                        <div className="reveal-item flex flex-col gap-3">
                            <p className="font-spline text-sm text-[#A0A0A0] tracking-wide">
                                Front-End Software Engineer
                            </p>
                            <h2 className="font-spline text-3xl md:text-4xl lg:text-[40px] font-medium tracking-tight text-white leading-tight">
                                I build interfaces that<br />are fast, clean, and easy to use.
                            </h2>
                        </div>

                        <div className="reveal-item flex flex-col gap-4 font-spline text-sm md:text-[15px] font-light text-[#A0A0A0] leading-relaxed max-w-[650px]">
                            <p>
                                I'm a Software Engineer specialized in <span className="text-white font-medium">Front-End Development</span>, turning complex workflows into simple, intuitive web experiences.
                            </p>
                            <p>
                                I've built and maintained client websites and developed full-stack tools that streamline real workflows, always focused on reducing friction for the end user.
                            </p>
                        </div>

                        {/* Tags / Pills */}
                        <div className="reveal-item flex flex-wrap gap-3">
                            <span className="font-spline text-xs border border-white/10 rounded-full px-4 py-2 text-[#A0A0A0] bg-white/[0.01]">
                                Front-End Focused
                            </span>
                            <span className="font-spline text-xs border border-white/10 rounded-full px-4 py-2 text-[#A0A0A0] bg-white/[0.01]">
                                React / Next.js
                            </span>
                            <span className="font-spline text-xs border border-white/10 rounded-full px-4 py-2 text-[#A0A0A0] bg-white/[0.01]">
                                Problem Solver
                            </span>
                        </div>
                    </div>

                </div>

                {/* Experience Section */}
                <div className="w-full flex flex-col md:flex-row gap-12 md:gap-20 items-start mt-16 md:mt-20">

                    {/* Left side: Label aligned with image */}
                    <div className="reveal-item flex flex-col gap-1 w-[180px] shrink-0">
                        <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-spline text-sm md:text-[15px] font-medium text-white tracking-wide">
                                My Experience
                            </span>
                        </div>
                        <span className="font-spline text-sm text-[#A0A0A0] pl-5.5">
                            2025-2026
                        </span>
                    </div>

                    {/* Right side: Experience details */}
                    <div className="flex-1 flex flex-col gap-6 md:gap-8">
                        <div className="reveal-item flex flex-col gap-3">
                            <h3 className="font-spline text-xl md:text-2xl font-medium tracking-tight text-white leading-tight">
                                Full-Stack Engineer Intern
                            </h3>
                            <p className="font-spline text-xs md:text-sm text-[#A0A0A0] tracking-wide">
                                at VIP Scale, Iloilo City, Philippines
                            </p>
                        </div>
                        <div className="reveal-item flex flex-col gap-4 font-spline text-sm md:text-[15px] font-light text-[#A0A0A0] leading-relaxed max-w-[650px]">
                            <p>
                                Built and maintained websites for international clients using Kajabi and GoHighLevel, leveraging AI tools to generate and deliver tailored content that supported their business goals.
                            </p>
                            <p>
                                Developed full-stack applications using React.js and integrating with automation tools such as n8n to connect APIs and services to automate content generation workflows, driving significant improvements in business efficiency.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
                </div>
            </div> */}
        </section>
    );
};

export default About;
