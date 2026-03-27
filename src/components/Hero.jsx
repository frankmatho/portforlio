import frank1 from '../assets/frank1.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center w-full">

        {/* Left — Text */}
        <div>
          {/* Accent line — fixed to block so it actually renders */}
          <div className="w-16 h-1 bg-indigo-500 mb-8 rounded-full"></div>

          {/* Badge */}
          <span className="inline-block text-sm text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1 rounded-full mb-6">
            Available for work
          </span>

          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-indigo-400">Frank Matho</span>.
            <br />
            <span className="text-slate-300 text-4xl md:text-5xl font-semibold">
              I build modern web applications.
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-400 max-w-xl leading-relaxed">
            Fullstack software developer specializing in React, responsive
            interfaces, and scalable UI systems — as well as backend systems
            with PostgreSQL, MongoDB, and Node.js.
          </p>

          {/* Buttons — visually distinct */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition font-medium"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded-md hover:border-indigo-500 hover:text-white transition font-medium"
            >
              Contact Me
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex gap-10">
            <div>
              <p className="text-white text-2xl font-bold">7+</p>
              <p className="text-slate-500 text-sm mt-1">Projects built</p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold">3+</p>
              <p className="text-slate-500 text-sm mt-1">Years experience</p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold">5+</p>
              <p className="text-slate-500 text-sm mt-1">Technologies</p>
            </div>
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative">
          {/* Decorative background block */}
          <div className="absolute -top-6 -right-6 w-full h-full bg-indigo-500/10 rounded-3xl border border-indigo-500/20"></div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={frank1}
              alt="Frank Matho"
              className="w-full h-[500px] object-cover brightness-90 contrast-105 saturate-90"
            />
            {/* Fixed gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

            {/* Name tag at bottom of image */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl px-4 py-3">
                <p className="text-white font-semibold">Frank Matho</p>
                <p className="text-slate-400 text-sm">Fullstack Developer · Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;