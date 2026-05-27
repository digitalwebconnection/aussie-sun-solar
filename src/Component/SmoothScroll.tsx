import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll (Lenis) — Ultra-Smooth Config
 * -------------------------------------------
 * Tuned for a premium, cinematic scroll feel:
 *  • Long duration with cubic ease-out for heavy, satisfying deceleration
 *  • Lower wheel multiplier so each tick travels a controlled distance
 *  • High-frequency RAF sync for buttery 60/120 fps motion
 */
const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      // ── Duration ────────────────────────────────────────────────────────────
      // 2 seconds — the scroll glides to a stop rather than snapping.
      // This is the single biggest lever for a "premium agency" feel.
      duration: 1.0,

      // ── Easing ──────────────────────────────────────────────────────────────
      // Cubic ease-out: fast start, then a long, weighted deceleration tail.
      // Much smoother than the exponential curve for sustained scrolling.
      easing: (t: number) => 1 - Math.pow(1 - t, 4),

      // ── Wheel ───────────────────────────────────────────────────────────────
      // Keep wheel travel modest so Lenis has room to interpolate smoothly.
      // Too high → feels jerky; too low → feels laggy.
      smoothWheel: true,
      wheelMultiplier: 0.85,

      // ── Touch ───────────────────────────────────────────────────────────────
      // Slightly above 1× so mobile feels responsive without over-shooting.
      touchMultiplier: 2.5,

      // ── Infinite ────────────────────────────────────────────────────────────
      // false = standard bounded scroll (correct for most pages)
      infinite: false,

      // ── Prevent ─────────────────────────────────────────────────────────────
      // Skip Lenis for elements that manage their own scroll (modals, drawers).
      prevent: (node: Element) => node.classList.contains('lenis-prevent'),
    });

    let rafId: number;

    // High-priority RAF loop — syncs Lenis with the browser's paint cycle
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Clean up on unmount — no memory leaks
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
