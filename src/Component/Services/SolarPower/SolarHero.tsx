
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";



const ContactServices = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-8">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop"
          alt="Background"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000]/60" />
      </div>

      {/* Glow Effects */}
      <div className="absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-[#FE9900]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-4 md:gap-14 lg:grid-cols-[60%_40%]">

          {/* LEFT SIDE */}
          <div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="h-[2px] w-14 bg-[#FE9900]" />

                <span className="text-lg font-bold uppercase tracking-[0.3em] text-[#FE9900]">
                  OUR SOLAR SERVICES
                </span>
              </div>

              <h2 className="text-4xl font-serif font-bold leading-tight text-white md:text-6xl">
                Smart Solar Power Systems
                <span className="block text-[#FE9900]">
                  in Australia for Homes & Businesses
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
                Explore reliable solar power systems in Australia designed to reduce electricity costs, improve energy efficiency, and support sustainable living. We provide advanced solar panel installation, battery storage, EV charging, and electrical solutions tailored for residential, commercial, and industrial properties.
              </p>
            </motion.div>

          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div
              className="
                rounded-lg
                border  shadow-xl shadow-black
                border-white/60
                bg-white/5
                p-4
                backdrop-blur-xl
              "
            >

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FE9900]">
                Get In Touch
              </p>

              <h3 className="mt-1 text-2xl md:text-3xl font-black leading-tight text-white">
                Request A Free
                Consultation
              </h3>

              <p className="mt-1 leading-relaxed text-white/90">
                Fill out the form and our team will contact you shortly.
              </p>

              {/* FORM */}
              <form className="mt-4 space-y-2">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-5
                    text-white
                    outline-none
                    placeholder:text-white/50
                    focus:border-[#FE9900]
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-5
                    text-white
                    outline-none
                    placeholder:text-white/50
                    focus:border-[#FE9900]
                  "
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-5
                    text-white
                    outline-none
                    placeholder:text-white/50
                    focus:border-[#FE9900]
                  "
                />

                <textarea
                  rows={2}
                  placeholder="Your Message"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    p-5
                    text-white
                    outline-none
                    resize-none
                    placeholder:text-white/50
                    focus:border-[#FE9900]
                  "
                />

                <button
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#FE9900]
                    px-7
                    py-4
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Submit Inquiry

                  <ChevronRight size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactServices;