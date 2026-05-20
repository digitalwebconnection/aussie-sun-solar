export interface ProductData {
  slug: string;
  name: string;
  category: "Solar Panels" | "Solar Inverters" | "Solar Batteries";
  brand: string;
  tagline: string;
  subtitle: string;
  intro: string;
  whyChoose: string[];
  rangeTitle: string;
  rangeIntro: string;
  rangeSpecs: string[];
  betterTitle: string;
  betterList: string[];
  installation: string[];
  bestFor: string[];
  warranty: string[];
  recommendation: string;
  logoText: string;
  brandColor: string;
}

export const productsData: Record<string, ProductData> = {
  // ==================== SOLAR PANELS ====================
  "jinko-solar-panels": {
    slug: "jinko-solar-panels",
    name: "Jinko Solar Panels",
    category: "Solar Panels",
    brand: "Jinko Solar",
    tagline: "Powering Millions, Trusted Worldwide",
    subtitle: "Building Your Trust in Solar",
    intro: "Jinko Solar is one of the global leaders in the solar industry, known for its high-efficiency solar modules and innovative N-type cell technology. With a massive global footprint and record-breaking performance, Jinko panels are trusted by millions of residential and commercial users worldwide.",
    whyChoose: [
      "Global leader in solar module shipments with proven field reliability.",
      "Innovative Tiger Neo series featuring advanced N-type TOPCon technology.",
      "Outstanding low-light performance and high energy yield over time.",
      "Enhanced durability with high wind and heavy snow load resistance.",
      "Industry-leading 25-year product and 30-year linear power warranty."
    ],
    rangeTitle: "Jinko Tiger Neo N-Type Series",
    rangeIntro: "The Tiger Neo series is Jinko Solar's flagship range, utilizing N-type TOPCon technology to deliver exceptional performance, minimal degradation, and higher efficiency.",
    rangeSpecs: [
      "Up to 22.5% module efficiency for maximum output in limited roof space.",
      "N-type TOPCon technology leads to lower temperature coefficients (-0.29%/°C).",
      "Optimized performance in shading and overcast conditions.",
      "Zero Light Induced Degradation (LID) for long-term power stability.",
      "Bifacial option available for maximum energy absorption from both sides."
    ],
    betterTitle: "What Makes Jinko Tiger Neo Better?",
    betterList: [
      "N-Type TOPCon Cell Architecture: Provides higher power output per square meter.",
      "Better High-Temperature Coefficient: Maintains higher efficiency even on hot Australian summer days.",
      "Lower Annual Power Degradation: Only 0.4% annual degradation after year one, ensuring higher power output in year 25+.",
      "Superior Mechanical Load Strength: Built to withstand harsh weather conditions including extreme wind and hail."
    ],
    installation: [
      "Fully compatible with premium solar inverters including Sungrow, Growatt, and GoodWe.",
      "Standard dimensions make mounting quick and efficient for professional installers.",
      "Certified under all major clean energy standards (CEC approved, TUV, CE)."
    ],
    bestFor: [
      "Homeowners seeking a premium, globally recognized brand with top-tier technology.",
      "Installations with limited roof space that require high-power density panels.",
      "Commercial solar projects seeking optimized ROI through long-term energy yields."
    ],
    warranty: [
      "25-Year Product Warranty for peace of mind.",
      "30-Year Linear Power Performance Warranty at 87.4% output.",
      "Local support centers in Australia to ensure prompt claims and technical assistance."
    ],
    recommendation: "Jinko Solar Panels are highly recommended for those looking for a brand that is a household name in the solar industry, offering cutting-edge TOPCon technology with excellent local warranty support.",
    logoText: "JinkoSolar",
    brandColor: "#5CB85C"
  },
  "ja-solar-panels": {
    slug: "ja-solar-panels",
    name: "JA Solar Panels",
    category: "Solar Panels",
    brand: "JA Solar",
    tagline: "High Efficiency & High Reliability",
    subtitle: "Harvesting Sun for a Greener Tomorrow",
    intro: "JA Solar is a top-tier global manufacturer of high-performance photovoltaic products. With 12 manufacturing bases and more than 20 branches globally, the company's business covers silicon wafers, cells, modules, and photovoltaic power stations, delivering excellent value to clients worldwide.",
    whyChoose: [
      "Tier 1 manufacturer with an excellent reputation for quality control.",
      "Highly efficient PERC and N-type cell structures designed for high energy yield.",
      "Excellent resistance to PID (Potential Induced Degradation).",
      "Strong performance under weak light conditions.",
      "Solid warranty backing with local representation."
    ],
    rangeTitle: "JA Solar DeepBlue 3.0 & 4.0 Series",
    rangeIntro: "The DeepBlue series combines multi-busbar (MBB) and half-cell technologies to lower hot spot risks and improve efficiency under partially shaded conditions.",
    rangeSpecs: [
      "Module efficiency reaching up to 22.0% with multi-busbar technology.",
      "Lower risk of micro-cracks and hot spots due to half-cut design.",
      "Low temperature coefficient ensures stable generation in peak heat.",
      "Superior durability against sand, salt mist, and ammonia corrosion.",
      "Certified for wind loads of up to 2400 Pa and snow loads of 5400 Pa."
    ],
    betterTitle: "What Makes JA Solar DeepBlue Better?",
    betterList: [
      "Gallium-doped Technology: Reduces Light-Induced Degradation (LID) significantly compared to standard boron-doped panels.",
      "Optimized Ribbon Design: MBB layout reduces resistance losses and maximizes sunlight utilization.",
      "Outstanding Yield: Higher power generation in real-world scenarios due to low resistance losses and optimized shade tolerance."
    ],
    installation: [
      "Seamless integration with major string and hybrid inverter brands.",
      "Flexible mounting options supporting portrait and landscape configurations.",
      "Clean Energy Council (CEC) listed for Australian rebate compliance."
    ],
    bestFor: [
      "Mid-to-high budget residential installations demanding long-term stability.",
      "Coastal regions where salt-mist resistance is essential.",
      "Utility-scale solar installations aiming for minimal Levelized Cost of Energy (LCOE)."
    ],
    warranty: [
      "15 to 25-Year Product Warranty (dependent on specific module selection).",
      "25-Year Linear Power Warranty ensuring at least 84.8% output in year 25.",
      "Responsive customer service and claims handling through Australian offices."
    ],
    recommendation: "JA Solar offers a perfect balance of reliability, premium technology, and cost efficiency, making it one of the most popular choices for Australian homes.",
    logoText: "JASOLAR",
    brandColor: "#0055A5"
  },
  "aiko-solar-panels": {
    slug: "aiko-solar-panels",
    name: "AIKO Solar Panels",
    category: "Solar Panels",
    brand: "AIKO Solar",
    tagline: "World Record Efficiency with ABC Technology",
    subtitle: "Redefining Solar Power Limits",
    intro: "AIKO Solar is a pioneering technology company specializing in clean energy generation. AIKO is world-renowned for its revolutionary All-Back-Contact (ABC) technology, which eliminates grid lines on the front of the cell, setting new world records for commercial module efficiency.",
    whyChoose: [
      "Industry-leading module efficiency of up to 24.0%+",
      "All-Back-Contact (ABC) design provides a sleek, fully black aesthetic.",
      "No front metal grid lines, maximizing the light-absorbing surface area.",
      "Outstanding temperature coefficient of -0.29%/°C.",
      "Superior micro-crack and shade tolerance algorithms built into the cell design."
    ],
    rangeTitle: "AIKO ABC White Hole & Black Hole Series",
    rangeIntro: "The ABC series represents a major technological leap, providing not only unparalleled power output but also a sleek, high-end design that elevates roof aesthetics.",
    rangeSpecs: [
      "Unprecedented efficiency up to 24% for maximum power generation per panel.",
      "Sleek full-black appearance perfect for premium architectural projects.",
      "Lower thermal loss coefficient ensures performance remains high in hot climates.",
      "Innovative micro-crack mitigation technology prevents hotspots.",
      "Minimized degradation: Under 1% in the first year, under 0.35% annually thereafter."
    ],
    betterTitle: "What Makes AIKO ABC Technology Better?",
    betterList: [
      "Front-Free Electrodes: 100% of the front surface is dedicated to capturing light, rather than being covered by silver grid lines.",
      "Stunning Premium Aesthetics: A pure black, clean look that blends seamlessly with any modern roof design.",
      "Exceptional Shade Tolerance: Features advanced bypass diode logic that keeps the panel operating even when partially shaded."
    ],
    installation: [
      "Perfect match for advanced smart inverters and optimizer-based systems.",
      "Premium black anodized frames match modern roof tiles and metal sheets.",
      "CEC approved and fully compliant with all local Australian grid requirements."
    ],
    bestFor: [
      "Premium residential homes looking for the absolute highest efficiency available.",
      "Architecturally sensitive roofs where style and look are as important as power.",
      "Tight roof layouts where space is limited but power needs are high."
    ],
    warranty: [
      "25-Year Product Warranty for materials and workmanship.",
      "30-Year Linear Power Warranty maintaining over 88.85% efficiency.",
      "Australian local warranty support for fast claims process."
    ],
    recommendation: "AIKO ABC panels are the premium choice for homeowners who want the absolute best efficiency and a modern, high-end look on their roofs.",
    logoText: "AIKO",
    brandColor: "#E30613"
  },
  "canadian-solar-panels": {
    slug: "canadian-solar-panels",
    name: "Canadian Solar Panels",
    category: "Solar Panels",
    brand: "Canadian Solar",
    tagline: "Global Powerhouse in Solar Technology",
    subtitle: "Make The Difference",
    intro: "Canadian Solar is one of the world's largest solar technology and renewable energy companies. Founded in 2001, Canadian Solar has delivered over 100 GW of premium-quality solar modules to customers in over 160 countries, making them a highly recognized and bankable brand.",
    whyChoose: [
      "Globally recognized tier-1 brand with a strong 20+ year track record.",
      "High power dual-cell modules (HiKu series) optimizing energy output.",
      "Advanced cell technology minimizing micro-crack impacts.",
      "Excellent performance at low irradiance and high temperatures.",
      "Highly bankable company ensuring reliable long-term warranty support."
    ],
    rangeTitle: "Canadian Solar HiKu6 & HiKu7 Series",
    rangeIntro: "The HiKu range represents Canadian Solar's commitment to high power output and reliability, featuring half-cut cells and multi-busbar technology.",
    rangeSpecs: [
      "Module efficiency up to 21.5% for high-density power generation.",
      "Half-cell design reduces internal current and operating temperature.",
      "Minimized power losses in shade due to split module design.",
      "Heavy load durability: certified for snow loads up to 5400 Pa.",
      "Enhanced durability with high wind resistance."
    ],
    betterTitle: "What Makes Canadian Solar HiKu Better?",
    betterList: [
      "Low NMOT (Nominal Module Operating Temperature): Operates at cooler temperatures, increasing efficiency and slowing degradation.",
      "Dual-Cell Design: Ensures that even if the top half of the panel is shaded, the bottom half continues to produce power at 100% capacity.",
      "Comprehensive Testing: Subjected to rigorous quality controls exceeding international standard requirements."
    ],
    installation: [
      "Compatible with all standard residential and commercial string inverters.",
      "Robust frame design compatible with generic racking systems for quick installs.",
      "CEC certified and approved for all Australian state rebates."
    ],
    bestFor: [
      "Value-conscious homeowners seeking a highly reliable tier-1 brand.",
      "Commercial roofs requiring solid structural performance and dependable yield.",
      "Regions prone to partial shading during the day."
    ],
    warranty: [
      "12 to 25-Year Product Warranty (depending on specific module type).",
      "25-Year Performance Warranty guaranteeing 84.8% of original output.",
      "Dedicated Australian customer service team for local warranty validation."
    ],
    recommendation: "Canadian Solar is a safe, reliable, and solid investment for any homeowner, offering proven performance from one of the oldest names in the solar industry.",
    logoText: "CanadianSolar",
    brandColor: "#CC3333"
  },
  "das-solar-panels": {
    slug: "das-solar-panels",
    name: "DAS Solar Panels",
    category: "Solar Panels",
    brand: "DAS Solar",
    tagline: "N-Type Technology Specialist",
    subtitle: "Leading the N-type Solar Era",
    intro: "DAS Solar is a high-tech new energy enterprise specializing in the R&D and manufacture of high-efficiency solar cells and modules. As an early adopter and leader of N-type TOPCon technology, DAS Solar provides high-efficiency, reliable, and cost-effective solar solutions worldwide.",
    whyChoose: [
      "Dedicated focus on N-type TOPCon high-efficiency modules.",
      "Excellent low-light performance and low-temperature coefficients.",
      "Sleek design with high-quality materials and strict quality checks.",
      "Enhanced resistance to Potential Induced Degradation (PID).",
      "High bifaciality rate for double-sided power generation projects."
    ],
    rangeTitle: "DAS Solar N-type TOPCon Series",
    rangeIntro: "DAS Solar's N-type TOPCon modules offer higher efficiency, lower degradation, and better performance in hot climates than traditional P-type modules.",
    rangeSpecs: [
      "Module efficiency up to 22.3% for excellent power output.",
      "Temperature coefficient of -0.30%/°C for stable hot-weather performance.",
      "High bifaciality up to 80% on double-glass modules.",
      "First-year degradation < 1%, annual degradation < 0.4%.",
      "Superb resistance to PID under humid and high-heat environments."
    ],
    betterTitle: "What Makes DAS Solar N-type Better?",
    betterList: [
      "Advanced TOPCon Technology: Utilizes ultra-thin tunnel oxide layers to reduce recombination and boost cell efficiency.",
      "Outstanding Low-Light Response: Generates electricity earlier in the morning and later in the evening compared to traditional panels.",
      "Zero LID (Light-Induced Degradation): Prevents initial drop in performance, maximizing solar output from day one."
    ],
    installation: [
      "Easily integrated with modern string and hybrid inverters.",
      "Standard and lightweight layouts for ease of residential rooftop installations.",
      "CEC approved for the Australian market."
    ],
    bestFor: [
      "Rooftops that get early morning or late afternoon sun.",
      "Hot Australian environments where temperature-related losses are high.",
      "Homeowners seeking N-type technology at competitive price points."
    ],
    warranty: [
      "15 to 25-Year Product Warranty.",
      "30-Year Linear Power Warranty for double-glass modules.",
      "Local support channels in Australia to manage technical requests."
    ],
    recommendation: "DAS Solar is a fantastic choice for those looking to invest in next-gen N-type TOPCon technology without paying a massive brand premium.",
    logoText: "DASSOLAR",
    brandColor: "#0088CE"
  },
  "dmegc-solar-panels": {
    slug: "dmegc-solar-panels",
    name: "DMEGC Solar Panels",
    category: "Solar Panels",
    brand: "DMEGC Solar",
    tagline: "European Favorite with Premium Build Quality",
    subtitle: "Innovation for Green Living",
    intro: "DMEGC Solar is the solar division of DMEGC Magnetics, a massive manufacturer with a history dating back to 1980. Renowned for its industrial manufacturing precision, DMEGC Solar is a key player in Europe and is gaining rapid popularity in Australia for its high-quality construction and durability.",
    whyChoose: [
      "Backed by a multi-billion dollar manufacturing group with 40+ years experience.",
      "Highly popular in Europe for meeting strict quality and environmental standards.",
      "Excellent PID resistance and low hot spot risk due to precision manufacturing.",
      "Full range of aesthetic black modules for residential properties.",
      "Strong financial stability ensuring secure warranty support."
    ],
    rangeTitle: "DMEGC N-Type & All-Black Series",
    rangeIntro: "DMEGC N-Type modules combine N-type TOPCon technology with double-glass construction to offer extreme reliability and long-term yield.",
    rangeSpecs: [
      "Efficiency up to 22.3% with advanced N-type cell architecture.",
      "Stunning full-black aesthetics for high-end residential projects.",
      "High fire safety ratings due to double-glass structure.",
      "Lower operating temperature due to optimized half-cell layouts.",
      "Certified to withstand harsh environments (salt, ammonia, sand)."
    ],
    betterTitle: "What Makes DMEGC Solar Better?",
    betterList: [
      "Precision Magnetics Heritage: DMEGC applies rigorous, automotive-grade quality standards to solar panel assembly.",
      "Eco-Vadis Sustainability Rated: Recognized globally for low-carbon manufacturing processes and high social responsibility.",
      "Excellent Mechanical Resilience: High resistance to mechanical stresses, keeping micro-cracks at a minimum."
    ],
    installation: [
      "Compatible with all major inverter systems including Growatt, Solis, and GoodWe.",
      "Lightweight double-glass configurations make installation secure and straightforward.",
      "Approved by the Clean Energy Council for rebates across Australia."
    ],
    bestFor: [
      "Eco-conscious buyers looking for low-carbon, ethically manufactured panels.",
      "Homes in harsh climates needing extra durability (heavy wind, coastal spray).",
      "Homeowners seeking premium full-black panels with excellent European reputations."
    ],
    warranty: [
      "25-Year Product Warranty for peace of mind.",
      "30-Year Performance Warranty securing stable long-term energy generation.",
      "Local service and claims support in Australia."
    ],
    recommendation: "DMEGC Solar panels are highly recommended for customers who prioritize manufacturing precision, environmental standards, and robust product build quality.",
    logoText: "DMEGC",
    brandColor: "#0F7C3E"
  },
  "eging-solar-panels": {
    slug: "eging-solar-panels",
    name: "Eging Solar Panels",
    category: "Solar Panels",
    brand: "EGing PV",
    tagline: "Pioneering Vertically Integrated Solar Developer",
    subtitle: "Solid Power, Smart Energy",
    intro: "EGing PV is a vertically integrated solar PV manufacturer founded in 2003. As one of the first solar companies listed on the Shanghai Stock Exchange, EGing PV manages the entire manufacturing chain from silicon ingots to final PV modules, ensuring tight quality control and highly competitive pricing.",
    whyChoose: [
      "Fully vertically integrated production for consistent quality control.",
      "Pioneering brand listed on the stock exchange with stable financials.",
      "High-output half-cell modules with multi-busbar technology.",
      "Excellent cost-to-performance ratio for residential and commercial systems.",
      "Rigorous quality testing under TUV, CE, and MCS standards."
    ],
    rangeTitle: "EGing Star Series TOPCon Modules",
    rangeIntro: "EGing's Star series leverages N-type TOPCon cell technology to deliver high conversion efficiency and long-term durability.",
    rangeSpecs: [
      "Module efficiency up to 22.0% for dependable energy production.",
      "MBB half-cell structure minimizes shading losses and internal resistance.",
      "Low degradation rate ensures consistent year-on-year solar yield.",
      "Robust frame design compatible with standard racking setups.",
      "Certified to withstand wind loads (2400 Pa) and snow loads (5400 Pa)."
    ],
    betterTitle: "What Makes EGing PV Better?",
    betterList: [
      "Complete Vertical Integration: By producing everything in-house, EGing ensures that every component fits together perfectly with zero material mismatch.",
      "Cost-Effectiveness: Vertical integration reduces supply chain costs, passing savings directly to the consumer.",
      "Proven Field Durability: Millions of panels installed globally over the past two decades demonstrate excellent field performance."
    ],
    installation: [
      "Straightforward integration with any string or microinverter systems.",
      "Standard framing and connector components reduce installer setup time.",
      "CEC approved for all solar installation programs in Australia."
    ],
    bestFor: [
      "Budget-conscious customers wanting Tier-1 quality at a lower cost.",
      "Large-scale commercial installations where ROI is the primary metric.",
      "Rooftops looking for simple, no-nonsense solar solutions with strong warranties."
    ],
    warranty: [
      "15 to 25-Year Product Warranty depending on module specifications.",
      "25-Year Linear Power Warranty guaranteeing reliable power generation.",
      "Local support networks in Australia for prompt customer service."
    ],
    recommendation: "EGing PV panels are a great fit for users looking for a reliable, time-tested brand that offers outstanding value for money.",
    logoText: "EGingPV",
    brandColor: "#0D4F90"
  },
  "risen-solar-panels": {
    slug: "risen-solar-panels",
    name: "Risen Solar Panels",
    category: "Solar Panels",
    brand: "Risen Energy",
    tagline: "Tier 1 Innovation & High-Performance Technology",
    subtitle: "The Solar Pioneer since 1986",
    intro: "Risen Energy is a leading, global Tier 1 manufacturer of high-performance solar photovoltaic products. Founded in 1986, Risen has been at the forefront of solar technology innovation, specializing in high-efficiency panels, smart PV systems, and energy storage solutions.",
    whyChoose: [
      "Tier 1 manufacturer with decades of PV R&D experience.",
      "Leader in Heterojunction (HJT) and N-type TOPCon module technology.",
      "Industry-leading low temperature coefficient for extreme heat performance.",
      "High bifaciality and power outputs yielding higher ROI.",
      "Robust local warranty presence and support in Australia."
    ],
    rangeTitle: "Risen Hyper-ion & Titan Series",
    rangeIntro: "Risen's Titan and Hyper-ion series use 210mm large silicon wafers and half-cut cell layouts to achieve massive power outputs and excellent conversion rates.",
    rangeSpecs: [
      "Module efficiency up to 22.5%+, with HJT models pushing boundaries.",
      "Ultra-low temperature coefficient (-0.34%/°C for PERC, lower for HJT).",
      "Low voltage design allows for longer solar strings and lower system cost.",
      "Anti-reflective glass coating maximizes light trapping.",
      "Excellent PID and LID resistance profiles."
    ],
    betterTitle: "What Makes Risen Solar Better?",
    betterList: [
      "Heterojunction (HJT) Leadership: Risen is a pioneer in mass-producing HJT panels, which combine thin-film and crystalline silicon for superior power yields.",
      "Low carbon footprint options: Environmentally conscious manufacturing processes.",
      "High Durability Frames: Enhanced structural integrity resisting corrosion and mechanical stresses."
    ],
    installation: [
      "Compatible with major inverter brands like GoodWe, Growatt, and Sungrow.",
      "Large wafer layout optimized for quick residential and commercial installs.",
      "Approved by CEC and compliant with all Australian grid guidelines."
    ],
    bestFor: [
      "Installations in very hot regions where temperature coefficient is vital.",
      "Buyers looking for cutting-edge HJT technology and high-power modules.",
      "Commercial developers looking to lower overall balance-of-system (BOS) costs."
    ],
    warranty: [
      "15 to 25-Year Product Warranty depending on model.",
      "30-Year Performance Warranty ensuring over 85% output in year 30.",
      "Australian offices providing direct, localized warranty resolution."
    ],
    recommendation: "Risen Solar is a highly reliable option for users looking for high-capacity, heavy-duty solar panels engineered to withstand hot conditions.",
    logoText: "risen",
    brandColor: "#0D5CA4"
  },
  "trina-solar-panels": {
    slug: "trina-solar-panels",
    name: "Trina Solar Panels",
    category: "Solar Panels",
    brand: "Trina Solar",
    tagline: "Leading Smart Solar Energy Solutions",
    subtitle: "Power Beyond Limits",
    intro: "Trina Solar is a pioneer in solar energy technology, founded in 1997. As one of the world's most trusted solar brands, Trina Solar has consistently set world records for solar cell efficiency and power output, supplying high-quality panels for residential, commercial, and utility-scale installations globally.",
    whyChoose: [
      "Pioneering brand with nearly 30 years of industry leadership.",
      "Vertex S+ series featuring dual-glass N-type TOPCon technology.",
      "Sleek visual appearance with all-black options for modern homes.",
      "Excellent fire safety rating due to double-glass layers.",
      "High power density ensuring optimal roof utilization."
    ],
    rangeTitle: "Trina Vertex S+ & Vertex N Series",
    rangeIntro: "The Vertex S+ series represents the next generation of residential solar panels, utilizing N-type i-TOPCon cells sandwiched between two layers of glass for maximum strength.",
    rangeSpecs: [
      "Module efficiency up to 22.3% using 210mm wafer technology.",
      "Dual-glass structure replaces plastic backsheet for maximum lifetime.",
      "Extremely low annual degradation (0.4% per year) after year 1.",
      "Outstanding fire class rating (Class A) for enhanced safety.",
      "Superior load resistance: 5400 Pa snow load and 4000 Pa wind load."
    ],
    betterTitle: "What Makes Trina Vertex S+ Better?",
    betterList: [
      "Dual-Glass Construction: Increases resistance to moisture ingress, acid rain, salt spray, and physical stress.",
      "TOPCon Cell Technology: Boosts energy yield in low-light and high-temperature environments.",
      "Ultra-low Degradation: Guarantees 87.4% performance at year 30, outlasting standard modules."
    ],
    installation: [
      "Standard size and weight optimized for handling on residential roofs.",
      "Compatible with major smart inverters and optimizer systems.",
      "CEC approved for all local Australian rebates and grid codes."
    ],
    bestFor: [
      "Homeowners seeking maximum long-term durability and safety (dual-glass).",
      "Properties in coastal areas with high humidity or corrosive salt spray.",
      "Premium projects demanding high efficiency and aesthetic appeal."
    ],
    warranty: [
      "25-Year Product Warranty on workmanship and materials.",
      "30-Year Performance Warranty ensuring long-term returns on investment.",
      "Responsive Australian customer support for easy warranty claims."
    ],
    recommendation: "Trina Vertex S+ is one of the best residential panels on the market today, combining N-type TOPCon efficiency with the ultimate protection of dual-glass construction.",
    logoText: "Trinasolar",
    brandColor: "#0D6EB5"
  },
  "longi-solar-panels": {
    slug: "longi-solar-panels",
    name: "Longi Solar Panels",
    category: "Solar Panels",
    brand: "LONGi Solar",
    tagline: "World Leader in Monocrystalline Solar",
    subtitle: "Steering the Energy Transition",
    intro: "LONGi Solar is the world's largest manufacturer of monocrystalline silicon wafers and modules. By focusing purely on monocrystalline technology, LONGi has driven down solar costs globally, making high-efficiency mono panels the industry standard. Their modules are synonymous with durability and high yield.",
    whyChoose: [
      "The world's largest manufacturer of monocrystalline solar modules.",
      "Hi-MO series utilizing advanced HPBC/TOPCon cell technologies.",
      "Excellent PID resistance and low Light-Induced Degradation.",
      "Massive R&D investment ensuring continuous efficiency improvements.",
      "Solid company financials ensuring reliable 25-year warranty support."
    ],
    rangeTitle: "LONGi Hi-MO 6 Explorer & Scientist Series",
    rangeIntro: "The Hi-MO 6 series features LONGi's proprietary HPBC (Hybrid Passivated Back Contact) cell technology, providing a grid-free front design for maximum power and clean look.",
    rangeSpecs: [
      "Module efficiency up to 22.8% for premium power output.",
      "HPBC technology provides a modern, clean, grid-less front look.",
      "Better temperature coefficient of -0.29%/°C for peak summer output.",
      "Optimized performance under dirty or dusty conditions.",
      "Anti-reflective and self-cleaning glass surface."
    ],
    betterTitle: "What Makes LONGi Hi-MO 6 Better?",
    betterList: [
      "HPBC Cell Structure: By moving all electrode lines to the rear, the front captures 100% of available light, raising efficiency and giving a uniform dark look.",
      "Dust and Dirt Tolerance: Better cell configuration allows panels to retain higher efficiency even when partially covered in dust.",
      "Extreme Reliability: Minimal degradation and outstanding mechanical stress tolerance."
    ],
    installation: [
      "Standard dimensions fit most residential mounting racks.",
      "Pairs perfectly with premium hybrid and string inverters.",
      "Listed by the Clean Energy Council (CEC) for Australian rebates."
    ],
    bestFor: [
      "Homeowners who value aesthetic cleanliness and uniform black roofs.",
      "Dusty environments where cleaning panels is difficult or infrequent.",
      "Customers seeking a financially rock-solid brand with reliable warranties."
    ],
    warranty: [
      "25-Year Product Warranty for materials and workmanship.",
      "25-Year Linear Power Warranty ensuring at least 88.9% output at year 25.",
      "Strong Australian local support team for easy claims and questions."
    ],
    recommendation: "LONGi's Hi-MO 6 panels are a top-tier choice, offering a unique grid-free look, excellent dirt tolerance, and the financial backing of the world's largest wafer manufacturer.",
    logoText: "LONGi",
    brandColor: "#D1121A"
  },

  // ==================== SOLAR INVERTERS ====================
  "goodwe-inverters": {
    slug: "goodwe-inverters",
    name: "GoodWe Inverters",
    category: "Solar Inverters",
    brand: "GoodWe",
    tagline: "Smart Energy Innovator",
    subtitle: "The Engine of Your Solar System",
    intro: "GoodWe is a leading global PV inverter and energy storage systems manufacturer. Listed on the Shanghai Stock Exchange, GoodWe has installed over 35 GW of solar inverters across 100+ countries, offering a wide range of residential, commercial, and hybrid energy solutions.",
    whyChoose: [
      "Global top-10 inverter manufacturer with proven reliability.",
      "Extensive range of hybrid and grid-tied smart inverters.",
      "Integrated smart monitoring platform (SEMS portal) for tracking.",
      "High charging/discharging efficiency for hybrid battery setups.",
      "Excellent local support and service offices in Australia."
    ],
    rangeTitle: "GoodWe ES & MS Series Hybrid Inverters",
    rangeIntro: "GoodWe's hybrid range is highly regarded for its seamless battery integration, UPS-class backup capabilities, and smart home energy management systems.",
    rangeSpecs: [
      "Up to 98.2% maximum efficiency for efficient power conversion.",
      "UPS-level backup switching in under 10ms for critical loads.",
      "IP65 water and dust protection for outdoor installation.",
      "Fanless design for quiet indoor or outdoor operation.",
      "Dual-MPPT configurations to handle multiple roof orientations."
    ],
    betterTitle: "What Makes GoodWe Inverters Better?",
    betterList: [
      "SEMS Monitoring Portal: A comprehensive dashboard that tracks generation, storage, and home consumption in real-time.",
      "Exceptional Battery Compatibility: Works seamlessly with BYD, LG, and GoodWe's own Lynx battery storage systems.",
      "Active Temperature Control: Advanced thermal management protects internal electronics, prolonging inverter life."
    ],
    installation: [
      "Compact design and light weight allow simple single-person wall mounting.",
      "Easy commissioning via the SolarGo mobile application.",
      "Fully compliant with Australian AS/NZS 4777.2 grid standards."
    ],
    bestFor: [
      "Homeowners planning to add battery storage now or in the near future.",
      "Properties requiring backup power during blackouts.",
      "Budget-conscious buyers seeking premium smart features."
    ],
    warranty: [
      "5 to 10-Year Warranty with options to extend.",
      "Dedicated Australian service center for fast swap-outs and troubleshooting.",
      "Local field technicians available for installer assistance."
    ],
    recommendation: "GoodWe hybrid inverters are highly recommended for homeowners who want a smart, quiet, battery-ready solar system with robust backup power capabilities.",
    logoText: "GOODWE",
    brandColor: "#E30613"
  },
  "sungrow-inverters": {
    slug: "sungrow-inverters",
    name: "Sungrow Inverters",
    category: "Solar Inverters",
    brand: "Sungrow",
    tagline: "Clean Power for All",
    subtitle: "The Most Bankable Inverter Brand Worldwide",
    intro: "Sungrow Power Supply is the world's most bankable inverter brand with over 405 GW installed worldwide. Founded in 1997, Sungrow is a leader in solar research and development, offering a comprehensive product portfolio of PV inverters and energy storage systems for residential, commercial, and utility applications.",
    whyChoose: [
      "The world's most bankable inverter brand with a 25+ year track record.",
      "Extremely high conversion efficiency up to 98.4%.",
      "Seamless integration with Sungrow hybrid batteries and smart monitoring.",
      "Robust build quality with IP66 protection against harsh weather.",
      "Outstanding local support and post-sale service in Australia."
    ],
    rangeTitle: "Sungrow SG & SH Series Smart Inverters",
    rangeIntro: "Sungrow's SG (single-phase grid-tied) and SH (hybrid) series are the benchmark for reliability and performance in the Australian solar market.",
    rangeSpecs: [
      "Maximum efficiency up to 98.4% with Euro-efficiency of 97.5%.",
      "Built-in PID recovery function to protect solar panels over time.",
      "IP66 weatherproofing allows worry-free outdoor placement.",
      "Smart curve scanning for tracking down shading issues.",
      "Integrated DC isolator and Surge Protection Devices (SPD)."
    ],
    betterTitle: "What Makes Sungrow Inverters Better?",
    betterList: [
      "iSolarCloud App: One of the most intuitive and robust monitoring apps on the market, tracking production and consumption details.",
      "Built-in PID Recovery: Automatically reverses PID effects in panels overnight, restoring lost solar panel efficiency.",
      "Quiet Operation: Fanless natural cooling design ensures minimal noise emission, ideal for home environments."
    ],
    installation: [
      "Plug-and-play connectors for swift and clean electrical wiring.",
      "Lightweight casing with brackets included for straightforward installation.",
      "Fully AS/NZS 4777.2 compliant with built-in DRM (Demand Response Mode)."
    ],
    bestFor: [
      "Homeowners seeking the highest standard of reliability and performance.",
      "Installations exposed to extreme weather requiring high-grade IP66 casing.",
      "Those who want a cohesive Sungrow ecosystem (inverter + Sungrow SBR battery)."
    ],
    warranty: [
      "10-Year Warranty on all residential string and hybrid inverters in Australia.",
      "Local service headquarters in Sydney ensuring fast turnaround on parts.",
      "Highly responsive hotline for tech support."
    ],
    recommendation: "Sungrow inverters are the gold standard for Australian solar installations, combining premium performance, long warranties, and outstanding app monitoring.",
    logoText: "SUNGROW",
    brandColor: "#FE9900"
  },
  "growatt-inverters": {
    slug: "growatt-inverters",
    name: "Growatt Inverters",
    category: "Solar Inverters",
    brand: "Growatt",
    tagline: "Global Leader in Smart Energy Solutions",
    subtitle: "Empowering Homes Worldwide",
    intro: "Growatt is a global leader in smart energy solutions, specializing in residential, commercial, and utility-scale PV inverters, energy storage systems, and smart energy management. Founded in 2011, Growatt is the world's No. 1 residential inverter supplier, known for its cost-effective and highly reliable products.",
    whyChoose: [
      "World's No. 1 residential PV inverter supplier.",
      "Sleek, modern design with OLED display and touch buttons.",
      "Very competitive pricing with high-end features.",
      "Wide MPPT voltage range for maximum solar generation.",
      "Excellent local service and warranty team in Australia."
    ],
    rangeTitle: "Growatt MIN TL-X & SPH Series Inverters",
    rangeIntro: "The MIN TL-X series is Growatt's flagship single-phase residential inverter, featuring a compact design, excellent cooling, and user-friendly monitoring interfaces.",
    rangeSpecs: [
      "98.4% maximum efficiency for optimal energy conversion.",
      "OLED display with touch key for easy manual checking.",
      "Integrated Type II DC/AC Surge Protection.",
      "Fanless design with natural convection cooling for low noise.",
      "Support for export limitation and consumption monitoring."
    ],
    betterTitle: "What Makes Growatt Inverters Better?",
    betterList: [
      "User-friendly OLED Display: Allows homeowners to easily check system status directly on the unit without a phone.",
      "ShinePhone App: Easy-to-use application with real-time remote monitoring and remote service parameters configuration.",
      "Affordable Reliability: Provides top-tier build quality and performance at a highly accessible price point."
    ],
    installation: [
      "Compact size and light weight make it one of the easiest units to install.",
      "Support for WiFi, GPRS, and RF monitoring sticks.",
      "Clean Energy Council (CEC) listed and approved for rebates."
    ],
    bestFor: [
      "Budget-conscious residential solar installations.",
      "Users who prefer checking system stats directly on the inverter's screen.",
      "Standard residential properties requiring a reliable, no-fuss system."
    ],
    warranty: [
      "10-Year Warranty (5 years product + 5 years parts extension in Australia).",
      "Local service center in Melbourne for rapid assistance.",
      "Dedicated tech support team for installers and end-users."
    ],
    recommendation: "Growatt is a highly recommended, cost-effective option that doesn't compromise on features, offering a sleek look, user-friendly screen, and reliable performance.",
    logoText: "Growatt",
    brandColor: "#A6CE39"
  },
  "solis-inverters": {
    slug: "solis-inverters",
    name: "Solis Inverters",
    category: "Solar Inverters",
    brand: "Solis",
    tagline: "Innovative String Inverter Specialist",
    subtitle: "Precision Engineering for Solar Power",
    intro: "Solis (Ginlong Technologies) is one of the oldest and largest manufacturers of solar string inverters, established in 2005. Solis specializes in string inverter technology, offering high-efficiency, reliable, and smart solutions for residential, commercial, and utility-scale energy projects.",
    whyChoose: [
      "One of the oldest string inverter manufacturers with 18+ years experience.",
      "High reliability with low failure rates and high conversion efficiency.",
      "Excellent multi-MPPT designs for complex roof layouts.",
      "Built-in leakage current protection and AFCI (Arc Fault Circuit Interrupter).",
      "Dedicated local support network in Australia."
    ],
    rangeTitle: "Solis S5 & S6 Series Residential Inverters",
    rangeIntro: "Solis S6 string and hybrid inverters feature advanced safety systems, wider voltage windows, and smart fan cooling for hot climates.",
    rangeSpecs: [
      "Up to 98.1% efficiency to minimize energy loss.",
      "AFCI protection actively mitigates DC arc fault risks on the roof.",
      "Wide input voltage range to capture early morning and late evening sun.",
      "IP66 enclosure for high durability in dusty and wet conditions.",
      "Multiple MPPTs (up to 3 or 4 on larger models) for maximum flexibility."
    ],
    betterTitle: "What Makes Solis Inverters Better?",
    betterList: [
      "Advanced AFCI safety: Scans for DC arc faults and shuts down the system automatically to prevent fire risks.",
      "Excellent Multi-MPPT tracking: Allows for multiple roof angles and orientations, optimizing generation on complex roofs.",
      "Highly Durable Components: Built using industrial-grade materials designed for long-term outdoor installation."
    ],
    installation: [
      "Simple installation process with detailed step-by-step guides.",
      "Smart commissioning tool via the SolisCloud app.",
      "Fully compliant with AS/NZS 4777.2 grid standard requirements."
    ],
    bestFor: [
      "Properties with complex roof structures and multiple shading angles.",
      "Safety-conscious homeowners seeking advanced arc-fault protection.",
      "Commercial solar arrays needing stable string inverter technology."
    ],
    warranty: [
      "5 to 10-Year product warranty options in Australia.",
      "Sydney-based local support office for parts, repair, and replacements.",
      "Direct technical helpline for immediate troubleshooting."
    ],
    recommendation: "Solis inverters are an excellent choice for complex roof layouts, providing top-tier safety features and multi-MPPT capabilities at a very competitive price.",
    logoText: "solis",
    brandColor: "#F4911E"
  },
  "saj-inverters": {
    slug: "saj-inverters",
    name: "SAJ Inverters",
    category: "Solar Inverters",
    brand: "SAJ",
    tagline: "Smart Home Energy Specialist",
    subtitle: "Smart Energy, Smart Life",
    intro: "SAJ Electric is a state-level high-tech enterprise specializing in motor drive, renewable energy conversion, transmission, and storage solutions. SAJ focuses on providing smart energy storage and generation systems for residential homes, focusing on smart app integration and sleek, compact designs.",
    whyChoose: [
      "Focus on smart home ecosystems and integrated energy management.",
      "Sleek and compact designs that fit modern home aesthetics.",
      "High efficiency with advanced thermal dissipation.",
      "Intuitive monitoring app (eSolar Portal) with smart automation features.",
      "Growing Australian team providing reliable support."
    ],
    rangeTitle: "SAJ R5 & H2 Series Hybrid Inverters",
    rangeIntro: "The SAJ R5 string and H2 hybrid inverters are characterized by their compact, fanless designs and high charging and discharging capabilities.",
    rangeSpecs: [
      "Max efficiency of 98.2% for high solar conversion rates.",
      "Fanless natural cooling for silent home operation.",
      "Support for up to 150% DC oversizing to maximize winter yields.",
      "IP65 protection for safe indoor or outdoor wall mounting.",
      "Smart App configuration via Bluetooth or WiFi."
    ],
    betterTitle: "What Makes SAJ Inverters Better?",
    betterList: [
      "Sleek Aesthetic Design: Casing is clean and modern, looking more like an appliance than electrical gear.",
      "eSolar Portal: Provides comprehensive analysis of energy consumption and battery charge states with smart suggestions.",
      "High DC Over-sizing: Enables installers to connect more solar panels, maximizing output in winter or low-light."
    ],
    installation: [
      "Lightweight, wall-mounted setup with clear bracket guides.",
      "Quick app commissioning via eSolar O&M mobile tools.",
      "CEC approved for all state and federal solar incentives."
    ],
    bestFor: [
      "Homeowners looking for a silent, sleek inverter installed near living spaces.",
      "Users wanting an integrated smart-home look and feel.",
      "Residential setups aiming for heavy winter solar panel oversizing."
    ],
    warranty: [
      "10-Year product warranty for Australian markets.",
      "Local service channels ensuring speedy processing of warranty requests.",
      "Technical support staff based locally in Australia."
    ],
    recommendation: "SAJ inverters are an ideal choice for residential homes looking for a silent, stylish, and smart-home integrated inverter with excellent software monitoring.",
    logoText: "SAJ",
    brandColor: "#009140"
  },
  "solix-inverters": {
    slug: "solix-inverters",
    name: "Solix Inverters",
    category: "Solar Inverters",
    brand: "Anker Solix",
    tagline: "Next-Gen Microinverters & Smart Energy Control",
    subtitle: "Power Your Independence",
    intro: "Anker Solix represents the renewable energy division of Anker, a world-famous brand in charging technology. Solix offers highly efficient, smart microinverters and hybrid systems that give homeowners maximum energy control, high-resolution panel monitoring, and unmatched ease of use.",
    whyChoose: [
      "Backed by Anker, a globally trusted consumer electronics and charging brand.",
      "Advanced microinverter options for individual panel-level optimization.",
      "Maximum shade tolerance and individual panel performance tracking.",
      "High-resolution real-time monitoring via the Anker App.",
      "Extremely long design life with top-tier components."
    ],
    rangeTitle: "Anker Solix MI800 & Smart Hybrid Series",
    rangeIntro: "The Solix series introduces microinverter and compact hybrid tech designed for easy modular deployment, giving you control over every individual panel.",
    rangeSpecs: [
      "Up to 96.7% CEC efficiency with panel-level MPPT tracking.",
      "Individual panel monitoring via WiFi and Bluetooth connectivity.",
      "IP67 environmental rating for maximum protection directly under panels.",
      "Ultra-low startup voltage to generate power in minimal light.",
      "Sleek, modular hybrid configurations for home battery matching."
    ],
    betterTitle: "What Makes Anker Solix Better?",
    betterList: [
      "Panel-Level Optimization: If one panel is shaded, others generate 100% power, unlike string inverters where shading affects the whole string.",
      "Anker App Integration: Combines solar generation, home load, and backup storage monitoring in a premium consumer-grade app.",
      "Modular Scalability: Start small with a few panels and easily expand your system as your power needs grow."
    ],
    installation: [
      "Plug-and-play installation, mounting directly onto the solar panel racking.",
      "Eliminates high-voltage DC runs down the wall, improving home safety.",
      "CEC certified and approved for Australian utility connections."
    ],
    bestFor: [
      "Properties with severe, irregular shading from trees or chimneys.",
      "Homeowners who want high-tech, panel-level monitoring and premium apps.",
      "Modular solar installations that plan to expand step-by-step."
    ],
    warranty: [
      "12 to 25-Year warranty (microinverters carry industry-leading long lifetimes).",
      "Backed by Anker's massive international support structure.",
      "Dedicated Australian customer help center."
    ],
    recommendation: "Anker Solix microinverters are the ultimate choice for shaded roofs, offering panel-level optimization, modular growth, and the reliability of a global charging giant.",
    logoText: "ANKERSOLIX",
    brandColor: "#000000"
  },

  // ==================== SOLAR BATTERIES ====================
  "foxess-battery": {
    slug: "foxess-battery",
    name: "FoxESS Battery",
    category: "Solar Batteries",
    brand: "FoxESS",
    tagline: "Advanced High-Voltage Storage Solutions",
    subtitle: "Powering Your Independence Day & Night",
    intro: "FoxESS is a global leader in solar inverter and energy storage solutions. Backed by Tsingshan Group (a Fortune 500 company and the world's largest nickel producer), FoxESS has access to raw materials and battery cell production, delivering high-voltage, high-performance battery systems built to last.",
    whyChoose: [
      "Backed by Tsingshan Group, ensuring vertical control of battery cell quality.",
      "High-voltage stackable design for easy expansion.",
      "Lithium Iron Phosphate (LFP) chemistry for maximum safety and life.",
      "IP65 rated for indoor and outdoor installations.",
      "Excellent backup power output capabilities for blackouts."
    ],
    rangeTitle: "FoxESS ECS & Mira Stackable Series",
    rangeIntro: "The FoxESS ECS series is a high-performance, stackable battery storage system that allows homeowners to easily scale capacity from 4.0 kWh up to 20.0 kWh.",
    rangeSpecs: [
      "Modular stackable design: 2.9 kWh to 4.0 kWh per block.",
      "High charging and discharging efficiency up to 97%.",
      "Safe LFP (Lithium Iron Phosphate) cell technology.",
      "Wide temperature operating range (-10°C to 50°C).",
      "90% Depth of Discharge (DoD) for maximum usable capacity."
    ],
    betterTitle: "What Makes FoxESS Batteries Better?",
    betterList: [
      "Vertical Supply Chain: Backed by the world's largest nickel producer, ensuring high-quality raw materials and long-term cell supply security.",
      "Stackable Ease: No wiring required between battery modules, simply stack them on top of each other to increase storage capacity.",
      "Smart BMS (Battery Management System): Monitors cells individually, balancing voltage and temperature to prevent degradation."
    ],
    installation: [
      "Quick stackable mounting saves installers hours of wiring time.",
      "Can be wall-mounted or floor-standing depending on property space.",
      "CEC approved for all battery incentive schemes in Australia."
    ],
    bestFor: [
      "Homeowners wishing to start with small storage and expand later.",
      "Properties exposed to ambient temperature changes requiring robust thermal profiles.",
      "High-load homes that require rapid battery charging during peak sun."
    ],
    warranty: [
      "10-Year product warranty guaranteeing long-term cycle performance.",
      "Australian offices managing claims and customer queries.",
      "Highly responsive local field support."
    ],
    recommendation: "FoxESS batteries are an excellent, high-performance storage solution for those wanting a safe, modular, and easily expandable battery backed by a global industrial giant.",
    logoText: "FoxESS",
    brandColor: "#FF6200"
  },
  "growatt-battery-systems": {
    slug: "growatt-battery-systems",
    name: "Growatt Battery Systems",
    category: "Solar Batteries",
    brand: "Growatt",
    tagline: "Smart Energy Storage for Every Home",
    subtitle: "Store Solar, Power Life",
    intro: "Growatt's battery systems are engineered to pair perfectly with their hybrid inverters. By using advanced Cobalt-free LiFePO4 cells, Growatt provides safe, modular, and long-lasting energy storage. The stackable ARK series has become a massive favorite in Australia for its simplicity and clean look.",
    whyChoose: [
      "Perfect integration with Growatt hybrid inverters.",
      "Cobalt-free LiFePO4 (Lithium Iron Phosphate) chemistry for peak safety.",
      "Modular stackable design for easy sizing and future upgrades.",
      "Integrated automatic cell balancing and temperature monitoring.",
      "CEC approved and eligible for all Australian battery rebates."
    ],
    rangeTitle: "Growatt ARK LFP & APX Storage Systems",
    rangeIntro: "The ARK series is a stackable LFP battery system supporting both low-voltage (LV) and high-voltage (HV) installations, offering flexible capacities up to 25.6 kWh.",
    rangeSpecs: [
      "Modular capacity from 2.56 kWh up to 25.6 kWh.",
      "Cobalt-free LFP chemistry ensures thermal stability and safety.",
      "100% Depth of Discharge (DoD) for maximum usable storage.",
      "IP65 protection for indoor and outdoor floor-mount installation.",
      "Smart remote firmware upgrades via the Growatt Shine Server."
    ],
    betterTitle: "What Makes Growatt Batteries Better?",
    betterList: [
      "Modular Customization: Connect multiple battery modules without additional cables, keeping the install clean and compact.",
      "Advanced BMS Protection: Real-time cell monitoring protects against over-charge, over-discharge, and temperature spikes.",
      "Single-App Integration: Manage both your solar generation and battery storage through the Growatt ShinePhone app."
    ],
    installation: [
      "Stackable design with slide-in connection blocks reduces installation footprint.",
      "Floor-mount base ensures stable positioning.",
      "CEC approved for all local battery rebates."
    ],
    bestFor: [
      "Homes with an existing Growatt hybrid inverter wanting a unified brand setup.",
      "Users looking for 100% Depth of Discharge to maximize battery value.",
      "Properties where battery installation needs to occur in a visible garage or utility area."
    ],
    warranty: [
      "10-Year product warranty backed by Growatt's extensive Australian operations.",
      "Direct swap-out service and local technical support.",
      "Responsive customer service team."
    ],
    recommendation: "Growatt battery systems are the natural choice for anyone running a Growatt inverter, offering modular expansion, maximum usable storage, and single-app control.",
    logoText: "Growatt",
    brandColor: "#A6CE39"
  },
  "saj-battery-systems": {
    slug: "saj-battery-systems",
    name: "SAJ Battery Systems",
    category: "Solar Batteries",
    brand: "SAJ",
    tagline: "All-in-One Smart Battery Solutions",
    subtitle: "Smart Energy Storage, Styled for Homes",
    intro: "SAJ's battery systems are designed to offer seamless, all-in-one storage. Using high-performance LiFePO4 cells, SAJ focuses on creating compact, attractive battery units that integrate beautifully with their H2 hybrid inverters, providing homes with clean energy backup and smart load shifting.",
    whyChoose: [
      "Sleek and unified home appliance look.",
      "High charging/discharging rates for rapid home power supply.",
      "Safe Cobalt-free LiFePO4 chemistry.",
      "Modular high-voltage stackable design.",
      "Excellent software integration with eSolar home automation."
    ],
    rangeTitle: "SAJ B2 & HS2 All-in-One Series",
    rangeIntro: "The B2 and HS2 series are modular high-voltage batteries that stack together to create a clean, cable-free battery column next to the inverter.",
    rangeSpecs: [
      "Modular capacity blocks of 5.0 kWh, scalable up to 25.0 kWh.",
      "High discharging capability to power heavy household appliances.",
      "IP65 dust and moisture resistance for flexible placement.",
      "Natural cooling for whisper-quiet operation.",
      "Safe and long-lasting Lithium Iron Phosphate chemistry."
    ],
    betterTitle: "What Makes SAJ Batteries Better?",
    betterList: [
      "Cable-free Stacking: The modules plug directly into each other, removing messy DC wiring and increasing system reliability.",
      "Peak Shaving & Load Shifting: Program the battery through the app to charge from solar/cheap off-peak grid power and discharge during peak rates.",
      "Compact Footprint: Narrow design takes up very little wall and floor space."
    ],
    installation: [
      "Quick mounting brackets and direct-fit connectors ensure easy setup.",
      "Commissioning is completed in minutes using the SAJ mobile app.",
      "Listed by the CEC for safety and performance compliance."
    ],
    bestFor: [
      "Homeowners seeking a clean, neat installation with zero visible cables.",
      "Properties in areas with time-of-use electricity pricing.",
      "Users looking for a quiet battery that can sit in proximity to living areas."
    ],
    warranty: [
      "10-Year performance warranty guaranteeing cycle life.",
      "Local tech support and parts dispatch in Australia.",
      "Reliable warranty backing."
    ],
    recommendation: "SAJ batteries are highly recommended for homes seeking a beautiful, quiet, cable-free storage setup with smart automation to slash power bills.",
    logoText: "SAJ",
    brandColor: "#009140"
  },
  "anker-solix-battery-systems": {
    slug: "anker-solix-battery-systems",
    name: "Anker Solix Battery Systems",
    category: "Solar Batteries",
    brand: "Anker Solix",
    tagline: "Ultra-Durable Power Storage from the Charging Pioneer",
    subtitle: "Independence in Every Module",
    intro: "Anker Solix leverages Anker's world-leading battery and power management expertise to deliver premium, ultra-durable home energy storage. Built using automotive-grade LiFePO4 cells, Anker Solix batteries are designed to survive extreme environments while providing detailed smart monitoring and long cycle lives.",
    whyChoose: [
      "Built with automotive-grade, high-durability LiFePO4 cells.",
      "Industry-leading high cycle life with low degradation.",
      "Beautiful modern aesthetic matching high-end home appliances.",
      "Sleek app integration showing live power flows and battery health.",
      "Robust backup capabilities for emergency situations."
    ],
    rangeTitle: "Anker Solix X1 Home Energy Storage System",
    rangeIntro: "The Solix X1 is Anker's premium, ultra-thin home battery system, featuring a modular power layout that allows independent charging/discharging for each module.",
    rangeSpecs: [
      "Ultra-thin profile (only 15cm deep) for a flush-wall look.",
      "Modular energy management: each module functions independently.",
      "100% Depth of Discharge with long cycle life.",
      "Operating range from -20°C to 55°C with built-in thermal heating.",
      "IP65 rated for full outdoor exposure."
    ],
    betterTitle: "What Makes Anker Solix X1 Better?",
    betterList: [
      "Modular Optimizer Technology: Unlike standard batteries where a weak cell slows down the whole stack, Anker Solix manages each block independently, maximizing total capacity.",
      "Extreme Temperature Resilience: Features built-in thermal heating sheets that keep the battery working in freezing temperatures down to -20°C.",
      "Super-fast Backup Switch: Provides automatic grid isolation and emergency backup power within milliseconds."
    ],
    installation: [
      "Modular blocks plug together easily, mounting flush against the wall.",
      "Advanced app setup guides the installer and homeowner through commissioning.",
      "Approved by the Clean Energy Council (CEC)."
    ],
    bestFor: [
      "Homeowners who want premium design, thin profiles, and premium apps.",
      "Regions experiencing extreme winter cold or intense summer heat.",
      "Users looking for maximum energy extraction with independent module management."
    ],
    warranty: [
      "10-Year comprehensive warranty backed by Anker's global presence.",
      "Local Australian repair and support network.",
      "Prompt technical helpline."
    ],
    recommendation: "Anker Solix X1 is a top-tier home battery, offering an ultra-thin design, modular cell optimization, and outstanding app features from a brand known for battery reliability.",
    logoText: "ANKERSOLIX",
    brandColor: "#000000"
  },
  "sungrow-battery-systems": {
    slug: "sungrow-battery-systems",
    name: "Sungrow Battery Systems",
    category: "Solar Batteries",
    brand: "Sungrow",
    tagline: "The Benchmark for High-Voltage Battery Storage",
    subtitle: "Powerful, Safe, and Reliable Energy",
    intro: "Sungrow's high-voltage stackable battery systems are widely regarded as some of the most reliable and efficient home batteries in Australia. Pairing seamlessly with Sungrow hybrid inverters, the SBR series offers simple modular capacity expansion, high-power backup outputs, and advanced cell safety.",
    whyChoose: [
      "The perfect partner for Sungrow hybrid inverters.",
      "High-voltage design ensures minimal conversion losses and high efficiency.",
      "Stackable modules (3.2 kWh each) allow easy resizing.",
      "Cobalt-free LiFePO4 cells with multi-stage safety protection.",
      "Extremely popular in Australia with massive local support."
    ],
    rangeTitle: "Sungrow SBR 9.6 - 25.6 kWh Series",
    rangeIntro: "The SBR series is a high-voltage stackable LFP battery system, offering capacities from 9.6 kWh (3 modules) up to 25.6 kWh (8 modules) per stack.",
    rangeSpecs: [
      "High-voltage design: 3.2 kWh modules stacked in series.",
      "High charging and discharging current up to 30A.",
      "IP55 rated for indoor and outdoor installations.",
      "Lithium Iron Phosphate cells for thermal stability.",
      "Weight-optimized modules with integrated handles for easy installation."
    ],
    betterTitle: "What Makes Sungrow SBR Better?",
    betterList: [
      "High-Voltage Performance: High-voltage systems require less current to deliver the same power, reducing heat generation and maximizing efficiency.",
      "Tool-Free Stacking: Modules stack on top of each other using plug-and-play connections, eliminating internal battery wiring.",
      "iSolarCloud Monitoring: View detailed charge/discharge logs and state of health alongside solar production."
    ],
    installation: [
      "Modules stack directly on a base plate, locked together with side pins.",
      "Automatic detection of battery capacity during inverter setup.",
      "CEC approved and fully compliant with all local battery safety standards."
    ],
    bestFor: [
      "Homeowners installing a Sungrow hybrid inverter who want a matching system.",
      "Homes with high-power backup requirements (running multiple AC units during blackouts).",
      "Those who value clean, tool-free installation layouts."
    ],
    warranty: [
      "10-Year product warranty covering capacity retention.",
      "Sydney-based local support for immediate tech assistance.",
      "Fast replacement parts dispatch."
    ],
    recommendation: "The Sungrow SBR battery is one of the best high-voltage residential batteries available, offering outstanding power output, modular stacking, and perfect Sungrow integration.",
    logoText: "SUNGROW",
    brandColor: "#FE9900"
  },
  "alpha-ess-battery-systems": {
    slug: "alpha-ess-battery-systems",
    name: "Alpha ESS Battery Systems",
    category: "Solar Batteries",
    brand: "Alpha ESS",
    tagline: "Smart Energy Storage Pioneers",
    subtitle: "Your Smart Energy Manager",
    intro: "Alpha ESS is a leading global energy storage solution provider, established in 2012. Specializing in advanced residential and commercial battery systems, Alpha ESS provides fully integrated energy management systems that help homes and businesses maximize self-consumption and lock in energy independence.",
    whyChoose: [
      "Over a decade of dedicated focus on battery storage engineering.",
      "Fully integrated energy management system (EMS) for smart power flow.",
      "Excellent value-for-money storage systems with long lifetimes.",
      "Sleek and durable cabinets designed for outdoor durability.",
      "Strong local office and support team based in Sydney, Australia."
    ],
    rangeTitle: "Alpha ESS Smile5 & Smile-G3 Series",
    rangeIntro: "The Smile series features integrated, modular designs that combine the inverter and battery system in a unified cabinet for a clean look.",
    rangeSpecs: [
      "Modular capacities starting from 5.0 kWh up to 30.0 kWh.",
      "High-quality LiFePO4 cells for safe, long-lasting cycles.",
      "Sleek cabinet design protecting all wiring and switchgear.",
      "VPP (Virtual Power Plant) ready for additional energy revenue.",
      "Remote monitoring and automatic system firmware updates."
    ],
    betterTitle: "What Makes Alpha ESS Batteries Better?",
    betterList: [
      "All-in-One Cabinet Concept: The battery modules and inverter sit inside a neat, lockable cabinet, hiding all wiring and keeping it safe from children and pets.",
      "Virtual Power Plant (VPP) Ready: Easily join VPP programs in Australia to sell battery power back to the grid during peak demand for high returns.",
      "Outstanding Cycle Life: Built to handle over 10,000 cycles, ensuring decades of reliable daily charging."
    ],
    installation: [
      "Cabinet mounting provides a structured, code-compliant install layout.",
      "Pre-wired internal components simplify connection to the main switchboard.",
      "CEC approved for all state battery rebates."
    ],
    bestFor: [
      "Homeowners seeking a neat, cabinet-enclosed battery system.",
      "Those interested in participating in VPP programs for passive income.",
      "Buyers looking for maximum cycle life and long-term durability."
    ],
    warranty: [
      "10-Year product warranty on battery modules.",
      "Direct support and parts warehouse located in Sydney.",
      "Responsive customer service team."
    ],
    recommendation: "Alpha ESS is a top-tier storage pioneer, offering robust cabinet installations, long cycle lives, and easy integration into Australian VPP networks.",
    logoText: "AlphaESS",
    brandColor: "#006FA6"
  },
  "neovolt-battery-systems": {
    slug: "neovolt-battery-systems",
    name: "Neovolt Battery Systems",
    category: "Solar Batteries",
    brand: "Neovolt",
    tagline: "Innovative High-Capacity Storage Solutions",
    subtitle: "Empowering Energy Independence",
    intro: "Neovolt is a rapidly growing brand specializing in high-density, reliable solar storage. Neovolt focus on providing Australian homeowners with heavy-duty battery storage that is both cost-effective and highly resilient, offering excellent battery management software and solid protection against extreme weather.",
    whyChoose: [
      "High-density battery cells packing more capacity into less space.",
      "Designed specifically to cope with harsh Australian climate conditions.",
      "Excellent thermal regulation technology to prevent overheating.",
      "Cost-effective storage solution with high-end safety features.",
      "Dedicated local technical team based in Australia."
    ],
    rangeTitle: "Neovolt PowerStack & Neo Series",
    rangeIntro: "Neovolt's storage solutions offer high discharge capacities and robust stackable blocks designed to meet the demands of modern high-load homes.",
    rangeSpecs: [
      "Scalable capacity starting from 5.1 kWh up to 20.4 kWh.",
      "Lithium Iron Phosphate (LFP) chemistry for thermal stability.",
      "High continuous discharge rates to power heavy startup loads.",
      "IP65 weatherproofing for outdoor installation.",
      "Smart system health monitoring through Neovolt Cloud."
    ],
    betterTitle: "What Makes Neovolt Batteries Better?",
    betterList: [
      "Engineered for Australia: Tailored cooling and insulation structures protect the cells during extreme summer heatwaves.",
      "High Start-Up Output: Able to handle sudden high-current loads from starting pool pumps or air conditioning units.",
      "Smart Balancing BMS: Ensures cells age evenly, extending the functional lifespan of the battery stack."
    ],
    installation: [
      "Simple floor-mount stacking system with quick-lock bracket sets.",
      "App-based commissioning streamlines connection to the hybrid inverter.",
      "Approved by the Clean Energy Council (CEC) for Australian use."
    ],
    bestFor: [
      "Homes in hot regional areas requiring extra thermal resilience.",
      "Properties with heavy electric loads (air conditioning, pumps, EV chargers).",
      "Homeowners seeking N-type/next-gen battery cells at competitive prices."
    ],
    warranty: [
      "10-Year product warranty covering performance and capacity.",
      "Australian local offices handling technical queries and service.",
      "Fast replacement logistics."
    ],
    recommendation: "Neovolt is a great choice for Australian homes looking for high-power, thermally resilient battery storage that offers excellent value and localized support.",
    logoText: "Neovolt",
    brandColor: "#00A896"
  },
  "sigenergy-battery-systems": {
    slug: "sigenergy-battery-systems",
    name: "Sigenergy Battery Systems",
    category: "Solar Batteries",
    brand: "Sigenergy",
    tagline: "World's First 5-in-1 Home Energy System with AI",
    subtitle: "AI-Powered Clean Energy Independence",
    intro: "Sigenergy is a forward-thinking energy technology pioneer, founded by industry veterans. The company delivers SigenStor, the world's first 5-in-1 energy storage system that integrates the solar inverter, battery storage, EV DC charger, EMS, and PCS into a single, beautiful modular column, powered by advanced AI algorithms.",
    whyChoose: [
      "World's first 5-in-1 integrated system: Inverter, Battery, EV Charger, PCS, EMS.",
      "AI-driven energy management for maximum efficiency and savings.",
      "Stunning minimalist column design with zero visible cables.",
      "Advanced battery pack safety with individual cell sensors.",
      "Future-proof system ready for vehicle-to-home (V2H) charging."
    ],
    rangeTitle: "SigenStor Modular 5-in-1 Energy System",
    rangeIntro: "SigenStor stacks modular battery blocks (5.0 kWh to 8.0 kWh per block) directly underneath the matching inverter/EV charging module for a futuristic look.",
    rangeSpecs: [
      "Modular battery capacity: 5.0 kWh to 48.0 kWh per stack.",
      "World-first integration of DC fast EV charging within the battery stack.",
      "AI cloud optimization predicts solar generation and weather patterns.",
      "Five layers of safety protection, including internal fire extinguishers.",
      "IP66 rated casing, built to survive the harshest outdoor conditions."
    ],
    betterTitle: "What Makes Sigenergy SigenStor Better?",
    betterList: [
      "5-in-1 Ultimate Integration: Replaces five separate electrical boxes with a single, beautiful vertical column, saving space and massive install costs.",
      "AI-Optimized Saving: Sigen AI learns your consumption habits, checks weather forecasts, and manages battery/grid states to maximize savings.",
      "Unmatched Battery Safety: Features individual cell temperature monitoring and built-in aerosol fire-suppression packs inside each module."
    ],
    installation: [
      "Vertical stacking with slide-fit guide rails, taking under 15 minutes to stack.",
      "Eliminates complex wiring between inverter, battery, and EV charger.",
      "CEC listed and certified to meet the highest global standards."
    ],
    bestFor: [
      "High-end smart homes wanting a futuristic, AI-optimized energy ecosystem.",
      "Homeowners planning to add a fast DC electric vehicle charger.",
      "Properties where wall space is limited but vertical space is available."
    ],
    warranty: [
      "10-Year product warranty backed by a fast-growing global team.",
      "Direct support and training centers active in Australia.",
      "Fast response customer service."
    ],
    recommendation: "Sigenergy SigenStor is the most advanced energy storage system available, offering an AI-powered 5-in-1 vertical design that is perfect for forward-thinking smart homes.",
    logoText: "SIGENERGY",
    brandColor: "#000000"
  }
};
