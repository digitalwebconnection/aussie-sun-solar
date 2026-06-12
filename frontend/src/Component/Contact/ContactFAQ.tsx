import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical solar installation take?",
    answer: "Most residential installations are completed within a single day. From initial consultation to final inspection, the entire process usually takes under 10 business days.",
  },
  {
    question: "What government rebates are currently available?",
    answer: "Rebates vary by state and system size. Our team handles all the paperwork to ensure you receive the maximum Small-scale Technology Certificates (STCs) and any state-specific incentives.",
  },
  {
    question: "Do you offer emergency electrical or solar support?",
    answer: "Yes! We provide 24/7 support for all our customers. If you experience any system issues, our health alert system usually notifies us before you even notice.",
  },
  {
    question: "Is my roof suitable for solar panels?",
    answer: "Most roofs are suitable, but factors like orientation, shading, and structural integrity matter. We provide a free site assessment to design the most efficient system for your specific roof.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004093]">
            Common Questions
          </h2>
          <p className="mt-4 text-gray-500 font-medium">
            Everything you need to know about starting your solar journey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === i ? "border-[#007A7A] bg-gray-50/50" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-[#004093]">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === i ? "bg-[#007A7A] text-white" : "bg-gray-100 text-[#004093]"
                }`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
