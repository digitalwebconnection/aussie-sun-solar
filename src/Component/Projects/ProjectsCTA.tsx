import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import FlipFadeText from '../Animations/FlipFadeText';
import solarHeroBg from '../../assets/downloaded-images/solar-hero-bg.jpg';

const ProjectsCTA: React.FC = () => {
  return (
    <section className=" relative overflow-hidden">

      <div className="  relative z-10">
        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-br from-[#003580] via-[#004093] to-[#0051b8]  overflow-hidden shadow-[0_40px_100px_rgba(0,64,147,0.35)]"
        >
          {/* Dot grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1.5px,transparent_1.5px)] bg-size-[28px_28px]" />

          {/* Glowing orbs */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#FE9900] opacity-15 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#FE9900] opacity-10 blur-[80px] pointer-events-none" />

          {/* Corner accent shape */}
          <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none">
            <div
              className="absolute top-0 right-0 w-full h-full opacity-100"
              style={{
                backgroundImage: `url(${solarHeroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
              }}
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 md:px-0 py-10">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FE9900]/20 border border-[#FE9900]/70 px-8 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#FE9900] animate-pulse" />
                <span className="text-white font-bold text-sm tracking-widest uppercase">Free Consultation</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight md:mb-8 mb-6">
                Ready to Join the
                <div className="mt-2 h-[1.2em]">
                  <FlipFadeText
                    words={["Solar Revolution?", "Energy Future?", "Clean Economy?", "Green Movement?"]}
                    className="justify-start min-h-0"
                    textClassName="text-4xl md:text-5xl text-[#FE9900] drop-shadow-[0_0_20px_rgba(254,153,0,0.3)]"
                    interval={3000}
                  />
                </div>
              </h2>

              <p className="text-white/90 text-lg leading-relaxed mb-10">
                Get a completely free, no-obligation solar assessment for your home or business.
                Our experts will design a custom system that maximises your savings from day one.
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#FE9900] hover:bg-[#e68900] text-white  px-8 py-2 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-[0_20px_50px_rgba(254,153,0,0.35)]"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:1300504912"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-[#FE9900] bg-white/5 backdrop-blur-md text-white font-bold px-8 py-2 rounded-lg text-lg transition-all duration-300 hover:bg-[#FE9900]/10"
                >
                  <Phone className="w-5 h-5" />
                  1300 504 912
                </a>
              </div> */}
            </div>

            {/* Right: contact cards */}
            <div className="flex flex-col justify-center gap-8">
              {[
            
                {
                  icon: <Mail className="w-6 h-6" />,
                  label: 'Email Us',
                  value: 'info@aussiesunsolar.com.au',
                  sub: 'We respond within 2 hours',
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  label: 'Service Areas',
                  value: 'Australia-Wide Coverage',
                  sub: 'All states & territories',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-5 bg-white/8 hover:bg-white/15 border border-white/60 hover:border-[#FE9900]/40 rounded-lg p-4 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-lg bg-[#FE9900]/20 flex items-center justify-center text-[#FE9900] group-hover:text-white shrink-0 group-hover:bg-[#FE9900]/40 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-white font-black text-lg leading-tight">{item.value}</p>
                    <p className="text-white/80 text-sm">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsCTA;
