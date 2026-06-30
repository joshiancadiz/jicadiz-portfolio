import { useState } from 'react';
import ArrowIcon from '../components/ui/ArrowIcon';
import GmailIcon from '../components/ui/GmailIcon';
import LinkedInIcon from '../components/ui/LinkedInIcon';
import GithubIcon from '../components/ui/GithubIcon';

const Contacts = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("cadiz.joshuaiang@gmail.com").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <section
            id="contacts"
            className="bg-[#101010] text-[#F7F7F7] flex flex-col items-center w-full overflow-hidden relative py-20 md:py-32 xl:py-40"
        >
            <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full px-6 md:px-12 xl:px-16 2xl:px-20 flex flex-col items-start z-[2] relative">
                {/* Top Label / Title */}
                <div className="reveal-contact-item mb-4 md:mb-6 xl:mb-8">
                    <span className="font-spline text-xs xl:text-sm uppercase tracking-[0.2em] text-[#707070]">
                        [ CONTACTS ]
                    </span>
                    <h2 className="font-spline text-3xl md:text-4xl xl:text-[46px] 2xl:text-[50px] font-medium tracking-tight text-[#F7F7F7] mt-2">
                        Get In Touch
                    </h2>
                    <p className="font-spline text-sm xl:text-base font-light text-[#a0a0a0] max-w-[700px] xl:max-w-[800px] mt-2 leading-relaxed">
                        Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
                    </p>
                </div>

                {/* Links */}
                <div className="w-full flex flex-col items-start mt-8 xl:mt-12">
                    <div className="flex flex-col gap-6 xl:gap-8 w-full md:w-auto relative z-10">
                        {/* Gmail Copy Button */}
                        <button
                            onClick={handleCopyEmail}
                            aria-label="Copy email to clipboard"
                            className="reveal-contact-item flex items-center gap-4 xl:gap-5 py-2 w-fit text-left cursor-pointer focus:outline-none group"
                        >
                            <GmailIcon />
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="font-spline text-[10px] xl:text-xs uppercase tracking-[0.1em] font-medium" style={{ color: '#F7F7F7' }}>GMAIL</span>
                                    {copied && (
                                        <span className="font-spline text-[9px] xl:text-[10px] uppercase tracking-[0.05em] font-semibold text-[#4ade80] animate-pulse">
                                            (Copied!)
                                        </span>
                                    )}
                                </div>
                                <span className="font-spline text-sm md:text-[16px] xl:text-lg font-semibold tracking-tight transition-colors group-hover:text-white" style={{ color: '#F7F7F7' }}>
                                    cadiz.joshuaiang@gmail.com
                                </span>
                            </div>
                        </button>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/joshua-ian-cadiz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-contact-item flex items-center gap-4 xl:gap-5 py-2 w-fit group"
                        >
                            <LinkedInIcon />
                            <div className="flex flex-col">
                                <span className="font-spline text-[10px] xl:text-xs uppercase tracking-[0.1em] font-medium" style={{ color: '#F7F7F7' }}>LINKEDIN</span>
                                <span className="font-spline text-sm md:text-[16px] xl:text-lg font-semibold tracking-tight" style={{ color: '#F7F7F7' }}>
                                    in/joshua-ian-cadiz
                                </span>
                            </div>
                        </a>

                        {/* GitHub Link */}
                        <a
                            href="https://github.com/joshiancadiz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-contact-item flex items-center gap-4 xl:gap-5 py-2 w-fit group"
                        >
                            <GithubIcon />
                            <div className="flex flex-col">
                                <span className="font-spline text-[10px] xl:text-xs uppercase tracking-[0.1em] font-medium" style={{ color: '#F7F7F7' }}>GITHUB</span>
                                <span className="font-spline text-sm md:text-[16px] xl:text-lg font-semibold tracking-tight" style={{ color: '#F7F7F7' }}>
                                    github.com/joshiancadiz
                                </span>
                            </div>
                        </a>

                        {/* CV Link */}
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-contact-item cv-link flex items-center gap-4 xl:gap-5 py-2 w-fit group"
                        >
                            <div className="w-8 h-8 xl:w-10 xl:h-10 flex-shrink-0 flex items-center justify-center">
                                <ArrowIcon className="w-5 h-5 xl:w-6 xl:h-6 text-[#F7F7F7] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-spline text-[10px] xl:text-xs uppercase tracking-[0.1em] font-medium" style={{ color: '#F7F7F7' }}>CV LINK</span>
                                <span className="font-spline text-sm md:text-[16px] xl:text-lg font-semibold tracking-tight" style={{ color: '#F7F7F7' }}>
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
