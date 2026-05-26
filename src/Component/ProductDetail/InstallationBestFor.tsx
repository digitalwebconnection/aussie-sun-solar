import React from "react";
import {
  Wrench,
  ThumbsUp,
  Check,
} from "lucide-react";
import type { ProductData } from "../../data/products";

interface InstallationBestForProps {
  product: ProductData;
}

export const InstallationBestFor: React.FC<InstallationBestForProps> = ({
  product,
}) => {
  return (
    <section className="relative overflow-hidden py-10 md:py-0">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 blur-3xl rounded-full opacity-40" />
      </div>

      <div className="relative z-10 grid grid-cols-1 shadow xl:grid-cols-2 ">
        
        {/* Installation Section */}
        <div className="relative overflow-hidden  border border-slate-200 bg-linear-to-br from-[#004093] via-[#0A56B5] to-[#01295C] p-4 md:p-8 shadow-xl shadow-black/40">
          
          {/* Decorative Circle */}
          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

          {/* Header */}
          <div className="relative z-10 flex items-center gap-5 mb-10">
            <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
              <Wrench className="w-8 h-8 text-[#FE9900]" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[4px] text-[#FE9900] font-bold">
                Setup & Support
              </span>

              <h3 className="text-2xl md:text-3xl font-black text-white mt-2">
                Installation & Compatibility
              </h3>
            </div>
          </div>

          {/* List */}
          <div className="space-y-5 relative z-10">
            {product.installation.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 border-b border-white/10 pb-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#FE9900]/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition duration-300">
                  <Check className="w-4 h-4 text-[#FE9900]" />
                </div>

                <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Best For Section */}
        <div className="relative overflow-hidden   bg-white p-4 md:p-8 shadow-xl shadow-black">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#004093]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FE9900]/5 rounded-full blur-3xl" />

          {/* Header */}
          <div className="relative z-10 flex items-center gap-5 mb-9">
            <div className="w-16 h-16 rounded-3xl bg-linear-to-br from-orange-100 to-orange-50 border border-orange-200 flex items-center justify-center shadow-sm">
              <ThumbsUp className="w-8 h-8 text-[#FE9900]" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[4px] text-[#004093] font-bold">
                Recommended Usage
              </span>

              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-2">
                Who It’s Best For
              </h3>
            </div>
          </div>

          {/* List */}
          <div className="relative z-10 space-y-3">
            {product.bestFor.map((item, i) => (
              <div
                key={i}
                className="group flex gap-5 items-start"
              >
                
                {/* Number */}
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-[#004093] to-[#0A56B5] text-white flex items-center justify-center font-black text-sm shadow-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 border-b border-slate-100 pb-5 group-hover:border-[#FE9900]/30 transition duration-300">
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                    {item}
                  </p>

                  <div className="mt-4 h-[3px] w-14 rounded-full bg-linear-to-r from-[#FE9900] to-[#004093] group-hover:w-28 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};