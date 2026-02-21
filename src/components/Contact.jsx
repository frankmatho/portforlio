function Contact() {
  return (
    <section id="contact" className="py-28 bg-teal-300">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="w-16 h-1 bg-indigo-600 mx-auto mb-8"></div>

        <h2 className="text-4xl font-bold mb-6">
          Let’s Work Together
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          I’m currently open to new opportunities and collaborations.
          If you have a project in mind or just want to connect, feel free to reach out.
        </p>

        <div className="flex justify-center gap-8 text-lg font-medium">

          <a
            href="mailto:your@email.com"
            className="text-indigo-600 hover:underline"
          >
            Email
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>

          <a
            href="#"
            className="hover:underline"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;