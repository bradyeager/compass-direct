const pillars: [string, string, string][] = [
  ["📋", "Powerful Marketing Lists", "Target new prospects with laser-guided, state-of-the-art databases."],
  ["✉️", "Postcard Marketing", "Win new customers with brilliantly timed postcard marketing sequences."],
  ["📧", "Email Marketing", "Reach millions of prospects and convert them into new customers."],
  ["🔄", "Data Enhancement", "Refresh, append, and enhance your lists with the freshest data available."],
];

const lists: [string, string][] = [
  ["New Mover Lists", "Reach households the moment they move — when they're buying everything new."],
  ["New Homeowner Lists", "Connect with people who just bought and are ready to invest in their home."],
  ["New Auto Owner Lists", "Reach consumers right after a major new-vehicle purchase."],
  ["New Parent Lists", "Reach growing families at one of life's biggest spending moments."],
  ["Consumer Lists", "Target consumers by geography, demographics, lifestyle, and behavior."],
  ["Business Lists", "Reach businesses by industry, size, location, revenue, and role."],
  ["Construction Leads", "Find new building and construction activity across your market."],
  ["Specialty Lists", "Niche, hard-to-find audiences for specialized campaigns."],
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            compass<span>direct</span>
          </a>
          <nav className="nav">
            <a href="#lists">List Products</a>
            <a href="#services">Marketing Services</a>
            <a href="#lists">Pricing</a>
            <a href="#faq">FAQ&apos;s</a>
            <a className="btn btn-sm" href="#contact">Contact Us</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Guiding you toward new customers</p>
            <h1>Finding your next customer just got a whole lot easier.</h1>
            <p className="sub">
              Direct marketing solutions for small businesses — targeted mailing
              lists, perfectly timed postcard and email campaigns, and data you
              can actually trust.
            </p>
            <div className="cta-row">
              <a className="btn" href="#contact">Request a free count</a>
              <a className="btn btn-ghost" href="#lists">See our lists →</a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>Discover how Compass Direct can help your business <em>grow</em>.</h2>
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
              Life events — a new home, a new car, a new baby — are when buying
              decisions get made. We help you show up at exactly that moment.
            </p>
          </div>
        </section>

        <section id="lists" className="section alt">
          <div className="container">
            <h2>Marketing lists for every audience</h2>
            <p className="section-sub">
              Target new prospects with laser-guided, state-of-the-art
              databases — filtered to exactly who you want to reach.
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

        <section id="contact" className="section cta-band">
          <div className="container">
            <h2>Ready to find your next customer?</h2>
            <p className="section-sub">
              Tell us who you want to reach and we&apos;ll pull a free count and
              quote — no obligation.
            </p>
            <a className="btn btn-invert" href="#contact">Request a free count</a>
          </div>
        </section>
      </main>

      <footer id="faq" className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Compass Direct · Guiding you toward new customers</span>
          <nav className="foot-nav">
            <a href="#lists">List Products</a>
            <a href="#services">Marketing Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
