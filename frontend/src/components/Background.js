import React from "react";
import { Box } from "@mui/material";

// Import background images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

const Background = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        minHeight: "80vh", // Increased height for better layout
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "200px", // More space for content
        paddingBottom: "40px",
        backgroundColor: "#f8f8f8",
      }}
    >
     
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)", // Now 8 images per row
          gap: "10px",
          zIndex: 1,
          paddingTop: "130px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              width: "140px", // Slightly smaller width for better fit
              height: "200px",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
              position: "relative",
              overflow: "hidden",
              marginTop: index % 2 === 0 ? "8px" : "-8px", // Staggered effect
            }}
          >
            {/* Light Transparent Overlay for a Whitish Effect */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.4)", // More opacity for a whitish effect
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Background;
