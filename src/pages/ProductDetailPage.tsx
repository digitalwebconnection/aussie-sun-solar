import { useParams, Link } from "react-router-dom";
import SEO from '../Component/SEO';
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { productsData } from "../data/products";

// Import modular subcomponents
import { ProductHero } from "../Component/ProductDetail/ProductHero";
import { ProductGalleryAndStats } from "../Component/ProductDetail/ProductGalleryAndStats";
import { DatasheetSpecs } from "../Component/ProductDetail/DatasheetSpecs";
import { WhyChooseBrand } from "../Component/ProductDetail/WhyChooseBrand";
import { RangeSpecs } from "../Component/ProductDetail/RangeSpecs";
import { TechnicalAdvantages } from "../Component/ProductDetail/TechnicalAdvantages";
import { InstallationBestFor } from "../Component/ProductDetail/InstallationBestFor";
import { WarrantySupport } from "../Component/ProductDetail/WarrantySupport";
import { ProductFAQ } from "../Component/ProductDetail/ProductFAQ";
import { TrustStrip } from "../Component/ProductDetail/TrustStrip";
import { ContactCTA } from "../Component/ProductDetail/ContactCTA";
import { WhyAussieDifference } from "../Component/ProductDetail/WhyAussieDifference";
import { ProductBottomShowcase } from "../Component/ProductDetail/ProductBottomShowcase";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!slug || !productsData[slug]) {
    return (
      <main className="min-h-screen bg-slate-50 pt-32 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h1 className="text-4xl font-black text-[#004093]">Product Not Found</h1>
          <p className="mt-4 text-slate-600">The product you are looking for does not exist or has been moved.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 bg-[#FE9900] hover:bg-[#ffb033] text-white px-6 py-3 rounded-full font-bold transition duration-300"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    );
  }

  const product = productsData[slug];



  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <SEO title={`${product.brand} ${product.name}`} description={`Learn about ${product.brand} ${product.name} specifications, features, and warranty options. Get premium solar installs with Aussie Sun Solar.`} />
      {/* 1. Hero Section */}
      <ProductHero product={product} />

      {/* 2. Main Content Grid */}
      <section className="py-12 md:py-16 ">
        <div className=" px-6 md:px-0">
          
          {/* Product Gallery, Title, Tagline and Technical Datasheet CTA */}
          <ProductGalleryAndStats product={product} />

          {/* Technical Specifications Table, Models, and PDF Box */}
          <DatasheetSpecs product={product} />

          {/* Why Choose Brand Benefits List */}
          <WhyChooseBrand product={product} />

          {/* Product Range Details */}
          <RangeSpecs product={product} />

          {/* Advanced Technical Details */}
          <TechnicalAdvantages product={product} />

          {/* Two-Column Grid: Installation & Compatibility + Who It's Best For */}
          <InstallationBestFor product={product} />

          {/* Warranty and direct local support details */}
          <WarrantySupport product={product} />

          {/* Interactive Frequently Asked Questions */}
          <ProductFAQ product={product} />

          {/* Redesigned Showcase & Callback Request Section */}
          <ProductBottomShowcase product={product} />

        </div>
      </section>

      {/* 3. Standards and Compliance strip */}
      <TrustStrip />

      {/* 4. Contact CTA section */}
      <ContactCTA />

      {/* 5. Aussie Sun Solar difference section */}
      <WhyAussieDifference />

    </motion.main>
  );
};

export default ProductDetailPage;
