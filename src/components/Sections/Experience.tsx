import React from "react";
import { FileText, Briefcase } from "lucide-react";

interface Job {
  id: number;
  company: string;
  role: string;
  date: string;
}

const jobs: Job[] = [
  {
    id: 1,
    company: "ETTA Solutions PLC",
    role: "Senior Odoo Developer",
    date: "2025-Present",
  },
  {
    id: 2,
    company: "GraceERP Consultancy PLC",
    role: "Odoo Developer",
    date: "2024",
  },
  {
    id: 3,
    company: "Addissytems PLC",
    role: "Full Stack Developer Intern",
    date: "2024-2025",
  },
];

const Experience: React.FC = () => {
  return (
    <div className="py-6">
      <h2
        className="flex items-center gap-2 font-bold mb-6 border-b pb-2
                     text-gray-700 border-gray-100
                     dark:text-dark-text dark:border-dark-border-soft"
      >
        <Briefcase size={18} className="text-mint-600" /> Professional_History
      </h2>

      <div
        className="overflow-hidden rounded-t-lg border
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
                className="border-b cursor-default transition-colors
                           hover:bg-blue-50 border-gray-50
                           dark:border-dark-border dark:hover:bg-dark-hover"
              >
                <td className="px-4 py-3 flex items-center gap-2">
                  <FileText
                    size={16}
                    className="text-blue-400 dark:text-blue-500 shrink-0"
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
    </div>
  );
};

export default Experience;
