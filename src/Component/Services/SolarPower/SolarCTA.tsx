import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import solarCtaBg from '../../../assets/downloaded-images/solar-cta-bg.jpg';

const SolarCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#004093] rounded-[50px] overflow-hidden flex flex-col lg:flex-row items-center relative shadow-[0_50px_100px_-20px_rgba(0,64,147,0.3)]"
        >
          {/* Background Gradient Accents */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FE9900]/10 skew-x-12 translate-x-20" />
          
          <div className="p-12 lg:p-24 lg:w-3/5 text-white z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]"
            >
              Work With a Team <br />
              <span className="text-[#FE9900]">That Works for You</span>
            </motion.h2>
            
            <p className="text-blue-100 text-xl mb-12 max-w-lg opacity-80 leading-relaxed">
              Whether you're going solar for the savings or the environment, Aussie Sun Solar is here to help at every step of your journey.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <button className="bg-white text-[#004093] px-12 py-5 rounded-full font-black text-lg flex items-center gap-3 hover:bg-[#FE9900] hover:text-white transition-all duration-300 shadow-xl group">
                GET A FREE QUOTE 
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#FE9900] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={28} fill="white" className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#FE9900] uppercase tracking-widest">24/7 Support Line</p>
                  <p className="text-2xl font-black group-hover:text-[#FE9900] transition-colors">1300 504 912</p>
                </div>
              </div>
            </div>
          </div>
    
          <div 
            className="lg:w-2/5 h-full min-h-[500px] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${solarCtaBg})` }}
          >
            {/* Artistic Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#004093] via-transparent to-transparent hidden lg:block" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-[#004093]/80 to-transparent lg:hidden" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarCTA;
