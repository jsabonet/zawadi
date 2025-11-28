import { ArrowRight, Smartphone, TrendingUp, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-montserrat leading-tight" itemProp="name">
              Transforme seu Negócio com{' '}
              <span className="text-primary">Soluções Digitais</span>{' '}
              em Moçambique!
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-roboto" itemProp="description">
              Agência digital especializada em desenvolvimento web, e-commerce e marketing digital. Sites profissionais em 7 dias
              <span className="font-semibold text-primary"> a partir de 5.000 MT</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="https://wa.me/+258844720861?text=Quero%20um%20site%20por%205000%20MT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-4 rounded-full font-roboto font-medium text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Crie agora
                <ArrowRight className="ml-2" size={20} />
              </a>
              
              <button
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-roboto font-medium text-lg transition-all duration-300"
              >
                Ver Serviços
              </button>
            </div>

            {/* Services Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 font-montserrat">Desenvolvimento Web</h3>
                <p className="text-gray-600 text-sm font-roboto">Sites profissionais a partir de 5.000 MT</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-secondary-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 font-montserrat">Marketing Digital</h3>
                <p className="text-gray-600 text-sm font-roboto">Gestão de redes sociais desde 2.500 MT/mês</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 font-montserrat">Tráfego Pago</h3>
                <p className="text-gray-600 text-sm font-roboto">Campanhas eficazes desde 3.000 MT/mês</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://res.cloudinary.com/dtdcefrf1/image/upload/v1752878600/good-faces2_pr7tjn.jpg"
              alt="Equipe de desenvolvimento digital trabalhando"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-whatsapp rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">+100</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 font-montserrat">Clientes Satisfeitos</p>
                  <p className="text-gray-600 text-sm font-roboto">Em todo Moçambique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;