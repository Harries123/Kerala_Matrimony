import React from "react";
import NavbarMatrimony from "../components/NavbarMatrimony";
import SidebarProfile from "../components/SidebarProfile";
import MembershipPlans from "../components/MembershipPlans";
import ProfileCompletion from "../components/ProfileCompletion";
import DiscoverMatches from "../components/DiscoverMatches";
import SuccessStories from "../components/SuccessStories";
import "../assets/css/matrimonyDashboard.css";

const MatrimonyDashboard = () => {
  return (
    <div className="dashboard-container">
      <NavbarMatrimony />
      <div className="dashboard-content">
        <SidebarProfile />
        <div className="main-content">
          <MembershipPlans />
          <ProfileCompletion />
          <DiscoverMatches />
          <SuccessStories />
        </div>
      </div>
    </div>
  );
};

export default MatrimonyDashboard;
