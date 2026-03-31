import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://suraj-edu.vercel.app'),
  title: "Suraj Education Academy | Premier Coaching in Hadapsar, Pune",
  description: "Join Suraj Education Academy for expert coaching. Admissions open for VI-X, XI-XII Commerce & Science streams (CBSE, ICSE, HSC). Empowering minds and inspiring futures.",
  keywords: "Suraj Education Academy, Coaching Classes Hadapsar Pune, Commerce Coaching, CBSE Classes, ISC Classes, High School Tuition Pune, 11th 12th Commerce Classes",
  openGraph: {
    title: "Suraj Education Academy",
    description: "Empowering Minds, Inspiring Futures. Join Hadapsar's best coaching classes for guaranteed structured learning.",
    url: "https://suraj-edu.vercel.app",
    siteName: "Suraj Education Academy",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">
        {children}

        {/* Google Analytics (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9XLYQTZ71Z" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-9XLYQTZ71Z');
          `}
        </Script>
      </body>
    </html>
  );
}
