import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">PROTEIN SHAIKH</div>
          <p>{site.description}</p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/topics">Investment topics</Link>
          <Link href="/articles">All articles</Link>
          <Link href="/calculators">Calculators</Link>
        </div>
        <div>
          <strong>About</strong>
          <Link href="/about">About the author</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.domain}. Educational resources, freely accessible.</span>
        <span>Understand. Invest. Build Wealth.</span>
      </div>
    </footer>
  );
}
