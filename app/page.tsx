export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, user authentication, and drag-and-drop interface.",
      technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts, real-time data updates, and custom reporting features.",
      technologies: ["Next.js", "Chart.js", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Social Media App",
      description: "Social platform with user profiles, messaging, notifications, and feed algorithm.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      link: "#",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "VS Code"] },
    { category: "Other", items: ["REST APIs", "GraphQL", "Responsive Design", "SEO", "Performance"] },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Mahesh Palla</h2>
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Full-Stack Web Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Building modern, scalable web applications with React, Next.js, and Node.js. I create seamless user experiences and robust backends that power real-world solutions.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg font-semibold transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-xl hover:shadow-lg dark:hover:shadow-blue-900/20 transition border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Have a project in mind? I'd love to hear from you. Get in touch and let's create something amazing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 Mahesh Palla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}