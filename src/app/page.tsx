'use client';

import { useState, useEffect } from 'react';
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
                  src="/Logo_Executivo_Rocha__2_-removebg-preview__3___1_-removebg-preview.png" 
                  alt="Logo Executivo Rocha"
                  className="h-32 md:h-40 lg:h-48 w-auto"
                />
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Seu Parceiro de Confiança para Negócios e Imigração no Paraguai: Transforme Sua Vida com Segurança e Apoio Total
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
              Deixe sua mudança, negócio ou investimento no Paraguai nas mãos de quem entrega resultados de verdade.
Nossa equipe é composta por especialistas experientes, com histórico comprovado em tornar processos seguros, ágeis e 100% dentro da lei.
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
                <div className="w-full h-[520px] rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="1759104394510-removebg-preview.png" 
                    alt="Executivo Rocha - Seu parceiro de confiança"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Mais Buscados Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos serviços mais procurados por estrangeiros que escolhem o Paraguai
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Residência Temporária */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Residência Temporária</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Processo rápido e descomplicado para viver legalmente no Paraguai
              </p>
            </div>
            
            {/* Identidade Paraguaia */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Identidade Paraguaia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Documento oficial paraguaio válido por 10 anos
              </p>
            </div>
            
            {/* Abrir Empresa PY */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Abrir Empresa PY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Constituição de EAS com Hub de Negócios completo
              </p>
            </div>
            
            {/* Consultoria Marlon */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Consultoria </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Orientação especializada personalizada para seu caso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução Completa Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Globe Icon */}
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 max-w-4xl mx-auto leading-tight">
              Somos a solução completa para imigrantes, aposentados, investidores e nômades digitais no Paraguai
            </h2>
            
             <div className="bg-red-50 border-l-4 border-red-500 p-6 max-w-4xl mx-auto mb-12">
               <p className="text-black text-lg">
                 Tudo que você precisa em um único lugar para realizar seus objetivos de imigração, investimento ou abertura de empresa no Paraguai.
               </p>
               </div>
            </div>
            
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Imigração e Residência */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
              </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Imigração e Residência</h3>
                  <p className="text-gray-600 text-sm">Solicitação e acompanhamento do processo de imigração no Paraguai.</p>
              </div>
            </div>
            
              {/* Emissão da Cédula de Identidade */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
              </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Emissão da Cédula de Identidade</h3>
                  <p className="text-gray-600 text-sm">Documento oficial paraguaio que permite a abertura da empresa e demais registros.</p>
            </div>
            </div>
            
              {/* Abertura da Empresa EAS */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
              </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Abertura da Empresa EAS</h3>
                  <p className="text-gray-600 text-sm">Constituição da sua empresa no Paraguai, vinculada ao nosso endereço fiscal e postal.</p>
            </div>
          </div>
              
              {/* Cadastro Fiscal e Tributário */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
            </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Cadastro Fiscal e Tributário</h3>
                  <p className="text-gray-600 text-sm">Registro da empresa nos órgãos competentes, garantindo legalidade e conformidade.</p>
            </div>
            </div>
              
              {/* Regularização Contábil da Pessoa Física */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
            </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Regularização Contábil da Pessoa Física</h3>
                  <p className="text-gray-600 text-sm">Organização da sua contabilidade pessoal, incluindo residência fiscal.</p>
            </div>
          </div>
        </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Integração Contábil PF + PJ */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Integração Contábil PF + PJ</h3>
                  <p className="text-gray-600 text-sm">Combinação da contabilidade da pessoa física e da empresa em um único ambiente.</p>
                </div>
              </div>

              {/* Ativação do Portal GuiaParaguai */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Ativação do Portal GuiaParaguai</h3>
                  <p className="text-gray-600 text-sm">Liberação de acesso ao sistema exclusivo para gestão empresarial e pessoal.</p>
                </div>
              </div>

              {/* Operações Fiscais Online */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Operações Fiscais Online</h3>
                  <p className="text-gray-600 text-sm">Emissão de invoices, notas fiscais, envio de despesas e documentos à contabilidade.</p>
                </div>
              </div>

              {/* Declarações Obrigatórias */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Declarações Obrigatórias</h3>
                  <p className="text-gray-600 text-sm">Declarações mensais do IVA (Formulário 120), IRP anual e IRE anual.</p>
              </div>
            </div>

              {/* Manutenção e Suporte Contínuo */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Manutenção e Suporte Contínuo</h3>
                  <p className="text-gray-600 text-sm">Acompanhamento permanente para ajustes fiscais, suporte a dúvidas e novos serviços.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade e Confiança Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Autoridade e Confiança: Histórico Comprovado
            </h2>
            <div className="mb-6">
              <span className="text-green-600 font-bold text-lg">Zero reclamações</span>
              <span className="text-gray-700 text-lg"> no Reclame Aqui, Consumidor.gov e </span>
              <span className="text-blue-600 font-bold text-lg">PROCON</span>
              <span className="text-gray-700 text-lg">:</span>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
              Transparência e confiança são os pilares do nosso negócio. Em mais de uma década de 
              atuação, nunca tivemos uma única reclamação registrada nos principais canais oficiais de 
              defesa do consumidor no Brasil. Nossa reputação impecável é o reflexo do nosso 
              compromisso com a excelência e a satisfação de cada cliente.
            </p>
          </div>
          
          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {/* Reclame Aqui */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RA</span>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Verificada por</h3>
              <h4 className="text-lg font-bold text-yellow-600 mb-4">ReclameAQUI</h4>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
                <span className="text-green-600 font-semibold text-sm">Zero Reclamações</span>
              </div>
            </div>
            
            {/* Consumidor.gov */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">gov.br</span>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">consumidor</h3>
              <h4 className="text-lg font-bold text-green-600 mb-4">gov.br</h4>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
                <span className="text-green-600 font-semibold text-sm">Zero Reclamações</span>
              </div>
            </div>
            
            {/* PROCON */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
              </div>
            </div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">PROCON</h3>
              <h4 className="text-lg font-bold text-blue-600 mb-4">Certificado</h4>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
          </div>
                <span className="text-green-600 font-semibold text-sm">Zero Reclamações</span>
        </div>
            </div>
          </div>
          
          {/* Bottom Quote */}
          <div className="text-center">
            <p className="text-gray-500 italic text-lg max-w-2xl mx-auto">
              Nossa reputação fala por si — do nosso primeiro cliente até hoje.
            </p>
          </div>
        </div>
      </section>

      {/* Especialistas Exclusivos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header Badge */}
            <div className="mb-8">
              <div className="inline-block bg-blue-100 text-red-600 px-6 py-2 rounded-full text-sm font-semibold mb-8">
                PY 100% FOCADOS NO PARAGUAI
                  </div>
                </div>
                
            {/* Main Title */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Especialistas Exclusivos em Paraguai. Nada de Terceirização.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Enquanto concorrentes genéricos oferecem vários países através de terceiros desconhecidos, 
                somos 100% focados no Paraguai com equipe própria, escritório próprio, frota própria e 
                contadores próprios. Isso significa preços competitivos, atualização constante das leis 
                paraguaias e acompanhamento real em todas as etapas.
              </p>
                </div>
                
            {/* Nossos Diferenciais */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-12">Nossos Diferenciais:</h3>
              
              <div className="space-y-8 max-w-2xl mx-auto text-left">
                {/* Equipe 100% Própria */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Equipe 100% Própria no Paraguai</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Nenhum processo é terceirizado. Nossos profissionais estão diretamente conectados com você.
                    </p>
                  </div>
                </div>
                
                {/* Especialização Exclusiva */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Especialização Exclusiva</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Vivemos e respiramos legislação paraguaia 24/7. Não tentamos ser especialistas em 10 países.
                    </p>
              </div>
            </div>
            
                {/* Preço Final Transparente */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
            <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Preço Final Transparente</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Sem intermediários que inflacionam custos. O preço que você vê é o preço que você paga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transporte Exclusivo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Header Badge */}
            <div className="inline-block bg-blue-100 text-red-600 px-6 py-2 rounded-full text-sm font-semibold mb-8">
              ✓ FROTA PRÓPRIA
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-red-600">Transporte Exclusivo</span>
              <span className="text-gray-900"> para Sua Imigração</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
              <span className="text-red-600 font-semibold">Frota própria completa</span> com motoristas especializados para 
              acompanhar você em todo o processo migratório
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-8">
                Nós oferecemos frota própria com acompanhamento personalizado em cada 
                etapa do seu processo migratório.
              </p>
              
              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {/* Transfer Porta do Hotel */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Transfer Porta do Hotel</h4>
                    <p className="text-gray-600 text-sm">Buscamos você na porta do seu hotel e levamos de volta com total conforto</p>
                </div>
                </div>
                
                {/* Acompanhamento em Todos os Órgãos */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Acompanhamento em Todos os Órgãos</h4>
                    <p className="text-gray-600 text-sm">Migraciones, Identificaciones, Interpol, Polícia Nacional de Informática</p>
              </div>
            </div>
            
                {/* Carteira de Motorista */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Carteira de Motorista</h4>
                    <p className="text-gray-600 text-sm">Levamos você para fazer sua habilitação paraguaia com segurança</p>
                  </div>
                </div>
                
                {/* Transfer Aeroporto / Hotel */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                      </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Transfer Aeroporto / Hotel</h4>
                    <p className="text-gray-600 text-sm">Serviço completo de translado do aeroporto para seu hotel e vice-versa</p>
                    </div>
                  </div>
                </div>

              {/* Features List */}
              <div className="bg-red-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                    <span className="text-blue-900 font-medium text-sm">3 carros próprios modernos</span>
                </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
              </div>
                    <span className="text-blue-900 font-medium text-sm">Ar-condicionado em todos os veículos</span>
            </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-900 font-medium text-sm">Motoristas profissionais treinados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-900 font-medium text-sm">Especialistas no território paraguaio</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Vehicle Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <img 
                    src="/1759668940708.jpg" 
                    alt="Frota própria - Veículos modernos para transporte exclusivo"
                    className="w-full h-[500px] object-contain rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600 text-sm font-medium">Fotos reais da nossa frota</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-red-500/10 rounded-full"></div>
                <div className="absolute bottom-4 left-8 w-12 h-12 bg-blue-600/10 rounded-full"></div>
              </div>
            </div>
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
              brasileiros já conectados conosco.
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

      {/* Portal App Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tudo na palma da sua mão
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gerencie sua vida empresarial e pessoal no Paraguai de qualquer lugar do mundo
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Badge */}
              <div className="inline-block bg-blue-100 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold mb-8">
                📱 Acompanhamento em tempo real
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Seu processo de imigração sempre sob controle
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Receba notificações instantâneas sobre cada etapa do seu processo. 
                Desde a residência temporária até a permanente, você nunca ficará perdido.
              </p>
              
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Notificações push sobre cada atualização</span>
            </div>
            
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Linha do tempo visual do processo</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Documentos organizados e acessíveis</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Phone Mockup */}
            <div className="relative flex justify-center">
            <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[640px] bg-gradient-to-b from-gray-800 to-black rounded-[3.5rem] p-3 shadow-2xl">
                  {/* Dynamic Island */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-10"></div>
                  
                  <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-4 bg-white relative z-20">
                      <span className="text-sm font-semibold text-gray-900">9:41</span>
                      <div className="flex items-center space-x-1">
                        {/* Signal bars */}
                        <div className="flex items-end space-x-0.5">
                          <div className="w-1 h-2 bg-gray-900 rounded-full"></div>
                          <div className="w-1 h-3 bg-gray-900 rounded-full"></div>
                          <div className="w-1 h-4 bg-gray-900 rounded-full"></div>
                          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                        </div>
                        {/* WiFi */}
                        <svg className="w-4 h-4 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                        </svg>
                        {/* Battery */}
                        <div className="w-6 h-3 border border-gray-900 rounded-sm ml-1 relative">
                          <div className="w-5 h-full bg-green-500 rounded-sm"></div>
                          <div className="absolute -right-0.5 top-0.5 w-0.5 h-2 bg-gray-900 rounded-r-sm"></div>
                      </div>
                    </div>
                  </div>
                    
                    
                    {/* Content Area */}
                    <div className="p-0 bg-gray-50 h-full flex items-center justify-center">
                      <img 
                        src="/Executivo Rocha (1).png" 
                        alt="Executivo Rocha"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full blur-sm"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-full blur-sm"></div>
                <div className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para sua mudança de vida no Paraguai?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Não perca a oportunidade de ter o suporte de especialistas confiáveis 
            e dar o primeiro passo rumo à sua nova vida no Paraguai.
          </p>
          <a href="https://wa.me/message/GQRD6T6PCSMFF1" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block">
            Agendar Consultoria Gratuita
          </a>
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
            
            {/* Pagamentos Aceitos */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">PAGAMENTOS ACEITOS</h4>
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                {/* Primeira fila */}
                {/* PIX */}
                <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center h-14 border border-red-600">
                  <img 
                    src="/pix-logo-new-BSicX-4_.png" 
                    alt="PIX" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                {/* Stripe */}
                <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center h-14 border border-red-600">
                  <img 
                    src="/stripe-logo-new-C4YqsY6S.png" 
                    alt="Stripe" 
                    className="h-6 w-auto object-contain"
                  />
                </div>
                {/* USDC */}
                <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center h-14 border border-red-600">
                  <img 
                    src="/usdc-logo-DW_NgE8V.png" 
                    alt="USDC" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                
                {/* Segunda fila */}
                {/* PayPal */}
                <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center h-14 border border-red-600">
                  <img 
                    src="/PayPal.svg.png" 
                    alt="PayPal" 
                    className="h-6 w-auto object-contain"
                  />
                </div>
                {/* Western Union */}
                <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center h-14 border border-red-600">
                  <img 
                    src="/Western-Union-Logо.png" 
                    alt="Western Union" 
                    className="h-6 w-auto object-contain"
                  />
                </div>
                {/* Ebanx */}
                <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center h-14 border border-red-600">
                  <img 
                    src="/Blueebanx.svg.png" 
                    alt="Ebanx" 
                    className="h-8 w-auto object-contain"
                  />
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
                    KM 8 ACARAY-CIUDAD DEL ESTE
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
