import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productsData } from "../data/products";
import { CheckCircle, ArrowRight, ChevronRight, Phone, ShieldCheck, Zap, Award, ThumbsUp, Wrench, Headphones } from "lucide-react";
import { useEffect } from "react";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!slug || !productsData[slug]) {
    return (
      <main className="min-h-screen bg-slate-50 pt-32 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h1 className="text-4xl font-black text-[#004093]">Product Not Found</h1>
          <p className="mt-4 text-slate-600">The product you are looking for does not exist or has been moved.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 bg-[#FE9900] hover:bg-[#ffb033] text-white px-6 py-3 rounded-full font-bold transition duration-300"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    );
  }

  const product = productsData[slug];

  // Get other products in the same category
  const categoryProducts = Object.values(productsData).filter(
    (p) => p.category === product.category
  );

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* ==================== HERO BANNER ==================== */}
      <section className="relative h-[250px] md:h-[350px] overflow-hidden pt-28 flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop"
            alt="Solar installation background"
            className="h-full w-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#004093]/85 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full text-white">
          <div className="flex flex-col gap-2">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider mb-2">
              <Link to="/" className="hover:text-[#FE9900] transition">Home</Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-[#FE9900] transition">Products</Link>
              <ChevronRight size={14} />
              <span className="text-white/90">{product.category}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-sm">
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      {/* ==================== MAIN CONTENT & SIDEBAR ==================== */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* LEFT SIDEBAR (span 3 on desktop) */}
            <div className="lg:col-span-3">
              <div className="sticky top-28 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6">
                <h3 className="text-lg font-black text-[#004093] mb-5 pb-3 border-b border-slate-100">
                  {product.category}
                </h3>
                
                <div className="flex flex-col gap-2">
                  {categoryProducts.map((p) => {
                    const isActive = p.slug === product.slug;
                    return (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold transition text-sm ${
                          isActive
                            ? "bg-[#004093] text-white shadow-lg shadow-[#004093]/20"
                            : "bg-slate-50 hover:bg-slate-100 text-[#004093]"
                        }`}
                      >
                        <span>{p.name}</span>
                        <ChevronRight size={16} className={isActive ? "text-white" : "text-[#004093]/50"} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT MAIN CONTENT (span 9 on desktop) */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/50 p-6 md:p-10 lg:p-12">
                
                {/* Brand Logo & Tagline Header */}
                <div className="mb-10 pb-8 border-b border-slate-100">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    {/* Stylized Brand Logo Box */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-4 h-8 rounded-sm" 
                          style={{ backgroundColor: product.brandColor }}
                        />
                        <span className="text-3xl font-black tracking-tighter" style={{ color: "#004093" }}>
                          {product.logoText}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mt-1">
                        {product.subtitle}
                      </span>
                    </div>

                    <div className="px-5 py-2.5 bg-slate-50 rounded-full border border-slate-100">
                      <span className="text-xs font-black uppercase tracking-widest text-[#FE9900]">
                        Certified technology
                      </span>
                    </div>
                  </div>
                  
                  {/* Title & Tagline */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mt-8 leading-tight">
                    {product.brand} {product.category === "Solar Panels" ? "Modules" : product.category === "Solar Inverters" ? "Inverter Solutions" : "Battery Storage"} — {product.tagline}
                  </h2>
                  
                  <p className="mt-5 text-slate-600 text-lg leading-relaxed font-medium">
                    {product.intro}
                  </p>
                </div>

                {/* Section 1: Why Choose */}
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-black text-[#004093] mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#FE9900] rounded-full inline-block" />
                    Why Choose {product.brand}?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.whyChoose.map((point, index) => (
                      <div key={index} className="flex gap-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md transition">
                        <CheckCircle className="text-[#FE9900] shrink-0 mt-0.5" size={20} />
                        <p className="text-slate-700 text-sm font-semibold leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2: Range & Specifications */}
                <div className="mb-12 bg-slate-50 border border-slate-100 rounded-[28px] p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-black text-[#004093] mb-3">
                    {product.rangeTitle}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base mb-6 font-medium">
                    {product.rangeIntro}
                  </p>
                  
                  <div className="space-y-3">
                    {product.rangeSpecs.map((spec, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-100">
                        <div className="w-6 h-6 rounded-full bg-[#004093]/10 flex items-center justify-center text-[#004093] shrink-0 font-bold text-xs mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-slate-700 text-sm font-bold leading-relaxed">{spec}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Technical Advantages */}
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-black text-[#004093] mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#FE9900] rounded-full inline-block" />
                    {product.betterTitle}
                  </h3>
                  <div className="space-y-4">
                    {product.betterList.map((adv, index) => {
                      const [title, desc] = adv.split(":");
                      return (
                        <div key={index} className="p-5 rounded-2xl border border-slate-100 hover:border-[#004093]/20 transition bg-white">
                          <h4 className="font-black text-[#004093] text-base mb-1">{title}</h4>
                          <p className="text-slate-600 text-sm font-medium leading-relaxed">{desc ? desc.trim() : ""}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Two-Column Grid: Installation & Best For */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="border border-slate-100 rounded-3xl p-6 hover:shadow-lg transition bg-white">
                    <h4 className="font-black text-[#004093] text-lg mb-4 flex items-center gap-2">
                      <Wrench size={20} className="text-[#FE9900]" />
                      Installation & Compatibility
                    </h4>
                    <ul className="space-y-3">
                      {product.installation.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm font-medium leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FE9900] shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-slate-100 rounded-3xl p-6 hover:shadow-lg transition bg-white">
                    <h4 className="font-black text-[#004093] text-lg mb-4 flex items-center gap-2">
                      <ThumbsUp size={20} className="text-[#FE9900]" />
                      Who It's Best For
                    </h4>
                    <ul className="space-y-3">
                      {product.bestFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm font-medium leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#004093] shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Warranty Section */}
                <div className="bg-[#004093]/5 border border-[#004093]/10 rounded-3xl p-6 md:p-8 mb-8">
                  <h4 className="font-black text-[#004093] text-lg mb-4 flex items-center gap-2">
                    <ShieldCheck size={24} className="text-[#004093]" />
                    Warranty & Direct Support
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {product.warranty.map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Benefit {i + 1}</span>
                        <p className="text-slate-800 text-sm font-bold leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendation Footer */}
                <div className="mt-8 border-t border-slate-100 pt-8">
                  <p className="text-slate-700 italic text-base leading-relaxed font-semibold bg-slate-50 border-l-4 border-[#FE9900] p-5 rounded-r-2xl">
                    "{product.recommendation}"
                  </p>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ==================== TRUST ACCREDITATIONS STRIP ==================== */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FE9900] mb-8">
            Australian Standards & Compliance Guarantee
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-80">
            {[
              { label: "Clean Energy Council Approved", icon: <Award size={36} className="text-[#004093]" /> },
              { label: "Tier 1 Solar Bloomberg", icon: <Zap size={36} className="text-[#004093]" /> },
              { label: "25-Year Warranty", icon: <ShieldCheck size={36} className="text-[#004093]" /> },
              { label: "CEC Accredited Retailer", icon: <Award size={36} className="text-[#004093]" /> },
              { label: "100% Carbon Offset", icon: <Zap size={36} className="text-[#004093]" /> }
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center shadow-sm">
                  {badge.icon}
                </div>
                <span className="text-xs font-black text-slate-500 uppercase max-w-[120px] leading-tight">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative overflow-hidden bg-[#004093] text-white py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[60px_60px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Texts */}
            <div className="lg:col-span-7">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FE9900]">
                Unlock Premium Clean Energy
              </span>
              <h2 className="text-3xl md:text-5xl font-black mt-3 leading-tight">
                Work With a Team That Works for You
              </h2>
              <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                Ready to maximize your solar investment? Aussie Sun Solar offers expert consultations, tailors high-efficiency setups, and handles the entire rebate and installation process.
              </p>
              
              <div className="flex flex-wrap gap-6 mt-8">
                {/* Contact phone */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FE9900] flex items-center justify-center text-white shadow-lg">
                    <Phone size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-semibold uppercase">24/7 Support</p>
                    <h4 className="font-bold text-white text-lg">1300 504 912</h4>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="bg-white hover:bg-slate-100 text-[#004093] px-8 py-3.5 rounded-full font-black flex items-center gap-2.5 transition duration-300 shadow-xl hover:scale-105"
                >
                  Request A Consultation
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Headshot Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                  alt="Aussie Sun Solar support expert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY MORE AUSTRALIANS CHOOSE AUSSIE SUN SOLAR ==================== */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FE9900]">
              The Aussie Sun Solar Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 leading-tight">
              Why More Australians Choose Aussie Sun Solar?
            </h2>
            <div className="w-20 h-1 bg-[#FE9900] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Australian Owned & Operated",
                desc: "We understand the local solar environment, offering systems designed specifically for harsh Australian conditions.",
                icon: <Award className="text-[#FE9900]" size={24} />
              },
              {
                title: "Professional Installation",
                desc: "Every solar system is set up by Clean Energy Council (CEC) accredited installers, ensuring safety, compliance, and excellence.",
                icon: <Wrench className="text-[#FE9900]" size={24} />
              },
              {
                title: "Finance Ready Options",
                desc: "Flexible, zero-deposit finance schemes are available so you can start saving on electricity immediately.",
                icon: <Zap className="text-[#FE9900]" size={24} />
              },
              {
                title: "Battery-Ready Systems",
                desc: "We future-proof your installation. All string or micro-inverters are battery compatible for easy storage add-ons.",
                icon: <ShieldCheck className="text-[#FE9900]" size={24} />
              },
              {
                title: "Full Warranty & Local Support",
                desc: "We cover every component with direct manufacturer backed warranties, serviced by our local offices.",
                icon: <ThumbsUp className="text-[#FE9900]" size={24} />
              },
              {
                title: "Get Aussie Customer Service",
                desc: "Speak directly with local customer service agents who resolve queries and provide technical assistance promptly.",
                icon: <Headphones className="text-[#FE9900]" size={24} />
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/40 hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-3">{card.title}</h4>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.main>
  );
};

export default ProductDetailPage;
