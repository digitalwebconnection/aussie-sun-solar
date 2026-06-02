import { motion } from "framer-motion";
import { CheckCircle2, SunMedium } from "lucide-react";
import solarRoof1 from '../../assets/downloaded-images/solar-roof-1.jpg';
import zodiacCommercial from '../../assets/downloaded-images/zodiac-commercial-solar.png';
import graceIndustrial from '../../assets/downloaded-images/grace-industrial-solar.webp';

export default function SolarExpertiseSection() {
  const locations = [
    {
      title: "Residential Solar Solutions",
      image: solarRoof1,
      description: "Reliable residential solar solutions designed for Australian homes to reduce electricity bills, increase energy efficiency, and deliver long-term savings with high-performance solar panel systems.",
      points: [
        "Premium high-efficiency solar panels for maximum power generation",
        "Battery storage integration for reliable backup energy solutions",
        "Government solar rebate assistance and smooth installation support",
      ],
      color: "from-[#004093] to-[#002855]",
    },
    {
      title: "Commercial Solar Energy",
      image: zodiacCommercial,
      description: "Advanced commercial solar energy systems for offices, retail spaces, warehouses, and commercial buildings looking to lower operational costs and improve energy efficiency across Queensland and Australia.",
      points: [
        "Reduce business electricity expenses with smart solar technology",
        "Custom commercial solar EPC solutions tailored to your energy needs",
        "Long-term savings with scalable and sustainable solar systems",
      ],
      color: "from-[#FE9900] to-[#E68A00]",
    },
    {
      title: "Industrial Solar Projects",
      image: graceIndustrial,
      description: "Large-scale industrial solar projects built for factories, manufacturing units, and high-energy industries requiring reliable, cost-effective, and high-performance renewable energy solutions.",
      points: [
        "Mega watt solar installations for industrial-scale energy demands",
        "High-performance solar systems engineered for maximum efficiency",
        "Complete solar EPC project management from design to installation",
      ],
      color: "from-[#004093] to-[#002855]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-12" aria-label="Solar expertise and services">


      <div className="container relative z-10 mx-auto px-6 lg:px-0">

        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-14">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-10 py-2 rounded-full bg-[#004093]/10 border border-[#004093]/20 mb-6"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#FE9900] animate-pulse"></div>
            <p className="text-[#004093] uppercase tracking-[0.25em] text-xs font-black">
              Solar Expertise
            </p>
          </motion.div>

                <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl leading-[1.2]">
                           Complete Solar
                        <span className="block bg-[#004093] bg-clip-text text-transparent py-2 pb-4">
                               Energy Solutions
                        </span>
                    </h2>



                    <p className="mx-auto mt-5 max-w-7xl text-lg leading-loose text-slate-600">
                       From residential rooftop systems to large-scale industrial projects,
            we deliver high-performance solar solutions focused on savings,
            sustainability, and energy independence across Australia.
                    </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

          {locations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col"
            >

              {/* Top Image */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>

                {/* Tag */}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-lg shadow-xl">
                  <SunMedium size={18} className="text-[#FE9900]" />
                  <span className="font-black text-sm uppercase tracking-wider">
                    Tier 1 Solar
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-1">

                <h3 className="text-xl md:text-3xl font-black text-[#004093] leading-tight group-hover:text-[#FE9900] transition-all duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-6 leading-relaxed text-lg font-medium">
                  {item.description}
                </p>

                {/* Points */}
                <div className="space-y-5 mt-10 mb-12 flex-1">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className={`w-8 h-8 rounded-lg bg-linear-to-r ${item.color} flex items-center justify-center text-white shadow-lg shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                        <CheckCircle2 size={18} />
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed font-bold">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-5 rounded-lg bg-linear-to-r ${item.color} text-white font-black text-xl shadow-xl hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300`}
                >
                  Explore Solutions
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}