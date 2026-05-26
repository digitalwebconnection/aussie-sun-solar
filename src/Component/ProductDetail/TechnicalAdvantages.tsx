import React from "react";
import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import type { ProductData } from "../../data/products";

interface TechnicalAdvantagesProps {
  product: ProductData;
}

const colors = [
  {
    bg: "bg-violet-100",
    icon: "text-violet-600",
    line: "from-violet-500 to-fuchsia-500",
    glow: "group-hover:bg-violet-50",
  },
  {
    bg: "bg-cyan-100",
    icon: "text-cyan-600",
    line: "from-cyan-500 to-blue-500",
    glow: "group-hover:bg-cyan-50",
  },
  {
    bg: "bg-emerald-100",
    icon: "text-emerald-600",
    line: "from-emerald-500 to-lime-500",
    glow: "group-hover:bg-emerald-50",
  },
  {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    line: "from-orange-500 to-amber-500",
    glow: "group-hover:bg-orange-50",
  },
];

export const TechnicalAdvantages: React.FC<TechnicalAdvantagesProps> = ({
  product,
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20">
      
      {/* Background Design */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-6">
          <div className="flex items-center text-center justify-center gap-3 mb-5">
            <div className="w-14 h-[3px] rounded-full bg-linear-to-r from-[#004093] to-[#FE9900]" />
            <span className="uppercase  tracking-[4px] text-xs font-black text-[#004093]">
              Technical Advantages
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            {product.betterTitle}
          </h2>

          <p className="text-slate-900 text-base md:text-lg leading-relaxed mt-5">
            Engineered with advanced solar technology for maximum durability,
            higher efficiency, and long-term performance reliability.
          </p>
        </div>

        {/* List Layout */}
        <div className="relative">
          
          {/* Main Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-linear-to-b from-[#004093] via-slate-200 to-[#FE9900]" />

          <div className="space-y-6">
            {product.betterList.map((adv, index) => {
              const parts = adv.split(":");
              const title = parts[0];
              const desc = parts.slice(1).join(":");

              const color = colors[index % colors.length];

              return (
                <div
                  key={index}
                  className={`group relative pl-10 transition-all duration-500`}
                >
                  
                  {/* Dot + Icon */}
                  <div
                    className={`absolute left-0 top-1 w-9 h-9 rounded-2xl ${color.bg} flex items-center justify-center shadow-sm border border-white`}
                  >
                    <Sparkles className={`w-4 h-4 ${color.icon}`} />
                  </div>

                  {/* Content */}
                  <div
                    className={`relative rounded-lg p-1 transition duration-500`}
                  >
                    <div
                      className={`rounded-lg bg-white border border-slate-300 px-6 py-6 md:px-8 md:py-7 shadow-lg shadow-black/40 transition-all duration-500 ${color.glow} hover:shadow-xl`}
                    >
                      
                      {/* Top */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-snug">
                            {title}
                          </h3>

                          {desc && (
                            <p className="text-slate-900 text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
                              {desc.trim()}
                            </p>
                          )}
                        </div>

                        <ArrowUpRight
                          className={`w-5 h-5 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition duration-300 ${color.icon}`}
                        />
                      </div>

                      {/* Animated Bottom Line */}
                      <div
                        className={`mt-6 h-[4px] rounded-full bg-linear-to-r ${color.line} w-20 group-hover:w-full transition-all duration-700`}
                      />
                    </div>
                  </div>
                </div>
              );  
            })}
          </div>
        </div>
      </div>
    </section>
  );
};