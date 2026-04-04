import React, { useState, useEffect } from "react";
import { Monitor, Cpu, Wifi, Volume2, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Header: React.FC = () => {
  const { isDark, toggleDark } = useTheme();

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="h-10 bg-nemo-panel flex items-center justify-between px-4 z-50 shadow-md">
      {/* Left: App menu */}
      <div className="flex items-center gap-4 text-gray-300 text-sm font-medium">
        <div className="bg-mint-500 p-1.5 rounded hover:bg-mint-600 cursor-pointer transition-colors">
          <Monitor size={16} className="text-white" />
        </div>
        <button className="hover:text-white hover:bg-gray-800 px-2 py-1 rounded transition-all">
          Menu
        </button>
        <div className="h-4 w-[1px] bg-gray-700" />
        <span className="text-xs opacity-70 italic">~/portfolio/main</span>
      </div>

      {/* Right: System tray */}
      <div className="flex items-center gap-4 text-gray-400">
        <div className="flex gap-3 items-center border-r border-gray-700 pr-4">
          <Wifi size={14} />
          <Volume2 size={14} />
          <Cpu size={14} />
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className={`p-1 rounded transition-all hover:scale-110 ${
            isDark
              ? "text-yellow-300 hover:text-yellow-100"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <span className="text-xs font-mono text-gray-300">{currentTime}</span>
      </div>
    </nav>
  );
};

export default Header;
