const projects = [
  {
    title: "Recipe Finder",
    description:
      "Modern recipe discovery app with dynamic search, dark mode, favorites persistence, and responsive UI.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    tech: ["React", "Tailwind", "API"],
    live: "#",
    github: "#",
  },
  {
    title: "Book Haven",
    description:
      "Online book platform with collection management, search functionality, and category organization.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    tech: ["React", "Node.js", "Express"],
    live: "#",
    github: "#",
  },
  {
    title: "Nova Aurora",
    description:
      "Modern real estate website with structured property layouts and responsive design system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    tech: ["React", "TypeScript", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Interactive admin panel with structured data views and modular UI components.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tech: ["React", "Charts", "UI Architecture"],
    live: "#",
    github: "#",
  },
  {
    title: "Food Ordering UI",
    description:
      "Frontend ordering system with cart logic, login validation, and checkout flow.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    tech: ["React", "State Management", "UI Design"],
    live: "#",
    github: "#",
  },
  {
    title: "SACCO Integration Concept",
    description:
      "Concept system for integrating M-Pesa transactions with financial management software.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
    tech: ["System Design", "Backend Planning"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-28 bg-teal-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <div className="w-16 h-1 bg-indigo-600 mb-8"></div>
          <h2 className="text-4xl font-bold">Selected Projects</h2>
          <p className="mt-4 text-black text-lg max-w-2xl">
            A curated selection of applications showcasing frontend architecture,
            responsive systems, and full-stack thinking.
          </p>
        </div>

        {/* Grid */}
        <div className="space-y-32">

          {projects.map((project, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>

              {/* Image */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
              <div className=" cursor-pointer relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
                />

                {/*overlay*/}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold tracking-wide">
                  {project.title}
                </h3>
                </div>
              </div>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-black mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-200 text-sm rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <a
                    href={project.live}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Live Demo →
                  </a>

                  <a
                    href={project.github}
                    className="text-gray-900 font-medium hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;