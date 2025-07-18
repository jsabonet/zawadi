
import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CreditCard, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

     console.log("handleSubmit disparado, formData:", formData);
    // Validação omitida (igual à sua)

    try {
      const response = await fetch('http://localhost:8000/api/enviar-mensagem/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Erro ao enviar mensagem.');
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone/WhatsApp',
      value: '+258 844 720 861',
  link: 'https://wa.me/258844720861?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@zawadidigital.com',
      link: 'mailto:contato@zawadidigital.com'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Maputo, Moçambique',
      link: '#'
    }
  ];

  const paymentMethods = [
    'M-Pesa',
    'e-Mola',
    'Transferência Bancária',
    'Depósito Bancário'
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-roboto">
            Pronto para transformar seu negócio? Fale conosco agora!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-roboto font-medium mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-roboto font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-roboto font-medium mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="+258 XX XXX XXXX"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-roboto font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Descreva seu projeto ou necessidade..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-600 text-white py-4 rounded-lg font-roboto font-medium text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <CheckCircle className="mr-2" size={20} />
                Enviar Mensagem
              </button>
            </form>

            <div className="mt-6 p-4 bg-whatsapp/10 rounded-lg">
              <p className="text-center text-gray-700 font-roboto">
                <strong>Prefere falar direto no WhatsApp?</strong>
              </p>
              <a
                href="https://wa.me/+258844720861?text=Olá! Gostaria de mais informações sobre os serviços da Zawadi Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-whatsapp hover:bg-whatsapp/90 text-white py-3 rounded-lg font-roboto font-medium transition-all duration-300 hover:scale-105 mt-3"
              >
                <MessageCircle className="inline mr-2" size={20} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-montserrat">{info.title}</h4>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          className="text-primary hover:text-primary-600 font-roboto transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-roboto">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat flex items-center">
                <CreditCard className="mr-3 text-primary" size={24} />
                Formas de Pagamento
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-gray-700 font-roboto">{method}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                <p className="text-gray-700 font-roboto text-sm">
                  <strong>Facilitamos o pagamento:</strong> Parcelamos em até 3x sem juros via M-Pesa para projetos acima de 10.000 MT.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
                Siga-nos nas Redes
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/649203998286784"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com/zawadidigital_oficial"
                  className="w-12 h-12 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  @
                </a>
                {/* <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  in
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
