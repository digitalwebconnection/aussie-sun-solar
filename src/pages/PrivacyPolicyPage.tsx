import { motion } from "framer-motion";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us when you:
• Request a free solar quote or consultation
• Fill out contact forms on our website
• Subscribe to our newsletter or updates
• Call our customer support line

The types of personal information we may collect include: your name, email address, phone number, property address, and details about your solar energy needs.`,
  },
  {
    title: "How We Use Your Information",
    content: `Aussie Sun Solar uses your personal information to:
• Provide and improve our solar installation services
• Respond to your enquiries and send you requested quotes
• Process your solar system orders and installations
• Send you service updates, warranty information, and rebate opportunities
• Comply with Australian energy regulations and compliance requirements
• Analyse usage patterns to improve our website and services`,
  },
  {
    title: "Cookies & Tracking Technologies",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:

Essential Cookies: Required for the website to function correctly. They cannot be disabled.
Analytics Cookies: Help us understand how visitors interact with our site (via Google Analytics).
Marketing Cookies: Used to deliver relevant solar offers and promotions.

You can control cookie preferences through our cookie banner or your browser settings. Note that disabling certain cookies may affect website functionality.`,
  },
  {
    title: "Information Sharing & Disclosure",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:
• Our SAA-accredited installation partners who fulfil your solar installation
• Government bodies for Small-Scale Technology Certificate (STC) claims and rebate processing
• Payment processors for financial transactions
• Analytics service providers (data is anonymised)

All third parties are contractually required to protect your information and use it only for specified purposes.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your personal information:
• SSL/TLS encryption for all data transmitted on our website
• Secure servers hosted in Australia
• Restricted access — only authorised staff can access customer data
• Regular security audits and vulnerability assessments

While we strive to protect your information, no method of internet transmission is 100% secure. We encourage you to contact us immediately if you suspect any unauthorised access.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Typically:
• Customer account data: Retained for the duration of your relationship with us plus 7 years (for warranty and compliance purposes)
• Enquiry data: Retained for 2 years if no installation proceeds
• Website analytics: Aggregated data retained indefinitely; individual data for 26 months

You may request deletion of your data at any time, subject to legal retention requirements.`,
  },
  {
    title: "Your Rights Under Australian Privacy Law",
    content: `Under the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs), you have the right to:
• Access the personal information we hold about you
• Correct inaccurate or outdated information
• Request deletion of your information (subject to legal requirements)
• Opt out of direct marketing communications
• Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)

To exercise any of these rights, please contact us using the details below.`,
  },
  {
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites (government rebate portals, partner installers, Clean Energy Council resources). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by:
• Posting a notice on our website homepage
• Sending an email to customers with active accounts
• Updating the "Last Updated" date below

Your continued use of our website after any changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:

Aussie Sun Solar Pty Ltd
ABN: 14 657 213 873
Email: info@aussiesunsolar.com.au
Address: 114 Burns Road, Kellyville NSW 2155

For privacy complaints, you may also contact the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au`,
  },
];

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">

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
              <ShieldCheck size={20} />
              <span className="text-sm font-black uppercase tracking-[0.3em]">Legal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Privacy{" "}
              <span className="text-[#FE9900]">Policy</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
              Your privacy is important to us. This policy explains how Aussie Sun Solar Pty Ltd collects, uses, and protects your personal information in accordance with Australian Privacy Law.
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
          <span className="text-[#004093] font-semibold">Privacy Policy</span>
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
            Aussie Sun Solar Pty Ltd (ABN 14 657 213 873) is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy applies to all our services, including our website at aussiesunsolar.com.au, and is governed by the <strong>Australian Privacy Act 1988</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.
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
                <div className="w-8 h-8 rounded-xl bg-[#FE9900] flex items-center justify-center text-white text-sm font-black shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <h2 className="text-xl md:text-2xl font-black text-[#004093]">
                  {section.title}
                </h2>
              </div>
              <div className="ml-12">
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

export default PrivacyPolicyPage;
