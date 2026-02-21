import frank1 from '../assets/frank1.jpg'
import frank2 from '../assets/frank2.jpeg'
import frank3 from '../assets/frank3.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-teal-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center w-full">

        {/* Main Heading */}
        <div>
        <span className="w-16 h-1 bg-indigo-600 mb-8"></span>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Hi, I'm <span className="text-cyan-600">Frank Matho</span>.
          <br />
          I build modern web applications
          with clean architecture and
          thoughtful design.
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-lg text-black max-w-2xl">
          Frontend-focused developer specializing in React,
          responsive interfaces, and scalable UI systems.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-lime-300 text-white rounded-md hover:bg-lime-500 transition border-none"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-lime-300 text-white border-none rounded-md hover:bg-lime-500 transition"
          >
            Contact Me
          </a>
        </div>
        </div>
        
        <div className='relative'>
           <div className=" relative bg-white/10 backdrop-blur-sm p-0.5 rounded-2xl">
             <img
               src={frank1}
               alt="frank"
               className="w-full h-[500px] bg-white/10 backdrop-blur-sm object-cover rounded-2xl"
             />
           </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;