export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-cols">
            <div>
              <div className="foot-brand">compass direct</div>
              <p className="foot-tag">Guiding you towards new customers</p>
              <p className="foot-contact">
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
        </div>
      </footer>
      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span>
            © Compass Direct · 2307 Fenton Parkway, Suite 107 · San Diego, CA 92108 · 1·800·505·0057
          </span>
          <span className="social">
            <a href="https://facebook.com/CompassDirect" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/Compass_Direct" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="mailto:info@compass-direct.com">Email</a>
          </span>
        </div>
      </div>
    </>
  );
}
