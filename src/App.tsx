import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Layout/Header";
import Sidebar from "./components/FileSystem/SideBar";
import FolderIcon from "./components/FileSystem/FolderIcon";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Project";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Education";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const pathLabels: Record<string, string> = {
  "/": "home / user / portfolio",
  "/about": "home / user / about_me",
  "/projects": "home / user / projects",
  "/experience": "home / user / experience",
  "/education": "home / user / education",
};

const HomeView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
        <FolderIcon
          name="About_Me"
          itemCount={1}
          onClick={() => navigate("/about")}
        />
        <FolderIcon
          name="Projects"
          itemCount={3}
          onClick={() => navigate("/projects")}
        />
        <FolderIcon
          name="Experience"
          itemCount={2}
          onClick={() => navigate("/experience")}
        />
        <FolderIcon
          name="Education"
          itemCount={2}
          onClick={() => navigate("/education")}
        />
      </div>
      <About />
    </div>
  );
};

const App: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const pathLabel = pathLabels[location.pathname] ?? "home / user / portfolio";

  return (
    <div
      className={`flex flex-col h-screen overflow-hidden ${isDark ? "dark" : ""}`}
    >
      <Header />

      <main
        className="flex-1 flex m-2 rounded shadow-2xl overflow-hidden
                        bg-white border border-nemo-border
                        dark:bg-dark-bg dark:border-dark-border"
      >
        <Sidebar />

        <section className="flex-1 flex flex-col min-w-0">
          {/* Toolbar */}
          <div
            className="h-12 border-b flex items-center px-4 gap-4
                          border-nemo-border bg-white
                          dark:border-dark-border dark:bg-dark-surface"
          >
            <div className="flex gap-2 text-gray-400 dark:text-dark-text-muted">
              <button
                onClick={() => navigate(-1)}
                className="hover:text-gray-700 dark:hover:text-dark-text transition-colors"
                aria-label="Go back"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="hover:text-gray-700 dark:hover:text-dark-text transition-colors"
                aria-label="Go forward"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div
              className="flex-1 border rounded px-3 py-1 text-xs flex items-center gap-2
                            bg-gray-50 border-gray-200 text-gray-600
                            dark:bg-dark-surface-2 dark:border-dark-border-soft dark:text-dark-text-muted"
            >
              <Home size={14} className="text-mint-500" />
              <span>/{pathLabel}</span>
            </div>
          </div>

          {/* Routed Content */}
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route
              path="/about"
              element={
                <div className="flex-1 overflow-y-auto p-8">
                  <About />
                </div>
              }
            />
            <Route
              path="/projects"
              element={
                <div className="flex-1 overflow-y-auto p-8">
                  <Projects />
                </div>
              }
            />
            <Route
              path="/experience"
              element={
                <div className="flex-1 overflow-y-auto p-8">
                  <Experience />
                </div>
              }
            />
            <Route
              path="/education"
              element={
                <div className="flex-1 overflow-y-auto p-8">
                  <Education />
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </section>
      </main>

      <footer
        className="h-7 border-t flex items-center px-4 text-[11px] justify-between
                         bg-[#f0f0f0] border-nemo-border text-gray-500
                         dark:bg-dark-surface-2 dark:border-dark-border dark:text-dark-text-muted"
      >
        <span>+251-931998883</span>
        <span className="font-semibold text-mint-600 tracking-tighter">
          yihunezewdie23@gmail.com
        </span>
      </footer>
    </div>
  );
};

export default App;
