import { motion, type Variants } from "framer-motion";
import {
  // Phone,
  Mail,
  MapPin,
  ExternalLink,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  // FaLinkedinIn,    
  FaYoutube,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import secLogo from "../assets/downloaded-images/sec-logo.svg";

/* ====================================
   ANIMATION VARIANTS
==================================== */

const containerVariants: Variants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const Footer = () => {
  return (
    <footer className="relative bg-white text-[#004093] overflow-hidden border-t border-gray-100">
      {/* ====================================
          TOP CTA SECTION
      ==================================== */}

      <div className="relative z-10 bg-[#000000] border-b border-gray-500/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          {/* LEFT */}

          <div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight leading-tight text-white"
            >
              Start Your{" "}
              <span className="text-[#FE9900]">
                Solar Journey
              </span>
            </motion.h2>

            <p className="text-gray-100 mt-2 text-base sm:text-lg">
              Premium energy solutions for a
              sustainable future.
            </p>
          </div>

          {/* BUTTON */}

          <Link
            to="/contact"
            className="flex items-center justify-center gap-3 bg-[#FE9900] text-white px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-lg shadow-xl shadow-[#FE9900]/20 transition-all group w-full sm:w-auto hover:bg-[#e68900] hover:scale-105"
          >
            Get A Free Quote
            <ExternalLink
              size={20}
              className="group-hover:rotate-45 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* ====================================
          MAIN GRID
      ==================================== */}

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-8">
          {/* ====================================
              BRAND
          ==================================== */}

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <img
              src={logo}
              alt="Aussie Sun Solar"
              className="h-20 sm:h-24 w-auto"
            />

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Australia's trusted partner in
              renewable energy. We provide
              high-efficiency solar panels and
              battery systems tailored for your
              needs.
            </p>
          </motion.div>

          {/* ====================================
              CONTACT
          ==================================== */}

          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-8 flex items-center gap-3 text-[#004093]">
              <span className="w-2 h-7 bg-[#FE9900] rounded-full"></span>

              Contact Us
            </h3>

            <div className="space-y-6">
              {/* PHONE */}

              <a
                href="tel:1300672194"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#004093] flex items-center justify-center group-hover:bg-[#FE9900] transition-colors shadow-lg shadow-blue-900/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Call Us
                  </p>

                  <h4 className="font-extrabold text-sm group-hover:text-[#FE9900] transition-colors">
                    1300 672 194
                  </h4>
                </div>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:info@aussiesunsolar.com.au"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#004093] flex items-center justify-center group-hover:bg-[#FE9900] transition-colors shadow-lg shadow-blue-900/10">
                  <Mail
                    size={20}
                    className="text-white"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Email Us
                  </p>

                  <h4 className="font-extrabold text-sm truncate group-hover:text-[#FE9900] transition-colors">
                    info@aussiesunsolar.com.au
                  </h4>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ====================================
              OFFICES
          ==================================== */}

          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-8 flex items-center gap-3 text-[#004093]">
              <span className="w-2 h-7 bg-[#FE9900] rounded-full"></span>

              Our Offices
            </h3>

            <div className="space-y-8">
              {[
                {
                  state: "New South Wales",
                  addr: "114 burns road, kellyville nsw 2155",
                },


              ].map((loc, i) => (
                <div
                  key={i}
                  className="flex gap-4 group"
                >
                  <MapPin
                    size={22}
                    className="text-[#FE9900] shrink-0 mt-1"
                  />

                  <div>
                    <h4 className="font-bold text-[#004093]">
                      {loc.state}
                    </h4>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {loc.addr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ====================================
              QUICK LINKS
          ==================================== */}

          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-8 flex items-center gap-3 text-[#004093]">
              <span className="w-2 h-7 bg-[#FE9900] rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Home", to: "/" },
                { label: "Products", to: "/products" },
                { label: "About Us", to: "/about" },
                { label: "Our Projects", to: "/projects" },
                { label: "Contact Us", to: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-[#FE9900] font-semibold transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE9900] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* ====================================
          ACCREDITATION BAR
      ==================================== */}

      <div className="border-t border-gray-400 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* LEFT */}

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <img
              src={secLogo}
              alt="Smart Energy Council accreditation logo"
              className="h-16 sm:h-20 md:h-24 object-contain"
            />

            {/* SOCIAL */}

            <div className="flex items-center gap-4">
              {[

                { Icon: FaInstagram, href: "https://www.instagram.com/aussiesun_solar/", label: "Follow us on Instagram" },
                { Icon: FaFacebookF, href: "https://www.facebook.com/people/Aussie-Sun-Solar/61590361358977/", label: "Follow us on Facebook" },
                // { Icon: FaLinkedinIn, href: "#", label: "Connect with us on LinkedIn" },
                { Icon: FaYoutube, href: "https://www.youtube.com/@AussieSunSolar", label: "Watch us on YouTube" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center text-[#004093] hover:bg-[#FE9900] hover:text-white hover:border-[#FE9900] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ====================================
          POLICY LINKS
      ==================================== */}

      <div className="border-t border-gray-400 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col lg:flex-row justify-between items-center gap-5">
          {/* LINKS */}

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm md:text-base text-center">
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-[#FE9900] transition-all font-medium"
            >
              Privacy Policy
            </Link>

            <a
              href="#"
              className="text-gray-600 hover:text-[#FE9900] transition-all font-medium"
            >
              Terms &amp; Conditions
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-[#FE9900] transition-all font-medium"
            >
              Complaints Handling Policy
            </a>
          </div>

          {/* COPYRIGHT */}

          <div className="flex flex-col items-center lg:items-end gap-1">
            <p className="text-gray-500 text-sm md:text-base text-center lg:text-right">
              ©2026
              <span className="font-bold text-[#004093]">
                {" "}
                AUSSIE SUN SOLAR PTY LTD
              </span>{" "}
              ABN 47 697 452 583
            </p>

          </div>
        </div>
      </div>

      {/* ====================================
          DISCLAIMER
      ==================================== */}

      <div className="border-t border-gray-400 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-gray-600 leading-7 sm:leading-8 text-sm md:text-base">
            This Solar System Promotion is
            available for standard metropolitan
            based installations only. Price is
            after Small Scale Technology
            Certificates (STCs) have been
            assigned to Aussies Sun Solar Pty
            Ltd or its agents. Any additional
            extras including but not limited to
            double storey, roof type, meter box
            upgrades or three phase power, may
            attract additional charges. Price
            beat offer applies to local
            competitor advertised quotes only
            and must be for identical goods.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Terms */}
            <p className="text-[#004093] font-semibold text-sm md:text-base">
              *Terms and conditions apply.
            </p>

            {/* Developer Credit */}
            <div className="flex items-center gap-2 text-sm md:text-base text-gray-500">
              <Code size={18} className="text-[#004093] shrink-0" />
              <span>Developed by</span>
              <a
                href="https://digitalwebconnection.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#004093] hover:underline transition-colors duration-200"
              >
                Digital Web Connection
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;