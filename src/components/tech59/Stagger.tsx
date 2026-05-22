import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { Reveal } from "./Reveal";

interface StaggerProps {
  children: ReactNode;
  step?: number;
  initialDelay?: number;
  y?: number;
  className?: string;
  childClassName?: string;
}

export const Stagger = ({
  children,
  step = 90,
  initialDelay = 0,
  y = 24,
  className = "",
  childClassName = "",
}: StaggerProps) => (
  <div className={className}>
    {Children.map(children, (child, i) => {
      const delay = initialDelay + i * step;
      if (isValidElement(child) && child.type === Reveal) {
        return cloneElement(child as never, { delay });
      }
      return (
        <Reveal delay={delay} y={y} className={childClassName}>
          {child}
        </Reveal>
      );
    })}
  </div>
);
