import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productsData } from "../data/products";
import { ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";
import { useEffect } from "react";
import solarHeroBg from '../assets/downloaded-images/solar-hero-bg.jpg';

const ProductsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = ["Solar Panels", "Solar Inverters", "Solar Batteries"] as const;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50"
    >
      {/* ==================== HERO HERO ==================== */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden pt-28 flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={solarHeroBg}
            alt="Solar field"
            className="h-full w-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#004093]/80 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full text-white text-center">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#FE9900] mb-3 inline-block">
            Premium Solar Technology
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Our Solar Products
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-200 text-base md:text-lg font-medium">
            Discover our carefully selected range of Tier 1 solar panels, high-efficiency inverters, and durable battery storage solutions.
          </p>
        </div>
      </section>

      {/* ==================== CATEGORIES SECTIONS ==================== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {categories.map((category) => {
            const items = Object.values(productsData).filter(
              (p) => p.category === category
            );

            return (
              <div key={category} className="scroll-mt-28">
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FE9900]">
                      World Class Brands
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#004093] mt-2">
                      {category}
                    </h2>
                  </div>
                  <p className="text-slate-500 text-sm font-bold mt-2 md:mt-0">
                    Showing {items.length} premium systems
                  </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((product) => (
                    <motion.div
                      key={product.slug}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/40 hover:shadow-xl transition overflow-hidden flex flex-col justify-between"
                    >
                      {/* Top Branding Section */}
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className="w-3 h-6 rounded-sm shrink-0"
                            style={{ backgroundColor: product.brandColor }}
                          />
                          <span className="text-xl font-black tracking-tight text-[#004093]">
                            {product.logoText}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 mb-2">
                          {product.name}
                        </h3>

                        <span className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-4">
                          {product.subtitle}
                        </span>

                        <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                          {product.intro}
                        </p>
                      </div>

                      {/* Bottom Action Section */}
                      <div className="px-8 pb-8 pt-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-[#FE9900]">
                          {product.brand} Warranty
                        </span>

                        <Link
                          to={`/products/${product.slug}`}
                          className="inline-flex items-center gap-2 bg-[#004093] hover:bg-[#FE9900] text-white px-5 py-2.5 rounded-full font-bold transition duration-300 text-xs shadow-md"
                        >
                          View Specs
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== TRUST FEATURE STRIP ==================== */}
      <section className="bg-[#004093] text-white py-16 border-t-4 border-[#FE9900]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-10">We Only Install SAA Approved Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center">
              <Award size={40} className="text-[#FE9900] mb-4" />
              <h4 className="font-bold text-lg mb-2">Tier 1 Brands</h4>
              <p className="text-white/70 text-sm leading-relaxed">We source panels directly from Tier 1 global manufacturers ensuring top efficiency and bankability.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center">
              <ShieldCheck size={40} className="text-[#FE9900] mb-4" />
              <h4 className="font-bold text-lg mb-2">Extended Warranties</h4>
              <p className="text-white/70 text-sm leading-relaxed">All products carry extensive 10-30 year local manufacturer performance warranties.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center">
              <Zap size={40} className="text-[#FE9900] mb-4" />
              <h4 className="font-bold text-lg mb-2">Expert Consultation</h4>
              <p className="text-white/70 text-sm leading-relaxed">Our accredited consultants evaluate and tailor systems built specifically for your home's needs.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default ProductsPage;
