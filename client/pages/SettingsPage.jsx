import React, { useState } from "react";
import {
  FiSettings,
  FiUser,
  FiLock,
  FiBell,
  FiMail,
  FiLogOut,
} from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import NavBar from "../components/Home/NavBar";

const SettingsPage = ({ setAuth }) => {
  const [activeTab, setActiveTab] = useState("account");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NavBar setAuth={setAuth} />
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 bg-white rounded-xl shadow-sm border border-emerald-100 p-4 h-fit">
            <h2 className="text-xl font-semibold text-emerald-800 mb-6 flex items-center gap-2">
              <FiSettings className="text-emerald-600" /> Settings
            </h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("account")}
                className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                  activeTab === "account"
                    ? "bg-emerald-50 text-emerald-700"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FiUser className="text-lg" />
                  <span>Account</span>
                </div>
                <FaChevronRight className="text-sm text-gray-400" />
              </button>

              <button
                onClick={() => setActiveTab("security")}
                className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                  activeTab === "security"
                    ? "bg-emerald-50 text-emerald-700"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FiLock className="text-lg" />
                  <span>Security</span>
                </div>
                <FaChevronRight className="text-sm text-gray-400" />
              </button>

              <button
                onClick={() => setActiveTab("notifications")}
                className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                  activeTab === "notifications"
                    ? "bg-emerald-50 text-emerald-700"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FiBell className="text-lg" />
                  <span>Notifications</span>
                </div>
                <FaChevronRight className="text-sm text-gray-400" />
              </button>

              <button
                onClick={() => setActiveTab("privacy")}
                className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                  activeTab === "privacy"
                    ? "bg-emerald-50 text-emerald-700"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FiMail className="text-lg" />
                  <span>Privacy</span>
                </div>
                <FaChevronRight className="text-sm text-gray-400" />
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full p-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors mt-6"
              >
                <FiLogOut className="text-lg" />
                <span>Log Out</span>
              </button>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-emerald-100 p-6">
            {activeTab === "account" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-emerald-800">
                  Account Settings
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Profile Picture
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src="https://i.pravatar.cc/150?img=5"
                          alt="Profile"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <button className="absolute -bottom-1 -right-1 bg-emerald-100 text-emerald-700 p-1 rounded-full hover:bg-emerald-200 transition-colors">
                          <FiSettings className="text-sm" />
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                          Upload New
                        </button>
                        <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      defaultValue="John Doe"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue="john@example.com"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows="3"
                      defaultValue="Digital designer and developer"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-emerald-800">
                  Security Settings
                </h3>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Password</h4>
                        <p className="text-sm text-gray-500">
                          Last changed 3 months ago
                        </p>
                      </div>
                      <button className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                        Change
                      </button>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">
                          Two-Factor Authentication
                        </h4>
                        <p className="text-sm text-gray-500">
                          Add an extra layer of security
                        </p>
                      </div>
                      <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        Enable
                      </button>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Active Sessions</h4>
                        <p className="text-sm text-gray-500">
                          2 devices currently active
                        </p>
                      </div>
                      <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-emerald-800">
                  Notification Preferences
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium">Push Notifications</h4>
                      <p className="text-sm text-gray-500">
                        Receive notifications on this device
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notificationsEnabled}
                        onChange={() =>
                          setNotificationsEnabled(!notificationsEnabled)
                        }
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>

                  <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium">Email Updates</h4>
                      <p className="text-sm text-gray-500">
                        Receive weekly email summaries
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={emailUpdates}
                        onChange={() => setEmailUpdates(!emailUpdates)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium mb-2">Notification Types</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                          defaultChecked
                        />
                        <span>New messages</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                          defaultChecked
                        />
                        <span>Friend requests</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                        />
                        <span>Event reminders</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                          defaultChecked
                        />
                        <span>Post reactions</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "privacy" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-emerald-800">
                  Privacy Settings
                </h3>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium mb-2">Profile Visibility</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="visibility"
                          className="text-emerald-600 focus:ring-emerald-500"
                          defaultChecked
                        />
                        <span>Public (Anyone can see your profile)</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="visibility"
                          className="text-emerald-600 focus:ring-emerald-500"
                        />
                        <span>
                          Friends only (Only your friends can see your profile)
                        </span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="visibility"
                          className="text-emerald-600 focus:ring-emerald-500"
                        />
                        <span>Private (Only you can see your profile)</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium mb-2">Data Sharing</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                          defaultChecked
                        />
                        <span>Allow analytics cookies</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                        />
                        <span>Allow targeted advertising</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                          defaultChecked
                        />
                        <span>Share data with third-party apps</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium mb-2">Account Deletion</h4>
                    <p className="text-sm text-gray-500 mb-3">
                      Permanently delete your account and all associated data
                    </p>
                    <button className="px-4 py-2 text-sm bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
