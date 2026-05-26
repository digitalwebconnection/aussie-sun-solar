import { motion } from 'framer-motion';
import CommercialHero from '../Component/Services/CommercialSolar/CommercialHero';
import CommercialIntro from '../Component/Services/CommercialSolar/CommercialIntro';
import CommercialSmarterLiving from '../Component/Services/CommercialSolar/CommercialSmarterLiving';
import CommercialProcess from '../Component/Services/CommercialSolar/CommercialProcess';
import CommercialWhyChoose from '../Component/Services/CommercialSolar/CommercialWhyChoose';
import CommercialTrust from '../Component/Services/CommercialSolar/CommercialTrust';
import CommercialLogoStrip from '../Component/Services/CommercialSolar/CommercialLogoStrip';
import SolarPackages from '../Component/Home/SolarPackages';

const CommercialSolarPage = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen bg-white">
      <CommercialHero />
      <CommercialIntro />
      <CommercialSmarterLiving />
      <CommercialProcess />
      <CommercialWhyChoose />
      <SolarPackages />
      <CommercialTrust />
      <CommercialLogoStrip />
    </motion.main>
  );
};

export default CommercialSolarPage;
