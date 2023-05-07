import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Financial Servcies</span>
            <span>Digital Rights</span>
            <span>Document Proofing</span>
            <span>Legal Tech Servcies</span>
            <span>Business Lawyer</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Serving on OLS</span>
            <span>Buying on OLS</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Influencers</span>
            <span>Register as Lawyer</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From OLS</h2>
            <span>OLS Guides</span>
            <span>Legal Documents</span>
            <span>OLS Workspace</span>
            <span>Learn</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>OnlineLawServices</h2>
            <span>© OLS International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
