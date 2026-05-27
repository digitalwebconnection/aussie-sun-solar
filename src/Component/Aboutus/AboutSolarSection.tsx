export default function PremiumSolarAbout() {
  return (

    <>
    <section className="relative overflow-hidden bg-white py-12 lg:py-18">
      
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#FE9900]/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#004093]/20 blur-[140px] rounded-full"></div>

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[70px_70px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* LEFT IMAGE DESIGN */}
          <div className="relative flex justify-center">

            {/* Decorative Shape */}
            <div className="absolute top-0 left-10 w-[440px] h-[530px] rounded-lg border-2 border-[#004093]/80 rotate-10"></div>

            {/* Main Image Card */}
            <div className="relative group">

              <div className="absolute -inset-4 bg-linear-to-r from-[#FE9900] to-[#004093] rounded-lg blur-xl opacity-50 group-hover:opacity-50 transition-all duration-500"></div>

              <div className="relative overflow-hidden rounded-lg shadow-2xl border border-gray-200 bg-white">
                
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
                  alt="Solar panel installation by Aussie Sun Solar"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6">
                  
                  <div className="flex items-center justify-between">
                    
                    <div>
                      <h3 className="text-4xl font-black text-white">
                        5000+
                      </h3>

                      <p className="text-white/80 mt-1">
                        Successful Solar Installations
                      </p>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-[#FE9900] flex items-center justify-center text-white text-2xl shadow-xl">
                      ☀️
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Tag */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#004093]/10 border border-[#004093]/20 mb-8">
              
              <div className="w-2.5 h-2.5 rounded-full bg-[#004093] animate-pulse"></div>

              <p className="text-[#004093] uppercase tracking-[0.2em] text-xs font-bold">
                About Our Company
              </p>

            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-6xl font-black text-[#FE9900] leading-[1.05] tracking-tight">
              Powering
              <span className="block text-transparent bg-clip-text bg-[#004093] ">
                Australia’s Future
              </span>
              With Solar Energy
            </h2>

            {/* Subtitle */}
            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-3xl">
              We provide advanced solar energy solutions for homes, 
              businesses, and industries with a focus on savings, 
              sustainability, and long-term energy independence.
            </p>

        

            {/* CTA */}
            <div className="flex flex-wrap gap-5 mt-14">

              <button className="group relative overflow-hidden w-full sm:w-auto bg-[#004093] hover:bg-[#00306e] text-white px-10 py-2 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105">
                
                <span className="relative z-10">
                  Get Free Consultation
                </span>

              </button>

              <button className="w-full sm:w-auto px-10 py-2 rounded-2xl border border-gray-300 hover:border-[#004093] text-black hover:text-[#004093] text-lg font-semibold transition-all duration-300">
                Explore Services
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
     <section className="relative overflow-hidden bg-[#f7f7f7] py-10">
      


 

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        
        <div className="max-w-7xl mx-auto text-center">

          {/* Small Tag */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#004093]/20 bg-[#004093]/10 mb-4">
            
            <div className="w-2.5 h-2.5 rounded-full bg-[#004093] animate-pulse"></div>

            <p className="text-[#004093] uppercase tracking-[0.2em] text-xs font-bold">
              Our Mission
            </p>

          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
            Creating A
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#004093] to-[#FE9900]">
              {" "}Smarter Solar Future{" "}
            </span>
            For Every Home & Business
          </h2>

          {/* Description */}
          <p className="mt-10 text-lg md:text-xl leading-relaxed text-gray-600 max-w-7xl mx-auto">
            Our mission is to deliver reliable and high-performance solar 
            energy solutions that help families and businesses reduce 
            electricity costs, achieve energy independence, and build a 
            cleaner, more sustainable future for generations to come.
          </p>

          {/* Bottom Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="group bg-white border border-gray-400 rounded-xl shadow-xl shadow-black p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FE9900]/10 flex items-center justify-center text-3xl">
                ☀️
              </div>

              <h3 className="text-xl md:text-2xl font-bold mt-6 text-black">
                Clean Energy
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Helping reduce carbon emissions with renewable solar power.
              </p>

            </div>

            <div className="group bg-white border border-gray-400 rounded-xl shadow-xl shadow-black p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#004093]/10 flex items-center justify-center text-3xl">
                ⚡
              </div>

              <h3 className="text-xl md:text-2xl font-bold mt-6 text-black">
                Smart Savings
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Lower electricity bills with efficient solar technology.
              </p>

            </div>

            <div className="group bg-white border border-gray-400 rounded-xl shadow-xl shadow-black p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/10 flex items-center justify-center text-3xl">
                🌱
              </div>

              <h3 className="text-xl md:text-2xl font-bold mt-6 text-black">
                Sustainable Future
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Building a greener tomorrow with advanced energy solutions.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  );
}