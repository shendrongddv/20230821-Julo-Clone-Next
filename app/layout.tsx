import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { cn } from "@/lib/utils";

// Components
import FooterWrapper from "@/components/footer/footer-wrapper";

const fontDisplay = Nunito({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontBody = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Aplikasi Kredit Digital Cepat Cair dan Aman | Julo",
  description: "Hidupkan Hidupmu Bersama JULO. JULO Kredit Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-body text-base text-foreground antialiased",
          fontDisplay.variable,
          fontBody.variable,
        )}
      >
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
