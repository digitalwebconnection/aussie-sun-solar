import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from "lucide-react";

import p1  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.51 (1).jpeg";
import p2  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.51.jpeg";
import p3  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.52 (1).jpeg";
import p4  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.52.jpeg";
import p5  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.53 (1).jpeg";
import p6  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.53 (2).jpeg";
import p7  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.53.jpeg";
import p8  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.54 (1).jpeg";
import p9  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.54 (2).jpeg";
import p10 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.54.jpeg";
import p11 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.55 (1).jpeg";
import p12 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.55 (2).jpeg";
import p13 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.55.jpeg";
import p14 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.56 (1).jpeg";
import p15 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.56 (2).jpeg";
import p16 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.56 (3).jpeg";
import p17 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.56.jpeg";
import p18 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.57 (1).jpeg";
import p19 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.57 (2).jpeg";
import p20 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.57.jpeg";
import p21 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.58 (1).jpeg";
import p22 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.58 (2).jpeg";
import p23 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.58.jpeg";
import p24 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.59 (1).jpeg";
import p25 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.59 (2).jpeg";
import p26 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.11.59.jpeg";
import p27 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.12.00 (1).jpeg";
import p28 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.12.00 (2).jpeg";
import p29 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.12.00 (3).jpeg";
import p30 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.08/WhatsApp Image 2026-05-12 at 19.12.00.jpeg";
import q1  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.06 (1).jpeg";
import q2  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.06 (2).jpeg";
import q3  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.06.jpeg";
import q4  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.07 (1).jpeg";
import q5  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.07 (2).jpeg";
import q6  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.07.jpeg";
import q7  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.08 (1).jpeg";
import q8  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.08 (2).jpeg";
import q9  from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.08.jpeg";
import q10 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.09 (1).jpeg";
import q11 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.09 (2).jpeg";
import q12 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.09.jpeg";
import q13 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.10 (1).jpeg";
import q14 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.10 (2).jpeg";
import q15 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.10.jpeg";
import q16 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.11 (1).jpeg";
import q17 from "../../assets/WhatsApp Unknown 2026-05-13 at 11.35.02/WhatsApp Image 2026-05-12 at 19.12.11.jpeg";

const allPhotos = [
 p23,p24,p25,p26,p27, p1,p2,p3,p4,
  p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
  p21,p22,p28,p29,p30,
  q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,
  q11,q12,q13,q14,q15,q16,q17,p5,p6,p7,p8,p9,p10,
];

const INITIAL_SHOW = 10;

/* Bento pattern repeating every 10 images
   Grid: 4 columns, auto-rows: 200px
   pos 0 → col-span-2 row-span-2  (big featured, 400px tall)
   pos 1 → col-span-1 row-span-1  (small square)
   pos 2 → col-span-1 row-span-1  (small square)
   pos 3 → col-span-1 row-span-1  (small square)
   pos 4 → col-span-1 row-span-1  (small square)
   pos 5 → col-span-1 row-span-2  (tall portrait)
   pos 6 → col-span-2 row-span-1  (wide landscape)
   pos 7 → col-span-1 row-span-1  (small square)
   pos 8 → col-span-2 row-span-2  (big featured, 400px tall)
   pos 9 → col-span-1 row-span-1  (small square)
*/  

const BENTO: { col: string; row: string }[] = [
  { col: "col-span-2", row: "row-span-2" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-2" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-2", row: "row-span-1" },
  { col: "col-span-2", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-2", row: "row-span-2" },
  { col: "col-span-1", row: "row-span-2" },
  { col: "col-span-1", row: "row-span-1" },
];

/* ── Lightbox ─────────────────────────────────────── */
function Lightbox({ photos, index, onClose, onPrev, onNext }: {
  photos: string[]; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-9990 flex items-center justify-center bg-black/93 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10">
        <X size={20} />
      </button>

      <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-sm font-bold px-5 py-2 rounded-full">
        {index + 1} / {photos.length}
      </div>

      <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FE9900] flex items-center justify-center text-white transition-all z-10">
        <ChevronLeft size={24} />
      </button>

      <motion.img
        key={index}
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.22 }}
        src={photos[index]} alt={`Project ${index + 1}`}
        className="max-h-[80vh] max-w-[88vw] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      />

      <button onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FE9900] flex items-center justify-center text-white transition-all z-10">
        <ChevronRight size={24} />
      </button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-[90vw] overflow-x-auto px-4">
        {photos.map((src, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); }}
            className={`shrink-0 w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${i === index ? "border-[#FE9900] scale-110" : "border-white/20 opacity-50 hover:opacity-100"}`}
            onClickCapture={(e) => { e.stopPropagation(); onClose(); setTimeout(() => {}, 0); }}
          >
            <img src={src} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Gallery Item ─────────────────────────────────── */
function GalleryItem({ src, index, globalIndex, onClick }: {
  src: string; index: number; globalIndex: number; onClick: (i: number) => void;
}) {
  const { col, row } = BENTO[index % BENTO.length];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.04 }}
      onClick={() => onClick(globalIndex)}
      className={`${col} ${row} relative group cursor-zoom-in overflow-hidden rounded-lg shadow-lg shadow-black/70`}
    >
      <img
        src={src} alt={`Solar installation ${globalIndex + 1}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-14 h-14 rounded-full bg-[#FE9900] flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
          <ZoomIn size={22} className="text-white" />
        </div>
      </div>

      {/* Label on large items */}
      {(index % BENTO.length === 0 || index % BENTO.length === 8) && (
        <div className="absolute bottom-3 left-3 bg-[#FE9900] text-white text-xs font-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider uppercase">
          Featured
        </div>
      )}
    </motion.div>
  );
}

/* ── Main Component ───────────────────────────────── */
const ProjectsGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? allPhotos : allPhotos.slice(0, INITIAL_SHOW);
  const open  = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev  = useCallback(() => setLightboxIndex(i => i === null ? 0 : (i - 1 + allPhotos.length) % allPhotos.length), []);
  const next  = useCallback(() => setLightboxIndex(i => i === null ? 0 : (i + 1) % allPhotos.length), []);

  return (
    <>
      <section className="bg-white py-14 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#004093]/8 border border-[#004093]/15 px-5 py-2 rounded-full mb-5">
              <Images size={15} className="text-[#004093]" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#004093]">Project Gallery</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#111827]">
              Real Installations,{" "} <br />
              <span className="text-[#FE9900]">Real Results</span>
            </h2>
            <p className="mt-4 text-gray-900 text-base md:text-lg max-w-6xl mx-auto">
              Every photo is a genuine solar installation completed by our CEC-accredited team across Australia.
            </p>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-16 bg-[#FE9900]" />
              <span className="text-sm font-bold text-gray-400"> Real Project Photos</span>
              <div className="h-px w-16 bg-[#FE9900]" />
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
            {visible.map((photo, i) => (
              <GalleryItem key={photo} src={photo} index={i} globalIndex={i} onClick={open} />
            ))}
          </div>

          {/* Load More */}
          {allPhotos.length > INITIAL_SHOW && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} className="flex justify-center mt-12"
            >
              <button
                onClick={() => setShowAll(v => !v)}
                className="group inline-flex items-center gap-3 bg-[#004093] hover:bg-[#FE9900] text-white font-black px-10 py-4 rounded-lg shadow-lg shadow-black/50 transition-all duration-300 hover:scale-105 "
              >
                <Images size={18} />
                {showAll ? "Show Less" : `View All  Photos`}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox photos={allPhotos} index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsGallery;
