import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";

export const metadata = { title: "Our Story — Compass Direct" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-sm">
          <div className="container">
            <p className="eyebrow">Our Story</p>
            <h1>We&apos;re only here for one reason: to make you a marketing rockstar.</h1>
            <p className="sub">Powering end-to-end sales &amp; marketing solutions for your small business.</p>
          </div>
        </section>
        <section className="section">
          <div className="container facts-wrap">
            <div>
              <h2>Who we are</h2>
              <p>
                Founded in 2007, Compass Direct delivers a full range of affordable sales and
                marketing solutions to help small businesses acquire, manage, and retain new
                customers.
              </p>
              <p>
                We&apos;re a one-stop shop — high-quality, low-price mailing lists with the best
                guarantee of accuracy in the industry and the lowest minimum orders around, plus
                printing, email marketing, and more.
              </p>
            </div>
            <div>
              <h2>What we do</h2>
              <p>Simply put: we make it easier to sell your products to your ideal customer.</p>
              <ul className="facts">
                <li>Clearly focused</li>
                <li>Giving it all we&apos;ve got — a small company with big ambitions, just like you</li>
                <li>Outstanding marketing consultants</li>
                <li>Genuinely caring — life&apos;s too short for bad direct marketing</li>
                <li>Contagiously compassionate</li>
              </ul>
            </div>
          </div>
        </section>
        <CallChatContact />
      </main>
      <SiteFooter />
    </>
  );
}
