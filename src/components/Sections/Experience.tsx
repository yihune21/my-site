import React, { useState } from "react";
import { FileText, Briefcase, X } from "lucide-react";

interface Job {
  id: number;
  company: string;
  role: string;
  date: string;
  description: string;
}

const jobs: Job[] = [
  {
    id: 1,
    company: "ETTA Solutions PLC",
    role: "Senior Odoo Developer",
    date: "2025-Present",
    description: "Leading the development of customized ERP solutions using Odoo. Designing scalable architecture and mentoring junior developers.",
  },
  {
    id: 2,
    company: "GraceERP Consultancy PLC",
    role: "Odoo Developer",
    date: "2024",
    description: "Developed and maintained Odoo modules for various business operations. Collaborated with cross-functional teams to integrate biometric attendance systems.",
  },
  {
    id: 3,
    company: "Addissytems PLC",
    role: "Full Stack Developer Intern",
    date: "2024-2025",
    description: "Assisted in building responsive web applications using React and Node.js. Contributed to API development and frontend UI improvements.",
  },
];

const Experience: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="py-6 relative min-h-full">
      <h2
        className="flex items-center gap-2 font-bold mb-6 border-b pb-2
                     text-gray-700 border-gray-100
                     dark:text-dark-text dark:border-dark-border-soft"
      >
        <Briefcase size={18} className="text-mint-600" /> Professional_History
      </h2>

      <div
        className="overflow-hidden rounded-t-lg border shadow-sm
                      border-gray-200 dark:border-dark-border-soft"
      >
        <table
          className="w-full text-left text-sm
                          bg-white dark:bg-dark-surface"
        >
          <thead
            className="border-b
                            bg-gray-50 text-gray-500 border-gray-200
                            dark:bg-dark-surface-2 dark:text-dark-text-muted dark:border-dark-border"
          >
            <tr>
              <th className="px-4 py-2 font-medium">Name</th>
              <th className="px-4 py-2 font-medium">Period</th>
              <th className="px-4 py-2 font-medium">Role</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="border-b cursor-pointer transition-colors
                           hover:bg-zinc-100 border-gray-50
                           dark:border-dark-border dark:hover:bg-dark-hover"
              >
                <td className="px-4 py-3 flex items-center gap-2">
                  <FileText
                    size={16}
                    className="text-zinc-500 dark:text-zinc-400 shrink-0"
                  />
                  <span className="font-medium text-gray-800 dark:text-dark-text">
                    {job.company}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-400 dark:text-dark-text-muted">
                  {job.date}
                </td>
                <td className="px-4 py-3 text-gray-400 dark:text-dark-text-muted">
                  {job.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* File Modal */}
      {selectedJob && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-lg rounded-lg shadow-2xl border flex flex-col overflow-hidden animate-slide-up
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
                <span className="text-xs font-semibold">{selectedJob.company.replace(/\s+/g, '_').toLowerCase()}.txt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  className="p-0.5 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 rounded transition-colors text-gray-500 dark:text-gray-400"
                  onClick={() => setSelectedJob(null)}
                >
                  <X size={14} />
                </button>
              </div>
            </div>
            {/* Window Content */}
            <div className="p-6 font-mono text-sm leading-relaxed text-gray-800 dark:text-dark-text bg-[#fafafa] dark:bg-[#2a2a2a] max-h-[70vh] overflow-y-auto">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">{selectedJob.role}</h3>
                <h4 className="text-mint-600 dark:text-mint-400 font-semibold">{selectedJob.company}</h4>
                <p className="text-xs text-gray-500 dark:text-dark-text-muted mt-1">Period: {selectedJob.date}</p>
              </div>
              <div className="w-full h-px bg-gray-200 dark:bg-dark-border-soft mb-4"></div>
              <p>{selectedJob.description}</p>
              <br />
              <p className="opacity-50 mt-4">&gt; End of file.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
