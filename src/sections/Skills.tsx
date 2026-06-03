import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    HTML5Icon,
    CSS3Icon,
    JavascriptIcon,
    JavaIcon,
    PythonIcon,
    NodejsIcon,
    ReactjsIcon,
    ExpressjsIcon,
    NextjsIcon,
    FigmaIcon,
    // CanvaIcon,
    MySQLIcon,
    MongoDBIcon,
    PosgreSQLIcon,
    FirebaseIcon,
    SupabaseIcon,
    GitIcon,
    GithubIcon,
    // VercelIcon,
    // RenderIcon,
    // ChatGPTIcon,
    // ClaudeIcon,
    // GeminiIcon,
    N8NIcon,
    CsharpIcon,
    VSCodeIcon,
    CursorIcon,
    AntigravityIcon,
    TypescriptIcon,
    TailwindIcon,
    ViteIcon
    // NotionICon,
    // CplusIcon,
    // PhpIcon,
    // GodotIcon,
    // AsepriteIcon,
    // ArduinoIDEIcon
} from '../components/TechIcons';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-item", {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                force3D: true,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const coreSkills = [
        { name: "Tailwind CSS", icons: () => <TailwindIcon /> },
        { name: "Node.js", icons: () => <NodejsIcon /> },
        { name: "Express.js", icons: () => <ExpressjsIcon /> },
        { name: "Next.js", icons: () => <NextjsIcon /> },
        { name: "Vite", icons: () => <ViteIcon /> },
        { name: "HTML5", icons: () => <HTML5Icon /> },
        { name: "CSS3", icons: () => <CSS3Icon /> },
        { name: "JavaScript", icons: () => <JavascriptIcon /> },
        { name: "TypeScript", icons: () => <TypescriptIcon /> },
        { name: "React.js", icons: () => <ReactjsIcon /> },
    ];

    const strongSkills = [
        { name: "Supabase", icons: () => <SupabaseIcon /> },
        { name: "Firebase", icons: () => <FirebaseIcon /> },
        { name: "Figma", icons: () => <FigmaIcon /> },
        // { name: "Notion", icons: () => <NotionICon /> },
        // { name: "Vercel", icons: () => <VercelIcon /> },
        // { name: "Render", icons: () => <RenderIcon /> },
        { name: "Git", icons: () => <GitIcon /> },
        { name: "Github", icons: () => <GithubIcon /> },
        // { name: "ChatGPT", icons: () => <ChatGPTIcon /> },
        // { name: "Claude", icons: () => <ClaudeIcon /> },
        // { name: "Gemini", icons: () => <GeminiIcon /> },
        { name: "C#", icons: () => <CsharpIcon /> },
        { name: "Java", icons: () => <JavaIcon /> },
        { name: "React Native", icons: () => <ReactjsIcon /> },
    ];

    const familiarSkills = [
        // { name: "Aseprite", icons: () => <AsepriteIcon /> },
        { name: "Python", icons: () => <PythonIcon /> },
        // { name: "C++", icons: () => <CplusIcon /> },
        // { name: "php", icons: () => <PhpIcon /> },
        { name: "MySQL", icons: () => <MySQLIcon /> },
        { name: "MongoDB", icons: () => <MongoDBIcon /> },
        { name: "PostgreSQL", icons: () => <PosgreSQLIcon /> },
        // { name: "Canva", icons: () => <CanvaIcon /> },
        { name: "n8n", icons: () => <N8NIcon /> },
    ];

    return (
        <section ref={sectionRef} id="skills" className="bg-[#101010] text-[#F7F7F7] flex flex-col items-center justify-center min-h-screen w-full overflow-hidden relative py-20 md:py-32 xl:py-40" style={{ contain: 'layout style paint' }}>
            <div ref={contentRef} className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full px-6 md:px-12 xl:px-16 2xl:px-20 flex flex-col items-start relative z-[2]">

                {/* Header */}
                <div className="reveal-item flex flex-col gap-2 mb-6 md:mb-10 xl:mb-14">
                    <span className="font-spline text-xs xl:text-sm uppercase tracking-[0.2em] text-[#707070]">
                        [ SKILLS ]
                    </span>
                    <h2 className="font-spline text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[50px] font-medium tracking-tight text-white mt-2">
                        My Tech Stack
                    </h2>
                    <p className="font-spline text-sm md:text-base xl:text-lg font-light text-[#A0A0A0] max-w-[700px] xl:max-w-[800px] mt-1 leading-relaxed">
                        Grouped by how often I actually use them.
                    </p>
                </div>

                {/* Categories */}
                <div className="w-full flex flex-col gap-10 md:gap-12 xl:gap-14">

                    {/* Category 1: CORE */}
                    <div className="reveal-item flex flex-col gap-3 xl:gap-4">
                        <span className="font-spline text-xs xl:text-sm tracking-[0.15em] text-[#A0A0A0] font-light">
                            CORE — USED DAILY
                        </span>
                        <div className="flex flex-wrap gap-3 xl:gap-4" style={{ contain: 'content' }}>
                            {coreSkills.map((skill, index) => (
                                <div key={index} className="border border-indigo-500/25 bg-indigo-500/5 hover:bg-indigo-500/10 hover:border-indigo-500/40 text-indigo-300/90 rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer">
                                    {skill.icons()}
                                    <span className="font-spline text-sm xl:text-base font-light">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Category 2: STRONG */}
                    <div className="reveal-item flex flex-col gap-3 xl:gap-4">
                        <span className="font-spline text-xs xl:text-sm tracking-[0.15em] text-[#A0A0A0] font-light">
                            STRONG — USED REGULARLY
                        </span>
                        <div className="flex flex-wrap gap-3 xl:gap-4" style={{ contain: 'content' }}>
                            {strongSkills.map((skill, index) => (
                                <div key={index} className="border border-teal-500/25 bg-teal-500/5 hover:bg-teal-500/10 hover:border-teal-500/40 text-teal-300/90 rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer">
                                    {skill.icons()}
                                    <span className="font-spline text-sm xl:text-base font-light">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Category 3: FAMILIAR */}
                    <div className="reveal-item flex flex-col gap-3 xl:gap-4">
                        <span className="font-spline text-xs xl:text-sm tracking-[0.15em] text-[#A0A0A0] font-light">
                            FAMILIAR — USED WHEN NEEDED
                        </span>
                        <div className="flex flex-wrap gap-3 xl:gap-4" style={{ contain: 'content' }}>
                            {familiarSkills.map((skill, index) => (
                                <div key={index} className="border border-yellow-500/25 bg-yellow-500/5 hover:bg-yellow-500/10 hover:border-yellow-500/40 text-yellow-300/90 rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer">
                                    {skill.icons()}
                                    <span className="font-spline text-sm xl:text-base font-light">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Legend */}
                <div className="reveal-item flex gap-6 xl:gap-8 mt-10 md:mt-14 xl:mt-16">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/60 border border-indigo-400/50"></span>
                        <span className="font-spline text-xs xl:text-sm text-[#A0A0A0] font-light">Core</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-500/60 border border-teal-400/50"></span>
                        <span className="font-spline text-xs xl:text-sm text-[#A0A0A0] font-light">Strong</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 border border-yellow-400/50"></span>
                        <span className="font-spline text-xs xl:text-sm text-[#A0A0A0] font-light">Familiar</span>
                    </div>
                </div>

                {/* Development Tools / Environment */}
                <div className="reveal-item flex flex-col gap-3 xl:gap-4 mt-10 md:mt-12 xl:mt-16">
                    <span className="font-spline text-xs xl:text-sm tracking-[0.15em] text-[#A0A0A0] font-light">
                        DEVELOPMENT TOOLS / ENVIRONMENT
                    </span>
                    <div className="flex flex-wrap gap-3 xl:gap-4" style={{ contain: 'content' }}>
                        <div className="border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 text-[#A0A0A0] hover:text-white rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer">
                            <VSCodeIcon />
                            <span className="font-spline text-sm xl:text-base font-light">VSCode</span>
                        </div>
                        <div className="border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 text-[#A0A0A0] hover:text-white rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer">
                            <CursorIcon />
                            <span className="font-spline text-sm xl:text-base font-light">Cursor</span>
                        </div>
                        <div className="border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 text-[#A0A0A0] hover:text-white rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer">
                            <AntigravityIcon />
                            <span className="font-spline text-sm xl:text-base font-light">Antigravity</span>
                        </div>
                        {/* <div className="border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 text-[#A0A0A0] hover:text-white rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer">
                            <GodotIcon />
                            <span className="font-spline text-sm xl:text-base font-light">Godot Engine</span>
                        </div>
                        <div className="border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 text-[#A0A0A0] hover:text-white rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer">
                            <ArduinoIDEIcon />
                            <span className="font-spline text-sm xl:text-base font-light">Arduino IDE</span>
                        </div> */}
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center bg-[#101010] cursor-pointer hover:bg-white/5 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m19 9-7 7-7-7" />
                    </svg>
                </div>
            </div> */}
        </section>
    );
};

export default Skills;