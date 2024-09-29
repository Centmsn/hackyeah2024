import "./Navigation.css";
import logo from "/logo-apki.png";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Navigation = () => {
  const navItems = [
    { name: "Twoja karta", path: "/" },
    { name: "Ścieżki rozwoju", path: "/tree" },
    { name: "Twoje lekcje", path: "/learning" },
  ];

  return (
    <nav className="px-32 nav flex">
      <img src={logo} className="w-12 h-12 mr-12" alt="logo" />
      <ul className="flex gap-12 items-center">
        {navItems.map((item) => {
          return (
            <>
              <div className="flex gap-2">
                <ChevronRight className="w-8 h-8 text-blue-custom" />
                <li className="flex items-center  h-8 text-nowrap">
                  <NavLink
                    className={({ isActive }) => {
                      const textColor = isActive
                        ? "text-blue-custom"
                        : "text-black";

                      return `${textColor} flex uppercase items-center justify-center h-full w-full`;
                    }}
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              </div>
            </>
          );
        })}
      </ul>
    </nav>
  );
};
