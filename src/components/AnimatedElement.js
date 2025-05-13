import { useState, useEffect, useRef } from 'react';

const AnimatedElement = ({
  children,
  animation = 'fade-up', // Options: fade-up, fade-down, fade-left, fade-right, zoom-in, zoom-out
  duration = 1000,
  delay = 0,
  threshold = 0.1, // Visibility threshold (0-1)
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef.current);
        }
      },
      {
        threshold,
        rootMargin: '0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  // Define animation classes
  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} delay-${delay}`;

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-10`;
        case 'fade-down':
          return `${baseClasses} opacity-0 -translate-y-10`;
        case 'fade-left':
          return `${baseClasses} opacity-0 translate-x-10`;
        case 'fade-right':
          return `${baseClasses} opacity-0 -translate-x-10`;
        case 'zoom-in':
          return `${baseClasses} opacity-0 scale-95`;
        case 'zoom-out':
          return `${baseClasses} opacity-0 scale-105`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`transform ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
