const pillars: [string, string, string][] = [
  ["📋", "Powerful Marketing Lists", "Target new prospects with laser guided, state of the art databases."],
  ["✉️", "Postcard Marketing", "Win new customers with brilliantly timed postcard marketing sequences."],
  ["📧", "Email Marketing", "Reach millions of prospects and convert them to new customers."],
  ["🔄", "Data Enhancement", "Refresh, append, & enhance your lists with the freshest data available."],
];

const triggers: string[] = [
  "New Movers", "New Homeowners", "New Pre-Movers", "New Parents", "New Expecting Parents",
  "New Auto Owners", "New Businesses", "Building Permits", "New Marriages", "New Engagements",
  "New Divorce", "New Retirees", "New Graduates", "New Teen Drivers", "Home Equity Loans",
];

const products: [string, string][] = [
  ["Consumer Lists", "Reach 230+ million U.S. households, filtered by geography, demographics, and lifestyle."],
  ["Business Lists", "Target businesses by industry, size, location, revenue, and role."],
  ["New Homeowner Lists", "Connect with people who just bought — and are ready to invest in their home."],
  ["New Mover Lists", "The largest new-mover database in the U.S., with 300,000+ new leads added weekly."],
  ["Building Permit Lists", "Find new construction and building activity across your market."],
  ["New Parent Lists", "Reach growing families at one of life's biggest spending moments."],
  ["New Divorce Lists", "Reach households navigating a major life transition."],
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="b1">compass</span> <span className="b2">direct</span>
          </a>
          <nav className="nav">
            <a href="#products">List Products</a>
            <a href="#services">Marketing Services</a>
            <a href="#products">Pricing</a>
            <a href="#about">About</a>
            <a className="btn btn-sm" href="#contact">Contact Us</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Guiding you towards new customers</p>
            <h1>Finding your next customer just got a whole lot easier.</h1>
            <p className="sub">
              Direct marketing solutions for small businesses — targeted mailing
              lists, perfectly timed postcard and email campaigns, and data you
              can trust.
            </p>
            <div className="cta-row">
              <a className="btn" href="#contact">Request a free count</a>
              <a className="btn btn-ghost" href="#products">See our lists →</a>
            </div>
          </div>
        </section>

        <div className="proof">
          <div className="container">
            The preferred choice of more than <strong>3,000</strong> small
            businesses, corporations, universities, and independent marketers
            worldwide.
          </div>
        </div>

        <section id="services" className="section">
          <div className="container">
            <h2>Discover how Compass Direct can help your business <em>GROW!</em></h2>
            <div className="grid grid-4">
              {pillars.map(([icon, title, desc]) => (
                <article className="card" key={title}>
                  <div className="ic">{icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lifecycle">
          <div className="container">
            <p className="eyebrow eyebrow-light">Lifecycle Marketing</p>
            <h2>Reach new prospects just before they&apos;re about to buy.</h2>
            <p className="sub sub-light">
              Life events are when buying decisions get made. Show up at exactly
              the right moment with trigger audiences like:
            </p>
            <div className="tags">
              {triggers.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section alt">
          <div className="container">
            <h2>Marketing lists for every audience</h2>
            <p className="section-sub">
              Target new prospects with laser guided, state of the art databases
              — filtered to exactly who you want to reach.
            </p>
            <div className="grid">
              {products.map(([title, desc]) => (
                <article className="card" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-inner">
            <div>
              <p className="eyebrow">Our story</p>
              <h2>We&apos;re only here for one reason: to make you a marketing rockstar.</h2>
            </div>
            <div>
              <p>
                Founded in 2007, Compass Direct delivers a full range of
                affordable sales and marketing solutions to help small businesses
                acquire, manage, and retain new customers.
              </p>
              <p>
                We&apos;re a one-stop shop — high-quality, low-price mailing lists
                with the best guarantee of accuracy in the industry and the
                lowest minimum orders around, plus printing, email marketing,
                and more.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section cta-band">
          <div className="container">
            <h2>Let us guide you towards sales &amp; marketing success.</h2>
            <p className="section-sub">
              Tell a Marketing Pathfinder who you want to reach and we&apos;ll
              pull a free count and quote — no obligation.
            </p>
            <a className="btn btn-invert" href="#contact">Request a free count</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-cols">
            <div>
              <div className="brand foot-brand">
                <span className="b1">compass</span> <span className="b2">direct</span>
              </div>
              <p className="foot-tag">Guiding you towards new customers.</p>
              <p className="foot-contact">
                2307 Fenton Parkway, Suite 107
                <br />
                San Diego, California 92108
                <br />
                <a href="tel:18005050057">1-800-505-0057</a>
                <br />
                <a href="mailto:info@compass-direct.com">info@compass-direct.com</a>
              </p>
            </div>
            <div>
              <h4>Products &amp; Services</h4>
              <a href="#products">List Products</a>
              <a href="#services">Marketing Services</a>
              <a href="#products">Pricing</a>
            </div>
            <div>
              <h4>About</h4>
              <a href="#about">Our Story</a>
              <a href="#products">Products &amp; Services</a>
              <a href="#about">Data Quality</a>
            </div>
            <div>
              <h4>Customer Service</h4>
              <a href="#contact">Contact Us</a>
              <a href="#contact">Hours of Operation</a>
              <a href="#contact">Help &amp; FAQ&apos;s</a>
            </div>
          </div>
          <div className="footer-base">
            <span>© 2026 Compass Direct</span>
            <span className="muted">San Diego, California</span>
          </div>
        </div>
      </footer>
    </>
  );
}
