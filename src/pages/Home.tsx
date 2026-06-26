import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImg from '../assets/hero.webp';
import ArrowIcon from '../components/ui/ArrowIcon';

const titleWords = ["FRONT-END", "ENGINEER"];

const Home = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const cvLinkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!titleRef.current) return;

        const charSpans = titleRef.current.querySelectorAll('.char');

        const animate = () => {
            const tl = gsap.timeline();
            const isMobile = window.innerWidth < 768;

            if (!isMobile) {
                tl.from(charSpans, {
                    yPercent: -100,
                    duration: 1,
                    stagger: {
                        amount: 1,
                        from: "center"
                    },
                    ease: "power4.out",
                });
            }

            tl.from([imageRef.current, subtitleRef.current, cvLinkRef.current].filter(Boolean), {
                yPercent: -100,
                autoAlpha: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
            }, isMobile ? 0 : "-=0.5") // Start slightly before text finishes for smoothness
                .to(".navbar", {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                });
        };

        if (document.readyState === 'complete') {
            animate();
        } else {
            window.addEventListener('load', animate);
            return () => window.removeEventListener('load', animate);
        }
    }, []);

    return (
        <section id="home" className="text-[#101010] mt-[80px] pt-[50px] flex flex-col items-center justify-start md:justify-center min-h-[calc(100vh-80px)] w-full">
            <div className="w-full flex flex-col items-center justify-center overflow-hidden px-[32px] md:items-center xl:px-[64px]">
                <div className="flex flex-col items-center w-full md:block md:w-fit md:mx-auto relative z-[2]">
                    {/* Title */}
                    <div className="order-1 relative z-[2]">
                        <h1 ref={titleRef} className="text-[23.5vw] md:text-[13.3vw] xl:text-[12.5vw] leading-[0.8] font-black font-sofia tracking-[-0.06em] flex flex-col md:flex-row items-center justify-center gap-y-0 md:gap-y-0 md:gap-x-[0.04em] whitespace-nowrap">
                            {titleWords.map((word, wordIndex) => (
                                <span key={wordIndex} className="flex">
                                    {word.split("").map((char, index) => (
                                        <span
                                            key={index}
                                            className="char inline-block"
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </span>
                            ))}
                        </h1>
                    </div>

                    {/* Location */}
                    <p ref={subtitleRef} className="order-2 w-full md:mt-[-10px] md:relative md:z-[2] text-[13px] md:text-[14px] xl:text-[16px] font-sofia font-bold uppercase tracking-[6px] md:tracking-[10px] xl:tracking-[14px] opacity-80 text-center md:text-right mt-2">
                        BASED IN PH, ILOILO
                    </p>

                    {/* Image Container */}
                    <div className="order-3 md:order-none w-full flex flex-col items-center justify-center py-2 mt-2 md:mt-[-60px] md:mb-[20px] xl:mt-[-80px] xl:mb-[30px] relative z-[1]">
                        <div className="overflow-hidden">
                            <img
                                ref={imageRef}
                                width={1126}
                                height={868}
                                src={heroImg}
                                fetchPriority='high'
                                alt="Joshua Ian Cadiz — Front-End Engineer"
                                className="w-[300px] md:w-[500px] xl:w-[580px] 2xl:w-[640px] object-contain"
                            />
                        </div>
                    </div>

                    {/* CV Link container */}
                    <div ref={cvLinkRef} className="order-4 md:order-none w-full flex justify-center mt-2 md:mt-4 md:mb-[80px] xl:mt-6 xl:mb-[100px]">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cv-link group font-spline text-[11px] md:text-[12px] xl:text-[13px] font-medium uppercase tracking-[0.2em] text-[#101010] border border-[#101010]/20 hover:border-[#101010]/60 hover:bg-[#101010] hover:text-[#F7F7F7] rounded-full px-6 py-3 md:px-8 md:py-3.5 xl:px-10 xl:py-4 transition-all duration-400 ease-out flex items-center gap-3"
                        >
                            <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            View my CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
