const projects = [
  {
    title: "Tembea",
    description:
      "Tembea is a website that is designed for explorers and anyone who interested in doing outdoor activities in kenya",
    image: "https://dialogue.earth/content/uploads/2022/07/20220722_Kenya-Mount-Elgon-Ogiek-settlement-aerial_StephenNderitu.jpg",
    tech: ["React", "Javascript", "Tailwind", "Vite", "PostgreSQL"],
    live: "https://tembea-f9pg.vercel.app/",
    github: "https://github.com/frankmatho/Tembea",
  },
  {
    title: "Jipange",
    description:
      "Jipange is a website that helps freelancers and small teams stay on top of their clients, projects, tasks and invoices — all in one platform.",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Vite", "Typescript", "Tailwind", "PostgreSQL"],
    live: "https://jipange-five.vercel.app/",
    github: "https://github.com/frankmatho/Jipange",
  },
  {
    title: "MunchiesGarden",
    description:
      "MunchiesGarden is a food-ordering website that let's the user be able to order food from the comfort of their home.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    tech: ["React", "Tailwind", "Vite", "PostgreSQL"],
    live: "https://munchiesgarden.vercel.app/",
    github: "https://github.com/frankmatho/munchiesgarden",
  },
  {
    title: "Educore",
    description:
      "Educore is a website that is designed for schools to help them keep better track records of the students and teacher in school and see how students progress",
    image: "https://plus.unsplash.com/premium_photo-1663099814676-72cfabfb91f8?q=80&w=1090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["System Design", "Backend Planning", "Vite", "PostgreSQL"],
    live: "https://educore-tau.vercel.app/login",
    github: "https://github.com/frankmatho/educore",
  },
  {
    title: "Recipe Finder",
    description:
      "This is a Modern recipe discovery app with dynamic search, dark mode, favorites persistence, and responsive UI that helps users find recipes for food they want.",
    image: "https://img.freepik.com/free-photo/top-view-food-ingredients-with-vegetable-soup-bowl-notebook_23-2148834720.jpg?semt=ais_hybrid&w=740&q=80",
    tech: ["React", "Tailwind", "API"],
    live: "https://recipe-finder-sage-one.vercel.app/",
    github: "https://github.com/frankmatho/recipe-finder",
  },
  {
    title: "BookHaven",
    description:
      "This is an Online book platform with collection management, search functionality, and category organization that will help the seller keep track of books bought.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://bookhaven-g33a.vercel.app/",
    github: "https://github.com/frankmatho/bookhaven",
  },
  {
    title: "Afya",
    description:
      "This is a system that is designed for hospitals to help with storing and managing patients records as well as doctors",
    image: "https://images.unsplash.com/photo-1599045118108-bf9954418b76?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Tailwind", "Vite", "PostgreSQL"],
    live: "https://afya-ochre.vercel.app/login",
    github: "https://github.com/frankmatho/afya",
  }
];

function Projects() {
  return (
    <section id="projects" className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <div className="w-16 h-1 bg-indigo-500 mb-8"></div>
          <h2 className="text-white text-4xl font-bold">Selected Projects</h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl">
            A curated selection of applications showcasing frontend architecture,
            responsive systems, and full-stack thinking.
          </p>
        </div>

        {/* Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center`}
            >
              {/* Image — clicking opens live site in new tab */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cursor-pointer relative overflow-hidden rounded-2xl shadow-lg group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center gap-2">
                      <h3 className="text-white text-2xl font-semibold tracking-wide">
                        {project.title}
                      </h3>
                      <span className="text-slate-300 text-sm">Click to visit site ↗</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full border border-slate-600"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 font-medium hover:text-indigo-300 hover:underline transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 font-medium hover:text-white hover:underline transition-colors"
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