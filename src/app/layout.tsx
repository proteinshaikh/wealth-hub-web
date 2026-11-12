import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: "Protein Shaikh | Global Investment Knowledge", template: "%s | Protein Shaikh" },
  description: site.description,
  metadataBase: new URL("https://proteinshaikh.com"),
  openGraph: { title: "Protein Shaikh — Global Investment Knowledge", description: site.description, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
