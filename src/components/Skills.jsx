import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub,
  FaDocker 
} from "react-icons/fa";

import { 
  SiJavascript, 
  SiTailwindcss, 
  SiTypescript, 
  SiExpress, 
  SiFigma, 
  SiVite 
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <div className="w-16 h-1 bg-indigo-600 mb-8"></div>
          <h2 className="text-white text-4xl font-bold">Technical Skills</h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl">
            Technologies and tools I use to design, build, and scale
            modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Frontend */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-none hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-6">
            Frontend Development
            </h3>

          <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaReact className="text-indigo-600 text-xl" />
            <span>React</span>
          </div>

          <div className="flex items-center gap-3">
            <SiJavascript className="text-yellow-500 text-xl" />
            <span>JavaScript</span>
          </div>

          <div className="flex items-center gap-3">
            <SiTailwindcss className="text-sky-500 text-xl" />
            <span>Tailwind CSS</span>
          </div>

           <div className="flex items-center gap-3">
             <SiTypescript className="text-blue-600 text-xl" />
             <span>TypeScript</span>
           </div>
          </div>
          </div>

          {/* Backend */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-none hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-6">
            Backend & Architecture
           </h3>

           <div className="space-y-4">
             <div className="flex items-center gap-3">
             <FaNodeJs className="text-green-600 text-xl" />
             <span>Node.js</span>
            </div>

            <div className="flex items-center gap-3">
              <SiExpress className="text-gray-700 text-xl" />
              <span>Express</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-5 h-5 bg-indigo-600 rounded-sm"></span>
              <span>REST APIs</span>
            </div>

            <div className="flex items-center gap-3">
              <BiLogoPostgresql className="text-gray-700 text-xl"/>
              <span>PostgreSQL</span>
            </div>

            <div className="flex items-center gap-3">
              <FaDocker className="text-blue-700 text-xl"/>
              <span>Docker</span>
            </div>
           </div>
          </div>

          {/* Tools */}
         <div className="bg-white p-8 rounded-2xl shadow-sm border border-none hover:shadow-md transition">
           <h3 className="text-xl font-semibold mb-6">
           Tools & Workflow
           </h3>

           <div className="space-y-4">
           <div className="flex items-center gap-3">
             <FaGitAlt className="text-red-500 text-xl" />
             <span>Git</span>
           </div>

           <div className="flex items-center gap-3">
             <FaGithub className="text-black text-xl" />
             <span>GitHub</span>
           </div>

           <div className="flex items-center gap-3">
             <SiVite className="text-purple-500 text-xl" />
             <span>Vite</span>
           </div>

           <div className="flex items-center gap-3">
             <SiFigma className="text-pink-500 text-xl" />
             <span>Figma</span>
           </div>
           </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;