import SEO from '../SEO'
import AboutSection from './AboutSectionHm'
import HeroSection from './HeroHm'
import StatsSection from './numbergride'
import ProcessSection from './ProcessSection'
import ServicesSection from './ServicesSectionhm'
import SolarLeadSection from './SolarLeadSection'
import SolarPackages from './SolarPackages'
import RecentInstallationsSlider from './RecentInstallationsSlider'
import SolarRebateSection from './SolarRebateSection'
import TopRunningSlider from './TopRunningSlider'
import WellnessExpertsSection from './WellnessExpertsSection'
import WhyChooseSection from './WhyChoose'
import TestimonialsSection from './TestimonialsSection'
import TrustedBrandsSection from './TrustedBrandsSection'
import SolarSupportSection from './SolarSupportSection'
import SolarSavingsCalculator from './AussieSolarCalculator'
import AussiesSunSolarFinance from './AussiesSunSolarFinance'
import BatterySlider from './BatterySlider'

const HomeMain = () => {
  return (
    <>
      <SEO 
        title="Aussie Sun Solar | Premium Solar & Battery Storage Systems" 
        description="Experience reliable, clean, and cheap solar energy with Aussie Sun Solar. Premium Tier-1 solar panels, batteries, EV chargers, and commercial solar installations across Australia." 
        keywords="solar panels, solar battery storage, commercial solar, EV chargers, Aussie Sun Solar, Australia solar, solar installation, clean energy, renewable energy"
      />
      <HeroSection />
      <TopRunningSlider />
      <AboutSection />
      <ServicesSection />
      <SolarPackages />
      <RecentInstallationsSlider /> 
      <SolarLeadSection />
       <SolarSavingsCalculator/>
      <SolarRebateSection />
      <StatsSection />
      <WellnessExpertsSection />
      <WhyChooseSection />
      <ProcessSection />
      <SolarSupportSection />
      <TestimonialsSection />
      <TrustedBrandsSection />
       <AussiesSunSolarFinance />
      <BatterySlider />
    </>
  )
}

export default HomeMain
