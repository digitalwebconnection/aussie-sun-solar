import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import BlurText from "../BlurText";

import newSolarSystem from '../../assets/downloaded-images/new-solar-system.webp';
import expandingSolar from '../../assets/downloaded-images/expanding-solar.webp';
import newSolarBattery from '../../assets/downloaded-images/new-solar-battery.webp';
import contactService from '../../assets/downloaded-images/contact-service.jpg';

const services = [
  {
    title: "Solar Power Systems",
    image: newSolarSystem,
    desc: "High-performance solar systems designed for homes and businesses.",
  },
  {
    title: "Battery Storage Solutions",
    image: expandingSolar,
    desc: "Store excess energy and maximize your solar savings efficiently.",
  },
  {
    title: "EV Chargers",
    image: newSolarBattery,
    desc: "Smart EV charging solutions for residential and commercial use.",
  },
  {
    title: "Other Services",
    image: contactService,
    desc: "Complete energy solutions tailored for your modern lifestyle.",
  },
];

const ContactServices = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14">

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">

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

          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-[#111827] flex flex-col items-center">
            <BlurText
              text="Smart Energy"
              delay={80}
              animateBy="words"
              direction="top"
            />
            <BlurText
              text="Solutions For You"
              delay={80}
              animateBy="words"
              direction="bottom"
              className="text-[#004093]"
            />
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

                    <h3 className="text-xl md:text-2xl font-serif font-semibold leading-tight text-white">
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

      </div>
    </section>
  );
};

export default ContactServices;