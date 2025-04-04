import { FaTelegram } from "react-icons/fa";

const channelRow = (channels, colorClass, textColor) =>
  channels.map((channel, i) => (
    <a
      key={i}
      href={`https://t.me/${channel.replace("#", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-6 py-3 ${colorClass} ${textColor} rounded-full font-medium hover:opacity-90 transition-all`}
    >
      <FaTelegram className="mr-2" /> {channel}
    </a>
  ));

const ChannelTicker = () => {
  const row1 = [
    "#ASTU-POST",
    "#ASTU-ENTERTAINMENT",
    "#ASTU-GENERAL",
    "#ASTU-ONE",
    "#ASTU-FRESH",
  ];
  const row2 = [
    "#ASTU-NEWS",
    "#ASTU-MEMES",
    "#ASTU-CHAT",
    "#ASTU-HELP",
    "#ASTU-LOVE",
  ];

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Top <span className="text-emerald-600">ASTU</span> Telegram Channels
        </h2>
        <p className="text-center text-gray-600 mb-3 max-w-2xl mx-auto">
          Join the conversation in these student-run channels
        </p>

        <div className="relative h-32 overflow-hidden bg-white my-4">
          <div className="absolute top-2 left-0 flex items-center space-x-8 whitespace-nowrap animate-marquee">
            {channelRow(row1, "bg-emerald-100", "text-emerald-800")}
            {channelRow(row1, "bg-emerald-100", "text-emerald-800")}
          </div>
          <div className="absolute bottom-2 left-0 flex items-center space-x-8 whitespace-nowrap animate-marquee-reverse">
            {channelRow(row2, "bg-rose-100", "text-rose-800")}
            {channelRow(row2, "bg-rose-100", "text-rose-800")}
          </div>
        </div>

        <button className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-medium shadow-md w-fit mx-auto my-6">
          + Add Your Channel
        </button>
      </div>
    </section>
  );
};

export default ChannelTicker;
