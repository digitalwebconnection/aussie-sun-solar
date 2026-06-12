
import { motion } from "framer-motion";
import { Phone, ChevronRight } from "lucide-react";
import { usePopup } from "../../context/PopupContext";
import contactBannerPerson from '../../assets/downloaded-images/contact-banner-person.jpg';

const ContactBanner = () => {
  const { openPopup } = usePopup();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#004093] rounded-lg overflow-hidden p-12 md:p-20"
        >
          {/* Background decoration */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-right" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                Work With a Team <br />
                That Works for You
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-lg">
                Whether you're going solar for the first time or upgrading your existing system, Aussie Sun Solar is here to help — with no shortcuts, no confusing jargon, and no fluff.
              </p>
              
              <div className="mt-12 flex flex-wrap gap-6 items-center">
                <button onClick={openPopup} className="flex items-center gap-3 bg-white text-[#004093] px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#FE9900] hover:text-white transition-all">
                  Book a Consultation
                  <ChevronRight size={20} />
                </button>
                
                <a href="tel:1300672194" className="flex items-center gap-4 text-white hover:text-[#FE9900] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={24} fill="currentColor" className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-60 uppercase tracking-widest">24/7 Support</p>
                    <p className="text-xl font-black">1300 672 194</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src={contactBannerPerson} 
                alt="Support Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;
