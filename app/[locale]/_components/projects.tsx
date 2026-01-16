"use client";
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Project } from '@/lib/i18n';

const defaultNumber = 5;

export function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as Project[];
  const [showAll, setShowAll] = useState(false);

  const onClick = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const ProjectItem = ({ project, isLast, isHidden }: { project: Project; isLast: boolean; isHidden?: boolean }) => (
    <div
      className={`p-7 ${!isLast && 'border-b'} border-black hover:border-b-0 hover:border-l-4 hover:border-l-indigo-500 hover:bg-neutral-100 hover:scale-[1.03] hover:rounded-sm origin-center transition-all ${project.link && "hover:cursor-pointer"} group`}
      onClick={() => onClick(project.link)}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
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
                tabIndex={isHidden ? -1 : undefined}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/link.svg" alt="Link" width={16} height={16} className="group-hover:animate-[wiggle_1s_ease-in-out_infinite]" />
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

  const firstProjects = items.slice(0, defaultNumber);
  const rest = items.slice(defaultNumber);

  return (
    <section id="projects" className="px-3 md:px-6 py-18 max-w-4xl mx-3 md:mx-auto border-b border-black">
      <h2 className="text-neutral-950 mb-12 pb-3 border-b-2 border-black inline-block text-xl font-medium">{t('title')}</h2>

      <div className="space-y-0 border border-black rounded-xs">
        {firstProjects.map((project, index) => (
          <ProjectItem key={index} project={project} isLast={!showAll && index === defaultNumber - 1} />
        ))}

        <div className={`grid transition-[grid-template-rows] duration-1000 ease-in-out ${showAll ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className={`min-h-0 ${!showAll && 'overflow-hidden'}`}>
            {rest.map((project, index) => (
              <ProjectItem key={index + defaultNumber} project={project} isLast={index === rest.length - 1} isHidden={!showAll} />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 text-neutral-800 transition-colors hover:cursor-pointer hover:text-indigo-500"
      >
        {showAll ? `${t('showLess')} ↑` : `${t('showAll')} ↓`}
      </button>
    </section>
  );
}
