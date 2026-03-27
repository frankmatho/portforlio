function Contact() {
  const links = [
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=officialfrank2001@gmail.com",
      icon: "✉️",
      desc: "officialfrank2001@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/frankmatho",
      icon: "💻",
      desc: "github.com/frankmatho",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/frank-matho-596867228/", // ← replace with your actual LinkedIn
      icon: "🔗",
      desc: "linkedin.com/in/frankmatho",
    },
  ];

  return (
    <section id="contact" className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-1 bg-indigo-500 mb-8 rounded-full"></div>
          <h2 className="text-white text-4xl font-bold">Let's Work Together</h2>
          <p className="mt-4 text-slate-400 text-lg max-w-xl leading-relaxed">
            I'm currently open to new opportunities and collaborations.
            If you have a project in mind or just want to connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-indigo-500 hover:bg-slate-800/80 transition-all duration-200"
            >
              <div className="text-2xl mb-3">{link.icon}</div>
              <p className="text-white font-semibold mb-1 group-hover:text-indigo-400 transition-colors">
                {link.label}
              </p>
              <p className="text-slate-500 text-sm">{link.desc}</p>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-slate-800 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Frank Matho. Built with React & Tailwind.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;