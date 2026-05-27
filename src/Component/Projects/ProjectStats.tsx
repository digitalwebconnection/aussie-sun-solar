import React from "react";
import { easeOut, motion } from "framer-motion";
import {
  Zap,
  Users,
  Sun,
  Leaf,
} from "lucide-react";
import CountUp from "../Animations/CountUp";

const stats = [
  {
    number: 85,
    suffix: " MW",
    label: "Total Power Generated",
    icon: Zap,
    desc: "Clean energy delivered across projects",
    color: "#FE9900",
  },
  {
    number: 12,
    suffix: "K+",
    label: "Happy Customers",
    icon: Users,
    desc: "Trusted by families & businesses",
    color: "#004093",
  },
  {
    number: 250,
    suffix: "K+",
    label: "Panels Installed",
    icon: Sun,
    desc: "Premium quality solar installations",
    color: "#10B981",
  },
  {
    number: 150,
    suffix: "K",
    label: "Tonnes CO₂ Saved",
    icon: Leaf,
    desc: "Helping create a greener future",
    color: "#16A34A",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const ProjectStats: React.FC = () => {
  return (
    <section className="relative bg-white py-14 overflow-hidden">
      
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#004093 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Background Blurs */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-[#FE9900]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#004093]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-blue-50/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#004093]">
            Our Achievements
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#111827] md:text-5xl">
            Numbers That Reflect
            <span className="block text-[#FE9900]">
              Our Solar Excellence
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-900">
            Delivering reliable solar solutions with strong performance,
            customer satisfaction, and long-term sustainability.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: {
                    duration: 0.4,
                    ease: [0.33, 1, 0.68, 1] // Custom cubic-bezier for premium feel
                  },
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-lg
                  border
                  border-gray-500/50
                  bg-white
                  p-4 md:p-8
                  shadow-[0_20px_50px_rgba(0,0,0,0.34)]
                  hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-500
                "
              >
                {/* Top Gradient Line */}
                <div
                  className="absolute top-0 left-0 h-1.5 w-full opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(to right, ${s.color}, transparent)`,
                  }}
                />

                {/* Icon Container */}
                <div
                  className="mb-8 flex h-20 w-20 items-center justify-center rounded-lg transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${s.color}50`,
                  }}
                >
                  <Icon
                    className="h-10 w-10"
                    style={{
                      color: s.color,
                    }}
                  />
                </div>

                {/* Number with CountUp */}
                <div className="flex items-baseline gap-1">
                  <h3
                    className="text-5xl font-black tracking-tight md:text-6xl"
                    style={{
                      color: s.color,
                    }}
                  >
                    <CountUp
                      from={0}
                      to={s.number}
                      duration={4}
                      delay={i * 0.2}
                      separator=","
                    />
                  </h3>
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: s.color }}
                  >
                    {s.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="mt-4 text-xl font-bold text-[#111827]">
                  {s.label}
                </p>

                {/* Description */}
                <p className="mt-3 text-base leading-relaxed text-gray-800/80">
                  {s.desc}
                </p>

                {/* Premium Hover Elements */}
                <div
                  className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-all duration-700 group-hover:opacity-30"
                  style={{
                    backgroundColor: s.color,
                  }}
                />
                
                {/* Subtle border glow on hover */}
                <div 
                  className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent transition-colors duration-500 group-hover:border-current pointer-events-none opacity-5"
                  style={{ color: s.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-gray-600 pt-10 text-sm font-bold text-gray-900"
        >
          <div className="flex items-center gap-2 hover:text-[#004093] transition-colors cursor-default">
            <span className="text-[#FE9900]">✓</span> CEC Accredited Installers
          </div>
          <div className="flex items-center gap-2 hover:text-[#004093] transition-colors cursor-default">
            <span className="text-[#FE9900]">✓</span> 10-Year Workmanship Warranty
          </div>
          <div className="flex items-center gap-2 hover:text-[#004093] transition-colors cursor-default">
            <span className="text-[#FE9900]">✓</span> Premium Solar Products
          </div>
          <div className="flex items-center gap-2 hover:text-[#004093] transition-colors cursor-default">
            <span className="text-[#FE9900]">✓</span> Government Approved Solutions
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectStats;