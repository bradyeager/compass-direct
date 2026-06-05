import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";
import type { Product } from "@/lib/site-data";

export function ProductPage({ data }: { data: Product }) {
  const eyebrow = data.kind === "list" ? "List Products" : "Marketing Services";
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-sm">
          <div className="container">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{data.name}</h1>
            <p className="sub">{data.tagline}</p>
            <a className="btn" href="/contact-us">Request a free count</a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="badges">
              {data.badges.map(([title, desc]) => (
                <div className="badge-card" key={title}>
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
                <h2>Custom filters</h2>
                <p className="section-sub">Target the prospects who need you most.</p>
                <div className="tags tags-dark">
                  {data.filters.map((f) => (
                    <span className="tag" key={f}>{f}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {data.note && (
          <section className="section">
            <div className="container">
              <p className="note-block">{data.note}</p>
            </div>
          </section>
        )}

        {data.recovered && (
          <div className="container">
            <p className="recovered-note">
              Details recovered from a {data.recovered} archive — pricing and specifics are being
              reverified.
            </p>
          </div>
        )}

        <CallChatContact />
      </main>
      <SiteFooter />
    </>
  );
}
