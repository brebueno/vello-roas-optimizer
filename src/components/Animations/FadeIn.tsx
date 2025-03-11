
import { ReactNode, useEffect, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "right";
  className?: string;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const animationClass = direction === "up" 
    ? "animate-fade-in" 
    : "animate-fade-in-right";

  return (
    <div 
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards" 
      }}
    >
      {children}
    </div>
  );
};
