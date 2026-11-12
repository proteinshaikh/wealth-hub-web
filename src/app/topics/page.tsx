import Link from "next/link";
import { categories } from "@/lib/site";
export default function TopicsPage() {
  return <div className="container page-shell"><span className="eyebrow">BROWSE BY SUBJECT</span><h1>Investment topics</h1><p className="page-intro">A structured guide to understanding investments and global financial markets.</p><div className="topic-grid">{categories.map((c,i)=><Link className="topic-card" href={`/topics/${c.slug}`} key={c.slug}><span className="topic-number">0{i+1}</span><h3>{c.title}</h3><p>{c.description}</p><span className="topic-arrow">Explore topic ↗</span></Link>)}</div></div>;
}
