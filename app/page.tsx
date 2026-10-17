const projects = [
  {
    title: "Gymme — Fitness Website",
    description:
      "A fitness landing page built with React and Vite, featuring workout information, pricing, community content, FAQs, and calls to action.",
    technologies: ["React", "Vite", "Tailwind CSS", "AOS"],
    githubUrl: "https://github.com/fourgods7/Gymme",
    demoUrl: null,
    visual: "FITNESS",
  },
  {
    title: "E-commerce Shopper",
    description:
      "A React shopping website with a product listing page, product detail routes, and shared navigation and footer components.",
    technologies: ["React", "Vite", "React Router"],
    githubUrl: "https://github.com/fourgods7/E-commerce-shopper",
    demoUrl: null,
    visual: "E-COMMERCE",
  },
  {
    title: "UI/UX Website",
    description:
      "A polished business and fintech-style landing page with navigation, hero content, stats, billing sections, testimonials, and calls to action.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/fourgods7/ui-ux_website",
    demoUrl: null,
    visual: "UI / UX",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Git",
  "GitHub",
  "SQL",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-xl font-bold tracking-tight">
          Ridwan<span className="text-blue-500">.</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:border-blue-500"
        >
          Hire Me
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-5 text-sm text-blue-400">
          👋 Hello, I'm
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
          Olaniyan <span className="text-blue-500">Ridwan.</span>
        </h1>

        <h2 className="mt-5 text-2xl font-medium text-gray-300 sm:text-3xl">
          Full Stack Developer
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-gray-400">
          I build modern, responsive and scalable web applications
          using React, Next.js, TypeScript, Node.js and modern
          web technologies.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
          >
            View Projects →
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition hover:border-blue-500"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex gap-5 text-sm text-gray-400">
          <a
            href="https://github.com/fourgods7"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-medium text-blue-400">
            GET TO KNOW ME
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            About Me
          </h2>

          <p className="mt-7 max-w-3xl leading-8 text-gray-400">
            I'm Olaniyan Ridwan, a developer passionate about
            building modern web applications that combine clean
            design with reliable functionality. I enjoy turning
            ideas into practical digital products and continuously
            improving my development skills.
          </p>

          <h3 className="mb-5 mt-10 text-xl font-semibold">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300 transition hover:border-blue-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-gray-800 bg-[#0d0d0d]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-medium text-blue-400">
            WHAT I'VE BUILT
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A selection of projects I'm building and refining. Open the source
            code on GitHub, or check back as live demos are published.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-gray-800 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
              >
                <div className="mb-6 flex h-36 items-center justify-center rounded-lg border border-blue-900/40 bg-gradient-to-br from-blue-950 via-[#111827] to-gray-900">
                  <span className="text-sm font-semibold tracking-[0.3em] text-blue-300">
                    {project.visual}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-16 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-gray-900 px-2 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-gray-800 pt-4">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-700"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-500">
                      Demo coming soon
                    </span>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium transition hover:border-blue-500 hover:text-blue-400"
                  >
                    View Code ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-medium text-blue-400">
            MY JOURNEY
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Experience
          </h2>

          <div className="mt-12 max-w-3xl space-y-10">
            {[
              {
                year: "Present",
                title: "Full Stack Development",
                description:
                  "Building modern web applications and improving my frontend and backend development skills.",
              },
              {
                year: "Previous",
                title: "Frontend Development",
                description:
                  "Developing responsive interfaces with JavaScript, React and modern styling tools.",
              },
              {
                year: "Beginning",
                title: "Learning and Building",
                description:
                  "Learning web technologies and applying my knowledge through practical projects.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative border-l border-gray-700 pl-6"
              >
                <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-blue-500" />

                <p className="text-sm text-blue-400">{item.year}</p>

                <h3 className="mt-2 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-gray-800 bg-[#0d0d0d]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-medium text-blue-400">
            LET'S CONNECT
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Contact Me
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-400">
            Have a project in mind or an opportunity to discuss?
            I'd love to hear from you.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
          >
            Send Me an Email →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Olaniyan Ridwan. All rights reserved.
      </footer>
    </main>
  );
}
