import { motion } from 'framer-motion';
import EVHero from '../Component/Services/EVChargers/EVHero';
import EVIntro from '../Component/Services/EVChargers/EVIntro';
import EVSmarterLiving from '../Component/Services/EVChargers/EVSmarterLiving';
import EVProcess from '../Component/Services/EVChargers/EVProcess';
import EVWhyChoose from '../Component/Services/EVChargers/EVWhyChoose';
import EVTrust from '../Component/Services/EVChargers/EVTrust';
import EVLogoStrip from '../Component/Services/EVChargers/EVLogoStrip';
import SolarPackages from '../Component/Home/SolarPackages';

const EVChargersPage = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen bg-white">
      <EVHero />
      <EVIntro />
      <EVSmarterLiving />
      <EVProcess />
      <EVWhyChoose />
      <SolarPackages />
      <EVTrust />
      <EVLogoStrip />
    </motion.main>
  );
};

export default EVChargersPage;
