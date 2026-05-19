import React from "react";
import { Cpu, Terminal, Database, Wrench } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Terminal size={20} className="text-mint-500" />,
    skills: [
      "React",
      "Next.js",
      "JavaScript/TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    name: "Backend",
    icon: <Cpu size={20} className="text-mint-500" />,
    skills: [
      "Node.js",
      "Express",
      "JavaScript/TypeScript",
      "Python",
      "Django",
      "Golang",
      "Odoo",
    ],
  },
  {
    name: "Database & ERP",
    icon: <Database size={20} className="text-mint-500" />,
    skills: ["PostgreSQL", "MongoDB", "Odoo", "SQLC"],
  },
  {
    name: "Tools & Others",
    icon: <Wrench size={20} className="text-mint-500" />,
    skills: ["Git", "GitHub", "GitLab", "Docker", "RabbitMQ", "Linux"],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="py-6 animate-fade-in">
      <h2
        className="flex items-center gap-2 font-bold mb-6 border-b pb-2
                     text-gray-700 border-gray-100
                     dark:text-dark-text dark:border-dark-border-soft"
      >
        <Cpu size={18} className="text-mint-600" /> Technical_Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 shadow-sm
                       bg-white border-gray-200
                       dark:bg-dark-surface dark:border-dark-border-soft"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-gray-50 dark:bg-dark-surface-2 border border-gray-100 dark:border-dark-border">
                {category.icon}
              </div>
              <h3 className="font-bold text-gray-800 dark:text-dark-text">
                {category.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md font-medium border
                             bg-zinc-100 text-zinc-700 border-zinc-200
                             dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
