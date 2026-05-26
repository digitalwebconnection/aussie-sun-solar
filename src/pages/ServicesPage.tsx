import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Battery, Car, Building2, ArrowRight, ChevronRight, ShieldCheck, Users, Zap, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Solar Power Systems',
    subtitle: 'Residential Solar',
    desc: 'High-efficiency solar panels for homes and properties across Australia. Reduce your energy bills and achieve energy independence.',
    path: '/services/solar-power-systems',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    color: 'from-amber-400 to-orange-500',
    stats: ['10K+ Installs', '25Y Warranty', '100% Local Support'],
  },
  {
    icon: Battery,
    title: 'Battery Storage Solutions',
    subtitle: 'Energy Storage',
    desc: 'Store excess solar energy and power your home at night or during blackouts with cutting-edge battery storage technology.',
    path: '/services/battery-storage-solutions',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop',
    color: 'from-blue-400 to-indigo-600',
    stats: ['5K+ Batteries', '10Y Warranty', '24/7 Monitoring'],
  },
  {
    icon: Car,
    title: 'EV Chargers',
    subtitle: 'Electric Vehicle Charging',
    desc: 'Professional EV charger installation at home or your business. Charge your electric vehicle using clean solar energy.',
    path: '/services/ev-chargers',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop',
    color: 'from-emerald-400 to-teal-600',
    stats: ['1K+ Chargers', '7kW–22kW', 'All EV Brands'],
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    subtitle: 'Business Solar',
    desc: 'Large-scale commercial solar systems for warehouses, offices, and industrial facilities. Cut overheads and meet sustainability goals.',
    path: '/services/commercial-solar',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop',
    color: 'from-purple-400 to-pink-600',
    stats: ['500+ Installs', 'Up to 100kW+', 'Finance Available'],
  },
];

const whyUs = [
  { icon: ShieldCheck, title: 'CEC Accredited', desc: 'All our installers are Clean Energy Council accredited professionals.' },
  { icon: Users, title: '10,000+ Happy Customers', desc: 'Thousands of Australian homes and businesses trust Aussie Sun Solar.' },
  { icon: Zap, title: 'Fast Installation', desc: 'Quick, professional installs with smooth grid approvals and support.' },
  { icon: Sparkles, title: 'Premium Products Only', desc: 'We only supply Tier-1 solar panels, inverters, and battery systems.' },
];

const ServicesPage = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen bg-white">

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop" alt="Services Background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-[#FE9900]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="h-[2px] w-14 bg-[#FE9900]" />
              <span className="text-lg font-bold uppercase tracking-[0.3em] text-[#FE9900]">What We Offer</span>
              <div className="h-[2px] w-14 bg-[#FE9900]" />
            </div>
            <h1 className="text-5xl font-serif font-bold leading-tight text-white md:text-7xl">
              Our Premium
              <span className="block text-[#FE9900]">Solar Services</span>
            </h1>
            <p className="mt-6 mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              From residential solar panels to commercial installations, battery storage, and EV charging — Aussie Sun Solar is your one-stop clean energy partner across Australia.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#FE9900] px-10 py-4 font-black text-black uppercase tracking-wider shadow-[0_20px_50px_rgba(254,153,0,0.5)] transition-all hover:scale-105 hover:bg-[#ffb033]">
                Get A Free Quote <ArrowRight size={20} />
              </Link>
              <a href="tel:1300504912" className="inline-flex items-center gap-3 rounded-full border-2 border-white/60 px-10 py-4 font-bold text-white uppercase tracking-wider transition-all hover:border-[#FE9900] hover:text-[#FE9900]">
                Call 1300 504 912
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#FE9900]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#004093]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block text-[#FE9900] font-bold uppercase tracking-[3px] text-sm mb-4">All Services</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-6xl font-black text-[#0B1220] leading-tight">
              Complete Clean Energy
              <span className="block text-[#FE9900]">Solutions</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Icon Badge */}
                  <div className={`absolute top-5 left-5 w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center text-white shadow-xl`}>
                    <service.icon size={28} />
                  </div>
                  <span className="absolute top-5 right-5 text-xs font-bold uppercase tracking-[0.2em] text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">{service.subtitle}</span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-[#0B1220] mb-3 group-hover:text-[#FE9900] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.stats.map((stat, j) => (
                      <span key={j} className="text-xs font-bold bg-[#FE9900]/10 text-[#004093] px-3 py-1 rounded-full border border-[#FE9900]/30">{stat}</span>
                    ))}
                  </div>

                  <Link to={service.path} className="inline-flex items-center gap-3 bg-[#004093] text-white font-bold px-7 py-3 rounded-full hover:bg-[#FE9900] hover:text-black transition-all duration-300 group/btn">
                    Learn More <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Bottom gradient accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 bg-[#010816] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FE9900]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block text-[#FE9900] font-bold uppercase tracking-[3px] text-sm mb-4">Why Aussie Sun Solar</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-6xl font-black text-white leading-tight">
              Australia's Most Trusted
              <span className="block text-[#FE9900]">Solar Company</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#FE9900]/50 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[#FE9900]/10 border border-[#FE9900]/30 flex items-center justify-center mb-6 group-hover:bg-[#FE9900] transition-all duration-300">
                  <item.icon size={28} className="text-[#FE9900] group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#FE9900] transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#FE9900] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-6xl font-black text-black leading-tight mb-6">
            Ready To Go Solar?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-black/70 text-xl leading-relaxed mb-10">
            Get a free, no-obligation quote from our solar experts today and start saving on your energy bills.
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-black text-white font-black px-10 py-4 uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-300">
              Get Free Quote <ArrowRight size={20} />
            </Link>
            <a href="tel:1300504912" className="inline-flex items-center gap-3 rounded-full border-2 border-black/30 px-10 py-4 font-bold text-black uppercase tracking-wider hover:border-black transition-all">
              1300 504 912
            </a>
          </div>
        </div>
      </section>

    </motion.main>
  );
};

export default ServicesPage;
