import React from "react";
import "../assets/css/successStories.css";

const successData = [
  { name: "Sarah & Kumar", story: "Met through Kerala Matrimony and living happily!", img: "sarah-kumar.jpg" },
  { name: "Vaishnav & Sajitha", story: "Thanks to Kerala Matrimony, we found each other!", img: "vaishnav-sajitha.jpg" },
  { name: "Gokul & Athulya", story: "Tried many sites, but found love here!", img: "gokul-athulya.jpg" }
];

const SuccessStories = () => {
  return (
    <div className="success-stories">
      <h3>Success Stories</h3>
      <div className="stories-grid">
        {successData.map((story, index) => (
          <div key={index} className="story-card">
            <img src={`assets/images/${story.img}`} alt={story.name} />
            <p><strong>{story.name}</strong></p>
            <p>{story.story}</p>
          </div>
        ))}
      </div>
      <button className="view-more">View More Success Stories</button>
    </div>
  );
};

export default SuccessStories;
