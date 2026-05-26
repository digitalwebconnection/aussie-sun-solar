import React from "react";
import { Award, Zap, ShieldCheck } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const badges = [
    { label: "Clean Energy Council Approved", icon: <Award size={36} className="text-[#004093]" /> },
    { label: "Tier 1 Solar Bloomberg", icon: <Zap size={36} className="text-[#004093]" /> },
    { label: "25-Year Warranty", icon: <ShieldCheck size={36} className="text-[#004093]" /> },
    { label: "CEC Accredited Retailer", icon: <Award size={36} className="text-[#004093]" /> },
    { label: "100% Carbon Offset", icon: <Zap size={36} className="text-[#004093]" /> }
  ];

  return (
    <section className="bg-white  pb-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FE9900] mb-8">
          Australian Standards & Compliance Guarantee
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-85">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center shadow-xs hover:scale-105 transition duration-300">
                {badge.icon}
              </div>
              <span className="text-[10px] md:text-xs font-black text-slate-900 uppercase max-w-[120px] leading-tight">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
