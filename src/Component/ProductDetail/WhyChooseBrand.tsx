import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  BadgeCheck,   
} from "lucide-react";

import type { ProductData } from "../../data/products";

interface WhyChooseBrandProps {
  product: ProductData;
}

export const WhyChooseBrand: React.FC<WhyChooseBrandProps> = ({
  product,
}) => {
  return (
    <section className="relative mx-auto max-w-7xl py-10 ">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#FE9900]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#004093]/10 rounded-full blur-3xl" />

      {/* HEADER */}
      <div className="relative z-10 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-2">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#004093] text-white px-10 py-2 rounded-full text-xs font-black tracking-wide mb-2">
              BRAND ADVANTAGES
            </span>

            <h2 className="text-3xl md:text-5xl font-black leading-tight text-[#004093]">
              Why Choose
              <span className="text-[#FE9900]">
                {" "}
                {product.brand}
                 {" "}
              </span>
              Panels Australia?
            </h2>

            <p className="text-slate-900 mt-4 max-w-2xl text-base leading-relaxed">
              Trusted performance, advanced technology, certified
              quality standards & long-term reliability designed for
              modern energy solutions.
            </p>
          </div>

          {/* RIGHT SIDE BADGES */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white border border-slate-500 rounded-lg px-5 py-4 shadow-sm min-w-[130px]">
              <h4 className="text-2xl font-black text-[#004093]">
                25+
              </h4>

              <p className="text-xs font-bold text-slate-400 mt-1">
                Years Support
              </p>
            </div>

            <div className="bg-white border border-slate-500 rounded-lg px-5 py-4 shadow-sm min-w-[130px]">
              <h4 className="text-2xl font-black text-green-600">
                Trusted
              </h4>

              <p className="text-xs font-bold text-slate-400 mt-1">
                Certified Brand
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* LEFT FEATURED CARD */}
        <div className="xl:col-span-4">
          <div className="relative overflow-hidden rounded-lg bg-linear-to-br from-[#004093] via-[#00357b] to-[#001f49] p-8 text-white h-full shadow-black shadow-2xl">
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FE9900]/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              

              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-black tracking-wide mb-6">
                {product.featuredCard?.badge ?? "PREMIUM QUALITY"}
              </span>

              <h3 className="text-2xl font-black leading-tight mb-5">
                {product.featuredCard?.heading ?? "Engineered for Maximum Solar Performance"}
              </h3>

              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {product.featuredCard?.description ?? `${product.brand} products are built using advanced technology, strict quality control, and high-efficiency components for superior energy performance.`}
              </p>

              {/* FEATURES */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck
                      size={20}
                      className="text-[#FE9900]"
                    />
                  </div>

                  <div>
                    <h5 className="font-black text-sm">
                      {product.featuredCard?.feature1Title ?? "Long-Term Reliability"}
                    </h5>

                    <p className="text-white/60 text-xs mt-1">
                      {product.featuredCard?.feature1Desc ?? "Built for consistent high-performance output"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Zap
                      size={20}
                      className="text-[#FE9900]"
                    />
                  </div>

                  <div>
                    <h5 className="font-black text-sm">
                      {product.featuredCard?.feature2Title ?? "High Efficiency Technology"}
                    </h5>

                    <p className="text-white/60 text-xs mt-1">
                      {product.featuredCard?.feature2Desc ?? "Optimized energy generation & smart design"}
                    </p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Zap
                      size={20}
                      className="text-[#FE9900]"
                    />
                  </div>

                  <div>
                    <h5 className="font-black text-sm">
                      {product.featuredCard?.feature3Title ?? "High Efficiency Technology"}
                    </h5>

                    <p className="text-white/60 text-xs mt-1">
                      {product.featuredCard?.feature3Desc ?? "Optimized energy generation & smart design"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE POINTS */}
        <div className="xl:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.whyChoose.map((point, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-black/60 shadow-lg border border-slate-400 bg-white p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* TOP BORDER */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#004093] to-[#FE9900]" />

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-[#FE9900]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  {index % 4 === 0 ? (
                    <CheckCircle2
                      className="text-[#FE9900]"
                      size={28}
                    />
                  ) : index % 4 === 1 ? (
                    <ShieldCheck
                      className="text-[#FE9900]"
                      size={28}
                    />
                  ) : index % 4 === 2 ? (
                    <BadgeCheck
                      className="text-[#FE9900]"
                      size={28}
                    />
                  ) : (
                    <Zap
                      className="text-[#FE9900]"
                      size={28}
                    />
                  )}
                </div>

                {/* NUMBER */}
                <div className="absolute top-6 right-6 text-5xl font-black text-slate-400">
                  0{index + 1}
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h4 className="text-lg font-black text-[#004093] mb-4 leading-snug">
                    {point.title}
                  </h4>

                  <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                    {point.desc}
0                  </p>
                </div>

                {/* HOVER EFFECT */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-linear-to-r from-[#004093]/5 to-[#FE9900]/5 group-hover:h-full transition-all duration-500 z-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};