import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Code, GraduationCap, Briefcase, Cpu, Mail } from "lucide-react";

interface NavItemDef {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItemDef[] = [
  { to: "/", icon: <Home size={16} />, label: "Computer" },
  { to: "/about", icon: <User size={16} />, label: "About_Me" },
  { to: "/projects", icon: <Code size={16} />, label: "Projects" },
  { to: "/education", icon: <GraduationCap size={16} />, label: "Education" },
  { to: "/experience", icon: <Briefcase size={16} />, label: "Experience" },
  { to: "/skills", icon: <Cpu size={16} />, label: "Skills" },
  { to: "/contact", icon: <Mail size={16} />, label: "Contact_Us" },
];

const Sidebar: React.FC = () => {
  return (
    <aside
      className="w-56 border-r hidden md:flex flex-col p-4
                      bg-nemo-sidebar border-nemo-border
                      dark:bg-dark-sidebar dark:border-dark-border"
    >
      <p
        className="text-[10px] font-bold uppercase mb-4 tracking-widest
                    text-gray-400 dark:text-dark-text-muted"
      >
        Places
      </p>
      <ul className="space-y-1">
        {navItems.map(({ to, icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-1.5 rounded-md cursor-pointer text-sm transition-all
                ${
                  isActive
                    ? "bg-mint-600  text-white shadow-inner dark:bg-dark-active"
                    : "text-gray-700 hover:bg-gray-200 dark:text-dark-text dark:hover:bg-dark-hover"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-white" : "text-mint-500"}>
                    {icon}
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
