const projects = [
  {
    title: 'Cool Project',
    description: 'Built something neat with React',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/yourusername/project-one',
    year: '2024'
  },
  {
    title: 'Another Thing',
    description: 'Made this for fun',
    tech: ['TypeScript', 'Next.js'],
    github: 'https://github.com/yourusername/project-two',
    year: '2024'
  },
  {
    title: 'Side Project',
    description: 'Still working on it',
    tech: ['Python'],
    github: 'https://github.com/yourusername/project-three',
    year: '2023'
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-4xl mx-auto border-b border-black">
      <h2 className="text-neutral-900 mb-12 pb-3 border-b-2 border-black inline-block">Projects</h2>
      
      <div className="space-y-0 border border-black">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-8 border-b border-black last:border-b-0 hover:bg-neutral-50 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-2">
                <span className="text-neutral-500">{project.year}</span>
              </div>
              <div className="md:col-span-10">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-neutral-900">{project.title}</h3>
                  {project.github && (
                    <a 
                      href={project.github}
                      className="text-neutral-900 hover:text-neutral-500 transition-colors flex-shrink-0"
                      aria-label="View on GitHub"
                    >
                      G
                    </a>
                  )}
                </div>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-neutral-500 text-sm uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
