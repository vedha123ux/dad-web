// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../components/LanguageContext";
import "leaflet/dist/leaflet.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sri Jayamurgan Transport",
  description: "Transport of cotton, cement sheets and more",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
