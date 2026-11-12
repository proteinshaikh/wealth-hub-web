import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/lib/site";
import { articles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() { return categories.map(c => ({ slug: c.slug })); }
export default function TopicPage({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.slug === params.slug);
  if (!category) notFound();
  const related = articles.filter(a => a.category === category.slug);
  return <div className="container page-shell"><div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/topics">Topics</Link></div><span className="eyebrow">INVESTMENT KNOWLEDGE</span><h1>{category.title}</h1><p className="page-intro">{category.description}</p>{related.length ? <div className="article-grid">{related.map(a => <ArticleCard article={a} key={a.slug}/>)}</div> : <div className="empty-state"><h3>More articles coming soon</h3><p>This topic is part of the knowledge library. New guides will be added over time.</p><Link href="/articles" className="text-link">Browse existing articles →</Link></div>}</div>;
}
