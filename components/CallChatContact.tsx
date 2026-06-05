export function CallChatContact() {
  return (
    <section className="section cc-section">
      <div className="container">
        <p className="eyebrow" style={{ textAlign: "center" }}>
          Let us guide you towards sales &amp; marketing success
        </p>
        <div className="cc-grid">
          <div className="cc-card">
            <div className="ic">📞</div>
            <h3>Questions? Call us</h3>
            <p><a href="tel:18005050057">1·800·505·0057</a></p>
          </div>
          <div className="cc-card">
            <div className="ic">💬</div>
            <h3>Live chat</h3>
            <p><a href="/contact-us">Start a live chat</a></p>
          </div>
          <div className="cc-card">
            <div className="ic">✉️</div>
            <h3>Contact us</h3>
            <p><a href="/contact-us">Get started</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
