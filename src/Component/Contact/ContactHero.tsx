import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  ChevronRight,
  Headset,
  Sparkles,
} from "lucide-react";

const ContactHero = () => {
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
            <h1 className="text-4xl font-black leading-[1.1] text-[#111827] md:text-6xl">
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
                  icon: Phone,
                  title: "Phone",
                  value: "1300 504 912",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "info@aussiesunsolar.com.au",
                },
                {
                  icon: Headset,
                  title: "Support",
                  value: "support@aussiesunsolar.com.au",
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
              <h2 className="text-xl md:text-3xl font-black text-white">
                Send Us A Message
              </h2>

              <p className="mt-3 text-white/70">
                Fill out the form and our team will contact you shortly.
              </p>
            </div>

            {/* Form */}
            <form className="relative z-10 space-y-5">

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 rounded-xl border border-white/10 bg-white px-5 font-medium text-[#004093] outline-none transition-all focus:ring-2 focus:ring-[#FE9900]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 rounded-xl border border-white/10 bg-white px-5 font-medium text-[#004093] outline-none transition-all focus:ring-2 focus:ring-[#FE9900]"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 rounded-xl border border-white/10 bg-white px-5 font-medium text-[#004093] outline-none transition-all focus:ring-2 focus:ring-[#FE9900]"
                />

                <select className="h-14 rounded-xl border border-white/10 bg-white px-5 font-medium text-[#004093] outline-none">
                  <option>Select Service</option>
                  <option>Solar Installation</option>
                  <option>Battery Storage</option>
                  <option>EV Charging</option>
                  <option>Electrical Services</option>
                </select>
              </div>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-white/10 bg-white p-5 font-medium text-[#004093] outline-none transition-all resize-none focus:ring-2 focus:ring-[#FE9900]"
              />

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
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
                "
              >
                Submit Inquiry

                <ChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;