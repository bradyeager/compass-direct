import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";

export const metadata = { title: "FAQ's — Compass Direct" };

const faqs: [string, string][] = [
  [
    "Who is Compass Direct?",
    "Compass Direct is a strangely powerful direct marketing company located in sunny San Diego. We specialize in helping our clients achieve a better ROI through a combination of quality data, one-on-one consulting, and state-of-the-art technology.",
  ],
  [
    "What's a Marketing Pathfinder?",
    "A Marketing Pathfinder is what we call our in-house direct marketing experts. These folks eat, sleep, and breathe direct marketing — and they're here to guide you toward sales & marketing success.",
  ],
  [
    "Where does your data come from?",
    "Our lists are compiled from over a thousand private and proprietary sources and rebuilt on a regular schedule to stay current.",
  ],
  [
    "How accurate are your lists?",
    "We back our consumer and business lists with a 94% Deliverability Guarantee — among the highest in the industry.",
  ],
  [
    "What are your minimums?",
    "Among the lowest anywhere. Tell a Marketing Pathfinder which list you need and we'll give you the exact minimum and a free count.",
  ],
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-sm">
          <div className="container">
            <p className="eyebrow">FAQ&apos;s</p>
            <h1>You line &apos;em up. We&apos;ll knock &apos;em down.</h1>
          </div>
        </section>
        <section className="section">
          <div className="container faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <CallChatContact />
      </main>
      <SiteFooter />
    </>
  );
}
