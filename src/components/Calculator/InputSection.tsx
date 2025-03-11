
import { ReactNode } from "react";
import { FadeIn } from "../Animations/FadeIn";

interface InputSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  color?: string;
}

export const InputSection = ({ 
  title, 
  children, 
  className = "",
  delay = 0,
  color = "bg-white" 
}: InputSectionProps) => {
  return (
    <FadeIn delay={delay} className={`mb-6 ${className}`}>
      <div className={`section-container ${color}`}>
        <h2 className="section-title mb-4">{title}</h2>
        {children}
      </div>
    </FadeIn>
  );
};
