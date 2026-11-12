"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return articles.filter(a => `${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(q)).slice(0, 5);
  }, [query]);

  return (
    <div className="search-area">
      <div className="search-box">
        <span aria-hidden="true">⌕</span>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search ETFs, markets, investing, currency..." aria-label="Search articles" />
        <kbd>SEARCH</kbd>
      </div>
      {query.trim() && (
        <div className="search-results">
          {results.length ? results.map(a => <Link key={a.slug} href={`/articles/${a.slug}`} onClick={() => setQuery("")}>{a.title}<span>→</span></Link>) : <p>No matching articles yet. Try “ETF”, “currency” or “S&P 500”.</p>}
        </div>
      )}
    </div>
  );
}
