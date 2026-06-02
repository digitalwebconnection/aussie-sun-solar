import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { type ProductData } from "../../data/products";
import solarRoof1 from '../../assets/downloaded-images/solar-roof-1.jpg';

interface ProductHeroProps {
  product: ProductData;
}

export const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  return (
    <section className="relative h-[250px] md:h-[350px] overflow-hidden pt-28 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={solarRoof1}
          alt="Solar installation background"
          className="h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/85 " />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full text-white">
        <div className="flex flex-col gap-2">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider mb-2">
            <Link to="/" className="hover:text-[#FE9900] transition">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-[#FE9900] transition">Products</Link>
            <ChevronRight size={14} />
            <span className="text-white/90">{product.category}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-sm">
            {product.name}
          </h1>
        </div>
      </div>
    </section>
  );
};
