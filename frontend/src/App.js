import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

// import Search from "./pages/Search";
// import Chat from "./pages/Chat";
import ForgotPassword from "./pages/ForgotPassword";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import MatrimonyForm from "./pages/MatrimonyForm";
import MatrimonyDetails from "./pages/MatrimonyDetails";
import ProfessionalDetails from "./pages/ProfessionalDetails";

import MobileVerification from "./pages/MobileVerification";
// import KeralaMatrimonyProfile from "./pages/KeralaMatrimonyProfile";
// import UserAccount from "./pages/UserAccount";
// import { Home, Notifications } from "@mui/icons-material";
// import MatrimonyDashboard from "./components/MatrimonyDashboard";
// import Matches from "./pages/Matches";
// import Mailbox from "./pages/Mailbox";
// import Messages from "./pages/Messages";
// import Services from "./pages/Services";





function App() {
  return (


       <div className="app-container">
        <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<RegistrationSuccess />} />
        <Route path="/matrimony-form" element={<MatrimonyForm />} />
        <Route path="/matrimony-details" element={<MatrimonyDetails />} />
        <Route path="/professional-details" element={<ProfessionalDetails />} />
        <Route path="/verify" element={<MobileVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

          {/* <Route path="/" element={<Dashboard />} />
          <Route path="/success" element={<RegistrationSuccess />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<KeralaMatrimonyProfile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/matrimony-form" element={<MatrimonyForm />} />
          <Route path="/matrimony-details" element={<MatrimonyDetails />} />
          <Route path="/profesional-details" element={<ProfessionalDetails />} />
          <Route path="/verify" element={<MobileVerification />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userprofile" element={<KeralaMatrimonyProfile />} />

            <Route path="/dashboard" element={<MatrimonyDashboard />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/mailbox" element={<Mailbox />} />
            <Route path="/messages" element={<Messages />} />
           
            <Route path="/services" element={<Services />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/useraccount" element={<UserAccount/>} />
          */}

        </Routes>
      </div>
    
  );
}

export default App;
