import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ContactOffices = () => {
  const offices = [
    {
      state: "South Australia",
      address: "2/55 Gawler Place, Adelaide SA 5000.",
    },
    {
      state: "Queensland",
      address: "26/87 Creek St, Brisbane City QLD 4000.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10">

      {/* Background Glow Effects */}
      <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-[#004093]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-[#FE9900]/10 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#004093 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-[#FE9900]" />

            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FE9900]">
              Our Offices
            </span>

            <div className="h-[2px] w-12 bg-[#FE9900]" />
          </div>

          <h2 className="text-3xl font-black text-[#111827] md:text-5xl">
            Visit Our
            <span className="block text-[#004093]">
              Office Locations
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Connect with our expert team across Australia for
            reliable solar and energy solutions.
          </p>
        </motion.div>

        {/* Office Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {offices.map((office, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-gray-300
                bg-white
                p-5 md:p-10
                text-center
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                transition-all
                duration-500
                hover:border-[#004093]/20
                hover:shadow-[0_25px_80px_rgba(0,64,147,0.12)]
              "
            >

              {/* Top Gradient Line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-[#004093] via-[#FE9900] to-transparent" />

              {/* Hover Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FE9900]/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* Floating Border Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full border border-[#004093]/10"
              />

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className="
                  relative
                  mx-auto
                  mb-7
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-linear-to-br
                  from-[#004093]
                  to-[#0056c7]
                  text-white
                  shadow-[0_15px_40px_rgba(0,64,147,0.25)]
                "
              >
                <MapPin size={34} />

                {/* Small Glow Dot */}
                <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#FE9900] border-2 border-white animate-pulse" />
              </motion.div>

              {/* State */}
              <h3 className="text-3xl font-black text-[#004093] transition-colors duration-300 group-hover:text-[#FE9900]">
                {office.state}
              </h3>

              {/* Divider */}
              <div className="mx-auto mt-5 h-[2px] w-20 bg-linear-to-r from-[#004093] to-[#FE9900]" />

              {/* Address */}
              <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-gray-500">
                {office.address}
              </p>

              {/* Bottom Hover Effect */}
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#004093] opacity-0 transition-all duration-500 group-hover:opacity-100">
                Visit Office
                <span className="text-[#FE9900]">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOffices;