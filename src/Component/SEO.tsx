import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

export default function SEO({ title, description, keywords, canonicalUrl }: SEOProps) {
  const defaultKeywords = "solar panels, solar battery storage, commercial solar, EV chargers, Aussie Sun Solar, Australia solar, solar installation, clean energy, renewable energy";
  const siteTitle = title.includes("Aussie Sun Solar") ? title : `${title} | Aussie Sun Solar`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Aussie Sun Solar" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
