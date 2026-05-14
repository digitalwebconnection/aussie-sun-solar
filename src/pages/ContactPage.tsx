import ContactPageHero from '../Component/Contact/ContactPageHero';
import ContactHero from '../Component/Contact/ContactHero';
import ContactOffices from '../Component/Contact/ContactOffices';
import ContactServices from '../Component/Contact/ContactServices';


const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 0. Cinematic Hero Section */}
      <ContactPageHero />

      {/* 1. Contact Info & Form Section */}
      <ContactHero />

      {/* 2. Office Locations */}
      <ContactOffices />

      {/* 3. Services Grid */}
      <ContactServices />



    </main>
  );
};

export default ContactPage;
