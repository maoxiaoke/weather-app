import { useState, useEffect } from 'react';

const useClientSize = () => {
  const [clientSize, setClientSize] = useState<Partial<Record<'width' | 'height', number>>>({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setLoading(true);

      // This my not be right!!!
      setTimeout(() => {
        setClientSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
        setLoading(false)
      }, 0)

    }

    // Add "resize" listener
    // FIXME: debounce this
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize)
    };
  }, []);

  return [clientSize, loading] as any;
}

export { useClientSize }
