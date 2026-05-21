import AboutSection from './AboutSectionHm'
import HeroSection from './HeroHm'
import StatsSection from './numbergride'
import ProcessSection from './ProcessSection'
import ServicesSection from './ServicesSectionhm'
import SolarLeadSection from './SolarLeadSection'
import SolarPackages from './SolarPackages'
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
      <HeroSection />
      <TopRunningSlider />
      <AboutSection />
      <ServicesSection />
      <SolarPackages />
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
