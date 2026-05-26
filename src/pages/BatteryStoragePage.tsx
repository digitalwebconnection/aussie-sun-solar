import { motion } from 'framer-motion';
import BatteryHero from '../Component/Services/BatteryStorage/BatteryHero';
import BatteryIntro from '../Component/Services/BatteryStorage/BatteryIntro';
import BatterySmarterLiving from '../Component/Services/BatteryStorage/BatterySmarterLiving';
import BatteryProcess from '../Component/Services/BatteryStorage/BatteryProcess';
import BatteryWhyChoose from '../Component/Services/BatteryStorage/BatteryWhyChoose';
import BatteryTrust from '../Component/Services/BatteryStorage/BatteryTrust';
import BatteryLogoStrip from '../Component/Services/BatteryStorage/BatteryLogoStrip';
import SolarPackages from '../Component/Home/SolarPackages';

const BatteryStoragePage = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen bg-white">
      <BatteryHero />
      <BatteryIntro />
      <BatterySmarterLiving />
      <BatteryProcess />
      <BatteryWhyChoose />
      <SolarPackages />
      <BatteryTrust />
      <BatteryLogoStrip />
    </motion.main>
  );
};

export default BatteryStoragePage;
