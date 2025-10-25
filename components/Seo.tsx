
import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    
    const setMetaTag = (name: string, content: string) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('name', name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    const setPropertyTag = (property: string, content: string) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    setMetaTag('description', description);

    // Open Graph
    setPropertyTag('og:title', title);
    setPropertyTag('og:description', description);
    
    // Twitter
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);

  }, [title, description]);

  return null;
};

export default Seo;
