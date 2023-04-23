import { useState, useEffect, useRef } from 'react';

export const useWindowWidth = (maxWidth: number = 1920): number => {
  const [width, setWidth] = useState(window.innerWidth > maxWidth ? maxWidth : window.innerWidth);
  const debounceFn = useRef<NodeJS.Timeout | null>(null);

  const updateWidth = () => {
    if (debounceFn.current) {
      clearTimeout(debounceFn.current);
    }
    const timeout = setTimeout(() => {
      if (window.innerWidth < maxWidth) {
        setWidth(window.innerWidth);
      } else {
        setWidth(maxWidth);
      }
    }, 200);
    debounceFn.current = timeout;
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return width;
};