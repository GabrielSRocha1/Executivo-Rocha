import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Executivo Rocha - Seu Guia de Negócios e Imigração no Paraguai",
  description: "Nosso time de especialistas oferece soluções completas e legais para a sua mudança de vida, negócio ou investimento no Paraguai.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/Favicon-executivo-rocha (1).png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17654699613"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17654699613');
            `,
          }}
        />
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1428262505966719');
              fbq('track', 'PageView');
              
              // API de Conversão
              fbq('init', 'EAAJ6gpG72QQBPtXLuty0kR0iSBX1ZCwT7IGsdJOmBEDddtQRNuq7xMyjKjmcQE7PUlkW6Rcfj5wgztZB0o4TbXzWOqDnZBMGWzvyJ1Y6rQF6YOt3h8916Pkqs9nxRjGpIoJEysUhgLtdHfWZABZBxOHxZCq2A7b9Kdc6ZCrB9kfECrpzyaHSfOnI1gUHbphNwZDZD');
              
              // Função para rastrear conversões
              window.fbq = window.fbq || function(){(window.fbq.q=window.fbq.q||[]).push(arguments)};
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1428262505966719&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        {/* TikTok Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
                var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
                ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

                ttq.load('D3NVIOBC77U8AFC9RUHG');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />
        {/* End TikTok Pixel Code */}
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        
        {/* Script para rastreamento de conversões */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Função para rastrear conversões
              function trackConversion(eventName, value, currency) {
                if (typeof fbq !== 'undefined') {
                  fbq('track', eventName, {
                    value: value || 0,
                    currency: currency || 'BRL'
                  });
                }
              }
              
              // Rastrear cliques em botões de WhatsApp
              document.addEventListener('DOMContentLoaded', function() {
                const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
                whatsappButtons.forEach(button => {
                  button.addEventListener('click', function() {
                    trackConversion('Contact');
                    // Google Tag Manager - Rastrear conversão
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'conversion', {
                        'send_to': 'AW-17654699613'
                      });
                    }
                  });
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
