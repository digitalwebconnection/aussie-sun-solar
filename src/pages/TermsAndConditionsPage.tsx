import SEO from '../Component/SEO';
import { motion } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Introduction",
    content: `Welcome to Aussie Sun Solar. These Terms & Conditions govern the provision of our solar energy systems, battery storage, and related installation services. By requesting a quote, booking an installation, or using our website, you agree to be bound by these terms.`,
  },
  {
    title: "2. Quotes and Pricing",
    content: `All quotes provided by Aussie Sun Solar are valid for 14 days from the date of issue unless stated otherwise.
Prices quoted are inclusive of GST and point-of-sale discounts from Small-Scale Technology Certificates (STCs), assuming eligibility. If you are not eligible for STCs or if the STC value fluctuates significantly, the final price may be adjusted accordingly.`,
  },
  {
    title: "3. Small-Scale Technology Certificates (STCs)",
    content: `By accepting our quote with an STC discount applied, you agree to assign your right to create STCs to Aussie Sun Solar or our nominated agent. You must sign all necessary documentation promptly after installation to process this assignment.`,
  },
  {
    title: "4. Installation and Access",
    content: `You must ensure our accredited installers have clear, safe, and unhindered access to the property on the scheduled installation date.
Any unforeseen structural issues, electrical upgrades (e.g., switchboard upgrades), or complexities not identifiable during the initial quoting process may incur additional costs. We will notify you and seek your approval before proceeding with such additional work.`,
  },
  {
    title: "5. Warranties",
    content: `We provide warranties for our products and workmanship in accordance with Australian Consumer Law.
• Workmanship Warranty: Aussie Sun Solar provides a comprehensive warranty on our installation workmanship.
• Product Warranty: Solar panels, inverters, and batteries carry their respective manufacturer's warranties. We will assist you with making a claim to the manufacturer if a product defect arises.`,
  },
  {
    title: "6. Cancellations and Refunds",
    content: `You have a cooling-off period of 10 business days from the date of signing the contract, during which you may cancel without penalty.
Cancellations made after the cooling-off period may be subject to cancellation fees to cover administrative, restocking, or pre-installation costs incurred by Aussie Sun Solar.`,
  },
  {
    title: "7. Grid Connection",
    content: `Aussie Sun Solar will assist with the application for grid connection to your local distributor. However, we cannot guarantee grid connection approval or control the processing times of the distributor or electricity retailer. Any fees charged by the distributor or retailer are your responsibility.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by law, Aussie Sun Solar shall not be liable for any indirect, incidental, or consequential damages, loss of profits, or loss of revenue arising from the installation or use of our solar systems.`,
  },
  {
    title: "9. Governing Law",
    content: `These Terms & Conditions are governed by the laws of New South Wales, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of New South Wales.`,
  },
];

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Terms & Conditions" description="Read the Terms and Conditions for Aussie Sun Solar's products and services." />

      {/* ── Hero ── */}
      <div className="relative bg-[#004093] overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-size-[32px_32px]" />
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#FE9900]/20 blur-[80px]" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-[#FE9900] mb-6">
              <FileText size={20} />
              <span className="text-sm font-black uppercase tracking-[0.3em]">Legal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Terms &{" "}
              <span className="text-[#FE9900]">Conditions</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
              These terms govern the relationship between you and Aussie Sun Solar regarding the purchase and installation of your solar system.
            </p>
            <p className="mt-4 text-white/40 text-sm font-medium">
              Last updated: 29 May 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#004093] transition-colors font-medium">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#004093] font-semibold">Terms & Conditions</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#004093]/5 border border-[#004093]/15 rounded-2xl p-6 mb-12"
        >
          <p className="text-[#004093] font-semibold leading-relaxed text-base">
            Please read these Terms and Conditions carefully before committing to any installation. By proceeding with an order, you acknowledge that you have read, understood, and agreed to be bound by these terms.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b border-gray-100 pb-10 last:border-0 last:pb-0"
            >
              <div className="flex items-start gap-4 mb-4">
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-[#004093]">
                  {section.title}
                </h2>
              </div>
              <div className="ml-0">
                <p className="text-gray-600 leading-[1.9] text-base whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
