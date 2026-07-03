import React from 'react';
import { easeOut, motion } from 'framer-motion';
import BlurText from '../BlurText';

const steps = [
  {
    num: '01',
    title: 'Free Site Assessment',
    desc: 'Our solar consultant visits your property, evaluates your roof, energy usage, and designs the perfect system for your needs.',
    icon: '🏠',
  },
  {
    num: '02',
    title: 'Custom Proposal',
    desc: 'Within 24 hours we send a detailed proposal including system specifications, expected savings, ROI timeline, and all applicable rebates.',
    icon: '📋',
  },
  {
    num: '03',
    title: 'Approvals & Permits',
    desc: 'We handle all grid connection approvals, council permits, and government rebate paperwork on your behalf — completely stress-free.',
    icon: '✅',
  },
  {
    num: '04',
    title: 'Expert Installation',
    desc: 'Our SAA-accredited team installs your system in a single day with zero mess, minimal disruption, and a thorough post-install test.',
    icon: '⚡',
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const ProjectProcess: React.FC = () => {
  return (
    <section className="py-4 md:py-10 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#004093_1px,transparent_1px)] bg-size-[30px_30px] opacity-[0.025]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col text-center mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[#FE9900] font-bold text-sm tracking-widest uppercase mb-4">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8 }}
                className="h-0.5 bg-[#FE9900] rounded-full"
              />
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] leading-tight flex flex-col items-center">
              <BlurText
                text="From Quote to Power-On"
                delay={80}
                animateBy="words"
                direction="top"
              />
              <BlurText
                text="in 4 Easy Steps"
                delay={80}
                animateBy="words"
                direction="bottom"
                className="text-[#FE9900]"
              />
            </h2>
          </div>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            We've refined our process over 15 years to make going solar as smooth and fast as possible.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated Horizontal connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-14 left-[11%] right-[11%] h-0.5 bg-linear-to-r from-[#004093]/10 via-[#FE9900] to-[#004093]/10 z-0 origin-left"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:grid lg:grid-cols-4 gap-12 lg:gap-8 relative"
          >
            {/* Animated Vertical connector line for mobile */}
            <div className="lg:hidden absolute left-8 top-8 bottom-8 w-[2px] bg-linear-to-b from-[#004093]/20 via-[#FE9900]/60 to-[#004093]/20 z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative z-10 group flex flex-row items-start gap-6 text-left lg:flex-col lg:items-center lg:text-center"
              >
                {/* Step number circle */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-lg bg-white border-2 border-[#004093]/40 group-hover:border-[#FE9900] shadow-lg group-hover:shadow-[#FE9900]/20 transition-all duration-500 flex items-center justify-center group-hover:bg-[#004093]"
                >
                  <motion.span
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="text-3xl lg:text-4xl"
                  >
                    {step.icon}
                  </motion.span>

                  {/* Number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#FE9900] text-black text-[10px] lg:text-xs font-black flex items-center justify-center shadow-md"
                  >
                    {step.num}
                  </motion.div>
                </motion.div>

                <div className="flex-1 mt-1 lg:mt-8 lg:text-center">
                  <h3 className="text-lg lg:text-2xl font-serif font-semibold text-[#004093] mb-2 lg:mb-4 group-hover:text-[#FE9900] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-900 leading-relaxed text-sm lg:px-4">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProjectProcess;