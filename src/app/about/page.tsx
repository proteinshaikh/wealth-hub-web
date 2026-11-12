import type { Metadata } from "next";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "About" };
export default function AboutPage() {
  return <div className="container narrow-page"><span className="eyebrow">ABOUT THIS WEBSITE</span><h1>Financial knowledge should be accessible to everyone.</h1><p className="lead">Protein Shaikh is an independent investment education resource focused on helping Indian investors understand global financial markets.</p><p>The website aims to explain investment concepts, ETFs, index funds, currencies, bonds, commodities, retirement planning and cross-border investing in clear, practical language.</p><h2>Our philosophy</h2><ul><li>Evidence over speculation.</li><li>Long-term investing over short-term market noise.</li><li>Understand costs, risks and diversification.</li><li>Make financial knowledge freely accessible.</li></ul><h2>About the author</h2><p>{site.author} is a software engineer with an interest in financial markets, global ETFs and long-term investing. The views and educational material published here should not be treated as personalized financial advice.</p></div>;
}
