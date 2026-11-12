import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";
export const metadata: Metadata = { title: "Articles" };
export default function ArticlesPage() {
  return <div className="container page-shell"><span className="eyebrow">THE KNOWLEDGE LIBRARY</span><h1>Articles & guides</h1><p className="page-intro">Independent explanations of investments, global markets and long-term wealth building.</p><div className="article-grid">{articles.map(a => <ArticleCard key={a.slug} article={a} />)}</div></div>;
}
