import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
 
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
 
// Triple the images to allow infinite seamless looping in both directions
const sliderImages = [...allImages, ...allImages, ...allImages];
 
const AUTO_PLAY_MS = 3500;
 
export default function RecentInstallationsSlider() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
 
  // Start the slider in the middle set of images for seamless infinite looping
  const [sliderIndex, setSliderIndex] = useState(allImages.length);
  const [isPlaying] = useState(true);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
 
  // Responsive visible count
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else if (width < 1280) setVisibleCount(3);
      else setVisibleCount(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  // ─── Auto-play logic ───────────────────────────────────────────────
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setIsTransitionEnabled(true);
      setSliderIndex((prev) => prev + 1);
    }, AUTO_PLAY_MS);
  }, []);
 
  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);
 
  useEffect(() => {
    if (isPlaying && lightboxIndex === null) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isPlaying, lightboxIndex, startAutoPlay, stopAutoPlay]);
 
  // ─── Transition End (Silent Reset) ──────────────────────────────────
  const handleTransitionEnd = () => {
    // If we've slid into the third set, reset to the middle set silently
    if (sliderIndex >= allImages.length * 2) {
      setIsTransitionEnabled(false);
      setSliderIndex((prev) => prev - allImages.length);
    }
    // If we've slid into the first set, reset to the middle set silently
    else if (sliderIndex < allImages.length) {
      setIsTransitionEnabled(false);
      setSliderIndex((prev) => prev + allImages.length);
    }
  };
 
  // Re-enable transition after silent reset
  useEffect(() => {
    if (!isTransitionEnabled) {
      // Force layout reflow so the browser registers the translation jump instantly
      if (containerRef.current) {
      }
      const timer = setTimeout(() => {
        setIsTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitionEnabled]);
 
  // ─── Dragging / Swiping state ──────────────────────────────────────
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
 
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setIsTransitionEnabled(false);
    dragStartX.current = clientX;
    stopAutoPlay();
  };
 
  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartX.current;
    setDragOffset(deltaX);
  };
 
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitionEnabled(true);
 
    const containerWidth = containerRef.current?.offsetWidth || 1;
    const cardWidth = containerWidth / visibleCount;
    const swipeThreshold = cardWidth * 0.25; // 25% of card width
 
    let nextIdx = sliderIndex;
    if (dragOffset < -swipeThreshold) {
      nextIdx = sliderIndex + 1;
    } else if (dragOffset > swipeThreshold) {
      nextIdx = sliderIndex - 1;
    }
 
    // Keep it clamped within the bounds of the tripled list
    const clampedIdx = Math.max(0, Math.min(sliderImages.length - visibleCount, nextIdx));
    setSliderIndex(clampedIdx);
    setDragOffset(0);
 
    if (isPlaying && lightboxIndex === null) {
      startAutoPlay();
    }
  };
 
  // ─── Lightbox logic ────────────────────────────────────────────────
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    stopAutoPlay();
  };
 
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    if (isPlaying) startAutoPlay();
  }, [isPlaying, startAutoPlay]);
 
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
 
  // Keyboard events for lightbox
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
    <section
      className="relative py-6 bg-white overflow-hidden font-sans border-t border-slate-100 select-none"
      aria-label="Solar installation gallery slider"
    >
      {/* Background glowing blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FE9900]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004093]/5 blur-[120px] rounded-full pointer-events-none" />
 
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 relative z-10">
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
            Explore real photos of our clean, premium installations on houses and commercial rooftops.{' '}
            Click any photo to open the interactive full-screen gallery.
          </motion.p>
        </div>
      </div>
 
      {/* ── DRAGGABLE SLIDER STRIP ─────────────────────────── */}
      <div
        className="relative max-w-7xl mx-auto px-6 z-10 overflow-hidden cursor-grab active:cursor-grabbing"
        ref={containerRef}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div
          className="flex gap-4"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(-${sliderIndex * (100 / visibleCount)}% + ${dragOffset}px))`,
            transition: (isDragging || !isTransitionEnabled)
              ? 'none'
              : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          {sliderImages.map((src, idx) => {
            const originalIndex = idx % allImages.length;
            return (
              <div
                key={idx}
                onClick={(e) => {
                  // Prevent opening lightbox if user was dragging
                  if (Math.abs(dragOffset) > 5) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                  }
                  openLightbox(originalIndex);
                }}
                style={{
                  width: `calc(${100 / visibleCount}% - ${(16 * (visibleCount - 1)) / visibleCount}px)`,
                }}
                className="relative group aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-md hover:shadow-xl hover:border-[#FE9900]/50 transition-all duration-300 shrink-0 select-none pointer-events-auto"
              >
                <img
                  src={src}
                  alt={`Aussie Sun Solar installation image ${originalIndex + 1}`}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-[#004093]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
 
      {/* ── LIGHTBOX MODAL ─────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-6"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out"
              onClick={closeLightbox}
            />
 
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FE9900] hover:text-black transition-all duration-300 cursor-pointer"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>
 
            {/* Left nav */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FE9900] hover:text-black transition-all duration-300 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
 
            {/* Main image */}
            <div className="relative max-w-5xl max-h-[70vh] w-full flex items-center justify-center z-10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  src={allImages[lightboxIndex]}
                  alt={`Aussie Sun Solar installation image ${lightboxIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl select-none"
                />
              </AnimatePresence>
            </div>
 
            {/* Right nav */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FE9900] hover:text-black transition-all duration-300 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
 
            {/* Bottom: counter + thumbnails */}
            <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center gap-4 px-4 text-center">
              <p className="text-white font-bold text-sm tracking-widest uppercase">
                Project Image{' '}
                <span className="text-[#FE9900]">{lightboxIndex + 1}</span> of{' '}
                {allImages.length}
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
                    <img
                      src={imgUrl}
                      alt="Thumbnail preview"
                      className="w-full h-full object-cover pointer-events-none"
                    />
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