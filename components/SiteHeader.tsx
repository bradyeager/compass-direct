import { listProducts, serviceProducts } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Compass Direct home">
          <svg className="logo-mark" viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
            <circle cx="24" cy="24" r="21" fill="none" stroke="#2EA3F2" strokeWidth="3" />
            <polygon points="24,8 30,24 24,24" fill="#F78F1E" />
            <polygon points="24,8 18,24 24,24" fill="#ffb25e" />
            <polygon points="24,40 30,24 24,24" fill="#2EA3F2" />
            <polygon points="24,40 18,24 24,24" fill="#82c8f4" />
            <circle cx="24" cy="24" r="3" fill="#fff" />
          </svg>
          <span className="logo-text">
            <span className="b1">compass</span> <span className="b2">direct</span>
          </span>
        </a>

        <nav className="nav">
          <div className="has-dropdown">
            <a href="/consumer-lists">List Products ▾</a>
            <div className="dropdown">
              {listProducts.map((p) => (
                <a href={`/${p.slug}`} key={p.slug}>{p.name}</a>
              ))}
            </div>
          </div>
          <div className="has-dropdown">
            <a href="/postcards">Marketing Services ▾</a>
            <div className="dropdown">
              {serviceProducts.map((p) => (
                <a href={`/${p.slug}`} key={p.slug}>{p.name}</a>
              ))}
            </div>
          </div>
          <a href="/pricing">Pricing</a>
          <a href="/faqs">FAQ&apos;s</a>
          <a className="btn btn-sm" href="/contact-us">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
