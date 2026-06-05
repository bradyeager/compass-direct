import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";

export const metadata = { title: "Hours of Operation — Compass Direct" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-sm">
          <div className="container">
            <p className="eyebrow">Hours of Operation</p>
            <h1>We&apos;re here when you need us.</h1>
            <p className="sub">
              Our Marketing Pathfinders are available Monday through Friday, 8 am to 5 pm PST. Call
              after business hours, leave a message, and we&apos;ll call you back the next business
              day.
            </p>
            <a className="btn" href="/contact-us">Contact us</a>
          </div>
        </section>
        <CallChatContact />
      </main>
      <SiteFooter />
    </>
  );
}
