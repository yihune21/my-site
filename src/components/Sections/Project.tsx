import React from "react";
import { Code } from "lucide-react";
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
    // githubUrl: "https://github.com/user/az-scooter",
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
    // githubUrl: "#",
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
    // githubUrl: "https://github.com/yihune21/Event_Calendar_Reminder_System.git",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-6">
      <h2
        className="flex items-center gap-2 font-bold mb-6 border-b pb-2
                     text-gray-700 border-gray-100
                     dark:text-dark-text dark:border-dark-border-soft"
      >
        <Code size={18} className="text-mint-600" /> My_Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
