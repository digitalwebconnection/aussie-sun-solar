import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, SunMedium} from "lucide-react";
import BlogPage from "./BlogPage";
import heroImg from "../../assets/blog-img2.webp";

export default function SolarBlogPage() {
    return (
        <>
            {/* ===== BLOG HERO / INTRO ===== */}
            <section className="relative bg-[#f8fbff] pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#004093]/5 rounded-bl-[100px] -z-10" />
                <div className="absolute -left-20 top-20 w-72 h-72 bg-[#FE9900]/10 rounded-full blur-[80px] -z-10" />

                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        
                        {/* Left Content */}
                        <div className="space-y-8">
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

                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
                                Explore expert guides, breaking industry news, and in-depth case studies. Get the facts you need to maximize your solar savings in Australia.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link to="/contact" className="group bg-[#FE9900] hover:bg-[#e88a00] text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 transition duration-300 shadow-lg shadow-orange-200 text-[15px] inline-flex w-fit">
                                    Contact Us
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition duration-300" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Images */}
                        <div className="relative mt-8 lg:mt-0">
                            {/* Main large image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                                <img
                                    src={heroImg}
                                    alt="Solar installation on a modern home"
                                    className="w-full h-[400px] md:h-[500px] object-cover"
                                />
                                {/* Overlay badge */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#004093]/10 flex items-center justify-center shrink-0">
                                            <BookOpen className="h-6 w-6 text-[#004093]" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#FE9900] uppercase mb-1">Featured Article</p>
                                            <p className="text-sm md:text-base font-bold text-slate-900 leading-tight">
                                                How to Choose the Right Battery Storage System in 2026
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background accent */}
                            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#004093]/10 rounded-3xl -z-10" />
                            
                            {/* Stats card floating */}
                            <div className="absolute -right-6 top-12 bg-white rounded-xl shadow-xl p-4 border border-slate-100 z-20 animate-bounce-slow hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl font-black text-[#FE9900]">#1</div>
                                    <div className="text-xs font-semibold text-slate-600 uppercase tracking-widest leading-tight">
                                        Solar Guide<br />In Australia
                                    </div>
                                </div>
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
