import { Link } from "react-router-dom";
import { ArrowRight, SunMedium } from "lucide-react";
import BlogPage from "./BlogPage";
import heroImg from "../../assets/blog-img2.webp";

export default function SolarBlogPage() {
    return (
        <>
            {/* ===== BLOG HERO / INTRO ===== */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden h-screen">
                {/* Background Image */}
                <div className="absolute inset-0"><img src={heroImg} alt="Solar installation hero" className="w-full h-full object-cover" /></div>
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 rounded-bl-[100px] -z-10" />
                <div className="absolute -left-20 top-20 w-72 h-72 bg-black/10 rounded-full blur-[80px] -z-10" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center">
                    <div className="grid grid-cols-1 gap-8 items-center justify-items-start">

                        {/* Left Content */}
                        <div className="space-y-6 text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#e8f0fe] border border-[#004093]/10">
                                <SunMedium className="h-4 w-4 text-[#FE9900]" />
                                <span className="text-sm font-bold text-[#004093] uppercase tracking-wider">
                                    Aussie Sun Solar Knowledge Base
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#004093] leading-[1.15]">
                                Master Your Transition to <br className="hidden md:block" />
                                <span className="text-[#FE9900]">Clean Energy</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white leading-relaxed max-w-lg">
                                Explore expert guides, breaking industry news, and in-depth case studies. Get the facts you need to maximize your solar savings in Australia.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link to="/contact" className="group bg-[#FE9900] hover:bg-[#e88a00] text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 transition duration-300 shadow-lg shadow-orange-200 text-[15px] w-fit">
                                    Contact Us
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main id="latest" className="mx-auto max-w-7xl px-4 md:px-0 py-6 md:py-10 space-y-10 md:space-y-14">
                {/* ===== MAIN CONTENT: BLOG GRID + SIDEBAR ===== */}
                <BlogPage />
            </main>

            <style>{`
                .animate-bounce-slow {
                    animation: bounce-slow 4s infinite ease-in-out;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </>
    );
}
