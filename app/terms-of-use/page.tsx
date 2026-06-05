import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = { title: "Terms of Use — Compass Direct" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-sm">
          <div className="container">
            <p className="eyebrow">Terms of Use</p>
            <h1>Compass Direct list product agreement.</h1>
            <p className="sub">
              Our list products are governed by the Compass Direct List Product Agreement, covering
              data use, permitted uses, and rental terms.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <p className="recovered-note">
              The full agreement is being reviewed before republishing. For the current terms,
              please <a href="/contact-us">contact us</a> and a Marketing Pathfinder will provide a
              copy.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
