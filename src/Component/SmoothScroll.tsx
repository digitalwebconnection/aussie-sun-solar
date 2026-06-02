import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll (Lenis) — Ultra-Premium Cinematic Config
 * -------------------------------------------------------
 * Every number here is deliberately chosen for a buttery,
 * agency-grade scroll experience:
 *
 *  • duration 1.6s   → long, weighted glide (like floating)
 *  • expo easing      → instant pickup, feather-light stop
 *  • wheel 0.65       → compact per-tick distance = more frames
 *                       to interpolate = smoother motion
 *  • touch 2.0        → natural mobile feel without overshoot
 */
const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      // ── Duration ────────────────────────────────────────────────────────────
      // 1.6 s gives the page a "heavy, floating" character.
      // Below 1.0 feels snappy/cheap; above 2.0 starts feeling sluggish.
      duration: 1.6,

      // ── Easing ──────────────────────────────────────────────────────────────
      // Expo ease-out: instantaneous pickup → ultra-long deceleration tail.
      // This is the signature feel of premium design studios (Awwwards sites).
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),

      // ── Wheel ───────────────────────────────────────────────────────────────
      // Lower multiplier = smaller raw jumps = more interpolation frames.
      // 0.65 is the sweet spot for cinematic smoothness on a standard wheel.
      smoothWheel: true,
      wheelMultiplier: 0.65,

      // ── Touch ───────────────────────────────────────────────────────────────
      // 2.0 keeps mobile feeling responsive without the rubber-band overshoot
      // that happens above 2.5.
      touchMultiplier: 2.0,

      // ── Sync with Framer Motion / GSAP ──────────────────────────────────────
      // Ensures Lenis scroll position stays in sync with any motion library
      // animations that also read scrollY.
      syncTouch: false,

      // ── Bounded scroll ──────────────────────────────────────────────────────
      infinite: false,

      // ── Opt-out class ───────────────────────────────────────────────────────
      // Any element with class="lenis-prevent" (modals, drawers, carousels)
      // will use native scroll instead of Lenis.
      prevent: (node: Element) =>
        node.classList.contains('lenis-prevent') ||
        node.closest('[data-lenis-prevent]') !== null,
    });

    // ── RAF loop — highest-priority, synced to paint cycle ──────────────────
    // Using a named function (not an arrow inside rAF) avoids a V8 de-opt.
    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // ── Expose lenis on window for debugging in dev ──────────────────────────
    if (import.meta.env.DEV) {
      // @ts-expect-error — dev-only global
      window.__lenis = lenis;
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
