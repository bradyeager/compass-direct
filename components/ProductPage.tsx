import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";
import type { Product } from "@/lib/site-data";
import { pricingBySlug } from "@/lib/pricing";

const badgeIc = (
  <svg className="badge-ic" viewBox="0 0 44 44" fill="none" stroke="#2EA3F2" strokeWidth="2.5" aria-hidden="true">
    <circle cx="22" cy="22" r="16" />
    <path d="M15 22l5 5 10-11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const trust: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg className="trust-ic" viewBox="0 0 48 48" fill="none" stroke="#2EA3F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 6v16M16 22l-5-5M16 22l5-5" />
        <rect x="8" y="28" width="32" height="13" rx="2" />
      </svg>
    ),
    title: "Drag & Drop List Builder",
    desc: "Create custom lists in minutes with our easy-to-use list builder.",
  },
  {
    icon: (
      <svg className="trust-ic" viewBox="0 0 48 48" fill="none" stroke="#2EA3F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="11" y="21" width="26" height="20" rx="2" />
        <path d="M16 21v-5a8 8 0 0 1 16 0v5" />
      </svg>
    ),
    title: "Secure online ordering",
    desc: "Encrypted, secure checkout for every order you place.",
  },
  {
    icon: (
      <svg className="trust-ic" viewBox="0 0 48 48" fill="none" stroke="#2EA3F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 27v-4a14 14 0 0 1 28 0v4" />
        <rect x="6" y="27" width="8" height="12" rx="2" />
        <rect x="34" y="27" width="8" height="12" rx="2" />
      </svg>
    ),
    title: "Unparalleled support",
    desc: "Our Marketing Pathfinders are always here for help & assistance.",
  },
];

export function ProductPage({ data }: { data: Product }) {
  const eyebrow = data.kind === "list" ? "List Products" : "Marketing Services";
  const pricing = pricingBySlug[data.slug];
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-sm">
          <div className="container">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{data.name}</h1>
            <p className="sub">{data.tagline}</p>
            <a className="btn" href="/contact-us">Get started</a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="badges">
              {data.badges.map(([title, desc]) => (
                <div className="badge-card" key={title}>
                  {badgeIc}
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container facts-wrap">
            <div>
              <h2>Key facts</h2>
              <ul className="facts">
                {data.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className="btn" href="/contact-us">Get started</a>
            </div>
            {data.filters && (
              <div>
                <h2>Thousands of custom filters</h2>
                <p className="section-sub">Narrow your list and reach your perfect customer.</p>
                <div className="tags">
                  {data.filters.map((f) => (
                    <span className="tag" key={f}>{f}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {data.stats && (
          <section className="section">
            <div className="container">
              <div className="stats">
                {data.stats.map((s) => (
                  <div className="stat" key={s.caption}>
                    <div className="stat-num">{s.value}</div>
                    <div className="stat-cap">{s.caption}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {pricing && (
          <section className="section alt">
            <div className="container">
              <h2>Plans &amp; Pricing</h2>
              <p className="section-sub">
                The lowest minimums around — and we&apos;ll beat any competitor&apos;s quote by 10%.
              </p>
              <div className="pricing">
                {pricing.map((t) => (
                  <div className={`price-card${t.featured ? " featured" : ""}`} key={t.name}>
                    <div className="price-head">
                      <h3>{t.name}</h3>
                      {t.sub && <span>{t.sub}</span>}
                    </div>
                    <div className="price-body">
                      <div className="price-amt">
                        {t.price}
                        <small>{t.unit}</small>
                      </div>
                      <ul>
                        {t.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <a className="btn btn-ghost" href="/contact-us">{t.cta}</a>
                    </div>
                  </div>
                ))}
              </div>
              <p className="recovered-note">
                Prices recovered from the archived site — please confirm current pricing before launch.
              </p>
            </div>
          </section>
        )}

        {data.note && (
          <section className="section">
            <div className="container">
              <p className="note-block">{data.note}</p>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container steps-wrap">
            <div className="steps-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/laptop.jpg" alt="Compass Direct online list builder" />
            </div>
            <div className="steps-text">
              <h2>Download in three easy steps</h2>
              <ol className="steps">
                <li><span>Step 1</span> Make your selections</li>
                <li><span>Step 2</span> Review your list</li>
                <li><span>Step 3</span> Order &amp; download</li>
              </ol>
              <p>Your custom list will be delivered in minutes.</p>
              <a className="btn" href="/contact-us">Start now</a>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="trust">
              {trust.map((t) => (
                <div className="trust-card" key={t.title}>
                  {t.icon}
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {data.recovered && (
          <div className="container">
            <p className="recovered-note">
              Details recovered from a {data.recovered} archive — specifics are being reverified.
            </p>
          </div>
        )}

        <CallChatContact />
      </main>
      <SiteFooter />
    </>
  );
}
