import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronDown,
  ChevronRight,
  Phone,
  ArrowRight,
} from "lucide-react";

import logo from "../assets/logo.png";

/* ====================================
   PRODUCTS
==================================== */

const products: Record<string, { name: string; slug: string }[]> = {
  "Solar Panels": [
    { name: "Jinko Solar Panels", slug: "jinko-solar-panels" },
    { name: "JA Solar Panels", slug: "ja-solar-panels" },
    { name: "AIKO Solar Panels", slug: "aiko-solar-panels" },
    { name: "Canadian Solar Panels", slug: "canadian-solar-panels" },
    { name: "DAS Solar Panels", slug: "das-solar-panels" },
    { name: "DMEGC Solar Panels", slug: "dmegc-solar-panels" },
    { name: "Eging Solar Panels", slug: "eging-solar-panels" },
    { name: "Risen Solar Panels", slug: "risen-solar-panels" },
    { name: "Trina Solar Panels", slug: "trina-solar-panels" },
    { name: "Longi Solar Panels", slug: "longi-solar-panels" },
  ],

  "Solar Inverters": [
    { name: "GoodWe Inverters", slug: "goodwe-inverters" },
    { name: "Sungrow Inverters", slug: "sungrow-inverters" },
    { name: "Growatt Inverters", slug: "growatt-inverters" },
    { name: "Solis Inverters", slug: "solis-inverters" },
    { name: "SAJ Inverters", slug: "saj-inverters" },
    { name: "Solix Inverters", slug: "solix-inverters" },
  ],

  "Solar Batteries": [
    { name: "FoxESS Battery", slug: "foxess-battery" },
    { name: "Growatt Battery Systems", slug: "growatt-battery-systems" },
    { name: "SAJ Battery Systems", slug: "saj-battery-systems" },
    { name: "Anker Solix Battery Systems", slug: "anker-solix-battery-systems" },
    { name: "Sungrow Battery Systems", slug: "sungrow-battery-systems" },
    { name: "Alpha ESS Battery Systems", slug: "alpha-ess-battery-systems" },
    { name: "Neovolt Battery Systems", slug: "neovolt-battery-systems" },
    { name: "Sigenergy Battery Systems", slug: "sigenergy-battery-systems" },
  ],
};

const SolarNavbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const [activeSubMenu, setActiveSubMenu] =
    useState<string>("Solar Panels");

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  /* ====================================
     SCROLL EFFECT
  ==================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ====================================
     CLOSE DROPDOWN ON ROUTE CHANGE
  ==================================== */

  useEffect(() => {
    setActiveMenu(null);
  }, [location]);

  const isActive = (path: string) =>
    location.pathname === path;

  return (
    <div
      className={`fixed top-0 left-1/2  -translate-x-1/2 w-[94%] z-50 transition-all duration-500 ${scrolled
          ? "py-4"
          : "py-5"
        }`}
    >

      {/* ====================================
          MAIN NAVBAR
      ==================================== */}

      <div
        className={`relative rounded-full shadow-2xl transition-all duration-500 ${scrolled
            ? "bg-white border border-gray-100 shadow-[#FE9900]/10"
            : "bg-white border border-gray-50 shadow-[#004093]/5"
          }`}
      >



        <div className="relative flex items-center justify-between px-4 py-4">

          {/* ====================================
              LOGO
          ==================================== */}

          <Link
            to="/"
            className="flex ps-6 items-center gap-3"
          >

            <img
              src={logo}
              alt="Logo"
              className="h-12 object-contain"
            />

          </Link>

          {/* ====================================
              MENU
          ==================================== */}

          <div className="hidden lg:flex items-center gap-8 font-semibold text-[16px]">

            {/* HOME */}
            <Link
              to="/"
              className={`relative transition duration-300 ${isActive("/")
                  ? "text-[#FE9900]"
                  : "text-[#004093] hover:text-[#FE9900]"
                }`}
            >

              Home

              {isActive("/") && (
                <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#FE9900] rounded-full"></span>
              )}

            </Link>

            {/* ====================================
                SERVICES
            ==================================== */}

            <div
              className="relative py-2"
              onMouseEnter={() =>
                setActiveMenu("services")
              }
              onMouseLeave={() =>
                setActiveMenu(null)
              }
            >

              <Link
                to="/services"
                className={`flex items-center gap-1 transition duration-300 ${isActive("/services")
                    ? "text-[#FE9900]"
                    : "text-[#004093] hover:text-[#FE9900]"
                  }`}
              >

                Services

                <ChevronDown size={16} className={`transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`} />

              </Link>

              {/* DROPDOWN */}
              <AnimatePresence>
                {activeMenu === "services" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-0 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 z-50 mt-2"
                  >

                    {[
                      { name: "Solar Power Systems", path: "/services/solar-power-systems" },
                      { name: "Battery Storage Solutions", path: "/services" },
                      { name: "EV Chargers", path: "/services" },
                      { name: "Commercial Solar", path: "/services" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-5 py-4 rounded-2xl hover:bg-[#004093] hover:text-white transition font-semibold text-[#004093]"
                      >
                        {item.name}
                      </Link>
                    ))}

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* ====================================
                PRODUCTS
            ==================================== */}

            <div
              className="relative py-2"
              onMouseEnter={() =>
                setActiveMenu("products")
              }
              onMouseLeave={() => {
                setActiveMenu(null);
                setActiveSubMenu("Solar Panels");
              }}
            >

              <Link
                to="/products"
                className={`flex items-center gap-1 transition duration-300 ${isActive("/products")
                    ? "text-[#FE9900]"
                    : "text-[#004093] hover:text-[#FE9900]"
                  }`}
              >

                Products

                <ChevronDown size={16} className={`transition-transform duration-300 ${activeMenu === "products" ? "rotate-180" : ""}`} />

              </Link>

              {/* MEGA MENU */}
              <AnimatePresence>
                {activeMenu === "products" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-[-120px] flex bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 z-50 mt-2"
                  >

                    {/* LEFT SIDE */}
                    <div className="w-72 bg-[#f7f9fc] p-4">

                      {Object.keys(products).map(
                        (category, index) => (
                          <button
                            key={index}
                            onMouseEnter={() =>
                              setActiveSubMenu(category)
                            }
                            className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-left font-semibold transition mb-2 ${activeSubMenu === category
                                ? "bg-[#004093] text-white"
                                : "hover:bg-white text-[#004093]"
                              }`}
                          >

                            {category}

                            <ChevronRight size={18} />

                          </button>
                        )
                      )}

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-80 p-6">

                      <h3 className="text-xl font-bold mb-5 text-[#004093]">
                        {activeSubMenu}
                      </h3>

                      <div className="space-y-4">

                        {products[
                          activeSubMenu
                        ]?.map((item, index) => (
                          <Link
                            key={index}
                            to={`/products/${item.slug}`}
                            className="block font-semibold hover:text-[#FE9900] transition text-gray-700"
                          >
                            {item.name}
                          </Link>
                        ))}

                      </div>

                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* ABOUT */}
            <Link
              to="/about"
              className={`transition duration-300 ${isActive("/about")
                  ? "text-[#FE9900]"
                  : "text-[#004093] hover:text-[#FE9900]"
                }`}
            >
              About Us
            </Link>

            {/* PROJECTS */}
            <Link
              to="/projects"
              className={`transition duration-300 ${isActive("/projects")
                  ? "text-[#FE9900]"
                  : "text-[#004093] hover:text-[#FE9900]"
                }`}
            >
              Our Projects
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className={`transition duration-300 ${isActive("/contact")
                  ? "text-[#FE9900]"
                  : "text-[#004093] hover:text-[#FE9900]"
                }`}
            >
              Contact Us
            </Link>
            {/* ====================================
              RIGHT SIDE
          ==================================== */}

            <div className="hidden lg:flex items-center gap-5">

              {/* CALL */}
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-[#004093] flex items-center justify-center text-white shadow-lg">

                  <Phone size={18} fill="currentColor" />

                </div>

                <div>

                  <p className="text-xs text-[#004093]/60">
                    Call Us On
                  </p>

                  <h4 className="font-bold text-[#004093] text-lg">
                    1300 504 912
                  </h4>

                </div>

              </div>

              {/* BUTTON */}
              <Link
                to="/contact"
                className="group bg-[#FE9900] hover:bg-[#ffb033] text-white px-7 py-3 rounded-full font-bold flex items-center gap-3 transition duration-300 shadow-[0_10px_30px_rgba(254,153,0,0.3)] hover:scale-105"
              >

                Get A Quote

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition duration-300"
                />

              </Link>

            </div>
          </div>



        </div>

      </div>

    </div>
  );
};

export default SolarNavbar;