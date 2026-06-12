import { motion } from "framer-motion";

import secLogo from '../../../assets/downloaded-images/sec-logo.svg';
import teslaLogo from '../../../assets/downloaded-images/tesla-logo.svg';
import growattLogo from '../../../assets/Growatt Inverters/1.jpg';
import sungrowLogo from '../../../assets/downloaded-images/sungrow-logo.png';
import jinkoLogo from '../../../assets/Jinko Solar/1.jpg';

const SolarLogoStrip = () => {
  const logos = [
    {
      name: "SAA",
      url: secLogo,
    },
    {
      name: "Tesla",
      url: teslaLogo,
    },
    {
      name: "Growatt",
      url: growattLogo,
    },
    {
      name: "Sungrow",
      url: sungrowLogo,
    },
    {
      name: "Jinko",
      url: jinkoLogo,
    },
  ];

  return (
    <section className="py-8 bg-white border-t border-gray-100 overflow-hidden">
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
              className={`h-16 object-contain ${logo.name === "Tesla" ? "h-8" : ""
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
                className={`h-12 object-contain shrink-0 ${logo.name === "Tesla" ? "h-6" : ""
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