export const site = {
  name: "Protein Shaikh",
  domain: "proteinshaikh.com",
  tagline: "Understand. Invest. Build Wealth.",
  description:
    "Free, independent investment education and research for Indian investors exploring global financial markets.",
  author: "Zeeshan Shaikh",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@proteinshaikh.com",
};

export const categories = [
  { slug: "investment-basics", title: "Investment Basics", description: "Understand the building blocks of investing, from stocks and bonds to ETFs, risk and compounding." },
  { slug: "global-markets", title: "Global Markets", description: "Explore the US, Indian, UK, European and emerging markets." },
  { slug: "etfs-index-funds", title: "ETFs & Index Funds", description: "Learn how ETFs work, compare fund structures and understand diversification." },
  { slug: "nri-investing", title: "NRI Investing", description: "Understand cross-border investing considerations for Indians living abroad." },
  { slug: "currency", title: "Currency & Inflation", description: "Explore exchange rates, purchasing power, inflation and currency risk." },
  { slug: "bonds-commodities", title: "Bonds & Commodities", description: "Learn about government bonds, Treasury securities, gold and other assets." },
  { slug: "retirement", title: "Retirement & Wealth", description: "Explore compounding, financial independence and long-term planning." },
  { slug: "investment-philosophy", title: "Investment Philosophy", description: "Evidence-based ideas about patience, diversification and long-term investing." },
];
