import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallChatContact } from "@/components/CallChatContact";

export const metadata = { title: "Data Quality — Compass Direct" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-sm">
          <div className="container">
            <p className="eyebrow">Data Quality</p>
            <h1>Great data is everything.</h1>
            <p className="sub">
              No matter how great your product, it doesn&apos;t matter if you don&apos;t get your
              message to the people who care.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container facts-wrap">
            <div>
              <h2>Consumer data</h2>
              <p>
                We use 29 billion records from over 100 different sources to aggregate our database
                every year, with a full rebuild every month.
              </p>
              <ul className="facts">
                <li>Real estate and tax assessments</li>
                <li>Voter registration files</li>
                <li>Utility connections</li>
                <li>Bill processors</li>
                <li>Behavioral data, and more</li>
              </ul>
            </div>
            <div>
              <h2>Business data</h2>
              <ul className="facts">
                <li>U.S. and Canadian Yellow Page directories</li>
                <li>New business filings</li>
                <li>Daily utility connections</li>
                <li>Press releases and corporate websites</li>
                <li>Annual reports</li>
                <li>Building permit data</li>
                <li>User-generated feedback</li>
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
