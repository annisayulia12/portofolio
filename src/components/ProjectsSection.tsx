import { projects } from "@/constants/projects";

export default function ProjectSection() {
  return (
    <section id="projects" className="min-h-screen px-10 py-20 bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-12 text-ink">
        Latest Work
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group
              rounded-xl
              border border-blush/30
              bg-white/40
              backdrop-blur-md
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            {/* IMAGE */}
            <div className="h-48">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110
                  transition duration-300
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-ink">
                {project.title}
              </h3>

              <p className="text-sm text-ink/60 mt-1">{project.desc}</p>

              {/* LINK */}
              <a
                href={project.link}
                target="_blank"
                className="
                  inline-block mt-4
                  text-mauve
                  text-sm font-medium
                  hover:text-ink
                  transition
                "
              >
                View Documentation →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
