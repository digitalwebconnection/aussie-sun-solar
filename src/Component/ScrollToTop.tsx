import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 * -----------
 * Automatically scrolls the window back to the very top (hero section)
 * every time the user navigates to a new page / route.
 *
 * Works seamlessly with Lenis smooth-scroll: we reset both the native
 * scroll position AND the Lenis internal position so there is no jump.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout lets React finish painting the new route first,
    // then we instantly jump to the top before Lenis takes over.
    const timer = setTimeout(() => {
      // Native scroll reset (fallback + Lenis sync)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      // Also reset document element in case of any stale scroll state
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
