import { useState, useEffect } from 'react';

const useClientSize = () => {
  const [clientSize, setClientSize] = useState<Partial<Record<'width' | 'height', number>>>();

  useEffect(() => {
    const handleSize = () => {
      setClientSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // Add "resize" listener
      // FIXME: debounce this
      window.addEventListener("resize", handleSize);

      return () => window.removeEventListener("resize", handleSize);
    }
  }, []);

  return clientSize;
}

export { useClientSize }
