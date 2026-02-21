function About() {
  return (
    <section id="about" className="py-28 bg-teal-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side - Title */}
        <div>
          <div className="w-16 h-1 bg-indigo-600 mb-8"></div>

          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-black text-lg leading-relaxed">
            I’m a frontend-focused developer who builds modern,
            responsive web applications using React and scalable UI
            architecture. I care about performance, clean structure,
            and creating interfaces that feel intuitive and refined.
          </p>

          <p className="mt-6 text-black text-lg leading-relaxed">
            My goal is to combine strong engineering fundamentals
            with thoughtful design to deliver products that are both
            technically solid and visually polished.
          </p>
        </div>

        {/* Right Side - Highlight Cards */}
        <div className="space-y-6">

          <div className="p-6 bg-lime-100 rounded-xl shadow-sm border border-none">
            <h3 className="font-semibold text-lg mb-2">
              Frontend Architecture
            </h3>
            <p className="text-black">
              Component-based design, reusable systems, and clean state management.
            </p>
          </div>

          <div className="p-6 bg-lime-100 rounded-xl shadow-sm border border-none">
            <h3 className="font-semibold text-lg mb-2">
              UI & UX Focus
            </h3>
            <p className="text-black">
              Clean layouts, balanced spacing, and smooth user interactions.
            </p>
          </div>

          <div className="p-6 bg-lime-100 rounded-xl shadow-sm border border-none">
            <h3 className="font-semibold text-lg mb-2">
              Continuous Growth
            </h3>
            <p className="text-black">
              Actively building full-stack projects and expanding into scalable backend systems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;