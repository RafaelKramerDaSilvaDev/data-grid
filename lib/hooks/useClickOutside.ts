import { useEffect, useRef } from "react";

type UseClickOutsideProps = {
  onClickOutside: () => void;
  excludeRefs?: React.RefObject<HTMLElement>[];
};

export const useClickOutside = <T extends HTMLElement>({
  onClickOutside,
  excludeRefs = [],
}: UseClickOutsideProps) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const isExcluded = excludeRefs.some(
        (excludeRef) =>
          excludeRef.current && excludeRef.current.contains(target)
      );

      if (ref.current && !ref.current.contains(target) && !isExcluded) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside, excludeRefs]);

  return { ref };
};
