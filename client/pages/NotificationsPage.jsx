import React, { useState } from "react";
import { FiBell, FiCheck, FiTrash2, FiSettings } from "react-icons/fi";

import NavBar from "../components/Home/NavBar";

const NotificationsPage = ({ setAuth }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "like",
      user: "Jane Cooper",
      avatar: "https://i.pravatar.cc/150?img=5",
      content: "liked your post",
      time: "2 mins ago",
      read: false,
    },
    {
      id: 2,
      type: "comment",
      user: "Alex Morgan",
      avatar: "https://i.pravatar.cc/150?img=11",
      content: 'commented: "Great post!"',
      time: "1 hour ago",
      read: true,
    },
    {
      id: 3,
      type: "follow",
      user: "Sam Wilson",
      avatar: "https://i.pravatar.cc/150?img=8",
      content: "started following you",
      time: "3 hours ago",
      read: false,
    },
    {
      id: 4,
      type: "mention",
      user: "Taylor Swift",
      avatar: "https://i.pravatar.cc/150?img=60",
      content: "mentioned you in a comment",
      time: "1 day ago",
      read: true,
    },
  ]);

  const [notificationSettings, setNotificationSettings] = useState({
    pushEnabled: true,
    emailEnabled: false,
    soundEnabled: true,
  });

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const toggleSetting = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-rose-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden p-4">
          <NavBar setAuth={setAuth} />
          {/* Header */}
          <div className="p-6 border-b border-emerald-100">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-emerald-800 flex items-center gap-2">
                <FiBell className="text-emerald-600" />
                Notifications
              </h2>
              <button
                onClick={markAllAsRead}
                className="text-sm text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
              >
                Mark all as read
              </button>
            </div>
          </div>

          {/* Notification List */}
          <div className="divide-y divide-emerald-100">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No notifications yet
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-emerald-50 transition-colors cursor-pointer ${
                    !notification.read ? "bg-emerald-50/50" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={notification.avatar}
                      alt={notification.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-800">
                          {notification.user}{" "}
                          <span className="font-normal text-gray-600">
                            {notification.content}
                          </span>
                        </p>
                        {!notification.read && (
                          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="p-1 text-gray-400 hover:text-emerald-600 transition-colors"
                        aria-label="Mark as read"
                      >
                        <FiCheck size={18} />
                      </button>
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Delete notification"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Settings Panel */}
          <div className="p-6 border-t border-emerald-100 bg-gray-50/50">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
              <FiSettings className="text-emerald-600" />
              Notification Settings
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-gray-500">
                    Receive notifications on this device
                  </p>
                </div>
                <button
                  onClick={() => toggleSetting("pushEnabled")}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none cursor-pointer ${
                    notificationSettings.pushEnabled
                      ? "bg-emerald-600"
                      : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block w-4 h-4 transform transition-transform rounded-full bg-white cursor-pointer ${
                      notificationSettings.pushEnabled
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">
                    Get notifications via email
                  </p>
                </div>
                <button
                  onClick={() => toggleSetting("emailEnabled")}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none cursor-pointer ${
                    notificationSettings.emailEnabled
                      ? "bg-emerald-600"
                      : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block w-4 h-4 transform transition-transform rounded-full bg-white ${
                      notificationSettings.emailEnabled
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Notification Sound</p>
                  <p className="text-sm text-gray-500">
                    Play sound for new notifications
                  </p>
                </div>
                <button
                  onClick={() => toggleSetting("soundEnabled")}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none cursor-pointer ${
                    notificationSettings.soundEnabled
                      ? "bg-emerald-600"
                      : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block w-4 h-4 transform transition-transform rounded-full bg-white ${
                      notificationSettings.soundEnabled
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
