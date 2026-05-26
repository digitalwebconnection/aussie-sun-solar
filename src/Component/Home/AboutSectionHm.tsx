import {
  CheckCircle2,
  Award,
  ShieldCheck,
  Zap,
} from "lucide-react";
import BlurText from "../BlurText";
import Stack from "../Stack";

const AboutSection = () => {
  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      {/* SUBTLE BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* =====================================
            LEFT SIDE: PREMIUM IMAGE STACK
        ===================================== */}
        <div className="relative">
          {/* BACKGROUND DECORATION */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FE9900]/5 rounded-full "></div>
          
          <div className="relative">
            {/* MAIN IMAGE STACK */}
            <div className="relative w-full h-[300px] lg:h-[500px] z-10">
              <Stack
                randomRotation={true}
                sendToBackOnClick={true}
                autoplay={true}
                autoplayDelay={4000}
                cards={[
                  "https://cdn.britannica.com/91/222691-050-E8BDF226/installing-solar-panels.jpg",
                  "https://5.imimg.com/data5/SELLER/Default/2025/3/498378875/UQ/HE/BB/35789085/solar-penal-570-adani.jpeg",
                  "https://png.pngtree.com/thumb_back/fw800/background/20230113/pngtree-blue-solar-panels-on-roof-with-street-view-photo-image_49208374.jpg",
                  "https://patidarsolar.com/wp-content/uploads/2024/01/aerial-view-private-house-with-solar-panels-roof-1024x682.jpg"
                ].map((src, i) => (
                  <div key={i} className="w-full h-full relative overflow-hidden">
                    <img
                      src={src}
                      alt={`Solar Panel Installation ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#004093]/30 to-transparent pointer-events-none"></div>
                  </div>
                ))}
              />
            </div>

            {/* FLOATING STATS CARD */}
            <div className="absolute z-11 -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-200 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#FE9900]/50 flex items-center justify-center">
                <Zap size={32} className="text-[#004093]" />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#004093]">10k+</h4>
                <p className="text-gray-900 font-medium">Panels Installed</p>
              </div>
            </div>

            {/* TRUST BADGE */}
            <div className="absolute top-2 left-2 bg-[#004093] z-11 text-white py-4 px-6 rounded-xl shadow-xl flex items-center gap-3">
              <ShieldCheck className="text-[#FE9900]" />
              <span className="font-bold tracking-tight">CEC Accredited</span>
            </div>
          </div>
        </div>

        {/* =====================================
            RIGHT SIDE: PROFESSIONAL CONTENT
        ===================================== */}
        <div className="lg:pl-5">
       
          {/* MAIN HEADING */}
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#111827] leading-tight tracking-tight flex flex-col items-start">
            <BlurText
              text="Aussie Sun Solar:"
              delay={50}
              animateBy="words"
              direction="bottom"
            />
            <BlurText
              text="Power Your Future"
              delay={50}
              animateBy="words"
              direction="bottom"
              className="text-[#004093]"
            />
            <span className="relative inline-block text-[#FE9900]">
              With The Sun
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 6C50 2 150 2 200 6" stroke="#FE9900" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* DESCRIPTION */}
          <div className="mt-5 md:mt-10">
            <BlurText
              text="Aussie Sun Solar is committed to making sustainable energy accessible for everyone. We provide customized solar solutions that combine cutting-edge technology with local expertise, ensuring maximum efficiency for your home or business."
              delay={20}
              animateBy="words"
              direction="top"
              className="text-gray-900 text-lg leading-relaxed"
            />
          </div>

          {/* CORE FEATURES GRID */}
          <div className="grid sm:grid-cols-2 gap-6 mt-5 md:mt-12 ">
            {[
              { title: "CEC Certified Installers", icon: Award },
              { title: "Tier-1 Premium Tech", icon: Zap },
              { title: "Zero Upfront Cost", icon: CheckCircle2 },
              { title: "Local Ongoing Support", icon: ShieldCheck },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 group ">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex  border border-gray-300  items-center justify-center group-hover:bg-[#004093] transition-colors duration-300">
                  <feature.icon size={20} className="text-[#FE9900]" />
                </div>
                <span className="font-bold text-gray-800">{feature.title}</span>
              </div>
            ))}
          </div>



        </div>

      </div>
    </section>
  );
};

export default AboutSection;