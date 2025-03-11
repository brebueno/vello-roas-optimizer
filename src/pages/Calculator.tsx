
import { ROASCalculator } from "@/components/Calculator/ROASCalculator";
import { FadeIn } from "@/components/Animations/FadeIn";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Calculator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vello-blue to-vello-blue/90 text-vello-dark-gray">
      <div className="container py-8 md:py-12">
        <FadeIn className="text-center mb-8">
          <div className="inline-block rounded-xl bg-white/90 backdrop-blur-sm shadow-soft px-6 py-4 mb-6">
            <div className="flex items-center justify-center mb-3">
              <img 
                src="/lovable-uploads/139e9403-ec07-4c1f-85ce-8817c3af9ad0.png" 
                alt="Vello" 
                className="h-8 md:h-10"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-vello-blue">
              <span className="text-vello-orange">ROAS</span> Calculator
            </h1>
            <p className="text-vello-dark-gray mt-2">
              Calcule o retorno sobre investimento em publicidade do seu e-commerce
            </p>
          </div>
        </FadeIn>
        
        <div className="mb-6 flex justify-center">
          <Link to="/tutorial" className="inline-block">
            <Button variant="outline" className="text-vello-blue">
              Precisa de ajuda? Acesse o Tutorial
            </Button>
          </Link>
        </div>
        
        <ROASCalculator />
        
        <FadeIn delay={700} className="text-center mt-8 text-white/80 text-sm">
          <p>© 2023 Vello. Todos os direitos reservados.</p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Calculator;
