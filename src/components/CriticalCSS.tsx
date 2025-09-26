import { useEffect } from 'react';

// Component to inject critical CSS for above-the-fold content
export const CriticalCSS = () => {
  useEffect(() => {
    // Remove loading class once critical content is rendered
    document.body.classList.remove('loading');
    
    // Add critical styles to reduce CLS
    const style = document.createElement('style');
    style.textContent = `
      /* Additional critical styles for layout stability */
      .hero-section {
        position: relative;
        width: 100%;
        height: 100vh;
        contain: layout style paint;
      }
      
      .hero-content-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        contain: layout;
      }
      
      .hero-text-container {
        width: 100%;
        max-width: 1536px;
        margin: 0 auto;
        padding: 0 1rem;
        text-align: center;
        contain: layout;
      }
      
      /* Prevent font swap CLS */
      .font-anton-loaded {
        font-family: 'Anton', Impact, 'Arial Black', sans-serif;
      }
      
      .font-lora-loaded {
        font-family: 'Lora', Georgia, 'Times New Roman', serif;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};