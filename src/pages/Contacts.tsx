import { useState } from 'react';
import ArrowIcon from '../components/ui/ArrowIcon';
import GmailIcon from '../components/ui/GmailIcon';
import LinkedInIcon from '../components/ui/LinkedInIcon';
import GithubIcon from '../components/ui/GithubIcon';

const Contacts = () => {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("cadiz.joshuaiang@gmail.com").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setErrorMessage('');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setFormStatus('success');
            setFormData({ fullName: '', email: '', message: '' });
            setTimeout(() => setFormStatus('idle'), 4000);
        } catch (err: unknown) {
            setFormStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
            setTimeout(() => setFormStatus('idle'), 4000);
        }
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

                {/* Two Column Layout */}
                <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 mt-8 xl:mt-12">

                    {/* Left Column: Contact Form */}
                    <div className="w-full lg:w-1/2 xl:w-[55%]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 xl:gap-6">
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="fullName" className="font-spline text-xs xl:text-sm uppercase tracking-[0.15em] text-[#a0a0a0] font-light">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="John Doe"
                                    className="font-spline text-sm xl:text-base font-light text-white bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 xl:px-5 xl:py-3.5 placeholder:text-[#404040] focus:outline-none focus:border-white/25 focus:bg-white/[0.04] transition-all duration-300"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-spline text-xs xl:text-sm uppercase tracking-[0.15em] text-[#a0a0a0] font-light">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="john@example.com"
                                    className="font-spline text-sm xl:text-base font-light text-white bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 xl:px-5 xl:py-3.5 placeholder:text-[#404040] focus:outline-none focus:border-white/25 focus:bg-white/[0.04] transition-all duration-300"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="font-spline text-xs xl:text-sm uppercase tracking-[0.15em] text-[#a0a0a0] font-light">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tell me about your project or idea..."
                                    rows={8}
                                    className="font-spline text-sm xl:text-base font-light text-white bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 xl:px-5 xl:py-3.5 placeholder:text-[#404040] focus:outline-none focus:border-white/25 focus:bg-white/[0.04] transition-all duration-300 resize-none min-h-[200px] xl:min-h-[240px]"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className={`font-spline text-sm xl:text-base font-medium uppercase tracking-[0.15em] rounded-xl px-6 py-3.5 xl:px-8 xl:py-4 transition-all duration-300 cursor-pointer mt-1 ${formStatus === 'sending'
                                        ? 'bg-white/5 text-[#505050] border border-white/5 cursor-not-allowed'
                                        : 'bg-white/[0.06] text-white border border-white/15 hover:bg-white/[0.12] hover:border-white/30'
                                    }`}
                            >
                                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* Status Messages */}
                            {formStatus === 'success' && (
                                <p className="font-spline text-sm font-light text-[#4ade80] animate-pulse">
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            )}
                            {formStatus === 'error' && (
                                <p className="font-spline text-sm font-light text-[#f87171]">
                                    {errorMessage || 'Something went wrong. Please try again.'}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Right Column: Social Links */}
                    <div className="w-full lg:w-1/2 xl:w-[45%]">
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
            </div>
        </section>
    );
};

export default Contacts;
