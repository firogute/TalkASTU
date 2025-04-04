import { FaTelegram } from "react-icons/fa";

const getRandomColorClass = () => {
  const colors = [
    "bg-red-800",
    "bg-green-800",
    "bg-blue-800",
    "bg-yellow-800",
    "bg-purple-900",
    "bg-pink-900",
    "bg-indigo-900",
    "bg-emerald-900",
    "bg-orange-900",
    "bg-rose-900",
    "bg-cyan-900",
    "bg-lime-900",
    "bg-fuchsia-900",
    "bg-teal-900",
    "bg-amber-900",
    "bg-violet-900",
    "bg-sky-900",
    "bg-zinc-900",
    "bg-stone-900",
    "bg-neutral-900",
    "bg-slate-900",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const channelRow = (channels) =>
  channels.map(({ name, link }, i) => {
    const colorClass = getRandomColorClass(); // Get a random color class
    return (
      <a
        key={i}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center px-6 py-3 ${colorClass} text-white rounded-full font-medium hover:opacity-90 transition-all`}
      >
        <FaTelegram className="mr-2" /> {name}
      </a>
    );
  });

const ChannelTicker = () => {
  const row1 = [
    { name: "#ASTU-POST", link: "https://t.me/Astupost" },
    { name: "#ASTU-ENTERTAINMENT", link: "https://t.me/ASTU_Entertainment" },
    { name: "#ASTU-GENERAL", link: "https://t.me/fresh_astu" },
    { name: "#ASTU-CLASSIC", link: "https://t.me/Astuclassic1" },
    {
      name: "#ASTU-FRESHMAN-CHANNEL",
      link: "https://t.me/ASTU_Freshman_Channel",
    },
  ];
  const row2 = [
    { name: "#ASTU-IGNITE", link: "https://t.me/Astu_Ignite_minds" },
    { name: "#ASTU-CSE", link: "https://t.me/ASTU_CSE_2015" },
    { name: "#ASTU-SHARE", link: "https://t.me/astu_share" },
    { name: "#ASTU-ECE", link: "https://t.me/eceunity" },
    { name: "#ASTU-TECH", link: "https://t.me/ASTU_ELEC_2015" },
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
            {channelRow(row1)}
            {channelRow(row1)}
          </div>
          <div className="absolute bottom-2 left-0 flex items-center space-x-8 whitespace-nowrap animate-marquee-reverse">
            {channelRow(row2)}
            {channelRow(row2)}
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
