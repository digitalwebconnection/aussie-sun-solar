import SEO from '../Component/SEO';
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
      <SEO title="Residential Solar Power Systems" description="Power your home with premium high-efficiency solar panel installations. Enjoy massive savings and local 25-year warranty support." />
      {/* 1. Cinematic Hero Section */}
      <SolarHero />

      {/* 2. Mission & Intro */}
      <SolarIntro />

      {/* 3. Smarter Living Features */}
      <SolarSmarterLiving />

      {/* 4. How it Works Breakdown */}
      <SolarProcess />

      {/* 5.  Detailed "Why Choose" Grid */}
      <SolarWhyChoose />

      {/* 6. Solar Packages & Pricing */}
      <SolarPackages />

      {/* 7. What We Deliver (Trust Section) */}
      <SolarTrust />

      {/* 8. Trust & Accreditation Logos */}
      <SolarLogoStrip />

    </motion.main>
  );
};

export default SolarPowerSystems;
