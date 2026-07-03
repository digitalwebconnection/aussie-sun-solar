
import { motion } from "framer-motion";
import { Hammer, Zap, BadgeDollarSign, Battery, Activity, Users } from "lucide-react";
import BlurText from "../BlurText";

const features = [
  {
    icon: Hammer,
    title: "Electrician-Owned & Operated",
    desc: "Not just a sales company",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Installed in under 10 business days",
  },
  {
    icon: BadgeDollarSign,
    title: "Rebate-Ready",
    desc: "Solar bonus advice helps your wallet",
  },
  {
    icon: Battery,
    title: "Battery-Ready Systems",
    desc: "Future proofed for expansion",
  },
  {
    icon: Activity,
    title: "Monitoring & Support",
    desc: "24/7 app access and health alerts",
  },
  {
    icon: Users,
    title: "Real Aussie Customer Service",
    desc: "Local team with 5 star ratings",
  },
];

const ContactFeatures = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] flex flex-col items-center">
            <BlurText
              text="Why More Australians Choose"
              delay={80}
              animateBy="words"
              direction="top"
            />
            <BlurText
              text="Aussie Sun Solar?"
              delay={80}
              animateBy="words"
              direction="bottom"
              className="text-[#FE9900]"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl border-b-4 border-transparent hover:border-[#FE9900] shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#004093]/10 flex items-center justify-center text-[#004093] mx-auto mb-8">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#004093] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 font-medium">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFeatures;
