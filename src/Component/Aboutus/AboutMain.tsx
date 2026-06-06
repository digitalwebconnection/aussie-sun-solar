import SEO from "../SEO"
import AboutSolarSection from "./AboutSolarSection"
import AboutHeroSection from "./AboutUsHero"
import AboutFeatures from "./AboutFeatures"
// import DirectorMessage from "./DirectorMessage"
import SolarExpertiseSection from "./SolarExpertiseSection"

const AboutMain = () => {
    return (
        <>
        <SEO 
          title="About Us" 
          description="Learn about Aussie Sun Solar, our commitment to green renewable energy, and how our expert solar installers deliver top-tier solar designs across Australia." 
          keywords="Aussie Sun Solar, solar energy experts, about us, solar installer Australia, green energy team"
        />
        <AboutHeroSection/>
        <AboutSolarSection/>
        <AboutFeatures/>
        {/* <DirectorMessage/> */}
        <SolarExpertiseSection/>
        </>
    )
}

export default AboutMain