import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { CheckCircle2, Zap, Award } from "lucide-react";
import BlurText from "../BlurText";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

import etSolarFeature from '../../assets/downloaded-images/et-solar-feature.jpg';
import insolationSolar from '../../assets/downloaded-images/insolation-solar.jpg';


// 3D Background Element
function ThreeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} scale={2}>
            <MeshDistortMaterial
              color="#FE9900"
              speed={5}
              distort={0.4}
              radius={1}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}

function ThreeSceneBlue() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Sphere args={[1, 64, 64]} scale={2.5}>
            <MeshDistortMaterial
              color="#ffffff"
              speed={3}
              distort={0.3}
              radius={1}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}

export default function AboutFeatures() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // GSAP for 3D Tilt Effect on Stats Cards
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(ref.current, {
      rotateY: x * 35,
      rotateX: -y * 35,
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1200,
    });
  };

  const handleMouseLeave = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section ref={containerRef} className="bg-white overflow-hidden selection:bg-[#FE9900] selection:text-white" aria-label="Our philosophy and what sets us apart">
      <div className="grid lg:grid-cols-2">

        {/* TOP LEFT: IMAGE & STATS */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-full overflow-hidden group"
        >
          <img
            src={etSolarFeature}
            alt="Solar panel installation crew on rooftop"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#004093]/40 to-[#004093]/10"></div>

          {/* Stats Card with GSAP Tilt */}
          <div
            ref={card1Ref}
            onMouseMove={(e) => handleMouseMove(e, card1Ref)}
            onMouseLeave={() => handleMouseLeave(card1Ref)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 md:w-64 md:h-64 bg-[#004093] flex flex-col items-center justify-center text-white p-6 shadow-[0_50px_100px_-20px_rgba(0,64,147,0.5)] border-b-8 border-[#FE9900] z-20 cursor-pointer rounded-2xl"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#FE9900]/20 blur-xl rounded-full"></div>
              <Award size={48} className="mb-2 text-[#FE9900] relative z-10" />
            </motion.div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold tracking-tighter">7 +</h3>
            <p className="text-xs uppercase tracking-[0.2em] mt-2 font-black text-center text-white/90">
              Years Of Experience
            </p>
            <p className="text-[10px] md:text-xs mt-2 font-medium text-center text-white/70 px-2 leading-relaxed">
              Providing reliable solar panel installation and renewable energy solutions across Australia.
            </p>
          </div>
        </motion.div>

        {/* TOP RIGHT: BELIEFS */}
        <div className="bg-[#004093] p-4 lg:p-10 flex flex-col justify-center text-white relative overflow-hidden">
          <ThreeSceneBlue />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#FE9900] font-black tracking-[0.3em] uppercase text-xs px-8 py-2 bg-white/5 rounded-full border border-white/10">
                Our Philosophy
              </span>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold mt-8 mb-12 leading-tight tracking-tighter text-white flex flex-col items-start">
                <BlurText
                  text="Delivering Trusted Solar Solutions"
                  delay={70}
                  animateBy="words"
                  direction="top"
                />
                <BlurText
                  text="With Quality & Excellence"
                  delay={70}
                  animateBy="words"
                  direction="bottom"
                  className="text-transparent bg-clip-text bg-linear-to-r from-[#FE9900] to-orange-400"
                />
              </h2>
            </motion.div>

            <ul className="space-y-4">
              {[
                "Honest guidance with transparent solar solutions and no pressure sales approach",
                "Premium & SAA-approved solar panels, inverters, and equipment",
                "Fast and professional solar installations completed by experienced in-house teams",
                "Future-ready solar systems compatible with battery storage and EV charging solutions",
                "Ongoing support, monitoring, maintenance, and long-term energy savings for homes and businesses"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="flex items-center gap-6 group/item"
                >
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover/item:bg-[#FE9900] group-hover/item:scale-110 transition-all duration-300">
                    <CheckCircle2 size={24} className="text-[#FE9900] group-hover/item:text-white" />
                  </div>
                  <span className="text-base md:text-xl font-bold text-white/70 group-hover/item:text-white transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM LEFT: WHAT SETS US APART */}
        <div className="bg-[#FE9900] p-4 lg:p-10 flex flex-col justify-center text-[#004093] relative overflow-hidden order-2 lg:order-1">
          <ThreeScene />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#004093] font-black tracking-[0.3em] uppercase text-xs px-4 py-2 bg-black/5 rounded-full border border-black/10">
                WHY CHOOSE OUR SOLAR TEAM
              </span>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold mt-8 mb-8 leading-tight tracking-tighter flex flex-col items-start">
                <BlurText
                  text="What Makes Our Solar Company Stand Out"
                  delay={70}
                  animateBy="words"
                  direction="top"
                />
                <BlurText
                  text="Across Queensland & Australia"
                  delay={60}
                  animateBy="words"
                  direction="bottom"
                  className="text-white"
                />
              </h2>
            </motion.div>

            <ul className="space-y-4">
              {[
                "Licensed electrician-owned solar company focused on quality workmanship and reliable energy solutions",
                "Experienced in-house solar installers serving Queensland, NSW, and South Australia",
                "Certified Level 2 ASP professionals for safe and compliant electrical solar work",
                "Fully SAA-compliant solar panel installation using trusted industry-approved equipment",
                "Dedicated after-installation support, system monitoring, and customer assistance you can rely on"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  custom={index + 5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="flex items-center gap-6 group/item"
                >
                  <div className="shrink-0 w-12 h-12 bg-[#004093] rounded-2xl flex items-center justify-center group-hover/item:bg-white group-hover/item:scale-110 transition-all duration-300">
                    <CheckCircle2 size={24} className="text-[#FE9900] group-hover/item:text-[#004093]" />
                  </div>
                  <span className="text-base md:text-xl font-black text-[#004093]/70 group-hover/item:text-[#004093] transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM RIGHT: IMAGE & STATS */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative h-full overflow-hidden group order-1 lg:order-2"
        >
          <img
            src={insolationSolar}
            alt="Solar installation workplace team"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

          {/* Stats Card with GSAP Tilt */}
          <div
            ref={card2Ref}
            onMouseMove={(e) => handleMouseMove(e, card2Ref)}
            onMouseLeave={() => handleMouseLeave(card2Ref)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-64 md:h-64 w-50 h-50 bg-[#004093] flex flex-col items-center justify-center text-white p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-t-8 border-[#FE9900] z-20 cursor-pointer rounded-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#FE9900]/20 blur-xl rounded-full"></div>
              <Zap size={48} className="mb-2 text-[#FE9900] relative z-10" />
            </motion.div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold tracking-tighter">400 +</h3>
            <p className="text-xs uppercase tracking-[0.2em] mt-2 font-black text-center text-white/90">
              Level 2 ASP Solar & Electrical Projects
            </p>
            <p className="text-[10px] md:text-xs mt-2 font-medium text-center text-white/70 px-2 leading-relaxed">
              Successfully Completed
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
