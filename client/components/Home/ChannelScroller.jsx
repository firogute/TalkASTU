import React from "react";

const ChannelScroller = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="channels flex gap-5 p-4 bg-gradient-to-br from-emerald-100 to-rose-100 rounded-full overflow-x-auto max-w-full scrollbar-hide scroll-smooth px-6 mb-4">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="relative group animate-fade-in-up cursor-pointer flex-none"
            style={{
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {/* Avatar with multiple animations */}
            <img
              src={`https://i.pravatar.cc/150?img=${i + 3}`}
              alt={`channel-${i}`}
              className="rounded-full size-16 flex-none shrink-0 object-cover 
                      transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      group-hover:scale-110 group-hover:-translate-y-2
                      group-hover:ring-4 group-hover:ring-emerald-200/30
                      group-hover:shadow-lg group-hover:shadow-emerald-100/40
                      hover:rotate-[5deg]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelScroller;
