import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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

const products: Record<string, string[]> = {
  "Solar Panels": [
    "Jinko Solar Panels",
    "JA Solar Panels",
    "Longi Solar Panels",
    "Canadian Solar Panels",
    "Trina Solar Panels",
    "Risen Solar Panels",
    "DMEGC Solar Panels",
  ],

  "Solar Inverters": [
    "Growatt Inverters",
    "Sungrow Inverters",
    "GoodWe Inverters",
    "SAJ Inverters",
    "Solis Inverters",
    "Solix Inverters",
  ],

  "Solar Batteries": [
    "FoxESS Battery",
    "Growatt Battery Systems",
    "Sungrow Battery Systems",
    "Alpha ESS Battery Systems",
    "Neovolt Battery Systems",
    "Sigenergy Battery Systems",
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
        className={`relative rounded-full  shadow-lg shadow-blur-xl shadow-[#FE9900] transition-all duration-500 ${scrolled
            ? "bg-white  border border-white/20 "
            : "bg-white  border border-white/50"
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
              className="relative"
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

                <ChevronDown size={16} />

              </Link>

              {/* DROPDOWN */}
              {activeMenu === "services" && (
                <div className="absolute top-14 left-0 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 z-50">

                  {[
                    "Solar Power Systems",
                    "Battery Storage Solutions",
                    "EV Chargers",
                    "Commercial Solar",
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to="/services"
                      className="block px-5 py-4 rounded-2xl hover:bg-[#004093] hover:text-white transition font-semibold text-[#004093]"
                    >
                      {item}
                    </Link>
                  ))}

                </div>
              )}

            </div>

            {/* ====================================
                PRODUCTS
            ==================================== */}

            <div
              className="relative"
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

                <ChevronDown size={16} />

              </Link>

              {/* MEGA MENU */}
              {activeMenu === "products" && (
                <div className="absolute top-14 left-[-120px] flex bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 z-50">

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
                          to="/products"
                          className="block font-semibold hover:text-[#FE9900] transition text-gray-700"
                        >
                          {item}
                        </Link>
                      ))}

                    </div>

                  </div>

                </div>
              )}

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

                <div className="w-10 h-10 rounded-full bg-[#004093] flex items-center justify-center text-[#FE9900] shadow-lg">

                  <Phone size={18} />

                </div>

                <div>

                  <p className="text-xs text-[#004093]/60">
                    Call Us On
                  </p>

                  <h4 className="font-bold text--[#004093] text-lg">
                    1300 555 947
                  </h4>

                </div>

              </div>

              {/* BUTTON */}
              <Link
                to="/contact"
                className="group bg-[#FE9900] hover:bg-[#ffad2e] text-[#004093] px-7 py-3 rounded-full font-bold flex items-center gap-3 transition duration-300 shadow-[0_10px_30px_rgba(254,153,0,0.45)] hover:scale-105"
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