import React from "react";
import NavbarMatrimony from "../components/NavbarMatrimony";
import SidebarProfile from "../components/SidebarProfile";

const UserAccount = () => {
  return (
    <div>
      <NavbarMatrimony />
      <SidebarProfile />
      <h2>Your Account</h2>
      <p>Manage your personal details, preferences, and settings.</p>
    </div>
  );
};

export default UserAccount;
