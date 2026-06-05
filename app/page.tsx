import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";
import { listProducts } from "@/lib/site-data";

const pillars: [string, string, string, string][] = [
  ["📋", "Powerful Marketing Lists", "Target new prospects with laser guided, state of the art databases.", "/consumer-lists"],
  ["✉️", "Postcard Marketing", "Win new customers with brilliantly timed postcard marketing sequences.", "/postcards"],
  ["📧", "Email Marketing", "Reach millions of prospects and convert them to new customers.", "/email-marketing"],
  ["🔄", "Data Enhancement", "Refresh, append, & enhance your lists with the freshest data available.", "/data-enhancement"],
];

const triggers: string[] = [
  "New Movers", "New Homeowners", "New Pre-Movers", "New Parents", "New Expecting Parents",
  "New Auto Owners", "New Businesses", "Building Permits", "New Marriages", "New Engagements",
  "New Divorce", "New Retirees", "New Graduates", "New Teen Drivers", "Home Equity Loans",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Guiding you towards new customers</p>
            <h1>Finding your next customer just got a whole lot easier.</h1>
            <p className="sub">
              Direct marketing solutions for small businesses — targeted mailing lists, perfectly
              timed postcard and email campaigns, and data you can trust.
            </p>
            <div className="cta-row">
              <a className="btn" href="/contact-us">Request a free count</a>
              <a className="btn btn-ghost" href="#products">See our lists →</a>
            </div>
          </div>
        </section>

        <div className="proof">
          <div className="container">
            The preferred choice of more than <strong>3,000</strong> small businesses, corporations,
            universities, and independent marketers worldwide.
          </div>
        </div>

        <section id="services" className="section">
          <div className="container">
            <h2>Discover how Compass Direct can help your business <em>GROW!</em></h2>
            <div className="grid grid-4">
              {pillars.map(([icon, title, desc, href]) => (
                <a className="card" href={href} key={title}>
                  <div className="ic">{icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="lifecycle">
          <div className="container">
            <p className="eyebrow eyebrow-light">Lifecycle Marketing</p>
            <h2>Reach new prospects just before they&apos;re about to buy.</h2>
            <p className="sub sub-light">
              Life events are when buying decisions get made. Show up at exactly the right moment
              with trigger audiences like:
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
              Target new prospects with laser guided, state of the art databases — filtered to
              exactly who you want to reach.
            </p>
            <div className="grid">
              {listProducts.map((p) => (
                <a className="card" href={`/${p.slug}`} key={p.slug}>
                  <h3>{p.name}</h3>
                  <p>{p.tagline}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-inner">
            <div>
              <p className="eyebrow">Our story</p>
              <h2>We&apos;re only here for one reason: to make you a marketing rockstar.</h2>
              <a className="btn btn-ghost" href="/our-story">Read our story →</a>
            </div>
            <div>
              <p>
                Founded in 2007, Compass Direct delivers a full range of affordable sales and
                marketing solutions to help small businesses acquire, manage, and retain new
                customers.
              </p>
              <p>
                We&apos;re a one-stop shop — high-quality, low-price mailing lists with the best
                guarantee of accuracy in the industry and the lowest minimum orders around.
              </p>
            </div>
          </div>
        </section>

        <CallChatContact />
      </main>
      <SiteFooter />
    </>
  );
}
