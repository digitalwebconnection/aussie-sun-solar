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
    // 1. Force native scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 2. Tell Lenis to reset its internal scroll position
    // @ts-ignore
    if (window.lenis) {
      requestAnimationFrame(() => {
        // @ts-ignore
        window.lenis.scrollTo(0, { immediate: true });
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
