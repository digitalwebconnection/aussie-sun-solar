import React, { useState, useEffect } from "react";
import { useToast } from "./ui/Toast";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, User, Mail, Phone, Zap, MapPin, DollarSign } from "lucide-react";
import logo from "../assets/logo.png";
import popupBg from "../assets/downloaded-images/aerial-solar-house.jpg";

import { usePopup } from "../context/PopupContext";

const GlobalPopupForm = () => {
  const { isOpen, closePopup, openPopup } = usePopup();
  const [hasOpened, setHasOpened] = useState(false);
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!hasOpened) {
      const timer = setTimeout(() => {
        openPopup();
        setHasOpened(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasOpened, openPopup]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target as HTMLFormElement;
    const rawData = new FormData(form);

    const customerName = rawData.get("name") as string;
    const phone = rawData.get("phone") as string;
    const email = rawData.get("email") as string;
    const electricityBill = rawData.get("electricity_bill") as string;
    const address = rawData.get("address") as string;

    const formattedMessage = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ AUSSIE SUN SOLAR ] 
https://aussiesunsolar.com.au
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☀️ NEW SOLAR ENQUIRY RECEIVED

Dear Team,
A new premium solar lead has been submitted through the website.

👤 Customer Name:
${customerName}

📞 Mobile Number:
${phone}

📧 Email Address:
${email}

⚡ Quarterly Electricity Bill:
$${electricityBill}

📍 Property Address:
${address}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 Lead Summary
Lead Source: Website Global Popup Form
Submitted On: ${new Date().toLocaleString('en-AU')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Best Regards,
Aussie Sun Solar Lead Management`;

    const finalFormData = new FormData();
    finalFormData.append("access_key", "f3cef460-e2ec-49da-adab-5f4180bdf046");
    finalFormData.append("subject", "🌟 New Premium Solar Quote Request");
    finalFormData.append("from_name", "Aussie Sun Solar Website");
    // Removed extra fields here so they don't print at the top of the email
    // The beautiful custom block
    finalFormData.append("Enquiry Details", formattedMessage);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: finalFormData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Request sent successfully! We'll be in touch shortly.");
        (event.target as HTMLFormElement).reset();
        closePopup();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9998 flex items-center justify-center p-4 sm:p-6">
          {/* Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closePopup()}
            className="absolute inset-0 bg-black/50 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-[0_40px_100px_rgba(0,0,0,0.6)] lg:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={() => closePopup()}
              className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-gray-500 backdrop-blur-md transition-all duration-300 hover:bg-[#FE9900] hover:text-white lg:right-6 lg:top-6"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Left Image Section */}
            <div className="relative hidden w-full lg:block lg:w-5/12">
              <img
                src={popupBg}
                alt="Solar Panels"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#004093] via-[#004093]/80 to-[#004093]/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[#004093]/40" />

              <div className="relative flex h-full flex-col  p-12 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md border border-white/30">
                    <Zap size={16} className="text-[#FE9900]" fill="#FE9900" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Special Offer</span>
                  </div>
                  <h2 className="mb-4 font-serif text-4xl font-bold leading-tight">
                    Power Your Home,<br />
                    <span className="text-[#FE9900]">Empower Your Future.</span>
                  </h2>
                  <p className="text-white/90 text-[15px] leading-relaxed mb-6 max-w-sm">
                    Join thousands of Australians saving on their energy bills with our premium solar solutions. Claim your free quote to unlock:
                  </p>

                  <div className="space-y-4">
                    {[
                      "Up to 70% reduction in power bills",
                      "Premium Tier-1 Solar Panels",
                      "25-Year Performance Warranty",
                      "$0 Upfront Finance Options Available"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FE9900]/20">
                          <svg className="h-3.5 w-3.5 text-[#FE9900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="relative w-full p-8 lg:w-7/12 lg:p-14">
              {/* Decorative Background */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#004093]/5 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#FE9900]/10 blur-[80px]" />

              <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                {/* Logo */}
                <img src={logo} alt="Aussie Sun Solar Logo" className="mb-8 h-12 lg:h-14 object-contain" />

                <h3 className="mb-2 font-serif text-2xl font-bold text-[#004093] md:text-3xl">
                  Get a Free Solar Quote
                </h3>
                <p className="mb-8 text-gray-500 text-sm max-w-[400px]">
                  Take the first step towards energy independence. Fill out the form below and our experts will be in touch.
                </p>

                <form className="w-full space-y-5" onSubmit={onSubmit}>
                  {/* Web3Forms Advanced Configuration for Better Email Format */}
                  <input type="hidden" name="subject" value="🌟 New Premium Solar Quote Request" />
                  <input type="hidden" name="from_name" value="Aussie Sun Solar Website" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-[#004093] transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full rounded-xl border-2 border-gray-300 bg-gray-50/50 py-3.5 pl-12 pr-4 text-sm font-semibold text-[#004093] outline-none transition-all placeholder:text-gray-400 focus:border-[#004093] focus:bg-white focus:ring-4 focus:ring-[#004093]/10"
                      />
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-[#004093] transition-colors">
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone Number"
                        className="w-full rounded-xl border-2 border-gray-300 bg-gray-50/50 py-3.5 pl-12 pr-4 text-sm font-semibold text-[#004093] outline-none transition-all placeholder:text-gray-400 focus:border-[#004093] focus:bg-white focus:ring-4 focus:ring-[#004093]/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-[#004093] transition-colors">
                        <Mail size={18} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full rounded-xl border-2 border-gray-300 bg-gray-50/50 py-3.5 pl-12 pr-4 text-sm font-semibold text-[#004093] outline-none transition-all placeholder:text-gray-400 focus:border-[#004093] focus:bg-white focus:ring-4 focus:ring-[#004093]/10"
                      />
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-[#004093] transition-colors">
                        <DollarSign size={18} />
                      </div>
                      <input
                        type="text"
                        name="electricity_bill"
                        required
                        placeholder="Quarterly Electricity Bill ($)"
                        className="w-full rounded-xl border-2 border-gray-300 bg-gray-50/50 py-3.5 pl-12 pr-4 text-sm font-semibold text-[#004093] outline-none transition-all placeholder:text-gray-400 focus:border-[#004093] focus:bg-white focus:ring-4 focus:ring-[#004093]/10"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-[#004093] transition-colors">
                      <MapPin size={18} />
                    </div>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Full Property Address"
                      className="w-full rounded-xl border-2 border-gray-300 bg-gray-50/50 py-3.5 pl-12 pr-4 text-sm font-semibold text-[#004093] outline-none transition-all placeholder:text-gray-400 focus:border-[#004093] focus:bg-white focus:ring-4 focus:ring-[#004093]/10"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-[#004093] to-[#0052bd] px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_15px_30px_-10px_rgba(0,64,147,0.5)] transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,64,147,0.7)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
                      <div className="relative h-full w-8 bg-white/20" />
                    </div>
                    <span className="relative z-10">{isSubmitting ? "Processing..." : "Get My Free Quote"}</span>
                    {!isSubmitting && (
                      <ChevronRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </motion.button>

                  <p className="text-center text-[11px] font-medium text-gray-400 mt-4">
                    Your data is secure and encrypted. We respect your privacy.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GlobalPopupForm;
