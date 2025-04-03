import React from "react";
import { Box } from "@mui/material";


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
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: { xs: "120px", md: "200px" }, // Adjusts for different screen sizes
      paddingBottom: "40px",
      backgroundColor: "#f8f8f8",
      overflow: "hidden", // Prevents horizontal scrolling
    }}
  >
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",  // 2 columns on small screens
          sm: "repeat(3, 1fr)",  // 3 columns on tablets
          md: "repeat(4, 1fr)",  // 4 columns on medium screens
          lg: "repeat(6, 1fr)",  // 6 columns on larger screens
          xl: "repeat(8, 1fr)",  // 8 columns on extra-large screens
        },
        gap: "10px",
        zIndex: 1,
        padding: "20px",
        width: "100%",
        maxWidth: "1400px", // Prevents layout from stretching too much
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            width: "100%", // Responsive width
            height: { xs: "160px", sm: "180px", md: "200px" }, // Adjust height per screen size
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
            position: "relative",
            overflow: "hidden",
            marginTop: index % 2 === 0 ? "8px" : "-8px",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)", // Smooth zoom on hover
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.3)", // Subtle overlay
            }}
          />
        </Box>
      ))}
    </Box>
  </Box>
  
  );
};

export default Background;

