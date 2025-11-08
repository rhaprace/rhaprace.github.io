import { useEffect } from 'react';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
}

const DEFAULT_SEO: SEOConfig = {
  title: 'Rafael Race - Full Stack Developer | React, TypeScript, Node.js Portfolio',
  description: 'Full Stack Developer specializing in React, TypeScript, Node.js, and React Native. View my portfolio featuring QuakeSafe, NutriMate, and other innovative web applications.',
  keywords: 'Rafael Race, Full Stack Developer, React Developer, TypeScript, Node.js, React Native, Web Development, Portfolio',
  ogImage: 'https://rhaprace.github.io/projects/portfolio.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  canonicalUrl: 'https://rhaprace.github.io/',
};

/**
 * Custom hook for managing SEO meta tags dynamically
 * 
 * @param config - SEO configuration object
 * 
 * @example
 * ```tsx
 * // In a component
 * useSEO({
 *   title: 'About - Rafael Race',
 *   description: 'Learn more about Rafael Race, a Full Stack Developer',
 * });
 * ```
 */
export const useSEO = (config: SEOConfig = {}) => {
  useEffect(() => {
    const seoConfig = { ...DEFAULT_SEO, ...config };

    // Update document title
    if (seoConfig.title) {
      document.title = seoConfig.title;
    }

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        // Create meta tag if it doesn't exist
        const meta = document.createElement('meta');
        const [attr, value] = selector.replace(/[\[\]]/g, '').split('=');
        meta.setAttribute(attr, value.replace(/['"]/g, ''));
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update meta description
    if (seoConfig.description) {
      updateMetaTag('meta[name="description"]', seoConfig.description);
      updateMetaTag('meta[property="og:description"]', seoConfig.description);
      updateMetaTag('meta[name="twitter:description"]', seoConfig.description);
    }

    // Update meta keywords
    if (seoConfig.keywords) {
      updateMetaTag('meta[name="keywords"]', seoConfig.keywords);
    }

    // Update Open Graph title
    if (seoConfig.title) {
      updateMetaTag('meta[property="og:title"]', seoConfig.title);
      updateMetaTag('meta[name="twitter:title"]', seoConfig.title);
    }

    // Update Open Graph image
    if (seoConfig.ogImage) {
      updateMetaTag('meta[property="og:image"]', seoConfig.ogImage);
      updateMetaTag('meta[name="twitter:image"]', seoConfig.ogImage);
    }

    // Update Open Graph type
    if (seoConfig.ogType) {
      updateMetaTag('meta[property="og:type"]', seoConfig.ogType);
    }

    // Update Twitter card type
    if (seoConfig.twitterCard) {
      updateMetaTag('meta[name="twitter:card"]', seoConfig.twitterCard);
    }

    // Update canonical URL
    if (seoConfig.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonical) {
        canonical.href = seoConfig.canonicalUrl;
      } else {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = seoConfig.canonicalUrl;
        document.head.appendChild(canonical);
      }
      
      // Also update og:url
      updateMetaTag('meta[property="og:url"]', seoConfig.canonicalUrl);
      updateMetaTag('meta[name="twitter:url"]', seoConfig.canonicalUrl);
    }

    // Cleanup function to restore defaults (optional)
    return () => {
      // You can choose to restore defaults or leave the updated values
      // For a single-page app, leaving the values is usually fine
    };
  }, [config]);
};

/**
 * Helper function to generate structured data for a specific page/section
 * 
 * @param data - Structured data object
 * @returns Script element ID for cleanup
 */
export const addStructuredData = (data: object, id: string = 'structured-data'): string => {
  // Remove existing structured data with the same ID
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }

  // Create new script tag with structured data
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);

  return id;
};

/**
 * Helper function to remove structured data
 * 
 * @param id - Script element ID to remove
 */
export const removeStructuredData = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
};

