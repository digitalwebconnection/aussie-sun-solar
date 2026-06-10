import { TestimonialsCard } from "../ui/testimonials-card";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import testimonial1 from '../../assets/downloaded-images/testimonial-1.jpg';
import testimonial2 from '../../assets/downloaded-images/testimonial-2.jpg';
import testimonial3 from '../../assets/downloaded-images/testimonial-3.jpg';
import testimonial4 from '../../assets/downloaded-images/support-person.jpg';

const items = [
  {
    id: 1,
    title: "David Richardson",
    description: " team was incredible. Our energy bills dropped by 70% in the first month. Best investment for our home!",
    image: testimonial1,
  },
  {
    id: 2,
    title: "Sarah Thompson",
    description: "Exceptional service from design to install. The monitoring app is so easy to use, and I love seeing my carbon footprint shrink.",
    image: testimonial2,
  },
  {
    id: 3,
    title: "Mark Benson",
    description: "Tier-1 panels and local support. Knowing Aussie Sun Solar handles everything in-house gives me peace of mind. Highly recommend their solar solutions.",
    image: testimonial3,
  },
  {
    id: 4,
    title: "Elena Rodriguez",
    description: "Professional, clean, and fast installation. They navigated the rebates for us, making the whole process stress-free and affordable.",
    image: testimonial4,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" aria-label="Customer testimonials and reviews" className="relative overflow-hidden  bg-white py-10">

      <div className="max-w-7xl mx-auto relative z-10 px-5 md:px-0">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-6 md:mb-8 max-w-5xl text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-[#004093]/10 bg-slate-50 px-4 py-1.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#FE9900]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#004093]">
                Client Success Stories
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-slate-900">
            What Our <br /> <span className="text-[#004093]">Customers</span> Say
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-[#004093] to-[#FE9900]" />
          <p className="mt-8 text-base md:text-lg text-slate-600">
            Real feedback from homeowners and businesses across Australia who have made the switch to cleaner, cheaper energy.
          </p>
        </motion.div>

        {/* TESTIMONIALS CARD */}
        <div className="flex  w-full items-center justify-center">
          <TestimonialsCard
            items={items}
            height={200}
            width={800}
            autoPlay={true}
            autoPlayInterval={5000}
          />
        </div>
      </div>
    </section>
  );
}
