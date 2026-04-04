import React from "react";
import { Folder, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
  };
}
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.3-.4-4 1.5a13.9 13.9 0 0 0-7 0C4.3 1.6 3 2 3 2a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 1.5 12c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="group border rounded-lg flex flex-col overflow-hidden transition-all
                    bg-white border-gray-200 hover:border-blue-400 hover:shadow-md
                    dark:bg-dark-surface dark:border-dark-border-soft dark:hover:border-blue-500 dark:hover:shadow-lg"
    >
      {/* Thumbnail */}
      <div
        className="h-32 flex items-center justify-center border-b transition-colors
                      bg-gray-50 border-gray-100 group-hover:bg-blue-50
                      dark:bg-dark-surface-2 dark:border-dark-border dark:group-hover:bg-dark-hover"
      >
        <Folder
          size={64}
          className="text-mint-500 fill-mint-500/10 group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* File Info */}
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3
            className="font-bold text-sm truncate
                         text-gray-800 dark:text-dark-text"
          >
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <ExternalLink
                  size={14}
                  className="text-gray-400 hover:text-mint-600 dark:text-dark-text-muted dark:hover:text-mint-400 cursor-pointer transition-colors"
                />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs line-clamp-2 mb-3 text-gray-500 dark:text-dark-text-muted">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded border
                         bg-gray-100 text-gray-600 border-gray-200
                         dark:bg-dark-surface-2 dark:text-dark-text-muted dark:border-dark-border-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
