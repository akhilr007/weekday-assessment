import { useEffect, useRef } from "react";

const useInfiniteScroll = (callback) => {
  const observer = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);

    const observerElement = document.getElementById("bottomObserver");
    if (observerElement) {
      observer.current.observe(observerElement);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback]);
};

export default useInfiniteScroll;
