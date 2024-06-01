import { useState, useRef, useEffect, MutableRefObject } from "react";

interface UseOverflowResult {
  isExpanded: boolean;
  overflowHeight: number;
  toggleExpand: () => void;
  contentRef: MutableRefObject<HTMLDivElement | null>;
}

const useOverflow = (initialHeightPercentage: number): UseOverflowResult => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [overflowHeight, setOverflowHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const containerHeight = (initialHeightPercentage * window.innerHeight) / 100;
        const contentHeight = contentRef.current.scrollHeight;
        if (contentHeight > containerHeight) {
          const overflowInVH = ((contentHeight - containerHeight) / window.innerHeight) * 100;
          setOverflowHeight(overflowInVH);
        } else {
          setOverflowHeight(0);
        }
      }
    };

    checkOverflow();

    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [initialHeightPercentage]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return { isExpanded, overflowHeight, toggleExpand, contentRef };
};

export default useOverflow;
