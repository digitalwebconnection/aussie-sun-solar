import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-180 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          {/* Small Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Trusted Professional Services
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Building Stronger
            <span className="block text-[#ff7d03]">
              Business Solutions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            We provide reliable advisory, taxation, audit, and regulatory
            services designed to help businesses grow with confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center text-white gap-2 rounded-xl bg-[#e6760d] px-10 py-2 font-semibold  transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-white/30 bg-white/10 px-10 py-2 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Explore Services
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;