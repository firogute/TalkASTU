const features = [
  {
    title: "Anonymous Confessions",
    desc: "Spill your secrets, crushes, or frustrations without revealing your identity.",
    icon: "🤫",
  },
  {
    title: "Hot Takes & Polls",
    desc: "Drop savage opinions or start polls to see where the crowd stands.",
    icon: "🔥",
  },
  {
    title: "Campus Roast Zone",
    desc: "Lighthearted roasts and meme-worthy moments — all in good fun.",
    icon: "😂",
  },
];

const FeaturesSection = () => (
  <section className="py-16">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Why TalkASTU?
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 cursor-pointer mx-auto max-w-100"
        >
          <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
          <h3 className="text-xl font-semibold text-emerald-600 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
