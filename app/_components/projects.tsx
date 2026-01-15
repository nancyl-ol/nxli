"use client";
import { useState } from 'react';

const defaultNumber = 5;
const projects = [
  {
    title: 'OneNote Class Notebook',
    description: 'OneNote for the classroom, built for collaboration and sharing materials and assignments',
    tech: ['15M MAU', 'C#', 'Azure', 'React TS', 'Razor'],
    link: 'https://www.onenote.com/classnotebook',
    year: '2025'
  },
  {
    title: 'Reading Coach',
    description: 'AI-powered personalized reading practice for every student',
    tech: ['100k MAU', 'C#', 'Azure', 'ASP.NET', 'React TS', 'Webpack'],
    link: 'https://unlocked.microsoft.com/reading-coach/',
    year: '2024'
  },
  {
    title: 'Search Progress',
    description: 'Information literacy training to teacher students effective search query composition and result evaluation',
    tech: ['10k MAU', 'C#', 'Azure', 'ASP.NET', 'React TS', 'Webpack'],
    link: 'https://techcommunity.microsoft.com/blog/educationblog/introducing-search-progress-a-new-way-to-assign-and-track-research-projects-in-m/3903493',
    year: '2023'
  },
  {
    title: 'School Connection Private Preview',
    description: 'Increase visiblity for parents and guardians for their child\'s academic progress',
    tech: ['20+ schools', 'C#', 'Azure', 'ASP.NET', 'GraphQL', 'React TS', 'Webpack'],
    link: 'https://techcommunity.microsoft.com/blog/educationblog/introducing-school-connection-a-new-way-for-parents-and-guardians-to-stay-engage/4006352',
    year: '2022'
  },
  {
    title: 'Dash',
    description: 'Edge extension that lets users train an AI agent to perform personalized tasks online',
    tech: ['JavaScript'],
    link: 'https://news.microsoft.com/source/features/work-life/what-if-you-could-train-your-browser-what-to-do-customizable-digital-assistant-wins-microsofts-first-all-virtual-hackathon/',
    year: '2020'
  },
  {
    title: 'Windows Web Account Manager',
    description: 'OS component enabling cloud identity experiences on every Windows device',
    tech: ['C++'],
    link: 'https://docs.azure.cn/en-us/entra/identity-platform/scenario-desktop-acquire-token-wam',
    year: '2019'
  },
  {
    title: 'APPINITE: HCI Research',
    description: 'Programming-by-demonstration system for Android users',
    tech: ['Java'],
    link: '/APPINITE.pdf',
    year: '2017'
  },
    {
    title: 'Natural Authentication',
    description: 'Internship project to extend the Windows Natural Authentication service to leverage additional signals',
    tech: ['C++'],
    year: '2017'
  },
  {
    title: '"Pebbles" Kernel',
    description: 'Simple UNIX-like operating system built from scratch',
    tech: ['C'],
    year: '2017'
  },
  {
    title: 'Wikipedia Q&A',
    description: 'Natural language system for question & answer generation based on a given Wikipedia article',
    tech: ['Python', 'NLTK'],
    link: 'https://www.youtube.com/watch?v=D-5220Znohk',
    year: '2016'
  },
  {
    title: 'Dynamic Lock',
    description: 'Internship project to prototype a Windows auto-locking mechanism when you walk away with your paired Bluetooth device',
    tech: ['C++'],
    link: 'https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-feature-dynamic-lock',
    year: '2016'
  },
  {
    title: 'Surrondify',
    description: 'Hackathon project to synchronously stream music across devices',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    link: 'https://devpost.com/software/surroundify',
    year: '2015'
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const onClick = (link : string|undefined) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  }

  const ProjectItem = ({ project, isLast }: { project: typeof projects[0], isLast: boolean }) => (
    <div
      className={`p-7 ${!isLast && 'border-b'} border-black hover:bg-neutral-100 transition-colors ${project.link && "hover:cursor-pointer"} group`}
      onClick={() => onClick(project.link)}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-2">
          <span className="text-neutral-700">{project.year}</span>
        </div>
        <div className="md:col-span-10">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-neutral-950 text-lg font-medium group-hover:text-indigo-500 transition">
              {project.title}
            </h3>
            {project.link && (
              <a
                href={project.link}
                aria-label="Project link"
                target="_blank" rel="noreferrer noopener"
              >
                🔗
              </a>
            )}
          </div>
          <p className="text-neutral-700 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="rounded-sm p-1 px-2 text-neutral-700 bg-indigo-100 text-sm uppercase tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const firstProjects = projects.slice(0, defaultNumber);
  const rest = projects.slice(defaultNumber);

  return (
    <section id="projects" className="px-6 py-18 max-w-4xl mx-auto border-b border-black">
      <h2 className="text-neutral-950 mb-12 pb-3 border-b-2 border-black inline-block text-xl font-medium">Projects</h2>

      <div className="space-y-0 border border-black rounded-xs">
        {firstProjects.map((project, index) => (
          <ProjectItem key={index} project={project} isLast={!showAll && index === defaultNumber - 1} />
        ))}

        <div className={`grid transition-[grid-template-rows] duration-1000 ease-in-out ${showAll ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden min-h-0">
            {rest.map((project, index) => (
              <ProjectItem key={index + defaultNumber} project={project} isLast={index === rest.length - 1} />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 text-neutral-700 transition-colors hover:cursor-pointer hover:text-indigo-500"
      >
        {showAll ? 'Show less ↑' : 'Show all ↓'}
      </button>
    </section>
  );
}
