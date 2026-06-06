import SEO from '../Component/SEO';
import ContactPageHero from '../Component/Contact/ContactPageHero';
import ContactHero from '../Component/Contact/ContactHero';

import ContactServices from '../Component/Contact/ContactServices';


const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <SEO title="Contact Us" description="Get in touch with Aussie Sun Solar. Ask questions, request a free energy assessment, or get a custom solar quote." />
      {/* 0. Cinematic Hero Section */}
      <ContactPageHero />

      {/* 1. Contact Info & Form Section */}
      <ContactHero />

      {/* 2. Services Grid */}
      <ContactServices />

    </main>
  );
};

export default ContactPage;
