
import { Globe, Smartphone, TrendingUp, Package } from 'lucide-react';

const Services = () => {
  const webServices = [
    {
      title: 'Site Institucional Básico',
      price: '5.000 MT',
      description: '5 páginas responsivas com hospedagem por 1 ano incluída',
      features: ['Design responsivo', 'Hospedagem 1 ano', 'Domínio .co.mz', 'SSL grátis'],
      whatsappText: 'Quero o Site Institucional Básico por 5.000 MT'
    },
    {
      title: 'Site com SEO Otimizado',
      price: '8.000 MT',
      description: 'Site otimizado para Google com Analytics integrado',
      features: ['SEO local', 'Google Analytics', 'Velocidade otimizada', 'Suporte 3 meses'],
      whatsappText: 'Quero o Site com SEO por 8.000 MT'
    },
    {
      title: 'E-commerce Completo',
      price: '15.000 MT',
      description: 'Loja virtual completa com integração M-Pesa',
      features: ['Pagamento M-Pesa', 'Gestão de produtos', 'Painel admin', 'Treinamento'],
      whatsappText: 'Quero o E-commerce por 15.000 MT'
    }
  ];

  const marketingServices = [
    {
      title: 'Gestão Básica',
      price: '2.500 MT/mês',
      description: '8 posts mensais para Facebook e Instagram',
      features: ['8 posts/mês', 'Stories semanais', 'Hashtags locais', 'Relatório mensal'],
      whatsappText: 'Quero a Gestão Básica de Redes Sociais'
    },
    {
      title: 'Gestão Intermediária',
      price: '4.500 MT/mês',
      description: '12 posts + Stories diários + engagement',
      features: ['12 posts/mês', 'Stories diários', 'Resposta comentários', 'Design premium'],
      whatsappText: 'Quero a Gestão Intermediária de Redes Sociais'
    }
  ];

  const trafficServices = [
    {
      title: 'Campanha Básica',
      price: '3.000 MT/mês',
      description: 'Facebook Ads com segmentação local',
      features: ['Facebook Ads', 'Segmentação local', 'Relatórios semanais', 'Otimização'],
      whatsappText: 'Quero a Campanha Básica de Tráfego'
    },
    {
      title: 'Campanha Intermediária',
      price: '5.000 MT/mês',
      description: 'Facebook + Google Ads + remarketing',
      features: ['Facebook + Google', 'Remarketing', 'Landing pages', 'Consultoria'],
      whatsappText: 'Quero a Campanha Intermediária de Tráfego'
    }
  ];

  const packages = [
    {
      title: 'Pacote Iniciante',
      price: '9.000 MT',
      description: 'Site básico + 1 mês de redes sociais + tráfego',
      features: ['Site básico', '1 mês redes sociais', '1 mês tráfego', 'Setup completo'],
      whatsappText: 'Quero o Pacote Iniciante por 9.000 MT',
      popular: false
    },
    {
      title: 'Pacote Crescimento',
      price: '15.000 MT',
      description: 'Site SEO + 2 meses de redes sociais + tráfego',
      features: ['Site com SEO', '2 meses redes sociais', '2 meses tráfego', 'Treinamento'],
      whatsappText: 'Quero o Pacote Crescimento por 15.000 MT',
      popular: true
    }
  ];

  const ServiceCard = ({ title, price, description, features, whatsappText, popular = false }: any) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${popular ? 'ring-2 ring-primary scale-105' : ''}`}>
      {popular && (
        <div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Mais Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">{title}</h3>
      <div className="text-3xl font-bold text-primary mb-2 font-montserrat">{price}</div>
      <p className="text-gray-600 mb-4 font-roboto">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-gray-600 font-roboto">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`https://wa.me/+258844720861?text=${encodeURIComponent(whatsappText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-lg font-roboto font-medium transition-all duration-300 hover:scale-105 inline-block text-center"
      >
        Quero Este Serviço
      </a>
    </div>
  );

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-roboto">
            Soluções digitais completas para impulsionar seu negócio em Moçambique
          </p>
        </div>

        {/* Desenvolvimento Web */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Globe className="text-primary mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900 font-montserrat">Desenvolvimento Web</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Marketing Digital */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Smartphone className="text-secondary-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900 font-montserrat">Marketing Digital</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {marketingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Gestão de Tráfego */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="text-accent mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900 font-montserrat">Gestão de Tráfego</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trafficServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Pacotes Integrados */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Package className="text-primary mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900 font-montserrat">Pacotes Integrados</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6 font-roboto">
            Não encontrou o que procurava? Fale conosco para um orçamento personalizado!
          </p>
          <a
            href="https://wa.me/258844720861?text=Quero um orçamento personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-4 rounded-full font-roboto font-medium text-lg transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
