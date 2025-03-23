import React from "react";
import NavbarMatrimony from "../components/NavbarMatrimony";
import DiscoverMatches from "../components/DiscoverMatches";
import SuccessStories from "../components/SuccessStories";

const Home = () => {
  return (
    <div>
      <NavbarMatrimony />
      <DiscoverMatches />
      <SuccessStories />
    </div>
  );
};

export default Home;
