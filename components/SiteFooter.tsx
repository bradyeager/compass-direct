export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cols">
          <div>
            <div className="logo-text foot-brand">
              <span className="b1">compass</span> <span className="b2">direct</span>
            </div>
            <p className="foot-tag">Guiding you towards new customers.</p>
            <p className="foot-contact">
              2307 Fenton Parkway, Suite 107
              <br />
              San Diego, California 92108
              <br />
              <a href="tel:18005050057">1·800·505·0057</a>
              <br />
              <a href="mailto:info@compass-direct.com">info@compass-direct.com</a>
            </p>
          </div>
          <div>
            <h4>Products &amp; Services</h4>
            <a href="/consumer-lists">List Products</a>
            <a href="/postcards">Marketing Services</a>
            <a href="/pricing">Pricing</a>
          </div>
          <div>
            <h4>About Us</h4>
            <a href="/our-story">Our Story</a>
            <a href="/data-quality">Data Quality</a>
            <a href="/faqs">FAQ&apos;s</a>
          </div>
          <div>
            <h4>Customer Service</h4>
            <a href="/contact-us">Contact Us</a>
            <a href="/hours-of-operation">Hours of Operation</a>
            <a href="/terms-of-use">Terms of Use</a>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 Compass Direct</span>
          <span className="muted">2307 Fenton Parkway, Suite 107 · San Diego, California 92108</span>
        </div>
      </div>
    </footer>
  );
}
