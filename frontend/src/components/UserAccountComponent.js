import React from 'react';
import '../assets/css/UserAccountComponent.css';

const UserAccountComponent = () => {
  return (
    <div className="p-6 bg-white min-h-screen overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Paid Membership */}
        <div className="bg-orange-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-orange-700 font-bold text-xl">Become a Paid Member</h2>
          <p className="text-gray-700">Get up to 39% OFF on paid membership!</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Call/WhatsApp matches</li>
            <li>Unlimited messages</li>
            <li>Higher chances of response</li>
            <li>View and match horoscopes</li>
          </ul>
        </div>

        {/* Profile Completeness */}
        <div className="bg-green-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-green-700 font-bold text-xl">Complete Your Profile</h2>
          <p className="text-gray-700">Profile completeness score</p>
          <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
            <div className="bg-green-600 h-4 rounded-full text-white text-xs text-center" style={{ width: "43%" }}>
              43%
            </div>
          </div>
        </div>

        {/* Email Verification */}
        <div className="bg-orange-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-orange-700 font-bold text-xl">Verify Your Email</h2>
          <p className="text-gray-700">Ensure your account security by verifying your email address.</p>
          <button className="mt-3 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
            Verify Now
          </button>
        </div>

        {/* Profile Picture Update */}
        <div className="bg-green-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-green-700 font-bold text-xl">Update Profile Picture</h2>
          <p className="text-gray-700">Upload a recent photo to attract more attention.</p>
          <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Upload Photo
          </button>
        </div>

        {/* Set Preferences */}
        <div className="bg-orange-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-orange-700 font-bold text-xl">Set Your Preferences</h2>
          <p className="text-gray-700">Let us know your preferences to find better matches.</p>
          <button className="mt-3 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
            Set Preferences
          </button>
        </div>
      </div>
    </div>

  );
};

export default UserAccountComponent;
