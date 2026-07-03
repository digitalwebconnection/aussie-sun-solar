import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import BlurText from '../BlurText';
import directorImg from '../../assets/downloaded-images/director.jpg';

export default function DirectorMessage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={containerRef} id="director-message" className="relative py-12 lg:py-20 bg-white overflow-hidden" aria-label="Message from our director">
      {/* Subtle Background Accents Restored for Depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FE9900]/5 blur-[100px] rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#004093]/5 blur-[80px] rounded-full translate-y-1/4"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-200 group">
                <motion.img 
                  style={{ y: imgY }}
                  src={directorImg} 
                  alt="Director and Founder of Aussie Sun Solar" 
                  className="w-full aspect-4/5 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#004093]/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FE9900]/10 rounded-full blur-2xl z-0"></div>
              
              {/* Quote Icon Badge */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-xl z-20 border border-gray-100">
                <Quote size={32} className="text-[#FE9900]" fill="currentColor" />
              </div>
            </motion.div>

            {/* Text Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-1.5 mb-6 rounded-lg bg-gray-50 border border-gray-100">
                   <p className="text-[#FE9900] text-xs font-black tracking-[0.2em] uppercase">Leadership Message</p>
                </div>

                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] leading-tight mb-8 flex flex-col items-start">
                  <BlurText
                    text="A Message From Our Director"
                    delay={80}
                    animateBy="words"
                    direction="top"
                    className="text-[#FE9900]"
                  />
                </h2>

                <div className="relative">
                  <span className="absolute -top-12 -left-8 text-[12rem] text-gray-100 font-serif select-none pointer-events-none opacity-40">
                    “
                  </span>

                  <div className="relative z-10 space-y-6">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                      Aussie Sun Solar was founded with a singular focus: to address the gaps we witnessed in the Australian solar market—unreliable installations and a lack of long-term accountability.
                    </p>
                    
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                      As an electrician-led company, we prioritize <span className="text-[#004093] font-black underline decoration-[#FE9900] decoration-4 underline-offset-4">engineering excellence</span> and safety above all else. We don't just install panels; we build sustainable energy systems that empower our community.
                    </p>
                  </div>
                </div>

                {/* Signature Area */}
                <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-100">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FE9900] shadow-lg">
                      <img 
                        src={directorImg} 
                        alt="Director avatar portrait" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-[#004093]">John Doe</h4>
                    <p className="text-gray-500 font-bold tracking-wide text-sm mt-1 uppercase">
                      Founder & Director, <span className="text-[#FE9900]">Aussie Sun Solar</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}