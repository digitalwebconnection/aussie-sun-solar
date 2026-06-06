import React, { useState } from "react";
import { useToast } from "../ui/Toast";
import { motion } from "framer-motion";
import {
  // Phone,
  Mail,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const ContactHero = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [focusedFields, setFocusedFields] = useState<Record<string, boolean>>({});

  const handleFocus = (field: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "f3cef460-e2ec-49da-adab-5f4180bdf046");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setIsSubmitting(false);
    if (data.success) {
      toast.success("Message sent successfully! We'll be in touch shortly.");
      (event.target as HTMLFormElement).reset();
      setFormValues({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#004093 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Effects */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-[#004093]/10 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-[-10%] h-[350px] w-[350px] rounded-full bg-[#FE9900]/10 blur-[120px]"
      />

      {/* Floating Circle */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-20 top-20 h-40 w-40 rounded-full border border-[#FE9900]/20"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Small Heading */}
            <div className="mb-6 flex items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.8 }}
                className="h-[2px] bg-[#FE9900]"
              />

              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FE9900]">
                Contact Us
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] text-[#111827]">
              Let’s Discuss Your
              <span className="block text-[#004093]">
                Solar Project
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-600">
              Connect with our experts for solar installation,
              battery storage, EV charging, and energy-saving
              solutions tailored to your requirements.
            </p>

            {/* Contact Cards */}
            <div className="mt-12  space-y-5">

              {[
               
                {
                  icon: Mail,
                  title: "Email",
                  value: "info@aussiesunsolar.com.au",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 8,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      rounded-lg
                      border
                      border-gray-300
                      bg-white
                      p-5
                      shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                      transition-all
                      duration-300
                      hover:shadow-[0_20px_60px_rgba(0,64,147,0.10)]
                    "
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004093]/10 text-[#004093] transition-all duration-300 group-hover:bg-[#004093] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                        {item.title}
                      </p>

                      <p className="mt-1 text-lg font-bold text-[#111827]">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg bg-[#004093] p-8 md:p-10 shadow-[0_30px_80px_rgba(0,64,147,0.25)]"
          >

            {/* Top Glow */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FE9900]/20 blur-[80px]" />

            {/* Floating Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-8 top-8 text-white/10"
            >
              <Sparkles size={80} />
            </motion.div>

            {/* Heading */}
            <div className="relative z-10 mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-white">
                Send Us A Message
              </h2>

              <p className="mt-3 text-white/70">
                Fill out the form and our team will contact you shortly.
              </p>
            </div>

            {/* Form */}
            <form className="relative z-10 space-y-5" onSubmit={onSubmit}>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formValues.name}
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name")}
                    onChange={handleChange}
                    className={`
                      h-14
                      w-full
                      rounded-xl
                      border
                      bg-white
                      px-5
                      pt-5
                      pb-1
                      font-medium
                      text-[#004093]
                      outline-none
                      transition-all
                      duration-200
                      ${focusedFields.name ? "border-[#FE9900] ring-2 ring-[#FE9900]" : "border-white/10"}
                    `}
                  />
                  <span
                    className={`
                      absolute
                      left-5
                      transition-all
                      duration-200
                      pointer-events-none
                      ${(focusedFields.name || formValues.name)
                        ? `top-1.5 text-xs font-bold ${focusedFields.name ? "text-[#FE9900]" : "text-gray-400"}`
                        : "top-1/2 -translate-y-1/2 text-base text-gray-500 font-medium"
                      }
                    `}
                  >
                    Full Name
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formValues.email}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    onChange={handleChange}
                    className={`
                      h-14
                      w-full
                      rounded-xl
                      border
                      bg-white
                      px-5
                      pt-5
                      pb-1
                      font-medium
                      text-[#004093]
                      outline-none
                      transition-all
                      duration-200
                      ${focusedFields.email ? "border-[#FE9900] ring-2 ring-[#FE9900]" : "border-white/10"}
                    `}
                  />
                  <span
                    className={`
                      absolute
                      left-5
                      transition-all
                      duration-200
                      pointer-events-none
                      ${(focusedFields.email || formValues.email)
                        ? `top-1.5 text-xs font-bold ${focusedFields.email ? "text-[#FE9900]" : "text-gray-400"}`
                        : "top-1/2 -translate-y-1/2 text-base text-gray-500 font-medium"
                      }
                    `}
                  >
                    Email Address
                  </span>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onFocus={() => handleFocus("phone")}
                    onBlur={() => handleBlur("phone")}
                    onChange={handleChange}
                    className={`
                      h-14
                      w-full
                      rounded-xl
                      border
                      bg-white
                      px-5
                      pt-5
                      pb-1
                      font-medium
                      text-[#004093]
                      outline-none
                      transition-all
                      duration-200
                      ${focusedFields.phone ? "border-[#FE9900] ring-2 ring-[#FE9900]" : "border-white/10"}
                    `}
                  />
                  <span
                    className={`
                      absolute
                      left-5
                      transition-all
                      duration-200
                      pointer-events-none
                      ${(focusedFields.phone || formValues.phone)
                        ? `top-1.5 text-xs font-bold ${focusedFields.phone ? "text-[#FE9900]" : "text-gray-400"}`
                        : "top-1/2 -translate-y-1/2 text-base text-gray-500 font-medium"
                      }
                    `}
                  >
                    Phone Number
                  </span>
                </div>

                <div className="relative">
                  <select
                    name="service"
                    value={formValues.service}
                    onFocus={() => handleFocus("service")}
                    onBlur={() => handleBlur("service")}
                    onChange={handleChange}
                    className={`
                      h-14
                      w-full
                      rounded-xl
                      border
                      bg-white
                      px-5
                      pt-5
                      pb-1
                      font-medium
                      text-[#004093]
                      outline-none
                      appearance-none
                      transition-all
                      duration-200
                      ${focusedFields.service ? "border-[#FE9900] ring-2 ring-[#FE9900]" : "border-white/10"}
                    `}
                  >
                    <option value="" disabled hidden></option>
                    <option value="Solar Installation" className="text-[#004093]">Solar Installation</option>
                    <option value="Battery Storage" className="text-[#004093]">Battery Storage</option>
                    <option value="EV Charging" className="text-[#004093]">EV Charging</option>
                    <option value="Electrical Services" className="text-[#004093]">Electrical Services</option>
                  </select>
                  
                  {/* Select Icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#004093]">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>

                  <span
                    className={`
                      absolute
                      left-5
                      transition-all
                      duration-200
                      pointer-events-none
                      ${(focusedFields.service || formValues.service)
                        ? `top-1.5 text-xs font-bold ${focusedFields.service ? "text-[#FE9900]" : "text-gray-400"}`
                        : "top-1/2 -translate-y-1/2 text-base text-gray-500 font-medium"
                      }
                    `}
                  >
                    Select Service
                  </span>
                </div>
              </div>

              <div className="relative">
                <textarea
                  rows={5}
                  name="message"
                  required
                  value={formValues.message}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  onChange={handleChange}
                  className={`
                    w-full
                    rounded-xl
                    border
                    bg-white
                    pt-7
                    pb-3
                    px-5
                    font-medium
                    text-[#004093]
                    outline-none
                    transition-all
                    duration-200
                    resize-none
                    ${focusedFields.message ? "border-[#FE9900] ring-2 ring-[#FE9900]" : "border-white/10"}
                  `}
                />
                <span
                  className={`
                    absolute
                    left-5
                    transition-all
                    duration-200
                    pointer-events-none
                    ${(focusedFields.message || formValues.message)
                      ? `top-2 text-xs font-bold ${focusedFields.message ? "text-[#FE9900]" : "text-gray-400"}`
                      : "top-5 text-base text-gray-500 font-medium"
                    }
                  `}
                >
                  Write your message...
                </span>
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#FE9900]
                  px-8
                  py-5
                  text-sm
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-white
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                "
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                {!isSubmitting && <ChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;