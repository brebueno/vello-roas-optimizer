
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/Animations/FadeIn";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vello-blue to-vello-blue/90 text-vello-dark-gray">
      <div className="container py-12 px-4 md:py-16 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <div className="inline-block rounded-xl bg-white/90 backdrop-blur-sm shadow-soft px-8 py-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/139e9403-ec07-4c1f-85ce-8817c3af9ad0.png" 
                alt="Vello" 
                className="h-12 md:h-14"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-vello-blue mb-4">
              Calculadora <span className="text-vello-orange">ROAS</span>
            </h1>
            <p className="text-vello-dark-gray mb-6 max-w-3xl mx-auto text-lg">
              Uma ferramenta essencial para o controle eficiente do seu E-commerce, 
              permitindo uma evolução previsível e lucrativa de até 60%.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay={200} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold text-vello-blue mb-3">Controle Financeiro Preciso</h2>
            <p className="text-vello-dark-gray mb-4">
              Monitore todos os aspectos financeiros do seu e-commerce em um só lugar, 
              desde custos fixos e variáveis até o retorno sobre investimento em publicidade.
            </p>
            <div className="h-44 bg-vello-blue/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-vello-blue/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </FadeIn>
          
          <FadeIn delay={300} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold text-vello-blue mb-3">Decisões Baseadas em Dados</h2>
            <p className="text-vello-dark-gray mb-4">
              Obtenha insights imediatos sobre o desempenho do seu negócio e saiba exatamente 
              onde focar seus esforços para maximizar o crescimento.
            </p>
            <div className="h-44 bg-vello-blue/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-vello-blue/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={400} className="flex justify-center mt-12 space-x-4">
          <Link to="/tutorial">
            <Button className="bg-white text-vello-blue hover:bg-white/90 border border-vello-blue/20 px-6 py-6 h-auto text-lg">
              Tutorial
            </Button>
          </Link>
          <Link to="/calculator">
            <Button className="bg-vello-orange text-white hover:bg-vello-orange/90 px-6 py-6 h-auto text-lg">
              Iniciar Calculadora
            </Button>
          </Link>
        </FadeIn>
        
        <FadeIn delay={500} className="text-center mt-12 bg-white/80 backdrop-blur-sm rounded-lg p-4 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-vello-blue mb-2">Aumente sua Lucratividade em até 60%</h3>
          <p className="text-vello-dark-gray">
            Nossos clientes que utilizam a Calculadora ROAS regularmente conseguem 
            otimizar seus investimentos em marketing e aumentar a lucratividade de 
            forma previsível e sustentável.
          </p>
        </FadeIn>
        
        <FadeIn delay={600} className="text-center mt-16 text-white/80 text-sm">
          <p>© 2023 Vello. Todos os direitos reservados.</p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
