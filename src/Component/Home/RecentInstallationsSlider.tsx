import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Camera, ZoomIn } from 'lucide-react';

// Dynamically load all jpegs from the two WhatsApp asset directories
const folder1 = import.meta.glob<string>('../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/*.jpeg', { 
  eager: true, 
  import: 'default' 
});
const folder2 = import.meta.glob<string>('../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/*.jpeg', { 
  eager: true, 
  import: 'default' 
});

const images1 = Object.values(folder1);
const images2 = Object.values(folder2);
const allImages = [...images1, ...images2];

// Double array to ensure smooth infinite loop for a single marquee track
const repeatedImages = [...allImages, ...allImages];

export default function RecentInstallationsSlider() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allImages.length : 0));
    }
  }, [lightboxIndex]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => 
        prev !== null ? (prev - 1 + allImages.length) % allImages.length : 0
      );
    }
  }, [lightboxIndex]);

  // Handle keyboard events inside Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  return (
    <section className="relative py-6 bg-white overflow-hidden font-sans border-t border-slate-100" aria-label="Solar installation gallery slider">
      {/* Background soft glowing blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FE9900]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004093]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#FE9900]/10 border border-[#FE9900]/20"
          >
            <Camera size={14} className="text-[#FE9900]" />
            <span className="text-[#FE9900] font-bold text-xs uppercase tracking-widest">
              Real Aussie Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight"
          >
            Our Recent <span className="text-[#004093]">Installations</span>
          </motion.h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#FE9900]" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-6xl text-sm md:text-base text-slate-900 leading-relaxed"
          >
            Explore real photos of our clean, premium installations on houses and commercial rooftops. 
            Click any photo to open the interactive full-screen gallery.
          </motion.p>
        </div>
      </div>

      {/* SINGLE ROW INFINITE RUNNING BELT TRACK */}
      <div className="relative w-full overflow-hidden flex py-4 mask-gradient select-none z-10">
        {/* Left and Right side fading overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex gap-4 md:gap-6">
          {repeatedImages.map((imgUrl, idx) => {
            // Map repeated item index back to original array index
            const originalIdx = idx % allImages.length;
            return (
              <div
                key={`installation-img-${idx}`}
                onClick={() => openLightbox(originalIdx)}
                className="relative group w-64 md:w-80 aspect-4/3 rounded-lg shadow-black overflow-hidden bg-slate-100 border border-slate-200/60 cursor-pointer shadow-md hover:shadow-xl hover:border-[#FE9900]/50 transition-all duration-300 shrink-0"
              >
                <img
                  src={imgUrl}
                  alt={`Aussie Sun Solar installation proof image ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#004093]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-6"
          >
            {/* Backdrop Sibling - Click to close */}
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out" 
              onClick={closeLightbox} 
            />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 rounded-f   bg-white/5 border border-white/10 text-white hover:bg-[#FE9900] hover:text-black transition-all duration-300 cursor-pointer"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FE9900] hover:text-black transition-all duration-300 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Image Container */}
            <div className="relative max-w-5xl max-h-[70vh] w-full flex items-center justify-center z-10 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  src={allImages[lightboxIndex]}
                  alt={`Aussie Sun Solar installation image details ${lightboxIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl select-none pointer-events-auto"
                />
              </AnimatePresence>
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FE9900] hover:text-black transition-all duration-300 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom info & thumbnail navigation */}
            <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center gap-4 px-4 text-center">
              <p className="text-white font-bold text-sm tracking-widest uppercase">
                Project Image <span className="text-[#FE9900]">{lightboxIndex + 1}</span> of {allImages.length}
              </p>

              {/* Thumbnails strip */}
              <div className="flex gap-2 max-w-full overflow-x-auto py-2 px-4 scrollbar-thin scrollbar-thumb-white/20 z-40">
                {allImages.map((imgUrl, i) => (
                  <button
                    key={`thumb-${i}`}
                    onClick={() => setLightboxIndex(i)}
                    className={`relative shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                      i === lightboxIndex 
                        ? 'border-[#FE9900] scale-110 shadow-lg shadow-[#FE9900]/20' 
                        : 'border-white/10 opacity-40 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="Thumbnail preview" className="w-full h-full object-cover pointer-events-none" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
