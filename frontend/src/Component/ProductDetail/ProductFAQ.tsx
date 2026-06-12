import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import type { ProductData } from "../../data/products";

interface ProductFAQProps {
  product: ProductData;
}

export const ProductFAQ: React.FC<ProductFAQProps> = ({ product }) => {
  const panelFAQs = [
    {
      q: `What is the efficiency of ${product.brand} Solar Panels?`,
      a: `${product.brand} panels offer top-tier module efficiencies (ranging from 21.5% to 24%), allowing you to capture more energy per square meter, making them perfect for compact or shaded roof layouts.`,
    },
    {
      q: `How long is the warranty, and how is it serviced in Australia?`,
      a: `These modules come with an industry-leading 15 to 25-year product warranty and a 25 to 30-year linear performance warranty. All warranty claims are handled locally through the manufacturer's Australian offices, supported by Aussie Sun Solar.`,
    },
    {
      q: `Are these solar panels storm and hail resistant?`,
      a: `Yes, all ${product.brand} modules are fully certified to withstand high wind loads of up to 2400 Pa and snow/heavy loads of up to 5400 Pa. The front tempered glass is impact-tested to resist large hail stones.`,
    },
    {
      q: `How long does the installation take?`,
      a: `A standard residential installation typically takes 1 to 2 days depending on system size and roof access. Aussie Sun Solar's SAA-accredited installers handle the entire process from structural safety checks to final commissioning.`,
    },
  ];

  const inverterFAQs = [
    {
      q: `Is the ${product.brand} inverter battery-ready (hybrid)?`,
      a: `Yes, many inverters in the ${product.brand} range are fully hybrid or battery-ready, allowing you to add energy storage systems seamlessly at any time without buying a new inverter.`,
    },
    {
      q: `Does this inverter support mobile application monitoring?`,
      a: `Absolutely. You can track your real-time solar generation, home power consumption, and battery charge states anywhere via the dedicated smartphone application.`,
    },
    {
      q: `What is the warranty period for ${product.brand} Inverters?`,
      a: `Inverters generally come with a 5 to 10-year manufacturer warranty. You can easily extend this up to 15 or 20 years.`,
    },
    {
      q: `How does the backup power function work during a blackout?`,
      a: `If you have a hybrid inverter with battery storage, the system switches to backup power mode in under 10-20ms during grid failure.`,
    },
  ];

  const batteryFAQs = [
    {
      q: `What chemistry is used in ${product.brand} Batteries?`,
      a: `These batteries utilize Lithium Iron Phosphate (LiFePO4 or LFP) chemistry, recognized as the safest and most durable lithium chemistry for home energy storage.`,
    },
    {
      q: `Can I expand the storage capacity later?`,
      a: `Yes. The modular stacking design allows you to expand capacity easily as your household energy needs grow.`,
    },
    {
      q: `What is the Depth of Discharge (DoD) of this battery?`,
      a: `These systems support 90% to 100% Depth of Discharge, meaning you can utilize almost all stored energy without shortening battery lifespan.`,
    },
    {
      q: `Are these battery storage systems VPP ready?`,
      a: `Yes, the integrated smart BMS is compatible with major Australian Virtual Power Plant programs.`,
    },
  ];

  const faqs =
    product.category === "Solar Panels"
      ? panelFAQs
      : product.category === "Solar Inverters"
        ? inverterFAQs
        : batteryFAQs;

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 max-w-7xl mx-auto">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#004093]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FE9900]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">

        {/* Heading */}
        <div className="max-w-6xl  mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-14 h-[3px] rounded-full bg-linear-to-r from-[#004093] to-[#FE9900]" />

            <span className="uppercase tracking-[4px] text-xs font-black text-[#004093]">
              FAQ Section
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-900 text-base md:text-lg mt-5 leading-relaxed">
            Everything you need to know about installation, warranty,
            performance, compatibility, and product support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-lg border transition-all duration-500 ${isOpen
                    ? "border-[#004093]/20 bg-linear-to-br from-blue-50 to-white shadow-2xl shadow-blue-100/40"
                    : "border-slate-200 bg-white hover:border-[#004093]/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60"
                  }`}
              >

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#FE9900]/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#004093]/10 rounded-full blur-3xl" />
                </div>

                {/* Animated Top Line */}
                <div
                  className={`h-[4px] bg-linear-to-r from-[#004093] via-[#FE9900] to-[#004093] transition-all duration-500 ${isOpen
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                    }`}
                />

                {/* Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="relative z-10 w-full flex items-center justify-between gap-5 p-6 md:p-7 text-left"
                >

                  {/* Left */}
                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen
                          ? "bg-linear-to-br from-[#004093] to-[#0A56B5] shadow-lg shadow-blue-200"
                          : "bg-slate-100 group-hover:bg-linear-to-br group-hover:from-[#FE9900] group-hover:to-orange-500"
                        }`}
                    >
                      <HelpCircle
                        size={20}
                        className={`transition duration-500 ${isOpen
                            ? "text-white"
                            : "text-[#004093] group-hover:text-white"
                          }`}
                      />
                    </div>

                    {/* Question */}
                    <div>
                      <span className="block text-base md:text-lg font-black text-slate-900 leading-relaxed">
                        {faq.q}
                      </span>

                      <div
                        className={`mt-4 h-[3px] rounded-full bg-linear-to-r from-[#FE9900] to-[#004093] transition-all duration-700 ${isOpen
                            ? "w-32"
                            : "w-14 group-hover:w-24"
                          }`}
                      />
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen
                        ? "bg-[#004093] rotate-180"
                        : "bg-slate-100 group-hover:bg-[#004093]"
                      }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition duration-500 ${isOpen
                          ? "text-white"
                          : "text-[#004093] group-hover:text-white"
                        }`}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="relative z-10 px-6 md:px-7 pb-7">

                      {/* Divider */}
                      <div className="border-t border-slate-200 pt-6">
                        <p className="text-slate-900 text-sm md:text-base font-medium leading-relaxed max-w-4xl">
                          {faq.a}
                        </p>

                        {/* Bottom Badge */}
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FE9900]/10 px-4 py-2 border border-[#FE9900]/20">
                          <Sparkles className="w-4 h-4 text-[#FE9900]" />

                          <span className="text-xs font-bold tracking-wide uppercase text-[#004093]">
                            Solar Expert Answer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};