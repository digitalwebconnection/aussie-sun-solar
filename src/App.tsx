import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SolarNavbar from './Component/Navbar'
import Footer from './Component/Footer'
import HomeMain from './Component/Home/HomeMain'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import './App.css'
import WhatsAppChatWidget from './Component/WhatsAppChatWidget'
import Preloader from './Component/Home/Preloader'
import SmoothScroll from './Component/SmoothScroll'

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Preloader />
      {/* Fixed Navbar — sits above all pages */}
      <SolarNavbar />

      {/* Page content rendered based on route */}
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
<WhatsAppChatWidget/>
      {/* Footer — shown on every page */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
