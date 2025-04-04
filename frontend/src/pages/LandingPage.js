import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Dashboard from "./Dashboard"; // Import Dashboard
import "../assets//LandingPage.css";
import LandingPageComponent from "../components/LandingPageComponent";

function LandingPage() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 500,
    };

    ScrollReveal().reveal(".section", {
      ...scrollRevealOption,
      interval: 300,
    });
  }, []);

  return (
    <>
      {/* 📌 Dashboard Component at the Top */}
      <Dashboard />

      {/* 🌟 Landing Page Content */}
      <div className="landing-container">
      <section className="limca-records-section">
  <h2>Our Achievements</h2>
  <p>Recognized for our excellence in matchmaking</p>

  <div className="limca-records-flex">
    
    {/* Record 1 */}
    <div className="limca-records-center">
      <img src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/records-new-1.svg" alt="Mobile Verified" />
      <div>
        <span className="limca-records-title">100%</span>
        <span className="limca-records-desc">Mobile-verified profiles</span>
      </div>
    </div>

    <div className="limca-records-border"></div>

    {/* Record 2 */}
    <div className="limca-records-center">
      <img src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/records-new-3.svg" alt="Customers Served" />
      <div>
        <span className="limca-records-title">4 Crore+</span>
        <span className="limca-records-desc">Customers served</span>
      </div>
    </div>

    <div className="limca-records-border"></div>

    {/* Record 3 */}
    <div className="limca-records-center">
      <img src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/records-new-2.svg" alt="Years of Success" />
      <div>
        <span className="limca-records-title">25 Years</span>
        <span className="limca-records-desc">of successful matchmaking</span>
      </div>
    </div>

  </div>
</section>


     

        <section className="section">
    <h2>Featured in the Limca Book of Records</h2>
    <p>For highest number of documented marriages online.</p>
    
    <div className="limca-record-image">
        <img 
            src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/limca-records-img.svg" 
            alt="Limca Book of Records" 
            className="limca-img"
        />
    </div>
</section>

<section className="assisted-matrimony">
  <div className="assisted-header">
    <img 
      src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/assisted-right-side-img.png" 
      alt="Assisted Banner Image"
      className="assisted-banner-img"
    />
    <div className="assisted-info">
      <h2>Find your match 10x faster</h2>
      <p>Personalized matchmaking service through expert Relationship Manager</p>
    </div>
  </div>
  
  <div className="assisted-list">
    <div className="assisted-list-item">
      <img 
        src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/assisted-list-newicon-1.svg" 
        alt="Guaranteed Matches" 
        className="assisted-list-icon"
      />
      <span className="assisted-list-icon-text">Guaranteed Matches</span>
    </div>

    <div className="assisted-list-item">
      <img 
        src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/assisted-list-icon-2.svg" 
        alt="Better Response" 
        className="assisted-list-icon"
      />
      <span className="assisted-list-icon-text">Better Response</span>
    </div>

    <div className="assisted-list-item">
      <img 
        src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/assisted-list-newicon-3.svg" 
        alt="Save Time & Effort" 
        className="assisted-list-icon"
      />
      <span className="assisted-list-icon-text">Save Time & Effort</span>
    </div>
  </div>

  <button className="assisted-cta">
    Know More
    <img 
      src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/arrow-icon-animate.gif" 
      alt="Arrow Icon" 
      className="arrow-icon"
    />
  </button>
</section>


<section className="elite-matrimony">
  <div className="elite-header">
    <img 
      src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/elite-banner-img.png" 
      alt="Elite Banner Image"
      className="elite-banner-img"
    />
   <div className="elite-info">
  <img
    src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/elite-logo.svg"
    alt="Elite Logo"
    className="elite-logo"
  />
 <div className="elite-content">
  <div className="elite-header">
    <h2 className="elite-title">Elite Matrimony</h2>
    <p className="elite-description">The largest and most successful matrimony service for elites.</p>
  </div>
</div>

</div>

  </div>

  <div className="elite-list">
    <div className="elite-list-item">
      <img 
        src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/elite-list-icon-1.svg" 
        alt="Largest Pool"
        className="elite-list-icon"
      />
      <div className="elite-list-text">
        <h3>Largest pool of elite profiles</h3>
        <p>Increased chances of finding the right match through our largest and most exclusive database of elite matches.</p>
      </div>
    </div>

    <div className="elite-list-item">
      <img 
        src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/elite-list-icon-2.svg" 
        alt="Experienced Managers"
        className="elite-list-icon"
      />
      <div className="elite-list-text">
        <h3>Experienced Relationship Managers</h3>
        <p>A dedicated Relationship Manager will be shortlisting and sharing matches as per your preferences.</p>
      </div>
    </div>

    <div className="elite-list-item">
      <img 
        src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/elite-list-icon-3.svg" 
        alt="Confidential Service"
        className="elite-list-icon"
      />
      <div className="elite-list-text">
        <h3>100% Confidential Service</h3>
        <p>Strict privacy & confidentiality ensured throughout the service.</p>
      </div>
    </div>
  </div>

  <div className="assisted-cta-section">
    <a href="https://www.elitematrimony.com/" target="_blank" rel="noreferrer">
      <button className="elite-cta">
        Know More
        <img 
          src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/arrow-icon-animate.gif" 
          alt="Arrow Icon"
          className="arrow-icon"
        />
      </button>
    </a>
  </div>
</section>


<section className="retail-section">
  <h2>Kerala Matrimony Retail Outlets</h2>
  <p>Visit your nearest store for assistance in registering, using the platform, and making payments.</p>

  <div className="retail-content">
    <div className="retail-item">
      <img src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/retail-list-icon-1.svg" alt="Registering your profile" />
      <span className="retail-title">Registering your profile</span>
    </div>

    <div className="retail-item">
      <img src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/retail-list-icon-2.svg" alt="Using Kerala Matrimony" />
      <span className="retail-title">Using Kerala Matrimony</span>
    </div>

    <div className="retail-item">
      <img src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/retail-list-icon-3.svg" alt="Making payments" />
      <span className="retail-title">Making payments</span>
    </div>
  </div>

  <div className="retail-banner">
    <img src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/bm-1030/retail-kerala-banner.png" alt="Retail Kerala Image" />
  </div>

  <div className="retail-cta">
    <a href="https://www.keralamatrimony.com/matrimonyoutlets.php" target="_blank" rel="noopener noreferrer">
      <button className="cta-button">Find a Store</button>
    </a>
  </div>
</section>



<section class="youtube-banner">
        <h2 class="youtube-titletext">Watch our latest TVC</h2>
        <a href="https://www.youtube.com/embed/SOcF3txKeC8?si=1s07Ec4QA91CASb-" 
           target="_blank" 
           class="youtube-banner-link">
            <img src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/youtube-banner-image-kerala-1020.webp" 
                 alt="YouTube Image" 
                 class="youtube-banner-img"/>
        </a>
    </section>




    <LandingPageComponent />
    


        <footer className="footer">
          <p>Copyright © 2025. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
