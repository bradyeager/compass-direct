import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";

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

const blocks: {
  img: string; alt: string; title: string; bullets: string[]; cta: [string, string]; reverse: boolean;
}[] = [
  {
    img: "/media/laptop.jpg",
    alt: "Compass Direct online list builder",
    title: "Powerful Marketing Lists",
    bullets: [
      "230M+ consumer households and 30M+ U.S. businesses",
      "Updated daily, with a 94% deliverability guarantee",
      "Free and premium filters to pinpoint your exact audience",
    ],
    cta: ["Browse our lists", "/consumer-lists"],
    reverse: false,
  },
  {
    img: "/media/postcards.jpg",
    alt: "Compass Direct postcard marketing",
    title: "Postcard Marketing",
    bullets: [
      "Thick 14pt gloss, Ultra HD full-color printing",
      "1–2 day standard turnaround, next-day available",
      "We'll beat any competitor's price by 10%",
    ],
    cta: ["Learn more", "/postcards"],
    reverse: true,
  },
  {
    img: "/media/email.jpg",
    alt: "Compass Direct email marketing",
    title: "E-mail Marketing",
    bullets: [
      "Launch a targeted campaign in under 48 hours",
      "Thousands of demographic targeting criteria",
      "Detailed, real-time response analytics",
    ],
    cta: ["Learn more", "/email-marketing"],
    reverse: false,
  },
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

        {blocks.map((b) => (
          <section className={`section${b.reverse ? " alt" : ""}`} key={b.title}>
            <div className={`container altblock${b.reverse ? " reverse" : ""}`}>
              <div className="altblock-inner">
                <div className="altblock-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.alt} />
                </div>
                <div className="altblock-text">
                  <h2>{b.title}</h2>
                  <ul className="altblock-list">
                    {b.bullets.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <a className="btn" href={b.cta[1]}>{b.cta[0]}</a>
                </div>
              </div>
            </div>
          </section>
        ))}

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

        <section className="section alt">
          <div className="container">
            <h2>Some of our clients</h2>
            <p className="section-sub">
              Compass Direct is the preferred choice of more than 3,000 small businesses,
              corporations, universities, and independent marketers worldwide.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="clients-img" src="/media/clients.jpg" alt="A selection of Compass Direct clients" />
          </div>
        </section>

        <CallChatContact />
      </main>
      <SiteFooter />
    </>
  );
}
