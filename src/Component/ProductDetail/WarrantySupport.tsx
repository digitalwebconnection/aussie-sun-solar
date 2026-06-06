import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";
import type { ProductData } from "../../data/products";

interface WarrantySupportProps {
  product: ProductData;
}

const gradients = [
  "from-violet-500 to-fuchsia-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-lime-500",
  "from-orange-500 to-amber-500",
];

export const WarrantySupport: React.FC<WarrantySupportProps> = ({
  product,
}) => {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden bg-white py-10 md:py-16">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10">
        
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-14 h-[3px] rounded-full bg-linear-to-r from-[#004093] to-[#FE9900]" />

            <span className="uppercase tracking-[4px] text-xs font-black text-[#004093]">
              Warranty & Support
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
           Warranty & Direct  Support
          </h2>

          <p className="text-slate-900 text-base md:text-lg mt-5 leading-relaxed">
            Advanced warranty coverage and dependable technical assistance
            designed to ensure maximum product confidence and performance.
          </p>
        </div>

        {/* Warranty Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {product.warranty.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border border-slate-300 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-black/40 shadow-lg"
            >
              
              {/* Top */}
              <div className="flex items-center justify-between mb-8">
                
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradients[i % gradients.length]} flex items-center justify-center shadow-lg`}
                >
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>

                {/* Number */}
                <span className="text-5xl font-black text-slate-400">
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <BadgeCheck className="w-4 h-4 text-[#004093]" />

                  <span className="text-xs font-black uppercase tracking-[3px] text-slate-600">
                    Coverage Benefit
                  </span>
                </div>

                <p className="text-slate-800 text-base font-bold leading-relaxed">
                  {item}
                </p>
              </div>

              {/* Hover Line */}
              <div
                className={`mt-8 h-[4px] rounded-full bg-linear-to-r ${gradients[i % gradients.length]} w-16 group-hover:w-full transition-all duration-700`}
              />
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="relative mt-14 overflow-hidden ">
          
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#004093]/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            
            {/* Text */}
            <div className="max-w-6xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[3px] rounded-full bg-[#FE9900]" />

                <span className="uppercase tracking-[4px] text-xs font-black text-[#004093]">
                  Expert Recommendation
                </span>
              </div>

              <p className="text-slate-800 text-lg md:text-2xl italic font-semibold leading-relaxed">
                “{product.recommendation}”
              </p>
            </div>

            {/* Arrow Box */}
            <div className="hidden md:flex w-20 h-20 rounded-[28px] bg-linear-to-br from-[#004093] to-[#0A56B5] items-center justify-center shadow-xl shadow-blue-100">
              <ArrowUpRight className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};