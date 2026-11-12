export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  updated: string;
  featured?: boolean;
  content: { heading?: string; paragraphs?: string[]; bullets?: string[]; note?: string }[];
};

export const articles: Article[] = [
  {
    slug: "what-is-an-etf",
    title: "What Is an ETF? A Beginner's Guide",
    excerpt: "Understand exchange-traded funds, how they work, what they hold and why investors use them.",
    category: "etfs-index-funds", readTime: "7 min read", updated: "13 November 2026", featured: true,
    content: [
      { heading: "What is an ETF?", paragraphs: ["An exchange-traded fund (ETF) is an investment fund whose units trade on a stock exchange during market hours. An ETF can hold a basket of assets such as shares, bonds or commodities.", "Rather than buying every underlying security individually, an investor can buy units of a fund that provides exposure to a defined basket or strategy."] },
      { heading: "How does an ETF work?", paragraphs: ["An ETF has a portfolio and a market price. The portfolio may track an index, follow an active strategy or provide exposure to a particular asset class. The market price can move during the trading day.", "An ETF's structure, domicile, replication method, costs, liquidity and tax treatment all matter. The ticker alone does not tell the whole story."] },
      { heading: "What should investors compare?", bullets: ["Underlying index and holdings", "Expense ratio and other fund costs", "Fund domicile and legal structure", "Accumulating or distributing share class", "Fund size, liquidity and tracking difference", "Currency exposure and trading currency"] },
      { heading: "Important distinction", paragraphs: ["An ETF is a wrapper, not a guarantee of diversification or safety. A narrow sector ETF can be concentrated and volatile, while a broad-market ETF can still experience substantial losses."] , note: "Educational information only. This article is a general introduction, not a recommendation to buy or sell any security."}
    ]
  },
  {
    slug: "voo-vs-vwra",
    title: "VOO vs VWRA: Understanding Two Different ETF Approaches",
    excerpt: "Compare a US large-cap ETF with a globally diversified UCITS equity ETF.",
    category: "etfs-index-funds", readTime: "9 min read", updated: "13 November 2026", featured: true,
    content: [
      { heading: "They track different markets", paragraphs: ["VOO seeks to track the S&P 500, an index of large US companies. VWRA is the accumulating share class of Vanguard FTSE All-World UCITS ETF, which provides exposure to large- and mid-cap companies across developed and emerging markets.", "The funds therefore represent different portfolio choices. One is focused on large US companies; the other is globally diversified, while still having substantial US exposure."] },
      { heading: "Questions to compare", bullets: ["Do you want US-only large-cap exposure or global equity exposure?", "What is the fund domicile and legal structure?", "How are dividends handled?", "What are the fund costs and tracking differences?", "How does your tax residency affect the investment?", "What currency risks exist in your overall financial life?"] },
      { heading: "Avoid choosing by past returns alone", paragraphs: ["Recent performance can make one fund look more attractive than another, but it does not establish which will perform better in the future. Asset allocation should reflect goals, time horizon, risk tolerance and the investor's full financial situation."] },
      { note: "Fund details and tax treatment can change. Verify current factsheets and official documentation before making investment decisions. This comparison is educational, not a personalized recommendation."}
    ]
  },
  {
    slug: "ireland-domiciled-etfs",
    title: "What Are Ireland-Domiciled ETFs?",
    excerpt: "Learn what fund domicile means and why many international investors research Irish-domiciled UCITS funds.",
    category: "etfs-index-funds", readTime: "8 min read", updated: "13 November 2026",
    content: [
      { heading: "What does domicile mean?", paragraphs: ["An ETF's domicile is the country in which the fund is legally established. It is not necessarily the country where the ETF is listed or the currency in which it trades.", "For example, a fund domiciled in Ireland may have units traded on an exchange in London in US dollars. Domicile, listing venue and trading currency are three different concepts."] },
      { heading: "Why do investors examine Ireland?", paragraphs: ["Ireland is a major domicile for UCITS investment funds. Investors may examine Irish-domiciled funds because of the fund's regulatory framework, access to markets and the tax treatment that may apply to the fund and its investors.", "The outcome depends on the investor's tax residence, the fund structure, the underlying assets and applicable tax treaties and local rules."] },
      { heading: "What to verify", bullets: ["The fund's prospectus and factsheet", "The legal domicile and UCITS status", "Accumulating or distributing share class", "Withholding tax treatment at fund level", "Investor-level tax rules in your country of residence"] },
      { note: "Tax treatment is highly jurisdiction-specific. This article is general education, not tax or investment advice."}
    ]
  },
  {
    slug: "currency-risk-for-investors",
    title: "How Currency Depreciation Affects Long-Term Investors",
    excerpt: "Understand the difference between investment returns and the returns you experience in your home currency.",
    category: "currency", readTime: "6 min read", updated: "13 November 2026",
    content: [
      { heading: "Investment return is not the whole story", paragraphs: ["If an investor measures wealth in INR but owns assets priced in USD, changes in the USD/INR exchange rate affect the INR value of those assets.", "A foreign investment can rise in its market currency while the investor's home-currency return is reduced by exchange-rate movements. The reverse can also happen."] },
      { heading: "A simple illustration", paragraphs: ["Suppose an investment rises 8% in USD terms while the USD strengthens 3% against INR. The INR return is approximately 11.24%, before costs and taxes, because the two percentage changes compound.", "If the foreign currency weakens instead, it can reduce the return measured in INR."] },
      { heading: "Think about your liabilities too", paragraphs: ["Currency exposure should be considered alongside the currency in which you earn, spend, save and expect to retire. Someone planning to spend in India may think about INR purchasing power differently from someone planning to retire in Europe."] },
      { note: "Illustrative explanation only. Exchange rates are volatile and cannot be reliably forecast."}
    ]
  },
  {
    slug: "compound-interest",
    title: "Compounding: How Long-Term Investing Can Grow",
    excerpt: "Understand how returns earned on prior returns can affect long-term wealth accumulation.",
    category: "retirement", readTime: "5 min read", updated: "13 November 2026",
    content: [
      { heading: "What is compounding?", paragraphs: ["Compounding occurs when investment returns remain invested and can themselves generate returns. Over long periods, this can create an accelerating growth pattern.", "The result depends on the return achieved, how often returns are reinvested, the amount contributed, fees, taxes and the time invested."] },
      { heading: "Time matters", paragraphs: ["Starting earlier can give contributions more time to compound. This does not remove market risk: investment values can fall, returns are uneven and no rate of return is guaranteed."] },
      { heading: "Use the calculator", paragraphs: ["Try the calculator on this website to explore different monthly contributions, time horizons and assumed annual returns. Treat the output as a mathematical illustration rather than a forecast."] }
    ]
  },
  {
    slug: "what-is-the-sp-500",
    title: "What Is the S&P 500?",
    excerpt: "An introduction to one of the most widely followed US equity indices.",
    category: "global-markets", readTime: "6 min read", updated: "13 November 2026",
    content: [
      { heading: "An index of large US companies", paragraphs: ["The S&P 500 is an equity index designed to represent a broad segment of the US large-cap market. It includes companies selected under the index provider's methodology and is weighted by float-adjusted market capitalization.", "It is widely used as a benchmark for US equities, but it is not the entire US stock market and it is not a global index."] },
      { heading: "How investors get exposure", paragraphs: ["Investors can obtain exposure through index funds and ETFs that seek to track the index. These funds differ in domicile, fees, structure, distribution policy and availability to investors in different countries."] },
      { heading: "Risks and limitations", bullets: ["Concentration in the largest companies can increase over time.", "The index is exposed to US equity market risk.", "Past performance does not predict future returns.", "An investor outside the US also has currency and tax considerations."] }
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
