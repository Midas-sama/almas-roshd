import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ParticleBackground from "./components/ParticleBackground";




const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EduVerse",
  description: "Modern Educational Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa" dir="rtl">

      <body
        className={`${vazirmatn.className} bg-[#030712] text-white antialiased`}
      >
        <ParticleBackground />
        {children}
        

      </body>

    </html>
  );
}

