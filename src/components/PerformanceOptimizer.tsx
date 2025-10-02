import { useEffect } from 'react';

// Performance optimization component
export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical routes
    const preloadRoutes = ['/catalogo', '/carrello', '/auth'];
    
    preloadRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });

    // Add resource hints for fonts
    const fontPreconnect = document.createElement('link');
    fontPreconnect.rel = 'preconnect';
    fontPreconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(fontPreconnect);

    const fontPreconnectCrossDomain = document.createElement('link');
    fontPreconnectCrossDomain.rel = 'preconnect';
    fontPreconnectCrossDomain.href = 'https://fonts.gstatic.com';
    fontPreconnectCrossDomain.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreconnectCrossDomain);

    // Service worker disabled temporarily to prevent caching issues
    // Additionally, actively unregister any existing service workers that might be
    // serving stale assets and causing blank screens in production.
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) => {
        regs.forEach((reg) => reg.unregister().catch(() => {}));
      }).catch(() => {});
    }

    return () => {
      // Cleanup
      const links = document.querySelectorAll('link[rel="prefetch"]');
      links.forEach(link => link.remove());
    };
  }, []);

  return null;
};