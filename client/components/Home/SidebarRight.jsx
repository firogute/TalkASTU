import React from "react";
import { Link } from "react-router-dom";

const SidebarRight = () => {
  const sampleChannels = [
    { id: 1, name: "Computer Science", members: 342 },
    { id: 2, name: "Engineering Club", members: 215 },
    { id: 3, name: "Sports Society", members: 178 },
    { id: 4, name: "Debate Team", members: 94 },
    { id: 5, name: "Music & Arts", members: 127 },
  ];
  return (
    <div className="w-full lg:w-1/4">
      <div className="sticky top-4 space-y-6">
        <div className="p-4 rounded-xl bg-white border border-emerald-100 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-emerald-800">
            Popular Channels
          </h2>
          <div className="space-y-3">
            {sampleChannels.map((channel) => (
              <Link
                key={channel.id}
                to={`/channel/${channel.id}`}
                className="block p-2 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">#{channel.name}</span>
                  <span className="text-xs text-gray-500">
                    {channel.members} members
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <button className="w-full mt-3 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            View all channels →
          </button>
        </div>

        <div className="p-4 rounded-xl bg-white border border-emerald-100 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-emerald-800">
            University Clubs
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold">CS</span>
              </div>
              <div>
                <h3 className="font-medium">Computer Science Club</h3>
                <p className="text-xs text-gray-500">
                  Weekly meetings on Fridays
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors">
              <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                <span className="text-rose-600 font-bold">SP</span>
              </div>
              <div>
                <h3 className="font-medium">Sports Club</h3>
                <p className="text-xs text-gray-500">Tryouts next week</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors">
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-amber-600 font-bold">DT</span>
              </div>
              <div>
                <h3 className="font-medium">Debate Team</h3>
                <p className="text-xs text-gray-500">
                  Regional competition coming up
                </p>
              </div>
            </div>
          </div>
          <button className="w-full mt-3 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            Explore all clubs →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
