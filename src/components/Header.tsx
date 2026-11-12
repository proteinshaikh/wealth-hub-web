import Link from "next/link";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <span className="brand-mark">PS</span>
          <span><strong>PROTEIN SHAIKH</strong><small>GLOBAL INVESTMENT KNOWLEDGE</small></span>
        </Link>
        <nav>
          <Link href="/topics">Topics</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/calculators">Calculators</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="nav-contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
