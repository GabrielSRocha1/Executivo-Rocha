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
    icon: [
      { url: '/Favicon-executivo-rocha (1).png', sizes: '32x32', type: 'image/png' },
      { url: '/Favicon-executivo-rocha (1).png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/Favicon-executivo-rocha (1).png',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/Favicon-executivo-rocha (1).png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Favicon-executivo-rocha (1).png" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
