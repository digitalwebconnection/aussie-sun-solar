import { motion } from 'framer-motion';

const CommercialLogoStrip = () => {
  const logos = [
    { name: "CEC", url: "https://arisesolar.com.au/wp-content/themes/arise-solar/assets/images/sec-logo.svg" },
    { name: "Tesla", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcz4AymYGv5LSbCIPcU0HGLIY7mDjx3xhUXg&s" },
    { name: "Growatt", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVUMoSUmeEvFN2DTi-ZyBeHYbPlboc40YsQ&s" },
    { name: "Sungrow", url: "https://5.imimg.com/data5/SELLER/Default/2024/9/453258022/VH/UP/RG/91379867/sungrow-sungrow-solar-inverter-battery.png" },
    { name: "Jinko", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHQxxUFfFwDuPb1ycxTBcVq4edn0woiBwPQ&s" },
  ];

  return (
    <section className="py-10 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center px-10 justify-between transition-all duration-700">
          {logos.map((logo, i) => (
            <motion.img key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} src={logo.url} alt={logo.name} className="h-18 md:h-25 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialLogoStrip;
