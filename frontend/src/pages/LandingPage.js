import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Dashboard from "./Dashboard"; // Import Dashboard
import "../assets//LandingPage.css";

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
        <section className="section">
          <h2>Limca Records</h2>
          <p>100% Mobile-verified profiles</p>
        </section>

        <section className="section">
          <h2>4 Crore+ Customers Served</h2>
        </section>

        <section className="section">
          <h2>25 Years of Successful Matchmaking</h2>
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


        <section className="section">
          <h2>Kerala Matrimony Retail Outlets</h2>
          <p>Visit your nearest store for assistance in registering, using the platform, and making payments.</p>
        </section>

        <section className="section">
          <h2>Success Stories</h2>
          <p>Millions have found their life partner through KeralaMatrimony.</p>
        </section>

        <section className="section">
          <h2>Wedding Services</h2>
          <ul>
            <li>India’s Largest Wedding Planning Platform</li>
            <li>Find trusted vendors for photography, makeup, catering, and more</li>
            <li>40,000+ verified venues across India</li>
          </ul>
        </section>

        <footer className="footer">
          <p>Copyright © 2025. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
