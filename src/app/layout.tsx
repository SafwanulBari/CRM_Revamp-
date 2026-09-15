import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shikho CRM",
  description: "Shikho CRM leads workspace",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-page font-sans">
        <TooltipProvider delay={150}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
