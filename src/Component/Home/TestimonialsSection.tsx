"use client";

import { TestimonialsCard } from "../ui/testimonials-card";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const items = [
  {
    id: 1,
    title: "David Richardson",
    description: "The Aussie Sun Solr team was incredible. Our energy bills dropped by 70% in the first month. Best investment for our home!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sarah Thompson",
    description: "Exceptional service from design to install. The monitoring app is so easy to use, and I love seeing my carbon footprint shrink.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mark Benson",
    description: "Tier-1 panels and local support. Knowing Hexa handles everything in-house gives me peace of mind. Highly recommend their solar solutions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Elena Rodriguez",
    description: "Professional, clean, and fast installation. They navigated the rebates for us, making the whole process stress-free and affordable.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10">

      <div className="max-w-7xl mx-auto relative z-10 mpx-5">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-5xl text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-[#004093]/10 bg-slate-50 px-4 py-1.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#FE9900]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#004093]">
                Client Success Stories
              </span>
            </div>
          </div>

          <h2 className="text-4xl font-serif font-bold tracking-tight text-slate-900 md:text-6xl">
            What Our <br /> <span className="text-[#004093]">Customers</span> Say
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-[#004093] to-[#FE9900]" />
          <p className="mt-8 text-lg text-slate-600">
            Real feedback from homeowners and businesses across Australia who have made the switch to cleaner, cheaper energy.
          </p>
        </motion.div>

        {/* TESTIMONIALS CARD */}
        <div className="flex  w-full items-center justify-center">
          <TestimonialsCard 
            items={items} 
            width={800} 
            autoPlay={true} 
            autoPlayInterval={5000}
          />
        </div>
      </div>
    </section>
  );
}
