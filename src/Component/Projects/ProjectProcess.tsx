import React from 'react';
import { easeOut, motion } from 'framer-motion';

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
    <section className="py-10 bg-white relative overflow-hidden">
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
            <h2 className="text-3xl md:text-5xl font-black text-[#004093] leading-tight">
              From Quote to{' '}
              <span className="text-[#FE9900]">Power-On</span>
              <br /> in 4 Easy Steps
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative z-10 group"
              >
                {/* Step number circle */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative w-20 h-20 rounded-3xl bg-white border-2 border-[#004093]/10 group-hover:border-[#FE9900] shadow-lg group-hover:shadow-[#FE9900]/20 transition-all duration-500 flex items-center justify-center mx-auto mb-8 group-hover:bg-[#004093]"
                >
                  <motion.span
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="text-4xl"
                  >
                    {step.icon}
                  </motion.span>

                  {/* Number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#FE9900] text-black text-xs font-black flex items-center justify-center shadow-md"
                  >
                    {step.num}
                  </motion.div>
                </motion.div>

                <div className="text-center">
                  <h3 className="text-xl font-black text-[#004093] mb-4 group-hover:text-[#FE9900] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-900 leading-relaxed text-sm px-4">{step.desc}</p>
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