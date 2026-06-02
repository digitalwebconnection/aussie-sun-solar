import { motion } from "framer-motion";
import solarRoof1 from '../../assets/downloaded-images/solar-roof-1.jpg';

const ContactPageHero = () => {
  return (
    <section className="relative overflow-hidden pt-36 pb-28">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={solarRoof1}
          alt="Solar panels on rooftop background"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#004093] via-black/30 to-black/10" />
      </div>

      {/* Animated Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#FE9900]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#004093]/30 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          {/* Small Line + Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-[2px] w-14 bg-[#FE9900]" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FE9900]">
              Contact Us
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Power Your Future
            <span className="block text-[#FE9900]">
              With Aussie Sun
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            Get in touch with our team for solar solutions,
            project consultation, and expert guidance tailored
            for your energy needs.
          </motion.p>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-22 w-full bg-linear-to-t from-white to-transparent" />
    </section>
  );
};

export default ContactPageHero;