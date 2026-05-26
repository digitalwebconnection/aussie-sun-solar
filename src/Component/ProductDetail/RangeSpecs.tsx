import React from "react";
import {
  Zap,
  ShieldCheck,
  BatteryCharging,
  GaugeCircle,
} from "lucide-react";
import type { ProductData } from "../../data/products";

interface RangeSpecsProps {
  product: ProductData;
}

const icons = [
  Zap,
  ShieldCheck,
  BatteryCharging,
  GaugeCircle,
];

export const RangeSpecs: React.FC<RangeSpecsProps> = ({ product }) => {
  return (
    <section className="relative mx-auto max-w-7xl">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,64,147,0.08),transparent_30%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#004093]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div className="max-w-5xl">
          

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            {product.rangeTitle}
          </h2>

          <p className="mt-5 text-slate-900 text-base md:text-lg leading-relaxed">
            {product.rangeIntro}
          </p>
        </div>

        {/* Decorative Box */}
        <div className="hidden lg:flex items-center justify-center min-w-[120px] h-[120px] rounded-lg bg-linear-to-br from-[#004093] to-[#0d5cc9] shadow-[0_20px_60px_-10px_rgba(0,64,147,0.35)]">
          <span className="text-white text-5xl font-black">
            {product.rangeSpecs.length}+
          </span>
        </div>
      </div>

      {/* Premium Specs Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6">
        {product.rangeSpecs.map((spec, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white border border-slate-500/60 p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#004093]/20 hover:shadow-[0_25px_60px_-15px_rgba(0,64,147,0.18)]"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#004093]/3 via-transparent to-[#004093]/6" />

              <div className="relative z-10">
                
                {/* Top */}
                <div className="flex items-center justify-between mb-7">
                  
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-[#004093]/10 flex items-center justify-center group-hover:bg-[#004093] transition-all duration-300">
                    <Icon
                      size={26}
                      className="text-[#004093] group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Number */}
                  <span className="text-5xl font-black text-slate-300 group-hover:text-[#004093]/10 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <p className="text-slate-800 text-base md:text-md font-semibold leading-relaxed">
                  {spec}
                </p>

                {/* Bottom Line */}
                <div className="mt-8 flex items-center gap-2">
                  <div className="h-[3px] w-10 rounded-full bg-[#004093] transition-all duration-300 group-hover:w-20" />
                  <div className="h-[3px] w-3 rounded-full bg-slate-300" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};