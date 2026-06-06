import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Zap,
  Battery,
  Sun,
  Building2,
} from "lucide-react";
import logo from "../assets/logo.png";

/* ====================================
   DATA
==================================== */

const services = [
  {
    name: "Solar Power Systems",
    slug: "solar-power-systems",
    icon: Sun,
    desc: "Premium residential & commercial solar",
  },
  {
    name: "Battery Storage Solutions",
    slug: "battery-storage-solutions",
    icon: Battery,
    desc: "Store energy, stay off-grid",
  },
  {
    name: "EV Chargers",
    slug: "ev-chargers",
    icon: Zap,
    desc: "Fast home & commercial EV charging",
  },
  {
    name: "Commercial Solar",
    slug: "commercial-solar",
    icon: Building2,
    desc: "Large-scale solar for businesses",
  },
];

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

/* ====================================
   COMPONENT
==================================== */

const SolarNavbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string>("Solar Panels");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mobile accordion state
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileProductSub, setMobileProductSub] = useState<string>("Solar Panels");

  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  /* -- Scroll hide/show -- */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setShowNavbar(y <= lastScrollY || y < 60);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* -- Close on route change -- */
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileExpanded(null);
  }, [location]);

  /* -- Lock body scroll when mobile open -- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = () => location.pathname.startsWith("/services");
  const isProductActive = () => location.pathname.startsWith("/products");

  return (
    <>
      {/* ============================================================
          NAVBAR WRAPPER
      ============================================================ */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 w-[96%] lg:w-[94%] z-50 transition-all duration-500 ${
          showNavbar ? "top-0 opacity-100" : "-top-32 opacity-0"
        } ${scrolled ? "py-3" : "py-4"}`}
      >
        <div
          ref={menuRef}
          className={`relative rounded-2xl lg:rounded-full shadow-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/98 border border-gray-200 shadow-blue-100/60"
              : "bg-white border border-gray-100"
          }`}
        >
          <div className="relative flex items-center justify-between px-4 py-3 lg:py-3">

            {/* ---- LOGO ---- */}
            <Link to="/" className="flex items-center gap-3 ps-1 lg:ps-5 shrink-0">
              <img
                src={logo}
                alt="Aussie Sun Solar Logo"
                className="h-10 lg:h-12 object-contain"
              />
            </Link>

            {/* ---- DESKTOP LINKS ---- */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-[15px] xl:text-[16px]">

              {/* Home */}
              <Link
                to="/"
                className={`relative pb-0.5 transition duration-300 ${
                  isActive("/")
                    ? "text-[#FE9900]"
                    : "text-[#004093] hover:text-[#FE9900]"
                }`}
              >
                Home
                {isActive("/") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FE9900] rounded-full" />
                )}
              </Link>
  {/* About Us */}
              <Link
                to="/about"
                className={`transition duration-300 ${
                  isActive("/about")
                    ? "text-[#FE9900]"
                    : "text-[#004093] hover:text-[#FE9900]"
                }`}
              >
                About Us
              </Link>

              {/* Services dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setActiveMenu("services")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 transition duration-300 ${
                    isServiceActive()
                      ? "text-[#FE9900]"
                      : "text-[#004093] hover:text-[#FE9900]"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      activeMenu === "services" ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {activeMenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 mt-2 w-72 p-3"
                    >
                      {services.map((svc, i) => {
                        const Icon = svc.icon;
                        return (
                          <Link
                            key={i}
                            to={`/services/${svc.slug}`}
                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[#f0f5ff] group transition"
                          >
                            <span className="mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg bg-[#e8efff] group-hover:bg-[#004093] transition shrink-0">
                              <Icon size={16} className="text-[#004093] group-hover:text-white transition" />
                            </span>
                            <div>
                              <p className="font-semibold text-[#004093] group-hover:text-[#004093] text-sm leading-tight">
                                {svc.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">{svc.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products mega dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setActiveMenu("products")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1 transition duration-300 ${
                    isProductActive()
                      ? "text-[#FE9900]"
                      : "text-[#004093] hover:text-[#FE9900]"
                  }`}
                >
                  Products
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      activeMenu === "products" ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {activeMenu === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-[-140px] flex bg-white rounded-[28px] shadow-2xl overflow-hidden border border-gray-100 z-50 mt-2"
                    >
                      {/* Left categories */}
                      <div className="w-64 bg-[#f7f9fc] p-4 shrink-0">
                        {Object.keys(products).map((cat, i) => (
                          <button
                            key={i}
                            onMouseEnter={() => setActiveSubMenu(cat)}
                            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left font-semibold text-[14px] transition mb-1.5 ${
                              activeSubMenu === cat
                                ? "bg-[#004093] text-white shadow-md"
                                : "hover:bg-white text-[#004093]"
                            }`}
                          >
                            {cat}
                            <ChevronRight size={16} />
                          </button>
                        ))}
                      </div>

                      {/* Right items */}
                      <div className="w-72 p-5">
                        <h3 className="text-lg font-bold mb-1 text-[#004093] pb-2 border-b border-gray-100">
                          {activeSubMenu}
                        </h3>
                        <div className="space-y-1 max-h-92 pr-1">
                          {products[activeSubMenu]?.map((item, i) => (
                            <Link
                              key={i}
                              to={`/products/${item.slug}`}
                              className="flex items-center gap-1 py-1.5 font-semibold text-[14px] hover:text-[#FE9900] transition text-gray-700 group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#FE9900] transition shrink-0" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            

              {/* Our Projects */}
              <Link
                to="/projects"
                className={`transition duration-300 ${
                  isActive("/projects")
                    ? "text-[#FE9900]"
                    : "text-[#004093] hover:text-[#FE9900]"
                }`}
              >
                Our Projects
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className={`transition duration-300 ${
                  isActive("/contact")
                    ? "text-[#FE9900]"
                    : "text-[#004093] hover:text-[#FE9900]"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* ---- DESKTOP RIGHT: Phone + CTA ---- */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0 pe-2">
              {/* <a
                href="tel:1300672194"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-[#004093] flex items-center justify-center shadow-md group-hover:bg-[#FE9900] transition duration-300">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] xl:text-[11px] text-gray-500 font-medium">Call Us On</p>
                  <p className="text-[14px] xl:text-[16px] font-bold text-[#004093] group-hover:text-[#FE9900] transition duration-300">
                    1300 672 194
                  </p>
                </div>
              </a> */}

              <Link
                to="/contact"
                className="group bg-[#FE9900] hover:bg-[#e88a00] text-white px-5 xl:px-7 py-3 rounded-full font-bold flex items-center gap-2 transition duration-300 shadow-lg shadow-orange-200 text-[14px] xl:text-[15px] whitespace-nowrap"
              >
                Get A Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition duration-300" />
              </Link>
            </div>

            {/* ---- MOBILE HAMBURGER ---- */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#004093] text-white transition hover:bg-[#FE9900]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE DRAWER
      ============================================================ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[360px] bg-white z-70 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
                <img src={logo} alt="Aussie Sun Solar" className="h-9 object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#004093] text-white flex items-center justify-center hover:bg-[#FE9900] transition"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Scroll Area */}
              <div className="flex-1 overflow-y-auto px-4 py-4">

                {/* Home */}
                <MobileLink to="/" label="Home" active={isActive("/")} />

                {/* Services accordion */}
                <MobileAccordion
                  label="Services"
                  isOpen={mobileExpanded === "services"}
                  isActive={isServiceActive()}
                  onToggle={() =>
                    setMobileExpanded(
                      mobileExpanded === "services" ? null : "services"
                    )
                  }
                  linkTo="/services"
                >
                  <div className="pb-2 space-y-0.5">
                    {services.map((svc, i) => {
                      const Icon = svc.icon;
                      return (
                        <Link
                          key={i}
                          to={`/services/${svc.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f0f5ff] group transition"
                        >
                          <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#e8efff] group-hover:bg-[#004093] transition shrink-0">
                            <Icon size={14} className="text-[#004093] group-hover:text-white transition" />
                          </span>
                          <span className="font-semibold text-[14px] text-[#004093]">{svc.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </MobileAccordion>

                {/* Products accordion */}
                <MobileAccordion
                  label="Products"
                  isOpen={mobileExpanded === "products"}
                  isActive={isProductActive()}
                  onToggle={() =>
                    setMobileExpanded(
                      mobileExpanded === "products" ? null : "products"
                    )
                  }
                  linkTo="/products"
                >
                  {/* Sub-category tabs */}
                  <div className="flex gap-1.5 px-1 pb-2 flex-wrap">
                    {Object.keys(products).map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => setMobileProductSub(cat)}
                        className={`text-[12px] font-semibold px-3 py-1.5 rounded-full transition ${
                          mobileProductSub === cat
                            ? "bg-[#004093] text-white"
                            : "bg-[#f0f5ff] text-[#004093] hover:bg-[#dce8ff]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Sub-category items */}
                  <div className="space-y-0.5 pb-2">
                    {products[mobileProductSub]?.map((item, i) => (
                         <Link
                        key={i}
                        to={`/products/${item.slug}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f0f5ff] transition group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#FE9900] transition shrink-0" />
                        <span className="font-medium text-[13px] text-gray-700 group-hover:text-[#004093]">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </MobileAccordion>

                {/* About Us */}
                <MobileLink to="/about" label="About Us" active={isActive("/about")} />

                {/* Our Projects */}
                <MobileLink to="/projects" label="Our Projects" active={isActive("/projects")} />

                {/* Contact Us */}
                <MobileLink to="/contact" label="Contact Us" active={isActive("/contact")} />

                {/* CTA Card */}
                {/* <div className="mt-6 bg-linear-to-br from-[#004093] to-[#0056c4] rounded-2xl p-5 text-white shadow-xl shadow-blue-200">
                  <p className="text-xs font-medium opacity-75 mb-1">Need Solar Help?</p>
                  <h3 className="text-xl font-bold mb-4">Call Us Today</h3>
                  <a
                    href="tel:1300672194"
                    className="flex items-center gap-2 mb-4 hover:opacity-80 transition"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone size={16} className="text-white" />
                    </div>
                    <span className="font-bold text-lg">1300 672 194</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#FE9900] hover:bg-[#e88a00] px-5 py-2.5 rounded-full font-bold text-sm transition shadow-md"
                  >
                    Get A Quote
                    <ArrowRight size={16} />
                  </Link>
                </div> */}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* ====================================
   MOBILE HELPERS
==================================== */

interface MobileLinkProps {
  to: string;
  label: string;
  active: boolean;
}

const MobileLink = ({ to, label, active }: MobileLinkProps) => (
  <Link
    to={to}
    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-[15px] transition mb-1 ${
      active
        ? "bg-[#f0f5ff] text-[#FE9900]"
        : "text-[#004093] hover:bg-[#f7f9fc]"
    }`}
  >
    {label}
    <ArrowRight size={16} className={active ? "text-[#FE9900]" : "text-gray-400"} />
  </Link>
);

interface MobileAccordionProps {
  label: string;
  isOpen: boolean;
  isActive: boolean;
  onToggle: () => void;
  linkTo: string;
  children: React.ReactNode;
}

const MobileAccordion = ({
  label,
  isOpen,
  isActive,
  onToggle,
  children,
}: MobileAccordionProps) => (
  <div className={`mb-1 rounded-xl overflow-hidden ${isOpen ? "bg-[#f7f9fc]" : ""}`}>
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between px-4 py-3.5 font-semibold text-[15px] transition ${
        isActive
          ? "text-[#FE9900]"
          : "text-[#004093] hover:bg-[#f7f9fc]"
      } ${isOpen ? "" : "hover:bg-[#f7f9fc] rounded-xl"}`}
    >
      {label}
      <ChevronDown
        size={16}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180 text-[#004093]" : "text-gray-400"
        }`}
      />
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden px-2"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default SolarNavbar;