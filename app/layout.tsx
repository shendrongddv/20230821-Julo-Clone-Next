import "@/styles/globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontDisplay, fontBody } from "@/lib/fonts";
import { cn } from "@/lib/utils";

// Components
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-body text-[#616161] antialiased",
          fontDisplay.variable,
          fontBody.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
