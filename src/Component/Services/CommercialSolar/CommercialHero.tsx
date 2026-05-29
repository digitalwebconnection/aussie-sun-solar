import { useState } from "react";
import { useToast } from "../../ui/Toast";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CommercialHero = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
        const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "f3cef460-e2ec-49da-adab-5f4180bdf046");
    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await response.json();
    setIsSubmitting(false);
    if (data.success) { toast.success("Message sent! We'll contact you shortly."); (event.target as HTMLFormElement).reset(); }
    else { toast.error("Something went wrong. Please try again."); }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-8">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2000&auto=format&fit=crop"
          alt="Commercial Solar Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000]/60" />
      </div>
      <div className="absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-[#FE9900]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 md:gap-14 lg:grid-cols-[60%_40%]">
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12">
              <div className="mb-5 flex items-center gap-4">
                <div className="h-[2px] w-14 bg-[#FE9900]" />
                <span className="text-lg font-bold uppercase tracking-[0.3em] text-[#FE9900]">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl  font-serif font-bold leading-tight text-white">
              Commercial EV
                <span className="block text-[#FE9900]"> Charging Solutions</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              Smart EV Chargers Australia solutions for fast, reliable, and energy-efficient vehicle charging. Built for businesses, workplaces, and commercial properties across Australia. </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative">
            <div className="rounded-lg border shadow-xl shadow-black border-white/60 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FE9900]">Get In Touch</p>
              <h3 className="mt-1 text-3xl font-black leading-tight text-white">Request A Free Consultation</h3>
              <p className="mt-1 leading-relaxed text-white/70">Fill out the form and our team will contact you shortly.</p>
              <form className="mt-4 space-y-2" onSubmit={onSubmit}>
                <input type="text" name="name" required placeholder="Business Name" className="h-14 w-full rounded-xl border border-white/10 bg-white/10 px-5 text-white outline-none placeholder:text-white/50 focus:border-[#FE9900]" />
                <input type="email" name="email" required placeholder="Email Address" className="h-14 w-full rounded-xl border border-white/10 bg-white/10 px-5 text-white outline-none placeholder:text-white/50 focus:border-[#FE9900]" />
                <input type="tel" name="phone" placeholder="Phone Number" className="h-14 w-full rounded-xl border border-white/10 bg-white/10 px-5 text-white outline-none placeholder:text-white/50 focus:border-[#FE9900]" />
                <textarea rows={2} name="message" required placeholder="Tell us about your business" className="w-full rounded-xl border border-white/10 bg-white/10 p-5 text-white outline-none resize-none placeholder:text-white/50 focus:border-[#FE9900]" />
                
                
                <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#FE9900] px-7 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"} {!isSubmitting && <ChevronRight size={20} />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommercialHero;
