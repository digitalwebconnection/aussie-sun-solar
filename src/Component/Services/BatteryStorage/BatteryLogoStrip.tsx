import { motion } from "framer-motion";

const SolarLogoStrip = () => {
  const logos = [
    {
      name: "CEC",
      url: "https://arisesolar.com.au/wp-content/themes/arise-solar/assets/images/sec-logo.svg",
    },
    {
      name: "Tesla",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcz4AymYGv5LSbCIPcU0HGLIY7mDjx3xhUXg&s",
    },
    {
      name: "Growatt",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVUMoSUmeEvFN2DTi-ZyBeHYbPlboc40YsQ&s",
    },
    {
      name: "Sungrow",
      url: "https://5.imimg.com/data5/SELLER/Default/2024/9/453258022/VH/UP/RG/91379867/sungrow-sungrow-solar-inverter-battery.png",
    },
    {
      name: "Jinko",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHQxxUFfFwDuPb1ycxTBcVq4edn0woiBwPQ&s",
    },
  ];

  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between px-10">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              src={logo.url}
              alt={logo.name}
              className={`h-16 object-contain ${
                logo.name === "Tesla" ? "h-8" : ""
              }`}
            />
          ))}
        </div>

        {/* Mobile Scrolling View */}
        <div className="md:hidden overflow-hidden">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.url}
                alt={logo.name}
                className={`h-12 object-contain shrink-0 ${
                  logo.name === "Tesla" ? "h-6" : ""
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarLogoStrip;