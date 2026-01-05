'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ChatBot from '../components/ChatBot';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcMinus3 = new Date(now.getTime() - (3 * 60 * 60 * 1000));
      const hours = String(utcMinus3.getUTCHours()).padStart(2, '0');
      const minutes = String(utcMinus3.getUTCMinutes()).padStart(2, '0');
      const seconds = String(utcMinus3.getUTCSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds} UTC-3`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-10 lg:py-14" style={{background: 'linear-gradient(to top, #000000, #dc2626)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src="/group 24.png" 
                  alt="Logo Executivo Rocha"
                  className="h-32 md:h-40 lg:h-48 w-auto"
                />
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Escale o seu Império sem entregar as Chaves.
              </h1>
              {/* Cache refresh */}
              <p className="text-lg md:text-small lg:text-2xl font-bold text-gray-300 mb-6 leading-relaxed">
              Implementamos arquiteturas financeiras de alta performance via Tokenização. Capte recursos globais com autonomia total, segurança jurisdicional em Dubai ou Cayman e zero diluição societária desnecessária.
              </p>
              <a href="https://wa.me/message/GQRD6T6PCSMFF1" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors inline-block">
                <div className="flex items-center space-x-2">
                  <span>Agendar Consultoria</span>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full h-[380px] md:h-[460px] lg:h-[520px] rounded-lg shadow-xl overflow-hidden flex items-end">
                  {/* Mobile image (only) */}
                  <Image
                    src="/Frame 1 (1).png"
                    alt="Executivo Rocha - Seu parceiro de confiança"
                    width={1040}
                    height={520}
                    className="w-full h-full object-contain object-bottom block md:hidden"
                    sizes="100vw"
                    priority
                  />
                  {/* Desktop/tablet image (updated image) */}
                  <Image
                    src="/ROCHA.png"
                    alt="Executivo Rocha - Seu parceiro de confiança"
                    width={1040}
                    height={520}
                    className="w-full h-full object-contain object-bottom hidden md:block"
                    sizes="(max-width: 1024px) 50vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema (A Dor do Dono) Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              O Problema (A Dor do Dono)
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem à esquerda */}
            <div className="relative">
              <img 
                src="/capital-privado-1.jpg" 
                alt="Capital Privado" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            
            {/* Texto à direita */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                O capital tradicional é caro, lento e viciado em controle.
              </p>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong></strong> Para o empresário comum, o caminho é o banco ou o Venture Capital. Para o visionário, esses caminhos são armadilhas:
                </p>
                <div className="space-y-3">
                  <p>
                    <strong>Bancos:</strong> Burocracia paralisante e juros que corroem a margem.
                  </p>
                  <p>
                    <strong>Venture Capital:</strong> Você levanta dinheiro, mas perde o comando da sua própria visão. No Brasil e no Paraguai, a asfixia regulatória impede a velocidade que o seu negócio exige. Nós rompemos esse teto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Solução Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEÇÃO – NOSSA SOLUÇÃO (A ENGENHARIA) */}
          <div className="mb-20 mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                NOSSA SOLUÇÃO (A ENGENHARIA)
              </h2>
            </div>
            
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left Column - Image */}
              <div className="relative w-full md:w-auto">
                <img 
                  src="1750719338549.png" 
                  alt="Nossa Solução - A Engenharia" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              
              {/* Right Column - Content */}
              <div className="space-y-6 w-full md:w-auto">
                {/* Redline */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg shadow-sm">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    Arquitetura de Capital Soberana: Onde a Tecnologia encontra a Estratégia Legal.
                  </h3>
                </div>

                {/* Copy */}
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Não entregamos apenas código; entregamos uma nova fundação para o seu crescimento. Criamos ecossistemas de Utility Tokens que transformam sua tese de negócio em um ativo líquido e global.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="font-semibold text-gray-900 mb-6 text-xl">A tríade do sucesso:</p>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">Blindagem Jurisdicional:</h4>
                          <p className="text-gray-700">Operação estruturada fora do alcance de instabilidades locais.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">Eficiência de Fluxo:</h4>
                          <p className="text-gray-700">Captar direto da fonte, sem intermediários mordendo sua margem.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">Preservação de Equity:</h4>
                          <p className="text-gray-700">Financie sua expansão sem vender pedaços da sua empresa.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVIÇOS DE ALTA PERFORMANCE Section */}
          <section className="py-20 bg-gray-50 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Image */}
                <div className="relative">
                  <img 
                    src="/WhatsApp Image 2026-01-05 at 16.26.05.jpeg" 
                    alt="Serviços de Alta Performance" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
                
                {/* Right Column - Content */}
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                    SERVIÇOS DE ALTA PERFORMANCE
                  </h2>
                  
                  <div className="space-y-6">
                    {/* 1. Engenharia Jurisdicional & Offshores */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Engenharia Jurisdicional & Offshores</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Não é apenas "abrir uma empresa". É escolher o campo de batalha. Estruturamos sua operação em Dubai, Cayman ou EUA, garantindo que o enquadramento do token seja blindado e otimizado fiscalmente.
                        </p>
                      </div>
                    </div>

                    {/* 2. Tokenomics de Precisão */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Tokenomics de Precisão</h3>
                        <p className="text-gray-700 leading-relaxed">
                          O token deve ser o combustível do seu ecossistema. Desenhamos a mecânica econômica para garantir escassez, utilidade real e sustentabilidade de longo prazo. Se o token não gera valor ao negócio, ele não serve.
                        </p>
                      </div>
                    </div>

                    {/* 3. Estruturação de Captação High-End */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Estruturação de Captação High-End</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Transformamos seu projeto em uma tese de investimento irresistível. Criamos a narrativa institucional e a infraestrutura técnica para que grandes players e investidores estratégicos entrem no jogo com segurança.
                        </p>
                      </div>
                    </div>

                    {/* 4. Real Estate & Hard Assets */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate & Hard Assets</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Para quem tem lastro real no Brasil ou Paraguai. Transformamos tijolo e terra em ativos digitais ágeis. Liquidez para o que antes era imóvel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PARA QUEM É Section */}
          <section className="py-20 bg-gray-50 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  PARA QUEM É
                </h2>
              </div>
              
              <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Left Column - Image */}
                <div className="relative w-full md:w-auto">
                  <img 
                    src="/empresas-com-mais-bitcoin-v0-56zx3ntaq7id1.webp" 
                    alt="Para Quem É" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
                
                {/* Right Column - Content */}
                <div className="space-y-6 w-full md:w-auto">
                  {/* Redline */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg shadow-sm">
                    <h3 className="text-2xl md:text-2xl font-bold text-gray-900 leading-tight">
                      Para quem joga o jogo do Longo Prazo.
                    </h3>
                  </div>

                  {/* Copy */}
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p className="font-semibold text-gray-900 mb-4">Não trabalhamos com apostas. Trabalhamos com:</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <span className="text-gray-800 font-medium">Incorporadoras que buscam financiar obras sem a trava dos bancos.</span>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <span className="text-gray-800 font-medium">Holdings que precisam de agilidade na movimentação de capital.</span>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <span className="text-gray-800 font-medium">Empresas em Escala que faturam no Real/Guarani, mas pensam em Dólar.</span>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">4</span>
                        </div>
                        <span className="text-gray-800 font-medium">Visionários que entenderam que a centralização financeira é o maior risco do século XXI.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DIFERENCIAL Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  DIFERENCIAL
                </h2>
              </div>
              
              <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Left Column - Image */}
                <div className="relative w-full md:w-auto">
                  <img 
                    src="/areas-de-atuação-direito-empresarial.jpg" 
                    alt="Diferencial" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
                
                {/* Right Column - Content */}
                <div className="space-y-6 w-full md:w-auto">
                  {/* Redline */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg shadow-sm">
                    <h3 className="text-2xl md:text-2xl font-bold text-gray-900 leading-tight">
                      Nós não somos uma agência de tecnologia. Somos seus parceiros de estrutura.
                    </h3>
                  </div>

                  {/* Copy */}
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Enquanto programadores focam em linhas de código, nós focamos na sua viabilidade jurídica e comercial. Nossa equipe une o rigor do Direito Internacional com a agressividade da Estratégia de Vendas.
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="font-semibold text-gray-900 mb-4"></p>
                      
                      <div className="space-y-3">
                        <p className="text-gray-800 font-medium"></p>
                        <p className="text-gray-800 font-medium"></p>
                        <p className="text-gray-800 font-medium"></p>
                        <p className="text-gray-800 font-medium"></p>
                        <p className="text-gray-800 font-medium"></p>
                      </div>
                    </div>
                    
                    <p className="text-xl font-semibold text-gray-900 mt-6">
                      O token é o meio. A liberdade financeira e operacional da sua empresa é o fim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA FINAL (FECHAMENTO EXECUTIVO) Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  CTA FINAL (FECHAMENTO EXECUTIVO)
                </h2>
              </div>
              
              <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Left Column - Image */}
                <div className="relative w-full md:w-auto">
                  <img 
                    src="/WhatsApp Image 2026-01-05 at 17.42.55.jpeg" 
                    alt="CTA Final" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
                
                {/* Right Column - Content */}
                <div className="space-y-6 w-full md:w-auto">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    A próxima fase da sua expansão começa com um aperto de mão estratégico.
                  </p>
                  
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p className="font-semibold text-gray-900"></p>
                    <p>
                      Estruturas de capital de elite não são feitas em série. Elas são desenhadas sob medida. Vamos analisar a viabilidade do seu projeto, a jurisdição ideal e o potencial de captação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>


      {/* CTA FINAL Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Redline */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Toda estrutura começa com uma decisão estratégica.
            </h2>
          </div>

          {/* Copy */}
          <div className="space-y-6 text-lg text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-white">
              Cada empresa exige uma arquitetura própria.
            </p>
            <p>
              A análise inicial define jurisdição, modelo de token, riscos e viabilidade.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <a 
              href="https://wa.me/message/GQRD6T6PCSMFF1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors shadow-xl inline-block transform hover:scale-105 transition-transform"
            >
              Agendar Análise Estrutural Confidencial
            </a>
          </div>
        </div>
      </section>

      {/* Nossos Canais Oficiais Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Canais Oficiais
              </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Para sua segurança e tranquilidade, siga nossas contas oficiais e junte-se a milhares de 
              clientes já conectados conosco.
              </p>
            </div>
            
          {/* Social Media Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {/* TikTok */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Siga-nos</h3>
              <p className="text-gray-500 text-sm mb-6">@executivorocha</p>
              <a href="https://www.tiktok.com/@executivorocha" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full inline-block text-center">
                Seguir
                </a>
              </div>
              
              {/* YouTube */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-red-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Siga-nos</h3>
              <p className="text-gray-500 text-sm mb-6">@executivorocha</p>
              <a href="https://youtube.com/@executivorocha" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full inline-block">
                Inscrever-se
                </a>
              </div>
              
              {/* Instagram */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Siga-nos</h3>
              <p className="text-gray-500 text-sm mb-6">@executivorocha</p>
              <a href="https://www.instagram.com/executivorocha" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full inline-block">
                Seguir
                </a>
              </div>
          </div>
          
          {/* Verification Badge */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-red-600 font-semibold text-sm">Contas Oficiais Verificadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* WhatsApp CTA */}
          <div className="text-center mb-12">
            <a href="https://wa.me/message/GQRD6T6PCSMFF1" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-16 py-4 rounded-full font-semibold text-lg flex items-center mx-auto transition-colors inline-block min-w-[320px]">
              <div className="flex items-center space-x-4 w-full justify-center">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="whitespace-nowrap">Fale Conosco no Whatsapp</span>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <p className="text-gray-300 mt-4 text-sm">
              Avaliação gratuita • Sem compromisso • Orientação especializada
            </p>
          </div>

          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Fora de Atendimento */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                FORA DE ATENDIMENTO
              </h4>
              <div className="space-y-3">
                <div className="text-gray-300">
                  <p className="text-sm">Segunda a sexta-feira</p>
                  <p className="text-sm">09:00 - 12:00 | 13:30 - 18:00</p>
                </div>
                <div className="bg-slate-700 rounded-lg px-4 py-3">
                  <div className="flex items-center text-blue-400 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {currentTime || 'Carregando...'}
                  </div>
                </div>
              </div>
            </div>
            
            
            {/* Endereços */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                ENDEREÇOS
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-white font-semibold text-sm mb-2">Nosso Escritório no Paraguai</h5>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Rua calle Picuiba 07 area 3 cidade del este PY
                  </p>
                </div>
                <div>
                  <h5 className="text-white font-semibold text-sm mb-2">Ruc 8798953-0</h5>

                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://youtube.com/@executivorocha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@executivorocha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/executivorocha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Warning Message */}
          <div className="text-center mb-8">
            <p className="text-gray-300 text-sm font-medium">
              Atenção: Estes são nossos únicos canais oficiais.
            </p>
            <p className="text-gray-400 text-sm">
              Desconfie de perfis falsos ou golpes.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025   - Todos os direitos reservados.</p>
            <p className="mt-1">Parte do Grupo Executivo Rocha</p>
          </div>
        </div>
      </footer>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
