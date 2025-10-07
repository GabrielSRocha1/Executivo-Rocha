'use client';

import { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 md:bottom-6 md:right-6"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 animate-in slide-in-from-bottom-4 duration-300 md:block md:bottom-24 md:right-6">
          {/* Mobile Overlay */}
          <div 
            className="fixed inset-0 bg-black/20 z-30 md:hidden" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-full max-w-md mx-4 md:mx-0 md:w-auto">
            {/* Chat Header */}
            <div className="bg-red-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Executivo Rocha</h3>
                  <p className="text-xs text-red-100">Online agora</p>
                </div>
              </div>
              
              {/* Close button for mobile */}
              <button
                onClick={() => setIsOpen(false)}
                className="md:hidden p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Fechar chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Chat Iframe */}
            <div className="relative">
              <iframe
                id="widget-iframe"
                src="https://platform.zaia.app/embed/chat/65889"
                style={{
                  border: 'none',
                  width: '100%',
                  height: '600px',
                  borderRadius: '0px',
                  minWidth: '320px',
                  maxWidth: '400px'
                }}
                title="Chat Executivo Rocha"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
