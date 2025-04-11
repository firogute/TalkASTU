import React, { useState } from "react";
import {
  FiMessageSquare,
  FiSearch,
  FiMoreVertical,
  FiCheck,
  FiClock,
} from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { BsCheckAll } from "react-icons/bs";

import NavBar from "../components/Home/NavBar";

const MessagesPage = ({ setAuth }) => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      user: "Jane Cooper",
      avatar: "https://i.pravatar.cc/150?img=5",
      lastMessage: "Hey, how are you doing?",
      time: "2 mins ago",
      unread: 3,
      online: true,
    },
    {
      id: 2,
      user: "Alex Morgan",
      avatar: "https://i.pravatar.cc/150?img=11",
      lastMessage: "Let's meet tomorrow",
      time: "1 hour ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      user: "Sam Wilson",
      avatar: "https://i.pravatar.cc/150?img=8",
      lastMessage: "Did you see the news?",
      time: "3 hours ago",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      user: "Taylor Swift",
      avatar: "https://i.pravatar.cc/150?img=60",
      lastMessage: "Thanks for the help!",
      time: "1 day ago",
      unread: 0,
      online: false,
    },
  ]);

  const [activeConversation, setActiveConversation] = useState(null);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = conversations.filter((conv) =>
    conv.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const messages = {
    1: [
      {
        id: 1,
        text: "Hey there!",
        sender: "them",
        time: "10:30 AM",
        status: "read",
      },
      {
        id: 2,
        text: "How are you doing?",
        sender: "them",
        time: "10:31 AM",
        status: "read",
      },
      {
        id: 3,
        text: "I'm good, thanks! How about you?",
        sender: "me",
        time: "10:35 AM",
        status: "delivered",
      },
      {
        id: 4,
        text: "Pretty good. Working on that project we discussed.",
        sender: "them",
        time: "10:36 AM",
        status: "read",
      },
    ],
    2: [
      {
        id: 1,
        text: "Are we still meeting tomorrow?",
        sender: "them",
        time: "9:15 AM",
        status: "read",
      },
      {
        id: 2,
        text: "Yes, at the usual coffee shop",
        sender: "me",
        time: "9:20 AM",
        status: "read",
      },
      {
        id: 3,
        text: "Let's meet at 2pm instead",
        sender: "them",
        time: "9:25 AM",
        status: "read",
      },
    ],
    3: [
      {
        id: 1,
        text: "Did you see the news about the new campus building?",
        sender: "them",
        time: "Yesterday",
        status: "read",
      },
    ],
    4: [
      {
        id: 1,
        text: "I really appreciate your help with the project",
        sender: "them",
        time: "Monday",
        status: "read",
      },
      {
        id: 2,
        text: "No problem! Happy to help anytime",
        sender: "me",
        time: "Monday",
        status: "read",
      },
    ],
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // this is what i send  to  backend
    const newMessage = {
      id: messages[activeConversation].length + 1,
      text: message,
      sender: "me",
      time: "Just now",
      status: "sent",
    };

    // Update conversation last message
    setConversations(
      conversations.map((conv) =>
        conv.id === activeConversation
          ? { ...conv, lastMessage: message, time: "Just now" }
          : conv
      )
    );

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden py-4 px-8">
          <NavBar setAuth={setAuth} />

          <div className="flex flex-col md:flex-row h-[calc(100vh-180px)]">
            {/* Conversations sidebar */}
            <div
              className={`${
                activeConversation ? "hidden md:block md:w-1/3" : "w-full"
              } border-r border-emerald-100`}
            >
              <div className="p-4 border-b border-emerald-100">
                <h2 className="text-xl font-semibold text-emerald-800 flex items-center gap-2">
                  <FiMessageSquare className="text-emerald-600" />
                  Messages
                </h2>
                <div className="relative mt-3">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="overflow-y-auto h-[calc(100%-80px)]">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 border-b border-emerald-100 hover:bg-emerald-50 transition-colors cursor-pointer ${
                      activeConversation === conversation.id
                        ? "bg-emerald-50"
                        : ""
                    }`}
                    onClick={() => setActiveConversation(conversation.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={conversation.avatar}
                          alt={conversation.user}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium text-gray-800 truncate">
                            {conversation.user}
                          </h3>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {conversation.time}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600 truncate">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <span className="bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active conversation */}
            {activeConversation ? (
              <div className="flex-1 flex flex-col">
                {/* Conversation header */}
                <div className="p-4 border-b border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActiveConversation(null)}
                      className="md:hidden p-1 text-gray-500 hover:text-emerald-600"
                    >
                      ←
                    </button>
                    <div className="relative">
                      <img
                        src={
                          conversations.find((c) => c.id === activeConversation)
                            .avatar
                        }
                        alt={
                          conversations.find((c) => c.id === activeConversation)
                            .user
                        }
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {conversations.find((c) => c.id === activeConversation)
                        .online && (
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {
                          conversations.find((c) => c.id === activeConversation)
                            .user
                        }
                      </h3>
                      <p className="text-xs text-gray-500">
                        {conversations.find((c) => c.id === activeConversation)
                          .online
                          ? "Online"
                          : "Offline"}
                      </p>
                    </div>
                  </div>
                  <button className="p-1 text-gray-500 hover:text-emerald-600">
                    <FiMoreVertical />
                  </button>
                </div>

                {/* Messages area */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50">
                  <div className="space-y-3">
                    {messages[activeConversation].map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${
                          msg.sender === "me" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                            msg.sender === "me"
                              ? "bg-emerald-500 text-white"
                              : "bg-white border border-emerald-100"
                          }`}
                        >
                          <p>{msg.text}</p>
                          <div
                            className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                              msg.sender === "me"
                                ? "text-emerald-100"
                                : "text-gray-500"
                            }`}
                          >
                            <span>{msg.time}</span>
                            {msg.sender === "me" && (
                              <>
                                {msg.status === "sent" && <FiClock size={12} />}
                                {msg.status === "delivered" && (
                                  <FiCheck size={12} />
                                )}
                                {msg.status === "read" && (
                                  <BsCheckAll
                                    size={12}
                                    className="text-blue-300"
                                  />
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message input */}
                <form
                  onSubmit={handleSendMessage}
                  className="p-4 border-t border-emerald-100"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="p-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
                      disabled={message.trim() === ""}
                    >
                      <IoIosSend size={20} />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50/50">
                <div className="text-center p-6">
                  <FiMessageSquare className="mx-auto text-4xl text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-700">
                    Select a conversation
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Choose an existing conversation or start a new one
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
