import  { useEffect, useState } from 'react';
import { easeOut, motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Zap,
  Battery,
  Home,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const SolarProcess = () => {
  const steps = [
    {
      id: '01',
      title: 'Harnessing the Sun',
      desc: 'High-efficiency solar panels capture sunlight and convert it into clean renewable energy for your property.',
      icon: Sun,
      color: 'from-amber-400 to-orange-500',
      glow: 'shadow-orange-500/20'
    },
    {
      id: '02',
      title: 'Smart Energy Conversion',
      desc: 'Advanced inverter systems transform solar power into usable electricity for daily operations.',
      icon: Zap,
      color: 'from-blue-400 to-indigo-600',
      glow: 'shadow-blue-500/20'
    },
    {
      id: '03',
      title: 'Battery Backup Storage',
      desc: 'Store extra electricity for nighttime usage and uninterrupted backup during outages.',
      icon: Battery,
      color: 'from-emerald-400 to-teal-600',
      glow: 'shadow-emerald-500/20'
    },
    {
      id: '04',
      title: 'Energy Independence',
      desc: 'Reduce dependency on expensive electricity and enjoy long-term energy savings.',
      icon: Home,
      color: 'from-purple-400 to-pink-600',
      glow: 'shadow-purple-500/20'
    }
  ];

  const rightContent = [
    {
      title: 'Smart Solar Monitoring',
      subtitle: 'Track Energy Live',
      value: '24/7',
      desc: 'Monitor your solar production and electricity savings in real-time using smart monitoring systems.',
      color: 'from-orange-400 to-yellow-500'
    },
    {
      title: 'Battery Backup System',
      subtitle: 'Power During Outage',
      value: '100%',
      desc: 'Store extra solar energy and use it anytime during power cuts or nighttime usage.',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Lower Electricity Bills',
      subtitle: 'Monthly Savings',
      value: '70%',
      desc: 'Reduce your electricity expenses significantly with efficient solar power generation.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Clean Green Energy',
      subtitle: 'Eco Friendly Future',
      value: '0 CO₂',
      desc: 'Switch to sustainable energy and contribute toward a greener environment.',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rightContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [rightContent.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section className="py-14 bg-[#010816] relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
        <motion.div variants={itemVariants} className="mb-12 ">
          <span className="flex items-center gap-2 text-[#FE9900] font-bold  justify-center uppercase tracking-[3px] text-sm mb-5">
            <ShieldCheck size={18} />
            Smart Solar Technology
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Solar Energy
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#FE9900] to-orange-400">
              Made Simple
            </span>
          </h2>

          <p className="text-slate-100 text-lg mx-auto text-center leading-relaxed max-w-6xl">
            Power your home or business with advanced solar solutions designed
            for maximum savings, efficiency, and long-term energy independence.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >


            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-6 rounded-lg border border-white hover:border-white/10 bg-white/2 hover:bg-white/4 transition-all duration-500"
                >
                  <div className="flex gap-5 items-start">
                    <div className="relative">
                      <span className="absolute -top-4 -left-2 text-4xl font-black text-white/5 group-hover:text-[#FE9900]/10 transition-all">
                        {step.id}
                      </span>

                      <div
                        className={`relative z-10 w-14 h-14 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center text-white shadow-xl ${step.glow} group-hover:scale-110 transition-transform duration-500`}
                      >
                        <step.icon size={28} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                        {step.title}

                        <ArrowRight
                          size={16}
                          className="text-[#FE9900] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                      </h3>


                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE AUTO CHANGING */}
          <div className="relative flex items-center justify-center min-h-[550px]">
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute w-[400px] h-[380px] border border-white/50 rounded-full"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute w-[440px] h-[380px] border border-[#FE9900]/60 rounded-full"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-md"
              >
                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/4 backdrop-blur-xl p-10 shadow-2xl">

                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${rightContent[activeIndex].color} opacity-10`}
                  />

                  {/* Small Top Badge */}
                  <div className="relative z-10 inline-flex items-center gap-2 px-10 py-2 rounded-full border border-[#FE9900]/90 bg-white/5 text-xs uppercase tracking-[2px] text-[#FE9900] mb-8">
                    Solar Technology
                  </div>

                  {/* Value */}
                  <div className="relative z-10 text-6xl md:text-7xl font-black text-white mb-5">
                    {rightContent[activeIndex].value}
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-3xl font-bold text-white mb-3">
                    {rightContent[activeIndex].title}
                  </h3>

                  {/* Subtitle */}
                  <p className="relative z-10 text-[#FE9900] uppercase tracking-[3px] text-sm mb-6">
                    {rightContent[activeIndex].subtitle}
                  </p>

                  {/* Description */}
                  <p className="relative z-10 text-slate-400 text-lg leading-relaxed">
                    {rightContent[activeIndex].desc}
                  </p>

                  {/* Bottom Progress */}
                  <div className="relative z-10 mt-10">
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        key={activeIndex}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4, ease: 'linear' }}
                        className="h-full bg-linear-to-r from-[#FE9900] to-orange-400 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Floating Blur */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#FE9900]/20 blur-3xl rounded-full" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarProcess;