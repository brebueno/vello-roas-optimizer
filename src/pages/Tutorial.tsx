
import { FadeIn } from "@/components/Animations/FadeIn";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Tutorial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vello-blue to-vello-blue/90 text-vello-dark-gray">
      <div className="container py-8 md:py-12 px-4 max-w-5xl mx-auto">
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
              <span className="text-vello-orange">Tutorial</span> da Calculadora
            </h1>
            <p className="text-vello-dark-gray mt-2">
              Aprenda a utilizar a calculadora ROAS para maximizar seus resultados
            </p>
          </div>
        </FadeIn>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-soft mb-10">
          <FadeIn delay={100}>
            <h2 className="text-2xl font-semibold text-vello-blue mb-4">Vídeo Explicativo</h2>
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/i1XUTocduE8" 
                title="Tutorial da Calculadora ROAS" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-vello-dark-gray mb-4">
              Este vídeo explica detalhadamente como utilizar a Calculadora ROAS para obter os melhores resultados
              para o seu negócio.
            </p>
          </FadeIn>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-soft mb-10">
          <FadeIn delay={200}>
            <h2 className="text-2xl font-semibold text-vello-blue mb-4">Glossário de Termos</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-medium text-vello-blue mb-2">ROAS</h3>
                <p className="text-sm text-vello-dark-gray">
                  <strong>Return On Ad Spend</strong> - Métrica que mede o retorno gerado para cada real investido em publicidade.
                  Um ROAS de 3 significa que para cada R$1 investido, você obteve R$3 em receita.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-medium text-vello-blue mb-2">EBITDA</h3>
                <p className="text-sm text-vello-dark-gray">
                  <strong>Earnings Before Interest, Taxes, Depreciation and Amortization</strong> - Representa o lucro operacional
                  antes dos juros, impostos, depreciação e amortização. Indica a eficiência e performance operacional da empresa.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-medium text-vello-blue mb-2">Percentual de Investimento</h3>
                <p className="text-sm text-vello-dark-gray">
                  Representa quanto do seu faturamento está sendo investido em publicidade. 
                  É calculado dividindo o valor investido pelo faturamento total.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-medium text-vello-blue mb-2">Margem de Contribuição</h3>
                <p className="text-sm text-vello-dark-gray">
                  Valor que resta do preço de venda após subtrair os custos variáveis. Representa quanto cada venda 
                  contribui para cobrir os custos fixos e gerar lucro.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-medium text-vello-blue mb-2">Markup</h3>
                <p className="text-sm text-vello-dark-gray">
                  Valor adicionado ao custo de um produto para determinar seu preço de venda.
                  Representa a diferença entre o custo do produto e seu preço final.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-medium text-vello-blue mb-2">Custos Fixos</h3>
                <p className="text-sm text-vello-dark-gray">
                  Despesas que permanecem inalteradas independentemente do volume de vendas,
                  como aluguel, salários, e assinaturas de softwares.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-medium text-vello-blue mb-2">Custos Variáveis</h3>
                <p className="text-sm text-vello-dark-gray">
                  Despesas que mudam de acordo com o volume de vendas, como frete, 
                  comissões e taxas de processamento de pagamentos.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-soft mb-10">
          <FadeIn delay={300}>
            <h2 className="text-2xl font-semibold text-vello-blue mb-4">Como Usar a Calculadora</h2>
            
            <ol className="list-decimal pl-6 space-y-4 mb-6">
              <li className="text-vello-dark-gray">
                <strong>Preencha os dados de investimento</strong>: Insira o valor investido em publicidade 
                e a calculadora mostrará automaticamente o percentual sobre o faturamento.
              </li>
              <li className="text-vello-dark-gray">
                <strong>Insira o faturamento real</strong>: Adicione o valor total de vendas realizadas no período analisado.
              </li>
              <li className="text-vello-dark-gray">
                <strong>Preencha os custos variáveis</strong>: Insira os percentuais ou valores de custos que 
                variam de acordo com as vendas (frete, impostos, taxas, etc).
              </li>
              <li className="text-vello-dark-gray">
                <strong>Adicione os custos fixos</strong>: Coloque todos os custos que não dependem do volume de vendas.
              </li>
              <li className="text-vello-dark-gray">
                <strong>Analise os resultados</strong>: Verifique o ROAS final e o EBITDA para 
                avaliar a eficiência do seu investimento em publicidade.
              </li>
            </ol>
            
            <div className="bg-vello-blue/10 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-vello-blue mb-2">Dica Importante</h3>
              <p className="text-sm text-vello-dark-gray">
                Um ROAS saudável geralmente deve ser acima de 3, indicando que para cada real investido, 
                você obtém 3 reais em receita. Se seu ROAS estiver abaixo de 2, considere revisar sua 
                estratégia de publicidade para melhorar a eficiência dos seus investimentos.
              </p>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={400} className="flex justify-center mt-8 mb-10">
          <Link to="/calculator">
            <Button className="bg-vello-orange text-white hover:bg-vello-orange/90 px-6 py-6 h-auto text-lg">
              Ir para a Calculadora
            </Button>
          </Link>
        </FadeIn>
        
        <FadeIn delay={500} className="text-center mt-8 text-white/80 text-sm">
          <p>© 2023 Vello. Todos os direitos reservados.</p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Tutorial;
