export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            Compass<span>Direct</span>
          </a>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a className="btn btn-sm" href="#contact">Get in touch</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Direct marketing</p>
            <h1>
              Get your message in front
              <br />
              of the right people.
            </h1>
            <p className="sub">
              Compass Direct plans, builds, and runs targeted direct-mail and
              multichannel campaigns that turn the right audience into
              measurable response.
            </p>
            <div className="cta-row">
              <a className="btn" href="#contact">
                Start a campaign
              </a>
              <a className="btn btn-ghost" href="#services">
                What we do →
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>What we do</h2>
            <p className="section-sub">
              Full-service direct response, from the list to the letterbox.
            </p>
            <div className="cards">
              <article className="card">
                <div className="ic">✉️</div>
                <h3>Targeted direct mail</h3>
                <p>
                  The right offer to the right list — designed, printed, and
                  delivered to drive a response you can measure.
                </p>
              </article>
              <article className="card">
                <div className="ic">🎯</div>
                <h3>Data &amp; list strategy</h3>
                <p>
                  Find and segment the audiences most likely to act, then reach
                  them with precision instead of guesswork.
                </p>
              </article>
              <article className="card">
                <div className="ic">📈</div>
                <h3>Campaign management</h3>
                <p>
                  End-to-end execution and tracking, so every send is
                  measurable, repeatable, and built to improve.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section cta-band">
          <div className="container">
            <h2>Ready to reach your customers?</h2>
            <p className="section-sub">
              Tell us about your goals and we&apos;ll map the campaign.
            </p>
            <a className="btn btn-invert" href="#contact">
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Compass Direct</span>
          <span className="muted">Rebuilt for 2026 · preview</span>
        </div>
      </footer>

      <div className="preview-badge">Preview build · placeholder copy</div>
    </>
  );
}
