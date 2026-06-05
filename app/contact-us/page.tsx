import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = { title: "Contact Us — Compass Direct" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-sm">
          <div className="container">
            <p className="eyebrow">Contact Us</p>
            <h1>We&apos;d love to hear from you.</h1>
            <p className="sub">
              Got a question? Send us a message and we&apos;ll respond as soon as possible.
            </p>
            <a className="btn" href="mailto:info@compass-direct.com?subject=Free%20count%20request">
              Request a free count
            </a>
          </div>
        </section>
        <section className="section">
          <div className="container facts-wrap">
            <div>
              <h2>Compass Direct, LLC</h2>
              <p className="foot-contact" style={{ color: "var(--muted)" }}>
                2307 Fenton Parkway, Suite 107
                <br />
                San Diego, CA 92108
                <br />
                Phone: <a href="tel:18005050057">1·800·505·0057</a>
                <br />
                Fax: 858·430·6732
                <br />
                Email: <a href="mailto:info@compass-direct.com">info@compass-direct.com</a>
              </p>
            </div>
            <div>
              <h2>Hours</h2>
              <ul className="facts">
                <li>Monday – Friday: 8 am – 5 pm PST</li>
                <li>Saturday – Sunday: Closed</li>
              </ul>
              <p className="recovered-note">
                Call after hours and leave a message — a Marketing Pathfinder will call you back the
                next business day.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
