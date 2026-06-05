import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";
import { listProducts } from "@/lib/site-data";

export const metadata = { title: "Pricing — Compass Direct" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-sm">
          <div className="container">
            <p className="eyebrow">Pricing</p>
            <h1>Our prices.</h1>
            <p className="sub">
              Got a lower quote for a mailing list, postcard, or email campaign? Tell a Marketing
              Pathfinder and we&apos;ll beat it by 10%.
            </p>
            <a className="btn" href="/contact-us">Request a free count</a>
          </div>
        </section>
        <section className="section">
          <div className="container facts-wrap">
            <div>
              <h2>How list pricing works</h2>
              <p>
                The price of a list begins with a base price per record. Each list has its own set
                of FREE filters included in that base price. Some advanced filters aren&apos;t
                included, but can be applied for a small additional fee.
              </p>
              <p className="recovered-note">
                Per-record prices are being reverified after the site&apos;s downtime — request a
                current quote and we&apos;ll get you exact numbers fast.
              </p>
              <a className="btn" href="/contact-us">Get a quote</a>
            </div>
            <div>
              <h2>Choose a list</h2>
              <div className="tags tags-dark">
                {listProducts.map((p) => (
                  <a className="tag" href={`/${p.slug}`} key={p.slug}>{p.name}</a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CallChatContact />
      </main>
      <SiteFooter />
    </>
  );
}
