import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sorsvexa - Automate. Innovate. Elevate.",
  description: "Transform Your Business With Intelligent AI Automation. We build AI-powered websites, chatbots, CRM systems, WhatsApp automation, and business workflows.",
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Sorsvexa - Automate. Innovate. Elevate.",
    description: "Transform Your Business With Intelligent AI Automation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorsvexa - Automate. Innovate. Elevate.",
    description: "Transform Your Business With Intelligent AI Automation.",
  },
};

import FloatingButtons from "@/components/floating-buttons";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sorsvexa",
    "email": "sorsvexa.agency@gmail.com",
    "telephone": "+91 9742306859",
    "description": "Transform Your Business With Intelligent AI Automation.",
  };

  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-blue-600/30 selection:text-white">
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
            {children}
            <FloatingButtons />
          </div>
        </SmoothScroll>
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(schema)}
        </Script>
      </body>
    </html>
  );
}
