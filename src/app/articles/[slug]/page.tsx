import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { articles, getArticle } from "@/lib/articles";
import { categories } from "@/lib/site";

export function generateStaticParams() { return articles.map(a => ({ slug: a.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticle(params.slug);
  return { title: article?.title ?? "Article", description: article?.excerpt };
}
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const category = categories.find(c => c.slug === article.category);
  return <div className="container article-layout">
    <article className="article-body">
      <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/articles">Articles</Link> / {category?.title}</div>
      <span className="eyebrow">{category?.title}</span>
      <h1>{article.title}</h1>
      <p className="article-deck">{article.excerpt}</p>
      <div className="article-meta">By { "Zeeshan Shaikh" } <span>·</span> {article.readTime} <span>·</span> Updated {article.updated}</div>
      <div className="article-content">
        {article.content.map((block, i) => <section key={i}>{block.heading && <h2>{block.heading}</h2>}{block.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}{block.bullets && <ul>{block.bullets.map(b => <li key={b}>{b}</li>)}</ul>}{block.note && <aside className="article-note">{block.note}</aside>}</section>)}
      </div>
      <div className="article-end"><strong>Continue learning</strong><p>Explore related topics and keep building your understanding of global investing.</p><Link href="/topics" className="text-link">Browse investment topics →</Link></div>
    </article>
    <aside className="article-sidebar"><div className="sidebar-box"><span className="eyebrow">ABOUT THIS RESOURCE</span><h3>Independent education</h3><p>This article is for general educational purposes. Verify current fund documents, tax rules and regulations before making financial decisions.</p><Link href="/disclaimer">Read disclaimer →</Link></div><div className="sidebar-box"><span className="eyebrow">EXPLORE</span><Link href="/articles">All articles</Link><Link href="/calculators">Financial calculators</Link><Link href="/about">About the author</Link></div></aside>
  </div>;
}
