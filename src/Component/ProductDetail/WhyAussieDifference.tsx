import React from "react";
import { motion, type Variants } from "framer-motion";
import { Award, Wrench, Zap, ShieldCheck, ThumbsUp, Headphones } from "lucide-react";

export const WhyAussieDifference: React.FC = () => {
  const cards = [
    {
      title: "Australian Owned & Operated",
      desc: "We understand the local solar environment, offering systems designed specifically for harsh Australian conditions.",
      icon: <Award className="text-[#FE9900] group-hover:text-white transition-colors duration-300" size={24} />
    },
    {
      title: "Professional Installation",
      desc: "Every solar system is set up by Clean Energy Council (SAA) accredited installers, ensuring safety, compliance, and excellence.",
      icon: <Wrench className="text-[#FE9900] group-hover:text-white transition-colors duration-300" size={24} />
    },
    {
      title: "Finance Ready Options",
      desc: "Flexible, zero-deposit finance schemes are available so you can start saving on electricity immediately.",
      icon: <Zap className="text-[#FE9900] group-hover:text-white transition-colors duration-300" size={24} />
    },
    {
      title: "Battery-Ready Systems",
      desc: "We future-proof your installation. All string or micro-inverters are battery compatible for easy storage add-ons.",
      icon: <ShieldCheck className="text-[#FE9900] group-hover:text-white transition-colors duration-300" size={24} />
    },
    {
      title: "Full Warranty & Local Support",
      desc: "We cover every component with direct manufacturer backed warranties, serviced by our local offices.",
      icon: <ThumbsUp className="text-[#FE9900] group-hover:text-white transition-colors duration-300" size={24} />
    },
    {
      title: "Get Aussie Customer Service",
      desc: "Speak directly with local customer service agents who resolve queries and provide technical assistance promptly.",
      icon: <Headphones className="text-[#FE9900] group-hover:text-white transition-colors duration-300" size={24} />
    }
  ];

  // Animation variants for the container to trigger cascading effects
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Time delay between each card animating
      },
    },
  };

  // Animation variants for individual cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <section className=" py-14  overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Subtle decorative background gradient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FE9900]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 relative z-10"
        >
          <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#FE9900] bg-[#FE9900]/10 px-3 py-1.5 rounded-full">
            The Aussie Sun Solar Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight tracking-tight">
            Why More Australians Choose Aussie Sun Solar?
          </h2>
          <div className="w-16 h-1.5 bg-[#FE9900] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group relative bg-white p-8 rounded-lg border-4 border-slate-400/80 shadow-lg shadow-black/60 hover:shadow-[0_20px_40px_-15px_rgba(254,153,0,0.12)] hover:border-[#FE9900]/30 transition-all duration-300"
            >
              {/* Colored top-accent border line that reveals on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FE9900] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon Container with interactive morphing colors */}
              <div className="w-12 h-12 rounded-xl bg-[#FE9900]/10 group-hover:bg-[#FE9900] flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-sm">
                {card.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FE9900] transition-colors duration-200">
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-slate-600 text-sm font-normal leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};