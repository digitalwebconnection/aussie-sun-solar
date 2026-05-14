import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Solar Power Systems",
    image:
      "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/new-solar-sytem.webp",
    desc: "High-performance solar systems designed for homes and businesses.",
  },
  {
    title: "Battery Storage Solutions",
    image:
      "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/expanding-existing-solar.webp",
    desc: "Store excess energy and maximize your solar savings efficiently.",
  },
  {
    title: "EV Chargers",
    image:
      "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/new-solar-battery-sytem.webp",
    desc: "Smart EV charging solutions for residential and commercial use.",
  },
  {
    title: "Other Services",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    desc: "Complete energy solutions tailored for your modern lifestyle.",
  },
];

const ContactServices = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14">

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-[#004093]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-[#FE9900]/10 blur-[120px]" />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#004093 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-[#FE9900]" />

            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FE9900]">
              Our Services
            </span>

            <div className="h-[2px] w-12 bg-[#FE9900]" />
          </div>

          <h2 className="text-4xl font-black leading-tight text-[#111827] md:text-5xl">
            Smart Energy
            <span className="block text-[#004093]">
              Solutions For You
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Discover premium solar, battery, and EV charging
            services built for modern energy efficiency.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-lg border border-[#FE9900] shadow-lg shadow-[#FE9900]/60"
            >

              {/* Animated Border */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[-120%]
                  rounded-full
                  bg-[conic-gradient(from_0deg,#004093,transparent,#FE9900,transparent,#004093)]
                  opacity-60
                "
              />

              {/* Card */}
              <div className="relative z-10 h-full overflow-hidden rounded-[lg bg-white">

                {/* Image */}
                <div className="relative h-80 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />

                  {/* Floating Glow */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FE9900]/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  {/* Arrow Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/15
                      backdrop-blur-md
                      border
                      border-white/20
                      text-white
                    "
                  >
                    <ArrowUpRight size={22} />
                  </motion.div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">

                    {/* Animated Line */}
                    <motion.div
                      animate={{
                        x: ["-100%", "250%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        mb-5
                        h-[3px]
                        w-[25%]
                        rounded-full
                        bg-linear-to-r
                        from-transparent
                        via-[#FE9900]
                        to-transparent
                      "
                    />

                    <h3 className="text-2xl font-black leading-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      {service.desc}
                    </p>

                    {/* Bottom Hover Button */}
                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#FE9900]
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:opacity-100
                      "
                    >
                      Explore Service
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <button
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-2xl
              bg-[#004093]
              px-10
              py-5
              text-sm
              font-black
              uppercase
              tracking-[0.2em]
              text-white
              shadow-[0_20px_50px_rgba(0,64,147,0.25)]
              transition-all
              duration-300
              hover:bg-[#FE9900]
            
            "
          >
            How We Can Help You

            <ChevronRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactServices;