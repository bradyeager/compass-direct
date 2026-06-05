import "./home.css";
import { listProducts, serviceProducts } from "@/lib/site-data";

const stats: [string, string][] = [
  ["230M+", "consumer households"],
  ["30M+", "U.S. businesses"],
  ["27,000+", "campaigns launched"],
  ["94%", "deliverability guarantee"],
];

const lifecycle = [
  "New Movers", "New Homeowners", "New Parents", "New Auto Owners",
  "New Businesses", "Building Permits", "New Divorce", "New Retirees",
];

export default function Home() {
  return (
    <div className="home2">
      <header className="h2-header">
        <div className="h2-bar">
          <a className="h2-logo" href="/" aria-label="Compass Direct home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/logo.jpg" alt="Compass Direct" />
          </a>
          <nav className="h2-nav">
            <a href="#lists">Lists</a>
            <a href="#services">Services</a>
            <a href="/pricing">Pricing</a>
            <a href="/our-story">About</a>
            <a className="h2-btn" href="/contact-us">Get a free count</a>
          </nav>
        </div>
      </header>

      <section className="h2-hero">
        <div className="h2-wrap">
          <p className="h2-eyebrow">Direct mail &amp; data · since 2007</p>
          <h1>
            Your next customer is
            <br />
            <span>one mailing away.</span>
          </h1>
          <p className="h2-lead">
            Targeted mailing lists and done-for-you direct mail that put your offer in front of the
            people most likely to buy — new movers, new homeowners, and millions more.
          </p>
          <div className="h2-cta-row">
            <a className="h2-btn h2-btn-lg" href="/contact-us">Get my free count →</a>
            <a className="h2-btn-ghost" href="#lists">Browse the lists</a>
          </div>
          <p className="h2-trust">
            Trusted by <strong>3,000+</strong> businesses · <strong>A+</strong> BBB rating · 94%
            deliverability guarantee
          </p>
        </div>
      </section>

      <section className="h2-stats">
        <div className="h2-wrap h2-stats-grid">
          {stats.map(([n, c]) => (
            <div key={c}>
              <div className="h2-stat-n">{n}</div>
              <div className="h2-stat-c">{c}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="lists" className="h2-section">
        <div className="h2-wrap">
          <h2 className="h2-h2">Mailing lists for every audience.</h2>
          <p className="h2-sub">Pinpoint exactly who you want to reach — and reach them first.</p>
          <div className="h2-cards">
            {listProducts.map((p) => (
              <a className="h2-card" href={`/${p.slug}`} key={p.slug}>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <span className="h2-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="h2-section h2-dark">
        <div className="h2-wrap">
          <h2 className="h2-h2">We don&apos;t just sell the list — we run the campaign.</h2>
          <p className="h2-sub">From the data to the mailbox to the inbox, done for you.</p>
          <div className="h2-svc">
            {serviceProducts.map((p) => (
              <a className="h2-svc-card" href={`/${p.slug}`} key={p.slug}>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="h2-section">
        <div className="h2-wrap">
          <h2 className="h2-h2">Reach them the moment they&apos;re ready to buy.</h2>
          <p className="h2-sub">Life events trigger spending. We help you show up first.</p>
          <div className="h2-tags">
            {lifecycle.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="h2-cta">
        <div className="h2-wrap">
          <h2>Ready to find your next customer?</h2>
          <p>Tell us who you want to reach. We&apos;ll pull a free count and quote — no obligation.</p>
          <a className="h2-btn h2-btn-lg h2-btn-invert" href="/contact-us">Get my free count →</a>
        </div>
      </section>

      <footer className="h2-footer">
        <div className="h2-wrap h2-foot">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h2-foot-logo" src="/media/logo.jpg" alt="Compass Direct" />
            <p>
              2307 Fenton Parkway, Suite 107 · San Diego, CA 92108
              <br />
              1·800·505·0057 · info@compass-direct.com
            </p>
          </div>
          <nav>
            <a href="#lists">Lists</a>
            <a href="/postcards">Services</a>
            <a href="/pricing">Pricing</a>
            <a href="/our-story">About</a>
            <a href="/contact-us">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
