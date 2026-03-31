import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suraj Education Academy | Comprehensive Coaching & Classes",
  description: "Join Suraj Education Academy for structured curriculum and dedicated faculty. Admissions open for VI-X, XI-XII Accounts, Economics, Business Studies, and Science streams for CBSE, ICSE, and State boards.",
  keywords: "Suraj Education Academy, Coaching Classes, Commerce Coaching, CBSE Classes, ISC Classes, High School Tuition",
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
      </body>
    </html>
  );
}
