
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/Animations/FadeIn";
import { Link } from "react-router-dom";

const Tutorial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vello-blue to-vello-blue/90 text-white">
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
              Tutorial da <span className="text-vello-orange">Calculadora ROAS</span>
            </h1>
          </div>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-vello-blue mb-4">Vídeo Tutorial</h2>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                className="w-full h-96 rounded-lg"
                src="https://www.youtube.com/embed/i1XUTocduE8"
                title="Tutorial da Calculadora ROAS"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-vello-blue mb-4">Glossário</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-vello-orange">ROAS</h3>
                <p className="text-vello-dark-gray">Return On Ad Spend (Retorno sobre Investimento em Publicidade) - É a métrica que indica quantos reais você ganha para cada real investido em publicidade. Um ROAS de 3 significa que para cada R$1 investido, você recebeu R$3 em receita.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-vello-orange">ROAS Ideal</h3>
                <p className="text-vello-dark-gray">O ROAS necessário para atingir o faturamento mínimo que cobrirá todos os custos e garantirá o EBITDA alvo desejado, considerando o investimento atual em publicidade.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-vello-orange">Faturamento Mínimo</h3>
                <p className="text-vello-dark-gray">O valor mínimo de vendas necessário para cobrir todos os custos fixos e variáveis e ainda alcançar o EBITDA alvo definido. É calculado com base na estrutura de custos e na margem de contribuição do seu negócio.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-vello-orange">Percentual de Investimento</h3>
                <p className="text-vello-dark-gray">O percentual do faturamento que é destinado para investimento em publicidade. É calculado dividindo o valor investido pelo faturamento total.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-vello-orange">EBITDA</h3>
                <p className="text-vello-dark-gray">Earnings Before Interest, Taxes, Depreciation and Amortization (Lucro antes de Juros, Impostos, Depreciação e Amortização) - Representa o lucro operacional do seu negócio antes de descontar os custos financeiros e impostos sobre o lucro.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-vello-orange">EBITDA Alvo</h3>
                <p className="text-vello-dark-gray">O percentual de EBITDA que você deseja atingir como meta para o seu negócio. Este valor é usado para calcular o faturamento mínimo necessário e o ROAS ideal.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-vello-orange">Margem de Contribuição</h3>
                <p className="text-vello-dark-gray">É o valor que sobra do faturamento depois de descontar todos os custos variáveis. Representa quanto cada venda contribui para cobrir os custos fixos e gerar lucro.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-vello-orange">Custos Variáveis</h3>
                <p className="text-vello-dark-gray">São custos que variam proporcionalmente ao volume de vendas, como frete, impostos, taxas de marketplace, taxas de cartão, etc.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-vello-orange">Custos Fixos</h3>
                <p className="text-vello-dark-gray">São custos que não dependem do volume de vendas e permanecem constantes independentemente do faturamento, como aluguel, salários da equipe, plataformas, etc.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Link to="/">
              <Button variant="outline" className="bg-white text-vello-blue hover:bg-white/80">
                Voltar para Início
              </Button>
            </Link>
            <Link to="/calculator">
              <Button className="bg-vello-orange text-white hover:bg-vello-orange/80">
                Ir para Calculadora
              </Button>
            </Link>
          </div>
        </div>
        
        <FadeIn delay={700} className="text-center mt-8 text-white/80 text-sm">
          <p>© 2023 Vello. Todos os direitos reservados.</p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Tutorial;
