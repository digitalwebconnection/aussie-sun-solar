import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import SolarNavbar from './Component/Navbar'
import Footer from './Component/Footer'
import HomeMain from './Component/Home/HomeMain'
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import './App.css'
// import WhatsAppChatWidget from './Component/WhatsAppChatWidget'
import Preloader from './Component/Home/Preloader'
import SmoothScroll from './Component/SmoothScroll'
import ScrollToTop from './Component/ScrollToTop'
import AboutMain from './Component/Aboutus/AboutMain'
import ProjectsCTA from './Component/Projects/ProjectsCTA'
import SolarPowerSystems from './pages/SolarPowerSystems'
import BatteryStoragePage from './pages/BatteryStoragePage'
import EVChargersPage from './pages/EVChargersPage'
import CommercialSolarPage from './pages/CommercialSolarPage'
import ProductDetailPage from './pages/ProductDetailPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import { ToastProvider } from './Component/ui/Toast'
import CookieBanner from './Component/CookieBanner'

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ToastProvider>
          <SmoothScroll />
          <ScrollToTop />
          <Preloader />
          {/* Fixed Navbar — sits above all pages */}
          <header>
            <SolarNavbar />
          </header>

          {/* Page content rendered based on route */}
          <main className="overflow-x-hidden">
            <Routes>
              <Route path="/" element={<HomeMain />} />
              <Route path="/about" element={<AboutMain/>} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/solar-power-systems" element={<SolarPowerSystems />} />
              <Route path="/services/battery-storage-solutions" element={<BatteryStoragePage />} />
              <Route path="/services/ev-chargers" element={<EVChargersPage />} />
              <Route path="/services/commercial-solar" element={<CommercialSolarPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
          </main>
          {/* <WhatsAppChatWidget/> */}
          <ProjectsCTA />
          {/* Cookie Consent Banner */}
          <CookieBanner />
          {/* Footer — shown on every page */}
          <Footer />
        </ToastProvider>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
