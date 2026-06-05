import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";
import { listProducts } from "@/lib/site-data";

const Atom = (
  <svg className="feat-ic" viewBox="0 0 64 64" aria-hidden="true">
    <g fill="none" stroke="#2EA3F2" strokeWidth="2.5">
      <circle cx="32" cy="32" r="6" />
      <ellipse cx="32" cy="32" rx="28" ry="11" />
      <ellipse cx="32" cy="32" rx="28" ry="11" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="28" ry="11" transform="rotate(120 32 32)" />
    </g>
  </svg>
);
const IdCard = (
  <svg className="feat-ic" viewBox="0 0 64 64" aria-hidden="true">
    <g fill="none" stroke="#2EA3F2" strokeWidth="2.5" strokeLinecap="round">
      <rect x="8" y="16" width="48" height="32" rx="4" />
      <circle cx="23" cy="30" r="6" />
      <path d="M14 43c1.5-5 16-5 18 0" />
      <line x1="38" y1="27" x2="50" y2="27" />
      <line x1="38" y1="34" x2="50" y2="34" />
    </g>
  </svg>
);
const Laptop = (
  <svg className="feat-ic" viewBox="0 0 64 64" aria-hidden="true">
    <g fill="none" stroke="#2EA3F2" strokeWidth="2.5" strokeLinejoin="round">
      <rect x="14" y="16" width="36" height="24" rx="2" />
      <path d="M8 48h48l-5-8H13z" />
    </g>
  </svg>
);
const Bullseye = (
  <svg className="feat-ic" viewBox="0 0 64 64" aria-hidden="true">
    <g fill="none" stroke="#2EA3F2" strokeWidth="2.5">
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="13" />
    </g>
    <circle cx="32" cy="32" r="4" fill="#2EA3F2" />
  </svg>
);

const features: { icon: ReactNode; title: string; desc: string; href: string }[] = [
  { icon: Atom, title: "Powerful Marketing Lists", desc: "Target new prospects with laser guided, state of the art databases.", href: "/consumer-lists" },
  { icon: IdCard, title: "Postcard Marketing", desc: "Win new customers with brilliantly timed postcard marketing sequences.", href: "/postcards" },
  { icon: Laptop, title: "E-mail Marketing", desc: "Reach millions of prospects and convert them to new customers.", href: "/email-marketing" },
  { icon: Bullseye, title: "Data Enhancement", desc: "Refresh, append, & enhance your lists with the freshest data available.", href: "/data-enhancement" },
];

const triggers: string[] = [
  "New Movers", "New Homeowners", "New Pre-Movers", "New Parents", "New Expecting Parents",
  "New Auto Owners", "New Businesses", "New Building Permits", "New Marriages", "New Engagements",
  "New Divorce", "New Retirees", "New Graduates", "New Teen Drivers", "New Home Equity Loans",
  "New Bankruptcy",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero">
          <div className="container">
            <h1>Finding your next customer just got a whole lot easier</h1>
            <p className="sub">Direct marketing solutions for small businesses</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Discover how Compass Direct can help your business <em>GROW!</em></h2>
            <div className="features">
              {features.map((f) => (
                <a className="feature" href={f.href} key={f.title}>
                  {f.icon}
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="proof">
          <div className="container">
            The preferred choice of more than <strong>3,000</strong> small businesses, corporations,
            universities, and independent marketers worldwide.
          </div>
        </div>

        <section className="lifecycle">
          <div className="container">
            <p className="eyebrow">Lifecycle Marketing</p>
            <h2>Reach new prospects just before they are about to buy.</h2>
            <div className="lifecycle-box">
              <ul className="lifecycle-list">
                {triggers.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="products" className="section alt">
          <div className="container">
            <h2>Powerful marketing lists</h2>
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

        <section className="section">
          <div className="container about-inner">
            <div>
              <p className="eyebrow">Our Story</p>
              <h2>We&apos;re only here for one reason: to make you a marketing rockstar.</h2>
              <a className="btn btn-ghost" href="/our-story">Read our story</a>
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
