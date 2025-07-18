
import { CheckCircle, Clock, MapPin, Headphones } from 'lucide-react';

const About = () => {
  const differentials = [
    {
      icon: Clock,
      title: 'Entrega em 7 dias',
      description: 'Projetos rápidos sem comprometer a qualidade'
    },
    {
      icon: MapPin,
      title: 'Preços acessíveis',
      description: 'Valores em meticais com parcelamento M-Pesa'
    },
    {
      icon: Headphones,
      title: 'Atendimento local',
      description: 'Suporte via WhatsApp em português'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 font-roboto leading-relaxed">
              Na Zawadi Digital, transformamos o sucesso de Pequenas e Médias Empresas moçambicanas com soluções digitais acessíveis. Oferecemos sites que atraem clientes, gestão de redes sociais que engaja e tráfego pago que aumenta vendas, com pacotes sob medida para cada negócio. Entregamos projetos em até 7 dias, com suporte imediato via WhatsApp e pagamento fácil via M-Pesa.
            </p>
            
            <p className="text-lg text-gray-600 font-roboto leading-relaxed">
              Nosso foco é criar uma presença online forte, destacando seus produtos e gerando resultados reais, enquanto você economiza tempo. Escolha o pacote ideal para sua empresa e deixe-nos ajudá-lo a crescer digitalmente com a Zawadi Digital!
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
                Por que escolher a Zawadi Digital?
              </h3>
              <div className="space-y-3">
                {differentials.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-montserrat">{item.title}</h4>
                      <p className="text-gray-600 text-sm font-roboto">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left">
              <button
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-full font-roboto font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
              >
                Conheça Nossos Serviços
                <CheckCircle className="ml-2" size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Joel - Desenvolvedor Fullstack"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            
            {/* Testimonials */}
            <div className="absolute -bottom-8 left-4 right-4 bg-white p-4 rounded-xl shadow-xl">
              <div className="flex items-start space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cliente Maria"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 font-medium font-roboto text-sm">
                    "Excelente trabalho! Meu site ficou perfeito e as vendas aumentaram 300%."
                  </p>
                  <p className="text-gray-600 text-xs font-roboto mt-1">
                    - Maria, Loja de Celulares
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
