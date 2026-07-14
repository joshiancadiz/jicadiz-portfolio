
import SkillList from '../components/ui/SkillList';
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
    VercelIcon,
    RenderIcon,
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
    ViteIcon,
    PostmanIcon,
    ExpoIcon
    // NotionICon,
    // CplusIcon,
    // GodotIcon,
    // AsepriteIcon,
    // ArduinoIDEIcon
} from '../components/ui/TechIcons';

const frontEndSkills = [
    { name: "React", icons: () => <ReactjsIcon /> },
    { name: "Tailwind CSS", icons: () => <TailwindIcon /> },
    { name: "Figma", icons: () => <FigmaIcon /> },
    { name: "Next.js", icons: () => <NextjsIcon /> },
    { name: "Vite", icons: () => <ViteIcon /> },
    { name: "HTML5", icons: () => <HTML5Icon /> },
    { name: "CSS3", icons: () => <CSS3Icon /> },
    { name: "JavaScript", icons: () => <JavascriptIcon /> },
    { name: "TypeScript", icons: () => <TypescriptIcon /> },
    { name: "React Native", icons: () => <ReactjsIcon /> },
];

const backEndSkills = [
    { name: "Node.js", icons: () => <NodejsIcon /> },
    { name: "Express.js", icons: () => <ExpressjsIcon /> },
    { name: "C#", icons: () => <CsharpIcon /> },
    { name: "Java", icons: () => <JavaIcon /> },
    { name: "Python", icons: () => <PythonIcon /> },
    { name: "Supabase", icons: () => <SupabaseIcon /> },
    { name: "Firebase", icons: () => <FirebaseIcon /> },
    { name: "MySQL", icons: () => <MySQLIcon /> },
    { name: "MongoDB", icons: () => <MongoDBIcon /> },
    { name: "PostgreSQL", icons: () => <PosgreSQLIcon /> },
    // { name: "Notion", icons: () => <NotionICon /> },
    // { name: "ChatGPT", icons: () => <ChatGPTIcon /> },
    // { name: "Claude", icons: () => <ClaudeIcon /> },
    // { name: "Gemini", icons: () => <GeminiIcon /> },
];

const developmentToolsSkills = [
    { name: "Antigravity", icons: () => <AntigravityIcon /> },
    { name: "Cursor", icons: () => <CursorIcon /> },
    { name: "VSCode", icons: () => <VSCodeIcon /> },
    { name: "n8n", icons: () => <N8NIcon /> },
    { name: "Git", icons: () => <GitIcon /> },
    { name: "Github", icons: () => <GithubIcon /> },
    { name: "Postman", icons: () => <PostmanIcon /> },
];

const deploymentSkills = [
    { name: "Vercel", icons: () => <VercelIcon /> },
    { name: "Render", icons: () => <RenderIcon /> },
    { name: "Expo", icons: () => <ExpoIcon /> }
];

const Skills = () => {

    return (
        <section id="skills" className="bg-[#101010] text-[#F7F7F7] flex flex-col items-center justify-center min-h-screen w-full overflow-hidden relative py-20 md:py-32 xl:py-40" style={{ contain: 'layout style paint' }}>
            <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full px-6 md:px-12 xl:px-16 2xl:px-20 flex flex-col items-start relative z-[2]">

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

                    {/* Category 1: FRONT-END */}
                    <div className="reveal-item flex flex-col gap-3 xl:gap-4">
                        <span className="font-spline text-xs xl:text-sm tracking-[0.15em] text-[#A0A0A0] font-light">
                            FRONT-END
                        </span>
                        <SkillList skills={frontEndSkills} />
                    </div>

                    {/* Category 2: BACK-END */}
                    <div className="reveal-item flex flex-col gap-3 xl:gap-4">
                        <span className="font-spline text-xs xl:text-sm tracking-[0.15em] text-[#A0A0A0] font-light">
                            BACK-END
                        </span>
                        <SkillList skills={backEndSkills} />
                    </div>

                    {/* Category 3: DEVELOPMENT TOOLS */}
                    <div className="reveal-item flex flex-col gap-3 xl:gap-4">
                        <span className="font-spline text-xs xl:text-sm tracking-[0.15em] text-[#A0A0A0] font-light">
                            DEVELOPMENT TOOLS
                        </span>
                        <SkillList skills={developmentToolsSkills} />
                    </div>

                    {/* Category 4: DEPLOYMENT */}
                    <div className="reveal-item flex flex-col gap-3 xl:gap-4">
                        <span className="font-spline text-xs xl:text-sm tracking-[0.15em] text-[#A0A0A0] font-light">
                            DEPLOYMENT
                        </span>
                        <SkillList skills={deploymentSkills} />
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