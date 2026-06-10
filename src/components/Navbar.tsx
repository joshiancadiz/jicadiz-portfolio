import { useState, useEffect, useRef } from 'react';
import { getPhilippinesTime } from '../utils/time';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#works', label: 'Works' },
    { href: '#contacts', label: 'CONTACTS' },
];

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(getPhilippinesTime());
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(getPhilippinesTime());
        }, 1000);

        const ctx = gsap.context(() => {
            gsap.set(navRef.current, { color: '#ffffff' });
            gsap.to(navRef.current, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: 80,
                    toggleActions: 'play none none reverse',
                },
                color: '#ffffff',
                backgroundColor: 'transparent',
                backdropFilter: 'none',
                duration: 0.3,
                ease: 'power2.inOut',
            });
        }, navRef);

        return () => {
            clearInterval(timer);
            ctx.revert();
        };
    }, []);

    // Animate overlay open/close
    useEffect(() => {
        if (!overlayRef.current || !linksRef.current) return;

        const linkItems = linksRef.current.querySelectorAll('.mobile-nav-link');

        if (menuOpen) {
            // Lock body scroll
            document.body.style.overflow = 'hidden';

            gsap.to(overlayRef.current, {
                opacity: 1,
                pointerEvents: 'auto',
                duration: 0.4,
                ease: 'power2.out',
            });

            gsap.from(linkItems, {
                y: 40,
                opacity: 0,
                stagger: 0.08,
                duration: 0.5,
                delay: 0.15,
                ease: 'power3.out',
            });
        } else {
            document.body.style.overflow = '';

            gsap.to(overlayRef.current, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.3,
                ease: 'power2.in',
            });
        }
    }, [menuOpen]);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full z-50 text-white mix-blend-difference opacity-0 navbar"
            >
                <div className="flex items-center justify-between h-20 px-[32px] xl:px-[64px] xl:h-24">
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <h1 className="text-2xl xl:text-3xl font-bold tracking-[-1px] font-sofia">
                                JI CADIZ
                            </h1>
                        </a>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm xl:text-base uppercase transition-opacity duration-300 hover:opacity-70 font-spline"
                            >
                                [ {link.label} ]
                            </a>
                        ))}
                    </div>

                    {/* Desktop Time */}
                    <div className="hidden md:block flex-shrink-0">
                        <div className="text-sm xl:text-base font-medium uppercase font-spline">
                            [ {currentTime} ]
                        </div>
                    </div>

                    {/* Mobile Burger Button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[6px] cursor-pointer"
                        aria-label="Open menu"
                    >
                        <span className="block w-6 h-[2px] bg-current transition-all duration-300" />
                        <span className="block w-6 h-[2px] bg-current transition-all duration-300" />
                        <span className="block w-4 h-[2px] bg-current transition-all duration-300 self-end" />
                    </button>
                </div>
            </nav>

            {/* Mobile Fullscreen Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[100] opacity-0 pointer-events-none md:hidden"
                style={{
                    background: 'rgba(10, 10, 10, 0.85)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                }}
            >
                {/* Close Button */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-[32px] w-10 h-10 flex items-center justify-center cursor-pointer z-10"
                    aria-label="Close menu"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <line x1="4" y1="4" x2="20" y2="20" />
                        <line x1="20" y1="4" x2="4" y2="20" />
                    </svg>
                </button>

                {/* Nav Links */}
                <div
                    ref={linksRef}
                    className="flex flex-col items-center justify-center h-full gap-8 px-8"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="mobile-nav-link text-xl uppercase tracking-[0.15em] font-spline text-white/90 hover:text-white transition-colors duration-300"
                        >
                            [ {link.label} ]
                        </a>
                    ))}

                    {/* Time display on mobile overlay */}
                    <div className="mt-8 text-xs font-medium uppercase font-spline text-white/40 tracking-[0.15em]">
                        [ {currentTime} ]
                    </div>
                </div>
            </div>
        </>
    );
};



export default Navbar;
