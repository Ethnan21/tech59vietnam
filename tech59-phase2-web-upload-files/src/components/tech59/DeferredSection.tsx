import { ReactNode, useEffect, useRef, useState } from "react";

type DeferredSectionProps = {
  id: string;
  minHeight?: number;
  rootMargin?: string;
  children: ReactNode;
};

export const DeferredSection = ({
  id,
  minHeight = 1,
  rootMargin = "900px 0px",
  children,
}: DeferredSectionProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldLoad) return;
    const el = anchorRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad]);

  if (shouldLoad) return <>{children}</>;

  return <div id={id} ref={anchorRef} aria-hidden="true" style={{ minHeight }} />;
};
