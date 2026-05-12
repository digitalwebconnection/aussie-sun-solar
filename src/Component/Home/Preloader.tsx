import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, BatteryCharging, Zap, ShieldCheck } from "lucide-react";

const LOADING_STEPS = [
  { text: "Capturing Solar Energy", icon: Sun },
  { text: "Optimizing Performance", icon: Zap },
  { text: "Storing Clean Power", icon: BatteryCharging },
  { text: "System Ready", icon: ShieldCheck },
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev));
    }, 800);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)",
            transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
          }}
          className="fixed inset-0 z-9999 bg-[#000814] flex items-center justify-center overflow-hidden"
        >
          {/* STARFIELD BACKGROUND */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: Math.random(), scale: Math.random() }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{ 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%` 
                }}
              />
            ))}
          </div>

          {/* REALISTIC SUN CONTAINER */}
          <div className="relative flex flex-col items-center">
            
            <div className="relative w-64 h-64 flex items-center justify-center mb-16">
              
              {/* EXTERNAL GLOW LAYERS */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute w-[400px] h-[400px] bg-orange-500 rounded-full blur-[100px]"
              />
              <motion.div 
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute w-[300px] h-[300px] bg-yellow-400 rounded-full blur-[80px]"
              />

              {/* ROTATING SOLAR RAYS */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ rotate: i * 30 }}
                  animate={{ rotate: i * 30 + 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-1 h-full flex flex-col justify-between py-2"
                >
                  <div className="w-full h-24 bg-linear-to-t from-transparent to-orange-400/20 blur-sm rounded-full" />
                  <div className="w-full h-24 bg-linear-to-b from-transparent to-orange-400/20 blur-sm rounded-full" />
                </motion.div>
              ))}

              {/* THE REALISTIC SUN CORE */}
              <motion.div
                className="relative w-40 h-40 rounded-full shadow-[0_0_100px_rgba(255,165,0,0.8)] overflow-hidden"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #fff 0%, #ffeb3b 20%, #ff9800 50%, #f44336 100%)",
                }}
              >
                {/* Surface Turbulence / Flares */}
                <motion.div
                  animate={{ 
                    x: [-10, 10, -10],
                    y: [-10, 10, -10],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20%] opacity-40 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scale-150 mix-blend-overlay"
                />

                {/* Internal Heat Glow */}
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-radial-gradient(circle, transparent, rgba(255,87,34,0.4))"
                />

                {/* CURRENT STEP ICON (Inside Sun) */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 1.5, rotate: 45 }}
                      transition={{ duration: 0.5 }}
                      className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                    >
                      {(() => {
                        const Icon = LOADING_STEPS[currentStep].icon;
                        return <Icon size={50} strokeWidth={2} />;
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* ORBITING PARTICLE SWARM */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 3 + i, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute w-full h-full"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-200 rounded-full blur-[1px] shadow-[0_0_10px_#fff]"
                  />
                </motion.div>
              ))}
            </div>

            {/* BRANDING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-white text-5xl font-black tracking-[-2px] mb-2 italic">
                AUSSIE <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200">SUN</span>
              </h1>
              
              <div className="flex flex-col items-center gap-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentStep}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-orange-200/60 text-sm font-bold uppercase tracking-[0.4em]"
                  >
                    {LOADING_STEPS[currentStep].text}
                  </motion.p>
                </AnimatePresence>

                {/* SCI-FI PROGRESS BAR */}
                <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3.8, ease: "linear" }}
                    className="absolute top-0 left-0 h-full bg-linear-to-r from-orange-600 via-orange-400 to-yellow-200"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* UI ACCENTS */}
          <div className="absolute top-10 right-10 text-white/20 font-mono text-[10px] tracking-widest flex flex-col items-end">
            <span>SOLAR_CORE_L3_ACTIVE</span>
            <span>VOLTAGE_STABLE: 420V</span>
            <div className="w-32 h-px bg-white/10 mt-1" />
          </div>

          <div className="absolute bottom-10 left-10 text-white/20 font-mono text-[10px] tracking-widest">
            <span>© 2026 AUSSIE SUN SOLAR</span>
            <div className="w-32 h-px bg-white/10 mt-1" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
