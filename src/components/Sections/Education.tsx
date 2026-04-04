import React from "react";
import { GraduationCap, Landmark, Calendar, Award } from "lucide-react";

interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  details?: string[];
}

const educationData: EducationEntry[] = [
  {
    degree: "Software Engineering Trainee",
    institution: " Africa To Silicon Valley (A2SV)",
    location: "Addis Ababa, Ethiopia",
    period: "01/2025 - 04/2025",
    details: [
      "Solved 300+ problems on platforms like LeetCode and Codeforces stengthening skills.",
      "Focus on data structures & algorithms",
    ],
  },
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Addis Ababa Science and Technology University",
    location: "Addis Ababa, Ethiopia",
    period: "2021 - 2025",
    details: [
      "Senior Project: Bus Aggregator Microservice",
      "Focus on Backend Systems",
    ],
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-6">
      <h2
        className="flex items-center gap-2 font-bold mb-6 border-b pb-2
                     text-gray-700 border-gray-100
                     dark:text-dark-text dark:border-dark-border-soft"
      >
        <GraduationCap size={18} className="text-mint-600" /> Academic_Records
      </h2>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm
                       bg-[#fafafa] border-gray-200
                       dark:bg-dark-surface dark:border-dark-border-soft"
          >
            {/* Window-like header */}
            <div
              className="px-4 py-2 border-b flex justify-between items-center
                            bg-gray-100 border-gray-200
                            dark:bg-dark-surface-2 dark:border-dark-border"
            >
              <span
                className="text-xs font-bold flex items-center gap-2
                               text-gray-600 dark:text-dark-text"
              >
                <Landmark size={14} className="text-mint-600" />
                {edu.institution}
              </span>
              <span
                className="text-[10px] font-mono uppercase tracking-widest
                               text-gray-400 dark:text-dark-text-muted"
              >
                Properties
              </span>
            </div>

            <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Left: Icon & period */}
              <div
                className="md:col-span-1 flex flex-col items-center justify-center border-r pr-4
                              border-gray-100 dark:border-dark-border"
              >
                <div
                  className="p-4 rounded-full border shadow-inner mb-2
                                bg-white border-gray-100
                                dark:bg-dark-surface-2 dark:border-dark-border-soft"
                >
                  <GraduationCap size={32} className="text-mint-500" />
                </div>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full
                                 text-blue-600 bg-blue-50
                                 dark:text-blue-300 dark:bg-blue-900/30"
                >
                  {edu.period}
                </span>
              </div>

              {/* Right: Details */}
              <div className="md:col-span-3 space-y-3">
                <div>
                  <h3
                    className="text-base font-bold
                                 text-gray-800 dark:text-dark-text"
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-xs flex items-center gap-1
                                text-gray-500 dark:text-dark-text-muted"
                  >
                    {edu.location}
                  </p>
                </div>

                {edu.grade && (
                  <div className="flex items-center gap-2">
                    <Award
                      size={14}
                      className="text-yellow-600 dark:text-yellow-400"
                    />
                    <span
                      className="text-xs font-semibold
                                     text-gray-700 dark:text-dark-text"
                    >
                      GPA: {edu.grade}
                    </span>
                  </div>
                )}

                <ul className="space-y-1">
                  {edu.details?.map((detail, i) => (
                    <li
                      key={i}
                      className="text-xs flex items-start gap-2 italic
                                 text-gray-600 dark:text-dark-text-muted"
                    >
                      <span className="text-mint-500">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
