import { useEffect, useState } from "react"

export default function useMobileDetection(): number {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const isWindow = typeof window !== 'undefined';
  
  const getWidth = () => isWindow ? window.innerWidth : windowWidth;
  const resize = () => setWindowWidth(getWidth());

  useEffect(() => {
    if (isWindow) {
      setWindowWidth(getWidth());
      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
    }
  }, [isWindow]);

  return windowWidth as number;
}
