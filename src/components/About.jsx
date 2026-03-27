function About() {
  const cards = [
    {
      icon: "⚡",
      title: "Frontend Architecture",
      desc: "Component-based design, reusable systems, and clean state management across React applications.",
      accent: "indigo",
    },
    {
      icon: "🎨",
      title: "UI & UX Focus",
      desc: "Clean layouts, balanced spacing, and smooth user interactions that feel intuitive and refined.",
      accent: "teal",
    },
    {
      icon: "📈",
      title: "Continuous Growth",
      desc: "Actively building full-stack projects and expanding into scalable backend systems with Node.js and PostgreSQL.",
      accent: "purple",
    },
    {
      icon: "⚡",
      title: "Backend",
      desc: "data storage, password storage, data manipulation",
      accent:"white",
    }
  ];

  const accentMap = {
    indigo: {
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      icon: "bg-indigo-500/20 text-indigo-400",
      title: "text-indigo-400",
    },
    teal: {
      bg: "bg-teal-500/10",
      border: "border-teal-500/20",
      icon: "bg-teal-500/20 text-teal-400",
      title: "text-teal-400",
    },
    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      icon: "bg-purple-500/20 text-purple-400",
      title: "text-purple-400",
    },
    white:{
      bg: "bg-white/10",
      border: "bg-white/20",
      icon: "bg-white/20 text-white",
      title: "text-white",
    }
  };

  const skills = [
    "React", "TypeScript", "Tailwind CSS", "Node.js",
    "PostgreSQL", "MongoDB", "Express", "Vite", "Git", "Docker"
  ];

  return (
    <section id="about" className="py-28 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-1 bg-indigo-500 mb-8 rounded-full"></div>
          <h2 className="text-white text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a fullstack developer based in{" "}
              <span className="text-white font-medium">Nairobi, Kenya</span>,
              who builds modern, responsive web applications using React and scalable UI
              architecture. I care about performance, clean structure,
              and creating interfaces that feel intuitive and refined.
            </p>

            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              My goal is to combine strong engineering fundamentals
              with thoughtful design to deliver products that are both
              technically solid and visually polished — from the database
              all the way to the user's screen.
            </p>

            {/* Skills */}
            <div className="mt-10">
              <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">
                Technologies I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded-full border border-slate-600 hover:border-indigo-500 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition font-medium"
              >
                See my work →
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-slate-600 text-slate-300 rounded-md hover:border-indigo-500 hover:text-white transition font-medium"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="space-y-5">
            {cards.map((card) => {
              const a = accentMap[card.accent];
              return (
                <div
                  key={card.title}
                  className={`p-6 ${a.bg} rounded-xl border ${a.border} hover:scale-[1.02] transition-all duration-200`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg ${a.icon} flex items-center justify-center text-lg flex-shrink-0`}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg mb-2 ${a.title}`}>
                        {card.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Stat block */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                { num: "7+", label: "Projects" },
                { num: "2+", label: "Years exp." },
                { num: "∞", label: "Curiosity" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-center"
                >
                  <p className="text-white text-2xl font-bold">{s.num}</p>
                  <p className="text-slate-500 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;