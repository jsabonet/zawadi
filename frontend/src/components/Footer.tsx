
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Contato', id: 'contato' }
  ];

  const services = [
    'Desenvolvimento Web',
    'Marketing Digital',
    'Tráfego Pago',
    'Gestão de Redes Sociais',
    'E-commerce',
    'SEO Local'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-montserrat">Z</span>
              </div>
              <span className="text-2xl font-bold text-white font-montserrat">
                Zawadi Digital
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 font-roboto leading-relaxed max-w-md">
              Transformamos negócios em Moçambique através de soluções digitais acessíveis e eficazes. 
              Sua parceira ideal para crescer online com preços em meticais e atendimento local.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/649203998286784"
                className="w-10 h-10 bg-gray-800 hover:bg-primary text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com/zawadidigital_oficial"
                className="w-10 h-10 bg-gray-800 hover:bg-primary text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                @
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                in
              </a> */}
              <a
                href="https://wa.me/+258844720861?text=Olá! Gostaria de mais informações sobre os serviços da Zawadi Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-whatsapp hover:bg-whatsapp/80 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                W
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 font-roboto"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 font-roboto text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Strip */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-white mb-2 font-montserrat">Telefone</h4>
              <a
                href="https://wa.me/+258123456789"
                className="text-gray-300 hover:text-primary transition-colors font-roboto"
              >
                +258 844 720 861
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2 font-montserrat">Email</h4>
              <a
                href="mailto:contato@zawadidigital.co.mz"
                className="text-gray-300 hover:text-primary transition-colors font-roboto"
              >
                contacto@zawadidigital.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2 font-montserrat">Localização</h4>
              <span className="text-gray-300 font-roboto">Maputo, Moçambique</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-roboto text-center md:text-left">
              © {currentYear} Zawadi Digital. Todos os direitos reservados. 
              <span className="inline-flex items-center ml-2">
                Feito com <Heart className="mx-1 text-primary" size={14} /> para Moçambique
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm font-roboto">
                Aceitamos M-Pesa • e-Mola • Transferências
              </span>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary hover:bg-primary-600 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Voltar ao topo"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;