import { useEffect } from 'react';

export default function Animations({ children }) {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
