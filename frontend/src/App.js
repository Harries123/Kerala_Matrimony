import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import MatrimonyForm from "./pages/MatrimonyForm";
import MatrimonyDetails from "./pages/MatrimonyDetails";
import ProfessionalDetails from "./pages/ProfessionalDetails";
import MobileVerification from "./pages/MobileVerification";
import KeralaMatrimonyProfile from "./pages/KeralaMatrimonyProfile";

import Search from "./pages/Search";
import Chat from "./pages/Chat";
import UserAccount from "./pages/UserAccount";
import MatrimonyDashboard from "./components/MatrimonyDashboard";
import Matches from "./pages/Matches";
import Mailbox from "./pages/Mailbox";
import Messages from "./pages/Messages";
import Services from "./pages/Services";

import { Home, Notifications } from "@mui/icons-material";
import ProfileCompletion from "./components/ProfileCompletion";

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Core Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<RegistrationSuccess />} />

         {/* Matrimony Routes */}
         <Route path="/matrimony-form" element={<MatrimonyForm />} />
        <Route path="/matrimony-details" element={<MatrimonyDetails />} />
        <Route path="/professional-details" element={<ProfessionalDetails />} />

        {/* routes */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify" element={<MobileVerification />} />

       

        {/* User Profile Routes */}
        <Route path="/profile" element={<ProfileCompletion />} />
        <Route path="/editprofile" element={<KeralaMatrimonyProfile />} />
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/verify/:userId" element={<MobileVerification />} />

        {/* Additional Features */}
        <Route path="/search" element={<Search />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/mailbox" element={<Mailbox />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<MatrimonyDashboard />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* Miscellaneous */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
