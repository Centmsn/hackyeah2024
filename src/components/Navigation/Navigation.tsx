import { useState } from "react";
import "./Navigation.css";

export const Navigation = () => {
  const [navItems] = useState([
    "TWOJA KARTA",
    "ŚCIEŻKI ROZWOJU",
    "TWOJE LEKCJE",
  ]);

  return (
    <nav className="nav">
      <ul className="navList">
        {navItems.map((item) => (
          <li key={item} className="navItem">
            <div className="arrow">arrow</div>
            <div className="nav-link">{item}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
