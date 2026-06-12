import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { usePopup } from "../context/PopupContext";

const STORAGE_KEY = "aussie_cookie_consent_v2";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const { isOpen } = usePopup();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    
    // If user already made a choice, do nothing
    if (stored) return;

    if (!isOpen) {
      // Show the banner 3 seconds after opening the website (or closing the popup)
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    } else {
      // Hide the banner if the popup is open
      setVisible(false);
    }
  }, [isOpen]);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Soft backdrop blur on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-9999 pointer-events-none md:hidden"
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0,   opacity: 1 }}
            exit={{   y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-9991 p-3 sm:p-4"
            role="dialog"
            aria-labelledby="cookie-title"
            aria-describedby="cookie-desc"
          >
            <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-[0_-8px_60px_rgba(0,0,0,0.18)] overflow-hidden">

              {/* Orange accent line */}
              <div className="h-1 w-full bg-linear-to-r from-[#004093] via-[#FE9900] to-[#004093]" />

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 sm:p-5">

                {/* Icon */}
                <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-[#FE9900]/10 border border-[#FE9900]/20 items-center justify-center shrink-0">
                  <Cookie size={26} className="text-[#FE9900]" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Cookie size={16} className="text-[#FE9900] sm:hidden" />
                    <h3 id="cookie-title" className="text-[#004093] font-black text-base">
                      We use cookies 🍪
                    </h3>
                  </div>
                  <p id="cookie-desc" className="text-gray-600 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalised solar offers, and analyse site traffic. By clicking{" "}
                    <strong className="text-[#004093]">"Accept All"</strong>, you consent to our use of cookies.{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-[#FE9900] font-semibold hover:underline inline-flex items-center gap-1"
                      onClick={accept}
                    >
                      <ShieldCheck size={13} />
                      Privacy Policy
                    </Link>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                  <button
                    onClick={reject}
                    className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-gray-300 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-all duration-200"
                  >
                    Reject
                  </button>
                  <button
                    onClick={accept}
                    className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-[#004093] hover:bg-[#003070] text-white font-black text-sm transition-all duration-200 shadow-lg shadow-[#004093]/20 hover:scale-[1.02]"
                  >
                    Accept
                  </button>
                </div>

                {/* Close */}
                <button
                  onClick={reject}
                  aria-label="Close cookie banner"
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
