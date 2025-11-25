import { ExternalLink, Eye } from 'lucide-react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Portfolio = () => {
  const projects = [
    {
      title: 'Moz Solidária',
      category: 'Plataforma Social',
      description: 'Plataforma web completa para doações e ações solidárias em Moçambique. Sistema de gestão de campanhas e transparência total.',
      image: 'src/img/mozSolidaria.png',
      link: 'https://mozsolidaria.org',
      features: ['Plataforma completa', 'Gestão de campanhas', 'Sistema de doações', 'Dashboard administrativo'],
      deliveryTime: '21 dias'
    },
    {
      title: 'MutitiPay',
      category: 'Fintech + Sistema',
      description: 'Sistema de pagamentos digitais moderno e seguro. Integração com múltiplos métodos de pagamento para facilitar transações.',
      image: 'src/img/mutitPay.png',
      link: 'https://mutitpay.com',
      features: ['Gateway de pagamento', 'Multi-moedas', 'Segurança avançada', 'API integrada'],
      deliveryTime: '28 dias'
    },
    {
      title: 'LuraFarm',
      category: 'Agronegócio + E-commerce',
      description: 'Plataforma digital para agronegócio com e-commerce integrado. Conectando produtores e consumidores de forma eficiente.',
      image: 'src/img/luraFarm.png',
      link: 'https://lurafarm.com',
      features: ['E-commerce agrícola', 'Gestão de produtos', 'Sistema de pedidos', 'Dashboard produtor'],
      deliveryTime: '24 dias'
    },
    {
      title: 'Chiva Computer',
      category: 'E-commerce + Catálogo',
      description: 'Loja online profissional para produtos de informática. Catálogo completo com sistema de gestão de inventário.',
      image: 'src/img/chivaComputer.png',
      link: 'https://chivacomputer.co.mz',
      features: ['E-commerce completo', 'Gestão de inventário', 'Carrinho de compras', 'Sistema de pedidos'],
      deliveryTime: '18 dias'
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Proprietária - Loja Capulanas Mama África",
      image: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "O site da minha loja ficou perfeito! As vendas online aumentaram muito no primeiro mês. Recomendo muito a Zawadi Digital!"
    },
    {
      name: "João Machava",
      role: "CEO - GigaMoza Eletrônicos",
      image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Profissionais excelentes! Entregaram meu e-commerce no prazo e o suporte via WhatsApp é fantástico. Muito obrigado!"
    },
    {
      name: "Ana Silva",
      role: "Gerente - Restaurante Sabores de Moz",
      image: "https://images.unsplash.com/photo-1559172802-f5de3d1ed91d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "A estratégia de redes sociais transformou nosso negócio! O engajamento triplicou e as reservas aumentaram muito!"
    },
    {
      name: "Carlos Tembe",
      role: "Dono - Loja de Móveis Maputo",
      image: "https://images.unsplash.com/photo-1591470481729-2bcc11e3acb8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "O site ficou moderno e as campanhas de tráfego pago trouxeram muitos clientes novos. Investimento que valeu a pena!"
    },
    {
      name: "Beatriz Nunes",
      role: "Fundadora - Salão Beleza Africana",
      image: "https://plus.unsplash.com/premium_photo-1672872329531-48032850f466?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "A presença digital que criaram para meu salão foi incrível! Os agendamentos pelo site triplicaram em 2 meses."
    },
    {
      name: "Pedro Mukambo",
      role: "Diretor - Academia Akili Fitness",
      image: "https://images.unsplash.com/photo-1566165335512-bb5ba58365b4?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "O marketing digital revolucionou nossa academia! Conseguimos 200 novos alunos em apenas 3 meses. Excelente trabalho!"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Nossos Projetos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-roboto">
            Conheça alguns projetos que transformaram negócios em Moçambique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye size={32} />
                        <ExternalLink size={24} />
                      </div>
                    </div>
                  </a>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                    </div>
                  </>
                )}
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {project.deliveryTime}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 font-roboto text-sm">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-600 text-sm font-roboto">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 mb-16 text-white text-center">
          <h3 className="text-2xl font-bold mb-8 font-montserrat">Resultados que Falam por Si</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold font-montserrat">100+</div>
              <div className="text-sm font-roboto opacity-90">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-montserrat">95%</div>
              <div className="text-sm font-roboto opacity-90">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-montserrat">7</div>
              <div className="text-sm font-roboto opacity-90">Dias Médios de Entrega</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-montserrat">250%</div>
              <div className="text-sm font-roboto opacity-90">Aumento Médio de Vendas</div>
            </div>
          </div>
        </div>

        {/* Testimonials with Horizontal Scroll */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-montserrat">
            O que Nossos Clientes Dizem
          </h3>
          
          {/* Desktop hint */}
          <div className="hidden md:block text-center mb-4">
            <p className="text-gray-500 text-sm font-roboto">
              ← Deslize para ver mais depoimentos →
            </p>
          </div>

          {/* Mobile hint */}
          <div className="md:hidden text-center mb-4">
            <p className="text-gray-500 text-sm font-roboto">
              Deslize horizontalmente para ver mais
            </p>
          </div>

          <ScrollArea className="w-full">
            <div className="flex space-x-4 pb-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-none w-80 md:w-96">
                  <div className="bg-gray-50 p-6 rounded-xl h-full border hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-gray-900 font-roboto mb-3 text-sm leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="font-semibold text-primary font-montserrat text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 text-xs font-roboto">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary transition-colors duration-200"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
            Quer um projeto assim para seu negócio?
          </h3>
          <p className="text-gray-600 mb-6 font-roboto">
            Fale conosco e descubra como podemos transformar sua presença digital!
          </p>
          <a
            href="https://wa.me/+258844720861?text=Quero um projeto como os do portfólio!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-4 rounded-full font-roboto font-medium text-lg transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            Fale Conosco Agora
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;