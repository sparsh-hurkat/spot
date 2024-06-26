import { useEffect, useState } from "react";
import useDidUpdateEffect from "./useDidUpdateEffect";

export const useIntersection = (element, rootMargin = "0px") => {
  const [isVisible, setState] = useState(false);

  useDidUpdateEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );
    current && observer?.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return isVisible;
};
