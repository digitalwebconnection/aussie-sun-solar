import SEO from '../Component/SEO';
import { motion } from "framer-motion";
import { Cookie, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. What Are Cookies?",
    content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide valuable information to the website owners.
At Aussie Sun Solar, we use cookies to improve your browsing experience, personalise content, and analyse our site traffic.`,
  },
  {
    title: "2. How We Use Cookies",
    content: `We use cookies for the following purposes:
• Essential Cookies: These are strictly necessary for the operation of our website. They enable core functionalities such as security, network management, and accessibility.
• Performance & Analytics Cookies: These allow us to recognise and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works (e.g., by ensuring users find what they are looking for easily).
• Functionality Cookies: These are used to recognise you when you return to our website. They enable us to personalise our content for you and remember your preferences.
• Targeting/Marketing Cookies: These cookies record your visit to our website, the pages you have visited, and the links you have followed. We may use this information to make our website and the advertising displayed on it more relevant to your interests.`,
  },
  {
    title: "3. Third-Party Cookies",
    content: `In addition to our own cookies, we may also use various third-party cookies (such as Google Analytics or Meta Pixel) to report usage statistics of the website and deliver advertisements. These third parties have their own privacy and cookie policies, and we do not control the placement of their cookies.`,
  },
  {
    title: "4. Managing Your Cookie Preferences",
    content: `You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in our Cookie Consent Banner when you first visit our site.
Alternatively, most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.aboutcookies.org or www.allaboutcookies.org.
Please note that if you choose to reject cookies, you may still use our website, but your access to some functionality and areas of our website may be restricted.`,
  },
  {
    title: "5. Changes to This Cookie Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data use practices. Any changes will become effective when we post the revised Cookie Policy on this page. We encourage you to review this policy periodically.`,
  },
  {
    title: "6. Contact Us",
    content: `If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at:
Aussie Sun Solar Pty Ltd
Email: info@aussiesunsolar.com.au
Phone: 1300 672 194`,
  },
];

const CookiesPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Cookie Policy" description="Read the Cookie Policy of Aussie Sun Solar to understand how we use cookies and tracking technologies." />

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
              <Cookie size={20} />
              <span className="text-sm font-black uppercase tracking-[0.3em]">Privacy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Cookie{" "}
              <span className="text-[#FE9900]">Policy</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
              Learn how we use cookies to improve your browsing experience and how you can manage your preferences.
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
          <span className="text-[#004093] font-semibold">Cookie Policy</span>
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
            This Cookie Policy explains what cookies are, how Aussie Sun Solar uses them on our website, and your choices regarding their use.
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

export default CookiesPolicyPage;
