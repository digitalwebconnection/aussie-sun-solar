import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from "lenis"
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
import ScrollToTop from './Component/ScrollToTop'
import AboutMain from './Component/Aboutus/AboutMain'
import ProjectsCTA from './Component/Projects/ProjectsCTA'
import BlogMain from './Component/blog/BlogMain'
import BlogDetails from './Component/blog/BlogDetails'
import AdminLogin from './Component/admin/AdminLogin'
import AdminDashboard from './Component/admin/AdminDashboard'
import ProtectedRoute from './Component/admin/ProtectedRoute'
import SolarPowerSystems from './pages/SolarPowerSystems'
import BatteryStoragePage from './pages/BatteryStoragePage'
import EVChargersPage from './pages/EVChargersPage'
import CommercialSolarPage from './pages/CommercialSolarPage'
import ProductDetailPage from './pages/ProductDetailPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'
import ComplaintsHandlingPolicyPage from './pages/ComplaintsHandlingPolicyPage'
import CookiesPolicyPage from './pages/CookiesPolicyPage'
import { ToastProvider } from './Component/ui/Toast'
import CookieBanner from './Component/CookieBanner'
import GlobalPopupForm from './Component/GlobalPopupForm'
import { PopupProvider } from './context/PopupContext'

function MainLayout() {
  return (
    <>
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
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/complaints-handling-policy" element={<ComplaintsHandlingPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiesPolicyPage />} />
        </Routes>
      </main>
      
      {/* <WhatsAppChatWidget/> */}
      <ProjectsCTA />
      <GlobalPopupForm />
      {/* Cookie Consent Banner */}
      <CookieBanner />
      {/* Footer — shown on every page */}
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.04,            // Lower = silkier glide (0.05–0.1 range)
      smoothWheel: true,
      wheelMultiplier: 1.0,  // Slightly faster wheel to compensate for lower lerp
      touchMultiplier: 1.5,  // Snappy on mobile touch
      infinite: false,
    });
    
    // @ts-ignore
    window.lenis = lenis;

    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <HelmetProvider>
        <ToastProvider>
          <PopupProvider>
            <ScrollToTop />
            <Routes>
              {/* Admin Routes without Navbar/Footer */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
              
              {/* All other routes wrapped in MainLayout */}
              <Route path="/*" element={<MainLayout />} />
            </Routes>
          </PopupProvider>
        </ToastProvider>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
