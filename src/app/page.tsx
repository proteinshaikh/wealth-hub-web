import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/site";

export default function HomePage() {
  const featured = articles.filter(a => a.featured);
  const latest = articles.slice(2, 5);
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="hero-kicker">INDEPENDENT INVESTMENT EDUCATION</span>
            <h1>Understand the world of investing.<br /><em>Build wealth with knowledge.</em></h1>
            <p>Free, practical and independent investment education for Indians exploring global financial markets.</p>
            <SearchBox />
            <div className="hero-note"><span className="free-dot" /> Open knowledge. Always free to read.</div>
          </div>
          <div className="hero-art">
            <div className="globe-orbit orbit-one"></div><div className="globe-orbit orbit-two"></div>
            <div className="globe-core"><span>GLOBAL</span><strong>INVESTING</strong><small>KNOWLEDGE</small></div>
            <div className="float-card float-card-one"><small>INVESTMENT HORIZON</small><strong>Long term</strong></div>
            <div className="float-card float-card-two"><small>PHILOSOPHY</small><strong>Evidence over noise</strong></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading"><div><span className="eyebrow">EXPLORE THE LIBRARY</span><h2>Knowledge for every stage of investing</h2><p>Start with the fundamentals or explore a specific global market.</p></div><Link className="text-link" href="/topics">All topics →</Link></div>
        <div className="topic-grid">
          {categories.map((c, i) => <Link href={`/topics/${c.slug}`} className="topic-card" key={c.slug}><span className="topic-number">0{i+1}</span><h3>{c.title}</h3><p>{c.description}</p><span className="topic-arrow">Explore topic ↗</span></Link>)}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">START HERE</span><h2>Popular investment guides</h2><p>Clear explanations of concepts that matter to long-term investors.</p></div><Link className="text-link" href="/articles">Browse all articles →</Link></div>
          <div className="article-grid">{featured.map(a => <ArticleCard article={a} key={a.slug} />)}</div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading"><div><span className="eyebrow">LATEST KNOWLEDGE</span><h2>Learn at your own pace</h2></div></div>
        <div className="article-grid">{latest.map(a => <ArticleCard article={a} key={a.slug} />)}</div>
      </section>

      <section className="principles-band">
        <div className="container principles-inner">
          <div><span className="eyebrow">OUR APPROACH</span><h2>Financial knowledge should be accessible to everyone.</h2><p>No paywalls. No investment hype. Just independent education, transparent explanations and useful research.</p></div>
          <div className="principles-list"><span>01&nbsp; Evidence over speculation</span><span>02&nbsp; Long-term thinking</span><span>03&nbsp; Low-cost investing awareness</span><span>04&nbsp; Learn before you invest</span></div>
        </div>
      </section>
    </>
  );
}
