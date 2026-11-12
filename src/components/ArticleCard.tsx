import Link from "next/link";
import { Article } from "@/lib/articles";
import { categories } from "@/lib/site";

export default function ArticleCard({ article }: { article: Article }) {
  const category = categories.find((c) => c.slug === article.category);
  return (
    <article className="article-card">
      <div className="article-card-top">
        <span className="eyebrow">{category?.title ?? "Investment Education"}</span>
        <span className="read-time">{article.readTime}</span>
      </div>
      <h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.excerpt}</p>
      <div className="card-bottom">
        <span>Updated {article.updated}</span>
        <Link href={`/articles/${article.slug}`} className="text-link">Read article →</Link>
      </div>
    </article>
  );
}
