import { motion } from 'framer-motion';
import SolarHero from '../Component/Services/SolarPower/SolarHero';
import SolarIntro from '../Component/Services/SolarPower/SolarIntro';
import SolarSmarterLiving from '../Component/Services/SolarPower/SolarSmarterLiving';
import SolarProcess from '../Component/Services/SolarPower/SolarProcess';

import SolarTrust from '../Component/Services/SolarPower/SolarTrust';

import SolarWhyChoose from '../Component/Services/SolarPower/SolarWhyChoose';
import SolarLogoStrip from '../Component/Services/SolarPower/SolarLogoStrip';
import SolarPackages from '../Component/Home/SolarPackages';

const SolarPowerSystems = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* 0. Cinematic Hero Section */}
      <SolarHero />

      {/* 1. Mission & Intro */}
      <SolarIntro />

      {/* 2. Smarter Living Features */}
      <SolarSmarterLiving />

      {/* 3. How it Works Breakdown */}
      <SolarProcess />

      {/* 7. Detailed "Why Choose" Grid */}
      <SolarWhyChoose />
      {/* 4. Solar Packages & Pricing */}
      <SolarPackages />

      {/* 5. What We Deliver (Trust Section) */}
      <SolarTrust />


      {/* 8. Trust & Accreditation Logos */}
      <SolarLogoStrip />

    </motion.main>
  );
};

export default SolarPowerSystems;
