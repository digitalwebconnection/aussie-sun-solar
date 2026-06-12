
import { useState } from "react";
import { useToast } from "../ui/Toast";
import {
  Sun,
  BadgeDollarSign,
  ShieldCheck,
  Wallet,
  ArrowRight,
} from "lucide-react";

export default function AussiesSunSolarFinance() {
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
    if (data.success) { toast.success("Request sent successfully! We'll be in touch shortly."); (event.target as HTMLFormElement).reset(); }
    else { toast.error("Something went wrong. Please try again."); }
  };

  return (
    <section className="w-full bg-[#f4f8ff] py-10 md:py-16 overflow-hidden" aria-label="Solar finance options">
      <div className="max-w-7xl mx-auto">

        {/* MAIN CARD */}
        <div className="grid lg:grid-cols-3  overflow-hidden shadow-xl shadow-black/50">

          {/* LEFT SECTION */}
          <div className="bg-[#FE9900] p-5 md:p-10 shadow-xl shadow-black/50 lg:p-12 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-[-50px] left-[-50px] w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl">
                  <Sun className="text-[#FE9900]" size={34} />
                </div>

                <div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-none">
                    Aussie Sun
                  </h2>

                  <span className="text-[#004093] font-bold text-lg">
                    Solar
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-semibold leading-tight text-white mb-6">
                Easy Solar Finance
                <span className="block text-[#004093]">
                  For Every Aussie Home
                </span>
              </h3>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-10">
                Switch to premium solar with flexible repayment plans,
                lower electricity bills, and long-term savings.
              </p>

              {/* Features */}
              <div className="md:space-y-5 space-y-3">

                <div className="flex items-start gap-4">
                  <div className="min-w-[50px] h-[50px] rounded-2xl bg-white/20 flex items-center justify-center">
                    <BadgeDollarSign className="text-white" />
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Flexible Payment Plans
                    </h4>

                    <p className="text-white/70">
                      Weekly & monthly repayment options available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-[50px] h-[50px] rounded-2xl bg-white/20 flex items-center justify-center">
                    <Wallet className="text-white" />
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Save More Every Month
                    </h4>

                    <p className="text-white/70">
                      Reduce electricity bills from day one.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-[50px] h-[50px] rounded-2xl bg-white/20 flex items-center justify-center">
                    <ShieldCheck className="text-white" />
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Fast Approval Process
                    </h4>

                    <p className="text-white/70">
                      Quick approvals with minimal paperwork.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER SECTION */}
          <div className="bg-[#004093] p-5 md:p-10 lg:p-12 relative overflow-hidden">

            <div className="absolute bottom-[-80px] right-[-80px] w-60 h-60 bg-[#FE9900]/20 rounded-full blur-[120px]"></div>

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full md:mb-8 mb-6">
                <Sun className="text-[#FE9900]" size={18} />

                <span className="text-white text-sm font-semibold">
                  Smart Solar Benefits
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-semibold leading-tight text-white mb-8">
                Why Choose
                <span className="block text-[#FE9900]">
                  Aussies Sun Solar?
                </span>
              </h3>

              <div className="space-y-6">

                <div className="bg-white/10 border border-white/10 rounded-3xl p-5">
                  <h4 className="text-white font-bold text-xl mb-2">
                    Premium Solar Panels
                  </h4>

                  <p className="text-white/70">
                    High-performance solar systems designed for
                    Australian weather conditions.
                  </p>
                </div>

                <div className="bg-white/10 border border-white/10 rounded-3xl p-5">
                  <h4 className="text-white font-bold text-xl mb-2">
                    Long-Term Savings
                  </h4>

                  <p className="text-white/70">
                    Save thousands on power bills over the life of
                    your solar system.
                  </p>
                </div>

                <div className="bg-white/10 border border-white/10 rounded-3xl p-5">
                  <h4 className="text-white font-bold text-xl mb-2">
                    Trusted Installation Team
                  </h4>

                  <p className="text-white/70">
                    Professional solar experts with fast and reliable
                    installation service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="bg-white p-5 md:p-10 lg:p-12 relative">

            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FE9900]/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10">

              <div className="mb-8">
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] mb-3">
                  Get Free Quote
                </h3>

                <p className="text-gray-500 text-lg">
                  Start your solar journey today.
                </p>
              </div>

              <form className="space-y-5" onSubmit={onSubmit}>

                <div>
                  <label className="text-[#004093] font-semibold mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter full name"
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#f7f9ff] outline-none focus:border-[#FE9900]"
                  />
                </div>

                <div>
                  <label className="text-[#004093] font-semibold mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email address"
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#f7f9ff] outline-none focus:border-[#FE9900]"
                  />
                </div>

                <div>
                  <label className="text-[#004093] font-semibold mb-2 block">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter mobile number"
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#f7f9ff] outline-none focus:border-[#FE9900]"
                  />
                </div>

                <div>
                  <label className="text-[#004093] font-semibold mb-2 block">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter address"
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#f7f9ff] outline-none focus:border-[#FE9900]"
                  />
                </div>

                <div>
                  <label className="text-[#004093] font-semibold mb-2 block">
                    Interested In
                  </label>
                  <select name="service" className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#f7f9ff] outline-none focus:border-[#FE9900]">
                    <option>Residential Solar</option>
                    <option>Commercial Solar</option>
                    <option>Solar Battery</option>
                    <option>Solar Finance</option>
                  </select>
                </div>

                
                

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-[#FE9900] hover:bg-orange-500 transition-all duration-300 h-16 rounded-2xl text-white font-black text-lg flex items-center justify-center gap-3 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Request Free Quote"}
                  {!isSubmitting && <ArrowRight size={22} className="group-hover:translate-x-1 transition-all" />}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}