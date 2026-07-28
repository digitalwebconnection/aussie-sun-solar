import SEO from '../Component/SEO';
import { motion } from "framer-motion";
import { MessageSquareWarning, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Our Commitment",
    content: `Aussie Sun Solar is committed to providing exceptional products and customer service. We understand that occasionally things can go wrong, and we welcome your feedback to help us resolve issues and improve our services.
This policy outlines how you can lodge a complaint and how we will manage it efficiently and fairly.`,
  },
  {
    title: "2. How to Lodge a Complaint",
    content: `If you are dissatisfied with our products, services, or any aspect of your experience with Aussie Sun Solar, you can lodge a complaint via the following channels:
• Phone: 1300 672 194
• Email: info@aussiesunsolar.com.au
• Mail: 114 Burns Road, Kellyville NSW 2155

When lodging a complaint, please provide your full name, contact details, property address, and a clear description of the issue along with any relevant documentation or photos.`,
  },
  {
    title: "3. Our Complaints Handling Process",
    content: `1. Acknowledgement: We will acknowledge receipt of your complaint within 2 business days.
2. Investigation: We will investigate the issue. This may involve reviewing your file, speaking with our installers, or conducting a site visit. We aim to complete the investigation within 10 business days.
3. Resolution: We will contact you with a proposed resolution. If the matter is complex and requires more time, we will keep you informed of our progress.
4. Action: Once a resolution is agreed upon, we will implement it promptly.`,
  },
  {
    title: "4. Escalation",
    content: `If you are not satisfied with the proposed resolution, you can request that your complaint be escalated to a senior manager or the Director for review.
If the matter remains unresolved, you have the right to escalate your complaint to the relevant external body, such as:
• Your state's Department of Fair Trading or Consumer Affairs
• The Clean Energy Council (SAA & NETCC) if the complaint relates to a breach of the SAA & NETCC Approved Solar Retailer Code of Conduct.`,
  },
  {
    title: "5. Record Keeping",
    content: `All complaints and their resolutions are recorded in our internal systems. This information is used to identify systemic issues and improve our products, services, and customer experience.`,
  },
];

const ComplaintsHandlingPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Complaints Handling Policy" description="Read the Complaints Handling Policy of Aussie Sun Solar." />

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
              <MessageSquareWarning size={20} />
              <span className="text-sm font-black uppercase tracking-[0.3em]">Customer Care</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Complaints Handling{" "}
              <span className="text-[#FE9900]">Policy</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
              We value your feedback and are committed to resolving any issues fairly, transparently, and in a timely manner.
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
          <span className="text-[#004093] font-semibold">Complaints Handling Policy</span>
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
            At Aussie Sun Solar, our customers are our priority. We take all complaints seriously and use them as an opportunity to improve our service delivery.
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

export default ComplaintsHandlingPolicyPage;
