const lists: [string, string][] = [
  ["New Mover Lists", "Reach households the moment they move — when they're buying everything for a new home."],
  ["New Homeowner Lists", "Connect with people who just bought and are ready to invest in their new home."],
  ["New Parent Lists", "Reach growing families at one of life's biggest spending moments."],
  ["Consumer Lists", "Target consumers by geography, demographics, lifestyle, and buying behavior."],
  ["Business Lists", "Reach businesses by industry, size, location, revenue, and job role."],
  ["Construction Leads", "Find new building and construction activity across your market."],
  ["New Divorce Lists", "Reach households navigating a major life transition."],
  ["Specialty Lists", "Niche, hard-to-find audiences for specialized campaigns."],
];

const services: [string, string][] = [
  ["Postcard Marketing", "Design, print, and mail postcards that get noticed and drive response."],
  ["Email Marketing", "Targeted, permission-based email campaigns that reach the inbox."],
  ["Data Enhancement", "Append and enrich your customer records — emails, demographics, and more."],
  ["Lifecycle Marketing", "Reach the right customers at the right moment, campaign after campaign."],
  ["Data Quality", "Verified, regularly updated records so you never pay to reach the wrong people."],
];

const why: [string, string][] = [
  ["Accurate, current data", "Records are verified and refreshed, so your budget reaches real, reachable people."],
  ["Targeting that fits", "Free and advanced filters narrow any list down to your exact audience."],
  ["Privacy you can trust", "Compliant data handling, backed by our privacy guarantee."],
  ["End-to-end direct mail", "From the list to the letterbox, we can run the entire campaign for you."],
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            Compass<span>Direct</span>
          </a>
          <nav className="nav">
            <a href="#lists">Lists</a>
            <a href="#services">Services</a>
            <a href="#why">Why us</a>
            <a className="btn btn-sm" href="#contact">Request a count</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Direct mail &amp; data</p>
            <h1>
              Reach the right customers,
              <br />
              by mail and inbox.
            </h1>
            <p className="sub">
              Compass Direct delivers accurate, targeted mailing lists — new
              movers, new homeowners, consumers, and businesses — plus the
              postcard and email campaigns that turn that data into real
              response.
            </p>
            <div className="cta-row">
              <a className="btn" href="#contact">Request a free count</a>
              <a className="btn btn-ghost" href="#lists">Browse our lists →</a>
            </div>
          </div>
        </section>

        <section id="lists" className="section">
          <div className="container">
            <h2>Targeted mailing lists</h2>
            <p className="section-sub">
              Pinpoint your audience with data you can trust — filtered to
              exactly who you want to reach.
            </p>
            <div className="grid">
              {lists.map(([title, desc]) => (
                <article className="card" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="container">
            <h2>Marketing services</h2>
            <p className="section-sub">
              From the list to the letterbox — we can handle the whole campaign.
            </p>
            <div className="grid">
              {services.map(([title, desc]) => (
                <article className="card" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section">
          <div className="container">
            <h2>Why Compass Direct</h2>
            <div className="why">
              {why.map(([title, desc]) => (
                <div className="why-item" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section cta-band">
          <div className="container">
            <h2>Ready to reach your next customers?</h2>
            <p className="section-sub">
              Tell us who you want to reach and we&apos;ll pull a free count and
              quote — no obligation.
            </p>
            <a className="btn btn-invert" href="#contact">Request a free count</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Compass Direct</span>
          <nav className="foot-nav">
            <a href="#lists">Lists</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
