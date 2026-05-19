import React, { useState } from "react";
import { Code, X, FileText } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectData: Project[] = [
  {
    id: "1",
    title: "Az_Scooter_Backend",
    description:
      "Scooter rental system built with Go,SQLC , Goose and PostgreSQL.",
    tech: ["Go", "PostgreSQL", "Chi", "SQLC", "Goose"],
    liveUrl: "https://az-scootz.vercel.app/",
  },
  {
    id: "2",
    title: "Aggregated_Bus_System",
    description:
      "This is a microservices-based Aggregated Bus System, integrating multiple bus service vendors to provide seamless booking, payments, and notifications.",
    tech: ["Node.js", "Express", "MongoDB", "RabbitMQ", "Docker"],
    liveUrl: "https://github.com/yihune21/aggregated-main-lts.git",
  },
  {
    id: "3",
    title: "Ethiopian E-invoice Integration",
    description:
      "Integrates with Ethiopia e-invoicing system for invoice and receipt management.",
    tech: ["Python", "Odoo", "XML"],
  },
  {
    id: "4",
    title: "Event_Calendar_Reminder_System",
    description:
      "A comprehensive Event Reminder and Calendar System designed to manage events, organize calendars, and send reminders via email using Twilio.",
    tech: [
      "Python",
      "Django REST Framework",
      "MongoDB",
      "RabbitMQ",
      "Tailwind CSS.",
    ],
    githubUrl: "https://github.com/yihune21/Event_Calendar_Reminder_System.git",
  },
  {
    id: "5",
    title: "Biometric_Attendance_Integration",
    description:
      "Integrate all kinds of ZKTeco based attendance machines with Odoo.",
    tech: ["Python", "Odoo", "XML"],
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-6 relative min-h-full">
      <h2
        className="flex items-center gap-2 font-bold mb-6 border-b pb-2
                     text-gray-700 border-gray-100
                     dark:text-dark-text dark:border-dark-border-soft"
      >
        <Code size={18} className="text-mint-600" /> My_Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* File Modal */}
      {selectedProject && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-2xl rounded-lg shadow-2xl border flex flex-col overflow-hidden animate-slide-up
                          bg-white border-gray-300
                          dark:bg-dark-surface dark:border-dark-border"
          >
            {/* Window Header */}
            <div
              className="h-8 flex items-center justify-between px-3 border-b select-none
                            bg-gray-100 border-gray-300 text-gray-700
                            dark:bg-dark-surface-2 dark:border-dark-border dark:text-dark-text"
            >
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-gray-500 dark:text-dark-text-muted" />
                <span className="text-xs font-semibold">{selectedProject.title.replace(/\s+/g, '_').toLowerCase()}.md</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  className="p-0.5 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 rounded transition-colors text-gray-500 dark:text-gray-400"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={14} />
                </button>
              </div>
            </div>
            {/* Window Content */}
            <div className="p-6 font-mono text-sm leading-relaxed text-gray-800 dark:text-dark-text bg-[#fafafa] dark:bg-[#2a2a2a] max-h-[75vh] overflow-y-auto">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2"># {selectedProject.title.replace(/_/g, ' ')}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded border
                                 bg-zinc-100 text-zinc-600 border-zinc-200
                                 dark:bg-dark-surface-2 dark:text-dark-text-muted dark:border-dark-border-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 dark:bg-dark-border-soft mb-4"></div>
              
              <h4 className="text-mint-600 dark:text-mint-400 font-semibold mb-2">## Description</h4>
              <p className="mb-6">{selectedProject.description}</p>

              {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                <>
                  <h4 className="text-mint-600 dark:text-mint-400 font-semibold mb-2">## Links</h4>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {selectedProject.githubUrl && (
                      <li>
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-mint-500 dark:text-zinc-400 dark:hover:text-mint-400 underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-4">
                          Source Code Repository
                        </a>
                      </li>
                    )}
                    {selectedProject.liveUrl && (
                      <li>
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-mint-500 dark:text-zinc-400 dark:hover:text-mint-400 underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-4">
                          Live Demonstration
                        </a>
                      </li>
                    )}
                  </ul>
                </>
              )}
              <br />
              <p className="opacity-50 mt-4">&gt; End of file.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
