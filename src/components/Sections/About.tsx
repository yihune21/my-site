import React, { useState, useEffect } from "react";
import { FileText, Download } from "lucide-react";

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

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const About: React.FC = () => {
  const words = [
    "Python",
    "Java",
    "Golang",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Django",
    "Odoo"
  ];
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && typedText === currentWord) {
      // Wait 3 seconds before deleting
      const pauseTimer = setTimeout(() => setIsDeleting(true), 3000);
      return () => clearTimeout(pauseTimer);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      const pauseTimer = setTimeout(() => {}, 500);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <div className="py-6 sm:px-2 md:px-0 animate-fade-in">
      <h2
        className="flex items-center gap-2 font-bold mb-4 border-b pb-2
                     text-gray-700 border-gray-100
                     dark:text-dark-text dark:border-dark-border-soft"
      >
        <FileText size={18} className="text-mint-500" /> About_Me.txt
      </h2>
      <div
        className="border p-6 font-mono text-sm rounded shadow-inner leading-relaxed
                      bg-[#f9f9f9] border-gray-200 text-gray-800
                      dark:bg-dark-surface-2 dark:border-dark-border-soft dark:text-dark-text"
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          I'm Yihune Zewdie
        </h1>
        <h2 className="text-lg sm:text-xl text-mint-500 mb-6 font-semibold">
          Software Engineer
        </h2>

        <p className="mb-4 text-base sm:text-lg">
          Passionate Software Engineer with expertise in full-stack development,
          specializing in{" "}
          <span className="text-mint-600 dark:text-mint-400 font-bold min-h-[1.5rem] inline-block">
            {typedText}
          </span>
          <span className="animate-pulse font-bold text-mint-600 dark:text-mint-400">
            |
          </span>
        </p>
        <p className="mb-8 text-base sm:text-lg text-gray-600 dark:text-dark-text-muted">
          Bachelor's degree in Software Engineering while gaining hands-on
          experience in enterprise solutions.
        </p>

        <div className="flex flex-wrap gap-4 mt-6 border-t pt-6 border-gray-200 dark:border-dark-border-soft">
          <a
            href="https://github.com/yihune21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md transition-all font-sans font-medium text-sm
                       bg-gray-200 hover:bg-gray-300 text-gray-800
                       dark:bg-dark-surface dark:hover:bg-dark-hover dark:border dark:border-dark-border-soft dark:text-dark-text"
          >
            <GithubIcon size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yihune-zewdie-23a766258/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md transition-all font-sans font-medium text-sm
                       bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300
                       dark:bg-dark-surface dark:hover:bg-dark-hover dark:border-dark-border-soft dark:text-zinc-300"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>
          <a
            href="src/assets/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-md transition-all font-sans font-medium text-sm shadow-sm
                       bg-mint-500 hover:bg-mint-600 text-white hover:shadow-md
                       dark:bg-mint-600 dark:hover:bg-mint-500 dark:shadow-none"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
