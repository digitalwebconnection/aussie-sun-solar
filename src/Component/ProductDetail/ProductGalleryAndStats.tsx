import React, { useState, useEffect } from "react";
import {  Zap, Shield, ArrowRight } from "lucide-react";
import type { ProductData } from "../../data/products";

interface ProductGalleryAndStatsProps {
  product: ProductData;
}

export const ProductGalleryAndStats: React.FC<ProductGalleryAndStatsProps> = ({
  product,
}) => {
  const images = product.productImages || [];

  const [activeImage, setActiveImage] = useState(images[0] || "");

  useEffect(() => {
    if (images.length > 0) {
      setActiveImage(images[0]);
    } else {
      setActiveImage("");
    }
  }, [product.productImages]);

  // Fallback PDF datasheet
  // const pdfLink = extra?.pdfUrl || "https://www.cleanenergycouncil.org.au/";

  return (
    <div className="bg-white mx-auto max-w-7xl ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        
        {/* LEFT COLUMN: Product Images Gallery */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="relative aspect-square w-full  overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center group">
            <img
              src={activeImage}
              alt={product.name}
              className="object-fill w-70 h-full transition duration-500 group-hover:scale-105"
            />
            {/* HSL Gradient Tag */}
            <div className="absolute top-4 left-4 bg-linear-to-r from-[#004093] to-[#FE9900] text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">
              {product.category}
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-15 h-20 rounded-lg overflow-hidden border-2 transition ${
                    activeImage === img ? "border-[#004093] scale-95" : "border-slate-100 hover:border-slate-300"
                  }`}
                >
                  <img src={img} alt="product thumbnail" className="w-full h-full object-fill" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Brand Info, Intro & Primary CTAs */}
        <div className="lg:col-span-8 flex flex-col justify-between">

            {/* Brand Logo & Certificate Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 ">
              <div className="flex items-center gap-4">
                {product.logoUrl ? (
                  <div className="h-32 bg-white rounded-lg flex items-center justify-center ">
                    <img
                      src={product.logoUrl}
                      alt={`${product.brand} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-6 rounded-sm"
                        style={{ backgroundColor: product.brandColor }}
                      />
                      <span className="text-2xl font-black tracking-tighter text-[#004093]">
                        {product.logoText}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 tracking-[0.2em] uppercase">
                    {product.brand} Authorized Partner
                  </span>
                </div>
              </div>
            </div>

            {/* Title & Tagline */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              {product.brand} — {product.tagline}
            </h2>
            <p className="text-slate-700 text-xs font-bold uppercase tracking-wider mt-1 mb-4">
              {product.subtitle}
            </p>

            {/* Intro */}
            <p className="text-slate-900 text-base leading-relaxed mb-6 font-medium">
              {product.intro}
            </p>

            {/* Stats badges */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#004093]/10 flex items-center justify-center text-[#004093]">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Warranty</p>
                  <p className="text-sm font-black text-[#004093]">Up to 25 Years</p>
                </div>
              </div>
              
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FE9900]/10 flex items-center justify-center text-[#FE9900]">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Efficiency</p>
                  <p className="text-sm font-black text-[#004093]">High Performance</p>
                </div>
              </div>
            </div>


            <a
              href="#quote-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#FE9900] hover:bg-[#e08600] text-white px-6 py-4 rounded-lg font-black transition duration-300 shadow-lg shadow-[#FE9900]/20 text-center hover:scale-[1.02]"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </a>

        </div>

      </div>
    </div>
  );
};
