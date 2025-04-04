import React from "react";
import "../assets/css/landingPageComponent.css";

const LandingPageComponent = () => {
  return (
    <>
           {/* ✅ Mobile Promo Section */}
           <section className="mobile-promo-section">
        <div className="mobile-promo-contents">
          
          {/* Left Column - QR Code & Download Links */}
          <div className="mp-column-1">
            
            {/* QR Code Scanner */}
            <div className="scanner-part">
              <img 
                src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/qr-codes/keralamatrimonyPlayStore.svg" 
                alt="QR Scanner"
              />
            </div>

            {/* Title Section */}
            <div className="title-part">
              <span>To speed up your partner search, download </span>
              <strong>KeralaMatrimony App</strong>
            </div>

            {/* Download Buttons */}
            <div className="app-links-block">
              
              {/* Apple Store */}
              <div 
                id="105AppDownloadBtn" 
                className="clickable-block"
                data-hyperlink="https://apps.apple.com/in/app/bharatmatrimony-marriage-app/id465923141"
                data-navtype="new"
              >
                <div className="apple-appstore-image"></div>
              </div>

              {/* Google Play Store */}
              <div 
                id="AndroidAppDownloadBtn"
                className="clickable-block"
                data-hyperlink="https://play.google.com/store/apps/details?id=com.bharatmatrimony"
                data-navtype="new"
              >
                <div className="google-playstore-image"></div>
              </div>
            </div>

            {/* App Description */}
            <div className="app-details-part">
              <div className="app-logo-image"></div>
              <div className="app-description">
                <div className="app-name">Kerala Matrimony - Official & Trusted Matrimony App</div>
                <div className="app-metrics">
                  <div>1M+ Downloads</div>
                  <span className="rated-text"> 4.2</span>
                  <div className="Stars" style={{ "--rating": 4.2 }}></div>
                </div>
                <div className="cust-review">Based on Customer Reviews</div>
              </div>
            </div>

          </div>

          {/* Right Column - Sample App Image */}
          <div className="mp-column-2">
            <div className="mp-sample-image"></div>
          </div>

        </div>
      </section>


      <section class="astrofreechat-section">
    <a href="https://play.google.com/store/apps/details?id=com.matrimony.astrofreechat" target="_blank">
        <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/bm-1030/astrofreechat-banner-new-1.png"
             alt="Astro Free Chat image" 
             class="astro-banner-img" />
    </a>
</section>




      {/* ✅ Wedding Services Section */}
      <section className="section">
        <h2>Wedding Services</h2>
        <ul>
          <li>India’s Largest Wedding Planning Platform</li>
          <li>Find trusted vendors for photography, makeup, catering, and more</li>
          <li>40,000+ verified venues across India</li>
        </ul>
      </section>
    </>
  );
};

export default LandingPageComponent;
