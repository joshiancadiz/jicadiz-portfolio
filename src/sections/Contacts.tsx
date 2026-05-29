import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("cadiz.joshuaiang@gmail.com").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-contact-item", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contacts"
            className="bg-[#101010] text-[#F7F7F7] flex flex-col items-center w-full overflow-hidden relative py-20 md:py-32"
        >
            <div className="max-w-5xl w-full px-6 md:px-12 flex flex-col items-start z-[2] relative">
                {/* Top Label / Title */}
                <div className="reveal-contact-item mb-4 md:mb-6">
                    <span className="font-spline text-xs uppercase tracking-[0.2em] text-[#707070]">
                        [ CONTACTS ]
                    </span>
                    <h2 className="font-spline text-3xl md:text-4xl font-medium tracking-tight text-[#F7F7F7] mt-2">
                        Get In Touch
                    </h2>
                    <p className="font-spline text-sm font-light text-[#a0a0a0] max-w-[700px] mt-2 leading-relaxed">
                        Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
                    </p>
                </div>

                {/* Links */}
                <div className="w-full flex flex-col items-start mt-8">
                    <div className="flex flex-col gap-6 w-full md:w-auto relative z-10">
                        {/* Gmail Copy Button */}
                        <button
                            onClick={handleCopyEmail}
                            className="reveal-contact-item flex items-center gap-4 py-2 w-fit text-left cursor-pointer focus:outline-none group"
                        >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#F7F7F7" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="font-spline text-[10px] uppercase tracking-[0.1em] font-medium" style={{ color: '#F7F7F7' }}>GMAIL</span>
                                    {copied && (
                                        <span className="font-spline text-[9px] uppercase tracking-[0.05em] font-semibold text-[#4ade80] animate-pulse">
                                            (Copied!)
                                        </span>
                                    )}
                                </div>
                                <span className="font-spline text-sm md:text-[16px] font-semibold tracking-tight transition-colors group-hover:text-white" style={{ color: '#F7F7F7' }}>
                                    cadiz.joshuaiang@gmail.com
                                </span>
                            </div>
                        </button>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/joshua-ian-cadiz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-contact-item flex items-center gap-4 py-2 w-fit group"
                        >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#F7F7F7" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-spline text-[10px] uppercase tracking-[0.1em] font-medium" style={{ color: '#F7F7F7' }}>LINKEDIN</span>
                                <span className="font-spline text-sm md:text-[16px] font-semibold tracking-tight" style={{ color: '#F7F7F7' }}>
                                    in/joshua-ian-cadiz
                                </span>
                            </div>
                        </a>

                        {/* GitHub Link */}
                        <a
                            href="https://github.com/joshiancadiz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-contact-item flex items-center gap-4 py-2 w-fit group"
                        >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#F7F7F7" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-spline text-[10px] uppercase tracking-[0.1em] font-medium" style={{ color: '#F7F7F7' }}>GITHUB</span>
                                <span className="font-spline text-sm md:text-[16px] font-semibold tracking-tight" style={{ color: '#F7F7F7' }}>
                                    github.com/joshiancadiz
                                </span>
                            </div>
                        </a>

                        {/* CV Link */}
                        <a
                            href="/cv portfolio.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-contact-item cv-link flex items-center gap-4 py-2 w-fit group"
                        >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#F7F7F7] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-spline text-[10px] uppercase tracking-[0.1em] font-medium" style={{ color: '#F7F7F7' }}>RESUME</span>
                                <span className="font-spline text-sm md:text-[16px] font-semibold tracking-tight" style={{ color: '#F7F7F7' }}>
                                    view my cv
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
