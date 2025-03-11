
import { ROASCalculator } from "@/components/Calculator/ROASCalculator";
import { FadeIn } from "@/components/Animations/FadeIn";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vello-blue to-vello-blue/90 text-vello-dark-gray">
      <div className="container py-8 md:py-12">
        <FadeIn className="text-center mb-8">
          <div className="inline-block rounded-xl bg-white/90 backdrop-blur-sm shadow-soft px-6 py-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-vello-blue">
              Vello <span className="text-vello-orange">ROAS</span> Calculator
            </h1>
            <p className="text-vello-dark-gray mt-2">
              Calcule o retorno sobre investimento em publicidade do seu e-commerce
            </p>
          </div>
        </FadeIn>
        
        <ROASCalculator />
        
        <FadeIn delay={700} className="text-center mt-8 text-white/80 text-sm">
          <p>© 2023 Vello. Todos os direitos reservados.</p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Index;
